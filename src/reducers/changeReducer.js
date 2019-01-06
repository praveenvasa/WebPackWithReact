import * as actionTypes from '../constants/actionTypes';

const initialState = {loading:false,repo_data:[]};
export const changeReducer = (state = initialState, action) => {
    console.log('In reducer')
    switch (action.type) {
        case actionTypes.LOADING:
            return {repo_data:[],loading:true};
        case actionTypes.CHANGE:
            return {repo_data:action.payload,loading:false};
        case actionTypes.NOTHING_SELECTED: 
            return {loading:false,repo_data:[]};
        default:
            return state;
    }
}