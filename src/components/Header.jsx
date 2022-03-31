import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TEMPORARIO = 0;

class Header extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header className="header">
        <p
          className="user"
          data-testid="email-field"
        >
          {`Userário: ${userEmail}`}
        </p>
        <p
          data-testid="total-field"
        >
          {`Despesa Tolal: ${TEMPORARIO}`}
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
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
