import React from "react";

const Select = ({
  label,
  id,
  name,
  makeArray,
  required,
  method,
  placeholder,
}) => {
  const handleSelectChange = (event) => {
    method(event.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        selected={placeholder}
        name={name}
        id={id}
        onChange={handleSelectChange}
        required={true ? required : null}
      >
        <option value=""> </option>
        {makeArray.map((element, key) => {
          return (
            <option
              value={typeof element !== "string" ? element : element}
              key={key}
            >
              {element}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
