// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCY,
  GET_PRICE,
  SAVE_EXPENCES,
  DELETE_EXPENCE,
  ENABLE_EDIT_EXPENCE,
  EDIT_EXPENCE } from '../actions';

const STATE_INICIAL = {
  currencies: [],
  expenses: [],
  price: {},
  enableEdit: false,
  expenseToEdit: [],
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
  case ENABLE_EDIT_EXPENCE:
    return { ...state,
      enableEdit: true,
      expenseToEdit: state.expenses.filter((exp) => exp.id === action.state) };
  case EDIT_EXPENCE:
    return { ...state,
      enableEdit: false,
      expenses: state.expenses.map((exp) => (exp.id === action.state.id ? ({
        ...exp,
        ...action.state,
      }) : (exp))) };
  default:
    return state;
  }
};

export default wallet;
