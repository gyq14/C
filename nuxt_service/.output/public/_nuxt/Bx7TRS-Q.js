import{dL as w,u as T,r as l,i as g,dM as S,dN as m}from"./BKjTAV26.js";const U=w("todo",()=>{const r=S().public.apiUrl,d=T(),a=l([]),n=l(null);function s(e){a.value=e}function i(){a.value=[]}async function f(e){try{const t=await fetch(`${r}/api/notification/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("Failed to create todo");const o=await t.json();o.value&&s([...a.value,o.value])}catch(t){console.error(t)}}async function p(e,t){try{const o=await fetch(`${r}/api/todos/update`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,status:t})});if(!o.ok)throw new Error("Failed to change status");if((await o.json()).value){const u=a.value.find(y=>y.id===e);u&&(u.status=t)}}catch(o){console.error(o)}}async function c(){var e;try{const t=await fetch(`${r}/api/todos/by-receiver?receiverId=${(e=d.userData)==null?void 0:e.id}`,{method:"GET"});if(!t.ok)throw new Error("Failed to fetch all tasks");const o=await t.json();console.log("====>",o),o&&s(o)}catch(t){console.error(t)}}function h(e=3e3){c(),n.value=m(c,e)}function v(){n.value!==null&&(clearInterval(n.value),n.value=null,i())}return{todesData:g(()=>a.value),createTodo:f,changeTodoStatus:p,setTodos:s,resetTodos:i,startAutoRefresh:h,stopAutoRefresh:v}},{persist:!0});export{U as u};