webpackJsonp([4],{30:function(t,a,i){"use strict";function e(t){i(46)}Object.defineProperty(a,"__esModule",{value:!0});var o=i(36),n=i(48),r=i(5),s=e,d=r(o.a,n.a,!1,s,"data-v-462667e4",null);a.default=d.exports},36:function(t,a,i){"use strict";var e=i(9);a.a={data:function(){return{detaildata:[],yearArr:[],carList:[],newList:[],idx:0}},methods:{getyear:function(t){this.idx=t;var a=[];this.carList[t].list.forEach(function(t){var i=t.exhaust_str+"/"+t.horse_power+"/"+t.inhale_type;a.push({title:i,list:[t]})}),this.newList=a},toimg:function(){this.$router.push({path:"/img",query:{Seriaid:this.detaildata.SerialID}})},tuotation:function(){var t=this.detaildata.BottomEntranceLink,a=t.match(/car\/(\S*)/);this.$router.push({path:"/quotation",query:{carid:a[1]}})}},mounted:function(){var t=this,a=this.$route.query.detailid;Object(e.c)(a).then(function(a){t.detaildata=a.data;var i=t.detaildata.list,e=["全部"],o=[{year:"全部",list:[]}];i.forEach(function(t,a){var i=t.market_attribute.year;-1===e.indexOf(i)?(e.push(i),o.push({year:i,list:[t]})):o.forEach(function(a){-1!=a.year.indexOf(i)&&a.list.push(t)}),o[0].list.push(t)}),t.carList=o,t.yearArr=e;var n=[];t.carList[t.idx].list.forEach(function(t){var a=t.exhaust_str+"/"+t.horse_power+"/"+t.inhale_type;n.push({title:a,list:[t]})}),t.newList=n})}}},46:function(t,a,i){var e=i(47);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(4)("30a44bfa",e,!0,{})},47:function(t,a,i){a=t.exports=i(3)(!1),a.push([t.i,".detailpage[data-v-462667e4]{background:#f4f4f4}.topimg[data-v-462667e4]{width:100%;position:relative}.topimg img[data-v-462667e4]{width:100%;height:260px}.info[data-v-462667e4]{width:96%;padding:3% 2%;position:relative;margin-top:-40px;background:#fff}.info p[data-v-462667e4]:first-child{font-size:20px;color:red;font-weight:500}.info p[data-v-462667e4]:nth-child(2){font-size:14px;color:silver}.action[data-v-462667e4]{-webkit-box-pack:justify;justify-content:space-between;width:50%;position:absolute;right:4px;top:12px}.actionbtn[data-v-462667e4]{width:100%;height:38px;color:#fff;background:#00afff;border-radius:5px;font-size:18px;border:none}.nian[data-v-462667e4]{width:100%;background:#fff;margin-top:6px}.nian ul li[data-v-462667e4]{display:inline-block;margin:0 10px;font-size:18px;line-height:50px}.canshu[data-v-462667e4]{background:#fff}.active[data-v-462667e4]{color:#3aacff}.btns[data-v-462667e4]{border:none;border-top:1px solid #eee;width:100%;height:44px;font-size:18px;color:#00afff;background:#fff;font-weight:500}.uls[data-v-462667e4]{background:#fff}.uls li[data-v-462667e4]{padding:0 10px;border-bottom:1px solid #f4f4f4;overflow:hidden}.uls li p[data-v-462667e4]:first-child{padding:10px 0;font-size:16px;line-height:16px;color:#3d3d3d}.uls li p[data-v-462667e4]:nth-child(2){color:#bdbdbd;font-size:14px}.uls li p[data-v-462667e4]:nth-child(3){text-align:right;padding-bottom:1px;color:#818181;padding:10px 0}.uls li p:nth-child(3) span[data-v-462667e4]{font-size:12px}.uls li p:nth-child(3) span[data-v-462667e4]:nth-child(2){font-size:16px;color:#ff2336;margin-left:10px}.cartype[data-v-462667e4]{padding:0 10px;height:27px;line-height:27px;font-size:14px;color:#999;background:#f4f4f4}.bottom[data-v-462667e4]{position:fixed;width:100%;bottom:0;z-index:99;background:#3aacff;height:60px;color:#fff;text-align:center}.bottom p[data-v-462667e4]:first-child{font-size:18px;padding-top:10px;font-weight:500}.bottom p[data-v-462667e4]:nth-child(2){font-size:14px}.caryear div[data-v-462667e4]{margin-bottom:8px}.allpic[data-v-462667e4]{position:absolute;right:20px;bottom:20%;display:block;width:100px;background:rgba(0,0,0,.6);border-radius:20px;text-align:center;color:#fff;font-size:14px}",""])},48:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"detailpage"},[i("div",{staticClass:"topimg",on:{click:function(a){t.toimg()}}},[i("img",{attrs:{src:t.detaildata.CoverPhoto,alt:""}}),t._v(" "),i("span",{staticClass:"allpic"},[t._v(t._s(t.detaildata.pic_group_count)+"张照片")])]),t._v(" "),i("div",{staticClass:"info"},[i("p",[t._v(t._s(t.detaildata.market_attribute&&t.detaildata.market_attribute.dealer_price))]),t._v(" "),i("p",[t._v("指导价 "+t._s(t.detaildata.market_attribute&&t.detaildata.market_attribute.official_refer_price))]),t._v(" "),i("div",{staticClass:"action"},[i("button",{staticClass:"actionbtn",on:{click:t.tuotation}},[t._v("询问底价")])])]),t._v(" "),i("div",{staticClass:"nian"},[i("ul",t._l(t.yearArr,function(a,e){return i("li",{key:e,class:e==t.idx?"active":"",on:{click:function(a){t.getyear(e)}}},[t._v(t._s(a))])}))]),t._v(" "),i("div",{staticClass:"caryear"},t._l(t.newList,function(a,e){return i("div",{key:e},[i("p",{staticClass:"cartype"},[t._v(t._s(a.title))]),t._v(" "),i("ul",{staticClass:"uls"},t._l(a.list,function(a,e){return i("li",{key:e},[i("p",[t._v(t._s(a.market_attribute.year)+"款 "+t._s(a.car_name))]),t._v(" "),i("p",[t._v(t._s(a.horse_power)+"马力 "+t._s(a.gear_num)+"档")]),t._v(" "),i("p",[i("span",[t._v("指导价 "+t._s(a.market_attribute.official_refer_price))]),t._v(" "),i("span",[t._v(" "+t._s(a.market_attribute.dealer_price_min)+"起")])]),t._v(" "),i("button",{staticClass:"btns"},[t._v("询问底价")])])}))])})),t._v(" "),t._m(0)])},o=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"bottom"},[i("p",[t._v("询问底价")]),t._v(" "),i("p",[t._v("本地经销商为你报价")])])}],n={render:e,staticRenderFns:o};a.a=n}});
//# sourceMappingURL=4.build.js.map