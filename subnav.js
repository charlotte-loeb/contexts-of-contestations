var app=function(){"use strict";function t(){}function n(t){for(var n,i,e=1,s=arguments.length;e<s;e++)for(n in i=arguments[e])t[n]=i[n];return t}function i(t,n){n.appendChild(t)}function e(t,n,i){n.insertBefore(t,i)}function s(t){t.parentNode.removeChild(t)}function o(t){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d()}function c(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function u(){return document.createComment("")}function r(){return Object.create(null)}function a(n){this.destroy=t,this.fire("destroy"),this.set=this.get=t,!1!==n&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function f(t,n,i,e,s){for(var o in n)if(i[o]){var c=e[o],l=s[o],u=n[o];if(u)for(var r=0;r<u.length;r+=1){var a=u[r];a.__calling||(a.__calling=!0,a.call(t,c,l),a.__calling=!1)}}}function h(t){for(;t&&t.length;)t.shift()()}var d={destroy:a,get:function(t){return t?this._state[t]:this._state},fire:function(t,n){var i=t in this._handlers&&this._handlers[t].slice();if(i)for(var e=0;e<i.length;e+=1)i[e].call(this,n)},observe:function(t,n,i){var e=i&&i.defer?this._observers.post:this._observers.pre;return(e[t]||(e[t]=[])).push(n),i&&!1===i.init||(n.__calling=!0,n.call(this,this._state[t]),n.__calling=!1),{cancel:function(){var i=e[t].indexOf(n);~i&&e[t].splice(i,1)}}},on:function(t,n){if("teardown"===t)return this.on("destroy",n);var i=this._handlers[t]||(this._handlers[t]=[]);return i.push(n),{cancel:function(){var t=i.indexOf(n);~t&&i.splice(t,1)}}},set:function(t){this._set(n({},t)),this.root._lock||(this.root._lock=!0,h(this.root._beforecreate),h(this.root._oncreate),h(this.root._aftercreate),this.root._lock=!1)},teardown:a,_recompute:t,_set:function(t){var i=this._state,e={},s=!1;for(var o in t)this._differs(t[o],i[o])&&(e[o]=s=!0);s&&(this._state=n({},i,t),this._recompute(e,this._state),this._bind&&this._bind(e,this._state),this._fragment&&(f(this,this._observers.pre,e,this._state,i),this._fragment.p(e,this._state),f(this,this._observers.post,e,this._state,i)))},_mount:function(t,n){this._fragment.m(t,n)},_unmount:function(){this._fragment&&this._fragment.u()},_differs:function(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}};function v(t,n,i,o,l){var r,a,f,h=T(t,n,i,o),d=h(t,n,i,o,l),v=i.subsections&&S(t,n,i,o,l);return{c:function(){r=c("li"),d.c(),v&&v.c(),f=u(),this.h()},h:function(){r.className=a="brand-nav "+(t.isActive(t.sectionID,i)?"active":"")},m:function(t,n){e(r,t,n),d.m(r,null),v&&v.m(t,n),e(f,t,n)},p:function(t,n,i,e,s){h===(h=T(n,i,e,s))&&d?d.p(t,n,i,e,s):(d.u(),d.d(),(d=h(n,i,e,s,l)).c(),d.m(r,null)),(t.isActive||t.sectionID||t.sections)&&a!==(a="brand-nav "+(n.isActive(n.sectionID,e)?"active":""))&&(r.className=a),e.subsections?v?v.p(t,n,i,e,s):((v=S(n,i,e,s,l)).c(),v.m(f.parentNode,f)):v&&(v.u(),v.d(),v=null)},u:function(){s(r),d.u(),v&&v.u(),s(f)},d:function(){d.d(),v&&v.d()}}}function p(n,o,u,r,a){var f,h,d=u.title;return{c:function(){f=c("span"),h=l(d)},m:function(t,n){e(f,t,n),i(h,f)},p:function(t,n,i,e,s){t.sections&&d!==(d=e.title)&&(h.data=d)},u:function(){s(f)},d:t}}function m(n,o,u,r,a){var f,h,d,v=u.title;return{c:function(){f=c("a"),h=l(v),this.h()},h:function(){f.href=d=""+n.prefix+u.link+n.suffix},m:function(t,n){e(f,t,n),i(h,f)},p:function(t,n,i,e,s){t.sections&&v!==(v=e.title)&&(h.data=v),(t.prefix||t.sections||t.suffix)&&d!==(d=""+n.prefix+e.link+n.suffix)&&(f.href=d)},u:function(){s(f)},d:t}}function b(t,n,i,o,l,r,a,f){var h,d,v,p=P(t,n,i,o,l,r,a),m=p(t,n,i,o,l,r,a,f),b=r.subsections&&C(t,n,i,o,l,r,a,f);return{c:function(){h=c("li"),m.c(),b&&b.c(),v=u(),this.h()},h:function(){h.className=d="brand-nav "+(t.isActive(t.sectionID,r)?"active":"")},m:function(t,n){e(h,t,n),m.m(h,null),b&&b.m(t,n),e(v,t,n)},p:function(t,n,i,e,s,o,c,l){p===(p=P(n,i,e,s,o,c,l))&&m?m.p(t,n,i,e,s,o,c,l):(m.u(),m.d(),(m=p(n,i,e,s,o,c,l,f)).c(),m.m(h,null)),(t.isActive||t.sectionID||t.sections)&&d!==(d="brand-nav "+(n.isActive(n.sectionID,c)?"active":""))&&(h.className=d),c.subsections?b?b.p(t,n,i,e,s,o,c,l):((b=C(n,i,e,s,o,c,l,f)).c(),b.m(v.parentNode,v)):b&&(b.u(),b.d(),b=null)},u:function(){s(h),m.u(),b&&b.u(),s(v)},d:function(){m.d(),b&&b.d()}}}function g(n,o,u,r,a,f,h,d){var v,p,m=f.title;return{c:function(){v=c("span"),p=l(m)},m:function(t,n){e(v,t,n),i(p,v)},p:function(t,n,i,e,s,o,c,l){t.sections&&m!==(m=c.title)&&(p.data=m)},u:function(){s(v)},d:t}}function _(n,o,u,r,a,f,h,d){var v,p,m,b=f.title;return{c:function(){v=c("a"),p=l(b),this.h()},h:function(){v.href=m=""+n.prefix+u.link+"/"+f.link+n.suffix},m:function(t,n){e(v,t,n),i(p,v)},p:function(t,n,i,e,s,o,c,l){t.sections&&b!==(b=c.title)&&(p.data=b),(t.prefix||t.sections||t.suffix)&&m!==(m=""+n.prefix+e.link+"/"+c.link+n.suffix)&&(v.href=m)},u:function(){s(v)},d:t}}function k(t,n,i,o,l,r,a,f,h,d,v){var p,m,b,g=w(t,n,i,o,l,r,a,f,h,d),_=g(t,n,i,o,l,r,a,f,h,d,v),k=h.subsections&&y(t,n,i,o,l,r,a,f,h,d,v);return{c:function(){p=c("li"),_.c(),k&&k.c(),b=u(),this.h()},h:function(){p.className=m="brand-nav "+(t.isActive(t.sectionID,h)?"active":"")},m:function(t,n){e(p,t,n),_.m(p,null),k&&k.m(t,n),e(b,t,n)},p:function(t,n,i,e,s,o,c,l,u,r,a){g===(g=w(n,i,e,s,o,c,l,u,r,a))&&_?_.p(t,n,i,e,s,o,c,l,u,r,a):(_.u(),_.d(),(_=g(n,i,e,s,o,c,l,u,r,a,v)).c(),_.m(p,null)),(t.isActive||t.sectionID||t.sections)&&m!==(m="brand-nav "+(n.isActive(n.sectionID,r)?"active":""))&&(p.className=m),r.subsections?k?k.p(t,n,i,e,s,o,c,l,u,r,a):((k=y(n,i,e,s,o,c,l,u,r,a,v)).c(),k.m(b.parentNode,b)):k&&(k.u(),k.d(),k=null)},u:function(){s(p),_.u(),k&&k.u(),s(b)},d:function(){_.d(),k&&k.d()}}}function x(n,o,u,r,a,f,h,d,v,p,m){var b,g,_=v.title;return{c:function(){b=c("span"),g=l(_)},m:function(t,n){e(b,t,n),i(g,b)},p:function(t,n,i,e,s,o,c,l,u,r,a){t.sections&&_!==(_=r.title)&&(g.data=_)},u:function(){s(b)},d:t}}function I(n,o,u,r,a,f,h,d,v,p,m){var b,g,_,k=v.title;return{c:function(){b=c("a"),g=l(k),this.h()},h:function(){b.href=_=""+n.prefix+u.link+"/"+f.link+"/"+v.link+n.suffix},m:function(t,n){e(b,t,n),i(g,b)},p:function(t,n,i,e,s,o,c,l,u,r,a){t.sections&&k!==(k=r.title)&&(g.data=k),(t.prefix||t.sections||t.suffix)&&_!==(_=""+n.prefix+e.link+"/"+c.link+"/"+r.link+n.suffix)&&(b.href=_)},u:function(){s(b)},d:t}}function D(t,n,i,o,l,u,r,a,f,h,d,v,p,m){var b,g,_=E(t,n,i,o,l,u,r,a,f,h,d,v,p),k=_(t,n,i,o,l,u,r,a,f,h,d,v,p,m);return{c:function(){b=c("li"),k.c(),this.h()},h:function(){b.className=g="brand-nav "+(t.isActive(t.sectionID,v)?"active":"")},m:function(t,n){e(b,t,n),k.m(b,null)},p:function(t,n,i,e,s,o,c,l,u,r,a,f,h,d){_===(_=E(n,i,e,s,o,c,l,u,r,a,f,h,d))&&k?k.p(t,n,i,e,s,o,c,l,u,r,a,f,h,d):(k.u(),k.d(),(k=_(n,i,e,s,o,c,l,u,r,a,f,h,d,m)).c(),k.m(b,null)),(t.isActive||t.sectionID||t.sections)&&g!==(g="brand-nav "+(n.isActive(n.sectionID,h)?"active":""))&&(b.className=g)},u:function(){s(b),k.u()},d:function(){k.d()}}}function A(n,o,u,r,a,f,h,d,v,p,m,b,g,_){var k,x,I=b.title;return{c:function(){k=c("span"),x=l(I)},m:function(t,n){e(k,t,n),i(x,k)},p:function(t,n,i,e,s,o,c,l,u,r,a,f,h,d){t.sections&&I!==(I=h.title)&&(x.data=I)},u:function(){s(k)},d:t}}function N(n,o,u,r,a,f,h,d,v,p,m,b,g,_){var k,x,I,D=b.title;return{c:function(){k=c("a"),x=l(D),this.h()},h:function(){k.href=I=""+n.prefix+u.link+"/"+f.link+"/"+v.link+"/"+b.link+n.suffix},m:function(t,n){e(k,t,n),i(x,k)},p:function(t,n,i,e,s,o,c,l,u,r,a,f,h,d){t.sections&&D!==(D=h.title)&&(x.data=D),(t.prefix||t.sections||t.suffix)&&I!==(I=""+n.prefix+e.link+"/"+c.link+"/"+r.link+"/"+h.link+n.suffix)&&(k.href=I)},u:function(){s(k)},d:t}}function y(t,n,i,l,u,r,a,f,h,d,v){for(var p,m=h.subsections,b=[],g=0;g<m.length;g+=1)b[g]=D(t,n,i,l,u,r,a,f,h,d,m,m[g],g,v);return{c:function(){p=c("ul");for(var t=0;t<b.length;t+=1)b[t].c();this.h()},h:function(){p.className="nav nav-pills nav-stacked nav-subsubsubsection"},m:function(t,n){e(p,t,n);for(var i=0;i<b.length;i+=1)b[i].m(p,null)},p:function(t,n,i,e,s,o,c,l,u,r,a){var f=r.subsections;if(t.isActive||t.sectionID||t.sections||t.prefix||t.suffix){for(var h=0;h<f.length;h+=1)b[h]?b[h].p(t,n,i,e,s,o,c,l,u,r,a,f,f[h],h):(b[h]=D(n,i,e,s,o,c,l,u,r,a,f,f[h],h,v),b[h].c(),b[h].m(p,null));for(;h<b.length;h+=1)b[h].u(),b[h].d();b.length=f.length}},u:function(){s(p);for(var t=0;t<b.length;t+=1)b[t].u()},d:function(){o(b)}}}function C(t,n,i,l,u,r,a,f){for(var h,d=r.subsections,v=[],p=0;p<d.length;p+=1)v[p]=k(t,n,i,l,u,r,a,d,d[p],p,f);return{c:function(){h=c("ul");for(var t=0;t<v.length;t+=1)v[t].c();this.h()},h:function(){h.className="nav nav-pills nav-stacked nav-subsubsection"},m:function(t,n){e(h,t,n);for(var i=0;i<v.length;i+=1)v[i].m(h,null)},p:function(t,n,i,e,s,o,c,l){var u=c.subsections;if(t.isActive||t.sectionID||t.sections||t.prefix||t.suffix){for(var r=0;r<u.length;r+=1)v[r]?v[r].p(t,n,i,e,s,o,c,l,u,u[r],r):(v[r]=k(n,i,e,s,o,c,l,u,u[r],r,f),v[r].c(),v[r].m(h,null));for(;r<v.length;r+=1)v[r].u(),v[r].d();v.length=u.length}},u:function(){s(h);for(var t=0;t<v.length;t+=1)v[t].u()},d:function(){o(v)}}}function S(t,n,i,l,u){for(var r,a=i.subsections,f=[],h=0;h<a.length;h+=1)f[h]=b(t,n,i,l,a,a[h],h,u);return{c:function(){r=c("ul");for(var t=0;t<f.length;t+=1)f[t].c();this.h()},h:function(){r.className="nav nav-pills nav-stacked nav-subsection"},m:function(t,n){e(r,t,n);for(var i=0;i<f.length;i+=1)f[i].m(r,null)},p:function(t,n,i,e,s){var o=e.subsections;if(t.isActive||t.sectionID||t.sections||t.prefix||t.suffix){for(var c=0;c<o.length;c+=1)f[c]?f[c].p(t,n,i,e,s,o,o[c],c):(f[c]=b(n,i,e,s,o,o[c],c,u),f[c].c(),f[c].m(r,null));for(;c<f.length;c+=1)f[c].u(),f[c].d();f.length=o.length}},u:function(){s(r);for(var t=0;t<f.length;t+=1)f[t].u()},d:function(){o(f)}}}function T(t,n,i,e){return i.disabled?p:m}function P(t,n,i,e,s,o,c){return o.disabled?g:_}function w(t,n,i,e,s,o,c,l,u,r){return u.disabled?x:I}function E(t,n,i,e,s,o,c,l,u,r,a,f,h){return f.disabled?A:N}function M(t){var u,a;a=t,(u=this)._observers={pre:r(),post:r()},u._handlers=r(),u._bind=a._bind,u.options=a,u.root=a.root||u,u.store=u.root.store||a.store,this._state=n({isActive:function(t,n){var i=n?n&&n.uid?n.uid:n.link:null;return void 0!==t&&(!i&&"home"==t||t==i)},sectionID:window.sectionID},t.data);var f=function(){var t=this.get("sections"),n=this.get("sectionID"),i=function(t){return(t?t&&t.uid?t.uid:t.link:null)==n},e=function(t){return t.subsections&&t.subsections.some(i)},s=function(t){return t.subsections&&t.subsections.some(e)},o=t&&t.some(function(t){return t.subsections&&t.subsections.some(s)})?4:t&&t.some(s)?3:t&&t.some(e)?2:t&&t.some(i)?1:0;this.set({prefix:"../".repeat(o)}),this.set({suffix:/^file/.test(window.location.protocol)?"/index.html":""})}.bind(this);t.root||(this._oncreate=[]),this._fragment=function(t,n){for(var u,r,a,f,h,d,p,m=t.sections,b=[],g=0;g<m.length;g+=1)b[g]=v(t,m,m[g],g,n);return{c:function(){u=c("ul"),r=c("li"),a=c("a"),f=c("b"),h=l(t.chapter);for(var n=0;n<b.length;n+=1)b[n].c();this.h()},h:function(){a.href=d=t.prefix+"."+t.suffix,r.className=p="brand-nav "+(t.isActive(t.sectionID)?"active":""),u.className="nav nav-pills nav-stacked"},m:function(t,n){e(u,t,n),i(r,u),i(a,r),i(f,a),i(h,f);for(var s=0;s<b.length;s+=1)b[s].m(u,null)},p:function(t,i){t.chapter&&(h.data=i.chapter),(t.prefix||t.suffix)&&d!==(d=i.prefix+"."+i.suffix)&&(a.href=d),(t.isActive||t.sectionID)&&p!==(p="brand-nav "+(i.isActive(i.sectionID)?"active":""))&&(r.className=p);var e=i.sections;if(t.isActive||t.sectionID||t.sections||t.prefix||t.suffix){for(var s=0;s<e.length;s+=1)b[s]?b[s].p(t,i,e,e[s],s):(b[s]=v(i,e,e[s],s,n),b[s].c(),b[s].m(u,null));for(;s<b.length;s+=1)b[s].u(),b[s].d();b.length=e.length}},u:function(){s(u);for(var t=0;t<b.length;t+=1)b[t].u()},d:function(){o(b)}}}(this._state,this),this.root._oncreate.push(f),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),h(this._oncreate))}return n(M.prototype,d),new M({target:document.getElementById("subNavbar"),data:{chapter:"Documentation",sections:[{title:"Media Selection",link:"media-selection",disabled:!0,subsections:[{title:"Expert Survey",link:"expert-survey"},{title:"Source Selection",link:"source-selection"}]},{title:"Text Data Collection",link:"text-data-collection",disabled:!0,subsections:[{title:"Collection Process Plain Text Data",link:"collection-process-ptd"},{title:"Statistics Plain Text Data",link:"descriptive-statistics-ptd"},{title:"Collection Process Non-Plain Text Data",link:"collection-process-nptd"},{title:"Statistics Non-Plain Text Data",link:"descriptive-statistics-nptd"},{title:"Additional Notes",link:"additional-notes"}]},{title:"Item Selection",link:"item-selection",disabled:!0,subsections:[{title:"EITM-based Identification",link:"eitm-based",subsections:[{title:"Expert Survey II",link:"expert-survey-ii",subsections:[{title:"Sample Characteristics",link:"sample-characteristics"},{title:"Consolidated Topic List",link:"consolidated-topic-list"}]},{title:"Topic Modeling",link:"topic-modeling",subsections:[{title:"Text Pre-Processing",link:"text-pre-processing"},{title:"Model Evaluation",link:"model-evaluation"},{title:"Topic Selection",link:"topic-selection"}]},{title:"Thematic Classification",link:"thematic-classification",subsections:[{title:"Online Coding",link:"online-coding"},{title:"Selection Protocol",link:"selection-protocol"},{title:"Reliability",link:"eitm-reliability"},{title:"Evaluation",link:"evaluation"}]},{title:"Sampling",link:"sampling"}]},{title:"Manual Identification",link:"manual"},{title:"Final Sample",link:"final-sample"}]},{title:"Content Analysis",link:"content-analysis",disabled:!0,subsections:[{title:"Coding Procedure",link:"coding-procedure"},{title:"Codebook",link:"codebook"},{title:"Reliability",link:"reliability"},{title:"Reproduction Materials",link:"reproduction-materials"},{title:"Additional Analyses",link:"additional-analyses"}]},{title:"List of Files",link:"files"}]}})}();
//# sourceMappingURL=bundle.js.map
