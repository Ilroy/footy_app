import {CHANGE_ROUTE, SIGN_OUT, SET_USER} from './appConstants'

export const changeRoute = (route) =>{
    return {
        type: CHANGE_ROUTE,
        route: route
    }
}

export const setUser = user =>{
    return {
        type: SET_USER,
        user: user
    }
}

export const signOut = () =>{
    return {
        type: SIGN_OUT
    }
}