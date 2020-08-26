// task Reducer

const taskReducerDefaultState ={
  activeTab: "All",
  taskList:[]
};

export default (state = taskReducerDefaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'ACTIVATE_TAB':
      return {taskList:[...state.taskList],activeTab:payload};
    case 'ADD_NEWTASK':
      return {taskList:[...state.taskList, payload],activeTab:state.activeTab};
      case "IS_COMPLETED":
        return {taskList:payload,activeTab:state.activeTab};
        case "UPDATE_TASK":
        return {taskList:payload,activeTab:state.activeTab};
   case "REMOVE_TASK":
     return {taskList:payload,activeTab:state.activeTab};
    case 'SET_TASK':
      return {taskList:payload,activeTab:state.activeTab};
    default:
      return state;
  }
};
