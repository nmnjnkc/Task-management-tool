import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import ApplicationContext from '../../ApplicationContext'
import "./TasksPage.scss"
import Card from '../../components/Card/Card'
import  Search  from "../../components/Search/Search"
import SearchError from '../../components/SearchError/SearchError'
import Statistic from '../../components/Statistic/Statistic'
import Button from '../../components/Button/Button'



const TasksPage = () => {

    const {tasks, setTaskUpdate} = useContext(ApplicationContext)
    const [searchRes, setSearchRes] = useState("");

    
  const deleteTask = (id) => {
    fetch(`https://640b1ad481d8a32198d9d28b.mockapi.io/Tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setTaskUpdate(false);
      })
  };

const searchedTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchRes)
  );

  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate("/create-new-task");
  }

  return (
    <div className='main-page-wrapper'>

    <div className='page-wrapper'>
            <h2>All Tasks</h2>
            <div className="btnAndSrch">
      <Button name={"Cereate Task"} method={navigateToPage}/>
        <Search 
                serach={"tasks"}
                method={setSearchRes}/>
                </div>

        <div className='landing'>
            {searchedTasks.map((task, key) => {
        return <Card
            setClass={"tasksCard"}
            title={task.title}
            linkTo={`/edit-task/${task?.id}`}
            link={`/task/${task.id}`} 
            id={task.id}
            // method={} 
            key = {key}
            methodDel={deleteTask}
            /> })}
      {(searchedTasks.length === 0) && (searchRes.length !== 0) && 
      <SearchError message = {"There's no such task in the database."}/>}
      </div>
    </div>
   <Statistic page={"Tasks"}/>
  </div>
  )
}

export default TasksPage