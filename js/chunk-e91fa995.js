import{u as e,b as l,d as s}from"./chunk-0c34ea47.js";import{a8 as t,r as a,o as n,w as o,aN as u,Y as i,Z as c,F as r,aV as d,az as p,u as m,a5 as b,bz as f,bp as h,bo as v,X as x,b8 as k,aB as C,a4 as w}from"./chunk-6addeafd.js";import{s as g}from"./chunk-fef0cdc6.js";import{l as y}from"./chunk-79c60fa1.js";import"./chunk-ae148721.js";import"./chunk-e0a53dd1.js";import"./chunk-65a2ac68.js";import"./chunk-38e6902a.js";import"./chunk-5a8af153.js";import"./chunk-1974f2ff.js";import"./chunk-07814c5c.js";import"./chunk-c7a1205e.js";import"./chunk-3fae03ad.js";import"./chunk-4c5d5523.js";import"./chunk-66446df1.js";import"./chunk-6e0e2973.js";import"./chunk-54735b0f.js";import"./chunk-ca6057e9.js";import"./chunk-70d140bd.js";const U=c("h2",null,"獎項配置",-1),j=c("div",{role:"alert",class:"w-full my-4 alert alert-info"},[c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"w-6 h-6 stroke-current shrink-0"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]),c("span",null,"進行操作可能會重置數據，請謹慎操作")],-1),z={class:"p-0 m-0"},L={class:"max-w-xs mb-10 form-control"},P={class:"flex flex-col items-center gap-2 pt-5"},V={class:"w-1/2 max-w-xs mb-10 form-control"},A=c("div",{class:"label"},[c("span",{class:"label-text"},"名稱")],-1),S=["onUpdate:modelValue"],D={class:"w-1/2 max-w-xs mb-10 form-control"},N=c("div",{class:"label"},[c("span",{class:"label-text"},"重複抽獎")],-1),O=["checked","onChange"],q={class:"w-1/2 max-w-xs mb-10 form-control"},B=c("div",{class:"label"},[c("span",{class:"label-text"},[w("抽獎人數"),c("br"),w("(最多10人)")])],-1),I=["onUpdate:modelValue","onChange"],M=["data-tip"],_=["value","max"],F={class:"w-1/2 max-w-xs mb-10 form-control"},T=c("div",{class:"label"},[c("span",{class:"label-text"},"已抽取")],-1),X=["checked","onChange"],Y={class:"w-full max-w-xs mb-10 form-control"},Z=c("div",{class:"label"},[c("span",{class:"label-text"},"圖片")],-1),$=["onUpdate:modelValue"],E={key:0,value:{id:"",name:"",url:""}},G=[c("span",null,"❌",-1)],H=c("option",{disabled:"",selected:""},"選擇一張圖片",-1),J=["value"],K={key:0,class:"w-full max-w-xs mb-10 form-control"},Q=c("div",{class:"label"},[c("span",{class:"label-text"},[w("單次抽取個數"),c("br"),w("(可分3次抽)")])],-1),R=["onClick"],W={key:0,class:"flex flex-wrap w-full h-full gap-1 p-0 pt-1 m-0 cursor-pointer"},ee=["data-tip"],le={key:1,class:"btn btn-secondary btn-xs"},se={class:"w-full max-w-xs mb-10 form-control"},te=c("div",{class:"label"},[c("span",{class:"label-text"},"操作")],-1),ae={class:"flex gap-2"},ne=["onClick"],oe=t({__name:"PrizeConfig",setup(t){const w=y.createInstance({name:"imgStore"}),oe=e().prizeConfig,ue=e().globalConfig,{getPrizeConfig:ie,getCurrentPrize:ce}=g(oe),{getImageList:re}=g(ue),de=a(ie),pe=a([]),me=a(),be=()=>{const e={id:(new Date).getTime().toString(),name:"獎項",sort:0,isAll:!1,count:1,isUsedCount:0,picture:{id:"",name:"",url:""},separateCount:{enable:!1,countList:[]},desc:"",isUsed:!1,isShow:!0,frequency:1};oe.addPrizeConfig(e)},fe=e=>{me.value.separateCount.countList=e,me.value=null},he=()=>{oe.resetDefault()},ve=(e,l)=>{const s=de.value.indexOf(e);1==l?(de.value.splice(s,1),de.value.splice(s-1,0,e)):(de.value.splice(s,1),de.value.splice(s+1,0,e))},xe=async()=>{await oe.deleteAllPrizeConfig()};return n((()=>{(async()=>{(await w.keys()).length>0&&w.iterate(((e,l)=>{pe.value.push({key:l,value:e})}))})()})),o((()=>de.value),(e=>{oe.setPrizeConfig(e)}),{deep:!0}),(e,t)=>{var a,n;const o=s;return u(),i("div",null,[U,c("div",{class:"flex w-full gap-3"},[c("button",{class:"btn btn-info btn-sm",onClick:be},"添加"),c("button",{class:"btn btn-info btn-sm",onClick:he},"默認列表"),c("button",{class:"btn btn-error btn-sm",onClick:xe},"全部刪除")]),j,c("ul",z,[(u(!0),i(r,null,d(de.value,(e=>(u(),i("li",{key:e.id,class:p(["flex gap-10",m(ce).id==e.id?"border-1 border-dotted rounded-xl":null])},[c("label",L,[c("div",P,[b(o,{class:p(["cursor-pointer hover:text-blue-400",0==de.value.indexOf(e)?"opacity-0 cursor-default":""]),name:"up",onClick:l=>ve(e,1)},null,8,["class","onClick"]),b(o,{class:p(["cursor-pointer hover:text-blue-400",de.value.indexOf(e)==de.value.length-1?"opacity-0 cursor-default":""]),name:"down",onClick:l=>ve(e,0)},null,8,["onClick","class"])])]),c("label",V,[A,f(c("input",{type:"text","onUpdate:modelValue":l=>e.name=l,placeholder:"名稱",class:"w-full max-w-xs input-sm input input-bordered"},null,8,S),[[h,e.name]])]),c("label",D,[N,c("input",{type:"checkbox",checked:e.isAll,onChange:l=>e.isAll=!e.isAll,class:"mt-2 border-solid checkbox checkbox-secondary border-1"},null,40,O)]),c("label",q,[B,f(c("input",{type:"number","onUpdate:modelValue":l=>e.count=l,placeholder:"獲獎人數",onChange:l=>(e=>{let l=-1;for(let s=0;s<de.value.length;s++)if(de.value[s].id==e.id){l=s;break}l>-1&&(de.value[l].separateCount.countList=[],de.value[l].isUsed?de.value[l].isUsedCount=de.value[l].count:de.value[l].isUsedCount=0)})(e),class:"w-full max-w-xs p-0 m-0 input-sm input input-bordered"},null,40,I),[[h,e.count]]),c("div",{class:"tooltip tooltip-bottom","data-tip":"已抽取:"+e.isUsedCount+"/"+e.count},[c("progress",{class:"w-full progress",value:e.isUsedCount,max:e.count},null,8,_)],8,M)]),c("label",F,[T,c("input",{type:"checkbox",checked:e.isUsed,onChange:l=>(e=>{e.isUsed?e.isUsedCount=0:e.isUsedCount=e.count,e.separateCount.countList=[],e.isUsed=!e.isUsed})(e),class:"mt-2 border-solid checkbox checkbox-secondary border-1"},null,40,X)]),c("label",Y,[Z,f(c("select",{class:"w-full max-w-xs select select-warning select-sm","onUpdate:modelValue":l=>e.picture=l},[e.picture.id?(u(),i("option",E,G)):x("",!0),H,(u(!0),i(r,null,d(m(re),(e=>(u(),i("option",{key:e.id,value:e},k(e.name),9,J)))),128))],8,$),[[v,e.picture]])]),e.separateCount?(u(),i("label",K,[Q,c("div",{class:"flex justify-start w-full h-full",onClick:l=>(e=>{me.value=e,me.value.isUsedCount=0,me.value.isUsed=!1,me.value.separateCount.countList.length>1||(me.value.separateCount={enable:!0,countList:[{id:"0",count:e.count,isUsedCount:0}]})})(e)},[e.separateCount.countList.length?(u(),i("ul",W,[(u(!0),i(r,null,d(e.separateCount.countList,(e=>(u(),i("li",{class:"relative flex items-center justify-center w-8 h-8 bg-slate-600/60 separated",key:e.id},[c("div",{class:"flex items-center justify-center w-full h-full tooltip","data-tip":"已抽取:"+e.isUsedCount+"/"+e.count},[c("div",{class:"absolute left-0 z-50 h-full bg-blue-300/80",style:C(`width:${100*e.isUsedCount/e.count}%`)},null,4),c("span",null,k(e.count),1)],8,ee)])))),128))])):(u(),i("button",le,"設置"))],8,R)])):x("",!0),c("label",se,[te,c("div",ae,[c("button",{class:"btn btn-error btn-sm",onClick:l=>(e=>{oe.deletePrizeConfig(e.id)})(e)},"删除",8,ne)])])],2)))),128))]),b(l,{totalNumber:null==(a=me.value)?void 0:a.count,"separated-number":null==(n=me.value)?void 0:n.separateCount.countList,onSubmitData:fe},null,8,["totalNumber","separated-number"])])}}});export{oe as default};
