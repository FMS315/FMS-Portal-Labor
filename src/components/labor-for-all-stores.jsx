import React,{useState}from "react";
import { FaHome } from "react-icons/fa";
import {FaGreaterThan} from "react-icons/fa";
import LaborForStoreOne from "./labor-for-store-one";
import LaborSalesPerMan from "./labor-sales-per-man";
import LaborWagesTotalSales from "./labor-wages-total-sale";
import  "./labor-widget.css";
import {useNavigate} from "react-router-dom";
import LaborTodayInsights from "./labor-today-insights";
const RevenueReportData = [
    {
      sales: "LAST YEAR SALES",
      Total: "$2,345,456.00",
      Store1: "$6,789,908.00",
      Store2: "$9,456,785.00",
      Store3: "$6,678,456.00",
      Store4: "$8,456,687.00",
      Store5: "$4,679,243.00",
    },
    {
      sales: "THIS YEAR SALES",
      Total: "$2,345,456.00",
      Store1: "$6,789,908.00",
      Store2: "$9,456,785.00",
      Store3: "$6,678,456.00",
      Store4: "$8,456,687.00",
      Store5: "$4,679,243.00",
    },
    {
      sales: "INFLATION ADJUSTED SALES",
      Total: "$2,345,456.00",
      Store1: "$6,789,908.00",
      Store2: "$9,456,785.00",
      Store3: "$6,678,456.00",
      Store4: "$8,456,687.00",
      Store5: "$4,679,243.00",
    },
    {
      sales: "SALES INCREASE/DECREASE ",
      Total: "$2,345",
      Store1: "$6,789",
      Store2: "$9,456",
      Store3: "$6,6678",
      Store4: "$8,456,67",
      Store5: "$4,6795",
    },
    {
      sales: "% OF LAST YEARS SALES",
      Total: "2,345%",
      Store1: "6.78%",
      Store2: "8.76%",
      Store3: "23.6%",
      Store4: "12.3%",
      Store5: "78.76%",
    },
    {
      sales: "TOTAL COST PURCHASES",
      Total: "$2,345",
      Store1: "$6,6678",
      Store2: "$6,6678",
      Store3: "$6,6678",
      Store4: "$6,6678",
      Store5: "$4,6795",
    },
    {
      sales: "GROSS PROFIT",
      Total: "$2,345",
      Store1: "$6,6678",
      Store2: "$6,6678",
      Store3: "$6,6678",
      Store4: "$6,6678",
      Store5: "$4,6795",
    },
    {
      sales: "% OF TOTAL SALES",
      Total: "2,345%",
      Store1: "6.78%",
      Store2: "8.76%",
      Store3: "23.6%",
      Store4: "12.3%",
      Store5: "78.76%",
    },
  ];
const LaborForAllStores = () =>{
 const navigate = useNavigate();
 
  // const openLaborStoreone = () => {
  //   navigate("/labor/laborforstore1");
  //   };

   
  return (
    <div>
        <div>
          <div>
            <h5 style={{fontWeight:"bolder"}}>Labor for All Stores</h5>
          </div>
          <div style={{display:"flex", direction:"row"}}>
         <FaHome style={{paddingTop:5,fontSize:15}} />
         <h6> <FaGreaterThan style={{fontWeight:100,fontSize:15,paddingLeft:8}} /> Labor  <FaGreaterThan style={{fontWeight:100,fontSize:15,paddingLeft:8}} />All Stores</h6>
          </div>
          <div style={{ display: "flex", direction: "row" }}>
            <div className="labor-salespercustomer-card">
             <LaborSalesPerMan />
            
            </div>
            <div style={{ paddingLeft: 25 }}>
              <div className="labor-wagestotolsale-card">
              <LaborWagesTotalSales />
              </div>
            </div>
          </div>
          <div style={{ paddingTop: 25 }}>
            <div className="labor-report-card">
              <div>
                <div style={{ paddingTop: 20 }}>
                  <h6 style={{ fontWeight: "bolder" }}>
                   CURRENT  LABOR REPORT 
                  </h6>
                </div>
                <h4 style={{ fontWeight: "bolder" }}>$326,196</h4>
                <p>Wages this period</p>
                <div>
                <table>
                    <thead>
                    <tr>
                        <th className="labor-table-header"
                          colspan="2"
                          style={{ textAlign: "center", paddingLeft: 190 }}
                        >
                          TOTAL
                        </th>
                        <th className="labor-table-header">GROCERY</th>
                        <th className="labor-table-header">GM/HBC</th>
                        <th className="labor-table-header">NATURAL</th>
                        <th className="labor-table-header">BEER</th>
                        <th className="labor-table-header">DAIRY</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RevenueReportData.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td className="labor-table-data">
                              {data.sales}
                              <img src={data.icon} />
                            </td>
                            <td  className="labor-table-data">{data.Total}</td>
                            <td  className="labor-table-data">{data.Store1}</td>
                            <td  className="labor-table-data">{data.Store2}</td>
                            <td  className="labor-table-data">{data.Store3}</td>
                            <td  className="labor-table-data">{data.Store4}</td>
                            <td  className="labor-table-data">{data.Store5}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
export default LaborForAllStores;