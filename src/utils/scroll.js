import BScroll from 'better-scroll';
import http from 'utils/http';
import { Toast } from 'antd-mobile';
export default ({ el, lists, goodsList, url, params, _this }) => {
  let currPage = 1;
  let totalPages = 0;
  let bScroll = new BScroll(el, {
    pullUpLoad: {
      threshold: 50
    },
    click: true
	});

  totalPages = Math.ceil(goodsList.new_goods_count / lists.length);

  bScroll.on('pullingUp', async () => {
    if (currPage < totalPages) {
      let result = await http({
        method: 'get',
        url,
        params: Object.assign(params, { page: currPage + 1 })
      });
      console.log(_this);
      _this.setState({
        lists: lists.push(...result.data.goods)
      });
      _this.forceUpdate();
      setTimeout(() => {
        bScroll.refresh();
        currPage++;
        bScroll.finishPullUp();
      }, 0);
    }
    if (currPage === totalPages) {
      Toast.loading('到底了~', 1, () => {
        console.log('到底了~');
      });
      bScroll.finishPullUp();
    }
  });
};
