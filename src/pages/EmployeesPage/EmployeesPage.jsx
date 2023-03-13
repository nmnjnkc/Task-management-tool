import React, {useContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ApplicationContext from '../../ApplicationContext'
import "./EmployeesPage.scss"
import Card from '../../components/Card/Card'
import  Search  from "../../components/Search/Search"
import SearchError from '../../components/SearchError/SearchError'
import Statistic from '../../components/Statistic/Statistic'
import Button from '../../components/Button/Button'


const EmployeesPage = () => {
  
  const {employees, setEmpUpdate, tasks, empUpdate} = useContext(ApplicationContext)
  const [searchRes, setSearchRes] = useState("");
  const [topEmployees, setTopEmployees] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const pastMonth = new Date();
    pastMonth?.setMonth(currentDate?.getMonth() - 1);
    
    const tasksPastM = tasks?.filter(task => new Date(task?.dateAssigned) > pastMonth);

    const tasksCompletedEmp = {};

    tasksPastM?.map(task => {
      if (tasksCompletedEmp[task?.assagnee]) {
        tasksCompletedEmp[task?.assagnee]++;
      } else {
        tasksCompletedEmp[task?.assagnee] = 1;
      }
    });

    const empTasksArray = [];
    employees?.map(emp => {
      const tasksCompleted = tasksCompletedEmp[emp?.fullName?.toLowerCase()] || 0;
      empTasksArray?.push({ employeeName: emp?.fullName?.toLowerCase(), tasksCompleted });
    });

    empTasksArray?.sort((a, b) => b?.tasksCompleted - a?.tasksCompleted);

    setTopEmployees(empTasksArray?.slice(0, 5));
  }, [empUpdate]);


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

  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate("/create-new-employee");
  }

  return (

    <div className='main-page-wrapper'> 

      <div className='page-wrapper'>
        <h2>All Employees</h2>
<div className="btnAndSrch">
      <Button name={"Cereate Employee"} method={navigateToPage}/>
      <Search 
      
      serach={"employees"}
       method={setSearchRes}/>
</div>
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
     <Statistic  page={"Employees"} name={"Top 5 Employees:"} statisticArray={topEmployees} />
    </div>

  )
}

export default EmployeesPage