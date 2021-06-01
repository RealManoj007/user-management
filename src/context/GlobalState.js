import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

//initial State
const initialState={
    users:[]
}

//createContext
export const GlobalContext=createContext(initialState);

//Provider Component
export const GlobalProvider=({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
    const removeUser=(id)=>{
        console.log("Removing ID is ",id);
        dispatch({type:'REMOVE_USER',payload:id})
    }

//Actions to add new User
const addUser=(user)=>{
    console.log("New User is ",user);
    dispatch({type:'ADD_USER',payload:user})
}

//Actions to Edit new User
const editUser=(user)=>{
    console.log("New User is ",user);
    dispatch({type:'EDIT_USER',payload:user})
}


    return(
        <GlobalContext.Provider value={{users:state.users,removeUser:removeUser,addUser:addUser,editUser:editUser}}>
            {children}
        </GlobalContext.Provider>
    )
}
