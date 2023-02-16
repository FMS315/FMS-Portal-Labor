import "./labor-widget.css";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  colors
} from "recharts";
import {useNavigate} from "react-router-dom";
import LaborOverages from "./labor-overages";

const data02 = [
  {
    "name": "Group A",
    "value": 2400,
    "colors":"black"
  },
  {
    "name": "Group B",
    "value": 4567,
    "colors":"grey"
  },
  
  
];

const LaborTodayInsights = () =>{
  const navigate = useNavigate();

  const openLaborForAllStore = () => {
    navigate("/labor/laborforallstores");
    };

    const LaborOverages = () =>
    {
      navigate("/labor/laboroverages"); 
    }
 
  return(
    <div>
    
<div className="labor-salescustomer-container"  onClick={openLaborForAllStore}>
        <div className="labor-salescustomer-tittle-container">
          <span className="labor-salescustomer-tittle" style={{ fontWeight: "bolder" }}>TODAY'S INSIGHTS</span>
          <span className="labor-view-all">View All</span> 
         
         
          <h2 style={{ fontWeight: "bolder" }}>$85,391.50</h2>
          <p>
            Total wages this period
          </p>
        </div>
      
      </div>
      <div className="labor-today-insights-container">
       
        <PieChart width={230} height={200}>
  <Pie data={data02} dataKey="value" nameKey="name" cx="40%" cy="40%" innerRadius={60} outerRadius={80}   >
  {
      data02.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.colors}/>
      ))
    }
    </Pie>
    </PieChart>
    <div className="labor-total-insights-lengend-container">
    <div>
      <div className="labor-total-insights-lengend">
        <div style={{paddingTop:6}}>
        <div className="labor-today-insights-widgetbox" style={{backgroundColor:"grey"}}></div>
        </div>
      <span className="labor-today-insights-lengend-tittle">Regular Hours</span>
      </div>
    </div>  
     <div > 
      <div className="labor-total-insights-lengend">
        <div style={{paddingTop:6}}> 
        <div className="labor-today-insights-widgetbox" style={{backgroundColor:"black"}}></div>
        </div>     
      <span className="labor-today-insights-lengend-tittle" > Overage Hours</span>
      </div>
     </div>
     </div>
     <div className="labor-today-insight-table-container">
      <table className="labor-today-insight-table">
        <tr >
          <th className="labor-table-header">Insights</th>
          <th className="labor-table-header">Status</th>
          <th className="labor-table-header">Action</th>
        </tr>
        
        <tr className="labor-today-insights-table-tr">
          <td  className="labor-table-data">(125) hours of overtime scheduled</td>
          <td  className="labor-table-data">Not Started</td>
          <td  className="labor-table-data" onClick={LaborOverages}>ActNow</td>
        </tr>
        <tr className="labor-today-insights-table-tr-even">
          <td  className="labor-table-data">wages % is higher than budgeted </td>
          <td  className="labor-table-data">Not Started</td>
          <td  className="labor-table-data" onClick={LaborOverages}>ActNow</td>
        </tr>
        <tr className="labor-today-insights-table-tr">
          <td  className="labor-table-data">Create scedule(s) for next week </td>
          <td  className="labor-table-data">Not Started</td>
          <td  className="labor-table-data" onClick={LaborOverages}>ActNow</td>
        </tr>
        <tr className="labor-today-insights-table-tr-even">
          <td  className="labor-table-data">No AP run has been done this week </td>
          <td  className="labor-table-data">Not Started</td>
          <td  className="labor-table-data" onClick={LaborOverages}>ActNow</td>
        </tr>
        <tr className="labor-today-insights-table-tr">
          <td  className="labor-table-data">Prioritize (25 ) invoices during next run</td>
          <td  className="labor-table-data">In progress</td>
          <td  className="labor-table-data" onClick={LaborOverages}>ActNow</td>
        </tr>
      </table>
     </div>
     
     
        
       
      
        
        <div>
          </div> 
      </div>
    </div>
  )
};
export default LaborTodayInsights;