import {SET_FIELD,RESET} from './InfoFormConstants';

export const onFieldChange = (fieldName, fieldValue) =>{
    return {
        type: SET_FIELD,
        fieldName: fieldName,
        fieldValue: fieldValue
    };
}

export const onResetForm = () =>{
    return {
        type: RESET
    };
}