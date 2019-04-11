import React, { Component } from 'react';
import './index.scss';
import getClassify from 'utils/store-getter/getClassify';
import ClassifyItem from '../classitem/ClassifyItem';

class ClassifyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curList: [],
      currentIndex: 0
    };
  }

  selectClassify(lists, index) {
    this.setState({
      curList: lists,
      currentIndex: index
    });
  }

  componentWillMount() {
    this.props.getClassifyList();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      curList: nextProps.classifyList[0].secondCateList
    });
  }

  rendLink() {
    return (
      this.props.classifyList &&
      this.props.classifyList.map((item, index) => {
        return (
          <li
            key={item.id}
            className={index === this.state.currentIndex ? 'active' : null}
            onClick={this.selectClassify.bind(this, item.secondCateList, index)}
          >
            {item.name}
          </li>
        );
      })
    );
  }

  render() {
    return (
      <div className="classify-container">
        <div className="list-left">
          <ul>{this.rendLink()}</ul>
        </div>
        <div className="list-right">
          <div className="classify-list">
            <ClassifyItem lists={this.state.curList} />
          </div>
        </div>
      </div>
    );
  }
}

export default getClassify(ClassifyList);
