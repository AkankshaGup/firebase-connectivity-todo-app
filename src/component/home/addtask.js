import React, {Component} from 'react';
import { Link} from "react-router-dom";


class AddTask extends Component{
  render(){
    
    return (
      <div className="col-6 col-md-6 col-lg-6 addTaskHeader">
        <h3>Hi</h3>
        <span>
          Nothing to do yet? Think about it and let's start!
        </span>
       <Link to="/addtask"> <div className="mx-auto viewbtn"> add task</div></Link>
      </div>
    );
  }

}

export default AddTask;
