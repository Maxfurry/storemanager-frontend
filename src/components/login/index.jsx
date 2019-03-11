import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

import Loading from '../Loader/Loading';

import * as actions from '../../actions/authAction';
import signInValidator from '../../helpers/validators';
import InlineError from '../../helpers/InlineError';

import './style/index.scss';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        password: ''
      },
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    const errors = signInValidator(user);
    if (errors) {
      this.setState({ errors });
    }

    const errorsLength = Object.keys(errors).length;

    if (errorsLength === 0) {
      const { userLogin } = this.props;
      userLogin(user);
    }
  }

  handleChange(event) {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({
      user
    });
  }

  render() {
    const { user, errors } = this.state;
    if (this.props.auth.isAuthenticated) { return <Redirect to="/home" />; }
    return (
      <Fragment>
        <ToastContainer autoClose={5000} />
        <div className="login-form">
          <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Form size="large">
                <Segment stacked>
                  <Form.Input fluid icon="user" iconPosition="left" placeholder="Username" name="name" value={user.name} onChange={this.handleChange} required />
                  {errors.name && <InlineError text={errors.name} />}
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    value={user.password} name="password" onChange={this.handleChange} required />
                  {errors.password && <InlineError text={errors.password} />}
                  {this.props.auth.authIsLoading ? (<Loading size="tiny" />) : null}
                  <Button className="loginButton" size="large" onClick={this.handleSubmit}>
                    Login
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export { LoginForm as Login };

const mapStateToProps = state => ({
  auth: state.authReducer
});

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

LoginForm.propTypes = {
  userLogin: PropTypes.func,
  auth: PropTypes.object
};

LoginForm.defaultProps = {
  userLogin: null,
  auth: {}
};
