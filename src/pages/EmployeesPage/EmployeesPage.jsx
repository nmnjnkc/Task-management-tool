import React, {useContext, useState} from 'react'
import ApplicationContext from '../../ApplicationContext'
import "./EmployeesPage.scss"
import Card from '../../components/Card/Card'
import  Search  from "../../components/Search/Search"
import SearchError from '../../components/SearchError/SearchError'


const EmployeesPage = () => {
  
  const {employees, setEmpUpdate} = useContext(ApplicationContext)
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
      <Search method={setSearchRes}/>
      <div className='landing'>
      {searchedEmployees.map((emp, key) => {
        return <Card
        setClass={"employeesCard"}
        title={emp.fullName}
        linkTo={`/edit-employee/${emp?.id}`}
        link={`/employee/${emp.id}`} 
        id={emp.id}
        avatar={"http://clipart-library.com/images/rinrAe7BT.jpg"}
        // method={} 
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