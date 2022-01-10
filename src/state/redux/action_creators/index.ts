import { Dispatch } from "redux"
import { BankAction } from "../actions"
import { ActionTypes } from "../action_types"

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({
            type: ActionTypes.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({
            type: ActionTypes.WITHDRAW,
            payload: amount
        })
    }
}

export const bankrupt = () => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({
            type: ActionTypes.BANKRUPT,
        })
    }
}