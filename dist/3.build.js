webpackJsonp([3],{29:function(t,i,e){"use strict";function a(t){e(43)}Object.defineProperty(i,"__esModule",{value:!0});var n=e(35),r=e(45),s=e(5),l=a,c=s(n.a,r.a,!1,l,"data-v-3d03cf1b",null);i.default=c.exports},35:function(t,i,e){"use strict";var a=e(9);i.a={data:function(){return{imglist:[]}},methods:{allimg:function(t){this.$router.push({path:"/allimg",query:{Seriaid:this.Seriaid,imgid:t}})}},mounted:function(){var t=this,i=this.$route.query.Seriaid;this.Seriaid=i,Object(a.f)(i).then(function(i){t.imglist=i.data})}}},43:function(t,i,e){var a=e(44);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(4)("aa851c4a",a,!0,{})},44:function(t,i,e){i=t.exports=e(3)(!1),i.push([t.i,"ul[data-v-3d03cf1b]{width:100%}ul li[data-v-3d03cf1b]{width:33.3339%;list-style:none;display:inline-block}.type[data-v-3d03cf1b]{position:absolute;left:0;width:32.5%;text-align:center;color:#fff;height:49%;background:rgba(56,90,130,.5)}.type p[data-v-3d03cf1b]{margin-top:30px}.imgbox[data-v-3d03cf1b]{position:relative}ul li img[data-v-3d03cf1b]{width:135px;height:135px}",""])},45:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",t._l(t.imglist,function(i,a){return e("div",{key:a,staticClass:"imgbox"},[e("div",{staticClass:"type",on:{click:function(e){t.allimg(i.Id)}}},[e("p",[t._v(t._s(i.Name))]),t._v(" "),e("p",[t._v(t._s(i.Count)+">")])]),t._v(" "),e("ul",t._l(i.List,function(t,i){return e("li",{key:i},[e("img",{attrs:{src:t.Url.replace("{0}",t.LowSize),alt:""}})])}))])}))},n=[],r={render:a,staticRenderFns:n};i.a=r}});
//# sourceMappingURL=3.build.js.map