import React, {useState, useContext} from 'react'
import { useParams } from 'react-router';
import ApplicationContext from '../../ApplicationContext';
import Input from '../../components/Input/Input';
import TheDatePicker from '../../components/DatePicker/DatePicker'
import Select from '../../components/Select/Select';

const EditTaskPage = () => {

  const {taskId} = useParams();
  const { setTaskUpdate, employees, tasks, theTaskDifficulty, theTaskStatus, adding, setAdding } = useContext(ApplicationContext);

  const currentTask = tasks?.find(task => task.id == taskId)

  const[title, setTitle] = useState(currentTask?.title);
  const[description, setDescription] = useState(currentTask?.description);
  const[assignee, setAssignee] = useState(currentTask?.assignee);
  const[assignedDate, setAssignedDate] = useState(currentTask?.assignedDate);
  const[dueDate, setDueDate] = useState(currentTask?.dueDate);
  const[taskDifficulty, setTaskDifficulty] = useState(currentTask?.taskDifficulty);
  const[taskStatus, setTaskStatus] = useState(currentTask?.taskStatus);

  const allEmployees = employees.map(employee => employee.fullName)

  function submitForm(event) {

    event.preventDefault();

    const task = { title, description, assignee, assignedDate, dueDate, taskDifficulty, taskStatus };

    fetch(`https://640b1ad481d8a32198d9d28b.mockapi.io/Tasks/${currentTask.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then(() => {
      setTaskUpdate(false);
    });

    setAdding(true);
  }



  return (

    <form onSubmit={submitForm}>

      <h3>Edit {currentTask?.title} Task:</h3>

      <Input
      label={"Edit Title:"}
      placeholder={currentTask?.title}
      value={title}
      method={setTitle}
      />

      <div>
        <label>Edit Description:</label>
        <textarea
        placeholder={currentTask?.description}
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
         }}
        />
      </div>

      <Select
        label={"Edit Assignee:"}
        name={assignee}
        arrayy={allEmployees}
        size={10}
        method={setAssignee}
      />

      <TheDatePicker 
       label={"Edit Due date:"}
       startDate={dueDate}
       setStartDate={setDueDate} 
      />

      <TheDatePicker 
       label={"Edit date the task is asigned:"}
       startDate={assignedDate}
       setStartDate={setAssignedDate}
      />

      <Select
        label={"Edit Task Difficulty:"}
        name = {taskDifficulty}
        arrayy={theTaskDifficulty}
        method={setTaskDifficulty}
      />

      <Select
        label={"Edit Task Status:"}
        name = {taskStatus}
        arrayy={theTaskStatus}
        method={setTaskStatus}
      />

      {!adding && <button>Submit</button>}
      {adding && <button disabled>Submit</button>}
    </form>

  )
}

export default EditTaskPage