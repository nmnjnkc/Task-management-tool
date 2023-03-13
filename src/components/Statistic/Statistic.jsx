import React from 'react'
import Select from '../Select/Select'
import "./Statistic.scss"

const Statistic = ({makeArray, page}) => {
  return (
    <div className='statistic'>
        <h3>{page} Statistic</h3>
        <Select label={"Available statistics:"} makeArray={[]}/>
        <div>
            <div>Lorem ipsum dolor sit amet consectetur</div>
            <div>Lorem ipsum dolor sit amet consectetur</div>
            <div>Lorem ipsum dolor sit amet consectetur</div>
            <div>Lorem ipsum dolor sit amet consectetur</div>
            <div>Lorem ipsum dolor sit amet consectetur</div>
            <div>Lorem ipsum dolor sit amet consectetur</div>
            <div>Lorem ipsum dolor sit amet consectetur</div>

        </div>
    </div>
  )
}

export default Statistic