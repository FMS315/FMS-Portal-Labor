import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ReferenceLine
  } from "recharts";
import React, { useEffect, useState } from "react";
import "./labor-widget.css";

const data = [
    { name: "Berkots Super Foods #100", greenbar: 300, whitebar: 300 },
    { name: "Berkots Super Foods #300", yellowbar: 500, whitebar: 480 },
    { name: "Berkots Super Foods #500", greenbar: 300, whitebar: 300 },
    { name: "Berkots Super Foods #700", greenbar: 700, whitebar: 400 },
    { name: "Berkots Super Foods #800", greenbar: 400, whitebar: 600 },
    { name: "Berkots Super Foods #900", yellowbar: 400, whitebar: 600 },
   
  ]
const LaborOverageBreakdown = () =>{
    return(
        <div>
 <div>
          <div className="labor-wages-container">
            <div className="labor-wages-tittle-container">
              <span className="labor-wages-tittle">OVERAGE BREAKDOWN BY STORE</span>
              <h2 style={{ fontWeight: "bolder" }}>485.25 HOURS</h2>
              <p>Of Potential Overages this week</p>
            </div>
            <div className="labor-legend-container">
          <div className="labor-legend">
            <div
              className="labor-legendbox"
              style={{ backgroundColor: "#b7b7b7" }}
            ></div>
            <div className="labor-legend-tittle">
              <span>Current Week</span>
            </div>
          </div>
          <div className="labor-legend">
            <div
              className="labor-legendbox"
              style={{ backgroundColor: "#d6d6d6" }}
            ></div>
            <div className="labor-legend-tittle">
              <span>Previous week</span>
            </div>
          </div>
          <div className="labor-legend">
            <div className="labor-legendbox">
              <p>...</p>
            </div>
            <div className="labor-legend-tittle">
              <span>Average</span>
            </div>
          </div>
        </div>
          </div>
          <BarChart
            width={650}
            height={250}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <CartesianGrid stroke="#ebebe0" vertical={false} />
            <XAxis dataKey="name" fontSize={10} />
            <YAxis fontSize={10} />
            <Tooltip />
            <ReferenceLine y={500}  stroke="black" strokeDasharray="3 3" />
            {/* <Legend className="recharts-legend-item-text" /> */}
            <Bar dataKey="whitebar" fill="#d6d6d6" />
            <Bar dataKey="yellowbar" fill="#f6c234" />
            <Bar dataKey="redbar" fill="#d80000" />
            <Bar dataKey="greenbar" fill="#11af2f" />
          </BarChart>
        </div>
        </div>
    )
}
export default LaborOverageBreakdown;