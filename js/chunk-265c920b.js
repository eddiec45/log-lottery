import{a}from"./chunk-05f6b65c.js";import{l as e}from"./chunk-79c60fa1.js";import{u as s,f as t}from"./chunk-6f1ac0a9.js";import{s as l}from"./chunk-fef0cdc6.js";import{a8 as n,r,o as i,w as o,aN as m,Y as c,Z as u,X as p,F as h,aV as v,a5 as k,b8 as d,u as g}from"./chunk-6addeafd.js";import"./chunk-65a2ac68.js";import"./chunk-ae148721.js";import"./chunk-e0a53dd1.js";import"./chunk-38e6902a.js";import"./chunk-5a8af153.js";import"./chunk-1974f2ff.js";import"./chunk-07814c5c.js";import"./chunk-c7a1205e.js";import"./chunk-3fae03ad.js";import"./chunk-4c5d5523.js";import"./chunk-66446df1.js";import"./chunk-6e0e2973.js";import"./chunk-54735b0f.js";import"./chunk-ca6057e9.js";import"./chunk-70d140bd.js";const j={class:"toast toast-top toast-end"},f={key:0,class:"alert alert-error"},b=[u("span",null,"上傳失敗",-1)],y={key:1,class:"alert alert-success"},w=[u("span",null,"上傳成功",-1)],I={key:2,class:"alert alert-error"},x=[u("span",null,"不是圖片",-1)],C={class:""},S={for:"explore"},q=["accept"],N=u("span",{class:"btn btn-primary btn-sm"},"上傳圖片",-1),T={class:"p-0"},_={class:"flex items-center gap-8"},D={class:"avatar h-14"},F={class:"w-12 h-12 mask mask-squircle hover:w-14 hover:h-14"},K={class:"w-64"},L={class:"overflow-hidden font-bold whitespace-nowrap text-ellipsis"},U=["onClick"],V=n({__name:"ImageConfig",setup(n){const V=s().globalConfig,{getImageList:X}=l(V),Y=r("image/*"),Z=r(0),z=e.createInstance({name:"imgStore"}),A=async e=>{if(!/image*/.test(e.target.files[0].type))return void(Z.value=3);let{dataUrl:s,fileName:t}=await a(e.target.files[0]);z.setItem((new Date).getTime().toString()+"+"+t,s).then((()=>{Z.value=1,B()})).catch((()=>{Z.value=2}))},B=async()=>{(await z.keys()).length>0&&z.iterate(((a,e)=>{V.addImage({id:e,name:e,url:"Storage"})}))};return i((()=>{})),o((()=>Z.value),(a=>{0!==a&&setTimeout((()=>{Z.value=0}),2e3)})),(a,e)=>(m(),c(h,null,[u("div",j,[2==Z.value?(m(),c("div",f,b)):p("",!0),1==Z.value?(m(),c("div",y,w)):p("",!0),3==Z.value?(m(),c("div",I,x)):p("",!0)]),u("div",null,[u("div",C,[u("label",S,[u("input",{type:"file",class:"",id:"explore",style:{display:"none"},onChange:A,accept:Y.value},null,40,q),N])]),u("ul",T,[(m(!0),c(h,null,v(g(X),(a=>(m(),c("li",{key:a.id,class:"mb-3"},[u("div",_,[u("div",D,[u("div",F,[k(t,{imgItem:a},null,8,["imgItem"])])]),u("div",K,[u("div",L,d(a.name),1)]),u("div",null,[u("button",{class:"btn btn-error btn-xs",onClick:e=>(a=>{"Storage"==a.url&&z.removeItem(a.id).then((()=>{V.removeImage(a.id)})),V.removeImage(a.id)})(a)},"刪除",8,U)])])])))),128))])])],64))}});export{V as default};
