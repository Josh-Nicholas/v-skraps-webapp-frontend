(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4mmy":function(n,t,l){"use strict";l.d(t,"a",function(){return d});var e=l("mrSG"),a=l("jYNz"),i=l("F/XL"),u=l("psW0"),r=l("67Y/"),o=l("9Z1F"),c=l("vubp"),s=l("ybFU"),d=function(){function n(n,t){var l=this;this.actions$=n,this.dashboardService=t,this.loadBalance$=this.actions$.pipe(Object(a.d)(s.a.LoadBalance),Object(u.a)(function(){return l.dashboardService.getBallance().pipe(Object(r.a)(function(n){return new s.g(n)}),Object(o.a)(function(){return Object(i.a)(new s.f)}))})),this.updateBalance$=this.actions$.pipe(Object(a.d)(s.a.UpdateBalance),Object(c.a)(15e3),Object(u.a)(function(){return l.dashboardService.getBallance().pipe(Object(r.a)(function(n){return new s.g(n)}),Object(o.a)(function(){return Object(i.a)(new s.f)}))})),this.loadAssetBalance$=this.actions$.pipe(Object(a.d)(s.a.LoadAssetBalance),Object(u.a)(function(){return l.dashboardService.getAssetBallance().pipe(Object(r.a)(function(n){return new s.d(n)}),Object(o.a)(function(){return Object(i.a)(new s.c)}))}))}return Object(e.__decorate)([Object(a.b)(),Object(e.__metadata)("design:type",Object)],n.prototype,"loadBalance$",void 0),Object(e.__decorate)([Object(a.b)(),Object(e.__metadata)("design:type",Object)],n.prototype,"updateBalance$",void 0),Object(e.__decorate)([Object(a.b)(),Object(e.__metadata)("design:type",Object)],n.prototype,"loadAssetBalance$",void 0),n}()},"58t5":function(n,t,l){"use strict";l.d(t,"a",function(){return d});var e=l("mrSG"),a=l("jYNz"),i=l("KoxX"),u=l("psW0"),r=l("67Y/"),o=l("9Z1F"),c=l("FYXD"),s=l("F/XL"),d=function(){function n(n,t){var l=this;this.actions$=n,this.dashboardService=t,this.loadStats$=this.actions$.pipe(Object(a.d)(i.k.LoadStats),Object(u.a)(function(n){return l.dashboardService.getStatistic(n.payload).pipe(Object(r.a)(function(n){return new i.j(n)}),Object(o.a)(function(){return Object(s.a)(new i.i)}))})),this.loadPerformance$=this.actions$.pipe(Object(a.d)(i.k.LoadPerformance),Object(u.a)(function(){return l.dashboardService.getPerformance().pipe(Object(r.a)(function(n){return new i.g(n)}),Object(o.a)(function(){return Object(s.a)(new i.f)}))})),this.loadChart$=this.actions$.pipe(Object(a.d)(i.k.LoadChart),Object(c.a)("payload"),Object(u.a)(function(n){return l.dashboardService.getChartData(n).pipe(Object(r.a)(function(n){return new i.d(n)}),Object(o.a)(function(){return Object(s.a)(new i.c)}))})),this.setFilter$=this.actions$.pipe(Object(a.d)(i.k.SetFilter,i.k.Init),Object(c.a)("payload"),Object(u.a)(function(n){return Object(s.a)(new i.h(n),new i.b(n))}))}return Object(e.__decorate)([Object(a.b)(),Object(e.__metadata)("design:type",Object)],n.prototype,"loadStats$",void 0),Object(e.__decorate)([Object(a.b)(),Object(e.__metadata)("design:type",Object)],n.prototype,"loadPerformance$",void 0),Object(e.__decorate)([Object(a.b)(),Object(e.__metadata)("design:type",Object)],n.prototype,"loadChart$",void 0),Object(e.__decorate)([Object(a.b)(),Object(e.__metadata)("design:type",Object)],n.prototype,"setFilter$",void 0),n}()},"6IOQ":function(n,t,l){"use strict";var e=l("CcnG"),a=l("9hcF"),i=l("BIwl"),u=l("Ip0R");l("ce5R"),l.d(t,"a",function(){return r}),l.d(t,"b",function(){return c});var r=e["\u0275crt"]({encapsulation:0,styles:[[".performance[_ngcontent-%COMP%]{display:flex;padding:21px 31px;justify-content:left!important}.performance__name[_ngcontent-%COMP%]{font-size:14px;color:#4c4b61;line-height:20px}.performance__item[_ngcontent-%COMP%]{text-align:center;margin:0 10px}.performance__value[_ngcontent-%COMP%]{font-size:14px;color:#183e7a;line-height:19px}.performance__percent[_ngcontent-%COMP%]{font-size:14px;line-height:19px}@media screen and (max-width:991px){.performance__item[_ngcontent-%COMP%]{width:20%;margin-bottom:7.5px;margin-top:7.5px}}@media screen and (max-width:767px){.performance__item[_ngcontent-%COMP%]{width:50%}}"]],data:{}});function o(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,10,"div",[["class","performance__item"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"div",[["class","performance__name"]],null,null,null,null,null)),(n()(),e["\u0275ted"](2,null,["",""])),(n()(),e["\u0275eld"](3,0,null,null,2,"div",[["class","performance__value"]],null,null,null,null,null)),(n()(),e["\u0275ted"](4,null,[" $"," "])),e["\u0275ppd"](5,2),(n()(),e["\u0275eld"](6,0,null,null,4,"app-up-or-down",[["class","performance__percent small"]],null,null,null,a.b,a.a)),e["\u0275did"](7,49152,null,0,i.a,[],{value:[0,"value"]},null),(n()(),e["\u0275eld"](8,0,null,0,2,"div",[],null,null,null,null,null)),(n()(),e["\u0275ted"](9,null,["","$"])),e["\u0275ppd"](10,2)],function(n,t){n(t,7,0,t.context.$implicit.value.quote.USD.percent_change_1h)},function(n,t){n(t,2,0,t.context.$implicit.value.symbol);var l=e["\u0275unv"](t,4,0,n(t,5,0,e["\u0275nov"](t.parent,0),t.context.$implicit.value.quote.USD.price,"0.0-2"));n(t,4,0,l);var a=e["\u0275unv"](t,9,0,n(t,10,0,e["\u0275nov"](t.parent,0),t.context.$implicit.value.quote.USD.percent_change_1h,"0.0-2"));n(t,9,0,a)})}function c(n){return e["\u0275vid"](2,[e["\u0275pid"](0,u.f,[e.LOCALE_ID]),(n()(),e["\u0275eld"](1,0,null,null,4,"div",[["class","panel"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,3,"div",[["class","panel__body performance"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,2,null,o)),e["\u0275did"](4,278528,null,0,u.m,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pid"](0,u.h,[e.KeyValueDiffers])],function(n,t){var l=t.component;n(t,4,0,e["\u0275unv"](t,4,0,e["\u0275nov"](t,5).transform(l.performanceList)))},null)}},"9hcF":function(n,t,l){"use strict";var e=l("CcnG"),a=l("Ip0R"),i=l("Mr+X"),u=l("SMsm");l("BIwl"),l.d(t,"a",function(){return r}),l.d(t,"b",function(){return o});var r=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]:not(.inherit-color)   .value[_ngcontent-%COMP%]{color:#058939}[_nghost-%COMP%]:not(.inherit-color)   .value_down[_ngcontent-%COMP%]{color:#eb0000}.value[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:center}.value[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:7px;margin-right:3px;transform:translateY(-1px);color:#058939}.value_down[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{transform:rotate(180deg);color:#eb0000}.small[_nghost-%COMP%]   .value[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:6px}"]],data:{}});function o(n){return e["\u0275vid"](2,[(n()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","value"]],null,null,null,null,null)),e["\u0275did"](1,278528,null,0,a.l,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](2,{value_down:0}),(n()(),e["\u0275eld"](3,0,null,null,1,"mat-icon",[["class","mat-icon notranslate"],["fontIcon","icon-triangle"],["fontSet","skraps-icons"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,i.b,i.a)),e["\u0275did"](4,9158656,null,0,u.b,[e.ElementRef,u.d,[8,null],[2,u.a]],{inline:[0,"inline"],fontSet:[1,"fontSet"],fontIcon:[2,"fontIcon"]},null),e["\u0275ncd"](null,0)],function(n,t){var l=n(t,2,0,t.component.value<=0);n(t,1,0,"value",l),n(t,4,0,!0,"skraps-icons","icon-triangle")},function(n,t){n(t,3,0,e["\u0275nov"](t,4).inline,"primary"!==e["\u0275nov"](t,4).color&&"accent"!==e["\u0275nov"](t,4).color&&"warn"!==e["\u0275nov"](t,4).color)})}},"D+TJ":function(n,t,l){"use strict";l.d(t,"a",function(){return i});var e=l("CcnG"),a=l("t/Na"),i=function(){function n(n){this.http=n}return n.prototype.getBallance=function(){throw new Error("Method not implemented.")},n.prototype.getAssetBallance=function(){throw new Error("Method not implemented.")},n.prototype.getPerformance=function(){throw new Error("Method not implemented.")},n.prototype.getStatistic=function(n){throw new Error("Method not implemented.")},n.prototype.getChartData=function(n){throw new Error("Method not implemented.")},n.prototype.getReportLink=function(){throw new Error("Method not implemented.")},n.prototype.getWalletLink=function(){throw new Error("Method not implemented.")},n.ngInjectableDef=e.defineInjectable({factory:function(){return new n(e.inject(a.c))},token:n,providedIn:"root"}),n}()},DEJT:function(n,t,l){"use strict";l.d(t,"a",function(){return s});var e=l("yGQT"),a=l("KoxX"),i=l("uKwE"),u=l("t9fZ"),r=l("xMyE"),o=l("ybFU"),c=l("VphZ"),s=function(){function n(n){var t=this;this.store=n,this.curve=c.a,this.filterName="7D",this.filter$=this.store.pipe(Object(e.F)(i.c)),this.performanceList$=this.store.pipe(Object(e.F)(i.d)),this.stats$=this.store.pipe(Object(e.F)(i.f)),this.balance$=this.store.pipe(Object(e.F)(i.e)),this.assetBalance$=this.store.pipe(Object(e.F)(i.a)),this.chartData$=this.store.pipe(Object(e.F)(i.b)),this.store.dispatch(new o.e),this.store.dispatch(new o.h),this.store.dispatch(new a.e),this.store.dispatch(new o.b),this.init$=this.filter$.pipe(Object(u.a)(1),Object(r.a)(function(n){return t.store.dispatch(new a.a(n))})),this.sub=this.init$.subscribe()}return n.prototype.setFilter=function(n){this.filterName=n.period,this.store.dispatch(new a.l(n))},n.prototype.ngOnDestroy=function(){this.sub&&this.sub.unsubscribe()},n}()},E2z9:function(n,t,l){"use strict";var e=l("CcnG"),a=l("Ip0R");l("vTlt"),l.d(t,"a",function(){return i}),l.d(t,"b",function(){return r});var i=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%;display:block;overflow:hidden}.panel_tab[_nghost-%COMP%]{opacity:0;visibility:hidden;height:0}.panel_tab.active[_nghost-%COMP%]{height:auto;opacity:1;visibility:visible}.panel_tab[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]{border-radius:0 12px 12px;margin-bottom:0}@media screen and (max-width:767px){.panel_tab[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]{border-radius:0 0 12px 12px}}.panel_adapt[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]{height:100%}"]],data:{}});function u(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"div",[],null,null,null,null,null)),e["\u0275did"](1,278528,null,0,a.l,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngClass:[0,"ngClass"]},null),(n()(),e["\u0275eld"](2,0,null,null,2,"h2",[],null,null,null,null,null)),e["\u0275did"](3,278528,null,0,a.l,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngClass:[0,"ngClass"]},null),(n()(),e["\u0275ted"](4,null,[" "," "]))],function(n,t){var l=t.component;n(t,1,0,l.classes.header),n(t,3,0,l.classes.title)},function(n,t){n(t,4,0,t.component.title)})}function r(n){return e["\u0275vid"](2,[(n()(),e["\u0275eld"](0,0,null,null,6,"div",[],null,null,null,null,null)),e["\u0275did"](1,278528,null,0,a.l,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngClass:[0,"ngClass"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,u)),e["\u0275did"](3,16384,null,0,a.n,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](4,0,null,null,2,"div",[],null,null,null,null,null)),e["\u0275did"](5,278528,null,0,a.l,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngClass:[0,"ngClass"]},null),e["\u0275ncd"](null,0)],function(n,t){var l=t.component;n(t,1,0,l.classes.main),n(t,3,0,l.title),n(t,5,0,l.classes.body)},null)}},FF3M:function(n,t,l){"use strict";var e=l("CcnG"),a=l("9hcF"),i=l("BIwl"),u=l("Ip0R");l("KXo3"),l.d(t,"a",function(){return r}),l.d(t,"b",function(){return p});var r=e["\u0275crt"]({encapsulation:0,styles:[[".stats[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding-top:30px;padding-bottom:30px}.stats__item[_ngcontent-%COMP%]{padding-left:30px;padding-right:30px;text-align:center}.stats__item[_ngcontent-%COMP%]:not(:first-child){border-left:1px solid #c2c2c2}.stats__name[_ngcontent-%COMP%]{font-size:12px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.8px;color:#6f6e8d;margin-bottom:3px;text-transform:uppercase}.stats__sum[_ngcontent-%COMP%]{font-size:28px;font-weight:300;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#036da1}.current[_ngcontent-%COMP%]{order:0}.previous[_ngcontent-%COMP%]{order:1}.gain_loss[_ngcontent-%COMP%]{order:2}.invested[_ngcontent-%COMP%]{order:3}.round_ups[_ngcontent-%COMP%]{order:4}@media screen and (max-width:991px){.stats[_ngcontent-%COMP%]{flex-wrap:wrap}.stats__item[_ngcontent-%COMP%]{width:33.3%;margin-bottom:10px;margin-top:10px;border-left:0!important}.current[_ngcontent-%COMP%]{order:0}.previous[_ngcontent-%COMP%]{order:2}.gain_loss[_ngcontent-%COMP%]{order:5}.invested[_ngcontent-%COMP%]{order:1}.round_ups[_ngcontent-%COMP%]{order:3}}@media screen and (max-width:767px){.stats[_ngcontent-%COMP%]{margin-left:-15px;margin-right:-15px;padding-left:0;padding-right:0}.stats__item[_ngcontent-%COMP%]{width:50%;border-left:0;padding-left:15px;padding-right:15px}}"]],data:{}});function o(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,4,"app-up-or-down",[["class","inherit-color stats__sum"]],null,null,null,a.b,a.a)),e["\u0275did"](2,49152,null,0,i.a,[],{value:[0,"value"]},null),(n()(),e["\u0275eld"](3,0,null,0,2,"div",[],null,null,null,null,null)),(n()(),e["\u0275ted"](4,null,["$",""])),e["\u0275ppd"](5,1)],function(n,t){n(t,2,0,t.parent.parent.context.$implicit.value.increase)},function(n,t){var l=e["\u0275unv"](t,4,0,n(t,5,0,e["\u0275nov"](t.parent.parent.parent,0),t.parent.parent.context.$implicit.value.value));n(t,4,0,l)})}function c(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","stats__sum"]],null,null,null,null,null)),e["\u0275did"](1,278528,null,0,u.l,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](2,{stats__sum_minus:0}),(n()(),e["\u0275ted"](3,null,[" $"," "])),e["\u0275ppd"](4,1)],function(n,t){var l=n(t,2,0,t.parent.parent.context.$implicit.value.value>0);n(t,1,0,"stats__sum",l)},function(n,t){var l=e["\u0275unv"](t,3,0,n(t,4,0,e["\u0275nov"](t.parent.parent.parent,0),t.parent.parent.context.$implicit.value.value));n(t,3,0,l)})}function s(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,5,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"div",[["class","stats__name"]],null,null,null,null,null)),(n()(),e["\u0275ted"](2,null,["",""])),(n()(),e["\u0275and"](16777216,null,null,1,null,o)),e["\u0275did"](4,16384,null,0,u.n,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),e["\u0275and"](0,[["noIncrease",2]],null,0,null,c))],function(n,t){n(t,4,0,void 0!==t.parent.context.$implicit.value.increase,e["\u0275nov"](t,5))},function(n,t){var l=t.component;n(t,0,0,e["\u0275inlineInterpolate"](1,"stats__item ",t.parent.context.$implicit.key,"")),n(t,2,0,l.statsTitle[t.parent.context.index])})}function d(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,s)),e["\u0275did"](2,16384,null,0,u.n,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](0,null,null,0))],function(n,t){n(t,2,0,t.context.index)},null)}function p(n){return e["\u0275vid"](2,[e["\u0275pid"](0,u.f,[e.LOCALE_ID]),(n()(),e["\u0275eld"](1,0,null,null,3,"div",[["class","stats"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,2,null,d)),e["\u0275did"](3,278528,null,0,u.m,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pid"](0,u.h,[e.KeyValueDiffers])],function(n,t){var l=t.component;n(t,3,0,e["\u0275unv"](t,3,0,e["\u0275nov"](t,4).transform(l.stats)))},null)}},JSOP:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var e=l("CcnG"),a=l("uTIR"),i=function(){return(i=Object.assign||function(n){for(var t,l=1,e=arguments.length;l<e;l++)for(var a in t=arguments[l])Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n}).apply(this,arguments)},u=function(){function n(){this.changedFilter=new e.EventEmitter,this.ePeriodFilter=a.a,this.links=Object.entries(this.ePeriodFilter).map(function(n){return{text:n[1],value:n[0]}}),this.filterTime={"1H":60,"1D":1440,"7D":10080,"1M":40320,"1Y":483840}}return n.prototype.changeFilter=function(n){var t=i({},this.filter,{period:n,time:this.filterTime[n]});this.changedFilter.emit(t)},n}()},KXo3:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){return function(){this.statsTitle=["","current","gain/loss","invested","previous","round-ups"]}}()},KoxX:function(n,t,l){"use strict";var e;l.d(t,"k",function(){return e}),l.d(t,"a",function(){return a}),l.d(t,"e",function(){return i}),l.d(t,"g",function(){return u}),l.d(t,"f",function(){return r}),l.d(t,"h",function(){return o}),l.d(t,"j",function(){return c}),l.d(t,"i",function(){return s}),l.d(t,"b",function(){return d}),l.d(t,"d",function(){return p}),l.d(t,"c",function(){return f}),l.d(t,"l",function(){return m}),function(n){n.LoadPerformance="[Performance] Load Performance",n.LoadPerformanceSuccess="[Performance] Load Performance Success",n.LoadPerformanceFail="[Performance] Load Performance Fail",n.LoadStats="[Performance] Load Stats",n.LoadStatsSuccess="[Performance] Load Stats Success",n.LoadStatsFail="[Performance] Load Stats Fail",n.LoadChart="[Performance] Load Chart",n.LoadChartSuccess="[Performance] Load Chart Success",n.LoadChartFail="[Performance] Load Chart Fail",n.SetFilter="[Performance] Set Filter",n.Init="[Performance] Init"}(e||(e={}));var a=function(){return function(n){this.payload=n,this.type=e.Init}}(),i=function(){return function(){this.type=e.LoadPerformance}}(),u=function(){return function(n){this.payload=n,this.type=e.LoadPerformanceSuccess}}(),r=function(){return function(){this.type=e.LoadPerformanceFail}}(),o=function(){return function(n){this.payload=n,this.type=e.LoadStats}}(),c=function(){return function(n){this.payload=n,this.type=e.LoadStatsSuccess}}(),s=function(){return function(){this.type=e.LoadStatsFail}}(),d=function(){return function(n){this.payload=n,this.type=e.LoadChart}}(),p=function(){return function(n){this.payload=n,this.type=e.LoadChartSuccess}}(),f=function(){return function(){this.type=e.LoadChartFail}}(),m=function(){return function(n){this.payload=n,this.type=e.SetFilter}}()},Oy4E:function(n,t,l){"use strict";l.d(t,"a",function(){return e}),l("DEJT");var e=function(){return function(){}}()},TDBs:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){return function(){}}()},"V4+f":function(n,t,l){"use strict";l.d(t,"a",function(){return o});var e=l("F/XL"),a=l("67Y/"),i=l("FYXD"),u=l("AytR"),r=function(){return function(n,t,l){void 0===n&&(n=0),void 0===t&&(t="$"),void 0===l&&(l={percent:0,currency:0}),this.total=n,this.symbol=t,this.changeTo=l}}(),o=function(){function n(n){this.http=n}return n.prototype.getBallance=function(){return this.http.get(u.a.baseUrl+"/checkout/stripe/user-portfolio-balance").pipe(Object(a.a)(function(n){return new r(n.balance)}))},n.prototype.getAssetBallance=function(){return this.http.get(u.a.baseUrl+"/checkout/asset/balance").pipe(Object(i.a)("data"))},n.prototype.getPerformance=function(){return this.http.get(u.a.baseUrl+"/performance/coin/rates").pipe(Object(i.a)("data"))},n.prototype.getStatistic=function(n){return this.http.get(u.a.baseUrl+"/portfolio/graph/index?minutes="+n.time).pipe(Object(i.a)("data"))},n.prototype.getChartData=function(n){return Object(e.a)([{name:"gain/loss",series:Array(14).fill(void 0).map(function(n,t){return{name:""+t,value:Math.round(0*Math.random())}})}])},n.prototype.getReportLink=function(){return Object(e.a)("/report")},n.prototype.getWalletLink=function(){return Object(e.a)("/wallet")},n}()},aVTn:function(n,t,l){"use strict";var e=l("CcnG"),a=l("La40"),i=l("dWZg"),u=l("Wf4p"),r=l("lLAP"),o=l("Rlre"),c=l("Fzqc"),s=l("qAlS"),d=l("Ip0R");l("JSOP"),l.d(t,"a",function(){return p}),l.d(t,"b",function(){return m});var p=e["\u0275crt"]({encapsulation:0,styles:[["@media screen and (max-width:767px){.main-menu[_ngcontent-%COMP%]{margin-left:-34px;margin-right:-6px}.main-menu[_ngcontent-%COMP%]   .mat-tab-header.main-menu_ico[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:last-of-type, .main-menu.mat-tab-nav-bar.main-menu_ico[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:last-of-type{margin-right:0}}"]],data:{}});function f(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"a",[["class","mat-tab-link"],["href","javascript:void(0)"],["mat-tab-link",""]],[[1,"aria-current",0],[1,"aria-disabled",0],[1,"tabIndex",0],[2,"mat-tab-disabled",null],[2,"mat-tab-label-active",null]],[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.changeFilter(n.context.$implicit.text)&&e),e},null,null)),e["\u0275did"](1,147456,[[1,4]],0,a.i,[a.j,e.ElementRef,e.NgZone,i.a,[2,u.m],[8,null],r.h],{active:[0,"active"]},null),(n()(),e["\u0275ted"](2,null,[" "," "]))],function(n,t){n(t,1,0,t.context.$implicit.text===t.component.filter.period)},function(n,t){n(t,0,0,e["\u0275nov"](t,1).active,e["\u0275nov"](t,1).disabled.toString(),e["\u0275nov"](t,1).tabIndex,e["\u0275nov"](t,1).disabled,e["\u0275nov"](t,1).active),n(t,2,0,t.context.$implicit.text)})}function m(n){return e["\u0275vid"](2,[(n()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","main-menu main-menu_ico mat-tab-nav-bar"],["mat-tab-nav-bar",""]],null,null,null,o.e,o.c)),e["\u0275did"](1,3325952,null,1,a.j,[e.ElementRef,[2,c.b],e.NgZone,e.ChangeDetectorRef,s.e],{color:[0,"color"],disableRipple:[1,"disableRipple"]},null),e["\u0275qud"](603979776,1,{_tabLinks:1}),(n()(),e["\u0275and"](16777216,null,0,1,null,f)),e["\u0275did"](4,278528,null,0,d.m,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var l=t.component;n(t,1,0,"accent",!0),n(t,4,0,l.links)},null)}},blU1:function(n,t,l){"use strict";var e=l("CcnG"),a=l("9hcF"),i=l("BIwl"),u=l("bujt"),r=l("ZYCi"),o=l("UodH"),c=l("dWZg"),s=l("lLAP"),d=l("wFw1"),p=l("Ip0R"),f=l("E2z9"),m=l("vTlt"),h=function(){return function(){}}(),b=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:30%;max-width:100%;display:block;flex-shrink:0}app-panel-wrap[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}@media screen and (max-width:991px){[_nghost-%COMP%]{width:100%}}@media screen and (max-width:767px){.btn-cnt[_ngcontent-%COMP%]{width:100%}}"]],data:{}});function g(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,14,null,null,null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","balance__total"]],null,null,null,null,null)),(n()(),e["\u0275ted"](2,null,[" ",""," "])),e["\u0275ppd"](3,1),(n()(),e["\u0275eld"](4,0,null,null,4,"app-up-or-down",[],null,null,null,a.b,a.a)),e["\u0275did"](5,49152,null,0,i.a,[],{value:[0,"value"]},null),(n()(),e["\u0275eld"](6,0,null,0,2,"div",[["class","balance__change-to"]],null,null,null,null,null)),(n()(),e["\u0275ted"](7,null,[" ","% (","",") "])),e["\u0275ppd"](8,1),(n()(),e["\u0275eld"](9,0,null,null,5,"div",[["class","btn-cnt"]],null,null,null,null,null)),(n()(),e["\u0275eld"](10,0,null,null,4,"button",[["class","form__btn balance__btn btn mat-elevation-z0"],["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,t,l){var a=!0;return"click"===t&&(a=!1!==e["\u0275nov"](n,11).onClick()&&a),a},u.d,u.b)),e["\u0275did"](11,16384,null,0,r.m,[r.l,r.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](12,2),e["\u0275did"](13,180224,null,0,o.b,[e.ElementRef,c.a,s.h,[2,d.a]],{color:[0,"color"]},null),(n()(),e["\u0275ted"](-1,0,[" Top Up "]))],function(n,t){n(t,5,0,t.component.balance.changeTo.percent);var l=n(t,12,0,"/invest","buy");n(t,11,0,l),n(t,13,0,"accent")},function(n,t){var l=t.component,a=l.balance.symbol,i=e["\u0275unv"](t,2,1,n(t,3,0,e["\u0275nov"](t.parent,0),l.balance.total));n(t,2,0,a,i);var u=l.balance.changeTo.percent,r=l.balance.symbol,o=e["\u0275unv"](t,7,2,n(t,8,0,e["\u0275nov"](t.parent,0),l.balance.changeTo.currency));n(t,7,0,u,r,o),n(t,10,0,e["\u0275nov"](t,13).disabled||null,"NoopAnimations"===e["\u0275nov"](t,13)._animationMode)})}function v(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","balance__img"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"img",[["alt",""],["src","/assets/images/test.png"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,1,"div",[["class","balance__text"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Take the quiz to work out which Skraps Portfolio is best suited for you "])),(n()(),e["\u0275eld"](4,0,null,null,5,"div",[["class","btn-cnt"]],null,null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,4,"button",[["class","form__btn balance__btn btn mat-elevation-z0"],["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,t,l){var a=!0;return"click"===t&&(a=!1!==e["\u0275nov"](n,6).onClick()&&a),a},u.d,u.b)),e["\u0275did"](6,16384,null,0,r.m,[r.l,r.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](7,2),e["\u0275did"](8,180224,null,0,o.b,[e.ElementRef,c.a,s.h,[2,d.a]],{color:[0,"color"]},null),(n()(),e["\u0275ted"](-1,0,[" Take the Quiz "]))],function(n,t){var l=n(t,7,0,"/quiz","start");n(t,6,0,l),n(t,8,0,"accent")},function(n,t){n(t,5,0,e["\u0275nov"](t,8).disabled||null,"NoopAnimations"===e["\u0275nov"](t,8)._animationMode)})}function _(n){return e["\u0275vid"](2,[e["\u0275pid"](0,p.f,[e.LOCALE_ID]),(n()(),e["\u0275eld"](1,0,null,null,4,"app-panel-wrap",[],null,null,null,f.b,f.a)),e["\u0275did"](2,638976,null,0,m.a,[],{title:[0,"title"],classes:[1,"classes"]},null),e["\u0275pod"](3,{main:0,body:1}),(n()(),e["\u0275and"](16777216,null,0,1,null,g)),e["\u0275did"](5,16384,null,0,p.n,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),e["\u0275and"](0,[["empty",2]],null,0,null,v))],function(n,t){var l=t.component,a=l.balance?"Portfolio Balance":"Take the Risk Quiz",i=n(t,3,0,"panel asset","panel__body balance");n(t,2,0,a,i),n(t,5,0,l.balance,e["\u0275nov"](t,6))},null)}var O=l("WmZW"),y=l("X771"),C=function(){function n(){}return n.prototype.ngOnInit=function(){this.innerWidth=window.innerWidth},n.prototype.onResize=function(){this.innerWidth=window.innerWidth},n}(),w=e["\u0275crt"]({encapsulation:0,styles:[[".link-card[_ngcontent-%COMP%]{margin:auto}.link-card__img[_ngcontent-%COMP%]{width:133px;max-width:100%;margin-bottom:15px;margin-left:auto;margin-right:auto}.link-card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;-o-object-fit:contain;object-fit:contain}.link-card__text[_ngcontent-%COMP%]{font-size:16px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#4c4b61}@media screen and (min-width:1200px){.link-card__text[_ngcontent-%COMP%]{white-space:pre-line}}app-panel-wrap[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.link-card__btn[_ngcontent-%COMP%]{width:184px;margin-left:auto;margin-right:auto;max-width:100%}[_nghost-%COMP%]{flex-grow:1;margin-left:20px}.btn-cnt[_ngcontent-%COMP%]{display:flex}.justify-between[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.wallet-link[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none}.wallet-link__text[_ngcontent-%COMP%]{margin:0 15px;font-size:16px;color:#6f6e8d;font-weight:600}.icon-wallet[_ngcontent-%COMP%]{color:#c8cdd7}.icon-link-icon[_ngcontent-%COMP%]{color:#eb003e}@media screen and (max-width:991px){[_nghost-%COMP%]{margin-left:0;width:100%}}@media screen and (max-width:767px){.btn-cnt[_ngcontent-%COMP%]{width:100%}}"]],data:{}});function x(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-portfolio-item",[],null,null,null,O.b,O.a)),e["\u0275did"](1,49152,null,0,y.a,[],{isCurrent:[0,"isCurrent"],isMainPortfolio:[1,"isMainPortfolio"],isLock:[2,"isLock"],isAdd:[3,"isAdd"],portfolio:[4,"portfolio"]},null)],function(n,t){n(t,1,0,!0,!0,!1,!1,t.component.assetBalance)},null)}function P(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,10,"div",[["class","link-card"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"div",[["class","link-card__img"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,0,"img",[["alt",""],["src","/assets/images/card-big.png"],["srcset","\n          /assets/images/card-big@2x.png 2x,\n          /assets/images/card-big@3x.png 3x\n        "]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","link-card__text"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Add your Credit/Debit card to start adding your Skraps today "])),(n()(),e["\u0275eld"](5,0,null,null,5,"div",[["class","btn-cnt"]],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,4,"button",[["class","form__btn btn link-card__btn mat-elevation-z0"],["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,t,l){var a=!0;return"click"===t&&(a=!1!==e["\u0275nov"](n,7).onClick()&&a),a},u.d,u.b)),e["\u0275did"](7,16384,null,0,r.m,[r.l,r.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](8,3),e["\u0275did"](9,180224,null,0,o.b,[e.ElementRef,c.a,s.h,[2,d.a]],{color:[0,"color"]},null),(n()(),e["\u0275ted"](-1,0,[" Link Card "]))],function(n,t){var l=n(t,8,0,"/banks","add","card");n(t,7,0,l),n(t,9,0,"accent")},function(n,t){n(t,6,0,e["\u0275nov"](t,9).disabled||null,"NoopAnimations"===e["\u0275nov"](t,9)._animationMode)})}function j(n){return e["\u0275vid"](2,[(n()(),e["\u0275eld"](0,0,null,null,11,"div",[["class","panel__wrap"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,10,"div",[["class","panel asset"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","panel__header"]],null,null,null,null,null)),e["\u0275did"](3,278528,null,0,p.l,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](4,{"justify-between":0}),(n()(),e["\u0275eld"](5,0,null,null,1,"h2",[["class","panel__title"]],null,null,null,null,null)),(n()(),e["\u0275ted"](6,null,[" "," "])),(n()(),e["\u0275eld"](7,0,null,null,4,"div",[["class","panel__body"]],null,null,null,null,null)),e["\u0275did"](8,278528,null,0,p.l,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](9,{asset__cnt:0}),(n()(),e["\u0275and"](16777216,null,null,1,null,x)),e["\u0275did"](11,16384,null,0,p.n,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),e["\u0275and"](0,[["empty",2]],null,0,null,P))],function(n,t){var l=t.component,a=n(t,4,0,l.assetBalance);n(t,3,0,"panel__header",a);var i=n(t,9,0,l.assetBalance);n(t,8,0,"panel__body",i),n(t,11,0,l.assetBalance,e["\u0275nov"](t,12))},function(n,t){n(t,6,0,t.component.assetBalance?"Asset Balance":"Link Debit/Credit Card")})}var M=l("6IOQ"),L=l("ce5R"),k=l("FF3M"),R=l("KXo3"),B=l("aVTn"),F=l("JSOP"),S=l("dGmS"),I=l("Wa4o"),D=l("A5tP"),$=l("DEJT"),E=l("yGQT");l.d(t,"a",function(){return V});var T=e["\u0275crt"]({encapsulation:0,styles:[[".filters[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end}.dashboard-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:stretch}.wrap_sm[_ngcontent-%COMP%]{width:1060px}.dashboard-page[_ngcontent-%COMP%]{padding-top:37px}[_nghost-%COMP%]{padding-bottom:130px;display:block;background-color:#f8fafb}.to-right[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end}@media screen and (max-width:991px){.dashboard-head[_ngcontent-%COMP%]{flex-wrap:wrap}.asset[_ngcontent-%COMP%]{margin-left:0}app-period-filter[_ngcontent-%COMP%]{align-self:flex-end}}@media screen and (max-width:767px){.filters[_ngcontent-%COMP%]{width:100%;overflow:visible;position:relative;margin-left:-6px}.to-right[_ngcontent-%COMP%]{padding-left:15px}}"]],data:{}});function A(n){return e["\u0275vid"](2,[(n()(),e["\u0275eld"](0,0,null,null,33,"div",[["class","dashboard-page"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,32,"div",[["class","wrap wrap_sm"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,1,"h2",[["class","title title_mb"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Overview"])),(n()(),e["\u0275eld"](4,0,null,null,6,"div",[["class","dashboard-head"]],null,null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,2,"app-portfolio-balance",[],null,null,null,_,b)),e["\u0275did"](6,49152,null,0,h,[],{balance:[0,"balance"]},null),e["\u0275pid"](131072,p.b,[e.ChangeDetectorRef]),(n()(),e["\u0275eld"](8,0,null,null,2,"app-asset-balance",[],null,[["window","resize"]],function(n,t,l){var a=!0;return"window:resize"===t&&(a=!1!==e["\u0275nov"](n,9).onResize()&&a),a},j,w)),e["\u0275did"](9,114688,null,0,C,[],{assetBalance:[0,"assetBalance"]},null),e["\u0275pid"](131072,p.b,[e.ChangeDetectorRef]),(n()(),e["\u0275eld"](11,0,null,null,1,"h2",[["class","title title_mb"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Performance"])),(n()(),e["\u0275eld"](13,0,null,null,2,"app-performance-stat",[],null,null,null,M.b,M.a)),e["\u0275did"](14,49152,null,0,L.a,[],{performanceList:[0,"performanceList"]},null),e["\u0275pid"](131072,p.b,[e.ChangeDetectorRef]),(n()(),e["\u0275eld"](16,0,null,null,17,"div",[["class","panel"]],null,null,null,null,null)),(n()(),e["\u0275eld"](17,0,null,null,11,"div",[["class","panel__header panel__header_ico"]],null,null,null,null,null)),(n()(),e["\u0275eld"](18,0,null,null,2,"app-statistic",[],null,null,null,k.b,k.a)),e["\u0275did"](19,49152,null,0,R.a,[],{stats:[0,"stats"]},null),e["\u0275pid"](131072,p.b,[e.ChangeDetectorRef]),(n()(),e["\u0275eld"](21,0,null,null,7,"div",[["class","filters"]],null,null,null,null,null)),(n()(),e["\u0275eld"](22,0,null,null,3,"div",[["class","graph__title"]],null,null,null,null,null)),(n()(),e["\u0275eld"](23,0,null,null,1,"p",[["class","graph__title-text"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Portfolio History"])),(n()(),e["\u0275eld"](25,0,null,null,0,"div",[["class","graph__title-underline"]],null,null,null,null,null)),(n()(),e["\u0275eld"](26,0,null,null,2,"app-period-filter",[],null,[[null,"changedFilter"]],function(n,t,l){var e=!0;return"changedFilter"===t&&(e=!1!==n.component.setFilter(l)&&e),e},B.b,B.a)),e["\u0275did"](27,49152,null,0,F.a,[],{filter:[0,"filter"]},{changedFilter:"changedFilter"}),e["\u0275pid"](131072,p.b,[e.ChangeDetectorRef]),(n()(),e["\u0275eld"](29,0,null,null,4,"div",[["class","panel__body panel__body_performance"]],null,null,null,null,null)),(n()(),e["\u0275eld"](30,0,null,null,1,"div",[["class","dont-work"]],null,null,null,null,null)),(n()(),e["\u0275eld"](31,0,null,null,0,"img",[["class","flower-img"],["src","/assets/images/flower.png"]],null,null,null,null,null)),(n()(),e["\u0275eld"](32,0,null,null,1,"app-portfolio-performance",[],null,null,null,S.b,S.a)),e["\u0275did"](33,114688,null,0,I.a,[D.a],{isFull:[0,"isFull"],curve:[1,"curve"],isMax:[2,"isMax"],filterName:[3,"filterName"]},null)],function(n,t){var l=t.component;n(t,6,0,e["\u0275unv"](t,6,0,e["\u0275nov"](t,7).transform(l.balance$))),n(t,9,0,e["\u0275unv"](t,9,0,e["\u0275nov"](t,10).transform(l.assetBalance$))),n(t,14,0,e["\u0275unv"](t,14,0,e["\u0275nov"](t,15).transform(l.performanceList$))),n(t,19,0,e["\u0275unv"](t,19,0,e["\u0275nov"](t,20).transform(l.stats$))),n(t,27,0,e["\u0275unv"](t,27,0,e["\u0275nov"](t,28).transform(l.filter$))),n(t,33,0,!0,l.curve,!0,l.filterName)},null)}function z(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-dashboard-container",[],null,null,null,A,T)),e["\u0275did"](1,180224,null,0,$.a,[E.n],null,null)],null,null)}var V=e["\u0275ccf"]("app-dashboard-container",$.a,z,{},{},[])},ce5R:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){return function(){}}()},jBiB:function(n,t,l){"use strict";l.d(t,"a",function(){return r});var e=l("KoxX"),a=l("uTIR"),i=function(){return(i=Object.assign||function(n){for(var t,l=1,e=arguments.length;l<e;l++)for(var a in t=arguments[l])Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n}).apply(this,arguments)},u={stats:[],filter:{type:"history",period:a.a.week,time:10080},chartData:[],performanceList:[]};function r(n,t){switch(void 0===n&&(n=u),t.type){case e.k.LoadStatsSuccess:return i({},n,{stats:t.payload});case e.k.SetFilter:return i({},n,{filter:t.payload});case e.k.LoadPerformanceSuccess:return i({},n,{performanceList:t.payload});case e.k.LoadChartSuccess:return i({},n,{chartData:t.payload});default:return n}}},uKwE:function(n,t,l){"use strict";l.d(t,"f",function(){return r}),l.d(t,"c",function(){return o}),l.d(t,"d",function(){return c}),l.d(t,"b",function(){return s}),l.d(t,"e",function(){return d}),l.d(t,"a",function(){return p});var e=l("yGQT"),a=(l("AytR"),l("yVXg"),l("jBiB"),Object(e.C)("dashboard")),i=Object(e.E)(a,function(n){return n.performance}),u=Object(e.E)(a,function(n){return n.balance}),r=Object(e.E)(i,function(n){return n.stats}),o=Object(e.E)(i,function(n){return n.filter}),c=Object(e.E)(i,function(n){return n.performanceList}),s=Object(e.E)(i,function(n){return n.chartData}),d=Object(e.E)(u,function(n){return n.portfolioBalance}),p=Object(e.E)(u,function(n){return n.assetBalance})},uTIR:function(n,t,l){"use strict";var e;l.d(t,"a",function(){return e}),function(n){n.hour="1H",n.day="1D",n.week="7D",n.month="1M",n.year="1Y"}(e||(e={}))},yVXg:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var e=l("ybFU"),a=function(){return(a=Object.assign||function(n){for(var t,l=1,e=arguments.length;l<e;l++)for(var a in t=arguments[l])Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n}).apply(this,arguments)},i={portfolioBalance:{total:0,symbol:"$",changeTo:{percent:0,currency:0}}};function u(n,t){switch(void 0===n&&(n=i),t.type){case e.a.LoadBalanceSuccess:return a({},n,{portfolioBalance:t.payload});case e.a.LoadAssetBalanceSuccess:return a({},n,{assetBalance:t.payload});default:return n}}},ybFU:function(n,t,l){"use strict";var e;l.d(t,"a",function(){return e}),l.d(t,"e",function(){return a}),l.d(t,"h",function(){return i}),l.d(t,"g",function(){return u}),l.d(t,"f",function(){return r}),l.d(t,"b",function(){return o}),l.d(t,"d",function(){return c}),l.d(t,"c",function(){return s}),function(n){n.LoadBalance="[Balance] Load Balance",n.UpdateBalance="[Balance] Update Balance",n.LoadBalanceSuccess="[Balance] Load Balance Success",n.LoadBalanceFail="[Balance] Load Balance Fail",n.LoadAssetBalance="[Balance] Load Asset Balance",n.LoadAssetBalanceSuccess="[Balance] Load Asset Balance Success",n.LoadAssetBalanceFail="[Balance] Load Asset Balance Fail"}(e||(e={}));var a=function(){return function(){this.type=e.LoadBalance}}(),i=function(){return function(){this.type=e.UpdateBalance}}(),u=function(){return function(n){this.payload=n,this.type=e.LoadBalanceSuccess}}(),r=function(){return function(){this.type=e.LoadBalanceFail}}(),o=function(){return function(){this.type=e.LoadAssetBalance}}(),c=function(){return function(n){this.payload=n,this.type=e.LoadAssetBalanceSuccess}}(),s=function(){return function(){this.type=e.LoadAssetBalanceFail}}()}}]);