import React, {useContext, useState} from 'react'
import ApplicationContext from '../../ApplicationContext'
import "./DepartmentsPage.scss"
import Card from '../../components/Ccard/Card'
import  Search  from "../../components/Search/Search"
import SearchError from '../../components/SearchError/SearchError'


const DepartmentsPage = () => {

    const {departments, setActiveDep, setDepUpdate} = useContext(ApplicationContext)
    const [searchRes, setSearchRes] = useState("");

    const deleteDepartment = (id) => {
        fetch(`https://640c5491a3e07380e8f1d0c3.mockapi.io/Departments/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            setDepUpdate(false);
          })
      };

      const searchedDepartments = departments.filter((department) =>
      department.department.toLowerCase().includes(searchRes)
    );

  return (
    <div className='landing-wrapper'>
        <Search onChange={setSearchRes}/>
        <div className='landing'>
            {searchedDepartments.map((department, key) => {
        return <Card
            title={department.department}
            link={`/department/${department.id}`} 
            id={department.id}
            method={setActiveDep} 
            key = {key}
            methodDel={deleteDepartment}
        /> })}
      {(searchedDepartments.length === 0) && (searchRes.length !== 0) && 
      <SearchError message = {"There's no Department with that name in the database."}/>}
    </div>
  </div>
  )
}

export default DepartmentsPage