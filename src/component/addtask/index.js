import React, {Component} from 'react';
import Summary from "./summery";
import AddNewTask from "./addnewtask"

class AddTask extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="container">
          <div className="row">
          <div className="col-12 col-md-8 col-lg-8 mx-auto Maincontainer">
              <div className="row">
              <Summary /><AddNewTask updateTask={this.props.location.state}/>
              </div>
             </div>           
          </div>
      </div>
    );
  }

}

export default AddTask;
