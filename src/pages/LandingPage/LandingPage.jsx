import React, {useContext, useState} from 'react'
import ApplicationContext from '../../ApplicationContext'
import "./LandingPage.scss"
import Card from "../../components/Card/Card"
import  Search  from "../../components/Search/Search"


const LandingPage = () => {
  
  const {employees} = useContext(ApplicationContext)
  const [searchRes, setSearchRes] = useState("");

  const searchedEmployees = employees.filter((employee) =>
    employee.fullName.toLowerCase().includes(searchRes)
  );

  return (
    <div className='landing-wrapper'>
      <Search onChange={setSearchRes}/>
      <div className='landing'>
      {searchedEmployees.map((employee, key) => {
      return <Card employee = {employee} key = {key}/> })}
      </div>
    </div>
  )
}

export default LandingPage