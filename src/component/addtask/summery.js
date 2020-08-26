import React, {Component} from 'react';
import { Link} from "react-router-dom";
import {summary}  from "./summaryInfo";
import { connect } from 'react-redux';

class Summary extends Component{
  render(){
    return (
      <div className="col-6 col-md-6 col-lg-6 summaryHeader">
        <h4>Summary</h4>
        {summary.map((val,ind)=>{
         let count= this.props.taskList.filter((valtask)=>{
            return valtask.sumaryName==val.summaryName;
          })
            return <div className="innerSummary" key={ind}>
            <div><span>{val.summaryName}</span></div><div><span>{count.length}</span></div>
            </div>
        })}
      <Link to="/"> <div className="mx-auto viewbtn"> view task</div></Link>
      </div>
    );
  }

}
const mapStateToProps = ({ taskReducer: { taskList} }) => ({
  taskList
});
export default connect(mapStateToProps)(Summary);
