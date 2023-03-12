import React, {useState, useContext, useEffect} from 'react'
import { useParams } from 'react-router';
import ApplicationContext from '../../ApplicationContext';
import Input from '../../components/Input/Input';
import TheDatePicker from '../../components/DatePicker/DatePicker'
import SearchError from '../../components/SearchError/SearchError';

const EditDepartmentPage = () => {


  const {departmentId} = useParams();
  const {setDepUpdate, adding, setAdding, departments} = useContext(ApplicationContext)  

  const currentDep = departments?.find(dep => dep.id == departmentId)

  const allDepartmentsIds = departments?.map(dep => dep.id)
  const [department, setDepartment] = useState(currentDep?.department);
  const [dateCreated, setDateCreated] = useState(currentDep?.dateCreated);
  const [showError, setShowError] = useState(false);
  const noDep = allDepartmentsIds?.some(id => id == departmentId)


  
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
    
  
    useEffect(() => {
      let timeoutId;
      if (noDep === false) {
        timeoutId = setTimeout(() => {
          setShowError(true);
        }, 250); 
      }
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [noDep]);


  return (
  <div>
   {!showError && <form className=""  onSubmit={submitForm}>

      <h3>Edit {currentDep?.department}  Department:</h3>
    
      <Input
        label= {"Edit Departmant Name:"}
        placeholder={currentDep?.department}
        value={department}
        method={setDepartment}
      />

      
      <TheDatePicker 
       label={"Edit Date Created:"}
       placeholder={currentDep?.dateCreated}
       startDate={dateCreated}
       setStartDate={setDateCreated} 
      />

      {!adding && <button>Submit</button>}
      {adding && <button disabled>Submit</button>}

    </form>}

    {showError && <SearchError message={"There's no such Department to Edit."}/>}
    </div>
  )
}

export default EditDepartmentPage