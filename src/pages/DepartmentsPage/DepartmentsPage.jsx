import React, {useContext, useState} from 'react'
import ApplicationContext from '../../ApplicationContext'
import "./DepartmentsPage.scss"
import CardWrapper from '../../components/CardWrapper/CardWrapper'
import Statistic from '../../components/Statistic/Statistic'




const DepartmentsPage = () => {

    const {departments, setDepUpdate} = useContext(ApplicationContext)

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

    //   const searchedDepartments = departments?.filter((department) =>
    //   department?.department?.toLowerCase().includes(searchRes)
    // );

 
  return (
    <div className='main-page-wrapper'>

    <div className='page-wrapper'>
      <h2>All Tasks</h2>
      <CardWrapper 
      createPage={"/create-new-department"} 
      surchArray={departments} 
      deleteEmployee={deleteDepartment}
      setClass={"departmentsCard"}
      searchKey={"department"}
      edit={"edit-department"}
      path={"department"}
      />

    </div>
   {/* <Statistic  page={"Departments"}/> */}
  </div>
  )
}

export default DepartmentsPage