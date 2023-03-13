import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router';
import ApplicationContext from '../../ApplicationContext';
import SearchError from '../../components/SearchError/SearchError';

const DepartmentPage = () => {

  const {departments} = useContext(ApplicationContext);
  const [showError, setShowError] = useState(false);


  let { departmentId } = useParams();

  const allDepartmentsIds = departments?.map(dep => dep.id)
  const currentDep = departments?.find((department) => department.id == departmentId)
  const noDep = allDepartmentsIds?.some(id => id == departmentId)

  const showDate = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  useEffect(() => {
    let timeoutId;
    if (noDep === false) {
      timeoutId = setTimeout(() => {
        setShowError(true);
      }, 600); 
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [noDep]);

  return (
    <div className="showing-page">
      <h3>{currentDep?.department}</h3>
      <span>Department created: {new Date(currentDep?.dateCreated)?.toLocaleDateString('en-US', showDate)}</span>

      {showError && <SearchError message={"There's no such Department."}/>}
      
    </div>
  )
}

export default DepartmentPage