import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ReferenceLine
  } from "recharts";

const data = [
    {
      "name": "",
     
    },
    {
      "name": "WE 09/24",
      "uv": 3000,
      "pv": 2501,
      "amt": 2210
    },
    {
      "name": "WE 09/17",
      "uv": 3200,
      "pv": 3001,
      "amt": 2290
    },
    {
      "name": "WE 09/10",
      "uv": 3400,
      "pv": 3400,
      "amt": 2000
    },
    {
      "name": "WE 09/3",
      "uv": 2300,
      "pv": 2500,
      "amt": 2181
    },
    {
      "name": "Pre Wk",
      "uv": 4050,
      "pv": 4010,
      "amt": 2500
    },
    {
      "name": "Current pd",
      "uv": 3500,
      "pv": 3500,
      "amt": 2100
    }
  ]

const LaborBerkotFoodsHistory = () =>{
    return(
        <div>
         <div>
<div className="labor-wages-container">
            <div className="labor-wages-tittle-container">
              <span style={{ fontWeight: "bolder" }}>BERKOTS SUPER FOODS #100 LABOR HISTORY</span>
              <h2 style={{ fontWeight: "bolder" }}>189.50 HOURS</h2>
              <p>Average Overages Over the Last 7 Weeks</p>
            </div>
            <div className="labor-legend-container-grocery">
          <div className="labor-legend">
            <div
              className="labor-legendbox"
              style={{ backgroundColor: "#b7b7b7" }}
            ></div>
            <div className="labor-legend-tittle">
              <span>Overages Hrs</span>
            </div>
          </div>
          <div className="labor-legend">
            <div
              className="labor-legendbox"
              style={{ backgroundColor: "#d6d6d6" }}
            ></div>
            <div className="labor-legend-tittle">
              <span>Budgeted</span>
            </div>
          </div>
          <div className="labor-legend">
            <div className="labor-legendbox">
              <span>...</span>
            </div>
            <div className="labor-legend-tittle">
              <span>Average</span>
            </div>
          </div>
        </div>
          </div>   
<LineChart width={650} height={250} data={data}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" vertical={false} />
<XAxis dataKey="name" fontSize={10} />
<YAxis fontSize={10}/>
<Tooltip />
<ReferenceLine y={4550}  stroke="black" strokeDasharray="3 3" />
{/* <Legend /> */}
<Line type="monotone" dataKey="pv" stroke="black"strokeWidth={1} />
<Line type="monotone" dataKey="uv" stroke="grey" />
</LineChart>
        </div>   
        </div>
    )
}
export default LaborBerkotFoodsHistory;