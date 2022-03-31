// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_EMAIL } from '../actions';

const STATE_INICIAL = {
  email: '',
};

const user = (state = STATE_INICIAL, action) => {
  switch (action.type) {
  case GET_EMAIL:
    return { ...state, email: action.state };
  default:
    return state;
  }
};

export default user;
