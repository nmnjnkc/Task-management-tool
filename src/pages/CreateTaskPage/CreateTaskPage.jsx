import React, {useState, useContext} from 'react'
import ApplicationContext from '../../ApplicationContext';
import Input from '../../components/Input/Input';
import TheDatePicker from '../../components/DatePicker/DatePicker'
import Select from '../../components/Select/Select';


const CreateTaskPage = () => {

  const { setTaskUpdate, employees, theTaskDifficulty, theTaskStatus, adding, setAdding } = useContext(ApplicationContext);

  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");
  const[assignee, setAssignee] = useState("");
  const[assignedDate, setAssignedDate] = useState(new Date());
  const[dueDate, setDueDate] = useState(new Date());
  const[taskDifficulty, setTaskDifficulty] = useState("");
  const[taskStatus, setTaskStatus] = useState("");

  const allEmployees = employees.map(employee => employee.fullName)

  function submitForm(event) {

    event.preventDefault();

    const task = { title, description, assignee, assignedDate, dueDate, taskDifficulty, taskStatus };

    fetch("https://640b1ad481d8a32198d9d28b.mockapi.io/Tasks", {
      method: "POST",
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

      <h3>Add new Task:</h3>

      <Input
      label={"Title:"}
      placeholder={"Title"}
      required={true}
      value={title}
      method={setTitle}
      />

      <div>
        <label>Description:</label>
        <textarea
        placeholder="Task description..."
        required
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
         }}
        />
      </div>

      <Select
        label={"Assignee:"}
        required={true}
        name={assignee}
        arrayy={allEmployees}
        size={10}
        method={setAssignee}
      />

      <TheDatePicker 
       label={"Due date:"}
       startDate={dueDate}
       setStartDate={setDueDate} 
      />

      <TheDatePicker 
       label={"Date the task is asigned:"}
       startDate={assignedDate}
       setStartDate={setAssignedDate}
      />

      <Select
        label={"Task Difficulty:"}
        required = {true}
        name = {taskDifficulty}
        arrayy={theTaskDifficulty}
        method={setTaskDifficulty}
      />

      <Select
        label={"Task Status:"}
        required = {true}
        name = {taskStatus}
        arrayy={theTaskStatus}
        method={setTaskStatus}
      />

      {!adding && <button>Submit</button>}
      {adding && <button disabled>Submit</button>}
    </form>
  
    )
}

export default CreateTaskPage