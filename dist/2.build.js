webpackJsonp([2],{33:function(t,e,i){"use strict";function a(t){i(56)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(38),l=i(58),n=i(5),r=a,o=n(s.a,l.a,!1,r,null,null);e.default=o.exports},38:function(t,e,i){"use strict";var a=i(9);e.a={data:function(){return{carlistid:[],site:[]}},mounted:function(){var t=this,e=this.$route.query.carid;Object(a.e)(e).then(function(e){t.carlistid=e.data,t.site=e.data.list})}}},56:function(t,e,i){var a=i(57);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(4)("4e06a2ee",a,!0,{})},57:function(t,e,i){e=t.exports=i(3)(!1),e.push([t.i,".topp{height:30px;line-height:30px;background:#79cd92;text-align:center;z-index:99;color:#fff}.topp p,header img{display:inline-block}header img{width:16px;height:16px}.topcar{width:90%;padding:5%;display:flex;flex-direction:row}.carparameter{padding-left:16px}.usmessage{color:#666;background:#eee;font-size:13px;padding:0 5px;line-height:25px}.uls{background:#fff;padding:0 10px}.uls li{font-size:16px;height:44px;line-height:44px;border-bottom:1px solid #eee;box-sizing:border-box;color:#000}.uls li input{font-size:16px;border:none}.uls li input,.uls li span:nth-child(2){padding-right:10px;width:88%;text-align:right;box-sizing:border-box;color:#555}.uls li span:nth-child(2){display:inline-block}.quotation{background:#fff;text-align:center;padding-top:15px;padding-bottom:14px}.quotation button{font-size:16px;color:#fff;width:80%;background:#3aacff;height:35px;border-radius:5px;border:none}.uls2{background:#fff;padding:0 10px;margin-left:0}.uls2 li{list-style:none;display:flex;padding:10px 0;height:90px}.dealers{color:#666;background:#eee;font-size:13px;line-height:25px}.check{margin-top:20px;width:10%}footer button{width:100%;height:50px;line-height:50px;background:#3aacff;text-align:center;font-size:17px;color:#fff;position:fixed;bottom:0;left:0;border:none}",""])},58:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[t._m(0),t._v(" "),i("section",[i("div",{staticClass:"topcar"},[i("img",{staticStyle:{width:"126px",height:"77px"},attrs:{src:t.carlistid.details&&t.carlistid.details.serial.Picture,alt:""}}),t._v(" "),i("div",{staticClass:"carparameter"},[i("p",{staticStyle:{"font-size":"19px","line-height":"28px"}},[t._v(t._s(t.carlistid.details&&t.carlistid.details.serial.AliasName))]),t._v(" "),i("p",{staticStyle:{"font-size":"18px",color:"#333"}},[t._v(t._s(t.carlistid.details&&t.carlistid.details.market_attribute.year)+" "+t._s(t.carlistid.details&&t.carlistid.details.car_name))])])]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"dealers"},[i("p",{staticStyle:{padding:"0 5px"}},[t._v("选择报价经销商")]),t._v(" "),i("ul",{staticClass:"uls2"},t._l(t.site,function(e,a){return i("li",{key:a},[i("input",{staticClass:"check",staticStyle:{"vertical-align":"middle"},attrs:{type:"checkbox"},domProps:{checked:0==a}}),t._v(" "),i("label",{staticStyle:{width:"90%"}},[i("p",{staticStyle:{"font-size":"16px",width:"100%","font-weight":"700"}},[i("span",[t._v(t._s(e.dealerShortName))]),t._v(" "),i("span",{staticStyle:{"font-size":"14px",float:"right",color:"red"}},[t._v(t._s(e.promotePrice)+".万元")])]),t._v(" "),i("p",{staticStyle:{"font-size":"14px",color:"#a2a2a2",width:"78%"}},[t._v(t._s(e.address))])])])}))])]),t._v(" "),t._m(2)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("div",{staticClass:"topp"},[i("p",[t._v("可向多个商家咨询最低价，商家及时回复")]),t._v(" "),i("img",{attrs:{src:"https://h5.chelun.com/2017/official/img/icon-help.png",alt:""}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",{staticClass:"usmessage"},[t._v("个人信息")]),t._v(" "),i("ul",{staticClass:"uls"},[i("li",[i("span",[t._v("姓名")]),t._v(" "),i("input",{attrs:{type:"text",placeholder:"输入你的真实中文姓名",maxlength:"4"}})]),t._v(" "),i("li",[i("span",[t._v("手机")]),t._v(" "),i("input",{attrs:{type:"tel",placeholder:"输入你的真实手机号码",maxlength:"11"}})]),t._v(" "),i("li",[i("span",[t._v("城市")]),t._v(" "),i("span",[t._v("北京")])])]),t._v(" "),i("div",{staticClass:"quotation"},[i("button",[t._v("询最低价")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("button",[t._v("\r\n            询最低价\r\n        ")])])}],l={render:a,staticRenderFns:s};e.a=l}});
//# sourceMappingURL=2.build.js.map