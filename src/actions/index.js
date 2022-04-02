// Coloque aqui suas actions
import fetchCurrencyAPI from '../service/currencyAPI';

export const GET_EMAIL = 'GET_EMAIL';
export const GET_CURRENCY = 'GET_CURRENCY';
export const LOADING_API = 'LOADING_API';
export const GET_PRICE = 'GET_PRICE';
export const SAVE_EXPENCES = 'SAVE_EXPENCES';
export const DELETE_EXPENCE = 'DELETE_EXPENCE';
export const EDIT_EXPENCE = 'EDIT_EXPENCE';

export const actionGetEmail = (state) => ({
  type: GET_EMAIL,
  state,
});

export const actionGetCurrency = (state) => ({
  type: GET_CURRENCY,
  state,
});

export const actionGetPrice = (state) => ({
  type: GET_PRICE,
  state,
});

export const actionSeveExpences = (state) => ({
  type: SAVE_EXPENCES,
  state,
});

export const actionDeleteExpence = (state) => ({
  type: DELETE_EXPENCE,
  state,
});

export const actionEditExpence = (state) => ({
  type: EDIT_EXPENCE,
  state,
});

export const actionLoading = () => ({ type: LOADING_API });

export const fetchCurrency = () => async (dispatch) => {
  dispatch(actionLoading());
  try {
    const resultAPI = await fetchCurrencyAPI();
    const listCurrencies = Object.keys(resultAPI).filter((key) => key !== 'USDT');
    dispatch(actionGetCurrency(listCurrencies));
  } catch (error) {
    dispatch({ type: 'ERRO_API', payload: error });
  }
};

export const fetchPrice = () => async (dispatch) => {
  // dispatch(actionLoading());
  try {
    const resultAPI = await fetchCurrencyAPI();
    dispatch(actionGetPrice(resultAPI));
  } catch (error) {
    dispatch({ type: 'ERRO_API', payload: error });
  }
};
