import React, {Component} from 'react';
import { Link} from "react-router-dom";

class ListItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
      const {val,activetab}=this.props;
    return (
        <Link  to={`/detail/${val.id}`}><div className="innerTaskList">
       <div className="iconDiv"><i className="fa fa-comments"></i></div>
      <div style={{flexGrow:"1",padding: "5px 8px"}}>
        <div className="taskTextList"><span>{val.discription}</span><span>{activetab}</span></div>
        <div className="taskTextList"><span>{val.where}</span><span>{val.sumaryName}</span></div>
      </div>
      </div></Link>
    );
  }

}

export default ListItem;
