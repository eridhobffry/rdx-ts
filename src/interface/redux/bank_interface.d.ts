import { ActionTypes } from '../../state/redux/action_types/index';
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