import axios from "axios";
import * as constant from './constant'

//get data 
export function getAllMenu(){
    return (dispatch) =>{
        axios.get("http://localhost:8888/Menu").then((response) => 
       dispatch(getMenusuccess(response.data)))
        .catch(error => dispatch(getMenuerror(error.response.data)))
    }
}

export function getMenusuccess(payload){
    return { type : constant.GET_MENU_SUCCESS , payload}
}

export function getMenuerror(payload){
    return {type : constant.GET_MENU_ERROR, payload}
}

    // delete menu
    export function deleteteAllMenu(id){
        return (dispatch) => {
            axios.delete(`http://localhost:8888/Menu/${id}`)
            .then(response => dispatch(deleteMenusuccess(id)))
            .catch(error => dispatch(deleteMenuerror(error.response.data)))
        }
    }

    export function deleteMenusuccess(payload){
        return { type : constant.DELETE_MENU_SUCCESS ,payload}
    }

    export function deleteMenuerror(payload){
        return { type : constant.DELETE_MENU_ERROR, payload}
    }

    // update menu
    export function updateAllMenu(data){
        return (dispatch) =>{
             axios.put(`http://localhost:8888/Menu/${data.id}`,data)
             .then(response => dispatch(updateMenusuccess(data.id)))
             .catch(error => dispatch(updateMenuerror(error.response.data)))
        }
    }
    export function updateMenusuccess(payload){
        return {type: constant.UPDATE_MENU_SUCCESS,payload}
    }
    export function updateMenuerror(payload){
        return {type : constant.UPDATE_MENU_ERROR,payload}
    }

    // add menu 
    export function addAllMenu(data){

        return (dispatch)=>{  
           axios.post("http://localhost:8888/Menu", data)
           .then(response => dispatch(addMenusuccess(data)))
           .catch(error => dispatch(addMenuerror(error.response.data)) )
       
        }
    }
    export function addMenusuccess(payload){
        return { type: constant.ADD_MENU_SUCCESS ,payload}
    }
    
    export function addMenuerror(payload){
        return { type: constant.ADD_MENU_ERROR ,payload}
    }
    // get single menu
    export function getSingleManu(id){
        console.log(id);
        return {type: constant.GET_SINGLE_MENU,payload:id}
    }
