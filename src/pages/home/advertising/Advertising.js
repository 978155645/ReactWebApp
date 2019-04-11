import React, { Component } from 'react';
import './index.scss';

const AdvertisingList = props => {
  return (
    <a className="item" href={props.href}>
      <img src={props.url} alt="" />
    </a>
  );
};

class Advertising extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advertising1: [
        {
          href: 'https://m.juanpi.com/qiang',
          url:
            'https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png'
        },
        {
          href: 'https://m.juanpi.com/act/timebuy_new?mjuanpi_wx=1',
          url:
            'https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png?imageMogr2/quality/85!/format/png'
        },
        {
          href: 'http://web.juanpi.com/brands/clearance?mjuanpi_wx=1',
          url:
            'https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png'
        },
        {
          href: 'https://mact.juanpi.com/shcs?mjuanpi_wx=1',
          url:
            'https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png)'
        }
      ]
    };
  }

  rendList() {
    return this.state.advertising1.map((item, index) => {
      return <AdvertisingList key={index} {...item} />;
    });
  }

  render() {
    return (
      <div className="advertising-box">
        <div className="advertising1-list">{this.rendList()}</div>
        <div className="advertising2-list">
          <div className="advertising2-left">
            <a
              href="https://m.juanpi.com/act/timebuy_new?mjuanpi_wx=1"
              style={{
                width: '100%',
                height: '100%',
                backgroundImage:
                  'url(https://s2.juancdn.com/jas/190222/c/e/5c6f547833b089342d08bda2_540x656.gif)'
              }}
            >
              {' '}
            </a>
          </div>
          <div className="advertising2-right">
            <a
              href="http://web.juanpi.com/brands/clearance?mjuanpi_wx=1"
              style={{
                width: '100%',
                height: '50%',
                backgroundImage:
                  'url(https://goods7.juancdn.com/jas/190222/c/7/5c6fbafab6f8ea7f45477b89_540x328.png?iopcmd=convert&amp;Q=85&amp;dst=png)'
              }}
            >
              {' '}
            </a>
            <a
              href="https://mact.juanpi.com/shcs?mjuanpi_wx=1"
              style={{
                width: '100%',
                height: '50%',
                backgroundImage:
                  'url(https://goods7.juancdn.com/jas/190220/d/b/5c6d21f4b6f8ea1aff1bb94c_540x328.png?iopcmd=convert&amp;Q=85&amp;dst=png)'
              }}
            >
              {' '}
            </a>
          </div>
        </div>
        <div className="advertising3-list">
          <a
            href="https://web.juanpi.com/"
            style={{
              width: ' 100%',
              height: '100%',
              backgroundImage:
                'url(https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png)'
            }}
          >
            {' '}
          </a>
        </div>
      </div>
    );
  }
}

export default Advertising;
