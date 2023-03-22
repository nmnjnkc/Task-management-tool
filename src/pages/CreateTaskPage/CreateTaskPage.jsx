import React, { useState, useContext } from "react";
import ApplicationContext from "../../ApplicationContext";
import Input from "../../components/Input/Input";
import TheDatePicker from "../../components/DatePicker/DatePicker";
import Select from "../../components/Select/Select";
import { useNavigate } from "react-router-dom";

const CreateTaskPage = () => {
  const { setTaskUpdate, employees, theTaskDifficulty, theTaskStatus } =
    useContext(ApplicationContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [assignedDate, setAssignedDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [taskDifficulty, setTaskDifficulty] = useState("");
  const [taskStatus, setTaskStatus] = useState("");

  const allEmployees = employees.map((employee) => employee.fullName);

  function submitForm(event) {
    event.preventDefault();

    const task = {
      title,
      description,
      assignee,
      assignedDate,
      dueDate,
      taskDifficulty,
      taskStatus,
    };

    fetch("https://640b1ad481d8a32198d9d28b.mockapi.io/Tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then(() => {
      setTaskUpdate(false);
      navigate("/tasks");
    });
  }

  return (
    <form className="form" onSubmit={submitForm}>
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
        makeArray={allEmployees}
        method={setAssignee}
      />

      <TheDatePicker
        label={"Due date:"}
        inputDate={dueDate}
        onDateChange={setDueDate}
      />

      <TheDatePicker
        label={"Asigned on:"}
        before={true}
        inputDate={assignedDate}
        onDateChange={setAssignedDate}
      />

      <Select
        label={"Task Difficulty:"}
        required={true}
        name={taskDifficulty}
        makeArray={theTaskDifficulty}
        method={setTaskDifficulty}
      />

      <Select
        label={"Task Status:"}
        required={true}
        name={taskStatus}
        makeArray={theTaskStatus}
        method={setTaskStatus}
      />

      <button>Submit</button>
    </form>
  );
};

export default CreateTaskPage;
