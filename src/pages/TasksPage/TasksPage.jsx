import React, {useContext} from 'react'
import ApplicationContext from '../../ApplicationContext'
import "./TasksPage.scss"
import CardWrapper from '../../components/CardWrapper/CardWrapper'

import Statistic from '../../components/Statistic/Statistic'


const TasksPage = () => {

    const {tasks, setTaskUpdate} = useContext(ApplicationContext)

    


// const searchedTasks = tasks.filter((task) =>
//     task.title.toLowerCase().includes(searchRes)
//   );

 

  return (
    <div className='main-page-wrapper'>

      <div className='page-wrapper'>
        <h2>All Tasks</h2>
        <CardWrapper 
        createPage={"/create-new-task"}
        deleteURL={"https://640b1ad481d8a32198d9d28b.mockapi.io/Tasks/"}
        refreshData = {setTaskUpdate} 
        surchArray={tasks} 
        setClass={"tasksCard no-img"}
        searchKey={"title"}
        edit={"edit-task"}
        path={"task"}
        listClass = {"no-img"}

        />

      </div>
   {/* <Statistic page={"Tasks"}/> */}
    </div>
  )
}

export default TasksPage