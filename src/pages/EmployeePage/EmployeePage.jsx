import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ApplicationContext from '../../ApplicationContext';
import SearchError from '../../components/SearchError/SearchError';
import "./EmployeePage.scss"


const EmployeePage = () => {

  const {employees} = useContext(ApplicationContext);
  const [showError, setShowError] = useState(false);

  let { employeeId } = useParams();

  const currentEmp = employees?.find((employee) => employee?.id == employeeId);
  const allEmployees = employees?.map(emp => emp?.id)
  const noEmp = allEmployees?.some(id => id == employeeId) 

  const showDate = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  useEffect(() => {
    let timeoutId;
    if (noEmp === false) {
      timeoutId = setTimeout(() => {
        setShowError(true);
      }, 600); 
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [noEmp]);

  return (
    <div className="showing-page">
      
        <h3>{currentEmp?.fullName}'s  information</h3>

        <span>
          Date of Birth: {new Date(currentEmp?.dateOfBirth)?.toLocaleDateString('en-US', showDate)} 
        </span>
        <span>
          Employee's Phonenumber: {currentEmp?.phoneNumber}
        </span>
        <span>
          Employee's email: {currentEmp?.email}
        </span>
        <span>
          Employee's departmant: {currentEmp?.department}
        </span>
        <span>
          Employee's monthly salary: {currentEmp?.monthlySalary} BGN
        </span>



        {showError && <SearchError message={"There's no such Employee."}/>}

    </div>
  )
}

export default EmployeePage