import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormExpense extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <fieldset>
        <form>
          <label htmlFor="descrição">
            Descrição:
            <input
              data-testid="description-input"
              id="descrição"
              type="text"
            />
          </label>
          <label htmlFor="valor">
            Valor:
            <input
              data-testid="value-input"
              id="valor"
              type="number"
            />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select data-testid="currency-input" id="moeda">
              {currencies
                .map((currency) => (
                  <option
                    key={ currency }
                    value={ currency }
                  >
                    {currency}
                  </option>))}
            </select>
          </label>
          <label htmlFor="methodPayment">
            Método de Pagamento:
            <select data-testid="method-input" name="methodPayment" id="">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de Crédito">Cartão de crédito</option>
              <option value="Cartão de Débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categorie">
            Categoria:
            <select data-testid="tag-input" name="categorie" id="">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button">Adicionar despeza</button>
        </form>
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(FormExpense);
