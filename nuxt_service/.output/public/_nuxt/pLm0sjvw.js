import{d as Q,r,u as Y,a9 as G,aa as H,i as J,a0 as K,o as p,b as m,e as n,f as l,w as o,j as E,s as W,t as c,h as X,g as u,F as V,Y as w,c as Z,ab as ee,a7 as te,E as le,M as ae,a8 as oe,_ as se}from"./BKjTAV26.js";import{E as ne}from"./e_7zQVqF.js";import{E as re,a as ue}from"./D646KoZa.js";import{E as ie,a as de}from"./Kf5dBhzp.js";import{E as pe,a as me}from"./BsR5JkuZ.js";import{E as ce}from"./CfeOwlTK.js";import{E as fe}from"./CSNTPWt0.js";import{E as _e}from"./DY1Al2b1.js";import{E as ve}from"./BFF8ropv.js";import{z as ge}from"./z0oBgxIm.js";import{u as ye}from"./CNJuuRFD.js";import{u as Ee}from"./BW5v7ni-.js";import"./CiLdZ0ri.js";import"./Lm5XNi9w.js";import"./B_jPntpX.js";import"./DqWkRQbi.js";import"./i6Tmy0Ys.js";import"./D1ZkmWoV.js";import"./A8IlQKut.js";const be={style:{display:"flex","align-items":"center","margin-bottom":"20px"}},ke={style:{"margin-left":"20px"}},Ve={style:{display:"flex"}},we={class:"dialog-footer"},xe=["onDblclick"],Ce={class:"card-header"},Te={class:"card-content"},De=Q({__name:"TaskCenter",setup(Ie){const x=r(ge),f=Y(),_=ye(),C=Ee();G();const T=H(),a=r({name:"",deadline:"",time:"",responsible:0,desc:""}),i=r(!1);r(!1);const D=()=>{var s,e;a.value.name&&a.value.responsible>0&&(_.createTask({title:a.value.name,version:"A.1",approverId:a.value.responsible,responsibleId:(s=f.userData)==null?void 0:s.id,dueDate:"23432523545",description:a.value.desc}),i.value=!1,C.createNotification({title:`${a.value.name}的审批通知`,type:"Information",status:"Unread",senderId:(e=f.userData)==null?void 0:e.id,receiverId:a.value.responsible,expiry:"23423545"}),b())},b=()=>{a.value.name="",a.value.deadline="",a.value.time="",a.value.responsible=0,a.value.desc=""},k=J(()=>_.tasksData.filter(s=>s.title.includes(v.value))),I=r(0),v=r("");K(()=>{I.value=_.tasksData.length});const S=s=>{T.push(`/admin/TaskCenter-TaskCenter/${s}`)},U=s=>{switch(s){case"InProgress":return"success";case"AwaitingApproval":return"warning";case"Completed":return"info";default:return"default"}},A=s=>{switch(s){case"InProgress":return"进行中";case"AwaitingApproval":return"待审批";case"Completed":return"已完成";case"Pending":return"待处理";default:return"未知状态"}};return(s,e)=>{const g=X,y=ne,d=te,N=re,P=ue,B=ie,F=le,$=pe,h=me,q=ae,R=de,j=oe,z=ce,M=fe,L=_e,O=ve;return p(),m("div",null,[n("div",be,[l(g,{type:"primary",onClick:e[0]||(e[0]=t=>i.value=!0)},{default:o(()=>e[9]||(e[9]=[u("新建")])),_:1}),l(y,{modelValue:v.value,"onUpdate:modelValue":e[1]||(e[1]=t=>v.value=t),"suffix-icon":E(W),placeholder:"搜索任务",clearable:"",style:{width:"300px","margin-left":"10px"}},null,8,["modelValue","suffix-icon"]),n("div",ke,"合计 "+c(k.value.length)+" 条",1)]),l(z,{modelValue:i.value,"onUpdate:modelValue":e[8]||(e[8]=t=>i.value=t),title:"新建任务",width:"800px",center:!0,onClose:b},{footer:o(()=>[n("span",we,[l(g,{onClick:e[7]||(e[7]=t=>i.value=!1)},{default:o(()=>e[12]||(e[12]=[u("取消")])),_:1}),l(g,{type:"primary",onClick:D},{default:o(()=>e[13]||(e[13]=[u("确定")])),_:1})])]),default:o(()=>[l(j,{model:a.value,"label-width":"auto",style:{"max-width":"100%",padding:"20px"}},{default:o(()=>[l(d,{label:"任务名称：",required:""},{default:o(()=>[l(y,{modelValue:a.value.name,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value.name=t),placeholder:"请输入任务名称"},null,8,["modelValue"])]),_:1}),l(F,{locale:x.value},{default:o(()=>[l(d,{label:"截止时间：",required:""},{default:o(()=>[l(B,null,{default:o(()=>[n("div",Ve,[l(N,{modelValue:a.value.deadline,"onUpdate:modelValue":e[3]||(e[3]=t=>a.value.deadline=t),type:"date",placeholder:"选择截止时间",style:{width:"305px"}},null,8,["modelValue"]),e[10]||(e[10]=u(" ---- ")),l(P,{modelValue:a.value.time,"onUpdate:modelValue":e[4]||(e[4]=t=>a.value.time=t),placeholder:"选择时间",style:{width:"305px"}},null,8,["modelValue"])])]),_:1})]),_:1})]),_:1},8,["locale"]),l(d,{label:"负责人：",required:""},{default:o(()=>[l(h,{modelValue:a.value.responsible,"onUpdate:modelValue":e[5]||(e[5]=t=>a.value.responsible=t),placeholder:"请选择负责人"},{default:o(()=>[(p(!0),m(V,null,w(E(f).leaderData,t=>(p(),Z($,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,{label:"备注："},{default:o(()=>[l(y,{modelValue:a.value.desc,"onUpdate:modelValue":e[6]||(e[6]=t=>a.value.desc=t),type:"textarea",placeholder:"请输入备注说明"},null,8,["modelValue"])]),_:1}),l(d,{label:"附件："},{default:o(()=>[l(R,{class:"upload-demo",drag:"",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:"",style:{width:"100%"}},{default:o(()=>[l(q,{class:"el-icon--upload"},{default:o(()=>[l(E(ee))]),_:1}),e[11]||(e[11]=n("div",null,"上传文件",-1))]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),l(O,{wrap:""},{default:o(()=>[(p(!0),m(V,null,w(k.value,t=>(p(),m("div",{key:t.title,class:"custom-card",onDblclick:Se=>t.status!="AwaitingApproval"&&S(t.id)},[n("span",Ce,[n("div",null,c(t.title),1),l(M,{type:U(t.status),effect:"dark"},{default:o(()=>[u(c(A(t.status)),1)]),_:2},1032,["type"])]),l(L,{style:{margin:"5px 0"}}),n("div",Te,[e[14]||(e[14]=n("strong",null,"备注:",-1)),u(" "+c(t.description),1)])],40,xe))),128))]),_:1})])}}}),Je=se(De,[["__scopeId","data-v-feefe33a"]]);export{Je as default};