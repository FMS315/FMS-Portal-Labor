import  "./labor-widget.css";
import React from "react";
import { FaHome } from "react-icons/fa";
import {FaGreaterThan} from "react-icons/fa";
import LaborBerkotFoodsBreakdown from "./labor-berkots-foods-breakdown";
import LaborBerkotFoodsHistory from "./labor-berkots-foods-laborhistory";
import ExpandableTable from "react-exp-table";
import { ExpendableButton } from "./EmployeeOveragesTable/ExpendableButton";
import useOpenController from "./EmployeeOveragesTable/Hooks/useOpenController";

const Laborberkotsuperfoods = () =>{
  const { isOpen, toggle } = useOpenController(true);
  const columns = [
    {
      title: "DEPARTMENT",
      key: "department"
    },
    {
      title: "EMPLOYEE NAME",
      key: "employeename"
    },
    {
      title: "EMPLOYEE ID",
      key: "employeeId"
    },
    {
      title: "PROJ OT",
      key: "projOt"
    },
    {
      title: "TOTAL SCHED",
      key: "totalschd"
    },
    {
      title: "ACTUAL 01/17",
      key: "actual17"
    },
    {
      title: "SCHED 01/18",
      key: "sched18"
    },
    {
      title: "SCHED 01/19",
      key: "sched19"
    },
    {
      title: "SCHED 01/20",
      key: "schd20"
    },
    {
      title: "SCED 01/21",
      key: "schd21"
    }
  ];
  const data = [
    {
      department: "Meat",
      projOt : "10.0",
      totalschd: "40.00",
      actual17:"0.00",
      sched18:"9.00",
      sched19:"0.00",
      sched20:"9.50",
      sched21:"9.50",
      child: [
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
        }
      ]
    },
    {
      department: "Grocery",
      projOt : "10.0",
      totalschd: "40.00",
      actual17:"0.00",
      sched18:"9.00",
      sched19:"0.00",
      sched20:"9.50",
      sched21:"9.50",
      child: [
        {
          
          department: "",
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
          
          department: "",
          employeename: "Christy Lam",
          employeeId:"10893",
          projOt : "10.0",
        totalschd: "40.00",
        actual17:"0.00",
        sched18:"9.00",
        sched19:"0.00",
        sched20:"9.50",
        sched21:"9.50",
        }
      ]
    },
    {
      department: "Meat",
      projOt : "10.0",
      totalschd: "40.00",
      actual17:"0.00",
      sched18:"9.00",
      sched19:"0.00",
      sched20:"9.50",
      sched21:"9.50",
      child: [
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
        }
      ]
    },{
      department: "Deli",
      projOt : "10.0",
      totalschd: "40.00",
      actual17:"0.00",
      sched18:"9.00",
      sched19:"0.00",
      sched20:"9.50",
      sched21:"9.50",
      child: [
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
        }
      ]
    },
  ];
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
            <LaborBerkotFoodsBreakdown />
            </div>
            <div style={{ paddingLeft: 25 }}>
              <div className="labor-wagestotolsale-card">
              <LaborBerkotFoodsHistory />
              </div>
            </div>
          </div>
          <div style={{ paddingTop: 25 }}>
            <div className="labor-report-card" style={{height:520}}>
              <div>
                <div style={{ paddingTop: 20 }}>
                  <h6 style={{ fontWeight: "bolder" }}>
                  BERKOTS SUPER FOODS #100 OVERAGES
                  </h6>
                </div>
                <h4 style={{ fontWeight: "bolder" }}>28.25 Hours</h4>
                <p>Total Current Overages Hours Scheduled </p>
                <div>
                <table>
                  <thead>
                    <tr style={{borderRight:0.5,borderRightColor:"black"}}>
          
        <th className="labor-overagetable-header">DEPARTMENT</th>
        <th className="labor-overagetable-header">EMPLOYEE NAME</th>
        <th className="labor-overagetable-header">EMPLOYEE ID</th>
        <th className="labor-overagetable-header">PROJ OT</th>
        <th className="labor-overagetable-header">TOTAL SCHED</th>
        <th className="labor-overagetable-header">ACTUAL 01/17</th>
        <th className="labor-overagetable-header">SCHED 01/18</th>
        <th className="labor-overagetable-header">SCHED 01/19</th>
        <th className="labor-overagetable-header">SCHED 01/20</th>
        <th className="labor-overagetable-header">SCHED 01/21</th>
        </tr>
                  </thead>
                  <tbody>
                    <tr>
        <td  className="labor-table-data" style={{backgroundColor:"#ebebeb"}}>Meat <ExpendableButton isOpen={isOpen} toggle={toggle} />  </td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} ></td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} ></td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} ></td>
        <td className="labor-table-data"style={{backgroundColor:"#ebebeb"}} >10.0</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >40.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >0.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >9.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >0.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >9.50</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >9.50</td>
                       </tr>
                       {isOpen && 
                       <tr>
          
        <td className="labor-table-data"   ></td>
        <td className="labor-table-data" style={{backgroundColor:"white"}}  >Marian Nicholoson</td>
        <td className="labor-table-data"  >10893</td>
        <td className="labor-table-data" style={{backgroundColor:"white"}}  >8.0</td>
        <td className="labor-table-data"  >40.00</td>
        <td className="labor-table-data" style={{backgroundColor:"white"}}  >8.20</td>
        <td className="labor-table-data"  >8.00</td>
        <td className="labor-table-data" style={{backgroundColor:"white"}} >8.00</td>
        <td className="labor-table-data" >8.50</td>
        <td className="labor-table-data" style={{backgroundColor:"white"}}  >8.00</td>
                       </tr>
                      
                       }
                       {isOpen && 
                       <tr>
         <td className="labor-table-data"   ></td>             
        <td className="labor-table-data" style={{backgroundColor:"white"}}  >Christy Lam</td>
        <td className="labor-table-data"  >11106</td>
        <td className="labor-table-data" style={{backgroundColor:"white"}}  >8.0</td>
        <td className="labor-table-data"  >40.00</td>
        <td className="labor-table-data" style={{backgroundColor:"white"}}  >8.20</td>
        <td className="labor-table-data"  >8.00</td>
        <td className="labor-table-data" style={{backgroundColor:"white"}} >8.00</td>
        <td className="labor-table-data" >8.50</td>
        <td className="labor-table-data" style={{backgroundColor:"white"}}  >8.00</td>
                       </tr>
                      
                       }
                       <tr style={{paddingBottom:5}}>
                       <td  className="labor-table-data" style={{backgroundColor:"#ebebeb"}}>Grocery<ExpendableButton isOpen={isOpen} toggle={toggle} />  </td>
                       <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} ></td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} ></td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} ></td>
        <td className="labor-table-data"style={{backgroundColor:"#ebebeb"}} >10.0</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >40.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >0.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >9.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >0.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >9.50</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >9.50</td>
                      </tr>
                      <tr>
                        {isOpen &&
                        <td className="dummy-td">
                          white
                        </td>
                        }
                      </tr>
                      <tr >
                       <td  className="labor-table-data" style={{backgroundColor:"#ebebeb"}}>Meat <ExpendableButton isOpen={isOpen} toggle={toggle} />  </td>
                       <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} ></td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} ></td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} ></td>
        <td className="labor-table-data"style={{backgroundColor:"#ebebeb"}} >10.0</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >40.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >0.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >9.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >0.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >9.50</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >9.50</td>
                      </tr>
                      <tr>
                        {isOpen &&
                        <td className="dummy-td">
                          white
                        </td>
                        }
                      </tr>
                      <tr>
                       <td  className="labor-table-data" style={{backgroundColor:"#ebebeb"}}>Deli<ExpendableButton isOpen={isOpen} toggle={toggle} />  </td>
                       <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} ></td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} ></td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} ></td>
        <td className="labor-table-data"style={{backgroundColor:"#ebebeb"}} >10.0</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >40.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >0.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >9.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >0.00</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >9.50</td>
        <td className="labor-table-data" style={{backgroundColor:"#ebebeb"}} >9.50</td>
                      </tr>
                  </tbody>
                </table>
                <div style={{float:"right",alignItems:"right",paddingTop:20}}>
                  
                  <span style={{paddingRight:10}}> <button style={{paddingLeft:20, paddingRight:20,border:1, borderColor:"#0000001f",color:"grey",padding:10}}>dismiss</button></span>
                  
                  <button style={{paddingLeft:20, paddingRight:20, backgroundColor:"#575757",color:"white",border:0,padding:10}}>Request an Explanation</button>
                    
                  </div>
                  {/* <Table /> */}
                {/* <ExpandableTable columns={columns} data={data}></ExpandableTable> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default Laborberkotsuperfoods;