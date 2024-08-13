import{a8 as e,d as l,aN as a,Y as t,Z as o,F as s,aV as r,bC as u,aB as n,r as c,w as i,o as p,bz as d,bp as m,b8 as v,X as b,bq as f,bo as C,a5 as h,u as w}from"./chunk-6addeafd.js";import{_ as x,u as k,i as g,e as y}from"./chunk-6f1ac0a9.js";import{s as j}from"./chunk-fef0cdc6.js";import{t as L}from"./chunk-5a8af153.js";import{z as V}from"./chunk-8c94a535.js";import{d as P}from"./chunk-65a2ac68.js";import{r as _}from"./chunk-32863568.js";import"./chunk-ae148721.js";import"./chunk-e0a53dd1.js";import"./chunk-79c60fa1.js";import"./chunk-38e6902a.js";import"./chunk-1974f2ff.js";import"./chunk-07814c5c.js";import"./chunk-c7a1205e.js";import"./chunk-3fae03ad.js";import"./chunk-4c5d5523.js";import"./chunk-66446df1.js";import"./chunk-6e0e2973.js";import"./chunk-54735b0f.js";import"./chunk-ca6057e9.js";import"./chunk-70d140bd.js";import"./chunk-2b8234f4.js";import"./chunk-96402e16.js";import"./chunk-11d59c9a.js";import"./chunk-32bf4cc1.js";import"./chunk-4b44138d.js";import"./chunk-8dd39241.js";import"./chunk-396dda61.js";const T={class:"w-full h-auto"},U=["onClick"],z=x(e({__name:"PatternSetting",props:{rowCount:{type:Number,default:17},cardColor:{type:String,default:"#fff"},patternColor:{type:String,default:"#000"},patternList:{type:Array,default:()=>[]}},setup(e){const c=e,i=l((()=>c));return(e,l)=>(a(),t("div",T,[o("ul",{class:"pattern-list",style:n({gridTemplateColumns:"repeat("+i.value.rowCount+",1fr)"})},[(a(!0),t(s,null,r(7*i.value.rowCount,(e=>(a(),t("li",{onClick:u((l=>((e,l)=>{if(i.value.patternList.includes(l)){const e=i.value.patternList.indexOf(l);i.value.patternList.splice(e,1)}else i.value.patternList.push(l)})(0,e)),["stop"]),class:"w-5 h-5",key:e,style:n({backgroundColor:i.value.patternList.includes(e)?i.value.patternColor:i.value.cardColor})},null,12,U)))),128))],4)]))}}),[["__scopeId","data-v-be6d21c1"]]),S={class:"modal-box"},R=o("h3",{class:"text-lg font-bold"},"提示!",-1),A=o("p",{class:"py-4"},"該操作會重置所有數據，是否繼續？",-1),N={class:"modal-action"},q={method:"dialog",class:"flex gap-3"},D=o("h2",null,"全局配置",-1),I={class:"mb-8"},F={class:"flex flex-row items-center w-full gap-24 mb-10 form-control"},O={class:""},B=o("div",{class:"label"},[o("span",{class:"label-text"},"標題")],-1),M={class:"flex flex-row items-center w-full gap-24 mb-10 form-control"},X={class:""},Y=o("div",{class:"label"},[o("span",{class:"label-text"},"列數")],-1),Z={class:"help"},E={key:0,class:"text-sm text-red-400 help-text"},G={class:"tooltip","data-tip":"該項比較耗費時間和性能"},H=["disabled"],J=o("span",null,"重設布局",-1),K={class:"loading loading-ring loading-md"},Q={class:"w-full max-w-xs form-control"},W=o("div",{class:"label"},[o("span",{class:"label-text"},"選擇主題")],-1),$=o("option",{disabled:"",selected:""},"選擇主題",-1),ee=["value"],le={class:"w-full max-w-xs form-control"},ae=o("div",{class:"label"},[o("span",{class:"label-text"},"卡片顏色")],-1),te={class:"w-full max-w-xs form-control"},oe=o("div",{class:"label"},[o("span",{class:"label-text"},"中獎卡片顏色")],-1),se={class:"w-full max-w-xs form-control"},re=o("div",{class:"label"},[o("span",{class:"label-text"},"文字顏色")],-1),ue={class:"flex flex-row w-full max-w-xs gap-10 mb-10 form-control"},ne=o("div",{class:"label"},[o("span",{class:"label-text"},"卡片寬度")],-1),ce=o("div",{class:"label"},[o("span",{class:"label-text"},"卡片高度")],-1),ie={class:"w-full max-w-xs mb-10 form-control"},pe=o("div",{class:"label"},[o("span",{class:"label-text"},"文字大小")],-1),de={class:"w-full max-w-xs form-control"},me=o("div",{class:"label"},[o("span",{class:"label-text"},"高亮顏色")],-1),ve={class:"flex flex-row items-center w-full gap-24 mb-0 form-control"},be=o("div",{class:"label"},[o("span",{class:"label-text"},"圖案設置")],-1),fe={class:"h-auto"},Ce={class:"flex w-full h-24 gap-3 m-0"},he=[o("span",null,"清空圖案設置",-1)],we=[o("span",null,"默認圖案設置",-1)],xe={class:"w-full max-w-xs mb-10 form-control"},ke=o("div",{class:"label"},[o("span",{class:"label-text"},"是否常顯獎品列表")],-1),ge=["checked"],ye=e({__name:"FaceConfig",setup(e){const l=k().globalConfig,n=k().personConfig,x=k().prizeConfig,{getTopTitle:T,getTheme:U,getPatterColor:ye,getPatternList:je,getCardColor:Le,getLuckyColor:Ve,getTextColor:Pe,getCardSize:_e,getTextSize:Te,getRowCount:Ue,getIsShowPrizeList:ze}=j(l),{getAlreadyPersonList:Se,getNotPersonList:Re}=j(n),Ae=c(),Ne=c(),qe=c(0),De=c(U.value.name),Ie=c(structuredClone(T.value)),Fe=c(structuredClone(Le.value)),Oe=c(structuredClone(Ve.value)),Be=c(structuredClone(Pe.value)),Me=c(structuredClone(_e.value)),Xe=c(structuredClone(Te.value)),Ye=c(structuredClone(Ue.value)),Ze=c(structuredClone(ze.value)),Ee=c(structuredClone(ye.value)),Ge=c(Object.keys(P)),He=c(P),Je=c({rowCount:Ye}),Ke=c({rowCount:""}),Qe=V.object({rowCount:V.number({required_error:"必填項",invalid_type_error:"必須填入數字"}).min(1,"最小為1").max(100,"最大為100")}),We={rowCount:Je.value.rowCount},$e=()=>{qe.value=2,setTimeout((()=>{const e=Se.value.length,l=Re.value.length;if(e<=0&&l<=0)return;const a=Se.value.concat(Re.value),t=a.slice(0,e),o=a.slice(e,l+e);n.deleteAllPerson(),n.addNotPersonList(o),n.addAlreadyPersonList(t,null),qe.value=0}),1e3)},el=()=>{l.setPatternList([])},ll=()=>{l.resetPatternList()},al=()=>{l.reset(),n.reset(),x.resetDefault(),window.location.reload()};return i((()=>Je.value.rowCount),(()=>{var e;We.rowCount=Je.value.rowCount,(e=We,Qe.parseAsync(e)).then((e=>{e.rowCount&&(qe.value=1,l.setRowCount(e.rowCount))})).catch((e=>{Ke.value.rowCount=e.issues[0].message}))})),i(Ie,(e=>{l.setTopTitle(e)})),i(De,(e=>{const a=He.value[e];l.setTheme({name:e,detail:a}),L.themeChange(e),a.primary&&(g(a.primary)||y(a.primary))&&l.setCardColor(a.primary)}),{deep:!0}),i(Fe,(e=>{l.setCardColor(e)}),{deep:!0}),i(Oe,(e=>{l.setLuckyCardColor(e)}),{deep:!0}),i(Ee,(e=>{l.setPatterColor(e)})),i(Be,(e=>{l.setTextColor(e)}),{deep:!0}),i(Me,(e=>{l.setCardSize(e)}),{deep:!0}),i(Ze,(()=>{l.setIsShowPrizeList(Ze.value)})),p((()=>{})),(e,l)=>(a(),t(s,null,[o("dialog",{id:"my_modal_1",ref_key:"resetDataDialogRef",ref:Ne,class:"border-none modal"},[o("div",S,[R,A,o("div",N,[o("form",q,[o("button",{class:"btn",onClick:l[0]||(l[0]=e=>Ne.value.close())},"取消"),o("button",{class:"btn",onClick:al},"確定")])])])],512),o("div",null,[D,o("div",I,[o("button",{class:"btn btn-sm btn-primary",onClick:l[1]||(l[1]=e=>Ne.value.showModal())},"重置所有數據")]),o("label",F,[o("div",O,[B,d(o("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=e=>Ie.value=e),placeholder:"輸入標題",class:"w-full max-w-xs input input-bordered"},null,512),[[m,Ie.value]])])]),o("label",M,[o("div",X,[Y,d(o("input",{type:"number","onUpdate:modelValue":l[3]||(l[3]=e=>Je.value.rowCount=e),placeholder:"Type here",class:"w-full max-w-xs input input-bordered"},null,512),[[m,Je.value.rowCount]]),o("div",Z,[Ke.value.rowCount?(a(),t("span",E,v(Ke.value.rowCount),1)):b("",!0)])]),o("div",null,[o("div",G,[o("button",{class:"mt-5 btn btn-info btn-sm",disabled:1!=qe.value,onClick:$e},[J,d(o("span",K,null,512),[[f,2==qe.value]])],8,H)])])]),o("label",Q,[W,d(o("select",{"data-choose-theme":"",class:"w-full max-w-xs border-solid select border-1","onUpdate:modelValue":l[4]||(l[4]=e=>De.value=e)},[$,(a(!0),t(s,null,r(Ge.value,((e,l)=>(a(),t("option",{key:l,value:e},v(e),9,ee)))),128))],512),[[C,De.value]])]),o("label",le,[ae,h(w(_),{ref_key:"colorPickerRef",ref:Ae,modelValue:Fe.value,"onUpdate:modelValue":l[5]||(l[5]=e=>Fe.value=e),"pure-color":Fe.value,"onUpdate:pureColor":l[6]||(l[6]=e=>Fe.value=e)},null,8,["modelValue","pure-color"])]),o("label",te,[oe,h(w(_),{ref_key:"colorPickerRef",ref:Ae,modelValue:Oe.value,"onUpdate:modelValue":l[7]||(l[7]=e=>Oe.value=e),"pure-color":Oe.value,"onUpdate:pureColor":l[8]||(l[8]=e=>Oe.value=e)},null,8,["modelValue","pure-color"])]),o("label",se,[re,h(w(_),{ref_key:"colorPickerRef",ref:Ae,modelValue:Be.value,"onUpdate:modelValue":l[9]||(l[9]=e=>Be.value=e),"pure-color":Be.value,"onUpdate:pureColor":l[10]||(l[10]=e=>Be.value=e)},null,8,["modelValue","pure-color"])]),o("label",ue,[o("div",null,[ne,d(o("input",{type:"number","onUpdate:modelValue":l[11]||(l[11]=e=>Me.value.width=e),placeholder:"Type here",class:"w-full max-w-xs input input-bordered"},null,512),[[m,Me.value.width]])]),o("div",null,[ce,d(o("input",{type:"number","onUpdate:modelValue":l[12]||(l[12]=e=>Me.value.height=e),placeholder:"Type here",class:"w-full max-w-xs input input-bordered"},null,512),[[m,Me.value.height]])])]),o("label",ie,[pe,d(o("input",{type:"number","onUpdate:modelValue":l[13]||(l[13]=e=>Xe.value=e),placeholder:"Type here",class:"w-full max-w-xs input input-bordered"},null,512),[[m,Xe.value]])]),o("label",de,[me,h(w(_),{ref_key:"colorPickerRef",ref:Ae,modelValue:Ee.value,"onUpdate:modelValue":l[14]||(l[14]=e=>Ee.value=e),"pure-color":Ee.value,"onUpdate:pureColor":l[15]||(l[15]=e=>Ee.value=e)},null,8,["modelValue","pure-color"])]),o("label",ve,[o("div",null,[be,o("div",fe,[h(z,{rowCount:w(Ue),cardColor:w(Le),patternColor:w(ye),patternList:w(je)},null,8,["rowCount","cardColor","patternColor","patternList"])])])]),o("div",Ce,[o("button",{class:"mt-5 btn btn-info btn-sm",onClick:u(el,["stop"])},he),o("div",{class:"tooltip","data-tip":"默認圖案設置針對17列時有效，其他列數請自行設置"},[o("button",{class:"mt-5 btn btn-info btn-sm",onClick:ll},we)])]),o("label",xe,[ke,o("input",{type:"checkbox",checked:Ze.value,onChange:l[16]||(l[16]=e=>Ze.value=!Ze.value),class:"mt-2 border-solid checkbox checkbox-secondary border-1"},null,40,ge)])])],64))}});export{ye as default};
