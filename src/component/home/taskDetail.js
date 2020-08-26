import React, {Component} from 'react';
import { connect } from 'react-redux';
import Switch from 'react-toggle-switch';
import "react-toggle-switch/dist/css/switch.min.css";
import {isCompletedTask, removeTask} from "../../action/curdOperationonTask"

class TaskDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            task:{}
        }
    }
    componentDidMount=()=>{
        var obj=this.props.taskList.filter((val)=>{
            return val.id==this.props.match.params.id;
        })
        obj=obj[0];
        this.setState(()=>({
            task:obj   
        }))
    }
    componentDidUpdate(prevProps) {
        if (prevProps.taskList !== this.props.taskList) {
            var obj=this.props.taskList.filter((val)=>{
                return val.id==this.props.match.params.id;
            })
            obj=obj[0];
            this.setState(()=>({
                task:obj   
            }))
        }
      }
    toggleSwitch=(id,isCompleted)=>{
       let arr = this.props.taskList.map((val,ind)=>{
            if(val.id==id){
                val.isCompleted=!val.isCompleted;
                return val;
            }
            else{
                return val;
            }
        });
        this.props.dispatch(isCompletedTask(id,isCompleted,arr));
    }
    removeTask=(id)=>{
        var obj=this.props.taskList.filter((val)=>{
            return val.id!=this.props.match.params.id;
        });
        this.props.dispatch(removeTask(id,obj));
        this.props.history.push("/");
    }
    updateTask=(id)=>{
        this.props.history.push({
            pathname: '/addtask',
            state: this.state.task
        })
    }
    backToHome=()=>{
        this.props.history.push("/")
    }
  render(){
     const {discription,id,isCompleted,sumaryName,when,where}=this.state.task;
    return (
        <div className="container">
        <div className="row">
        <div className="col-8 col-md-6 col-lg-6 mx-auto Maincontainer detailcontainer">
        <h3>{discription}</h3>
        <h6>category : {sumaryName}</h6>
        <p>where : {where}</p>
        <p>{discription}!! created at {when}.</p>
        <div><span>{isCompleted?"task is completed":"task is running..."}</span> <Switch onClick={()=>this.toggleSwitch(id,isCompleted)} on={isCompleted}/></div>
        <div className="footerBtn detailbtn">
        <div  onClick={()=>this.updateTask(id)}><span>update</span></div>
        <div onClick={()=>this.removeTask(id)}><span>remove</span></div>
        <div onClick={()=>this.backToHome()}><span>back to home</span></div>
        </div>
        </div>
        </div>
        </div>
    );
  }

}
const mapStateToProps = ({ taskReducer: { taskList} }) => ({
  taskList
});
export default connect(mapStateToProps)(TaskDetail);
