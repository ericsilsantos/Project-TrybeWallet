import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPrice, actionSeveExpences } from '../actions/index';

const ALIMENTAÇÂO = 'Alimentação';

class FormExpense extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ALIMENTAÇÂO,
    };
  }

  handleChange = ({ target }) => {
    const { value, id } = target;
    this.setState({ [id]: value });
    // console.log(this.state);
  }

  getToGetPrice = async () => {
    const { getPrice } = this.props;
    await getPrice();
  }

  handleButton = async () => {
    await this.getToGetPrice();
    const { price, saveExchange } = this.props;
    // console.log(price);
    saveExchange({ ...this.state, exchangeRates: price });
    const { id } = this.state;
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: ALIMENTAÇÂO,
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <fieldset>
        <form>
          <label htmlFor="description">
            Descrição:
            <input
              onChange={ this.handleChange }
              value={ description }
              data-testid="description-input"
              id="description"
              type="text"
            />
          </label>
          <label htmlFor="value">
            Valor:
            <input
              onChange={ this.handleChange }
              value={ value }
              data-testid="value-input"
              id="value"
              type="number"
            />
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              value={ currency }
              onChange={ this.handleChange }
              data-testid="currency-input"
              id="currency"
            >
              {currencies
                .map((moeda) => (
                  <option key={ moeda } value={ moeda }>{moeda}</option>))}
            </select>
          </label>
          <label htmlFor="method">
            Método de Pagamento:
            <select
              value={ method }
              onChange={ this.handleChange }
              data-testid="method-input"
              id="method"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            <select
              value={ tag }
              onChange={ this.handleChange }
              data-testid="tag-input"
              id="tag"
            >
              <option value={ ALIMENTAÇÂO }>Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            onClick={ this.handleButton }
            type="button"
          >
            Adicionar despesa
          </button>
        </form>
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  price: state.wallet.price,
});

const mapDispatchToProps = (dispatch) => ({
  getPrice: () => dispatch(fetchPrice()),
  saveExchange: (payload) => dispatch(actionSeveExpences(payload)),
});

FormExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getPrice: PropTypes.func.isRequired,
  saveExchange: PropTypes.func.isRequired,
  price: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);
