import React, { useContext} from 'react';
import { useParams } from 'react-router-dom';
import ApplicationContext from '../../ApplicationContext';
import SearchError from '../../components/SearchError/SearchError';

const TaskPage = () => {
  const { tasks } = useContext(ApplicationContext);

  const { taskId } = useParams();

  const currentTask = tasks.find((task) => task.id === taskId);
  

  const showDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

 

  if (!currentTask) {
    return (
    <SearchError errorClass={"error-view"} message={"There's no such Task."} />
    );
  }

  return (
    <div className="showing-page">
      <h3>{currentTask?.title}</h3>

      <span>Description: {currentTask?.description}</span>
      <span>Assignee: {currentTask?.assagnee}</span>
      <span>Due date: {new Date(currentTask?.dueDate)?.toLocaleDateString('en-US', showDate)}</span>
      <span>Date the task is asigned: {new Date(currentTask?.assignedDate)?.toLocaleDateString('en-US', showDate)}</span>
      <span>Task Difficulty: {currentTask?.taskDifficulty}</span>
      <span>Task Status: {currentTask?.taskStatus}</span>

    </div>
  );
};

export default TaskPage;
