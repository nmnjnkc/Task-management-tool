import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./Card.scss";

const Card = ({
  title,
  link,
  id,
  avatar,
  imgDescription,
  refreshData,
  deleteURL,
  linkTo,
  setClass,
  task,
}) => {
  const [modalActive, setModalActive] = useState(false);

  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate(link);
  };

  const navigateToEdit = () => {
    navigate(linkTo);
  };

  const handleTaskDone = () => {
    const now = new Date();

    if (task.taskStatus.toLowerCase() !== "done") {
      const task = {
        taskStatus: "Done",
        doneDate: now.getTime(),
      };

      fetch(`https://640b1ad481d8a32198d9d28b.mockapi.io/Tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }).then(() => {
        refreshData(false);
      });
    } else {
      const task = {
        taskStatus: "ToDo",
        doneDate: null,
      };

      fetch(`https://640b1ad481d8a32198d9d28b.mockapi.io/Tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }).then(() => {
        refreshData(false);
        window.location.reload();
      });
    }
  };

  return (
    <>
      <div className={setClass} onClick={() => navigateToPage()}>
        <img className="displayImg" src={avatar} alt={imgDescription} />
        <h3>{title}</h3>
        <div
          className="display-checkbox"
          onClick={(e) => {
            e?.stopPropagation();
          }}
        >
          <label>Set task to Done: </label>
          <input
            type="checkbox"
            name=""
            onChange={() => {
              handleTaskDone();
            }}
            checked={
              task.taskStatus && task.taskStatus.toLowerCase() === "done"
                ? "checked"
                : null
            }
          />
        </div>

        <div>
          <Button name={"Edit"} method={navigateToEdit} />
          <Button name={"Delete"} method={() => setModalActive(true)} />
        </div>
      </div>

      {modalActive && (
        <Modal
          id={id}
          refreshData={refreshData}
          deleteURL={deleteURL}
          setModalActive={setModalActive}
          onClick={() => setModalActive(true)}
        />
      )}
    </>
  );
};

export default Card;
