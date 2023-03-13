import React, {useState, useContext, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router';
import ApplicationContext from '../../ApplicationContext';
import Input from '../../components/Input/Input';
import TheDatePicker from '../../components/DatePicker/DatePicker'
import Select from '../../components/Select/Select';
import SearchError from '../../components/SearchError/SearchError';


const EditTaskPage = () => {

  const {taskId} = useParams();
  const navigate = useNavigate();

  const { setTaskUpdate, employees, tasks, theTaskDifficulty, theTaskStatus } = useContext(ApplicationContext);

  const currentTask = tasks?.find(task => task.id == taskId)

  const[title, setTitle] = useState(currentTask?.title);
  const[description, setDescription] = useState(currentTask?.description);
  const[assignee, setAssignee] = useState(currentTask?.assignee);
  const[assignedDate, setAssignedDate] = useState(currentTask?.assignedDate);
  const[dueDate, setDueDate] = useState(currentTask?.dueDate);
  const[taskDifficulty, setTaskDifficulty] = useState(currentTask?.taskDifficulty);
  const[taskStatus, setTaskStatus] = useState(currentTask?.taskStatus);
  const [showError, setShowError] = useState(false);


  const allEmployees = employees.map(employee => employee.fullName)
  const allTasks = tasks?.map(task => task.id)
  const noTasks = allTasks?.some(id => id == taskId)

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
      navigate('/tasks');
    });

  }

  useEffect(() => {
    let timeoutId;
    if (noTasks === false) {
      timeoutId = setTimeout(() => {
        setShowError(true);
      }, 600); 
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [noTasks]);

  return (

    <div className='editForm'>
      {!showError && <form className="form" onSubmit={submitForm}>

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
  placeholder={currentTask?.assignee}
  name={assignee}
  makeArray={allEmployees}
  size={10}
  method={setAssignee}
/>

<TheDatePicker 
 label={"Edit Due date:"}
 placeholder={currentTask?.dueDate}
 future={true}
 inputDate={dueDate}
 onDateChange={setDueDate} 
/>

<TheDatePicker 
 label={"Edit date the task is asigned:"}
 placeholder={currentTask?.assignedDate}
 future={false}
 inputDate={assignedDate}
 onDateChange={setAssignedDate}
/>

<Select
  label={"Edit Task Difficulty:"}
  placeholder={currentTask?.taskDifficulty}

  name = {taskDifficulty}
  makeArray={theTaskDifficulty}
  method={setTaskDifficulty}
/>

<Select
  label={"Edit Task Status:"}
  placeholder={currentTask?.taskStatus}
  name = {taskStatus}
  makeArray={theTaskStatus}
  method={setTaskStatus}
/>

<button>Submit</button>

</form>}
{showError && <SearchError message={"There's no such Department to Edit."}/>}

    </div>

  )
}

export default EditTaskPage