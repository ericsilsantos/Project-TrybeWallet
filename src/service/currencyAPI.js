const CURRENCY_API = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrencyAPI = async () => {
  const response = await fetch(CURRENCY_API);
  const data = await response.json();
  return data;
};

export default fetchCurrencyAPI;
