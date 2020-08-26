import React, {Component} from 'react';
import '../App.css';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import ShowTask from "../component/home/index.js";
import AddTask from "../component/addtask/index"
import TaskDetail from "../component/home/taskDetail"

class App extends Component{
  render(){
    return (
      <div>
    <BrowserRouter>
    <Switch>
        <Route path="/" component={ShowTask} exact={true} />
        <Route path="/addtask" component={AddTask} />
        <Route path="/detail/:id" component={TaskDetail} />
        </Switch>
    </BrowserRouter>
      </div>
    );
  }

}

export default App;
