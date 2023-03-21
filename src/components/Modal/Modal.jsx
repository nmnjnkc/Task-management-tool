import React, { useEffect, useContext } from "react";
import Button from "../Button/Button";
import "./Modal.scss";

const Modal = ({ id, refreshData, deleteURL, setModalActive, modalActive }) => {

   

  const handleEsc = (event) => {
    if (event.key === "Escape") {
      setModalActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);



  const deleteReport = () => {
    fetch(`${deleteURL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        refreshData(false);
      });
  };

  return (
    <div
      className="modal-bg"
      onClick={() => setModalActive(false)}
    >
      <div
        className="modal-content"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <p>Delete forever?</p>
        <p>THIS CANNOT BE UNDONE!</p>
        <div>
      
          <Button name={"Yes"} method={()=>{
             
              deleteReport();
              setModalActive(false)
              }
          }/>
           <Button name={"No"} method={ () =>
              setModalActive(false)
              }/>
        </div>
      </div>
    </div>
  );
};

export default Modal