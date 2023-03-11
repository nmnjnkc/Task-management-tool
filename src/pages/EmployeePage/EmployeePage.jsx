import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ApplicationContext from '../../ApplicationContext';
import SearchError from '../../components/SearchError/SearchError';


const EmployeePage = () => {

  const {employees, activeEmployee} = useContext(ApplicationContext);
  const [showError, setShowError] = useState(false);

  let { employeeId } = useParams();

  const currentEmp = employees.find((employee) => employee.id == employeeId);
  const allEmployees = employees?.map(emp => emp.id)
  const noEmp = allEmployees?.some(id => id == employeeId)

  useEffect(() => {
    let timeoutId;
    if (noEmp === false) {
      timeoutId = setTimeout(() => {
        setShowError(true);
      }, 250); 
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [noEmp]);

  console.log(noEmp);

  return (
    <div>
      
        <h3>{currentEmp?.fullName}</h3>

        {showError && <SearchError message={"There's no such Employee."}/>}

    </div>
  )
}

export default EmployeePage