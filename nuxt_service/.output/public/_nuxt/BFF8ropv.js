import{b8 as N,d as A,D as T,i as v,H as $,I as C,r as z,cA as L,q as d,bs as g,b9 as y,d_ as I,z as O,dJ as _,f as h,g as R,a6 as V}from"./BKjTAV26.js";import{P as o,i as P,a as Y}from"./D1ZkmWoV.js";const j=N({prefixCls:{type:String}}),w=A({name:"ElSpaceItem",props:j,setup(e,{slots:u}){const p=T("space"),r=v(()=>`${e.prefixCls||p.b()}__item`);return()=>$("div",{class:r.value},C(u,"default"))}}),x={small:8,default:12,large:16};function k(e){const u=T("space"),p=v(()=>[u.b(),u.m(e.direction),e.class]),r=z(0),i=z(0),m=v(()=>{const t=e.wrap||e.fill?{flexWrap:"wrap"}:{},n={alignItems:e.alignment},l={rowGap:`${i.value}px`,columnGap:`${r.value}px`};return[t,n,l,e.style]}),f=v(()=>e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{});return L(()=>{const{size:t="small",wrap:n,direction:l,fill:a}=e;if(d(t)){const[s=0,c=0]=t;r.value=s,i.value=c}else{let s;g(t)?s=t:s=x[t||"small"]||x.small,(n||a)&&l==="horizontal"?r.value=i.value=s:l==="horizontal"?(r.value=s,i.value=0):(i.value=s,r.value=0)}}),{classes:p,containerStyle:m,itemStyle:f}}const G=N({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:y([String,Object,Array]),default:""},style:{type:y([String,Array,Object]),default:""},alignment:{type:y(String),default:"center"},prefixCls:{type:String},spacer:{type:y([Object,String,Number,Array]),default:null,validator:e=>I(e)||g(e)||O(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:_,validator:e=>g(e)||d(e)&&e.length===2&&e.every(g)}}),B=A({name:"ElSpace",props:G,setup(e,{slots:u}){const{classes:p,containerStyle:r,itemStyle:i}=k(e);function m(f,t="",n=[]){const{prefixCls:l}=e;return f.forEach((a,s)=>{P(a)?d(a.children)&&a.children.forEach((c,S)=>{P(c)&&d(c.children)?m(c.children,`${t+S}-`,n):n.push(h(w,{style:i.value,prefixCls:l,key:`nested-${t+S}`},{default:()=>[c]},o.PROPS|o.STYLE,["style","prefixCls"]))}):Y(a)&&n.push(h(w,{style:i.value,prefixCls:l,key:`LoopKey${t+s}`},{default:()=>[a]},o.PROPS|o.STYLE,["style","prefixCls"]))}),n}return()=>{var f;const{spacer:t,direction:n}=e,l=C(u,"default",{key:0},()=>[]);if(((f=l.children)!=null?f:[]).length===0)return null;if(d(l.children)){let a=m(l.children);if(t){const s=a.length-1;a=a.reduce((c,S,E)=>{const b=[...c,S];return E!==s&&b.push(h("span",{style:[i.value,n==="vertical"?"width: 100%":null],key:E},[I(t)?t:R(t,o.TEXT)],o.STYLE)),b},[])}return h("div",{class:p.value,style:r.value},a,o.STYLE|o.CLASS)}return l.children}}}),q=V(B);export{q as E};