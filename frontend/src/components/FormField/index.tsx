import React from "react";

import "./style.css";

const FormField = (props:any) => {
  const { children, label, value } = props;

  return (
    <div className="field-label">
      {children}
      <label className="label-float">{label}</label>
    </div>
  );
};

export default FormField;