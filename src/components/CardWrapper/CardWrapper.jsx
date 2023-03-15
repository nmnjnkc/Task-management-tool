import React, {useState, useContext} from 'react'
import ApplicationContext from '../../ApplicationContext'
import { useNavigate } from 'react-router-dom'
import "./CardWrapper.scss"

import Card from '../../components/Card/Card'
import  Search  from "../../components/Search/Search"
import SearchError from '../../components/SearchError/SearchError'
import Button from '../../components/Button/Button'

import gridImg from "../../assets/grid.png"
import listImg from "../../assets/list.png"


const CardWrapper = ({heading, createPage, surchArray, deleteEmployee, setClass, searchKey}) => {

    const [view, setView] = useState(true);
    const [searchRes, setSearchRes] = useState("");
    const navigate = useNavigate();

  const navigateToPage = () => {
    navigate(createPage);
  }
    
    const searched = surchArray.filter((el) =>
    el[searchKey].toLowerCase().includes(searchRes)
    );

  return (
    <div className='card-wrapper'>
        <h2>{heading}</h2>
        <div className="btn-and-srch">
        <Button name={"Cereate Employee"} method={navigateToPage}/>
      <img  onClick={() => setView(!view)} src={view ? gridImg : listImg} alt="Icon"/>
      <Search 
       serach={"employees"}
       method={setSearchRes}/>
        </div>
     <div className='landing'>
        {searched.map((el, key) => {
         return <Card
         title={el[searchKey]}
         setClass={(view ? `card ${setClass}` : "list")}
         linkTo={`/edit-employee/${el?.id}`}
         link={`/employee/${el.id}`} 
         id={el.id}
          avatar={"http://clipart-library.com/images/rinrAe7BT.jpg"}
          key = {key}
          methodDel={deleteEmployee}
          /> })}
         {(searched.length === 0) && (searchRes.length !== 0) && 
         <SearchError message = {"There's no employee with that name in the database."}/>}
        </div>
    </div>
  )
}

export default CardWrapper