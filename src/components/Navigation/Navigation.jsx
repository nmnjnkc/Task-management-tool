import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.scss"

const Navigation = () => {
  return (
    
    <nav>
      <Link to="/">
      <div>Employees</div>
      </Link>
      <Link to="/tasks">
      <div>Tasks</div>
      </Link>
      <Link to="/departments">
      <div>Departments</div>
      </Link>
      

    </nav>
  )
}

export default Navigation