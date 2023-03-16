import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import ApplicationContext from '../../ApplicationContext'
import "./TasksPage.scss"
import CardWrapper from '../../components/CardWrapper/CardWrapper'

import Statistic from '../../components/Statistic/Statistic'


const TasksPage = () => {

    const {tasks, setTaskUpdate} = useContext(ApplicationContext)

    
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

// const searchedTasks = tasks.filter((task) =>
//     task.title.toLowerCase().includes(searchRes)
//   );

 

  return (
    <div className='main-page-wrapper'>

      <div className='page-wrapper'>
        <h2>All Tasks</h2>
        <CardWrapper 
        createPage={"/create-new-task"} 
        surchArray={tasks} 
        deleteEmployee={deleteTask}
        setClass={"tasksCard"}
        searchKey={"title"}
        edit={"edit-task"}
        path={"task"}

        />

      </div>
   {/* <Statistic page={"Tasks"}/> */}
    </div>
  )
}

export default TasksPage