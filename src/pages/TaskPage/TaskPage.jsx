import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ApplicationContext from '../../ApplicationContext';
import SearchError from '../../components/SearchError/SearchError';


const TaskPage = () => {

  const {tasks} = useContext(ApplicationContext);
  const [showError, setShowError] = useState(false);

  let { taskId } = useParams();

  const currentTask = tasks.find((task) => task.id == taskId)
  const allTasks = tasks?.map(task => task.id)
  const noTasks = allTasks?.some(id => id == taskId)

  
  useEffect(() => {
    let timeoutId;
    if (noTasks === false) {
      timeoutId = setTimeout(() => {
        setShowError(true);
      }, 250); 
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [noTasks]);


  return (
    <div>
      <h3>
      {currentTask?.title}
      </h3>

      {showError && <SearchError message={"There's no such Task."}/>}

      </div>

    
  )
}

export default TaskPage