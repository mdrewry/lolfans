import React from "react";
import TextField from "@material-ui/core/TextField";

const CustomTextField = ({ value, setValue, required, placeholder }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <TextField
      value={value}
      onChange={handleChange}
      required={required}
      placeholder={placeholder}
    />
  );
};
export default CustomTextField;
