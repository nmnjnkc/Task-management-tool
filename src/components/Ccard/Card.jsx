import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Button from "../../components/Button/Button"

const Card = ({ title, link, method, id, methodEdit, methodDel }) => {

    const handleDel = () => {
        methodDel(id);
    }
    return (

    <div onClick={method}>
      <Link to={link}>
        <h3>{title}</h3>
      </Link>
      <Button name={"Edit"} method={methodEdit}/>
      <Button name={"Delete"} method={handleDel}/> 
                    
    </div>
  )
}

export default Card
