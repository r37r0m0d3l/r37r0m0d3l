(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{289:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return h}));var n=r(290),o=r(0);const l=Object(o.g)("v-card__actions"),c=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),h=Object(o.g)("v-card__title");n.a},290:function(t,e,r){"use strict";r(291);var n=r(111),o=r(1),l=(r(293),r(110)),c=r(11),d=r(64),h=r(112),v=r(15),f=r(0),m=r(4);var _=Object(m.a)(c.a,Object(d.b)(["absolute","fixed","top","bottom"]),h.a,v.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){return{opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity),[this.$vuetify.rtl?"right":"left"]:Object(f.f)(this.normalizedValue,"%"),width:Object(f.f)(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?l.c:l.d},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(f.f)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const slot=Object(f.j)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},normalize:t=>t<0?0:t>100?100:parseFloat(t)},render(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(f.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),y=o.default.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(_,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),x=r(34);e.a=Object(m.a)(y,x.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...x.a.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...n.a.options.computed.classes.call(this)}},styles(){const style={...n.a.options.computed.styles.call(this)};return this.img&&(style.background=`url("${this.img}") center center / cover no-repeat`),style}},methods:{genProgress(){const t=y.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:data}=this.generateRouteLink();return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},291:function(t,e,r){var content=r(292);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("e23b7040",content,!0,{sourceMap:!1})},292:function(t,e,r){var n=r(5),o=r(7),l=r(8),c=r(9);e=n(!1);var d=o(l),h=o(c);e.push([t.i,"@font-face{font-family:KyivTypeSans;src:url("+d+")}*,body,body *{font-family:KyivTypeSans,sans-serif!important;letter-spacing:.16em}main{background-image:url("+h+');background-size:cover}.page-enter-active,.page-leave-active{transition-property:opacity;transition-timing-function:ease-in-out;transition-duration:.4s}.page-enter,.page-leave-to{opacity:0}.video-container{overflow:hidden;position:relative;width:100%}.video-container:after{padding-top:56.25%;display:block;content:""}.video-container iframe{position:absolute;top:0;left:0;width:100%;height:100%}.text-u{text-decoration:underline}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--light.v-card.v-card--outlined{border:thin solid rgba(0,0,0,.12)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.theme--dark.v-card.v-card--outlined{border:thin solid hsla(0,0%,100%,.12)}.v-card{display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-card:not(.v-sheet--tile):not(.v-card--shaped){border-radius:4px}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--outlined{box-shadow:none}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--shaped{border-radius:24px 4px}',""]),t.exports=e},293:function(t,e,r){var content=r(294);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("cf87dc84",content,!0,{sourceMap:!1})},294:function(t,e,r){var n=r(5),o=r(7),l=r(8),c=r(9);e=n(!1);var d=o(l),h=o(c);e.push([t.i,"@font-face{font-family:KyivTypeSans;src:url("+d+")}*,body,body *{font-family:KyivTypeSans,sans-serif!important;letter-spacing:.16em}main{background-image:url("+h+');background-size:cover}.page-enter-active,.page-leave-active{transition-property:opacity;transition-timing-function:ease-in-out;transition-duration:.4s}.page-enter,.page-leave-to{opacity:0}.video-container{overflow:hidden;position:relative;width:100%}.video-container:after{padding-top:56.25%;display:block;content:""}.video-container iframe{position:absolute;top:0;left:0;width:100%;height:100%}.text-u{text-decoration:underline}.theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%;z-index:1}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%;z-index:2}.v-progress-linear__determinate{height:inherit;transition:inherit}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate--active .long{-webkit-animation:indeterminate;animation:indeterminate;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__indeterminate--active .short{-webkit-animation:indeterminate-short;animation:indeterminate-short;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__stream{-webkit-animation:stream .25s linear infinite;animation:stream .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;opacity:.3;pointer-events:none;position:absolute;right:-8px;top:calc(50% - 2px);transition:inherit}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat-x}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation:query;animation:query;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation:query-short;animation:query-short;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes stream{to{transform:translateX(-8px)}}@keyframes stream{to{transform:translateX(-8px)}}',""]),t.exports=e},295:function(t,e,r){"use strict";r(108);var n=r(109);e.a=Object(n.a)("layout")},298:function(t,e,r){"use strict";r(113);var n=r(1),o=r(37),l=r(0);const c=["sm","md","lg","xl"],d=c.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),h=c.reduce((t,e)=>(t["offset"+Object(l.q)(e)]={type:[String,Number],default:null},t),{}),v=c.reduce((t,e)=>(t["order"+Object(l.q)(e)]={type:[String,Number],default:null},t),{}),f={col:Object.keys(d),offset:Object.keys(h),order:Object.keys(v)};function m(t,e,r){let n=t;if(null!=r&&!1!==r){if(e){n+=`-${e.replace(t,"")}`}return"col"!==t||""!==r&&!0!==r?(n+=`-${r}`,n.toLowerCase()):n.toLowerCase()}}const _=new Map;e.a=n.default.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...d,offset:{type:[String,Number],default:null},...h,order:{type:[String,Number],default:null},...v,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:data,children:r,parent:n}){let l="";for(const t in e)l+=String(e[t]);let c=_.get(l);if(!c){let t;for(t in c=[],f)f[t].forEach(r=>{const n=e[r],o=m(t,r,n);o&&c.push(o)});const r=c.some(t=>t.startsWith("col-"));c.push({col:!r||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),_.set(l,c)}return t(e.tag,Object(o.a)(data,{class:c}),r)}})},319:function(t,e,r){"use strict";r.r(e);var n=r(28),o=r(38),l=r.n(o),c=r(290),d=r(289),h=r(298),v=r(281),f=r(84),m=r(295),_=r(285),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"pl-0"},[r("v-container",[r("h2",[t._v("Community contributions")]),t._v(" "),r("p",[r("a",{staticClass:"font-weight-black indigo--text",attrs:{href:"https://github.com/LambdaBooks/understandinges6ua",target:"_blank"}},[t._v("understandinges6ua")]),t._v("\n      • Ukrainian translation of “Understanding ES6” by Nicholas C.\n      Zakas. Translation of the module chapter vocabulary additions.\n    ")]),t._v(" "),r("p",[r("a",{staticClass:"font-weight-black indigo--text",attrs:{href:"https://github.com/QL-Win/QuickLook",target:"_blank"}},[t._v("QuickLook")]),t._v("\n      • MacOS “Quick Look” on Windows. Ukrainian translation.\n    ")]),t._v(" "),r("p",[r("a",{staticClass:"font-weight-black indigo--text",attrs:{href:"http://rad-js.com",target:"_blank"}},[t._v("RAD.JS")]),t._v("\n      • contribution to framework growth though time.\n    ")]),t._v(" "),r("h2",[t._v("Open-source contributions")]),t._v(" "),r("p",[r("a",{staticClass:"font-weight-black indigo--text",attrs:{href:"https://github.com/r37r0m0d3l?tab=repositories&type=source",target:"_blank"}},[t._v("All other repositories")])]),t._v(" "),r("v-row",[r("v-col",{staticClass:"md-3"},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"320","min-height":"380"}},[r("v-card-title",{staticClass:"justify-center"},[t._v("Vicis")]),t._v(" "),r("v-img",{staticClass:"align-end",attrs:{src:"https://repository-images.githubusercontent.com/224904357/c81bcc80-3404-11ea-8b94-fb13d408fe33"}}),t._v(" "),r("v-card-text",[t._v("\n            Presentation and transformation layer for data output in RESTful\n            APIs.\n          ")]),t._v(" "),r("v-card-actions",{staticClass:"justify-center"},[r("a",{staticClass:"font-weight-black indigo--text",attrs:{href:"https://vicis.js.org/",target:"_blank"}},[t._v("vicis.js.org/")])])],1)],1),t._v(" "),r("v-col",{staticClass:"md-3"},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"320","min-height":"380"}},[r("v-card-title",{staticClass:"justify-center"},[t._v("Consono")]),t._v(" "),r("v-img",{staticClass:"align-end",attrs:{src:"https://repository-images.githubusercontent.com/219575939/d3bbc300-3405-11ea-86a6-40eaecaa3600"}}),t._v(" "),r("v-card-text",[t._v("\n            The most correct, informative, appealing and configurable variable\n            inspector for Node.js.\n          ")]),t._v(" "),r("v-card-actions",{staticClass:"justify-center"},[r("a",{staticClass:"font-weight-black indigo--text",attrs:{href:"https://consono.js.org/",target:"_blank"}},[t._v("consono.js.org/")])])],1)],1),t._v(" "),r("v-col",{staticClass:"md-3"},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"320","min-height":"380"}},[r("v-card-title",{staticClass:"justify-center"},[t._v("Publish / Subscribe")]),t._v(" "),r("v-img",{staticClass:"align-end",attrs:{src:"https://repository-images.githubusercontent.com/235855629/6110c280-4614-11ea-83ee-06e30a4a5931"}}),t._v(" "),r("v-card-text",[t._v("\n            JavaScript implementation of the Publish-Subscribe pattern.\n          ")]),t._v(" "),r("v-card-actions",{staticClass:"justify-center"},[r("a",{staticClass:"font-weight-black indigo--text",attrs:{href:"https://publish-subscribe.js.org",target:"_blank"}},[t._v("publish-subscribe.js.org")])])],1)],1),t._v(" "),r("v-col",{staticClass:"md-3"},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"320","min-height":"380"}},[r("v-card-title",{staticClass:"justify-center"},[t._v("🍡🍬🍭 OF 🍭🍬🍡")]),t._v(" "),r("v-img",{staticClass:"align-end",attrs:{src:"https://repository-images.githubusercontent.com/236383193/be067b80-4608-11ea-9224-a90da0812dbe"}}),t._v(" "),r("v-card-text",[t._v("\n            Promise wrapper with some sugar.\n          ")]),t._v(" "),r("v-card-actions",{staticClass:"justify-center"},[r("a",{staticClass:"font-weight-black indigo--text",attrs:{href:"https://of.js.org",target:"_blank"}},[t._v("of.js.org")])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:c.a,VCardActions:d.a,VCardText:d.b,VCardTitle:d.c,VCol:h.a,VContainer:v.a,VImg:f.a,VLayout:m.a,VRow:_.a})}}]);