import "./labor-widget.css";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {useNavigate} from 'react-router-dom';

const data = [
  { name: "store1", currentPeriod: 200, bugjeted: 200, projectovertime:50 },
  { name: "store2", currentPeriod: 300, bugjeted: 300 },
  { name: "store3", currentPeriod: 300, bugjeted:200, projectovertime:50},
  { name: "store4", currentPeriod: 300, bugjeted: 300 },
  { name: "store5", currentPeriod: 300, bugjeted: 300, projectovertime:25 },
  { name: "store6", currentPeriod: 400, bugjeted: 300, projectovertime:50 },
  { name: "store7", currentPeriod: 400, bugjeted: 200 },
];


const LaborWidget = () => {
 const navigate = useNavigate();

  const openLaborsalesbar = (e) => {
  navigate("labor/labortodayinsight") 

   };
  
    return(
        <div className="labor-container">
          
            <div>
          <div className="labor-widget-container" onClick={openLaborsalesbar}>
          <div className="labor-data-container">
          <div className="labor-tittle">
            <h6 className="labor-tittle">LABOR</h6>
           
          </div>
          <div className="labor-totalwages">
          <h3 className="labor-totalwages">$215,689</h3>
          </div>
         <p>Total  Wages </p>
         </div>
         <div className="labor-legend-container">
         <div className="labor-legend-dashboard">
                <div
                  className="labor-lengend-box"
                  style={{backgroundColor:"#7B63BD"}}
                ></div>
                <span className="labor-legend-tittle">Current YTD</span>
              </div>
              <div className="labor-legend-dashboard">
                <div
                  className="labor-lengend-box"
                 style={{backgroundColor:"#FF9776"}}
                ></div>
                <span className="labor-legend-tittle">Budjedted</span>
              </div>
              <div className="labor-legend-dashboard">
                <div
                  className="labor-lengend-box"
                 style={{backgroundColor:"#72ECD6"}}
                ></div>
                <span className="labor-legend-tittle">Proj. Overtime</span>
              </div>
         </div>
        </div>
         <div>
          
            <BarChart
              width={620}
              height={250}
              data={data}
              margin={{
                top: 5,
                right: 20,
                bottom: 5,
              }}
              barSize={25}
            >
              <CartesianGrid  stroke="#ebebe0" vertical={false} />
              <XAxis dataKey="name" padding={{ left: 10, right: 10,  }} fontSize={10} />
              <YAxis fontSize={10} color={"black"} />
              <Tooltip wrapperStyle={{top: -150, left: 150 }} />
              <Bar dataKey="currentPeriod" stackId="currentPeriod" fill="#e17039"  />
              <Bar dataKey="bugjeted" fill="#18a475"  />
              <Bar
                dataKey="projectovertime"
                stackId="currentPeriod"
                fill="#5494d4"
              />
            </BarChart>
          </div>
          </div>
        </div>
    )
}
export default LaborWidget;