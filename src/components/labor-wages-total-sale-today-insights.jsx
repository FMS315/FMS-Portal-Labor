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
    { name: "store1", greenbar: 600, whitebar: 600 },
    { name: "store2", greenbar: 500, whitebar: 480 },
    { name: "store3", yellowbar: 300, whitebar: 300 },
    { name: "store4", greenbar: 700, whitebar: 400 },
    { name: "store5", greenbar: 400, whitebar: 600 },
    { name: "store6", greenbar: 400, whitebar: 600 },
    { name: "store7", redbar: 400, whitebar: 600 },
  ]
const LaborWagesTodayInsight = () =>{
    return(
        <div>
        <div>
          <div className="labor-wages-container">
            <div className="labor-wages-tittle-container">
              <span className="labor-wages-tittle">WAGE % OF TOTAL SALES</span>
              <h2 style={{ fontWeight: "bolder" }}>$18,491.50 (9.5 %)</h2>
              <p>Total Wages</p>
            </div>
            <div className="labor-legend-container">
          <div className="labor-legend-today-insight">
            <div
              className="labor-legendbox"
              style={{ backgroundColor: "#b7b7b7" }}
            ></div>
            <div className="labor-legend-tittle">
              <span>Current Year</span>
            </div>
          </div>
          <div className="labor-legend-today-insight">
            <div
              className="labor-legendbox"
              style={{ backgroundColor: "#d6d6d6" }}
            ></div>
            <div className="labor-legend-tittle">
              <span>Budjeted</span>
            </div>
          </div>
          <div className="labor-legend-today-insight">
            <div className="labor-legendbox">
              <span>...</span>
            </div>
            <div className="labor-legend-tittle">
              <span>Average</span>
            </div>
          </div>
        </div>
          </div>
          <div style={{paddingTop:20}}>
          <BarChart
            width={500}
            height={230}
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
            <XAxis dataKey="name" padding={{ left: 10, right: 10 }} fontSize={10} />
            <YAxis fontSize={10} />
            <Tooltip />
            <ReferenceLine y={440}  stroke="black" strokeDasharray="3 3" />
            {/* <Legend className="recharts-legend-item-text" /> */}
            <Bar dataKey="whitebar" fill="#d6d6d6" />
            <Bar dataKey="yellowbar" fill="#f6c234" />
            <Bar dataKey="redbar" fill="#d80000" />
            <Bar dataKey="greenbar" fill="#11af2f" />
          </BarChart>
          </div>
        </div>
      </div>
    )
}
export default LaborWagesTodayInsight;