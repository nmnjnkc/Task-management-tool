import React, {useContext, useState} from 'react'
import ApplicationContext from '../../ApplicationContext'
import "./EmployeesPage.scss"
import Card from '../../components/Ccard/Card'
import  Search  from "../../components/Search/Search"
import SearchError from '../../components/SearchError/SearchError'


const EmployeesPage = () => {
  
  const {employees, setActiveEmployee, setEmpUpdate} = useContext(ApplicationContext)
  const [searchRes, setSearchRes] = useState("");
  

  const deleteEmployee = (id) => {
    fetch(`https://640b1ad481d8a32198d9d28b.mockapi.io/Employee/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setEmpUpdate(false);
      })
  };


  const searchedEmployees = employees.filter((employee) =>
    employee.fullName.toLowerCase().includes(searchRes)
  );

  return (
    <div className='landing-wrapper'>
      <Search onChange={setSearchRes}/>
      <div className='landing'>
      {searchedEmployees.map((emp, key) => {
        return <Card
        title={emp.fullName}
        link={`/employee/${emp.id}`} 
        id={emp.id}
        method={setActiveEmployee} 
        key = {key}
        methodDel={deleteEmployee}
        /> })}
        {(searchedEmployees.length === 0) && (searchRes.length !== 0) && 
        <SearchError message = {"There's no employee with that name in the database."}/>}
      </div>
    </div>
  )
}

export default EmployeesPage