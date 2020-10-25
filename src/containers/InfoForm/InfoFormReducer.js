import INTITAL_STATE, {SET_FIELD,RESET} from './InfoFormConstants';

const formReducer = (state, action) =>{
    switch (action.type){
      case SET_FIELD:
          return {...state, [action.fieldName]: action.fieldValue};
      case RESET:
        return INTITAL_STATE;
      default:
        throw new Error();
    }
  }

  export default formReducer;