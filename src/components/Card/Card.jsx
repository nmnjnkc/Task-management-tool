import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import ApplicationContext from '../../ApplicationContext'

const Card = (employee) => {
  
const {setActiveEmployee} = useContext(ApplicationContext)

  return (
    <div onClick={() => {setActiveEmployee(employee.employee)} }>
      <Link to={`/employee/${employee.employee.id}`} >   
        <h3>{employee.employee.fullName}</h3>
       {/* <p>{employee}</p> */}
      </Link>

    </div>
  )
}

export default Card