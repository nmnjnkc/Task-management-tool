import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from "../Button/Button"
import "./Card.scss"

const Card = (
  { title,
    link, 
    method, 
    id, 
    avatar,
    imgDescription, 
    // methodEdit, 
    linkTo,
    methodDel, 
    setClass }) => {

    const navigate = useNavigate();

    const navigateToPage = () => {
      navigate(linkTo);
    }


    const handleDel = () => {
        methodDel(id);
    }


    return (

    <div className={setClass} onClick={method}>
      <Link to={link}>
        <img className="displayImg" src={avatar} alt={imgDescription}/>
        <h3>{title}</h3>
      </Link>
      <div> 
      <Button name={"Edit"} method={navigateToPage}/>
      <Button name={"Delete"} method={handleDel}/> 
      </div>
                    
    </div>
  )
}

export default Card
