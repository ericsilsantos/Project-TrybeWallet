import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionGetEmail } from '../actions';

const LENGTH_SENHA = 6;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailErrado: true,
      senhaErrado: true,
    };
  }

  handleChange = ({ target }) => {
    const { value, id } = target;
    if (id === 'email') {
      if (value.includes('@' && '.com')) {
        this.setState({
          email: value,
          emailErrado: false,
        });
      } else {
        this.setState({
          emailErrado: true,
        });
      }
    } else if (id === 'senha') {
      if (value.length >= LENGTH_SENHA) {
        this.setState({
          senhaErrado: false,
        });
      } else {
        this.setState({
          senhaErrado: true,
        });
      }
    }
  }

  handleButton = () => {
    const { email } = this.state;
    const { getEmail, history } = this.props;
    getEmail(email);
    history.push('/carteira');
  }

  render() {
    const { emailErrado, senhaErrado } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              onChange={ this.handleChange }
              data-testid="email-input"
              type="text"
            />
          </label>
          { emailErrado ? <span>Email errado</span> : false}
          <label htmlFor="senha">
            Senha
            <input
              id="senha"
              onChange={ this.handleChange }
              data-testid="password-input"
              type="password"
            />
          </label>
          { senhaErrado ? <span>Senha errada</span> : false}
          <button
            onClick={ this.handleButton }
            disabled={ emailErrado || senhaErrado }
            type="button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(actionGetEmail(email)),
});

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
