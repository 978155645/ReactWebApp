import React, { Component } from 'react';
import getHome from 'utils/store-getter/getHome';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import './index.scss';

const SwiperItem = props => {
  return (
    <div className="swiper-slide">
      <div className="slide-item">
        <img width="100%" src={props.src} alt="" />
      </div>
    </div>
  );
};

class MySwiper extends Component {
  componentWillMount() {
    this.props.getMySwiper();
  }

  shouldComponentUpdate(nextProps) {
    if (!!nextProps.mySwiper && nextProps.mySwiper !== this.props.mySwiper) {
      return true;
    } else {
      return false;
    }
  }

  renderItem() {
    return (
      this.props.mySwiper &&
      this.props.mySwiper.map(item => {
        return <SwiperItem key={item.id} src={item.pic} />;
      })
    );
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">{this.renderItem()}</div>
        <div className="swiper-pagination" />
      </div>
    );
  }

  componentDidUpdate() {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
}

export default getHome(MySwiper);
