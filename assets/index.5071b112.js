(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var O,c,ce,H,K,P={},se=[],we=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(_,e){for(var t in e)_[t]=e[t];return _}function fe(_){var e=_.parentNode;e&&e.removeChild(_)}function Ee(_,e,t){var r,i,o,l={};for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:l[o]=e[o];if(arguments.length>2&&(l.children=arguments.length>3?O.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(o in _.defaultProps)l[o]===void 0&&(l[o]=_.defaultProps[o]);return F(_,l,r,i,null)}function F(_,e,t,r,i){var o={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++ce:i};return i==null&&c.vnode!=null&&c.vnode(o),o}function B(_){return _.children}function S(_,e){this.props=_,this.context=e}function L(_,e){if(e==null)return _.__?L(_.__,_.__.__k.indexOf(_)+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?L(_):null}function ae(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return ae(_)}}function J(_){(!_.__d&&(_.__d=!0)&&H.push(_)&&!U.__r++||K!==c.debounceRendering)&&((K=c.debounceRendering)||setTimeout)(U)}function U(){for(var _;U.__r=H.length;)_=H.sort(function(e,t){return e.__v.__b-t.__v.__b}),H=[],_.some(function(e){var t,r,i,o,l,s;e.__d&&(l=(o=(t=e).__v).__e,(s=t.__P)&&(r=[],(i=k({},o)).__v=o.__v+1,z(s,o,i,t.__n,s.ownerSVGElement!==void 0,o.__h!=null?[l]:null,r,l==null?L(o):l,o.__h),ve(r,o),o.__e!=l&&ae(o)))})}function de(_,e,t,r,i,o,l,s,f,p){var n,h,a,u,d,w,v,m=r&&r.__k||se,b=m.length;for(t.__k=[],n=0;n<e.length;n++)if((u=t.__k[n]=(u=e[n])==null||typeof u=="boolean"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?F(null,u,null,null,u):Array.isArray(u)?F(B,{children:u},null,null,null):u.__b>0?F(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u)!=null){if(u.__=t,u.__b=t.__b+1,(a=m[n])===null||a&&u.key==a.key&&u.type===a.type)m[n]=void 0;else for(h=0;h<b;h++){if((a=m[h])&&u.key==a.key&&u.type===a.type){m[h]=void 0;break}a=null}z(_,u,a=a||P,i,o,l,s,f,p),d=u.__e,(h=u.ref)&&a.ref!=h&&(v||(v=[]),a.ref&&v.push(a.ref,null,u),v.push(h,u.__c||d,u)),d!=null?(w==null&&(w=d),typeof u.type=="function"&&u.__k===a.__k?u.__d=f=pe(u,f,_):f=he(_,u,a,m,d,f),typeof t.type=="function"&&(t.__d=f)):f&&a.__e==f&&f.parentNode!=_&&(f=L(a))}for(t.__e=w,n=b;n--;)m[n]!=null&&me(m[n],m[n]);if(v)for(n=0;n<v.length;n++)ye(v[n],v[++n],v[++n])}function pe(_,e,t){for(var r,i=_.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=_,e=typeof r.type=="function"?pe(r,e,t):he(t,r,r,i,r.__e,e));return e}function he(_,e,t,r,i,o){var l,s,f;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(t==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==_)_.appendChild(i),l=null;else{for(s=o,f=0;(s=s.nextSibling)&&f<r.length;f+=1)if(s==i)break e;_.insertBefore(i,o),l=o}return l!==void 0?l:i.nextSibling}function He(_,e,t,r,i){var o;for(o in t)o==="children"||o==="key"||o in e||M(_,o,null,t[o],r);for(o in e)i&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===e[o]||M(_,o,e[o],t[o],r)}function X(_,e,t){e[0]==="-"?_.setProperty(e,t):_[e]=t==null?"":typeof t!="number"||we.test(e)?t:t+"px"}function M(_,e,t,r,i){var o;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||X(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||X(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+o]=t,t?r||_.addEventListener(e,o?Z:Y,o):_.removeEventListener(e,o?Z:Y,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in _)try{_[e]=t==null?"":t;break e}catch{}typeof t=="function"||(t==null||t===!1&&e.indexOf("-")==-1?_.removeAttribute(e):_.setAttribute(e,t))}}function Y(_){this.l[_.type+!1](c.event?c.event(_):_)}function Z(_){this.l[_.type+!0](c.event?c.event(_):_)}function z(_,e,t,r,i,o,l,s,f){var p,n,h,a,u,d,w,v,m,b,$,E,Q,C,D,g=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(f=t.__h,s=e.__e=t.__e,e.__h=null,o=[s]),(p=c.__b)&&p(e);try{e:if(typeof g=="function"){if(v=e.props,m=(p=g.contextType)&&r[p.__c],b=p?m?m.props.value:p.__:r,t.__c?w=(n=e.__c=t.__c).__=n.__E:("prototype"in g&&g.prototype.render?e.__c=n=new g(v,b):(e.__c=n=new S(v,b),n.constructor=g,n.render=Ne),m&&m.sub(n),n.props=v,n.state||(n.state={}),n.context=b,n.__n=r,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),g.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=k({},n.__s)),k(n.__s,g.getDerivedStateFromProps(v,n.__s))),a=n.props,u=n.state,h)g.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(g.getDerivedStateFromProps==null&&v!==a&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,b),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,b)===!1||e.__v===t.__v){for(n.props=v,n.state=n.__s,e.__v!==t.__v&&(n.__d=!1),n.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(x){x&&(x.__=e)}),$=0;$<n._sb.length;$++)n.__h.push(n._sb[$]);n._sb=[],n.__h.length&&l.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,b),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(a,u,d)})}if(n.context=b,n.props=v,n.__v=e,n.__P=_,E=c.__r,Q=0,"prototype"in g&&g.prototype.render){for(n.state=n.__s,n.__d=!1,E&&E(e),p=n.render(n.props,n.state,n.context),C=0;C<n._sb.length;C++)n.__h.push(n._sb[C]);n._sb=[]}else do n.__d=!1,E&&E(e),p=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++Q<25);n.state=n.__s,n.getChildContext!=null&&(r=k(k({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(d=n.getSnapshotBeforeUpdate(a,u)),D=p!=null&&p.type===B&&p.key==null?p.props.children:p,de(_,Array.isArray(D)?D:[D],e,t,r,i,o,l,s,f),n.base=e.__e,e.__h=null,n.__h.length&&l.push(n),w&&(n.__E=n.__=null),n.__e=!1}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Le(t.__e,e,t,r,i,o,l,f);(p=c.diffed)&&p(e)}catch(x){e.__v=null,(f||o!=null)&&(e.__e=s,e.__h=!!f,o[o.indexOf(s)]=null),c.__e(x,e,t)}}function ve(_,e){c.__c&&c.__c(e,_),_.some(function(t){try{_=t.__h,t.__h=[],_.some(function(r){r.call(t)})}catch(r){c.__e(r,t.__v)}})}function Le(_,e,t,r,i,o,l,s){var f,p,n,h=t.props,a=e.props,u=e.type,d=0;if(u==="svg"&&(i=!0),o!=null){for(;d<o.length;d++)if((f=o[d])&&"setAttribute"in f==!!u&&(u?f.localName===u:f.nodeType===3)){_=f,o[d]=null;break}}if(_==null){if(u===null)return document.createTextNode(a);_=i?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,a.is&&a),o=null,s=!1}if(u===null)h===a||s&&_.data===a||(_.data=a);else{if(o=o&&O.call(_.childNodes),p=(h=t.props||P).dangerouslySetInnerHTML,n=a.dangerouslySetInnerHTML,!s){if(o!=null)for(h={},d=0;d<_.attributes.length;d++)h[_.attributes[d].name]=_.attributes[d].value;(n||p)&&(n&&(p&&n.__html==p.__html||n.__html===_.innerHTML)||(_.innerHTML=n&&n.__html||""))}if(He(_,a,h,i,s),n)e.__k=[];else if(d=e.props.children,de(_,Array.isArray(d)?d:[d],e,t,r,i&&u!=="foreignObject",o,l,o?o[0]:t.__k&&L(t,0),s),o!=null)for(d=o.length;d--;)o[d]!=null&&fe(o[d]);s||("value"in a&&(d=a.value)!==void 0&&(d!==_.value||u==="progress"&&!d||u==="option"&&d!==h.value)&&M(_,"value",d,h.value,!1),"checked"in a&&(d=a.checked)!==void 0&&d!==_.checked&&M(_,"checked",d,h.checked,!1))}return _}function ye(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(r){c.__e(r,t)}}function me(_,e,t){var r,i;if(c.unmount&&c.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||ye(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){c.__e(o,e)}r.base=r.__P=null,_.__c=void 0}if(r=_.__k)for(i=0;i<r.length;i++)r[i]&&me(r[i],e,t||typeof _.type!="function");t||_.__e==null||fe(_.__e),_.__=_.__e=_.__d=void 0}function Ne(_,e,t){return this.constructor(_,t)}function $e(_,e,t){var r,i,o;c.__&&c.__(_,e),i=(r=typeof t=="function")?null:t&&t.__k||e.__k,o=[],z(e,_=(!r&&t||e).__k=Ee(B,null,[_]),i||P,P,e.ownerSVGElement!==void 0,!r&&t?[t]:i?null:e.firstChild?O.call(e.childNodes):null,o,!r&&t?t:i?i.__e:e.firstChild,r),ve(o,_)}O=se.slice,c={__e:function(_,e,t,r){for(var i,o,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(_)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(_,r||{}),l=i.__d),l)return i.__E=i}catch(s){_=s}throw _}},ce=0,S.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof _=="function"&&(_=_(k({},t),this.props)),_&&k(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),J(this))},S.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),J(this))},S.prototype.render=B,H=[],U.__r=0;const Ce="_app_yrku1_1",De="_content_yrku1_5",xe="_img_yrku1_12",V={app:Ce,content:De,img:xe};var I,R;globalThis.CacheStorage&&globalThis.caches instanceof CacheStorage,(R=(I=globalThis.navigator)===null||I===void 0?void 0:I.storage)===null||R===void 0||R.getDirectory,typeof window<"u"&&window.webkitRequestFileSystem;var G,y,W,ee,q=0,ge=[],T=[],_e=c.__b,te=c.__r,ne=c.diffed,oe=c.__c,re=c.unmount;function be(_,e){c.__h&&c.__h(y,_,q||e),q=0;var t=y.__H||(y.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:T}),t.__[_]}function ie(_){return q=1,Fe(ke,_)}function Fe(_,e,t){var r=be(G++,2);if(r.t=_,!r.__c&&(r.__=[t?t(e):ke(void 0,e),function(o){var l=r.__N?r.__N[0]:r.__[0],s=r.t(l,o);l!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){y.u=!0;var i=y.shouldComponentUpdate;y.shouldComponentUpdate=function(o,l,s){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(n){return n.__c});if(f.every(function(n){return!n.__N}))return!i||i.call(this,o,l,s);var p=!1;return f.forEach(function(n){if(n.__N){var h=n.__[0];n.__=n.__N,n.__N=void 0,h!==n.__[0]&&(p=!0)}}),!(!p&&r.__c.props===o)&&(!i||i.call(this,o,l,s))}}return r.__N||r.__}function le(_,e){var t=be(G++,3);!c.__s&&Ae(t.__H,e)&&(t.__=_,t.i=e,y.__H.__h.push(t))}function Se(){for(var _;_=ge.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(A),_.__H.__h.forEach(j),_.__H.__h=[]}catch(e){_.__H.__h=[],c.__e(e,_.__v)}}c.__b=function(_){y=null,_e&&_e(_)},c.__r=function(_){te&&te(_),G=0;var e=(y=_.__c).__H;e&&(W===y?(e.__h=[],y.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=T,t.__N=t.i=void 0})):(e.__h.forEach(A),e.__h.forEach(j),e.__h=[])),W=y},c.diffed=function(_){ne&&ne(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(ge.push(e)!==1&&ee===c.requestAnimationFrame||((ee=c.requestAnimationFrame)||Te)(Se)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==T&&(t.__=t.__V),t.i=void 0,t.__V=T})),W=y=null},c.__c=function(_,e){e.some(function(t){try{t.__h.forEach(A),t.__h=t.__h.filter(function(r){return!r.__||j(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],c.__e(r,t.__v)}}),oe&&oe(_,e)},c.unmount=function(_){re&&re(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{A(r)}catch(i){e=i}}),t.__H=void 0,e&&c.__e(e,t.__v))};var ue=typeof requestAnimationFrame=="function";function Te(_){var e,t=function(){clearTimeout(r),ue&&cancelAnimationFrame(e),setTimeout(_)},r=setTimeout(t,100);ue&&(e=requestAnimationFrame(t))}function A(_){var e=y,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),y=e}function j(_){var e=y;_.__c=_.__(),y=e}function Ae(_,e){return!_||_.length!==e.length||e.some(function(t,r){return t!==_[r]})}function ke(_,e){return typeof e=="function"?e(_):e}var Pe=0;function N(_,e,t,r,i){var o,l,s={};for(l in e)l=="ref"?o=e[l]:s[l]=e[l];var f={type:_,props:s,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Pe,__source:i,__self:r};if(typeof _=="function"&&(o=_.defaultProps))for(l in o)s[l]===void 0&&(s[l]=o[l]);return c.vnode&&c.vnode(f),f}function Ue(){return N("div",{className:V.app,children:N("h2",{class:V.content,children:"\u62D6\u62FD\u56FE\u7247\u5230\u8FD9\u513F"})})}const Me=matchMedia("(display-mode: browser)").matches;window.addEventListener("DOMContentLoaded",()=>{console.log("isBrowser",Me)});function Oe(){const[_,e]=ie(),[t,r]=ie(!1);le(()=>{"launchQueue"in window&&"files"in LaunchParams.prototype&&launchQueue.setConsumer(async l=>{!l.files.length||e(URL.createObjectURL(await l.files[0].getFile()))}),r(!0)},[]);async function i(l){var p,n;l.preventDefault();const s=[...(n=(p=l.dataTransfer)==null?void 0:p.items)!=null?n:[]].filter(h=>h.kind==="file"&&h.type.startsWith("image/"));if(s.length===0){alert("\u627E\u4E0D\u5230\u56FE\u7247\u6587\u4EF6");return}const f=s[0].getAsFile();if(!f){alert("\u65E0\u6CD5\u8BFB\u53D6\u6587\u4EF6");return}e(URL.createObjectURL(f))}function o(l){l.preventDefault()}return le(()=>(window.addEventListener("drop",i),window.addEventListener("dragover",o),()=>{window.removeEventListener("drop",i),window.removeEventListener("dragover",o)}),[]),t&&(_?N("img",{class:V.img,src:_}):N(Ue,{}))}$e(N(Oe,{}),document.getElementById("app"));