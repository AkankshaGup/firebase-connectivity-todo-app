import React, {Component} from 'react';
import TaskList from "./tasklist";
import AddTask from "./addtask"

class ShowTask extends Component{
  render(){
    return (
      <div className="container">
          <div className="row">
          <div className="col-12 col-md-8 col-lg-8 mx-auto Maincontainer">
              <div className="row">
              <TaskList /><AddTask />
              </div>
             </div>           
          </div>
      </div>
    );
  }

}

export default ShowTask;
