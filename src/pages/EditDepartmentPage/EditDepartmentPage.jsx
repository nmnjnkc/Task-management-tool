import React, {useState, useContext} from 'react'
import { useParams } from 'react-router';
import ApplicationContext from '../../ApplicationContext';
import Input from '../../components/Input/Input';
import TheDatePicker from '../../components/DatePicker/DatePicker'

const EditDepartmentPage = () => {


  const {departmentId} = useParams();
  const {setDepUpdate, adding, setAdding, departments} = useContext(ApplicationContext)  

  const currentDep = departments?.find(dep => dep.id == departmentId)

  
  const [department, setDepartment] = useState(currentDep?.department);
  const [dateCreated, setDateCreated] = useState(currentDep?.dateCreated);
  
  function submitForm(event) {
    
    event.preventDefault();
    
    const dep = { department, dateCreated };
    
    fetch(`https://640c5491a3e07380e8f1d0c3.mockapi.io/Departments/${currentDep?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dep),
    }).then(() => {
      setDepUpdate(false);
    });
    
    setAdding(true);
  }
  
  console.log(department);
  console.log(currentDep);
  
  
  return (
    <form className=""  onSubmit={submitForm}
    >

      
      <h3>Edit {currentDep?.department}  Department:</h3>
    
      
      <Input
        label= {"Edit Departmant Name:"}
        placeholder={currentDep?.department}
        value={department}
        method={setDepartment}
      />

      
      <TheDatePicker 
       label={"Edit Date Created:"}
       startDate={dateCreated}
       setStartDate={setDateCreated} 
      />

      {!adding && <button>Submit</button>}
      {adding && <button disabled>Submit</button>}

    </form>
  )
}

export default EditDepartmentPage