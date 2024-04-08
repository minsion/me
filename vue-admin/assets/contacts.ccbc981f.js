import{d as A,u as L,r as p,x as $,o as d,b as c,e,f as a,j as D,y as N,G as n,H as v,J as M,F as I,z as E,D as k,w as b,g as _,R as C,B as i,S as P,a4 as V,N as J}from"./index.ddf2ada6.js";import{S as O}from"./sweetalert2.all.06de7800.js";import{I as z}from"./icon-user-plus.61a71bff.js";import{I as B}from"./icon-list-check.f85f81c9.js";import{I as W}from"./icon-layout-grid.d8d4dfc2.js";import{I as F}from"./icon-facebook.9cc1cf82.js";import{I as q}from"./icon-instagram.4f59e735.js";import{I as R}from"./icon-linkedin.edbd9b50.js";import{_ as T}from"./icon-twitter.vue_vue_type_script_setup_true_lang.701f6b92.js";import{f as X,N as G,o as K,V as H,_ as Y}from"./transition.669728c5.js";import"./dom.b01be108.js";import"./micro-task.926e0e8e.js";import"./open-closed.7a324678.js";const Q={class:"flex items-center justify-between flex-wrap gap-4"},Z=e("h2",{class:"text-xl"},"Contacts",-1),ee={class:"flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto"},te={class:"flex gap-3"},le={class:"relative"},oe={class:"absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary"},se={class:"mt-5 panel p-0 border-0 overflow-hidden"},ae={key:0,class:"table-responsive"},ie={class:"table-striped table-hover"},ne=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Email"),e("th",null,"Location"),e("th",null,"Phone"),e("th",{class:"!text-center"},"Actions")])],-1),re={class:"flex items-center w-max"},de={class:"w-max"},ce=["src"],pe={class:"border border-gray-300 dark:border-gray-800 rounded-full grid place-content-center h-8 w-8 ltr:mr-2 rtl:ml-2"},ue={class:"whitespace-nowrap"},me={class:"whitespace-nowrap"},fe={class:"flex gap-4 items-center justify-center"},he=["onClick"],ve=["onClick"],_e={key:0,class:"grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full"},be={class:"bg-white/40 rounded-t-md bg-[url('/assets/images/notification-bg.png')] bg-center bg-cover p-6 pb-0"},ge=["src"],we={class:"px-6 pb-24 -mt-10 relative"},xe={class:"shadow-md bg-white dark:bg-gray-900 rounded-md px-2 py-4"},ye={class:"text-xl"},ke={class:"text-white-dark"},Ce={class:"flex items-center justify-between flex-wrap mt-6 gap-3"},Ue={class:"flex-auto"},Se={class:"text-info"},Ne=e("div",null,"Posts",-1),Ie={class:"flex-auto"},Ee={class:"text-info"},Ke=e("div",null,"Following",-1),je={class:"flex-auto"},Ae={class:"text-info"},Le=e("div",null,"Followers",-1),$e={class:"mt-4"},De={class:"flex space-x-4 rtl:space-x-reverse items-center justify-center"},Me={href:"javascript:;",class:"btn btn-outline-primary p-0 h-7 w-7 rounded-full"},Pe={href:"javascript:;",class:"btn btn-outline-primary p-0 h-7 w-7 rounded-full"},Ve={href:"javascript:;",class:"btn btn-outline-primary p-0 h-7 w-7 rounded-full"},Je={href:"javascript:;",class:"btn btn-outline-primary p-0 h-7 w-7 rounded-full"},Oe={class:"mt-6 grid grid-cols-1 gap-4 ltr:text-left rtl:text-right"},ze={class:"flex items-center"},Be=e("div",{class:"flex-none ltr:mr-2 rtl:ml-2"},"Email :",-1),We={class:"truncate text-white-dark"},Fe={class:"flex items-center"},qe=e("div",{class:"flex-none ltr:mr-2 rtl:ml-2"},"Phone :",-1),Re={class:"text-white-dark"},Te={class:"flex items-center"},Xe=e("div",{class:"flex-none ltr:mr-2 rtl:ml-2"},"Address :",-1),Ge={class:"text-white-dark"},He={class:"mt-6 flex gap-4 absolute bottom-0 w-full ltr:left-0 rtl:right-0 p-6"},Ye=["onClick"],Qe=["onClick"],Ze={class:"fixed inset-0 overflow-y-auto"},et={class:"flex min-h-full items-center justify-center px-4 py-8"},tt={class:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]"},lt={class:"p-5"},ot=["onSubmit"],st={class:"mb-5"},at=e("label",{for:"name"},"Name",-1),it={class:"mb-5"},nt=e("label",{for:"email"},"Email",-1),rt={class:"mb-5"},dt=e("label",{for:"number"},"Phone Number",-1),ct={class:"mb-5"},pt=e("label",{for:"occupation"},"Occupation",-1),ut={class:"mb-5"},mt=e("label",{for:"address"},"Address",-1),ft={class:"flex justify-end items-center mt-8"},ht={type:"submit",class:"btn btn-primary ltr:ml-4 rtl:mr-4"},Kt=A({__name:"contacts",setup(vt){L({title:"Contacts"});const U=p({id:null,name:"",email:"",role:"",phone:"",location:""}),u=p("list"),m=p(!1),o=p(JSON.parse(JSON.stringify(U.value))),w=p([]),x=p(""),r=p([{id:1,path:"profile-35.png",name:"Alan Green",role:"Web Developer",email:"alan@mail.com",location:"Boston, USA",phone:"+1 202 555 0197",posts:25,followers:"5K",following:500},{id:2,path:"profile-35.png",name:"Linda Nelson",role:"Web Designer",email:"linda@mail.com",location:"Sydney, Australia",phone:"+1 202 555 0170",posts:25,followers:"21.5K",following:350},{id:3,path:"profile-35.png",name:"Lila Perry",role:"UX/UI Designer",email:"lila@mail.com",location:"Miami, USA",phone:"+1 202 555 0105",posts:20,followers:"21.5K",following:350},{id:4,path:"profile-35.png",name:"Andy King",role:"Project Lead",email:"andy@mail.com",location:"Tokyo, Japan",phone:"+1 202 555 0194",posts:25,followers:"21.5K",following:300},{id:5,path:"profile-35.png",name:"Jesse Cory",role:"Web Developer",email:"jesse@mail.com",location:"Edinburgh, UK",phone:"+1 202 555 0161",posts:30,followers:"20K",following:350},{id:6,path:"profile-35.png",name:"Xavier",role:"UX/UI Designer",email:"xavier@mail.com",location:"New York, USA",phone:"+1 202 555 0155",posts:25,followers:"21.5K",following:350},{id:7,path:"profile-35.png",name:"Susan",role:"Project Manager",email:"susan@mail.com",location:"Miami, USA",phone:"+1 202 555 0118",posts:40,followers:"21.5K",following:350},{id:8,path:"profile-35.png",name:"Raci Lopez",role:"Web Developer",email:"traci@mail.com",location:"Edinburgh, UK",phone:"+1 202 555 0135",posts:25,followers:"21.5K",following:350},{id:9,path:"profile-35.png",name:"Steven Mendoza",role:"HR",email:"sokol@verizon.net",location:"Monrovia, US",phone:"+1 202 555 0100",posts:40,followers:"21.8K",following:300},{id:10,path:"profile-35.png",name:"James Cantrell",role:"Web Developer",email:"sravani@comcast.net",location:"Michigan, US",phone:"+1 202 555 0134",posts:100,followers:"28K",following:520},{id:11,path:"profile-35.png",name:"Reginald Brown",role:"Web Designer",email:"drhyde@gmail.com",location:"Entrimo, Spain",phone:"+1 202 555 0153",posts:35,followers:"25K",following:500},{id:12,path:"profile-35.png",name:"Stacey Smith",role:"Chief technology officer",email:"maikelnai@optonline.net",location:"Lublin, Poland",phone:"+1 202 555 0115",posts:21,followers:"5K",following:200}]);$(()=>{g()});const g=()=>{w.value=r.value.filter(s=>s.name.toLowerCase().includes(x.value.toLowerCase()))},y=(s=null)=>{o.value=JSON.parse(JSON.stringify(U.value)),s&&(o.value=JSON.parse(JSON.stringify(s))),m.value=!0},j=()=>{if(!o.value.name)return f("Name is required.","error"),!0;if(!o.value.email)return f("Email is required.","error"),!0;if(!o.value.phone)return f("Phone is required.","error"),!0;if(!o.value.role)return f("Occupation is required.","error"),!0;if(o.value.id){let s=r.value.find(l=>l.id===o.value.id);s.name=o.value.name,s.email=o.value.email,s.role=o.value.role,s.phone=o.value.phone,s.location=o.value.location}else{let l={id:(r.value.length?r.value.reduce((t,h)=>h.id>t?h.id:t,r.value[0].id):0)+1,path:"profile-35.png",name:o.value.name,email:o.value.email,role:o.value.role,phone:o.value.phone,location:o.value.location,posts:20,followers:"5K",following:500};r.value.splice(0,0,l),g()}f("User has been saved successfully."),m.value=!1},S=(s=null)=>{r.value=r.value.filter(l=>l.id!=s.id),g(),f("User has been deleted successfully.")},f=(s="",l="success")=>{O.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:l,title:s,padding:"10px 20px"})};return(s,l)=>(d(),c("div",null,[e("div",Q,[Z,e("div",ee,[e("div",te,[e("div",null,[e("button",{type:"button",class:"btn btn-primary",onClick:l[0]||(l[0]=t=>y())},[a(z,{class:"ltr:mr-2 rtl:ml-2"}),D(" Add Contact ")])]),e("div",null,[e("button",{type:"button",class:N(["btn btn-outline-primary p-2",{"bg-primary text-white":u.value==="list"}]),onClick:l[1]||(l[1]=t=>u.value="list")},[a(B)],2)]),e("div",null,[e("button",{type:"button",class:N(["btn btn-outline-primary p-2",{"bg-primary text-white":u.value==="grid"}]),onClick:l[2]||(l[2]=t=>u.value="grid")},[a(W)],2)])]),e("div",le,[n(e("input",{type:"text",placeholder:"Search Contacts",class:"form-input py-2 ltr:pr-11 rtl:pl-11 peer","onUpdate:modelValue":l[3]||(l[3]=t=>x.value=t),onKeyup:g},null,544),[[v,x.value]]),e("div",oe,[a(M,{class:"mx-auto"})])])])]),e("div",se,[u.value==="list"?(d(),c("div",ae,[e("table",ie,[ne,e("tbody",null,[(d(!0),c(I,null,E(w.value,t=>(d(),c("tr",{key:t.id},[e("td",null,[e("div",re,[n(e("div",de,[e("img",{src:`/assets/images/${t.path}`,class:"h-8 w-8 rounded-full object-cover ltr:mr-2 rtl:ml-2",alt:"avatar"},null,8,ce)],512),[[C,t.path]]),n(e("div",{class:"grid place-content-center h-8 w-8 ltr:mr-2 rtl:ml-2 rounded-full bg-primary text-white text-sm font-semibold"},i(t.name.charAt(0)+""+t.name.charAt(t.name.indexOf(" ")+1)),513),[[C,!t.path&&t.name]]),n(e("div",pe,[a(P,{class:"w-4.5 h-4.5"})],512),[[C,!t.path&&!t.name]]),e("div",null,i(t.name),1)])]),e("td",null,i(t.email),1),e("td",ue,i(t.location),1),e("td",me,i(t.phone),1),e("td",null,[e("div",fe,[e("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:h=>y(t)},"Edit",8,he),e("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:h=>S(t)},"Delete",8,ve)])])]))),128))])])])):k("",!0)]),u.value==="grid"?(d(),c("div",_e,[(d(!0),c(I,null,E(w.value,t=>(d(),c("div",{key:t.id,class:"bg-white dark:bg-[#1c232f] rounded-md overflow-hidden text-center shadow relative"},[e("div",be,[t.path?(d(),c("img",{key:0,class:"object-contain w-4/5 max-h-40 mx-auto",src:`/assets/images/${t.path}`},null,8,ge)):k("",!0)]),e("div",we,[e("div",xe,[e("div",ye,i(t.name),1),e("div",ke,i(t.role),1),e("div",Ce,[e("div",Ue,[e("div",Se,i(t.posts),1),Ne]),e("div",Ie,[e("div",Ee,i(t.following),1),Ke]),e("div",je,[e("div",Ae,i(t.followers),1),Le])]),e("div",$e,[e("ul",De,[e("li",null,[e("a",Me,[a(F)])]),e("li",null,[e("a",Pe,[a(q)])]),e("li",null,[e("a",Ve,[a(R)])]),e("li",null,[e("a",Je,[a(T)])])])])]),e("div",Oe,[e("div",ze,[Be,e("div",We,i(t.email),1)]),e("div",Fe,[qe,e("div",Re,i(t.phone),1)]),e("div",Te,[Xe,e("div",Ge,i(t.location),1)])])]),e("div",He,[e("button",{type:"button",class:"btn btn-outline-primary w-1/2",onClick:h=>y(t)},"Edit",8,Ye),e("button",{type:"button",class:"btn btn-outline-danger w-1/2",onClick:h=>S(t)},"Delete",8,Qe)])]))),128))])):k("",!0),a(_(X),{appear:"",show:m.value,as:"template"},{default:b(()=>[a(_(G),{as:"div",onClose:l[11]||(l[11]=t=>m.value=!1),class:"relative z-[51]"},{default:b(()=>[a(_(K),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:b(()=>[a(_(H),{class:"fixed inset-0 bg-[black]/60"})]),_:1}),e("div",Ze,[e("div",et,[a(_(K),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:b(()=>[a(_(Y),{class:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark"},{default:b(()=>[e("button",{type:"button",class:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",onClick:l[4]||(l[4]=t=>m.value=!1)},[a(V)]),e("div",tt,i(o.value.id?"Edit Contact":"Add Contact"),1),e("div",lt,[e("form",{onSubmit:J(j,["prevent"])},[e("div",st,[at,n(e("input",{id:"name",type:"text",placeholder:"Enter Name",class:"form-input","onUpdate:modelValue":l[5]||(l[5]=t=>o.value.name=t)},null,512),[[v,o.value.name]])]),e("div",it,[nt,n(e("input",{id:"email",type:"email",placeholder:"Enter Email",class:"form-input","onUpdate:modelValue":l[6]||(l[6]=t=>o.value.email=t)},null,512),[[v,o.value.email]])]),e("div",rt,[dt,n(e("input",{id:"number",type:"text",placeholder:"Enter Phone Number",class:"form-input","onUpdate:modelValue":l[7]||(l[7]=t=>o.value.phone=t)},null,512),[[v,o.value.phone]])]),e("div",ct,[pt,n(e("input",{id:"occupation",type:"text",placeholder:"Enter Occupation",class:"form-input","onUpdate:modelValue":l[8]||(l[8]=t=>o.value.role=t)},null,512),[[v,o.value.role]])]),e("div",ut,[mt,n(e("textarea",{id:"address",rows:"3",placeholder:"Enter Address",class:"form-textarea resize-none min-h-[130px]","onUpdate:modelValue":l[9]||(l[9]=t=>o.value.location=t)},null,512),[[v,o.value.location]])]),e("div",ft,[e("button",{type:"button",class:"btn btn-outline-danger",onClick:l[10]||(l[10]=t=>m.value=!1)},"Cancel"),e("button",ht,i(o.value.id?"Update":"Add"),1)])],40,ot)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]))}});export{Kt as default};