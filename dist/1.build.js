webpackJsonp([1],{28:function(t,i,e){"use strict";function n(t){e(39)}Object.defineProperty(i,"__esModule",{value:!0});var s=e(34),r=e(42),l=e(5),a=n,c=l(s.a,r.a,!1,a,null,null);i.default=c.exports},34:function(t,i,e){"use strict";var n=e(9),s=e(41);i.a={name:"index",props:["carlist"],clientx:0,clientx2:0,data:function(){return{cardata:[],startY:0,detaillist:[]}},computed:{},methods:{detailxr:function(t){var i=this;Object(n.d)(t).then(function(t){i.cardata=t.data}),this.$refs.card.style.cssText="right:0%"},todetail:function(t){this.$router.push({path:"/detail",query:{detailid:t}})},starindex:function(t){this.clientx=t.changedTouches[0].pageX},moveindex:function(t){this.clientx2=t.changedTouches[0].pageX},endindex:function(){this.clientx2-this.clientx>50&&(this.$refs.card.style.cssText="right:-77%",this.clientx=0,this.clientx2=0)},touchstar:function(t){},touchMove:function(t){var i=Math.floor((t.touches[0].pageY-this.offsetTop)/this.letterheight);i<0?i=0:i>this.carlist.length-1&&(i=this.carlist.length-1);var e=this.$refs[i][0].offsetTop;document.querySelector(".di").scrollTop=e},touchend:function(){}},updated:function(){this.offsetTop=this.$refs.letterdiv.getBoundingClientRect().top,this.letterheight=this.$refs.letters.children[0].getBoundingClientRect().height,Object(s.a)(".di")},mounted:function(){}}},39:function(t,i,e){var n=e(40);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(4)("3e18daf7",n,!0,{})},40:function(t,i,e){i=t.exports=e(3)(!1),i.push([t.i,".tit{font-size:16px;line-height:23px;background:#f4f4f4;padding-left:20px;color:#aaa}.lis{width:90%;margin:0 5%;line-height:54px;font-size:18px;height:3.5rem;border-bottom:1px solid #ccc}.lis div{display:inline-block}.lis img{vertical-align:middle;width:12%}.letter{width:20px;padding:0 10px;position:fixed;right:0;top:16%;z-index:2}.letter li{width:100%;font-size:14px;line-height:20px;text-align:center;list-style:none;color:#666}.cardata{position:fixed;top:0;width:75%;height:100%;z-index:3;background:#fff;box-shadow:3px 3px 30px #555;transition:all .5s ease;overflow-y:scroll}.carname{font-size:16px;line-height:23px;background:#f4f4f4;padding-left:20px;color:#aaa}.liss{list-style:none;display:flex;flex-direction:row}.liss img{margin:0 1%}.liss div,.liss img{display:inline-block}.liss div p{line-height:30px}.shellcar{width:99px;height:77px}.uls2{margin-left:10px}.dahezi,.di{width:100%;height:100%}.di{overflow-y:scroll}",""])},41:function(t,i,e){"use strict";function n(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)}function s(t){function i(t){var i=t.getBoundingClientRect();return i.left>0&&i.left<window.innerWidth&&i.top>0&&i.top<window.innerHeight}function e(t){return t.src==t.dataset.src}function s(){[].concat(n(document.querySelectorAll("img[data-src]"))).forEach(function(t){i(t)&&!e(t)&&(t.src=t.dataset.src)})}s(),t?document.querySelector(t).addEventListener("scroll",s):window.inscroll=s}i.a=s},42:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"dahezi"},[e("div",{staticClass:"di"},t._l(t.carlist,function(i,n){return e("div",{key:n},[e("p",{ref:n,refInFor:!0,staticClass:"tit"},[t._v(t._s(i.title))]),t._v(" "),e("ul",t._l(i.list,function(i){return e("li",{key:i.index,staticClass:"lis",staticStyle:{display:"block"},attrs:{id:i.MasterID},on:{click:function(e){t.detailxr(i.MasterID)}}},[e("img",{staticStyle:{display:"inline-block"},attrs:{"data-src":i.CoverPhoto,alt:""}}),t._v(" "),e("span",{staticStyle:{display:"inline-block","margin-left":"10px"}},[t._v(t._s(i.Name))])])}))])})),t._v(" "),e("div",{ref:"letterdiv",staticClass:"letter",on:{touchstart:t.touchstar,touchmove:[t.touchMove,function(t){t.preventDefault()}],touchend:t.touchend}},[e("ul",{ref:"letters"},t._l(t.carlist,function(i,n){return e("li",{key:n,staticClass:"lis3",attrs:{id:n}},[t._v("\n              "+t._s(i.title)+"\n          ")])}))]),t._v(" "),e("div",{ref:"card",staticClass:"cardata",staticStyle:{right:"-77%"},on:{touchstart:t.starindex,touchmove:t.moveindex,touchend:t.endindex}},t._l(t.cardata,function(i){return e("div",{key:i.index,ref:"grouplist",refInFor:!0},[e("p",{staticClass:"carname"},[t._v(t._s(i.GroupName))]),t._v(" "),e("ul",{staticClass:"uls2"},t._l(i.GroupList,function(i,n){return e("li",{key:n,staticClass:"liss",on:{click:function(e){t.todetail(i.SerialID)}}},[e("img",{staticClass:"shellcar",attrs:{src:i.Picture,alt:""}}),t._v(" "),e("div",[e("p",[t._v(t._s(i.AliasName))]),t._v(" "),e("p",{staticStyle:{color:"red"}},[t._v(t._s(i.DealerPrice))])])])}))])}))])},s=[],r={render:n,staticRenderFns:s};i.a=r}});
//# sourceMappingURL=1.build.js.map