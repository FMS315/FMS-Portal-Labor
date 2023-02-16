import React from "react";
import "./Table.css";
import {useNavigate} from "react-router-dom";

export const TableRow = ({ childdata }) => {
  const navigate = useNavigate();

  const openDepartmentMeat =()=>{
    navigate("/labor/berkotsuperfood/meatdepartment");
  }
  return (
    <tr>
      {/* <td></td> */}
      <td className="labor-table-data">{childdata.store}</td>
      <td className="labor-table-data" onClick={openDepartmentMeat}>{childdata.department} </td>
      <td className="labor-table-data">{childdata.employeename}</td>
      <td className="labor-table-data">{childdata.employeeId}</td>
      <td className="labor-table-data">{childdata.projOt}</td>
      <td className="labor-table-data">{childdata.totalschd}</td>
      <td className="labor-table-data">{childdata.actual17}</td>
      <td className="labor-table-data">{childdata.sched18}</td>
      <td className="labor-table-data">{childdata.sched19}</td>
      <td className="labor-table-data">{childdata.sched20}</td>
      <td className="labor-table-data">{childdata.sched21}</td>
    </tr>
  );
};
