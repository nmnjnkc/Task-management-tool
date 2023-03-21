import React, {useContext} from 'react'
import { useParams } from 'react-router';
import ApplicationContext from '../../ApplicationContext';
import SearchError from '../../components/SearchError/SearchError';

const DepartmentPage = () => {

  const {departments, employees} = useContext(ApplicationContext);

  let { departmentId } = useParams();

  const currentDep = departments?.find((department) => department.id == departmentId)

  const depEmployees = employees?.filter(emp => emp?.department?.toLowerCase() === currentDep?.department?.toLowerCase())

  const showDate = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };



  if (!currentDep) {
    return (
    <SearchError errorClass={"error-view"} message={"There's no such Employee."} />
    );
  }

  return (
    <div className="showing-page">
      <h3>{currentDep?.department}</h3>
      <span>Department created: {new Date(currentDep?.dateCreated)?.toLocaleDateString('en-US', showDate)}</span>
      <h4>Employees who work in this department:</h4>
        {depEmployees?.map((emp) => {
          return <span>{emp?.fullName}</span>
        })}
      
    </div>
  )
}

export default DepartmentPage