import React, { Component } from 'react';
import { List, InputItem, Toast } from 'antd-mobile';
import getUser from 'utils/store-getter/getUser';
import './index.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.goback = this.goback.bind(this);
  }

  goback() {
    this.props.history.go(-1);
  }

  componentDidMount() {
    this.refs.username.focus();
  }

  formRegistSubmit = () => {
    let username = this.refs.username.state.value;
    let password = this.refs.password.state.value;
    this.props.saveUser(username, password);
  };

  shouldComponentUpdate() {
    Toast.info('注册成功！', 1);
    this.props.history.push('/user/login');
    return true;
  }

  render() {
    return (
      <div className="register-box">
        <header id="head">
          <div className="userTop">
            <span className="go-back" onClick={this.goback}>
              返回
            </span>
            <p id="t-index">注册</p>
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
          <p className="register-btn" onClick={this.formRegistSubmit}>
            提交
          </p>
        </form>
      </div>
    );
  }
}

export default getUser(Register);
