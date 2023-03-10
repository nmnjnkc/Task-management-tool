import React,{useState} from "react";

const Select = ({label, id, name, arrayy, required, size, method}) => {
       
//     const [clicked, setClicked] = useState(false);

//   const handleClick = (event) => {
//     if (clicked === false) {
//       setClicked(true);
//       event.target.setAttribute("size", size || arrayy.length);
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
            name={name}
            id={id}
            size={ size || arrayy.length}
            // onClick={handleClick}
            onChange={handleSelectChange}
            required = {(true) ? required : null}
            >
                { arrayy.map((element, key) => {
                
                return  <option
                 value={(typeof element !== "string") ? element : element.toLowerCase()}
                  key={key}
                  >{element}</option>
                })
                }  
            </select>
      </div>
    );
}

export default Select