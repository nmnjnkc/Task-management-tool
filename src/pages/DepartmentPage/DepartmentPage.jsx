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
      <h3>{currentDep?.department}</h3>

      {showError && <SearchError message={"There's no such Department."}/>}
      
    </div>
  )
}

export default DepartmentPage