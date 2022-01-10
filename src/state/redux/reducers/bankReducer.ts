import { BankAction } from '../actions';
import { ActionTypes } from './../action_types/index';
const initialState = 0

export const bankReducer = (state: number = initialState, action: BankAction) => {
    switch (action.type) {
        case ActionTypes.DEPOSIT:
            return state + action.payload;
        case ActionTypes.WITHDRAW:
            return state - action.payload;
        case ActionTypes.BANKRUPT:
            return 0;

    default:
        return state
    }
}
