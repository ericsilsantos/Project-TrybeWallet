import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// const TEMPORARIO = 0;

class Header extends React.Component {
  render() {
    const { userEmail, expenses } = this.props;
    // console.log(expenses);
    let total = 0;
    if (expenses.length >= 1) {
      total = expenses
        .map((expen) => (expen.value * expen.exchangeRates[expen.currency].ask))
        .reduce((result, number) => result + number);
    }
    return (
      <header className="header">
        <p
          className="user"
          data-testid="email-field"
        >
          {`Userário: ${userEmail}`}
        </p>
        <p>
          Despesa Tolal:
          <span
            data-testid="total-field"
          >
            {parseFloat(total.toFixed(2))}
          </span>
        </p>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    exchangeRates: PropTypes.objectOf(
      PropTypes.shape({
        ask: PropTypes.string,
      }),
    ),
  })).isRequired,
};

export default connect(mapStateToProps)(Header);
