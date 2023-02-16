import React from "react";
import { FaHome } from "react-icons/fa";
import {FaGreaterThan} from "react-icons/fa";
import LaborHourHistory from "./labor-hour-history";
import LaborOverageBreakdown from "./labor-overage-breakdown-store";
import { Table } from "./EmployeeOveragesTable/Table";
import { ExpendableButton } from "./EmployeeOveragesTable/ExpendableButton";
import useOpenController from "./EmployeeOveragesTable/Hooks/useOpenController";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import "primereact/resources/primereact.min.css";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";



const LaborOverages = () =>{
 
  const { isOpen, toggle } = useOpenController(true);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const openBerkotssuperfoods = () =>{
    navigate("/labor/berkotsuperfoodsoverages");
  }
  const openDepartmentMeat =()=>{
    navigate("/labor/berkotsuperfood/meatdepartment");
  }

  
  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };
  const columns = [
    {
      title: "STORE",
      key: "store"
    },
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
      store: "Berkots Super Foods #100",
      projOt : "10.0",
      totalschd: "40.00",
      actual17:"0.00",
      sched18:"9.00",
      sched19:"0.00",
      sched20:"9.50",
      sched21:"9.50",
      child: [
        {
          store: "",
          department: "Meat",
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
          store: "",
          department: "Grocery",
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
      store: "Berkots Super Foods #100",
      projOt : "10.0",
      totalschd: "40.00",
      actual17:"0.00",
      sched18:"9.00",
      sched19:"0.00",
      sched20:"9.50",
      sched21:"9.50",
      child: [
        {
          store: "",
          department: "Meat",
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
          store: "",
          department: "Grocery",
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
    }
  ];
    return(
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
             <LaborOverageBreakdown />
            
            </div>
            <div style={{ paddingLeft: 25 }}>
              <div className="labor-wagestotolsale-card">
              <LaborHourHistory />
              </div>
            </div>
          </div>
          <div style={{ paddingTop: 25 }}>
            <div className="labor-report-card" style={{height:530}}> 
              <div>
                <div style={{ paddingTop: 20 }}>
                  <h6 style={{ fontWeight: "bolder" }}>
                   EMPLOYEE OVERAGES FOR ALL STORES
                  </h6>
                </div>
                <h4 style={{ fontWeight: "bolder" }}>65.00 Hours</h4>
                <p>of Overages Scheduled this Week </p>
                <div>
                  {/* <Table /> */}
                {/* <ExpandableTable columns={columns} data={data}></ExpandableTable> */}

                <table>
                  <thead>
                    <tr style={{borderRight:0.5,borderRightColor:"black"}}>
          <th className="labor-overagetable-header">STORE</th>
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
        <td  className="labor-table-data" style={{backgroundColor:"#ebebeb"}}  onClick={openBerkotssuperfoods}>Berkots Super Foods #100 <ExpendableButton isOpen={isOpen} toggle={toggle} />  </td>
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
                        <td  className="labor-table-data" >  </td>
        <td className="labor-table-data" onClick={openDepartmentMeat}  >Meat</td>
        <td className="labor-table-data"   onClick={handleClickToOpen}  >Marian Nicholoson</td>
        <td className="labor-table-data"  >10893</td>
        <td className="labor-table-data" >8.0</td>
        <td className="labor-table-data"  >40.00</td>
        <td className="labor-table-data" >8.20</td>
        <td className="labor-table-data"  >8.00</td>
        <td className="labor-table-data">8.00</td>
        <td className="labor-table-data" >8.50</td>
        <td className="labor-table-data" >8.00</td>
                       </tr>
                      
                       }
                       {isOpen && 
                       <tr>
                        <td  className="labor-table-data" >  </td>
        <td className="labor-table-data"  >Grocery</td>
        <td className="labor-table-data"  >Christy Lam</td>
        <td className="labor-table-data"  >11106</td>
        <td className="labor-table-data" >8.0</td>
        <td className="labor-table-data"  >40.00</td>
        <td className="labor-table-data" >8.20</td>
        <td className="labor-table-data"  >8.00</td>
        <td className="labor-table-data">8.00</td>
        <td className="labor-table-data" >8.50</td>
        <td className="labor-table-data" >8.00</td>
                       </tr>
                      
                       }
                       <tr style={{paddingBottom:5}}>
                       <td  className="labor-table-data" style={{backgroundColor:"#ebebeb"}}>Berkots Super Foods #300 <ExpendableButton isOpen={isOpen} toggle={toggle} />  </td>
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
                       <td  className="labor-table-data" style={{backgroundColor:"#ebebeb"}}>Berkots Super Foods #500 <ExpendableButton isOpen={isOpen} toggle={toggle} />  </td>
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
                       <td  className="labor-table-data" style={{backgroundColor:"#ebebeb"}}>Berkots Super Foods #600 <ExpendableButton isOpen={isOpen} toggle={toggle} />  </td>
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
                <Dialog open={open} onClose={handleToClose} >
        <DialogTitle style={{backgroundColor:"#575757",color:"white"}}>Schedule  Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
           <span style={{color:"black",fontSize:13,fontWeight:"bolder"}}>SCEDULE FOR MARION NICHOLSON ID #11106</span>
           <h5 style={{color:"black",fontWeight:"bolder"}}>45.00</h5>
           <span style={{color:"black",fontSize:12}} >Total Hours Scheduled this Period</span>
           </div>
           <div>

           </div>
           <div>
            <table>
              <thead>
                <th className="labor-table-header">DAY</th>
                <th className="labor-table-header">IN</th>
                <th className="labor-table-header">OUT</th>
                <th className="labor-table-header">IN</th>
                <th className="labor-table-header">OUT</th>
                <th className="labor-table-header">SCHED</th>
                <th className="labor-table-header">ACTUAL</th>
                <th className="labor-table-header">OVERTIME</th>
              </thead>
              <tbody>
                <tr>
                  <td className="labor-table-data">Moday 1/16</td>
                  <td className="labor-table-data">06.30A</td>
                  <td className="labor-table-data">03:00P</td>
                  <td className="labor-table-data">-</td>
                  <td className="labor-table-data">-</td>
                  <td className="labor-table-data">8.00</td>
                  <td className="labor-table-data">8.50</td>
                  <td className="labor-table-data">8.50</td>
                </tr>
                <tr>
                  <td className="labor-table-data">Tuesday 1/17</td>
                  <td className="labor-table-data">9.50</td>
                  <td className="labor-table-data">0:00</td>
                  <td className="labor-table-data">-</td>
                  <td className="labor-table-data">-</td>
                  <td className="labor-table-data">9</td>
                  <td className="labor-table-data">0.50</td>
                  <td className="labor-table-data">8.50</td>
                </tr>
                <tr>
                  <td className="labor-table-data">Wednesday 1/18</td>
                  <td className="labor-table-data">9.50</td>
                  <td className="labor-table-data">0:00</td>
                  <td className="labor-table-data">-</td>
                  <td className="labor-table-data">-</td>
                  <td className="labor-table-data">9</td>
                  <td className="labor-table-data">0.50</td>
                  <td className="labor-table-data">8.50</td>
                </tr>
                <tr>
                  <td className="labor-table-data">Thursday 1/19</td>
                  <td className="labor-table-data">9.50</td>
                  <td className="labor-table-data">0:00</td>
                  <td className="labor-table-data">-</td>
                  <td className="labor-table-data">-</td>
                  <td className="labor-table-data"> 9</td>
                  <td className="labor-table-data">0.50</td>
                  <td className="labor-table-data">8.50</td>
                </tr>
                <tr>
                  <td className="labor-table-data">Friday 1/20</td>
                  <td className="labor-table-data">9.50</td>
                  <td className="labor-table-data">0:00</td>
                  <td className="labor-table-data">-</td>
                  <td className="labor-table-data">-</td>
                  <td className="labor-table-data">9</td>
                  <td className="labor-table-data">0.50</td>
                  <td className="labor-table-data">8.50</td>
                </tr>
                <tr>
                  <td className="labor-table-data">Saturday 1/21</td>
                  <td className="labor-table-data">9.50</td>
                  <td className="labor-table-data">0:00</td>
                  <td className="labor-table-data">-</td>
                  <td className="labor-table-data">-</td>
                  <td className="labor-table-data">9</td>
                  <td className="labor-table-data">0.50</td>
                  <td className="labor-table-data">8.50</td>
                </tr>
                <tr>
                  <td className="labor-table-data">Sunday 1/22</td>
                  <td className="labor-table-data">9.50</td>
                  <td className="labor-table-data">0:00</td>
                  <td className="labor-table-data">-</td>
                  <td className="labor-table-data">-</td>
                  <td className="labor-table-data">9</td>
                  <td className="labor-table-data">0.50</td>
                  <td className="labor-table-data">8.50</td>
                </tr>
                <tr style={{backgroundColor:"#676767", color:"white"}}>
                  <td className="labor-table-data">TOTALS</td>
                  <td className="labor-table-data"></td>
                  <td className="labor-table-data"></td>
                  <td className="labor-table-data"></td>
                  <td className="labor-table-data"></td>
                  <td className="labor-table-data">40</td>
                  <td className="labor-table-data">45</td>
                  <td className="labor-table-data">5</td>
                </tr>
              </tbody>
            </table>
           </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} style={{backgroundColor:"#575757",color:"white",padding:10}}
                  color="primary" autoFocus>
            Go Back
          </Button>
        </DialogActions>
      </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
export default LaborOverages;