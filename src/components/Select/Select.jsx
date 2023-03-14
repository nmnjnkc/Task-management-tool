import { placeholder } from "@babel/types";
import React,{useState} from "react";

const Select = ({label, id, name, makeArray, required, size, method, placeholder}) => {
       
//     const [clicked, setClicked] = useState(false);

//   const handleClick = (event) => {
//     if (clicked === false) {
//       setClicked(true);
//       event.target.setAttribute("size", size || makeArray.length);
//     }
//   };



const handleSelectChange = (event) => {
    method(event.target.value);
    event.target.setAttribute("size", 1);
    // setClicked(false);
  };

    return(
        
        <div>
        <label htmlFor={id}>{label}</label>
          <select
          selected={placeholder}
            name={name}
            id={id}
            size={ size || makeArray.length}
            // onClick={handleClick}
            onChange={handleSelectChange}
            required = {(true) ? required : null}
            >
                { makeArray.map((element, key) => {
                
                return  <option
                 value={(typeof element !== "string") ? element : element}
                  key={key}
                  >{element}</option>
                })
                }  
            </select>
      </div>
    );
}

export default Select