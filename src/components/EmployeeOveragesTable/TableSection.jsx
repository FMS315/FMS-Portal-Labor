import React from "react";
import { ExpendableButton } from "./ExpendableButton";
import { TableRow } from "./TableRow";
import useOpenController from "./Hooks/useOpenController";
import "./Table.css";
import {useNavigate} from "react-router-dom";

export const TableSection = ({ childdata, index }) => {
  const navigate = useNavigate();

  const openBerkotssuperfoods = () =>{
    console.log("check");
    navigate("/labor/berkotsuperfoodsoverages");
  }
  const { isOpen, toggle } = useOpenController(true);
  return (
    <tbody>
      <tr>
        <td className="button-td labor-table-data" style={{backgroundColor:"#cbcbcb"}} onClick={openBerkotssuperfoods}>Berkots Super Foods #100
          <ExpendableButton isOpen={isOpen} toggle={toggle} /> 
        </td>
        <td className="labor-table-data" style={{backgroundColor:"#cbcbcb"}} ></td>
        <td className="labor-table-data" style={{backgroundColor:"#cbcbcb"}} ></td>
        <td className="labor-table-data" style={{backgroundColor:"#cbcbcb"}} ></td>
        <td className="labor-table-data"style={{backgroundColor:"#cbcbcb"}} >10.0</td>
        <td className="labor-table-data" style={{backgroundColor:"#cbcbcb"}} >40.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#cbcbcb"}} >0.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#cbcbcb"}} >9.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#cbcbcb"}} >0.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#cbcbcb"}} >9.50</td>
        <td className="labor-table-data" style={{backgroundColor:"#cbcbcb"}} >9.50</td>
      </tr>
      {isOpen && 
      <TableRow className="labor-table-data" childdata={childdata} />
      // <tr>
      //   <td></td>
      //  <td>Meat</td>
      //   <td>Marion Nicholoson</td>
      //   <td>11106</td>
      //   <td>10.0</td>
      //   <td>40.00</td>
      //   <td>0.00</td>
      //   <td>9.00</td>
      //   <td>0.00</td>
      //   <td>9.50</td>
      //   <td>9.50</td>
      // </tr>
      
      }
    </tbody>
  );
};
