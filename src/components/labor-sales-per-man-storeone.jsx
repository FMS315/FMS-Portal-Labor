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
  import "./labor-widget.css";
  
  const data = [
    { name: "store1", yellowbar: 300, whitebar: 300 },
    { name: "store2", greenbar: 400, whitebar: 380 },
    { name: "store3", greenbar: 300, whitebar: 500 },
    { name: "store4", redbar: 700, whitebar: 400 },
    { name: "store5", greenbar: 400, whitebar: 600 },
    { name: "store6", greenbar: 400, whitebar: 600 },
    { name: "store7", yellowbar: 400, whitebar: 600 },
  ];


const LaborSalesPerManStoreOne = () =>{
return(
    <div>
      <div className="labor-salescustomer-container">
        <div className="labor-salescustomer-tittle-container">
          <span className="labor-salescustomer-tittle">SALES PER MAN HOUR</span>
          <h2 style={{ fontWeight: "bolder" }}>$292.22</h2>
          <p>YTD Average Sales Per Man Hour</p>
        </div>
        <div className="labor-legend-container">
          <div className="labor-legend">
            <div
              className="labor-legendbox"
              style={{ backgroundColor: "#b7b7b7" }}
            ></div>
            <div className="labor-legend-tittle">
              <p>Current Year</p>
            </div>
          </div>
          <div className="labor-legend">
            <div
              className="labor-legendbox"
              style={{ backgroundColor: "#d6d6d6" }}
            ></div>
            <div className="labor-legend-tittle">
              <p>Previous Year</p>
            </div>
          </div>
          <div className="labor-legend">
            <div className="labor-legendbox">
              <p>...</p>
            </div>
            <div className="labor-legend-tittle">
              <p>Trend</p>
            </div>
          </div>
        </div>
      </div>
      <BarChart
        width={650}
        height={200}
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
        <ReferenceLine y={600}  stroke="black" strokeDasharray="3 3" />
        {/* <Legend className="recharts-legend-item-text" /> */}
        <Bar dataKey="whitebar" fill="#d6d6d6" />
        <Bar dataKey="yellowbar" fill="#f6c234" />
        <Bar dataKey="redbar" fill="#d80000" />
        <Bar dataKey="greenbar" fill="#11af2f" />
      </BarChart>
    </div>
)
}
export default LaborSalesPerManStoreOne;