const INITIAL_STATE = {
    user: {
      id: null,
      name: '',
      email: '',
      leagues: [],
      teams: [],
    },
    route: 'signIn',
    isSignedIn: false, 
  }

export const CHANGE_ROUTE = "CHANGE_ROUTE";
export const SIGN_OUT = "SIGN_OUT";
export const SET_USER = "SET_USER";

export default INITIAL_STATE;