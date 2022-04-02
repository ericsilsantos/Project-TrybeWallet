// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCY,
  GET_PRICE,
  SAVE_EXPENCES,
  DELETE_EXPENCE,
  EDIT_EXPENCE } from '../actions';

const STATE_INICIAL = {
  currencies: [],
  expenses: [],
  price: {},
};

const wallet = (state = STATE_INICIAL, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state, currencies: action.state };
  case GET_PRICE:
    return { ...state, price: action.state };
  case SAVE_EXPENCES:
    return { ...state, expenses: [...state.expenses, action.state] };
  case DELETE_EXPENCE:
    return { ...state,
      expenses: state.expenses.filter((exp) => exp.id !== action.state) };
  case EDIT_EXPENCE:
    return { ...state };
  default:
    return state;
  }
};

export default wallet;
