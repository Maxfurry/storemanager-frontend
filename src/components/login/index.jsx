import React from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

import './style/index.scss';

const LoginForm = () => (
  <div className="login-form">
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="large">
          <Segment stacked>
            <Form.Input fluid icon="user" iconPosition="left" placeholder="Username" />
            <p> Password </p>
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Button className="loginButton" size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginForm;
