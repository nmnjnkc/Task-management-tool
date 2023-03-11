import React, {useState, useContext} from 'react'
import ApplicationContext from '../../ApplicationContext';
import Input from '../../components/Input/Input';
import TheDatePicker from '../../components/DatePicker/DatePicker'


const CreateDepartmentPage = () => {

  const {setDepUpdate, adding, setAdding } = useContext(ApplicationContext);

  const [department, setDepartment] = useState("");
  const [dateCreated, setDateCreated] = useState(new Date());

  function submitForm(event) {

    event.preventDefault();

    const dep = { department, dateCreated };

    fetch("https://640c5491a3e07380e8f1d0c3.mockapi.io/Departments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dep),
    }).then(() => {
      setDepUpdate(false);
    });

    setAdding(true);
  }

  return (
    <form className="" onSubmit={submitForm}>
      
      <h3>Add new Department:</h3>
      
      <Input
        label= {"Name of the new Departmant:"}
        placeholder={"Departmant Name"}
        required = {true}
        value={department}
        method={setDepartment}
      />

      
      <TheDatePicker 
       label={"Date of birth:"}
       startDate={dateCreated}
       setStartDate={setDateCreated} 
      />

      {!adding && <button>Submit</button>}
      {adding && <button disabled>Submit</button>}

    </form>
  )
}

export default CreateDepartmentPage