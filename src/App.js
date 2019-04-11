import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import TabBar from 'components/layout/TabBar';
import { routes } from './router';
import NoMatch from 'pages/NoMatch';
import './App.scss';

class App extends Component {
  constructor() {
		super();
		this.state = {
			showTabBar: true
		}
  }

  renderTab() {
    return routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      )
    })
  }

  componentWillReceiveProps(props) {
		const excludeRoutes = [
			'/user/register',
			'/user/login',
			'/subcate',
			'/details'
		]

    let username = JSON.parse(localStorage.getItem('username'));

    if (excludeRoutes.indexOf(props.location.pathname) !== -1) {
      this.setState({
        showTabBar: false
      })
    } else {
      this.setState({
        showTabBar: true
      })
      if (props.location.pathname === '/cart') {
        if (!username) {
          this.props.history.push('/user/login');
        }
      }
    }
  }

  render() {
    return (
      <div className="app-box">
        <section>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/home" />} />
            <Route
              path="/home"
              exact
              render={() => <Redirect to="/home/specialgoods" />}
            />
            {this.renderTab()}
            <Route component={NoMatch} />
          </Switch>
        </section>
        {this.state.showTabBar && <TabBar />}
      </div>
    )
  }
};

export default withRouter(App);
