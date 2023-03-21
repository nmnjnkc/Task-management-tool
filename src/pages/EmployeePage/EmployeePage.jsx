import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';
import ApplicationContext from '../../ApplicationContext';
import SearchError from '../../components/SearchError/SearchError';
import "./EmployeePage.scss"


const EmployeePage = () => {

  const {employees} = useContext(ApplicationContext);

  let { employeeId } = useParams();

  const currentEmp = employees?.find((employee) => employee?.id == employeeId);
  

  const showDate = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  
  if (!currentEmp) {
    return (
    <SearchError errorClass={"error-view"} message={"There's no such Employee."} />
    );
  }

  return (
    <div className="showing-page">
      
        <h3>{currentEmp?.fullName}'s  information</h3>

        <span> Date of Birth: {new Date(currentEmp?.dateOfBirth)?.toLocaleDateString('en-US', showDate)} </span>
        <span> Employee's Phonenumber: {currentEmp?.phoneNumber} </span>
        <span> Employee's email: {currentEmp?.email} </span>
        <span> Employee's departmant: {currentEmp?.department} </span>
        <span> Employee's monthly salary: {currentEmp?.monthlySalary} BGN </span>
    </div>
  )
}

export default EmployeePage