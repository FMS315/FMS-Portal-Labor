import  "./labor-widget.css";
import React from "react";
import { FaHome } from "react-icons/fa";
import {FaGreaterThan} from "react-icons/fa";
import LaborBerkotsFoodsMeatDepartmentBreakdown from "./labor-berkots-foods-meat-department-breakdown";
import LaborBerkotsMeatDepartmentHistory from "./labor-berkots-foods-meat-dept-history";


const child = [
  {
    
   
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
   
    employeename: "Alan Bain",
    employeeId:"10893",
    projOt : "10.0",
  totalschd: "40.00",
  actual17:"0.00",
  sched18:"9.00",
  sched19:"0.00",
  sched20:"9.50",
  sched21:"9.50",
  }, {
    
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


const LaborBerkotsMeatDePartment = ()=>{
    return(
        <div>
  <div>
        <div>
            <h5 style={{fontWeight:"bolder"}}>Labor</h5>
          </div>
          <div style={{display:"flex", direction:"row"}}>
         <FaHome style={{paddingTop:5,fontSize:15}} />
         <h6> <FaGreaterThan style={{fontWeight:100,fontSize:15,paddingLeft:8}} /> Labor  <FaGreaterThan style={{fontWeight:100,fontSize:15,paddingLeft:8}} />Overages</h6>
          </div>
          <div style={{ display: "flex", direction: "row" }}>
            <div className="labor-salespercustomer-card">
            <LaborBerkotsFoodsMeatDepartmentBreakdown />
            </div>
            <div style={{ paddingLeft: 25 }}>
              <div className="labor-wagestotolsale-card">
              <LaborBerkotsMeatDepartmentHistory />
              </div>
            </div>
          </div>
          <div style={{ paddingTop: 25 }}>
            <div className="labor-report-card" style={{height:520}}>
              <div>
                <div style={{ paddingTop: 20 }}>
                  <h6 style={{ fontWeight: "bolder" }}>
                  BERKOTS SUPER FOODS #100 MEAT DEPARTMENT  OVERAGES
                  </h6>
                </div>
                <h4 style={{ fontWeight: "bolder" }}>12.00 Hours</h4>
                <p>Total Current Overages Hours Scheduled </p>
                <div>
                <table>
                    <thead>
                    <tr>
                        <th className="labor-overagetable-header">
                          EMPLOYEE NAME
                        </th>
                        <th className="labor-overagetable-header">EMPLOYEE ID</th>
                        <th className="labor-overagetable-header">PROJ OT</th>
                        <th className="labor-overagetable-header">TOTAL SCHED</th>
                        <th className="labor-overagetable-header">ACTUAL 0/17</th>
                        <th className="labor-overagetable-header">SCHED 0/18</th>
                        <th className="labor-overagetable-header">SCHED 0/19</th>
                        <th className="labor-overagetable-header">SCHED 0/20</th>
                        <th className="labor-overagetable-header">SCHED 0/21</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      {child.map((data, index) => {
                        return (
                          <tr key={index}>
                            
                            <td  className="labor-table-data">{data.employeename}</td>
                            <td  className="labor-table-data">{data.employeeId}</td>
                            <td  className="labor-table-data">{data.projOt}</td>
                            <td  className="labor-table-data">{data.totalschd}</td>
                            <td  className="labor-table-data">{data.actual17}</td>
                            <td  className="labor-table-data">{data.sched18}</td>
                            <td  className="labor-table-data">{data.sched19}</td>
                            <td  className="labor-table-data">{data.sched20}</td>
                            <td  className="labor-table-data">{data.sched21}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div style={{float:"right",alignItems:"right",paddingTop:20}}>
                  
                  <span style={{paddingRight:10}}> <button style={{paddingLeft:20, paddingRight:20,border:1, borderColor:"#0000001f",color:"grey",padding:10}}>dismiss</button></span>
                  
                  <button style={{paddingLeft:20, paddingRight:20, backgroundColor:"#575757",color:"white",border:0,padding:10}}>Request an Explanation</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default LaborBerkotsMeatDePartment;