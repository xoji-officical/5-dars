import { createContext, useReducer, useState } from "react";

const darkMode = createContext();

function reducer(state, {type, payload = null}){
     switch(type){
          case "CHANGE_MODE":
               return {...state, darkmode: !state.darkmode };
           
     }
}

export function Provider ({ children}){
     const [state, dispatch] = useReducer(reducer, {
          darkmode: false,
     });


     function ChangeMode(){
          return dispatch({type: 'CHANGE_MODE'})
     }

     return <darkMode.Provider value={{state, ChangeMode}}>{children}</darkMode.Provider>

}