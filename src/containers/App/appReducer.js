import INITIAL_STATE
    , {SET_USER
    , SIGN_OUT
    , CHANGE_ROUTE}
     from "./appConstants";



const appReducer = (state, action) =>{
    switch (action.type){
        case SET_USER:
                return {...state, user: action.user}
        case CHANGE_ROUTE:
            return {...state, route:action.route}
        case SIGN_OUT:
            return INITIAL_STATE
        default: 
            throw new Error();
    }
}

export default appReducer;