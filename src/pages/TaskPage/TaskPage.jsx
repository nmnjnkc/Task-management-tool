import React, {useContext} from 'react'
import { useParams } from 'react-router';
import ApplicationContext from '../../ApplicationContext';


const TaskPage = () => {

  const {tasks, activeTask} = useContext(ApplicationContext);

  let { taskId } = useParams();

  const currentTask = tasks.find((task) => task.id == taskId)



  return (
    <div>{currentTask?.title}</div>
  )
}

export default TaskPage