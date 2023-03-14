import React from 'react'
import "./Statistic.scss"



const Statistic = ({name, page, statisticArray}) => {

  return (
    <div className='statistic'>
        <h3>{page} Statistic</h3>
        <h4>{name}</h4>
        

        {
          statisticArray?.map((el, i) => {
        return <p>{el}</p>;
      })
    }



    </div>
  )
}

export default Statistic