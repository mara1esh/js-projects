import {AXIOS_NOTES_SUCCESS, REMOVE_NOTE, ADD_TO_NOTES} from '../constants'
import {indexBy, merge, prop} from 'ramda'

const initialState = {

};

export default (state = initialState, action) => {
    switch (action.type) {
        case AXIOS_NOTES_SUCCESS:
            return [...action.payload];
        case REMOVE_NOTE:
            return state = state.filter( i => i._id !== action.payload);
        case ADD_TO_NOTES:
            return [...state, action.payload];
        default:
            return state;
    }
}