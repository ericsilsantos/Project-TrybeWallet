// Coloque aqui suas actions
import fetchCurrencyAPI from '../service/currencyAPI';

export const GET_EMAIL = 'GET_EMAIL';
export const GET_CURRENCY = 'GET_CURRENCY';
export const LOADING_API = 'LOADING_API';

export const actionGetEmail = (state) => ({
  type: GET_EMAIL,
  state,
});

export const actionGetCurrency = (state) => ({
  type: GET_CURRENCY,
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
