import database from '../firebase/firebase';


  export const startAddTask=(obj)=>{
    return dispatch=>{
        database.ref('taskList').push(obj)
        .then((snapshot)=>{
         return dispatch({
            type:"ADD_NEWTASK",
            payload:{
                id:snapshot.key,
                ...obj
            }
        })
        })
       
    }
}

export const setTaskToReducer=()=>{
    return dispatch=>{
        database.ref('taskList').once('value')
        .then((snapshot)=>{
            const List = [];

            snapshot.forEach((childSnapshot) => {
                List.push({
                  id: childSnapshot.key,
                  ...childSnapshot.val()
                });
              });

         return dispatch({
            type:"SET_TASK",
            payload:List
        })
        })
       
    }
}

export const updateActivateTab=(tab)=>{
    return dispatch=>dispatch({
        type:"ACTIVATE_TAB",
        payload:tab
    })
}
export const isCompletedTask=(id,isCompleted,arr)=>{
    return dispatch=>database.ref(`taskList/${id}`).update({isCompleted:!isCompleted}).then(() => {
        return dispatch({
            type:"IS_COMPLETED",
            payload:arr
        })
    })
 
}
export const updateTask=(id,obj,arr)=>{
    return dispatch=>database.ref(`taskList/${id}`).update(obj).then(() => {
        return dispatch({
            type:"UPDATE_TASK",
            payload:arr
        })
    })
 
}
export const removeTask=(id,arr)=>{
    return dispatch=> database.ref(`taskList/${id}`).remove().then(() => {
        return dispatch({
            type:"REMOVE_TASK",
            payload:arr
        })
    })
 
}

  