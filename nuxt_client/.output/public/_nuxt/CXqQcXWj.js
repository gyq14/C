import{l as q,d as U,r as E,x as A,y as T,z as F,A as D,B as z,C as H,D as L,G as N,H as M,I as Q,i as w,J as j,K as B,L as $,M as G,N as J,O as K,P as W,Q as X,o as Y,b as Z,e as k,f as p,w as C,u as b,n as ee,R as te,S as ae,g as R,m as le,h as ne,_ as re}from"./A2Vocqfh.js";import{E as oe}from"./DP4sTjb7.js";import{E as ue}from"./3_7Tw8cr.js";import"./u5bu2pBJ.js";import"./JQDFjasu.js";async function I(a,l=q()){const{path:s,matched:y}=l.resolve(a);if(!y.length||(l._routePreloaded||(l._routePreloaded=new Set),l._routePreloaded.has(s)))return;const e=l._preloadPromises=l._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>I(a,l));l._routePreloaded.add(s);const t=y.map(r=>{var n;return(n=r.components)==null?void 0:n.default}).filter(r=>typeof r=="function");for(const r of t){const n=Promise.resolve(r()).catch(()=>{}).finally(()=>e.splice(e.indexOf(n)));e.push(n)}await Promise.all(e)}const ie=(...a)=>a.find(l=>l!==void 0);function se(a){const l=a.componentName||"NuxtLink";function s(e,t){if(!e||a.trailingSlash!=="append"&&a.trailingSlash!=="remove")return e;if(typeof e=="string")return O(e,a.trailingSlash);const r="path"in e&&e.path!==void 0?e.path:t(e).path;return{...e,name:void 0,path:O(r,a.trailingSlash)}}function y(e){const t=q(),r=J(),n=w(()=>!!e.target&&e.target!=="_self"),c=w(()=>{const h=e.to||e.href||"";return typeof h=="string"&&j(h,{acceptRelative:!0})}),_=N("RouterLink"),g=_&&typeof _!="string"?_.useLink:void 0,u=w(()=>{if(e.external)return!0;const h=e.to||e.href||"";return typeof h=="object"?!1:h===""||c.value}),i=w(()=>{const h=e.to||e.href||"";return u.value?h:s(h,t.resolve)}),d=u.value||g==null?void 0:g({...e,to:i}),x=w(()=>{var h;if(!i.value||c.value)return i.value;if(u.value){const P=typeof i.value=="object"&&"path"in i.value?B(i.value):i.value,S=typeof P=="object"?t.resolve(P).href:P;return s(S,t.resolve)}return typeof i.value=="object"?((h=t.resolve(i.value))==null?void 0:h.href)??null:s($(r.app.baseURL,i.value),t.resolve)});return{to:i,hasTarget:n,isAbsoluteUrl:c,isExternal:u,href:x,isActive:(d==null?void 0:d.isActive)??w(()=>i.value===t.currentRoute.value.path),isExactActive:(d==null?void 0:d.isExactActive)??w(()=>i.value===t.currentRoute.value.path),route:(d==null?void 0:d.route)??w(()=>t.resolve(i.value)),async navigate(){await G(x.value,{replace:e.replace,external:u.value||n.value})}}}return U({name:l,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:y,setup(e,{slots:t}){const r=q(),{to:n,href:c,navigate:_,isExternal:g,hasTarget:u,isAbsoluteUrl:i}=y(e),d=E(!1),x=E(null),h=o=>{var v;x.value=e.custom?(v=o==null?void 0:o.$el)==null?void 0:v.nextElementSibling:o==null?void 0:o.$el};function P(o){var v,f;return!d.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===o:((v=e.prefetchOn)==null?void 0:v[o])??((f=a.prefetchOn)==null?void 0:f[o]))&&(e.prefetch??a.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!de()}async function S(o=A()){if(d.value)return;d.value=!0;const v=typeof n.value=="string"?n.value:g.value?B(n.value):r.resolve(n.value).fullPath;await Promise.all([o.hooks.callHook("link:prefetch",v).catch(()=>{}),!g.value&&!u.value&&I(n.value,r).catch(()=>{})])}if(P("visibility")){const o=A();let v,f=null;T(()=>{const m=fe();F(()=>{v=D(()=>{var V;(V=x==null?void 0:x.value)!=null&&V.tagName&&(f=m.observe(x.value,async()=>{f==null||f(),f=null,await S(o)}))})})}),z(()=>{v&&H(v),f==null||f(),f=null})}return()=>{var f;if(!g.value&&!u.value){const m={ref:h,to:n.value,activeClass:e.activeClass||a.activeClass,exactActiveClass:e.exactActiveClass||a.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(P("interaction")&&(m.onPointerenter=S.bind(null,void 0),m.onFocus=S.bind(null,void 0)),d.value&&(m.class=e.prefetchedClass||a.prefetchedClass),m.rel=e.rel||void 0),L(N("RouterLink"),m,t.default)}const o=e.target||null,v=ie(e.noRel?"":e.rel,a.externalRelAttribute,i.value||u.value?"noopener noreferrer":"")||null;return e.custom?t.default?t.default({href:c.value,navigate:_,prefetch:S,get route(){if(!c.value)return;const m=new URL(c.value,window.location.href);return{path:m.pathname,fullPath:m.pathname,get query(){return M(m.search)},hash:m.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:c.value}},rel:v,target:o,isExternal:g.value||u.value,isActive:!1,isExactActive:!1}):null:L("a",{ref:x,href:c.value||null,rel:v,target:o},(f=t.default)==null?void 0:f.call(t))}}})}const ce=se(Q);function O(a,l){const s=l==="append"?K:W;return j(a)&&!a.startsWith("http")?a:s(a,!0)}function fe(){const a=A();if(a._observer)return a._observer;let l=null;const s=new Map,y=(t,r)=>(l||(l=new IntersectionObserver(n=>{for(const c of n){const _=s.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&_&&_()}})),s.set(t,r),l.observe(t),()=>{s.delete(t),l.unobserve(t),s.size===0&&(l.disconnect(),l=null)});return a._observer={observe:y}}function de(){const a=navigator.connection;return!!(a&&(a.saveData||/2g/.test(a.effectiveType)))}const ve={class:"login-container"},he={class:"login-card"},me={class:"w-full h-full card-content"},pe=U({__name:"index",setup(a){const{loginForm:l,login:s}=X();return(y,e)=>{const t=le,r=oe,n=ue,c=ne,_=ce,g=ee;return Y(),Z("div",ve,[k("div",he,[k("div",me,[p(g,{"label-width":"auto","label-position":"top",size:"large",model:b(l)},{default:C(()=>[p(t,null,{default:C(()=>e[3]||(e[3]=[k("div",{class:"logintitle"},"产业链协同设计平台供应商版",-1)])),_:1}),p(t,null,{default:C(()=>[p(r,{autocomplete:"off",placeholder:"账号","prefix-icon":b(te),clearable:"",modelValue:b(l).account,"onUpdate:modelValue":e[0]||(e[0]=u=>b(l).account=u)},null,8,["prefix-icon","modelValue"])]),_:1}),p(t,null,{default:C(()=>[p(r,{type:"password",placeholder:"密码","prefix-icon":b(ae),clearable:"",autocomplete:"off","show-password":"",modelValue:b(l).password,"onUpdate:modelValue":e[1]||(e[1]=u=>b(l).password=u)},null,8,["prefix-icon","modelValue"])]),_:1}),p(t,null,{default:C(()=>[p(n,{label:"记住密码",modelValue:b(l).remember,"onUpdate:modelValue":e[2]||(e[2]=u=>b(l).remember=u)},null,8,["modelValue"])]),_:1}),p(t,null,{default:C(()=>[p(c,{style:{width:"100%"},type:"primary",onClick:b(s)},{default:C(()=>e[4]||(e[4]=[R("登录")])),_:1},8,["onClick"])]),_:1}),p(t,null,{default:C(()=>[k("div",null,[e[6]||(e[6]=R("没有账号？")),p(_,{to:"/register"},{default:C(()=>e[5]||(e[5]=[R("立即注册")])),_:1})])]),_:1})]),_:1},8,["model"])])])])}}}),Ce=re(pe,[["__scopeId","data-v-9f1eb60a"]]);export{Ce as default};