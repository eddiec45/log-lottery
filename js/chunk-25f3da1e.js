import{a8 as s,r as l,aN as a,Y as o,Z as e,b8 as r,u as t,bz as n,bl as p,W as i,X as u}from"./chunk-6addeafd.js";import{u as c}from"./chunk-42efbe09.js";import{s as m}from"./chunk-fef0cdc6.js";import{_ as b}from"./chunk-7b79636b.js";import"./chunk-ae148721.js";import"./chunk-e0a53dd1.js";import"./chunk-65a2ac68.js";import"./chunk-79c60fa1.js";import"./chunk-38e6902a.js";import"./chunk-5a8af153.js";import"./chunk-1974f2ff.js";import"./chunk-07814c5c.js";import"./chunk-c7a1205e.js";import"./chunk-3fae03ad.js";import"./chunk-4c5d5523.js";import"./chunk-66446df1.js";import"./chunk-6e0e2973.js";import"./chunk-54735b0f.js";import"./chunk-ca6057e9.js";import"./chunk-70d140bd.js";const k={class:"overflow-y-auto"},d=e("h2",null,"已中獎人員管理",-1),h={class:"flex items-center justify-start gap-10"},j=e("span",null,"中獎人數：",-1),f={class:"flex flex-col"},v={class:"form-control"},y={class:"cursor-pointer label"},g=e("span",{class:"label-text"},"詳細信息:",-1),x=s({__name:"PersonAlready",setup(s){const x=c().personConfig,{getAlreadyPersonList:C,getAlreadyPersonDetail:z}=m(x),A=l(!1),N=s=>{x.moveAlreadyToNot(s)},P=[{label:"編號",props:"uid",sort:!0},{label:"姓名",props:"name"},{label:"推薦人",props:"introducer"},{label:"獎品",props:"prizeName",sort:!0},{label:"操作",actions:[{label:"移入未中獎名單",type:"btn-info",onClick:s=>{N(s)}}]}],_=[{label:"編號",props:"uid",sort:!0},{label:"姓名",props:"name"},{label:"推薦人",props:"introducer"},{label:"獎品",props:"prizeName",sort:!0},{label:"中獎時間",props:"prizeTime"},{label:"操作",actions:[{label:"移入未中獎名單",type:"btn-info",onClick:s=>{N(s)}}]}];return(s,l)=>(a(),o("div",k,[d,e("div",h,[e("div",null,[j,e("span",null,r(t(C).length),1)]),e("div",f,[e("div",v,[e("label",y,[g,n(e("input",{type:"checkbox",class:"border-solid toggle toggle-primary border-1","onUpdate:modelValue":l[0]||(l[0]=s=>A.value=s)},null,512),[[p,A.value]])])])])]),A.value?u("",!0):(a(),i(b,{key:0,tableColumns:P,data:t(C)},null,8,["data"])),A.value?(a(),i(b,{key:1,tableColumns:_,data:t(z)},null,8,["data"])):u("",!0)]))}});export{x as default};
