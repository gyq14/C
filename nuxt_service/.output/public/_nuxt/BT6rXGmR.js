import{d as f,r as u,a0 as d,J as b,b as i}from"./BKjTAV26.js";const m=Symbol.for("nuxt:client-only"),h=f({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(k,{slots:e,attrs:r}){const l=u(!1);return d(()=>{l.value=!0}),b(m,!0),a=>{var t;if(l.value)return(t=e.default)==null?void 0:t.call(e);const n=e.fallback||e.placeholder;if(n)return n();const c=a.fallback||a.placeholder||"",o=a.fallbackTag||a.placeholderTag||"span";return i(o,r,c)}}});export{h as _};