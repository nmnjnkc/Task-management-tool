import React, {useState}from 'react'
import { useNavigate } from 'react-router-dom'
import Button from "../Button/Button"
import Modal from '../Modal/Modal'
import "./Card.scss"

const Card = (
  { title,
    link,  
    id, 
    avatar,
    imgDescription, 
    refreshData,
    deleteURL,
    linkTo, 
    setClass }) => {

      const [modalActive, setModalActive] = useState(false)

    const navigate = useNavigate();

    const navigateToPage = () => {
      navigate(link);
    }

    const navigateToEdit = () => {
      navigate(linkTo);
    }



    return (
      <>
        <div className={setClass} onClick={()=> navigateToPage()}>

          <img className="displayImg" src={avatar} alt={imgDescription}/>
          <h3>{title}</h3>
          
          <div>
          <Button name={"Edit"} method={navigateToEdit}/>       
          <Button name={"Delete"} method={() => setModalActive(true)}/> 
          </div>

        </div>

        {(modalActive &&  <Modal
          id={id} 
          refreshData = {refreshData}
          deleteURL = {deleteURL}
          setModalActive={setModalActive}
          onClick={() => setModalActive(true)}
        />)}
      </>
                    
  )
}

export default Card
