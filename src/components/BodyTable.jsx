import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class BodyTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <tbody>
        { expenses.length === 0 ? false : (
          expenses.map((exp) => {
            const { id, value, description, currency, method, tag, exchangeRates } = exp;
            const total = parseFloat(value * exchangeRates[currency].ask).toFixed(2);
            const { name } = exchangeRates[currency];
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{parseFloat(value).toFixed(2)}</td>
                <td>{name.replace('/Real Brasileiro', '')}</td>
                <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{total}</td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  <button
                    onClick={ () => console.log(id) }
                    type="button"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

BodyTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(
      PropTypes.shape({
        name: PropTypes.string,
        ask: PropTypes.string,
      }),
    ),
  })).isRequired,
};

export default connect(mapStateToProps)(BodyTable);
