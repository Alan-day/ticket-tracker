import React from "react";
import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";

const EmployeeCard = (props) => {
  return (
    <div className="employee-card">
      <h1>{props.employeeName}</h1>
      <h2>role: {props.employeeRole}</h2>
      <div className="container">
        <Counter />
      </div>
    </div>
  );
};

export default EmployeeCard;
