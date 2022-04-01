// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY } from '../actions';

const STATE_INICIAL = {
  currencies: [],
  expenses: '',
};

const wallet = (state = STATE_INICIAL, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return { ...state, currencies: action.state };
  default:
    return state;
  }
};

export default wallet;
