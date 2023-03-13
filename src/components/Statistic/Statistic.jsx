import React from 'react'
import "./Statistic.scss"



const Statistic = ({name, page, statisticArray}) => {
  return (
    <div className='statistic'>
        {/* <h3>{page} Statistic</h3>
        <h4>{name}</h4>
        <div> 
        {statisticArray.map( (el) => {
          return <span>{el}</span>
        })}

        </div> */}
    </div>
  )
}

export default Statistic