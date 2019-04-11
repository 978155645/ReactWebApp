import React, { Component } from 'react';
import Header from 'components/layout/Header';
import Search from './search/Search';
import MySwiper from './my_swiper/MySwiper';
import Advertising from './advertising/Advertising';
import { Route, Switch, NavLink } from 'react-router-dom';
import SpecialGoods from 'pages/home/goods/SpecialGoods';
import SingeGoods from 'pages/home/goods/SingeGoods';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <MySwiper />
        <Advertising />
        <ul className="select-box">
          <li>
            <NavLink activeClassName="active" to="/home/specialgoods">
              精选专场
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/home/singegoods">
              精选单品
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/home/specialgoods" component={SpecialGoods} />
          <Route path="/home/singegoods" component={SingeGoods} />
          <Route component={SpecialGoods} />
        </Switch>
      </div>
    );
  }
}
