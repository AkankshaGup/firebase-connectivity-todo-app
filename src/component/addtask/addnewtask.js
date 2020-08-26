import React, {Component} from 'react';
import {summary}  from "./summaryInfo"
import { connect } from 'react-redux';
import Switch from 'react-toggle-switch';
import "react-toggle-switch/dist/css/switch.min.css" 
import {startAddTask,updateTask} from "../../action/curdOperationonTask"

class AddNewTask extends Component{
  constructor(props){
    super(props);
    this.state={
      sumaryName:"all thing",
      discription:"",
      where:"",
      when:"",
      isCompleted:false,
      btnVal:"add task",
      key:""
    }
  }
componentDidMount=()=>{
  if(this.props.updateTask !==undefined){
    let data=this.props.updateTask;
    this.setState(()=>({
      sumaryName:data.sumaryName,
      discription:data.discription,
      where:data.where,
      when:data.when,
      isCompleted:data.isCompleted,
      btnVal:"update",
      key:data.id
     }));
  }
}


  addNewTask=()=>{
    let sumaryName=this.state.sumaryName;
    let discription=this.state.discription;
    let where=this.state.where;
    let when=this.state.when;
    let isCompleted=this.state.isCompleted;
    let obj={
      sumaryName,
      discription,
      where,
      when,
      isCompleted
    }
    if(this.props.updateTask !==undefined){
      let arr = this.props.taskList.map((val,ind)=>{
        if(val.id==this.state.key){
            return {id:val.id,...obj};
        }
        else{
            return val;
        }
    });
      this.props.dispatch(updateTask(this.state.key,obj,arr));
      this.setState(()=>({
        sumaryName:"all thing",
      discription:"",
      where:"",
      when:"",
      isCompleted:false,
      btnVal:"add task",
      key:""
      }))
    }else{
      this.props.dispatch(startAddTask(obj));
      this.setState(()=>({
        sumaryName:"all thing",
      discription:"",
      where:"",
      when:"",
      isCompleted:false,
      btnVal:"add task",
      key:""
      }))
    }
  
  }
  setSummary=(e)=>{
    let val=e.target.value; 
   this.setState(()=>({
    sumaryName:val,
   }));
  }
  setDiscription=(e)=>{
    let val=e.target.value; 
    this.setState(()=>({
      discription:val,
     }));
  }
  setWhere=(e)=>{
    let val=e.target.value; 
    this.setState(()=>({
      where:val
     }));
  }
  setWhen=(e)=>{
    let val=e.target.value; 
    this.setState(()=>({
      when:val
     }));
  }
  toggleSwitch=()=>{
    this.setState(()=>({
      isCompleted:!this.state.isCompleted
     }));
  }
  render(){
    return (
      <div className="col-6 col-md-6 col-lg-6 " style={{padding:"0px",clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}>
        <div className="cloudIcon2">
       <h3> <i className="fa fa-cloud"></i></h3>
       <span className="text-capitalize font-weight-bold newTask">New Task</span>
        </div>
        <div className="inputHeader">
          <form>
            <select className="inputfield" value={this.state.sumaryName} onChange={this.setSummary}>
               {summary.map((val,ind)=>{
                   return <option key={ind} value={val.summaryName}>{val.summaryName}</option>
               })}
            </select>
            <input type="text" placeholder="What i have to do?" className="inputfield"
            value={this.state.discription} onChange={this.setDiscription} />
            <input type="text" placeholder="Whare?" className="inputfield"
             value={this.state.where}onChange={this.setWhere} />
            <input type="date" value={this.state.when} placeholder="When?" className="inputfield"
             onChange={this.setWhen} style={{width:"76%"}} /> <Switch onClick={this.toggleSwitch} on={this.state.isCompleted}/><br />
            <span>*required field</span>
            <input type="button" value={this.state.btnVal} onClick={this.addNewTask} className="inputfield btninput" />
            </form> </div>
      </div>
    );
  }

}
const mapStateToProps = ({ taskReducer: { taskList} }) => ({
  taskList
});
export default connect(mapStateToProps, null)(AddNewTask);
