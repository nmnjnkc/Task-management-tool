import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';
import ApplicationContext from '../../ApplicationContext';

const EmployeePage = () => {

  const {employees, activeEmpolyee} = useContext(ApplicationContext);
  let { employeeId } = useParams();

  const currentEmp = employees.find((employee) => employee.id == employeeId);
console.log(activeEmpolyee);

  return (
    <div>
      
        <h3>{currentEmp.fullName}</h3>

    </div>
  )
}

export default EmployeePage