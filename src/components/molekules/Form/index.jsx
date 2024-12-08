import React from "react";
import { Label, Input } from "../../atoms";

const Form = ({ label, 
  type, 
  id, 
  name, 
  placeholder, 
  required, 
  value, 
  onChange  }) => {
  return (
    <div className="mb-4">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full mt-2  bg-white text-black shadow-md shadow-gray-700"
      />
    </div>
  );
};

export default Form;
