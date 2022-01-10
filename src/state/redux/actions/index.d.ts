import { ActionTypes } from "../action_types";

interface DepositAction {
    type: ActionTypes.DEPOSIT,
    payload: number
}
interface WithdrawAction {
    type: ActionTypes.WITHDRAW,
    payload: number
}
interface BankruptAction {
    type: ActionTypes.BANKRUPT,
}

type BankAction =
    DepositAction |
    WithdrawAction |
    BankruptAction