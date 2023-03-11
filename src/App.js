import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import ApplicationContext from './ApplicationContext';
import './App.scss';

import ErrorPage from "./pages/ErrorPage/ErrorPage"
import EmployeesPage from "./pages/EmployeesPage/EmployeesPage";
import EmployeePage from "./pages/EmployeePage/EmployeePage"
import EditEmployeePage from './pages/EditEmployeePage/EditEmployeePage';
import CreateEmployeePage from "./pages/CreateEmployeePage/CreateEmployeePage"
import TasksPage from './pages/TasksPage/TasksPage';
import TaskPage from './pages/TaskPage/TaskPage';
import CreateTaskPage from './pages/CreateTaskPage/CreateTaskPage';
import EditTaskPage from './pages/EditTaskPage/EditTaskPage';
import DepartmentsPage from './pages/DepartmentsPage/DepartmentsPage';
import DepartmentPage from "./pages/DepartmentPage/DepartmentPage"
import CreateDepartmentPage from './pages/CreateDepartmentPage/CreateDepartmentPage';
import EditDepartmentPage from './pages/EditDepartmentPage/EditDepartmentPage';

import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"


function App() {

  const [employees, setEmployees] = useState([])
  const [tasks, setTasks] = useState([])
  const [departments, setDepartments] = useState([])

  const [empUpdate, setEmpUpdate] = useState(false)
  const [taskUpdate, setTaskUpdate] = useState(false)
  const [depUpdate, setDepUpdate] = useState(false)

  const [activeEmployee, setActiveEmployee] = useState(null);
  const [activeTask, setActiveTask]= useState(null)
  const [activeDep, setActiveDep]= useState(null)



  const [adding, setAdding] = useState(false);

  const theTaskDifficulty = ["Easy", "Medium", "Hard", "Extreme"]; 
  const theTaskStatus = ["ToDo", "Active", "Finished", "Blocked"];

  const url = new URL("https://640b1ad481d8a32198d9d28b.mockapi.io/Employee");
  url.searchParams.append('completed', false);
  url.searchParams.append('page', 1);
  url.searchParams.append('limit', 12);

  const employeesList = () => { 
    fetch ("https://640b1ad481d8a32198d9d28b.mockapi.io/Employee")
    .then((res) => res.json())
    .then((res) => {setEmployees(res);
      setEmpUpdate(true);
    })
  } 

  const taskList = () => {
    fetch ("https://640b1ad481d8a32198d9d28b.mockapi.io/Tasks")
    .then((res) => res.json())
    .then((res) => {setTasks(res);
      setTaskUpdate(true);
    })
  }

  const departmentList = () => {
    fetch ("https://640c5491a3e07380e8f1d0c3.mockapi.io/Departments")
    .then((res) => res.json())
    .then((res) => {setDepartments(res);
      setDepUpdate(true);
    })
  }

  useEffect(() => 
    { if(!empUpdate) 
    employeesList();
    }, [empUpdate]
  );

  useEffect(() => 
  { if(!taskUpdate) 
    taskList();
  }, [taskUpdate]
);

useEffect(() => 
    { if(!depUpdate) 
      departmentList();
    }, [depUpdate]
  );
// console.log(employees, tasks, departments);
 

    return (
      <ApplicationContext.Provider value={
        {employees, 
        tasks,
        departments, 
        setEmpUpdate, 
        setTaskUpdate, 
        setDepUpdate, 
        activeEmployee,
        setActiveEmployee, 
        empUpdate, 
        theTaskDifficulty, 
        theTaskStatus, 
        adding, 
        setAdding, 
      }}>
    <div>
      <Header/>
      <div className='main'>
      <Navigation/>
      <Routes>
        <Route path="/" element={<EmployeesPage/>}/>
        <Route path="/create-new-employee" element={<CreateEmployeePage/>}/>
        <Route path="/employee/:employeeId" element={<EmployeePage/>} />
        <Route path="/edit-employee/:employeeId" element={<EditEmployeePage/>}  />
        
        <Route path="/tasks" element={<TasksPage/>}   />
        <Route path="/create-new-task" element={<CreateTaskPage/>}/>
        <Route path="/task/:taskId" element={<TaskPage/>}/>
        <Route path="/edit-task/:taskId" element={<EditTaskPage/>}  />

        <Route path="/departments" element={<DepartmentsPage/>}   />
        <Route path="/create-new-department" element={<CreateDepartmentPage/>}/>
        <Route path="/department/:departmentId" element={<DepartmentPage/>}/>
        <Route path="/edit-department/:departmentId" element={<EditDepartmentPage/>}/>

        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
    </ApplicationContext.Provider>
  );
}

export default App;
