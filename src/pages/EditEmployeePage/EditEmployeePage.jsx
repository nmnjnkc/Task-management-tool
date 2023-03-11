import React, {useState, useContext} from 'react'
import { useParams } from 'react-router';
import ApplicationContext from '../../ApplicationContext';
import Input from '../../components/Input/Input';
import TheDatePicker from '../../components/DatePicker/DatePicker'
import Select from '../../components/Select/Select';

const EditEmployeePage = () => {

  const {employeeId} = useParams();
  const {setEmpUpdate,employees, departments, adding, setAdding } = useContext(ApplicationContext);

  const currentEmp = employees?.find(emp => emp.id == employeeId)

  const [fullName, setFullName] = useState(currentEmp?.fullName);
  const [dateOfBirth, setDateOfBirth] = useState(currentEmp?.dateOfBirth);
  const [phoneNumber, setPhoneNumber] = useState(currentEmp?.phoneNumber);
  const [email, setEmail] = useState(currentEmp?.email);
  const [department, setDepartment] = useState(currentEmp?.department);
  const [monthlySalary, setMonthlySalary] = useState(currentEmp?.monthlySalary);

  const allDepartments = departments?.map(department => department.department)

  function submitForm(event) {

    event.preventDefault();

    const employee = { fullName, dateOfBirth, phoneNumber, email, department, monthlySalary };

    fetch(`https://640b1ad481d8a32198d9d28b.mockapi.io/Employee/${currentEmp?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    }).then(() => {
      setEmpUpdate(false);
    });

    setAdding(true);
  }
  return (
    <form className="" onSubmit={submitForm}>
      
       <h3>Edit {currentEmp?.fullName} Employee:</h3>
      
      <Input
        label= {"Edit Name:"}
        placeholder={currentEmp?.fullName}
        value={fullName}
        method={setFullName}
      />

      
      <TheDatePicker 
       label={"Edit Date of Birth:"}
       startDate={dateOfBirth}
       setStartDate={setDateOfBirth} 
      />

      <Input
        label= {"Edit Phone Number:"}
        placeholder={currentEmp?.phoneNumber}
        value={phoneNumber}
        method={setPhoneNumber}
      />

      <Input
        label= {"Edit Email:"}
        type={"email"}
        placeholder={currentEmp?.email}
        value={email}
        method={setEmail}
      />

      <Select
        label={"Edit Department"}
        name = {department}
        arrayy={allDepartments}
        method = {setDepartment}
      />

      <Input
        label= {"Edit Monthly Salary:"}
        type={"number"}
        placeholder={currentEmp?.monthlySalary}
        value={monthlySalary}
        method={setMonthlySalary}
      />


      {!adding && <button>Submit</button>}
      {adding && <button disabled>Submit</button>}
    </form>
  )
}

export default EditEmployeePage