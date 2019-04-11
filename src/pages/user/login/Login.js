import React, { Component } from 'react';
import Header from 'components/layout/Header';
import { List, InputItem, Toast } from 'antd-mobile';
import getUser from 'utils/store-getter/getUser';
import './index.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.goback = this.goback.bind(this);
  }

  goback() {
    this.props.history.go(-1);
  }

  goregister = () => {
    this.props.history.push('/user/register');
  };

  componentDidMount() {
    this.refs.username.focus();
  }

  formLoginSubmit = () => {
    let username = this.refs.username.state.value;
    let password = this.refs.password.state.value;
    if (this.props.username === username && this.props.password === password) {
      this.props.history.push('/home');
    } else {
      Toast.info('用户名或密码输入错误！', 1);
    }
  };

  render() {
    return (
      <div className="login-box">
        <Header />
        <header id="head">
          <div className="userTop">
            <span className="go-back" onClick={this.goback}>
              返回
            </span>
            <p id="t-index">登录</p>
            <span className="register-btn" onClick={this.goregister}>
              注册
            </span>
          </div>
        </header>
        <form id="register">
          <List>
            <InputItem clear placeholder="请输入用户名" ref="username" />
            <InputItem
              clear
              type="password"
              placeholder="请输入密码"
              ref="password"
            />
          </List>
          <p className="login-btn" onClick={this.formLoginSubmit}>
            登录
          </p>
        </form>
      </div>
    );
  }
}

export default getUser(Login);
