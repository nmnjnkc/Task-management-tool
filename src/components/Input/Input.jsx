import React from 'react'

const Input = ({id, label, type, placeholder, required, value, method}) => {

  return (

    <div>
        <label htmlFor={id}>{label}</label>
        <input
         id={id}
         type={type || "text"} 
         placeholder={placeholder}
         required = {(true) ? required : null}
         value={value}
         onChange={(event) => {
          {method(event.target.value);}
         }} /> 
    </div>
 )
}

export default Input