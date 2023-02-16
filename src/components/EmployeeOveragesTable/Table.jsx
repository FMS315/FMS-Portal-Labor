import React from "react";
import { TableSection } from "./TableSection.jsx";
import "./Table.css"


const child = [
  {
    
    store: "",
          department: "Meat",
          employeename: "Marion Nicholoson",
          employeeId:"11106",
          projOt : "8.00",
          totalschd: "40.00",
          actual17:"8.25",
          sched18:"9.00",
          sched19:"8.00",
          sched20:"9.50",
          sched21:"8.50",
  },
  {
    store: "",
    department: "Grocery",
    employeename: "Christy Lam",
    employeeId:"10893",
    projOt : "10.0",
  totalschd: "40.00",
  actual17:"0.00",
  sched18:"9.00",
  sched19:"0.00",
  sched20:"9.50",
  sched21:"9.50",
  },
  {
    store: "",
    department: "Grocery",
    employeename: "Christy Lam",
    employeeId:"10893",
    projOt : "10.0",
  totalschd: "40.00",
  actual17:"0.00",
  sched18:"9.00",
  sched19:"0.00",
  sched20:"9.50",
  sched21:"9.50",
  }, {
    store: "",
    department: "Grocery",
    employeename: "Christy Lam",
    employeeId:"10893",
    projOt : "10.0",
  totalschd: "40.00",
  actual17:"0.00",
  sched18:"9.00",
  sched19:"0.00",
  sched20:"9.50",
  sched21:"9.50",
  },
  {
    store: "",
    department: "Grocery",
    employeename: "Christy Lam",
    employeeId:"10893",
    projOt : "10.0",
  totalschd: "40.00",
  actual17:"0.00",
  sched18:"9.00",
  sched19:"0.00",
  sched20:"9.50",
  sched21:"9.50",
  },
  {
    store: "",
    department: "Grocery",
    employeename: "Christy Lam",
    employeeId:"10893",
    projOt : "10.0",
  totalschd: "40.00",
  actual17:"0.00",
  sched18:"9.00",
  sched19:"0.00",
  sched20:"9.50",
  sched21:"9.50",
  },
  
  
]  

export const Table = () => {
  return (
    <table>
      <thead>
        <th className="labor-overagetable-header">STORE</th>
        <th className="labor-overagetable-header">DEPARTMENT</th>
        <th className="labor-overagetable-header">EMPLOYEE NAME</th>
        <th className="labor-overagetable-header">EMPLOYEE ID</th>
        <th className="labor-overagetable-header">PROJ OT</th>
        <th className="labor-overagetable-header">TOTAL SCHED</th>
        <th className="labor-overagetable-header">ACTUAL 01/17</th>
        <th className="labor-overagetable-header">SCHED 01/18</th>
        <th className="labor-overagetable-header">SCHED 01/19</th>
        <th className="labor-overagetable-header">SCHED 01/20</th>
        <th className="labor-overagetable-header">SCHED 01/21</th>
      </thead>
      {child.map((childdata, index) => (
        <TableSection childdata={childdata} index={index} />
      ))}
    </table>
  );
};
