(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{277:function(t,e,n){"use strict";var l={props:["name","welcome"]},o=n(56),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row p-4"},[n("div",{staticClass:"col-lg-9 col-sm-6 col-xs-6 float-left"},[n("p",{staticStyle:{"font-size":"31px"}},[t._v("\n      "+t._s(t.welcome)),n("b",[t._v(" "+t._s(t.name))])])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-3  col-sm-6 col-xs-6 float-right"},[e("div",{staticClass:"dropdown text-lg-right"},[e("button",{staticClass:"btn btn-danger dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n        Abel Estanisao Grade-1 "),e("i",{staticClass:"fa fa-angle-down"})]),this._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[this._v("Abel Estanisao Grade-5 ")])])])])}],!1,null,null,null);e.a=component.exports},278:function(t,e,n){"use strict";var l=n(198),o={methods:{moment:function(){return Object(l.default)()}},filters:{moment:function(t){return Object(l.default)(t).format("ddd, DD MMM YYYY")}}},r=n(56),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"text-danger mt-2 ",staticStyle:{"font-size":"10px"}},[this._v("\n    TODAY DATE\n    "),e("span",{staticClass:"text-center far fa-calendar float-right rounded bg-danger",staticStyle:{"margin-right":"5px","margin-top":"2px",padding:"4px","font-size":"18px"}}),e("br"),this._v(" "),e("span",{staticClass:"text-muted mb-0 float-left ",staticStyle:{"font-size":"13px"}},[this._v(this._s(this._f("moment")(this.date)))])])])}),[],!1,null,null,null);e.a=component.exports},283:function(t,e,n){"use strict";(function(t){n(132);e.a={name:"Results",props:{msg:"33"},data:function(){return{getData:[],subjectDetailData:[{id:"1",name:"Ishrat Ali",detail:"The Solar System"},{id:"2",name:"The City School",detail:"Read more about The City School.."},{id:"3",name:"Allied School",detail:"Read more about The City School.."},{id:"4",name:"Allied School",detail:"Read more about The City School.."}],id:""}},methods:{getDetail:function(e){var n=this;this.getData=t.find(this.subjectDetailData,(function(t){return t.id===n.id}))}},created:function(){var t=this;this.$nuxt.$on("on-parent-load",(function(data){t.id=data,t.getDetail(t.id)}))},computed:function(){},watch:{msg:function(){var t=this;this.$nuxt.$on("gid",(function(data){return t.id=data})),this.id=this.msg}}}}).call(this,n(280))},334:function(t,e,n){"use strict";n.r(e);var l=n(277),o={data:function(){return{isActive:"",subjectData:[{id:"1",time:"08 Sun",name:"Best Handwriting",detail:"He has best hand writing in class",score:"Tom Holland",quiz:"English"},{id:"2",time:"08 Sun",name:"Best Handwriting",detail:"He has best hand writing in class",score:"Tom Holland",quiz:"English"},{id:"3",time:"08 Sun",name:"Best Handwriting",detail:"He has best hand writing in class",score:"Tom Holland",quiz:"English"},{id:"4",time:"08 Sun",name:"Best Handwriting",detail:"He has best hand writing in class",score:"Tom Holland",quiz:"English"}]}},props:["name","time","detail"],created:function(){this.isActive=this.subjectData[0].id,$nuxt.$emit("on-parent-load",1),this.onClick(1)},methods:{onClick:function(t){this.isActive=t,$nuxt.$emit("on-parent-load",t)}}},r=n(56),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.subjectData,(function(data,e){return n("div",{key:e},[n("div",{staticClass:"row main-row",class:t.isActive==data.id?"main_row_active":"",staticStyle:{cursor:"pointer","font-size":"12px","margin-top":"0px !important","padding-top":"0px !important"},on:{click:function(e){return t.onClick(data.id)}}},[n("div",{staticClass:"col-lg-2 col-sm-2 col-xs-2 bg-danger text-center m-0 p-0 pt-4 pb-4 rounded text-bold"},[t._v(t._s(data.time))]),t._v(" "),n("div",{staticClass:"col-lg-6 col-sm-6 col-xs-6 m-auto"},[n("p",[n("b",[t._v(t._s(data.name))])]),n("p",{staticClass:"text-muted"},[t._v(t._s(data.detail))])]),t._v(" "),n("div",{staticClass:"col-lg-4 col-sm-4 col-xs-4 m-auto"},[n("p",{staticClass:"text-right text-danger"},[n("b",[t._v(t._s(data.score))])]),n("p",{staticClass:"text-right text-muted mt-0 pt-0"},[t._v(t._s(data.quiz))])])]),t._v(" "),n("hr")])})),0)}),[],!1,null,null,null).exports,d=n(283).a,m=Object(r.a)(d,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("img",{staticClass:"p-auto m-auto pb-2 img-rounded",staticStyle:{width:"130px"},attrs:{src:"logo.png",alt:"Logo"}})]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 float-left"},[n("p",{staticClass:"mb-0 pb-1",staticStyle:{"font-size":"31px"}},[t._v("Best Handwriting")])]),t._v(" "),n("div",{staticClass:"col-lg-4 float-right"},[n("button",{staticClass:"btn btn-sm btn-danger  pl-4 pr-4 text-right float-lg-right"},[t._v("\n        09 Mon\n      ")])])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"media ml-2"},[n("img",{staticClass:"m-auto pl-1 img-circle",staticStyle:{width:"40px"},attrs:{src:"dist/img/user1-128x128.jpg",alt:"User Avatar"}}),t._v(" "),n("div",{staticClass:"media-body ml-1"},[n("p",{staticStyle:{"font-size":"14px"}},[t._v("\n          Tom Holland\n        ")]),t._v(" "),n("p",{staticClass:"text-muted",staticStyle:{"font-size":"12px"}},[t._v("English")])])])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"row m-auto"},[n("h5",{staticStyle:{"font-size":"12px"}},[t._v("Detail")])]),t._v(" "),n("div",{staticClass:"row m-auto"},[n("p",{staticClass:"text-muted",staticStyle:{"font-size":"12px"}},[t._v("\n      He has best hand writing in the class.\n      ")])]),t._v(" "),n("hr")])}],!1,null,null,null).exports,v=n(278),h={components:{GradeComponent:l.a,Events:c,EventsDetail:m,TodayDate:v.a},data:function(){return{}},methods:{onTabChange:function(t){}}},f=Object(r.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("GradeComponent",{attrs:{name:"Achievements",welcome:""}}),t._v(" "),n("div",{staticClass:"row pr-4 pl-4 pt-1",staticStyle:{"margin-left":"1px"}},[n("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link active",attrs:{id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"},on:{click:function(e){return t.onTabChange("current")}}},[t._v("Current Events")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"},on:{click:function(e){return t.onTabChange("past")}}},[t._v("Past Events")])])])]),t._v(" "),n("div",{staticClass:"row pr-4 pl-4 pt-3"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[n("div",{staticClass:"tab-pane fade show active",attrs:{id:"home",role:"tabpanel","aria-labelledby":"home-tab"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 "},[n("div",{staticClass:"card pr-2 pl-2 scroll minimum-height"},[n("TodayDate"),t._v(" "),n("hr",{staticStyle:{"margin-right":"-3px !important","margin-left":"-3px !important","margin-bottom":"-8px !important"}}),t._v(" "),n("div",{staticClass:"card-body",staticStyle:{"padding-top":"-25px !important"}},[n("Events")],1)],1)]),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"card minimum-height",staticStyle:{"margin-left":"-30px","border-right":"7px solid white","border-top":"7px solid white","border-bottom":"7px solid white",background:"#f4f6f9"}},[n("div",{staticClass:"card-body"},[n("EventsDetail")],1)])])])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"tab-pane fade",attrs:{id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"}},[t._v("\n          Contact\n        ")])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"tab-pane fade",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}})])}],!1,null,null,null);e.default=f.exports}}]);