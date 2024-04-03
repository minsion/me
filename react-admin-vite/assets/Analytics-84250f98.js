import{u as g,r as w,s as N,a as b,j as t,b as e,L as v,D as i,P as k,e as y,f as j}from"./index-8cd85ed0.js";import{_ as l}from"./react-apexcharts.min-afe05292.js";import{I as s}from"./IconHorizontalDots-4bb89c3a.js";import{I,a as u,b as D,c as C,d as S,e as M,f as _,g as F,h as A}from"./IconSquareCheck-ec77374d.js";import{I as p}from"./IconPlus-510712df.js";import{I as T}from"./IconCreditCard-d57c4cf0.js";import{I as z}from"./IconFile-b13d64f0.js";import{I as L}from"./IconGlobe-a9f275fa.js";import{I as V}from"./IconThumbUp-bdac849c.js";import{I as R}from"./IconClock-e950381b.js";const H=()=>{const x=g();w.useEffect(()=>{x(N("Analytics Admin"))});const d=b(a=>a.themeConfig.theme==="dark"||a.themeConfig.isDarkMode),r=b(a=>a.themeConfig.rtlClass)==="rtl",o={series:[{data:[21,9,36,12,44,25,59,41,66,25]}],options:{chart:{height:58,type:"line",fontFamily:"Nunito, sans-serif",sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,color:"#009688",opacity:.4}},stroke:{curve:"smooth",width:2},colors:["#009688"],grid:{padding:{top:5,bottom:5,left:5,right:5}},tooltip:{x:{show:!1},y:{title:{formatter:()=>""}}}}},n={series:[{data:[22,19,30,47,32,44,34,55,41,69]}],options:{chart:{height:58,type:"line",fontFamily:"Nunito, sans-serif",sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,color:"#e2a03f",opacity:.4}},stroke:{curve:"smooth",width:2},colors:["#e2a03f"],grid:{padding:{top:5,bottom:5,left:5,right:5}},tooltip:{x:{show:!1},y:{title:{formatter:()=>""}}}}},c={series:[{name:"Direct",data:[58,44,55,57,56,61,58,63,60,66,56,63]},{name:"Organic",data:[91,76,85,101,98,87,105,91,114,94,66,70]}],options:{chart:{height:360,type:"bar",fontFamily:"Nunito, sans-serif",toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{width:2,colors:["transparent"]},colors:["#5c1ac3","#ffbb44"],dropShadow:{enabled:!0,blur:3,color:"#515365",opacity:.4},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:8,borderRadiusApplication:"end"}},legend:{position:"bottom",horizontalAlign:"center",fontSize:"14px",itemMargin:{horizontal:8,vertical:8}},grid:{borderColor:d?"#191e3a":"#e0e6ed",padding:{left:20,right:20},xaxis:{lines:{show:!1}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!0,color:d?"#3b3f5c":"#e0e6ed"}},yaxis:{tickAmount:6,opposite:!!r,labels:{offsetX:r?-10:0}},fill:{type:"gradient",gradient:{shade:d?"dark":"light",type:"vertical",shadeIntensity:.3,inverseColors:!1,opacityFrom:1,opacityTo:.8,stops:[0,100]}},tooltip:{marker:{show:!0}}}},h={series:[{data:[38,60,38,52,36,40,28]}],options:{chart:{height:160,type:"area",fontFamily:"Nunito, sans-serif",sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#4361ee"],grid:{padding:{top:5}},yaxis:{show:!1},tooltip:{x:{show:!1},y:{title:{formatter:()=>""}}}}},m={series:[{data:[60,28,52,38,40,36,38]}],options:{chart:{height:160,type:"area",fontFamily:"Nunito, sans-serif",sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#e7515a"],grid:{padding:{top:5}},yaxis:{show:!1},tooltip:{x:{show:!1},y:{title:{formatter:()=>""}}}}},f={series:[{name:"Sales",data:[28,50,36,60,38,52,38]}],options:{chart:{height:160,type:"area",fontFamily:"Nunito, sans-serif",sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:["#1abc9c"],grid:{padding:{top:5}},yaxis:{show:!1},tooltip:{x:{show:!1},y:{title:{formatter:()=>""}}}}};return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(v,{to:"/",className:"text-primary hover:underline",children:"Dashboard"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Analytics"})})]}),t("div",{className:"pt-5",children:[t("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6",children:[t("div",{className:"panel h-full sm:col-span-2 lg:col-span-1",children:[t("div",{className:"flex justify-between dark:text-white-light mb-5",children:[e("h5",{className:"font-semibold text-lg ",children:"Statistics"}),e("div",{className:"dropdown",children:e(i,{offset:[0,5],placement:`${r?"bottom-start":"bottom-end"}`,btnClassName:"hover:text-primary",button:e(s,{className:"text-black/70 dark:text-white/70 hover:!text-primary"}),children:t("ul",{children:[e("li",{children:e("button",{type:"button",children:"This Week"})}),e("li",{children:e("button",{type:"button",children:"Last Week"})}),e("li",{children:e("button",{type:"button",children:"This Month"})}),e("li",{children:e("button",{type:"button",children:"Last Month"})})]})})})]}),t("div",{className:"grid sm:grid-cols-2 gap-8 text-sm text-[#515365] font-bold",children:[t("div",{children:[t("div",{children:[e("div",{children:"Total Visits"}),e("div",{className:"text-[#f8538d] text-lg",children:"423,964"})]}),e(l,{series:o.series,options:o.options,type:"line",height:58,className:"overflow-hidden"})]}),t("div",{children:[t("div",{children:[e("div",{children:"Paid Visits"}),e("div",{className:"text-[#f8538d] text-lg",children:"7,929"})]}),e(l,{series:n.series,options:n.options,type:"line",height:58,className:"overflow-hidden"})]})]})]}),t("div",{className:"panel h-full",children:[t("div",{className:"flex justify-between dark:text-white-light mb-5",children:[e("h5",{className:"font-semibold text-lg ",children:"Expenses"}),e("div",{className:"dropdown",children:e(i,{offset:[0,5],placement:`${r?"bottom-start":"bottom-end"}`,btnClassName:"hover:text-primary",button:e(s,{className:"text-black/70 dark:text-white/70 hover:!text-primary"}),children:t("ul",{children:[e("li",{children:e("button",{type:"button",children:"This Week"})}),e("li",{children:e("button",{type:"button",children:"Last Week"})}),e("li",{children:e("button",{type:"button",children:"This Month"})}),e("li",{children:e("button",{type:"button",children:"Last Month"})})]})})})]}),t("div",{className:" text-[#e95f2b] text-3xl font-bold my-10",children:[e("span",{children:"$ 45,141 "}),e("span",{className:"text-black text-sm dark:text-white-light ltr:mr-2 rtl:ml-2",children:"this week"}),e(I,{className:"text-success inline"})]}),t("div",{className:"flex items-center justify-between",children:[e("div",{className:"w-full rounded-full h-5 p-1 bg-dark-light overflow-hidden shadow-3xl dark:shadow-none dark:bg-dark-light/10",children:e("div",{className:"bg-gradient-to-r from-[#4361ee] to-[#805dca] w-full h-full rounded-full relative before:absolute before:inset-y-0 ltr:before:right-0.5 rtl:before:left-0.5 before:bg-white before:w-2 before:h-2 before:rounded-full before:m-auto",style:{width:"65%"}})}),e("span",{className:"ltr:ml-5 rtl:mr-5 dark:text-white-light",children:"57%"})]})]}),t("div",{className:"panel h-full overflow-hidden before:bg-[#1937cc] before:absolute before:-right-44 before:top-0 before:bottom-0 before:m-auto before:rounded-full before:w-96 before:h-96 grid grid-cols-1 content-between",style:{background:"linear-gradient(0deg,#00c6fb -227%,#005bea)"},children:[t("div",{className:"flex items-start justify-between text-white-light mb-16 z-[7]",children:[e("h5",{className:"font-semibold text-lg",children:"Total Balance"}),t("div",{className:"relative text-xl whitespace-nowrap",children:["$ 41,741.42",e("span",{className:"table text-[#d3d3d3] bg-[#4361ee] rounded p-1 text-xs mt-1 ltr:ml-auto rtl:mr-auto",children:"+ 2453"})]})]}),t("div",{className:"flex items-center justify-between z-10",children:[t("div",{className:"flex items-center justify-between",children:[e("button",{type:"button",className:"shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#1937cc] place-content-center ltr:mr-2 rtl:ml-2",children:e(p,{})}),e("button",{type:"button",className:"shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#1937cc] grid place-content-center",children:e(T,{})})]}),e("button",{type:"button",className:"shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#4361ee] z-10",children:"Upgrade"})]})]})]}),t("div",{className:"grid lg:grid-cols-3 gap-6 mb-6",children:[t("div",{className:"panel h-full p-0 lg:col-span-2",children:[t("div",{className:"flex items-start justify-between dark:text-white-light mb-5 p-5 border-b  border-white-light dark:border-[#1b2e4b]",children:[e("h5",{className:"font-semibold text-lg ",children:"Unique Visitors"}),e("div",{className:"dropdown",children:e(i,{offset:[0,5],placement:`${r?"bottom-start":"bottom-end"}`,btnClassName:"hover:text-primary",button:e(s,{className:"text-black/70 dark:text-white/70 hover:!text-primary"}),children:t("ul",{children:[e("li",{children:e("button",{type:"button",children:"View"})}),e("li",{children:e("button",{type:"button",children:"Update"})}),e("li",{children:e("button",{type:"button",children:"Delete"})})]})})})]}),e(l,{options:c.options,series:c.series,type:"bar",height:360,className:"overflow-hidden"})]}),t("div",{className:"panel h-full",children:[t("div",{className:"flex items-start justify-between dark:text-white-light mb-5 -mx-5 p-5 pt-0 border-b  border-white-light dark:border-[#1b2e4b]",children:[e("h5",{className:"font-semibold text-lg ",children:"Activity Log"}),e("div",{className:"dropdown",children:e(i,{offset:[0,5],placement:`${r?"bottom-start":"bottom-end"}`,btnClassName:"hover:text-primary",button:e(s,{className:"text-black/70 dark:text-white/70 hover:!text-primary"}),children:t("ul",{children:[e("li",{children:e("button",{type:"button",children:"View All"})}),e("li",{children:e("button",{type:"button",children:"Mark as Read"})})]})})})]}),e(k,{className:"perfect-scrollbar relative h-[360px] ltr:pr-3 rtl:pl-3 ltr:-mr-3 rtl:-ml-3",children:t("div",{className:"space-y-7",children:[t("div",{className:"flex",children:[e("div",{className:"shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4",children:e("div",{className:"bg-secondary shadow shadow-secondary w-8 h-8 rounded-full flex items-center justify-center text-white",children:e(p,{className:"w-4 h-4"})})}),t("div",{children:[t("h5",{className:"font-semibold dark:text-white-light",children:["New project created :"," ",e("button",{type:"button",className:"text-success",children:"[VRISTO Admin Template]"})]}),e("p",{className:"text-white-dark text-xs",children:"27 Feb, 2020"})]})]}),t("div",{className:"flex",children:[e("div",{className:"shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4",children:e("div",{className:"bg-success shadow-success w-8 h-8 rounded-full flex items-center justify-center text-white",children:e(y,{className:"w-4 h-4"})})}),t("div",{children:[t("h5",{className:"font-semibold dark:text-white-light",children:["Mail sent to"," ",e("button",{type:"button",className:"text-white-dark",children:"HR"})," ","and"," ",e("button",{type:"button",className:"text-white-dark",children:"Admin"})]}),e("p",{className:"text-white-dark text-xs",children:"28 Feb, 2020"})]})]}),t("div",{className:"flex",children:[e("div",{className:"shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4",children:e("div",{className:"bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white",children:e(u,{className:"w-4 h-4"})})}),t("div",{children:[e("h5",{className:"font-semibold dark:text-white-light",children:"Server Logs Updated"}),e("p",{className:"text-white-dark text-xs",children:"27 Feb, 2020"})]})]}),t("div",{className:"flex",children:[e("div",{className:"shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4",children:e("div",{className:"bg-danger w-8 h-8 rounded-full flex items-center justify-center text-white",children:e(u,{className:"w-4 h-4"})})}),t("div",{children:[t("h5",{className:"font-semibold dark:text-white-light",children:["Task Completed :",e("button",{type:"button",className:"text-success ml-1",children:"[Backup Files EOD]"})]}),e("p",{className:"text-white-dark text-xs",children:"01 Mar, 2020"})]})]}),t("div",{className:"flex",children:[e("div",{className:"shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4",children:e("div",{className:"bg-warning w-8 h-8 rounded-full flex items-center justify-center text-white",children:e(z,{className:"w-4 h-4"})})}),t("div",{children:[t("h5",{className:"font-semibold dark:text-white-light",children:["Documents Submitted from ",e("button",{type:"button",children:"Sara"})]}),e("p",{className:"text-white-dark text-xs",children:"10 Mar, 2020"})]})]}),t("div",{className:"flex",children:[e("div",{className:"ltr:mr-2 rtl:ml-2",children:e("div",{className:"bg-dark w-8 h-8 rounded-full flex items-center justify-center text-white",children:e(D,{className:"w-4 h-4"})})}),t("div",{children:[e("h5",{className:"font-semibold dark:text-white-light",children:"Server rebooted successfully"}),e("p",{className:"text-white-dark text-xs",children:"06 Apr, 2020"})]})]})]})})]})]}),t("div",{className:"grid sm:grid-cols-3 xl:grid-cols-5 gap-6 mb-6",children:[t("div",{className:"panel h-full sm:col-span-3 xl:col-span-2",children:[e("div",{className:"flex items-start justify-between mb-5",children:e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Visitors by Browser"})}),t("div",{className:"flex flex-col space-y-5",children:[t("div",{className:"flex items-center",children:[e("div",{className:"w-9 h-9",children:e("div",{className:"bg-primary/10 text-primary rounded-xl w-9 h-9 flex justify-center items-center dark:bg-primary dark:text-white-light",children:e(C,{className:"w-5 h-5"})})}),t("div",{className:"px-3 flex-initial w-full",children:[t("div",{className:"w-summary-info flex justify-between font-semibold text-white-dark mb-1",children:[e("h6",{children:"Chrome"}),e("p",{className:"ltr:ml-auto rtl:mr-auto text-xs",children:"65%"})]}),e("div",{children:e("div",{className:"w-full rounded-full h-5 p-1 bg-dark-light overflow-hidden shadow-3xl dark:bg-dark-light/10 dark:shadow-none",children:e("div",{className:"bg-gradient-to-r from-[#009ffd] to-[#2a2a72] w-full h-full rounded-full relative before:absolute before:inset-y-0 ltr:before:right-0.5 rtl:before:left-0.5 before:bg-white before:w-2 before:h-2 before:rounded-full before:m-auto",style:{width:"65%"}})})})]})]}),t("div",{className:"flex items-center",children:[e("div",{className:"w-9 h-9",children:e("div",{className:"bg-danger/10 text-danger rounded-xl w-9 h-9 flex justify-center items-center dark:bg-danger dark:text-white-light",children:e(S,{className:"w-5 h-5"})})}),t("div",{className:"px-3 flex-initial w-full",children:[t("div",{className:"w-summary-info flex justify-between font-semibold text-white-dark mb-1",children:[e("h6",{children:"Safari"}),e("p",{className:"ltr:ml-auto rtl:mr-auto text-xs",children:"40%"})]}),e("div",{children:e("div",{className:"w-full rounded-full h-5 p-1 bg-dark-light overflow-hidden shadow-3xl dark:bg-dark-light/10 dark:shadow-none",children:e("div",{className:"bg-gradient-to-r from-[#a71d31] to-[#3f0d12] w-full h-full rounded-full relative before:absolute before:inset-y-0 ltr:before:right-0.5 rtl:before:left-0.5 before:bg-white before:w-2 before:h-2 before:rounded-full before:m-auto",style:{width:"40%"}})})})]})]}),t("div",{className:"flex items-center",children:[e("div",{className:"w-9 h-9",children:e("div",{className:"bg-warning/10 text-warning rounded-xl w-9 h-9 flex justify-center items-center dark:bg-warning dark:text-white-light",children:e(L,{className:"w-5 h-5"})})}),t("div",{className:"px-3 flex-initial w-full",children:[t("div",{className:"w-summary-info flex justify-between font-semibold text-white-dark mb-1",children:[e("h6",{children:"Others"}),e("p",{className:"ltr:ml-auto rtl:mr-auto text-xs",children:"25%"})]}),e("div",{children:e("div",{className:"w-full rounded-full h-5 p-1 bg-dark-light overflow-hidden shadow-3xl dark:bg-dark-light/10 dark:shadow-none",children:e("div",{className:"bg-gradient-to-r from-[#fe5f75] to-[#fc9842] w-full h-full rounded-full relative before:absolute before:inset-y-0 ltr:before:right-0.5 rtl:before:left-0.5 before:bg-white before:w-2 before:h-2 before:rounded-full before:m-auto",style:{width:"25%"}})})})]})]})]})]}),t("div",{className:"panel h-full p-0",children:[t("div",{className:"flex p-5",children:[e("div",{className:"shrink-0 bg-primary/10 text-primary rounded-xl w-11 h-11 flex justify-center items-center dark:bg-primary dark:text-white-light",children:e(M,{className:"w-5 h-5"})}),t("div",{className:"ltr:ml-3 rtl:mr-3 font-semibold",children:[e("p",{className:"text-xl dark:text-white-light",children:"31.6K"}),e("h5",{className:"text-[#506690] text-xs",children:"Followers"})]})]}),e("div",{className:"h-40",children:e(l,{series:h.series,options:h.options,type:"area",height:160,className:"w-full absolute bottom-0 overflow-hidden"})})]}),t("div",{className:"panel h-full p-0",children:[t("div",{className:"flex p-5",children:[e("div",{className:"shrink-0 bg-danger/10 text-danger rounded-xl w-11 h-11 flex justify-center items-center dark:bg-danger dark:text-white-light",children:e(_,{className:"w-5 h-5"})}),t("div",{className:"ltr:ml-3 rtl:mr-3 font-semibold",children:[e("p",{className:"text-xl dark:text-white-light",children:"1,900"}),e("h5",{className:"text-[#506690] text-xs",children:"Referral"})]})]}),e("div",{className:"h-40",children:e(l,{series:m.series,options:m.options,type:"area",height:160,className:"w-full absolute bottom-0 overflow-hidden"})})]}),t("div",{className:"panel h-full p-0",children:[t("div",{className:"flex p-5",children:[e("div",{className:"shrink-0 bg-success/10 text-success rounded-xl w-11 h-11 flex justify-center items-center dark:bg-success dark:text-white-light",children:e(F,{className:"w-5 h-5"})}),t("div",{className:"ltr:ml-3 rtl:mr-3 font-semibold",children:[e("p",{className:"text-xl dark:text-white-light",children:"18.2%"}),e("h5",{className:"text-[#506690] text-xs",children:"Engagement"})]})]}),e("div",{className:"h-40",children:e(l,{series:f.series,options:f.options,type:"area",height:160,className:"w-full absolute bottom-0 overflow-hidden"})})]})]}),t("div",{className:"grid md:grid-cols-2 xl:grid-cols-3 gap-6",children:[t("div",{className:"panel h-full",children:[t("div",{className:"flex items-start border-b  border-white-light dark:border-[#1b2e4b] -m-5 mb-5 p-5",children:[e("div",{className:"shrink-0 ring-2 ring-white-light dark:ring-dark rounded-full ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-1.jpeg",alt:"profile1",className:"w-10 h-10 rounded-full object-cover"})}),t("div",{className:"font-semibold",children:[e("h6",{children:"Jimmy Turner"}),e("p",{className:"text-xs text-white-dark mt-1",children:"Monday, Nov 18"})]})]}),t("div",{children:[e("div",{className:"text-white-dark pb-8",children:'"Duis aute irure dolor" in reprehenderit in voluptate velit esse cillum "dolore eu fugiat" nulla pariatur. Excepteur sint occaecat cupidatat non proident.'}),t("div",{className:"w-full absolute bottom-0 flex items-center justify-between p-5 -mx-5",children:[t("div",{className:"flex items-center",children:[e(V,{className:"w-5 h-5 text-info inline ltr:mr-1.5 rtl:ml-1.5 relative -top-0.5"}),e("span",{className:"dark:text-info",children:"551 Likes"})]}),t("button",{type:"button",className:"flex items-center bg-success/30 text-success rounded-md px-1.5 py-1 text-xs hover:shadow-[0_10px_20px_-10px] hover:shadow-success",children:["Read More",e(j,{className:"w-4 h-4 rtl:rotate-90 -rotate-90 ltr:ml-1.5 rtl:mr-1.5"})]})]})]})]}),t("div",{className:"panel h-full",children:[e("div",{className:"flex items-center justify-between border-b  border-white-light dark:border-[#1b2e4b] -m-5 mb-5 p-5",children:t("div",{className:"flex",children:[e("div",{className:"media-aside align-self-start",children:e("div",{className:"shrink-0 ring-2 ring-white-light dark:ring-dark rounded-full ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/g-8.png",alt:"profile2",className:"w-10 h-10 rounded-full object-cover"})})}),t("div",{className:"font-semibold",children:[e("h6",{children:"Dev Summit - New York"}),e("p",{className:"text-xs text-white-dark mt-1",children:"Bronx, NY"})]})]})}),t("div",{className:"font-semibold text-center pb-8",children:[e("div",{className:"mb-4 text-primary",children:"4 Members Going"}),t("div",{className:"flex items-center justify-center gap-3 pb-8",children:[e("img",{className:"w-10 h-10 ring-2 ring-white-light dark:ring-dark rounded-lg overflow-hidden object-cover",src:"/assets/images/profile-1.jpeg",alt:"profile1"}),e("img",{className:"w-10 h-10 ring-2 ring-white-light dark:ring-dark rounded-lg overflow-hidden object-cover",src:"/assets/images/profile-2.jpeg",alt:"profile2"}),e("img",{className:"w-10 h-10 ring-2 ring-white-light dark:ring-dark rounded-lg overflow-hidden object-cover",src:"/assets/images/profile-3.jpeg",alt:"profile3"}),e("img",{className:"w-10 h-10 ring-2 ring-white-light dark:ring-dark rounded-lg overflow-hidden object-cover",src:"/assets/images/profile-4.jpeg",alt:"profile4"})]}),e("div",{className:"w-full absolute bottom-0 flex items-center justify-between p-5 -mx-5",children:e("button",{type:"button",className:"btn btn-secondary btn-lg w-full border-0 bg-gradient-to-r from-[#3d38e1] to-[#1e9afe]",children:"View Details"})})]})]}),t("div",{className:"panel h-full",children:[t("div",{className:"flex items-center justify-between border-b  border-white-light dark:border-[#1b2e4b] -m-5 mb-5 p-5",children:[t("button",{type:"button",className:"flex font-semibold",children:[e("div",{className:"shrink-0 bg-secondary w-10 h-10 rounded-md flex items-center justify-center text-white ltr:mr-4 rtl:ml-4",children:e("span",{children:"FD"})}),t("div",{style:{textAlign:"left"},children:[e("h6",{children:"Figma Design"}),e("p",{className:"text-xs text-white-dark mt-1",children:"Design Reset"})]})]}),e("div",{className:"dropdown",children:e(i,{offset:[0,5],placement:`${r?"bottom-start":"bottom-end"}`,btnClassName:"hover:text-primary",button:e(s,{className:"w-5 h-5 text-black/70 dark:text-white/70 hover:!text-primary"}),children:t("ul",{children:[e("li",{children:e("button",{type:"button",children:"View Project"})}),e("li",{children:e("button",{type:"button",children:"Edit Project"})}),e("li",{children:e("button",{type:"button",children:"Mark as Done"})})]})})})]}),t("div",{className:"group",children:[e("div",{className:"text-white-dark mb-5",children:"Doloribus nisi vel suscipit modi, optio ex repudiandae voluptatibus officiis commodi. Nesciunt quas aut neque incidunt!"}),t("div",{className:"flex items-center justify-between mb-2 font-semibold",children:[t("div",{className:"flex items-center",children:[e(A,{className:"w-4 h-4 text-success"}),e("div",{className:"ltr:ml-2 rtl:mr-2 text-xs",children:"5 Tasks"})]}),e("p",{className:"text-primary",children:"65%"})]}),e("div",{className:"rounded-full h-2.5 p-0.5 bg-dark-light dark:bg-dark-light/10 mb-5",children:e("div",{className:"bg-gradient-to-r from-[#1e9afe] to-[#60dfcd] h-full rounded-full",style:{width:"65%"}})}),t("div",{className:"flex items-end justify-between",children:[t("div",{className:"flex items-center rounded-full bg-danger/20 px-2 py-1 text-xs text-danger font-semibold",children:[e(R,{className:"w-3 h-3 ltr:mr-1 rtl:ml-1"}),"3 Days Left"]}),t("div",{className:"flex items-center justify-center group-hover:-space-x-2 rtl:space-x-reverse rtl:group-hover:space-x-reverse",children:[e("span",{className:"bg-[#bfc9d4] dark:bg-dark w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100",children:"+6"}),e("img",{className:"w-9 h-9 border-2 border-white dark:border-dark rounded-full object-cover transition-all duration-300",src:"/assets/images/profile-6.jpeg",alt:"profile6"}),e("img",{className:"w-9 h-9 border-2 border-white dark:border-dark rounded-full object-cover transition-all duration-300",src:"/assets/images/profile-7.jpeg",alt:"profile7"}),e("img",{className:"w-9 h-9 border-2 border-white dark:border-dark rounded-full object-cover transition-all duration-300",src:"/assets/images/profile-8.jpeg",alt:"profile8"})]})]})]})]})]})]})]})};export{H as default};
