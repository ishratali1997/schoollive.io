(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{277:function(t,e,l){"use strict";var n={props:["name","welcome"]},o=l(56),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row p-4"},[l("div",{staticClass:"col-lg-9 col-sm-6 col-xs-6 float-left"},[l("p",{staticStyle:{"font-size":"31px"}},[t._v("\n      "+t._s(t.welcome)),l("b",[t._v(" "+t._s(t.name))])])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-3  col-sm-6 col-xs-6 float-right"},[e("div",{staticClass:"dropdown text-lg-right"},[e("button",{staticClass:"btn btn-danger dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[this._v("\n        Abel Estanisao Grade-1 "),e("i",{staticClass:"fa fa-angle-down"})]),this._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[this._v("Abel Estanisao Grade-5 ")])])])])}],!1,null,null,null);e.a=component.exports},278:function(t,e,l){"use strict";var n=l(198),o={methods:{moment:function(){return Object(n.default)()}},filters:{moment:function(t){return Object(n.default)(t).format("ddd, DD MMM YYYY")}}},r=l(56),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"text-danger mt-2 ",staticStyle:{"font-size":"10px"}},[this._v("\n    TODAY DATE\n    "),e("span",{staticClass:"text-center far fa-calendar float-right rounded bg-danger",staticStyle:{"margin-right":"5px","margin-top":"2px",padding:"4px","font-size":"18px"}}),e("br"),this._v(" "),e("span",{staticClass:"text-muted mb-0 float-left ",staticStyle:{"font-size":"13px"}},[this._v(this._s(this._f("moment")(this.date)))])])])}),[],!1,null,null,null);e.a=component.exports},282:function(t,e,l){"use strict";(function(t){l(132);e.a={data:function(){return{getData:[],subjectDetailData:[{id:"1",name:"Ishrat Ali",detail:"The Solar System"},{id:"2",name:"The City School",detail:"Read more about The City School.."},{id:"3",name:"Allied School",detail:"Read more about The City School.."},{id:"4",name:"Allied School",detail:"Read more about The City School.."}],id:""}},methods:{getDetail:function(e){var l=this;this.getData=t.find(this.subjectDetailData,(function(t){return t.id===l.id}))}},created:function(){var t=this;this.$nuxt.$on("on-absent-load",(function(data){t.id=data,t.getDetail(t.id)}))},computed:function(){}}}).call(this,l(280))},333:function(t,e,l){"use strict";l.r(e);var n=l(277),o={data:function(){return{isActive:"",subjectData:[{id:"1",time:"25 Fri",name:"Absen Notice",detail:"I would like to formally request...",score:"Father",quiz:"Time"},{id:"2",time:"25 Fri",name:"Absen Notice",detail:"I would like to formally request...",score:"Father",quiz:"Time"},{id:"3",time:"25 Fri",name:"Absen Notice",detail:"I would like to formally request...",score:"Father",quiz:"Time"},{id:"4",time:"25 Fri",name:"Absen Notice",detail:"I would like to formally request...",score:"Father",quiz:"Time"}]}},props:["name","time","detail"],created:function(){this.isActive=this.subjectData[0].id,$nuxt.$emit("on-absent-load",1),this.onClick(1)},methods:{onClick:function(t){this.isActive=t,$nuxt.$emit("on-absent-load",t)}}},r=l(56),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",t._l(t.subjectData,(function(data,e){return l("div",{key:e},[l("div",{staticClass:"row main-row",class:t.isActive==data.id?"main_row_active":"",staticStyle:{cursor:"pointer","font-size":"12px","margin-top":"0px !important","padding-top":"0px !important"},on:{click:function(e){return t.onClick(data.id)}}},[l("div",{staticClass:"col-lg-2 col-sm-2 col-xs-2 bg-danger text-center m-0 p-0 pt-4 pb-4 rounded text-bold"},[t._v(t._s(data.time))]),t._v(" "),l("div",{staticClass:"col-lg-6 col-sm-6 col-xs-6 m-auto"},[l("p",[l("b",[t._v(t._s(data.name))])]),l("p",{staticClass:"text-muted"},[t._v(t._s(data.detail))])]),t._v(" "),l("div",{staticClass:"col-lg-4 col-sm-4 col-xs-4 m-auto"},[l("p",{staticClass:"text-right text-danger"},[l("b",[t._v(t._s(data.score))])]),l("p",{staticClass:"text-right text-muted mt-0 pt-0"},[t._v(t._s(data.quiz))])])]),t._v(" "),l("hr")])})),0)}),[],!1,null,null,null).exports,d=l(282).a,m=Object(r.a)(d,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-12 "},[l("p",{staticClass:"mb-0 pb-1 float-left",staticStyle:{"font-size":"31px"}},[t._v("\n        Leave of Absent\n      ")]),t._v(" "),l("button",{staticClass:"btn btn-sm btn-danger pl-4 pr-4 float-lg-right"},[t._v("\n        Excused\n      ")])]),t._v(" "),l("div",{staticClass:"col-lg-12 col-sm-12 col-xs-12"},[l("p",{staticClass:"text-muted",staticStyle:{"font-size":"11px"}},[t._v("\n        29 Wed, 31 Fri\n      ")])])]),t._v(" "),l("hr"),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"media ml-2"},[l("img",{staticClass:"m-auto pl-1 img-circle",staticStyle:{width:"40px"},attrs:{src:"dist/img/user1-128x128.jpg",alt:"User Avatar"}}),t._v(" "),l("div",{staticClass:"media-body ml-1"},[l("p",{staticStyle:{"font-size":"14px"}},[t._v("\n          Abel Estanislao\n        ")]),t._v(" "),l("p",{staticClass:"text-muted",staticStyle:{"font-size":"12px"}},[t._v("Father")])])])]),t._v(" "),l("hr"),t._v(" "),l("div",{staticClass:"row m-auto"},[l("h5",{staticStyle:{"font-size":"12px"}},[t._v("Reason")])]),t._v(" "),l("div",{staticClass:"row m-auto"},[l("p",{staticClass:"text-muted",staticStyle:{"font-size":"12px"}},[t._v("\n      I would like to formally request 2 days of leave.\n      ")])]),t._v(" "),l("hr"),t._v(" "),l("div",{staticClass:"row m-auto"},[l("h5",{staticStyle:{"font-size":"12px"}},[t._v("Attachment")]),t._v(" "),l("br")]),t._v(" "),l("div",{staticClass:"row m-auto"},[l("p",[l("span",{staticClass:"text-center far fa-file-alt float-right text-danger",staticStyle:{"font-size":"40px"}})])])])}],!1,null,null,null).exports,v=l(278),f={components:{GradeComponent:n.a,Events:c,EventsDetail:m,TodayDate:v.a},data:function(){return{}},methods:{onTabChange:function(t){}}},h=Object(r.a)(f,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("GradeComponent",{attrs:{name:"Absent Notice",welcome:""}}),t._v(" "),l("div",{staticClass:"row pr-4 pl-4 pt-1",staticStyle:{"margin-left":"1px"}},[l("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[l("li",{staticClass:"nav-item"},[l("a",{staticClass:"nav-link active",attrs:{id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"},on:{click:function(e){return t.onTabChange("current")}}},[t._v("Current Events")])]),t._v(" "),l("li",{staticClass:"nav-item"},[l("a",{staticClass:"nav-link",attrs:{id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"},on:{click:function(e){return t.onTabChange("past")}}},[t._v("Past Events")])])])]),t._v(" "),l("div",{staticClass:"row pr-4 pl-4 pt-3"},[l("div",{staticClass:"col-lg-12"},[l("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[l("div",{staticClass:"tab-pane fade show active",attrs:{id:"home",role:"tabpanel","aria-labelledby":"home-tab"}},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-6 "},[l("div",{staticClass:"card pr-2 pl-2 scroll minimum-height"},[l("TodayDate"),t._v(" "),l("hr",{staticStyle:{"margin-right":"-3px !important","margin-left":"-3px !important","margin-bottom":"-8px !important"}}),t._v(" "),l("div",{staticClass:"card-body",staticStyle:{"padding-top":"-25px !important"}},[l("Events")],1)],1)]),t._v(" "),l("div",{staticClass:"col-lg-6"},[l("div",{staticClass:"card minimum-height",staticStyle:{"margin-left":"-30px","border-right":"7px solid white","border-top":"7px solid white","border-bottom":"7px solid white",background:"#f4f6f9"}},[l("div",{staticClass:"card-body"},[l("EventsDetail")],1)])])])]),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"tab-pane fade",attrs:{id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"}},[t._v("\n          Contact\n        ")])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"tab-pane fade",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}})])}],!1,null,null,null);e.default=h.exports}}]);