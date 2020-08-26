import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setTaskToReducer,updateActivateTab} from "../../action/curdOperationonTask"
import { Link} from "react-router-dom";

class TaskList extends Component{
  constructor(props){
    super(props);
    this.state={
      taskList:[]
    }
  }
  componentDidMount=()=>{
    this.props.dispatch(setTaskToReducer());   
  }
  componentDidUpdate(prevProps) {
    if (prevProps.taskList !== this.props.taskList) {
      this.setState(()=>({
        taskList: this.props.taskList,
      }));
    }
    if (prevProps.activeTab !== this.props.activeTab) {
      this.getTaskList();
    }
  }
  getTaskList = () => {
    const { taskList = [], activeTab } = this.props;
    let newList = taskList;
    if (activeTab === "Active") {
      newList = newList.filter((d) => d.isCompleted === false);
    } else if (activeTab === "Done") {
      newList = newList.filter((d) => d.isCompleted === true);
    }
    this.setState(()=>({
      taskList: newList,
    }));
  };
  render(){
    return (
      <div className="col-6 col-md-6 col-lg-6 " style={{padding:"0px",clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}>
        <div className="cloudIcon"> 
       <h3> <i className="fa fa-cloud"></i></h3>
       <span className="text-capitalize font-weight-bold taskText">my task</span>
    <div><span>{this.state.taskList.length} of {this.props.taskList.length}</span></div>
        </div>
       <div className="taskListHEader">
         
         {this.state.taskList.map((val)=>{
         return(<Link  key={val.id} to={`/detail/${val.id}`}><div className="innerTaskList">
           <Link to="detail"></Link><div className="iconDiv"><i className="fa fa-comments"></i></div>
         <div style={{flexGrow:"1",padding: "5px 8px"}}>
           <div className="taskTextList"><span>{val.discription}</span><span>{this.props.activeTab}</span></div>
           <div className="taskTextList"><span>{val.where}</span><span>{val.sumaryName}</span></div>
         </div>
         </div></Link> )
          
         })}
        </div>
        <div className="footerBtn">
        <div onClick={()=>{this.props.dispatch(updateActivateTab("all"))}}><span>all</span></div>
        <div onClick={()=>{this.props.dispatch(updateActivateTab("Done"))}}><span>done</span></div>
        <div onClick={()=>{this.props.dispatch(updateActivateTab("Active"))}}><span>active</span></div>
        </div>
      </div>
    );
  }

}


const mapStateToProps = ({ taskReducer: { taskList, activeTab } }) => ({
  taskList,
  activeTab,
});

export default connect(mapStateToProps, null)(TaskList);;
