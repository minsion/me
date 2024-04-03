import{u as U,r as i,s as E,j as t,b as e,i as j,c as F,k as K}from"./index-8cd85ed0.js";import{S as A}from"./sweetalert2.all-db9596c0.js";import{I as P}from"./IconUserPlus-48875c58.js";import{I as L}from"./IconListCheck-bb979fed.js";import{I as D}from"./IconLayoutGrid-718eb4ac.js";import{I as J}from"./IconFacebook-df82ad07.js";import{I as M}from"./IconInstagram-d7dfb23a.js";import{I as O}from"./IconLinkedin-f4e01cf5.js";import{I as T}from"./IconTwitter-412bd111.js";import{Y as b,y as C}from"./transition-02cf8c93.js";import"./keyboard-68318f99.js";import"./open-closed-97b548dc.js";import"./hidden-1be9b030.js";const Z=()=>{const k=U();i.useEffect(()=>{k(E("Contacts"))});const[g,d]=i.useState(!1),[m,v]=i.useState("list"),[N]=i.useState({id:null,name:"",email:"",phone:"",role:"",location:""}),[a,p]=i.useState(JSON.parse(JSON.stringify(N))),c=l=>{const{value:r,id:o}=l.target;p({...a,[o]:r})},[h,S]=i.useState(""),[u]=i.useState([{id:1,path:"profile-35.png",name:"Alan Green",role:"Web Developer",email:"alan@mail.com",location:"Boston, USA",phone:"+1 202 555 0197",posts:25,followers:"5K",following:500},{id:2,path:"profile-35.png",name:"Linda Nelson",role:"Web Designer",email:"linda@mail.com",location:"Sydney, Australia",phone:"+1 202 555 0170",posts:25,followers:"21.5K",following:350},{id:3,path:"profile-35.png",name:"Lila Perry",role:"UX/UI Designer",email:"lila@mail.com",location:"Miami, USA",phone:"+1 202 555 0105",posts:20,followers:"21.5K",following:350},{id:4,path:"profile-35.png",name:"Andy King",role:"Project Lead",email:"andy@mail.com",location:"Tokyo, Japan",phone:"+1 202 555 0194",posts:25,followers:"21.5K",following:300},{id:5,path:"profile-35.png",name:"Jesse Cory",role:"Web Developer",email:"jesse@mail.com",location:"Edinburgh, UK",phone:"+1 202 555 0161",posts:30,followers:"20K",following:350},{id:6,path:"profile-35.png",name:"Xavier",role:"UX/UI Designer",email:"xavier@mail.com",location:"New York, USA",phone:"+1 202 555 0155",posts:25,followers:"21.5K",following:350},{id:7,path:"profile-35.png",name:"Susan",role:"Project Manager",email:"susan@mail.com",location:"Miami, USA",phone:"+1 202 555 0118",posts:40,followers:"21.5K",following:350},{id:8,path:"profile-35.png",name:"Raci Lopez",role:"Web Developer",email:"traci@mail.com",location:"Edinburgh, UK",phone:"+1 202 555 0135",posts:25,followers:"21.5K",following:350},{id:9,path:"profile-35.png",name:"Steven Mendoza",role:"HR",email:"sokol@verizon.net",location:"Monrovia, US",phone:"+1 202 555 0100",posts:40,followers:"21.8K",following:300},{id:10,path:"profile-35.png",name:"James Cantrell",role:"Web Developer",email:"sravani@comcast.net",location:"Michigan, US",phone:"+1 202 555 0134",posts:100,followers:"28K",following:520},{id:11,path:"profile-35.png",name:"Reginald Brown",role:"Web Designer",email:"drhyde@gmail.com",location:"Entrimo, Spain",phone:"+1 202 555 0153",posts:35,followers:"25K",following:500},{id:12,path:"profile-35.png",name:"Stacey Smith",role:"Chief technology officer",email:"maikelnai@optonline.net",location:"Lublin, Poland",phone:"+1 202 555 0115",posts:21,followers:"5K",following:200}]),[n,w]=i.useState(u);i.useEffect(()=>{w(()=>u.filter(l=>l.name.toLowerCase().includes(h.toLowerCase())))},[h,u]);const I=()=>{if(!a.name)return s("Name is required.","error"),!0;if(!a.email)return s("Email is required.","error"),!0;if(!a.phone)return s("Phone is required.","error"),!0;if(!a.role)return s("Occupation is required.","error"),!0;if(a.id){let l=n.find(r=>r.id===a.id);l.name=a.name,l.email=a.email,l.phone=a.phone,l.role=a.role,l.location=a.location}else{let r={id:(n.length?n.reduce((o,y)=>y.id>o?y.id:o,n[0].id):0)+1,path:"profile-35.png",name:a.name,email:a.email,phone:a.phone,role:a.role,location:a.location,posts:20,followers:"5K",following:500};n.splice(0,0,r)}s("User has been saved successfully."),d(!1)},f=(l=null)=>{const r=JSON.parse(JSON.stringify(N));if(p(r),l){let o=JSON.parse(JSON.stringify(l));p(o)}d(!0)},x=(l=null)=>{w(n.filter(r=>r.id!==l.id)),s("User has been deleted successfully.")},s=(l="",r="success")=>{A.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:r,title:l,padding:"10px 20px"})};return t("div",{children:[t("div",{className:"flex items-center justify-between flex-wrap gap-4",children:[e("h2",{className:"text-xl",children:"Contacts"}),t("div",{className:"flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto",children:[t("div",{className:"flex gap-3",children:[e("div",{children:t("button",{type:"button",className:"btn btn-primary",onClick:()=>f(),children:[e(P,{className:"ltr:mr-2 rtl:ml-2"}),"Add Contact"]})}),e("div",{children:e("button",{type:"button",className:`btn btn-outline-primary p-2 ${m==="list"&&"bg-primary text-white"}`,onClick:()=>v("list"),children:e(L,{})})}),e("div",{children:e("button",{type:"button",className:`btn btn-outline-primary p-2 ${m==="grid"&&"bg-primary text-white"}`,onClick:()=>v("grid"),children:e(D,{})})})]}),t("div",{className:"relative",children:[e("input",{type:"text",placeholder:"Search Contacts",className:"form-input py-2 ltr:pr-11 rtl:pl-11 peer",value:h,onChange:l=>S(l.target.value)}),e("button",{type:"button",className:"absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary",children:e(j,{className:"mx-auto"})})]})]})]}),m==="list"&&e("div",{className:"mt-5 panel p-0 border-0 overflow-hidden",children:e("div",{className:"table-responsive",children:t("table",{className:"table-striped table-hover",children:[e("thead",{children:t("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Email"}),e("th",{children:"Location"}),e("th",{children:"Phone"}),e("th",{className:"!text-center",children:"Actions"})]})}),e("tbody",{children:n.map(l=>t("tr",{children:[e("td",{children:t("div",{className:"flex items-center w-max",children:[l.path&&e("div",{className:"w-max",children:e("img",{src:`/assets/images/${l.path}`,className:"h-8 w-8 rounded-full object-cover ltr:mr-2 rtl:ml-2",alt:"avatar"})}),!l.path&&l.name&&e("div",{className:"grid place-content-center h-8 w-8 ltr:mr-2 rtl:ml-2 rounded-full bg-primary text-white text-sm font-semibold"}),!l.path&&!l.name&&e("div",{className:"border border-gray-300 dark:border-gray-800 rounded-full p-2 ltr:mr-2 rtl:ml-2",children:e(F,{className:"w-4.5 h-4.5"})}),e("div",{children:l.name})]})}),e("td",{children:l.email}),e("td",{className:"whitespace-nowrap",children:l.location}),e("td",{className:"whitespace-nowrap",children:l.phone}),e("td",{children:t("div",{className:"flex gap-4 items-center justify-center",children:[e("button",{type:"button",className:"btn btn-sm btn-outline-primary",onClick:()=>f(l),children:"Edit"}),e("button",{type:"button",className:"btn btn-sm btn-outline-danger",onClick:()=>x(l),children:"Delete"})]})})]},l.id))})]})})}),m==="grid"&&e("div",{className:"grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-5 w-full",children:n.map(l=>e("div",{className:"bg-white dark:bg-[#1c232f] rounded-md overflow-hidden text-center shadow relative",children:t("div",{className:"bg-white dark:bg-[#1c232f] rounded-md overflow-hidden text-center shadow relative",children:[e("div",{className:"bg-white/40 rounded-t-md bg-center bg-cover p-6 pb-0 bg-",style:{backgroundImage:"url('/assets/images/notification-bg.png')",backgroundRepeat:"no-repeat",width:"100%",height:"100%"},children:e("img",{className:"object-contain w-4/5 max-h-40 mx-auto",src:`/assets/images/${l.path}`,alt:"contact_image"})}),t("div",{className:"px-6 pb-24 -mt-10 relative",children:[t("div",{className:"shadow-md bg-white dark:bg-gray-900 rounded-md px-2 py-4",children:[e("div",{className:"text-xl",children:l.name}),e("div",{className:"text-white-dark",children:l.role}),t("div",{className:"flex items-center justify-between flex-wrap mt-6 gap-3",children:[t("div",{className:"flex-auto",children:[e("div",{className:"text-info",children:l.posts}),e("div",{children:"Posts"})]}),t("div",{className:"flex-auto",children:[e("div",{className:"text-info",children:l.following}),e("div",{children:"Following"})]}),t("div",{className:"flex-auto",children:[e("div",{className:"text-info",children:l.followers}),e("div",{children:"Followers"})]})]}),e("div",{className:"mt-4",children:t("ul",{className:"flex space-x-4 rtl:space-x-reverse items-center justify-center",children:[e("li",{children:e("button",{type:"button",className:"btn btn-outline-primary p-0 h-7 w-7 rounded-full",children:e(J,{})})}),e("li",{children:e("button",{type:"button",className:"btn btn-outline-primary p-0 h-7 w-7 rounded-full",children:e(M,{})})}),e("li",{children:e("button",{type:"button",className:"btn btn-outline-primary p-0 h-7 w-7 rounded-full",children:e(O,{})})}),e("li",{children:e("button",{type:"button",className:"btn btn-outline-primary p-0 h-7 w-7 rounded-full",children:e(T,{})})})]})})]}),t("div",{className:"mt-6 grid grid-cols-1 gap-4 ltr:text-left rtl:text-right",children:[t("div",{className:"flex items-center",children:[e("div",{className:"flex-none ltr:mr-2 rtl:ml-2",children:"Email :"}),e("div",{className:"truncate text-white-dark",children:l.email})]}),t("div",{className:"flex items-center",children:[e("div",{className:"flex-none ltr:mr-2 rtl:ml-2",children:"Phone :"}),e("div",{className:"text-white-dark",children:l.phone})]}),t("div",{className:"flex items-center",children:[e("div",{className:"flex-none ltr:mr-2 rtl:ml-2",children:"Address :"}),e("div",{className:"text-white-dark",children:l.location})]})]})]}),t("div",{className:"mt-6 flex gap-4 absolute bottom-0 w-full ltr:left-0 rtl:right-0 p-6",children:[e("button",{type:"button",className:"btn btn-outline-primary w-1/2",onClick:()=>f(l),children:"Edit"}),e("button",{type:"button",className:"btn btn-outline-danger w-1/2",onClick:()=>x(l),children:"Delete"})]})]})},l.id))}),e(b,{appear:!0,show:g,as:i.Fragment,children:t(C,{as:"div",open:g,onClose:()=>d(!1),className:"relative z-[51]",children:[e(b.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-[black]/60"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex min-h-full items-center justify-center px-4 py-8",children:e(b.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(C.Panel,{className:"panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark",children:[e("button",{type:"button",onClick:()=>d(!1),className:"absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none",children:e(K,{})}),e("div",{className:"text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]",children:a.id?"Edit Contact":"Add Contact"}),e("div",{className:"p-5",children:t("form",{children:[t("div",{className:"mb-5",children:[e("label",{htmlFor:"name",children:"Name"}),e("input",{id:"name",type:"text",placeholder:"Enter Name",className:"form-input",value:a.name,onChange:l=>c(l)})]}),t("div",{className:"mb-5",children:[e("label",{htmlFor:"email",children:"Email"}),e("input",{id:"email",type:"email",placeholder:"Enter Email",className:"form-input",value:a.email,onChange:l=>c(l)})]}),t("div",{className:"mb-5",children:[e("label",{htmlFor:"number",children:"Phone Number"}),e("input",{id:"phone",type:"text",placeholder:"Enter Phone Number",className:"form-input",value:a.phone,onChange:l=>c(l)})]}),t("div",{className:"mb-5",children:[e("label",{htmlFor:"occupation",children:"Occupation"}),e("input",{id:"role",type:"text",placeholder:"Enter Occupation",className:"form-input",value:a.role,onChange:l=>c(l)})]}),t("div",{className:"mb-5",children:[e("label",{htmlFor:"address",children:"Address"}),e("textarea",{id:"location",rows:3,placeholder:"Enter Address",className:"form-textarea resize-none min-h-[130px]",value:a.location,onChange:l=>c(l)})]}),t("div",{className:"flex justify-end items-center mt-8",children:[e("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>d(!1),children:"Cancel"}),e("button",{type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",onClick:I,children:a.id?"Update":"Add"})]})]})})]})})})})]})})]})};export{Z as default};
