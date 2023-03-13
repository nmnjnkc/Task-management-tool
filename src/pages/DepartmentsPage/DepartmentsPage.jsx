import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import ApplicationContext from '../../ApplicationContext'
import "./DepartmentsPage.scss"
import Card from '../../components/Card/Card'
import  Search  from "../../components/Search/Search"
import SearchError from '../../components/SearchError/SearchError'
import Statistic from '../../components/Statistic/Statistic'
import Button from '../../components/Button/Button'




const DepartmentsPage = () => {

    const {departments, setDepUpdate} = useContext(ApplicationContext)
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

      const searchedDepartments = departments?.filter((department) =>
      department?.department?.toLowerCase().includes(searchRes)
    );

    const navigate = useNavigate();

    const navigateToPage = () => {
      navigate("/create-new-department");
    }

  return (
    <div className='main-page-wrapper'>
    <div className='page-wrapper'>
      <h2>All Departments</h2>
      <div className="btnAndSrch">
      <Button name={"Cereate Department"} method={navigateToPage}/>
        <Search 
        serach={"departments"}
        method={setSearchRes}/>
        </div>
        <div className='landing'>
            {searchedDepartments?.map((department, key) => {
        return <Card
            setClass={"departmentsCard"}
            title={department?.department}
            linkTo={`/edit-department/${department?.id}`}
            link={`/department/${department?.id}`} 
            id={department?.id}
            // method={} 
            key = {key}
            methodDel={deleteDepartment}
        /> })}
      {(searchedDepartments.length === 0) && (searchRes.length !== 0) && 
      <SearchError message = {"There's no Department with that name in the database."}/>}
    </div>
  </div>
   <Statistic  page={"Departments"}/>
  </div>
  )
}

export default DepartmentsPage