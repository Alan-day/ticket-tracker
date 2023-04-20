import "./App.scss";
import Main from "./Main/Main";
import team from "./assets/team";
import Header from "./components/Header/Header";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import FilterNames from "./components/FilterNames/FilterNames";
import { useState } from "react";

function App() {
  return (
    <body>
      <div className="App">
        <Header />

        <div className="card-container">
          {team.map((element) => {
            return (
              <EmployeeCard
                employeeName={element.name}
                employeeRole={element.role}
              />
            );
          })}
        </div>
        <Main />
      </div>
    </body>
  );
}
export default App;
