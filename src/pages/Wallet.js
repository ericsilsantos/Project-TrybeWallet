import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Header from '../components/Header';
import { fetchCurrency } from '../actions';
import FormExpense from '../components/FormExpense';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurreencies } = this.props;
    getCurreencies();
  }

  render() {
    return (
      <div>
        <Header />
        <FormExpense />
        <TableExpenses />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurreencies: () => dispatch(fetchCurrency()),
});

Wallet.propTypes = {
  getCurreencies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
