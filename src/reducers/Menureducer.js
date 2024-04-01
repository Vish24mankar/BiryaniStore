import * as constant from '../Action/constant';

// Define initial state
export const initialState ={
    allMenu: [],
    Menu: {},
    error: null
}

export default function menureducer(state = initialState, action){
    switch (action.type){
        case constant.GET_MENU_SUCCESS:{
            // const draft = state;
            // draft.allMenu = action.payload;
            // draft.Meu = {}
            // return draft;
            return {...state,Menu:{},allMenu:action.payload};
        }
        case constant.GET_MENU_ERROR,
        constant.ADD_MENU_ERROR,
        constant.UPDATE_MENU_ERROR,
        constant.DELETE_MENU_ERROR:{
            // state.error = action.payload;
            // state.Menu = {}
            // return state;
            // const draft = state;
            // draft.error =action.payload;
            // draft.Menu={};
            // return draft;
                return {...state, Menu:{},error:action.payload};
        }

    // delete menu 
    case constant.DELETE_MENU_SUCCESS:{
        // const draft = state;
        // draft.allMenu = draft.allMenu.filter((d)=>d.id !==action.payload)
        // return draft
    let allMenu = state.allMenu.filter((d)=>d.id !== action.payload)
    return {...state,allMenu:allMenu};
    }

    // update/edit menu
    case constant.UPDATE_MENU_SUCCESS:{
        // const draft = state;
        // const index = draft.allMenu.findIndex((d)=>d.id===action.payload) || -1
        // draft.Menu=draft.allMenu[index]
        // return draft;
        const index = state.allMenu.findIndex((d) => d.id === action.payload.id)
        const Menu = action.payload;
        let allMenu = state.allMenu;
        allMenu.splice(index, 1 , Menu);
        return {...state,Menu: {},allMenu:allMenu};
    }

    // edit 
    case constant.GET_SINGLE_MENU:{
        const index = state.allMenu.findIndex((d) => d.id === action.payload.id)
        const Menu = state.allMenu[index];
        return {...state,Mennu:Menu}
    }

    // add menu
    case constant.ADD_MENU_SUCCESS: {
        // const draft = state;
        // draft.allMenu = [...draft.allproduct,action.payload];
        // draft.Menu = {}
        // return draft;
        let allMenu = this.state.allMenu;
        allMenu.push(action.payload);
        return{...state, Menu:{},allMenu:allMenu};
    }
    
        default:
            return state;
    }
}

// Reducer function
// export default function menureducer(state = initialState, action){
//     switch (action.type){
//         case constant.GET_MENU_SUCCESS:
//             return {...state, Menu: {}, allMenu: action.payload};
//         case constant.GET_MENU_ERROR:
//         case constant.ADD_MENU_ERROR:
//         case constant.UPDATE_MENU_ERROR:
//         case constant.DELETE_MENU_ERROR:
//             return {...state, Menu: {}, error: action.payload};
//         default:
//             return state; // Return current state for unknown actions
//     }
// }
