(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){e.exports=a(222)},114:function(e,t,a){},138:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t){function a(){document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+"px"}a(),window.onresize=a},218:function(e,t,a){},219:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(23),r=a.n(s),i=a(2),o=a(4),l=a(3),u=a(5),m=a(6),p=a(98),d=a(228),h=a(225),f=a(229),b=a(227),g=(a(114),a(18)),E=a.n(g),v={getNavList:function(){return function(e){E()({url:"/data/tabBar.json"}).then(function(t){var a={type:"GET_NAV_BAR",payload:t.data};e(a)}).catch(function(e){return e})}},getMySwiper:function(){return function(e){E.a.get("/api/getIndexFirstPaintInfo",{params:{cid:"",zy_ids:"p8_c4_l4",app_name:"zhe",app_version:"",platform:"",catname:"newest_zhe"}}).then(function(t){var a={type:"GET_MY_SWIPER",payload:t.data.adsInfo.slide_ads.config.slide};e(a)}).catch(function(e){console.log(e)})}},getGoodList:function(e,t){return function(a){E.a.get("/api/getGoods",{params:e}).then(function(e){var n={type:t,payload:e.data};a(n)}).catch(function(e){console.log(e)})}}},y=a(16),j=a(7),O=function(e){return Object(y.b)(function(e){return e.home},function(e){return Object(j.b)(v,e)})(e)},N=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){return c.a.createElement(b.a,{activeClassName:"active",to:this.props.route_path},c.a.createElement("img",{className:"img-default",src:this.props.default_url,alt:"\u56fe\u7247\u672a\u52a0\u8f7d\u6210\u529f"}),c.a.createElement("img",{className:"hide img-active",src:this.props.active_url,alt:"\u56fe\u7247\u672a\u52a0\u8f7d\u6210\u529f"}),c.a.createElement("span",null,this.props.text))}}]),t}(n.Component),k=O(function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.props.getNavList()}},{key:"shouldComponentUpdate",value:function(e){return!(!e.navList||e.navList===this.props.navList)}},{key:"renderItem",value:function(){return this.props.navList&&this.props.navList.map(function(e){return c.a.createElement(N,Object.assign({key:e.id},e))})}},{key:"render",value:function(){return c.a.createElement("div",{className:"tab-bar-box"},c.a.createElement("div",{className:"tab-bar"},this.renderItem()))}}]),t}(n.Component)),_=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"header-box"},c.a.createElement("img",{width:"100%",src:"//jp.juancdn.com/jpwebapp/images/go_load_new.png",alt:""}))}}]),t}(n.Component),w=(a(138),a(50)),S=a.n(w),L=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"search-box"},c.a.createElement("div",{className:"search"},c.a.createElement("img",{className:"search-logo",src:S.a,alt:""}),c.a.createElement("span",{className:"search-img"},c.a.createElement("img",{src:"https://s1.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png",alt:""})),c.a.createElement("span",null,"\u641c\u7d22")),c.a.createElement("div",{className:"classify"},c.a.createElement("img",{src:"https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png",alt:""})))}}]),t}(n.Component),C=a(108),x=(a(139),a(140),function(e){return c.a.createElement("div",{className:"swiper-slide"},c.a.createElement("div",{className:"slide-item"},c.a.createElement("img",{width:"100%",src:e.src,alt:""})))}),A=O(function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.props.getMySwiper()}},{key:"shouldComponentUpdate",value:function(e){return!(!e.mySwiper||e.mySwiper===this.props.mySwiper)}},{key:"renderItem",value:function(){return this.props.mySwiper&&this.props.mySwiper.map(function(e){return c.a.createElement(x,{key:e.id,src:e.pic})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"swiper-container"},c.a.createElement("div",{className:"swiper-wrapper"},this.renderItem()),c.a.createElement("div",{className:"swiper-pagination"}))}},{key:"componentDidUpdate",value:function(){this.swiper=new C.a(".swiper-container",{loop:!0,autoplay:!0,pagination:{el:".swiper-pagination"}})}}]),t}(n.Component)),I=(a(141),function(e){return c.a.createElement("a",{className:"item",href:e.href},c.a.createElement("img",{src:e.url,alt:""}))}),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={advertising1:[{href:"https://m.juanpi.com/qiang",url:"https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png"},{href:"https://m.juanpi.com/act/timebuy_new?mjuanpi_wx=1",url:"https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png?imageMogr2/quality/85!/format/png"},{href:"http://web.juanpi.com/brands/clearance?mjuanpi_wx=1",url:"https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png"},{href:"https://mact.juanpi.com/shcs?mjuanpi_wx=1",url:"https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png)"}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"rendList",value:function(){return this.state.advertising1.map(function(e,t){return c.a.createElement(I,Object.assign({key:t},e))})}},{key:"render",value:function(){return c.a.createElement("div",{className:"advertising-box"},c.a.createElement("div",{className:"advertising1-list"},this.rendList()),c.a.createElement("div",{className:"advertising2-list"},c.a.createElement("div",{className:"advertising2-left"},c.a.createElement("a",{href:"https://m.juanpi.com/act/timebuy_new?mjuanpi_wx=1",style:{width:"100%",height:"100%",backgroundImage:"url(https://s2.juancdn.com/jas/190222/c/e/5c6f547833b089342d08bda2_540x656.gif)"}}," ")),c.a.createElement("div",{className:"advertising2-right"},c.a.createElement("a",{href:"http://web.juanpi.com/brands/clearance?mjuanpi_wx=1",style:{width:"100%",height:"50%",backgroundImage:"url(https://goods7.juancdn.com/jas/190222/c/7/5c6fbafab6f8ea7f45477b89_540x328.png?iopcmd=convert&amp;Q=85&amp;dst=png)"}}," "),c.a.createElement("a",{href:"https://mact.juanpi.com/shcs?mjuanpi_wx=1",style:{width:"100%",height:"50%",backgroundImage:"url(https://goods7.juancdn.com/jas/190220/d/b/5c6d21f4b6f8ea1aff1bb94c_540x328.png?iopcmd=convert&amp;Q=85&amp;dst=png)"}}," "))),c.a.createElement("div",{className:"advertising3-list"},c.a.createElement("a",{href:"https://web.juanpi.com/",style:{width:" 100%",height:"100%",backgroundImage:"url(https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png)"}}," ")))}}]),t}(n.Component),J=(a(142),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.goods_id,a=e.pic_url,n=e.logo_url,s=e.cprice,r=e.oprice,i=e.coupon_tips,o=e.title,l=e.time_left;return c.a.createElement("div",{className:"good-item item","data-id":t},c.a.createElement(b.a,{to:{pathname:"/details",state:t}},c.a.createElement("div",{className:"goods-img"},c.a.createElement("img",{width:"100%",src:a,alt:""})),c.a.createElement("div",{className:"goods-logo"},c.a.createElement("img",{src:n,alt:""})),c.a.createElement("div",{className:"goods-info"},!i&&c.a.createElement("p",{className:"price"},"\uffe5",s,c.a.createElement("span",{className:"del-price"},"\uffe5",r)),c.a.createElement("p",{className:"sales"},i),c.a.createElement("p",{className:"title"},o),c.a.createElement("span",{className:"flag"},l))))}}]),t}(n.Component)),U=a(72),M=a.n(U),G=(a(40),a(24)),R=a.n(G),P=a(107),z=a(101),D=a(102),W=function(e){var t=e.method,a=e.url,n=e.params;return E()({method:t||"get",url:a,params:n}).then(function(e){return e.data}).catch(function(e){return e})},Z=function(e){var t,a=e.el,n=e.lists,c=e.goodsList,s=e.url,r=e.params,i=e._this,o=1,l=new D.a(a,{pullUpLoad:{threshold:50},click:!0});t=Math.ceil(c.new_goods_count/n.length),l.on("pullingUp",Object(z.a)(M.a.mark(function e(){var a;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o<t)){e.next=8;break}return e.next=3,W({method:"get",url:s,params:Object.assign(r,{page:o+1})});case 3:a=e.sent,console.log(i),i.setState({lists:n.push.apply(n,Object(P.a)(a.data.goods))}),i.forceUpdate(),setTimeout(function(){l.refresh(),o++,l.finishPullUp()},0);case 8:o===t&&(R.a.loading("\u5230\u5e95\u4e86~",1,function(){console.log("\u5230\u5e95\u4e86~")}),l.finishPullUp());case 9:case"end":return e.stop()}},e)})))},K=O(function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={params:{page:1,zy_ids:"p8_c4_l4",app_name:"zhe",catname:"tab_hpzc",flag:"tab_hpzc"}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.props.specialList&&this.props.specialList.data||this.props.getGoodList(this.state.params,"GET_SPECIAL_LIST")}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.specialList&&e.specialList!==this.props.specialList?(Z({el:"section",goodsList:e.specialList.data,lists:e.specialList.data.goods,_this:this,url:"/api/getGoods",params:this.state.params}),!0):!!this.props.specialList.data}},{key:"rendItem",value:function(){var e=this.props.specialList;return e.data&&e.data.goods.map(function(e,t){return c.a.createElement(J,Object.assign({key:t},e))})}},{key:"render",value:function(){return c.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",background:"#fff"}},this.rendItem())}},{key:"componentWillUnmount",value:function(){this.setState=function(e,t){}}}]),t}(n.Component)),Q=O(function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={params:{page:1,zy_ids:"p8_c4_l4",app_name:"zhe",catname:"tab_hpdp",flag:"tab_hpdp"}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.props.singleList&&this.props.singleList.data||this.props.getGoodList(this.state.params,"GET_SINGE_LIST"),this.setState=function(e,t){}}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.singleList&&e.singleList!==this.props.singleList?(Z({el:"section",goodsList:e.singleList.data,lists:e.singleList.data.goods,_this:this,url:"/api/getGoods",params:this.state.params}),!0):!!this.props.singleList.data}},{key:"rendItem",value:function(){var e=this.props.singleList;return e.data&&e.data.goods.map(function(e,t){return c.a.createElement(J,Object.assign({key:t},e))})}},{key:"render",value:function(){return c.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",background:"#fff"}},this.rendItem())}},{key:"componentWillUnmount",value:function(){this.setState=function(e,t){}}}]),t}(n.Component)),V=(a(190),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(_,null),c.a.createElement(L,null),c.a.createElement(A,null),c.a.createElement(T,null),c.a.createElement("ul",{className:"select-box"},c.a.createElement("li",null,c.a.createElement(b.a,{activeClassName:"active",to:"/home/specialgoods"},"\u7cbe\u9009\u4e13\u573a")),c.a.createElement("li",null,c.a.createElement(b.a,{activeClassName:"active",to:"/home/singegoods"},"\u7cbe\u9009\u5355\u54c1"))),c.a.createElement(d.a,null,c.a.createElement(p.a,{path:"/home/specialgoods",component:K}),c.a.createElement(p.a,{path:"/home/singegoods",component:Q}),c.a.createElement(p.a,{component:K})))}}]),t}(n.Component)),B=(a(191),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"classify-search-box"},c.a.createElement("div",{className:"search"},c.a.createElement("img",{className:"search-logo",src:S.a,alt:""}),c.a.createElement("span",null,"\u641c\u7d22\u5546\u54c1")))}}]),t}(n.Component)),q=(a(192),a(51)),Y=a.n(q),X={getClassifyList:function(){return function(e){Y()("https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1551354568409&callback=jsonp2",null,function(t,a){t?console.error(t.message):e({type:"GET_CLASSIFY",payload:a})})}}},F=function(e){return Object(y.b)(function(e){return e.classify},function(e){return Object(j.b)(X,e)})(e)},H=(a(196),function(e){var t=e.icon,a=e.name,n=e.id;return c.a.createElement("div",{className:"classify-item"},c.a.createElement(b.a,{to:{pathname:"/subcate",state:"".concat(n)}},c.a.createElement("img",{src:"//s2.juancdn.com".concat(t),alt:""}),c.a.createElement("p",null,a)))}),$=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"renderList",value:function(){var e=this.props.lists;return e&&e.map(function(e){return c.a.createElement(H,Object.assign({key:e.id},e))})}},{key:"render",value:function(){return c.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},this.renderList())}}]),t}(n.Component),ee=F(function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={curList:[],currentIndex:0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"selectClassify",value:function(e,t){this.setState({curList:e,currentIndex:t})}},{key:"componentWillMount",value:function(){this.props.getClassifyList()}},{key:"componentWillReceiveProps",value:function(e){this.setState({curList:e.classifyList[0].secondCateList})}},{key:"rendLink",value:function(){var e=this;return this.props.classifyList&&this.props.classifyList.map(function(t,a){return c.a.createElement("li",{key:t.id,className:a===e.state.currentIndex?"active":null,onClick:e.selectClassify.bind(e,t.secondCateList,a)},t.name)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"classify-container"},c.a.createElement("div",{className:"list-left"},c.a.createElement("ul",null,this.rendLink())),c.a.createElement("div",{className:"list-right"},c.a.createElement("div",{className:"classify-list"},c.a.createElement($,{lists:this.state.curList}))))}}]),t}(n.Component)),te=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"classify-box",style:{backgroundColor:"#fff",height:"100%",display:"flex",flexDirection:"column"}},c.a.createElement(B,null),c.a.createElement(ee,null))}}]),t}(n.Component),ae={addCart:function(e,t){return function(a){var n;if(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).cart).cartList.some(function(t,a){return t.goods_id===e&&(n=a,!0)})){a({type:"ADD_CART",payload:n})}else{var c={type:"ADD_CART",payload:t};t.goods_id=e,t.num=1,a(c)}}}};var ne=function(e){return Object(y.b)(function(e){return e.cart},function(e){return Object(j.b)(ae,e)})(e)},ce=(a(197),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"checkedOne",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.goods_origin_url,a=e.goods_title,n=e.sprice,s=e.oprice,r=e.num,i=e.goods_id;return c.a.createElement("div",{className:"shop-item"},c.a.createElement("div",{className:"check-box"},c.a.createElement("input",{type:"checkbox",className:"check-btn",onClick:this.checkedOne.bind(this,i)}),c.a.createElement("span",{className:"mint-checkbox-core"})),c.a.createElement("div",{className:"shop-img"},c.a.createElement("img",{width:"100%",src:t,alt:""})),c.a.createElement("div",{className:"shop-info"},c.a.createElement("p",{className:"shop-title"},a),c.a.createElement("p",{className:"price","v-show":"isEdit"},"\uffe5",n,c.a.createElement("span",{className:"del-price"},"\uffe5",s),c.a.createElement("span",{className:"shop-num"},"X",r))))}}]),t}(n.Component)),se=(a(198),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"total-prices-box"},c.a.createElement("div",{className:"check-box"},c.a.createElement("input",{type:"checkbox",className:"check-btn"}),c.a.createElement("span",{className:"mint-checkbox-core"}),c.a.createElement("span",{className:"checkall-text"},"\u5168\u9009")),c.a.createElement("div",{"v-show":"isEdit",className:"total-cart"},c.a.createElement("p",{className:"total-prices"},"\u5408\u8ba1",c.a.createElement("span",null,"\uffe50"),c.a.createElement("span",{className:"cart-btn"},"\u7ed3\u7b97(0)"))))}}]),t}(n.Component)),re=(a(199),ne(function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"rendCartItem",value:function(){var e=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).cart).cartList;return e&&e.map(function(e){return c.a.createElement(ce,Object.assign({key:e.goods_id},e))})}},{key:"render",value:function(){return c.a.createElement("div",{className:"cart-box"},c.a.createElement("div",{className:"cart-title"},c.a.createElement("p",{className:"title"},"\u8d2d\u7269\u8f66"),c.a.createElement("span",{className:"edit"},"\u7f16\u8f91")),c.a.createElement("div",{className:"shop-box"},c.a.createElement("div",{className:"shop-list"},this.rendCartItem())),c.a.createElement(se,null))}}]),t}(n.Component))),ie=(a(67),a(52)),oe=a.n(ie),le=(a(95),a(37)),ue=a.n(le),me=a(15),pe={saveUser:function(e,t){return function(a){a({type:"SAVE_USER",payload:{username:e,password:t}})}}},de=function(e){return Object(y.b)(function(e){return e.user},function(e){return Object(j.b)(pe,e)})(e)},he=(a(210),de(function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).formRegistSubmit=function(){var e=a.refs.username.state.value,t=a.refs.password.state.value;a.props.saveUser(e,t)},a.state={username:"",password:""},a.goback=a.goback.bind(Object(me.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"goback",value:function(){this.props.history.go(-1)}},{key:"componentDidMount",value:function(){this.refs.username.focus()}},{key:"shouldComponentUpdate",value:function(){return R.a.info("\u6ce8\u518c\u6210\u529f\uff01",1),this.props.history.push("/user/login"),!0}},{key:"render",value:function(){return c.a.createElement("div",{className:"register-box"},c.a.createElement("header",{id:"head"},c.a.createElement("div",{className:"userTop"},c.a.createElement("span",{className:"go-back",onClick:this.goback},"\u8fd4\u56de"),c.a.createElement("p",{id:"t-index"},"\u6ce8\u518c"))),c.a.createElement("form",{id:"register"},c.a.createElement(oe.a,null,c.a.createElement(ue.a,{clear:!0,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",ref:"username"}),c.a.createElement(ue.a,{clear:!0,type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",ref:"password"})),c.a.createElement("p",{className:"register-btn",onClick:this.formRegistSubmit},"\u63d0\u4ea4")))}}]),t}(n.Component))),fe=(a(211),de(function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).goregister=function(){a.props.history.push("/user/register")},a.formLoginSubmit=function(){var e=a.refs.username.state.value,t=a.refs.password.state.value;a.props.username===e&&a.props.password===t?a.props.history.push("/home"):R.a.info("\u7528\u6237\u540d\u6216\u5bc6\u7801\u8f93\u5165\u9519\u8bef\uff01",1)},a.goback=a.goback.bind(Object(me.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"goback",value:function(){this.props.history.go(-1)}},{key:"componentDidMount",value:function(){this.refs.username.focus()}},{key:"render",value:function(){return c.a.createElement("div",{className:"login-box"},c.a.createElement(_,null),c.a.createElement("header",{id:"head"},c.a.createElement("div",{className:"userTop"},c.a.createElement("span",{className:"go-back",onClick:this.goback},"\u8fd4\u56de"),c.a.createElement("p",{id:"t-index"},"\u767b\u5f55"),c.a.createElement("span",{className:"register-btn",onClick:this.goregister},"\u6ce8\u518c"))),c.a.createElement("form",{id:"register"},c.a.createElement(oe.a,null,c.a.createElement(ue.a,{clear:!0,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",ref:"username"}),c.a.createElement(ue.a,{clear:!0,type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",ref:"password"})),c.a.createElement("p",{className:"login-btn",onClick:this.formLoginSubmit},"\u767b\u5f55")))}}]),t}(n.Component))),be=(a(212),de(function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).goback=a.goback.bind(Object(me.a)(a)),a.state={username:"",display1:"block",display2:"none"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"goback",value:function(){this.props.history.go(-1)}},{key:"componentWillMount",value:function(){JSON.parse(localStorage.getItem("username"))&&this.setState({username:JSON.parse(localStorage.getItem("username")),display1:"none",display2:"block"})}},{key:"render",value:function(){return c.a.createElement("div",{className:"user-box"},c.a.createElement("div",{className:"userCenter"},c.a.createElement("header",{id:"head"},c.a.createElement("div",{className:"userTop"},c.a.createElement("span",{className:"go-back",onClick:this.goback},"\u8fd4\u56de"),c.a.createElement("p",{id:"t-index"},"\u4e2a\u4eba\u4e2d\u5fc3")),c.a.createElement("div",{className:"user-login"},c.a.createElement("div",{style:{display:this.state.display1,width:"100%"}},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(b.a,{activeClassName:"active",to:"/user/register"},"\u6ce8\u518c")),c.a.createElement("li",null,c.a.createElement(b.a,{activeClassName:"active",to:"/user/login"},"\u767b\u5f55")))),c.a.createElement("div",{style:{display:this.state.display2}},c.a.createElement("p",{className:"user-name"},this.state.username,",\u6b22\u8fce\u60a8\uff01"))))),c.a.createElement("div",{className:"userBox"},c.a.createElement("ul",{className:"order user-item"},c.a.createElement("li",null,"\u6211\u7684\u8ba2\u5355"),c.a.createElement("li",{className:"all-order"},"\u5168\u90e8\u8ba2\u5355")),c.a.createElement("ul",{className:"coupon user-item"},c.a.createElement("li",null,"\u6211\u7684\u4f18\u60e0\u5238")),c.a.createElement("ul",{className:"fav user-item"},c.a.createElement("li",null,"\u6211\u7684\u6536\u85cf")),c.a.createElement("ul",{className:"pintuan user-item"},c.a.createElement("li",null,"\u6211\u7684\u62fc\u56e2")),c.a.createElement("ul",{className:"free user-item"},c.a.createElement("li",null,"\u6211\u7684\u514d\u5355\u5238"),c.a.createElement("li",{className:"other-style"},"0\u5f20")),c.a.createElement("ul",{className:"jieqian user-item"},c.a.createElement("li",null,"\u501f\u94b1"),c.a.createElement("li",{className:"other-style"},"\u65b0\u7528\u6237\u514d\u8d39\u98861000\u5143"))))}}]),t}(n.Component))),ge=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,null,c.a.createElement(p.a,{path:"/user",exact:!0,component:be}),c.a.createElement(p.a,{path:"/user/register",exact:!0,component:he}),c.a.createElement(p.a,{path:"/user/login",exact:!0,component:fe})))}}]),t}(n.Component),Ee={getSubcateInfo:function(e){var t=this;return function(a){E()({url:"/cate/subcatelist",params:{cate_id:e,pf:8,area:4,bi:222,source:null,front_cid:null}}).then(function(e){var n={type:"GET_SUBCATE_INFO",payload:e.data.name};a(n),t.getSubcateList(e.data.key,e.data.type,1)}).catch(function(e){return e})}},getSubcateList:function(e,t,a){return function(n){Y()("https://shop.juanpi.com/gsort?key=".concat(e,"&type=").concat(t,"&zhouyi_ids=p8_c4_l4&machining=danpin&page=").concat(a,"&rows=10&dtype=JSONP&price_range=&cat_threeids=&filter_id=&callback=gsort_callback"),null,function(e,t){if(e)console.error(e.message);else{var a={type:"GET_SUBCATE_LIST",payload:t.list};n(a)}})}}},ve=function(e){return Object(y.b)(function(e){return e.subcate},function(e){return Object(j.b)(Ee,e)})(e)},ye=(a(213),ve(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).goBack=function(){a.props.history.go(-1)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.location.state;this.props.getSubcateInfo(e)}},{key:"rendItem",value:function(){return this.props.cateList&&this.props.cateList.map(function(e){return c.a.createElement(J,Object.assign({key:e.goods_id},e))})}},{key:"render",value:function(){return c.a.createElement("div",{className:"subcate-block"},c.a.createElement("span",{onClick:this.goBack},"\u8fd4\u56de"),c.a.createElement("span",{className:"h-title"},this.props.cateName),c.a.createElement("div",{className:"subcate-list"},this.rendItem()))}}]),t}(n.Component))),je={getShopInfo:function(e){return function(t){E()({url:"/api/getMemberAboutInfo",params:{goods_id:e,is_pt_goods:0,req_coupons_id:e}}).then(function(e){var a={type:"GET_SHOP_INFO",payload:e.data.skudata.info};t(a)}).catch(function(e){return e})}}},Oe=function(e){return Object(y.b)(function(e){return e.details},function(e){return Object(j.b)(je,e)})(e)},Ne=(a(214),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).addCart=a.addCart.bind(Object(me.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"addCart",value:function(){var e=this.props,t=e.goods_id,a=e.shopInfo;JSON.parse(localStorage.getItem("username"))||this.props.history.push("/user/login"),this.props.addCart(t,a)}},{key:"render",value:function(){return c.a.createElement("div",{className:"car-tab-bar-box"},c.a.createElement("ul",{className:"tab-bar"},c.a.createElement("li",null,c.a.createElement(b.a,{to:"/home"},c.a.createElement("img",{className:"img-default",src:"https://goods4.juancdn.com/bao/171127/6/0/5a1bce9a8150a16b4e766a8d_72x72.png",alt:""}),c.a.createElement("img",{className:"hide img-active",src:"https://s1.juancdn.com/bao/171127/7/0/5a1bce9f8150a16b8658e657_72x72.png",alt:""}),c.a.createElement("span",null,"\u9996\u9875"))),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/cart"},c.a.createElement("img",{className:"img-default",src:"https://s1.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png",alt:""}),c.a.createElement("img",{className:"hide img-active",src:"https://goods4.juancdn.com/bao/170411/7/3/58ecaebba43d1f5e6b2f0d02_72x72.png",alt:""}),c.a.createElement("span",null,"\u8d2d\u7269\u8f66"))),c.a.createElement("li",{id:"buyBtn",onClick:this.addCart},"\u52a0\u5165\u8d2d\u7269\u8f66")))}}]),t}(n.Component)),ke=ne(Object(f.a)(Ne)),_e=(a(215),function(e){return c.a.createElement("div",{className:"details-box"},c.a.createElement("div",{className:"pro_img"},c.a.createElement("img",{width:"100%",src:e.goods_origin_url,alt:""})),c.a.createElement("div",{className:"pro_info"},c.a.createElement("p",{className:"price"},c.a.createElement("span",{className:"yuan"},"\uffe5"),e.sprice,c.a.createElement("span",{className:"del-price"}," \uffe5",e.oprice," "),c.a.createElement("span",{className:"join-number"},e.join_number)),c.a.createElement("p",{className:"title"},e.goods_title)))}),we=[{id:1,path:"/home",component:V},{id:2,path:"/classify",component:te},{id:3,path:"/cart",component:re},{id:4,path:"/user",component:ge},{id:5,path:"/subcate",component:ye},{id:6,path:"/details",component:Oe(function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.props.getShopInfo(this.props.location.state)}},{key:"render",value:function(){return c.a.createElement("div",null,this.props.shopInfo&&c.a.createElement(_e,this.props.shopInfo),this.props.shopInfo&&c.a.createElement(ke,{shopInfo:this.props.shopInfo,goods_id:this.props.location.state}))}}]),t}(n.Component))}],Se=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"404")}}]),t}(n.Component),Le=(a(216),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={showTabBar:!0},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"renderTab",value:function(){return we.map(function(e,t){return c.a.createElement(p.a,{key:t,path:e.path,component:e.component,exact:e.exact})})}},{key:"componentWillReceiveProps",value:function(e){var t=JSON.parse(localStorage.getItem("username"));-1!==["/user/register","/user/login","/subcate","/details"].indexOf(e.location.pathname)?this.setState({showTabBar:!1}):(this.setState({showTabBar:!0}),"/cart"===e.location.pathname&&(t||this.props.history.push("/user/login")))}},{key:"render",value:function(){return c.a.createElement("div",{className:"app-box"},c.a.createElement("section",null,c.a.createElement(d.a,null,c.a.createElement(p.a,{path:"/",exact:!0,render:function(){return c.a.createElement(h.a,{to:"/home"})}}),c.a.createElement(p.a,{path:"/home",exact:!0,render:function(){return c.a.createElement(h.a,{to:"/home/specialgoods"})}}),this.renderTab(),c.a.createElement(p.a,{component:Se}))),this.state.showTabBar&&c.a.createElement(k,null))}}]),t}(n.Component)),Ce=Object(f.a)(Le);a(217);E.a.interceptors.request.use(function(e){return R.a.loading("\u52a0\u8f7d\u4e2d...",null,function(){console.log("\u52a0\u8f7d\u5b8c\u6210!!!")}),e},function(e){return Promise.reject(e)}),E.a.interceptors.response.use(function(e){return R.a.hide(),e},function(e){return Promise.reject(e)});a(218),a(219);var xe=a(226),Ae=a(104),Ie=a(21),Te={navList:null,mySwiper:null,specialList:{},singleList:{}},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0,a=Object(Ie.a)({},e);switch(t.type){case"GET_NAV_BAR":a.navList=t.payload;break;case"GET_MY_SWIPER":a.mySwiper=t.payload;break;case"GET_SPECIAL_LIST":a.specialList=t.payload;break;case"GET_SINGE_LIST":a.singleList=t.payload}return a},Ue={classifyList:[]},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0,a=Object(Ie.a)({},e);switch(t.type){case"GET_CLASSIFY":a.classifyList=t.payload}return a},Ge={username:"",password:""},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0,a=Object(Ie.a)({},e);switch(t.type){case"SAVE_USER":a.username=t.payload.username,a.password=t.payload.password,localStorage.setItem("username",JSON.stringify(t.payload.username))}return a},Pe={cateName:"",cateList:[]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0,a=Object(Ie.a)({},e);switch(t.type){case"GET_SUBCATE_INFO":a.cateName=t.payload;break;case"GET_SUBCATE_LIST":a.cateList=t.payload}return a},De={shopInfo:{}},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0,a=Object(Ie.a)({},e);switch(t.type){case"GET_SHOP_INFO":a.shopInfo=t.payload}return a},Ze={cartList:[],checkedIds:[],count:0},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0,a=Object(Ie.a)({},e);switch(t.type){case"ADD_CART":isNaN(t.payload)?(a.cartList.push(t.payload),a.checkedIds.push(t.payload.goods_id)):a.cartList[t.payload].num++,a.count++}return a},Qe=Object(j.c)({home:Je,classify:Me,user:Re,subcate:ze,details:We,cart:Ke}),Ve=a(73),Be=a(105),qe={key:"root",storage:a.n(Be).a},Ye=Object(Ve.a)(qe,Qe),Xe=Object(j.d)(Ye,Object(j.a)(Ae.a)),Fe=Object(Ve.b)(Xe),He=a(106);r.a.render(c.a.createElement(y.a,{store:Xe},c.a.createElement(He.a,{persistor:Fe},c.a.createElement(xe.a,null,c.a.createElement(p.a,{path:"/",component:Ce})))),document.getElementById("root"))},50:function(e,t){e.exports="data:image/png;base64,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"}},[[109,1,2]]]);
//# sourceMappingURL=main.ff80b874.chunk.js.map