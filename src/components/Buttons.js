import React from "react";
import Button from "@material-ui/core/Button";
const CustomButton = ({ label, action }) => {
  return <Button onClick={action}>{label}</Button>;
};
export default CustomButton;
