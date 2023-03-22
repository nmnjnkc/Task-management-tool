import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import ApplicationContext from "../../ApplicationContext";
import Input from "../../components/Input/Input";
import TheDatePicker from "../../components/DatePicker/DatePicker";
import Select from "../../components/Select/Select";
import SearchError from "../../components/SearchError/SearchError";

const EditEmployeePage = () => {
  const { employeeId } = useParams();
  const navigate = useNavigate();

  const { setEmpUpdate, employees, departments } =
    useContext(ApplicationContext);

  const currentEmp = employees?.find((emp) => emp?.id == employeeId);

  const [fullName, setFullName] = useState(currentEmp?.fullName);
  const [dateOfBirth, setDateOfBirth] = useState(currentEmp?.dateOfBirth);
  const [phoneNumber, setPhoneNumber] = useState(currentEmp?.phoneNumber);
  const [email, setEmail] = useState(currentEmp?.email);
  const [department, setDepartment] = useState(currentEmp?.department);
  const [monthlySalary, setMonthlySalary] = useState(currentEmp?.monthlySalary);
  const [showError, setShowError] = useState(false);

  const allDepartments = departments?.map(
    (department) => department?.department
  );
  const allEmployees = employees?.map((emp) => emp.id);
  const noEmp = allEmployees?.some((id) => id == employeeId);

  function submitForm(event) {
    event.preventDefault();

    const employee = {
      fullName,
      dateOfBirth,
      phoneNumber,
      email,
      department,
      monthlySalary,
    };

    fetch(
      `https://640b1ad481d8a32198d9d28b.mockapi.io/Employee/${currentEmp?.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      }
    ).then(() => {
      setEmpUpdate(false);
      navigate("/");
    });
  }

  useEffect(() => {
    let timeoutId;
    if (noEmp === false) {
      timeoutId = setTimeout(() => {
        setShowError(true);
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [noEmp]);

  return (
    <div className="editForm">
      {!showError && (
        <form className="form" onSubmit={submitForm}>
          <h3>Edit {currentEmp?.fullName} Employee:</h3>

          <Input
            label={"Edit Name:"}
            placeholder={currentEmp?.fullName}
            value={fullName}
            method={setFullName}
          />

          <TheDatePicker
            label={"Edit Date of Birth:"}
            placeholder={currentEmp?.dateOfBirth}
            before={true}
            inputDate={dateOfBirth}
            onDateChange={setDateOfBirth}
          />

          <Input
            label={"Edit Phone Number:"}
            placeholder={currentEmp?.phoneNumber}
            value={phoneNumber}
            method={setPhoneNumber}
          />

          <Input
            label={"Edit Email:"}
            type={"email"}
            placeholder={currentEmp?.email}
            value={email}
            method={setEmail}
          />

          <Select
            label={"Edit Department"}
            placeholder={currentEmp?.department}
            name={department}
            makeArray={allDepartments}
            method={setDepartment}
          />

          <Input
            label={"Edit Monthly Salary:"}
            type={"number"}
            placeholder={currentEmp?.monthlySalary}
            value={monthlySalary}
            method={setMonthlySalary}
          />

          <button>Submit</button>
        </form>
      )}
      {showError && (
        <SearchError message={"There's no such Employee to Edit."} />
      )}
    </div>
  );
};

export default EditEmployeePage;
