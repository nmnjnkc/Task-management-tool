import React, {useContext} from 'react'
import { useParams } from 'react-router';
import ApplicationContext from '../../ApplicationContext';

const DepartmentPage = () => {

  const {departments, activeDep} = useContext(ApplicationContext);

  let { departmentId } = useParams();

  const currentDep = departments.find((department) => department.id == departmentId)

  return (
    <div>{currentDep?.department}</div>
  )
}

export default DepartmentPage