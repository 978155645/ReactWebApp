import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './register/Register';
import Login from './login/Login';
import Personal from './Personal';

class User extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/user" exact component={Personal} />
          <Route path="/user/register" exact component={Register} />
          <Route path="/user/login" exact component={Login} />
        </Switch>
      </div>
    );
  }
};

export default User;
