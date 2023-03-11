import React, {useContext, useState} from 'react'
import ApplicationContext from '../../ApplicationContext'
import "./TasksPage.scss"
import Card from '../../components/Ccard/Card'
import  Search  from "../../components/Search/Search"
import SearchError from '../../components/SearchError/SearchError'

const TasksPage = () => {

    const {tasks, setActiveTask, setTaskUpdate} = useContext(ApplicationContext)
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


  return (
    <div className='landing-wrapper'>
        <Search method={setSearchRes}/>
        <div className='landing'>
            {searchedTasks.map((task, key) => {
        return <Card
            title={task.title}
            link={`/task/${task.id}`} 
            id={task.id}
            method={setActiveTask} 
            key = {key}
            methodDel={deleteTask}
        /> })}
      {(searchedTasks.length === 0) && (searchRes.length !== 0) && 
      <SearchError message = {"There's no such task in the database."}/>}
    </div>
  </div>
  )
}

export default TasksPage