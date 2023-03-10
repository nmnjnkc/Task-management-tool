import React, {useState, useContext} from 'react'
import ApplicationContext from '../../ApplicationContext';
import TheDatePicker from '../../components/DatePicker/DatePicker'
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';

const CreateEmployeePage = () => {

  const {setEmpUpdate, departments } = useContext(ApplicationContext);

  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [monthlySalary, setMonthlySalary] = useState(0)
  const [adding, setAdding] = useState(false);


  function submitForm(event) {

    event.preventDefault();

    const employee = { fullName, dateOfBirth, phoneNumber, email, department, monthlySalary };

    fetch("https://640b1ad481d8a32198d9d28b.mockapi.io/Employee", {
      method: "POST",
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
      
      <h3>Add new employee:</h3>
      
      <Input
        label= {"Name:"}
        placeholder={"First and Last name"}
        required = {true}
        value={fullName}
        method={setFullName}
      />

      
      <TheDatePicker 
       label={"Date of birth:"}
       startDate={dateOfBirth}
       setStartDate={setDateOfBirth} 
      />

      <Input
        label= {"Phone Number:"}
        placeholder={"Phone Number"}
        required = {true}
        value={phoneNumber}
        method={setPhoneNumber}
      />

      <Input
        label= {"Email:"}
        type={"email"}
        placeholder={"Email"}
        required = {true}
        value={email}
        method={setEmail}
      />
      
      {/* <Input
        label= {"Department:"}
        placeholder={"Department"}
        required = {true}
        value={department}
        method={setDepartment}/> 
      */}

      <Select
        label={"Department"}
        required = {true}
        name = {department}
        arrayy={departments}
        method = {setDepartment}
      />

      <Input
        label= {"Monthly Salary:"}
        type={"number"}
        placeholder={"Department"}
        required = {true}
        value={monthlySalary}
        method={setMonthlySalary}
      />


      {!adding && <button>Submit</button>}
      {adding && <button disabled>Submit</button>}
    </form>
  );
};

export default CreateEmployeePage