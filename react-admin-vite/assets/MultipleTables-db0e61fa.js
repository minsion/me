import{u as j,r as s,s as $,j as r,b as t,t as G}from"./index-db6af04d.js";import{N as x}from"./index-14541920.js";import{s as h}from"./sortBy-422cc5ce.js";import{T as v}from"./tippy-79532697.js";import{I as X}from"./IconBell-f4cf060d.js";import{I as K}from"./IconPencil-1b90b2e8.js";import{I as U}from"./IconTrashLines-6a51083f.js";import"./floating-ui.dom.browser.min-e93d2b51.js";import"./_baseIsEqual-5bec69d5.js";import"./_defineProperty-a04b0d4c.js";const f=[{id:1,firstName:"Caroline",lastName:"Jensen",email:"carolinejensen@zidant.com",dob:"2004-05-28",address:{street:"529 Scholes Street",city:"Temperanceville",zipcode:5235,geo:{lat:23.806115,lng:164.677197}},phone:"+1 (821) 447-3782",isActive:!0,age:39,company:"POLARAX"},{id:2,firstName:"Celeste",lastName:"Grant",email:"celestegrant@polarax.com",dob:"1989-11-19",address:{street:"639 Kimball Street",city:"Bascom",zipcode:8907,geo:{lat:65.954483,lng:98.906478}},phone:"+1 (838) 515-3408",isActive:!1,age:32,company:"MANGLO"},{id:3,firstName:"Tillman",lastName:"Forbes",email:"tillmanforbes@manglo.com",dob:"2016-09-05",address:{street:"240 Vandalia Avenue",city:"Thynedale",zipcode:8994,geo:{lat:-34.949388,lng:-82.958111}},phone:"+1 (969) 496-2892",isActive:!1,age:26,company:"APPLIDECK"},{id:4,firstName:"Daisy",lastName:"Whitley",email:"daisywhitley@applideck.com",dob:"1987-03-23",address:{street:"350 Pleasant Place",city:"Idledale",zipcode:9369,geo:{lat:-54.458809,lng:-127.476556}},phone:"+1 (861) 564-2877",isActive:!0,age:21,company:"VOLAX"},{id:5,firstName:"Weber",lastName:"Bowman",email:"weberbowman@volax.com",dob:"1983-02-24",address:{street:"154 Conway Street",city:"Broadlands",zipcode:8131,geo:{lat:54.501351,lng:-167.47138}},phone:"+1 (962) 466-3483",isActive:!1,age:26,company:"ORBAXTER"},{id:6,firstName:"Buckley",lastName:"Townsend",email:"buckleytownsend@orbaxter.com",dob:"2011-05-29",address:{street:"131 Guernsey Street",city:"Vallonia",zipcode:6779,geo:{lat:-2.681655,lng:3.528942}},phone:"+1 (884) 595-2643",isActive:!0,age:40,company:"OPPORTECH"},{id:7,firstName:"Latoya",lastName:"Bradshaw",email:"latoyabradshaw@opportech.com",dob:"2010-11-23",address:{street:"668 Lenox Road",city:"Lowgap",zipcode:992,geo:{lat:36.026423,lng:130.412198}},phone:"+1 (906) 474-3155",isActive:!0,age:24,company:"GORGANIC"},{id:8,firstName:"Kate",lastName:"Lindsay",email:"katelindsay@gorganic.com",dob:"1987-07-02",address:{street:"773 Harrison Avenue",city:"Carlton",zipcode:5909,geo:{lat:42.464724,lng:-12.948403}},phone:"+1 (930) 546-2952",isActive:!0,age:24,company:"AVIT"},{id:9,firstName:"Marva",lastName:"Sandoval",email:"marvasandoval@avit.com",dob:"2010-11-02",address:{street:"200 Malta Street",city:"Tuskahoma",zipcode:1292,geo:{lat:-52.206169,lng:74.19452}},phone:"+1 (927) 566-3600",isActive:!1,age:28,company:"QUILCH"},{id:10,firstName:"Decker",lastName:"Russell",email:"deckerrussell@quilch.com",dob:"1994-04-21",address:{street:"708 Bath Avenue",city:"Coultervillle",zipcode:1268,geo:{lat:-41.550295,lng:-146.598075}},phone:"+1 (846) 535-3283",isActive:!1,age:27,company:"MEMORA"},{id:11,firstName:"Odom",lastName:"Mills",email:"odommills@memora.com",dob:"2010-01-24",address:{street:"907 Blake Avenue",city:"Churchill",zipcode:4400,geo:{lat:-56.061694,lng:-130.238523}},phone:"+1 (995) 525-3402",isActive:!0,age:34,company:"ZORROMOP"},{id:12,firstName:"Sellers",lastName:"Walters",email:"sellerswalters@zorromop.com",dob:"1975-11-12",address:{street:"978 Oakland Place",city:"Gloucester",zipcode:3802,geo:{lat:11.732587,lng:96.118099}},phone:"+1 (830) 430-3157",isActive:!0,age:28,company:"ORBOID"},{id:13,firstName:"Wendi",lastName:"Powers",email:"wendipowers@orboid.com",dob:"1979-06-02",address:{street:"376 Greenpoint Avenue",city:"Elliott",zipcode:9149,geo:{lat:-78.159578,lng:-9.835103}},phone:"+1 (863) 457-2088",isActive:!0,age:31,company:"SNORUS"},{id:14,firstName:"Sophie",lastName:"Horn",email:"sophiehorn@snorus.com",dob:"2018-09-20",address:{street:"343 Doughty Street",city:"Homestead",zipcode:330,geo:{lat:65.484087,lng:137.413998}},phone:"+1 (885) 418-3948",isActive:!0,age:22,company:"XTH"},{id:15,firstName:"Levine",lastName:"Rodriquez",email:"levinerodriquez@xth.com",dob:"1973-02-08",address:{street:"643 Allen Avenue",city:"Weedville",zipcode:8931,geo:{lat:-63.185586,lng:117.327808}},phone:"+1 (999) 565-3239",isActive:!0,age:27,company:"COMTRACT"},{id:16,firstName:"Little",lastName:"Hatfield",email:"littlehatfield@comtract.com",dob:"2012-01-03",address:{street:"194 Anthony Street",city:"Williston",zipcode:7456,geo:{lat:47.480837,lng:6.085909}},phone:"+1 (812) 488-3011",isActive:!1,age:33,company:"ZIDANT"},{id:17,firstName:"Larson",lastName:"Kelly",email:"larsonkelly@zidant.com",dob:"2010-06-14",address:{street:"978 Indiana Place",city:"Innsbrook",zipcode:639,geo:{lat:-71.766732,lng:150.854345}},phone:"+1 (892) 484-2162",isActive:!0,age:20,company:"SUREPLEX"},{id:18,firstName:"Kendra",lastName:"Molina",email:"kendramolina@sureplex.com",dob:"2002-07-19",address:{street:"567 Charles Place",city:"Kimmell",zipcode:1966,geo:{lat:50.765816,lng:-117.106499}},phone:"+1 (920) 528-3330",isActive:!1,age:31,company:"DANJA"},{id:19,firstName:"Ebony",lastName:"Livingston",email:"ebonylivingston@danja.com",dob:"1994-10-18",address:{street:"284 Cass Place",city:"Navarre",zipcode:948,geo:{lat:65.271256,lng:-83.064729}},phone:"+1 (970) 591-3039",isActive:!1,age:33,company:"EURON"},{id:20,firstName:"Kaufman",lastName:"Rush",email:"kaufmanrush@euron.com",dob:"2011-07-10",address:{street:"408 Kingsland Avenue",city:"Beaulieu",zipcode:7911,geo:{lat:41.513153,lng:54.821641}},phone:"+1 (924) 463-2934",isActive:!1,age:39,company:"ILLUMITY"},{id:21,firstName:"Frank",lastName:"Hays",email:"frankhays@illumity.com",dob:"2005-06-15",address:{street:"973 Caton Place",city:"Dargan",zipcode:4104,geo:{lat:63.314988,lng:-138.771323}},phone:"+1 (930) 577-2670",isActive:!1,age:31,company:"SYBIXTEX"},{id:22,firstName:"Carmella",lastName:"Mccarty",email:"carmellamccarty@sybixtex.com",dob:"1980-03-06",address:{street:"919 Judge Street",city:"Canby",zipcode:8283,geo:{lat:9.198597,lng:-138.809971}},phone:"+1 (876) 456-3218",isActive:!0,age:21,company:"ZEDALIS"},{id:23,firstName:"Massey",lastName:"Owen",email:"masseyowen@zedalis.com",dob:"2012-03-01",address:{street:"108 Seaview Avenue",city:"Slovan",zipcode:3599,geo:{lat:-74.648318,lng:99.620699}},phone:"+1 (917) 567-3786",isActive:!1,age:40,company:"DYNO"},{id:24,firstName:"Lottie",lastName:"Lowery",email:"lottielowery@dyno.com",dob:"1982-10-10",address:{street:"557 Meserole Avenue",city:"Fowlerville",zipcode:4991,geo:{lat:54.811546,lng:-20.996515}},phone:"+1 (912) 539-3498",isActive:!0,age:36,company:"MULTIFLEX"},{id:25,firstName:"Addie",lastName:"Luna",email:"addieluna@multiflex.com",dob:"1988-05-01",address:{street:"688 Bulwer Place",city:"Harmon",zipcode:7664,geo:{lat:-12.762766,lng:-39.924497}},phone:"+1 (962) 537-2981",isActive:!0,age:32,company:"PHARMACON"}],ae=()=>{const P=j();s.useEffect(()=>{P($("Multiple Tables"))});const[N,y]=s.useState(1),p=[10,20,30,50,100],[n,z]=s.useState(p[0]),[c,w]=s.useState(h(f,"firstName")),[E,D]=s.useState(c),[l,R]=s.useState(""),[u,I]=s.useState({columnAccessor:"firstName",direction:"asc"});s.useEffect(()=>{y(1)},[n]),s.useEffect(()=>{const e=(N-1)*n,a=e+n;D([...c.slice(e,a)])},[N,n,c]),s.useEffect(()=>{w(()=>f.filter(e=>e.firstName.toLowerCase().includes(l.toLowerCase())||e.company.toLowerCase().includes(l.toLowerCase())||e.age.toString().toLowerCase().includes(l.toLowerCase())||e.dob.toLowerCase().includes(l.toLowerCase())||e.email.toLowerCase().includes(l.toLowerCase())||e.phone.toLowerCase().includes(l.toLowerCase())))},[l]),s.useEffect(()=>{const e=h(c,u.columnAccessor);w(u.direction==="desc"?e.reverse():e),y(1)},[u]);const[b,A]=s.useState(1),[d,T]=s.useState(p[0]),[m,S]=s.useState(h(f,"firstName")),[M,O]=s.useState(m),[i,k]=s.useState(""),[g,B]=s.useState({columnAccessor:"firstName",direction:"asc"});s.useEffect(()=>{A(1)},[d]),s.useEffect(()=>{const e=(b-1)*d,a=e+d;O([...m.slice(e,a)])},[b,d,m]),s.useEffect(()=>{S(()=>f.filter(e=>e.firstName.toLowerCase().includes(i.toLowerCase())||e.company.toLowerCase().includes(i.toLowerCase())||e.age.toString().toLowerCase().includes(i.toLowerCase())||e.dob.toLowerCase().includes(i.toLowerCase())||e.email.toLowerCase().includes(i.toLowerCase())||e.phone.toLowerCase().includes(i.toLowerCase())))},[i]),s.useEffect(()=>{const e=h(m,g.columnAccessor);S(g.direction==="desc"?e.reverse():e)},[g]);const C=e=>{if(e){const a=new Date(e),o=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1;return(a.getDate()<10?"0"+a.getDate():a.getDate())+"/"+o+"/"+a.getFullYear()}return""},L=()=>{const e=["primary","secondary","success","danger","warning","info"],a=Math.floor(Math.random()*e.length);return e[a]},H=()=>{const e=["PAID","APPROVED","FAILED","CANCEL","SUCCESS","PENDING","COMPLETE"],a=Math.floor(Math.random()*e.length);return e[a]};return r("div",{children:[r("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary",children:[t("div",{className:"rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",children:t(X,{})}),t("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),t("a",{href:"https://www.npmjs.com/package/mantine-datatable",target:"_blank",className:"block hover:underline",children:"https://www.npmjs.com/package/mantine-datatable"})]}),r("div",{className:"panel mt-6",children:[r("div",{className:"flex md:items-center md:flex-row flex-col mb-5 gap-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Table 1"}),t("div",{className:"ltr:ml-auto rtl:mr-auto",children:t("input",{type:"text",className:"form-input w-auto",placeholder:"Search...",value:l,onChange:e=>R(e.target.value)})})]}),t("div",{className:"datatables",children:t(x,{className:"whitespace-nowrap table-hover",records:E,columns:[{accessor:"firstName",title:"Name",sortable:!0,render:({firstName:e,lastName:a,id:o})=>r("div",{className:"flex items-center w-max",children:[t("img",{className:"w-9 h-9 rounded-full ltr:mr-2 rtl:ml-2 object-cover",src:`/assets/images/profile-${o}.jpeg`,alt:""}),t("div",{children:e+" "+a})]})},{accessor:"company",title:"Company",sortable:!0},{accessor:"age",title:"Age",sortable:!0},{accessor:"dob",title:"Start Date",sortable:!0,render:({dob:e})=>t("div",{children:C(e)})},{accessor:"email",title:"Email",sortable:!0},{accessor:"phone",title:"Phone No.",sortable:!0},{accessor:"status",title:"Status",sortable:!0,render:()=>t("span",{className:`badge bg-${L()} `,children:H()})},{accessor:"action",title:"Action",titleClassName:"!text-center",render:()=>t("div",{className:"flex items-center w-max mx-auto",children:t(v,{content:"Delete",children:t("button",{type:"button",children:t(G,{})})})})}],totalRecords:c.length,recordsPerPage:n,page:N,onPageChange:e=>y(e),recordsPerPageOptions:p,onRecordsPerPageChange:z,sortStatus:u,onSortStatusChange:I,minHeight:200,paginationText:({from:e,to:a,totalRecords:o})=>`Showing  ${e} to ${a} of ${o} entries`})})]}),r("div",{className:"panel mt-6",children:[r("div",{className:"flex md:items-center md:flex-row flex-col mb-5 gap-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Table 2"}),t("div",{className:"ltr:ml-auto rtl:mr-auto",children:t("input",{type:"text",className:"form-input w-auto",placeholder:"Search...",value:i,onChange:e=>k(e.target.value)})})]}),t("div",{className:"datatables",children:t(x,{className:"whitespace-nowrap table-hover",records:M,columns:[{accessor:"firstName",title:"Name",sortable:!0,render:({firstName:e,lastName:a,id:o})=>r("div",{className:"flex items-center w-max",children:[t("img",{className:"w-9 h-9 rounded-full ltr:mr-2 rtl:ml-2 object-cover",src:`/assets/images/profile-${o}.jpeg`,alt:""}),t("div",{children:e+" "+a})]})},{accessor:"age",title:"Age",sortable:!0,render:({age:e})=>t("div",{className:"w-4/5 min-w-[100px] h-2.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex",children:t("div",{className:`h-2.5 rounded-full rounded-bl-full text-center text-white text-xs bg-${L()}`,style:{width:`${e}%`}})})},{accessor:"company",title:"Company",sortable:!0},{accessor:"dob",title:"Start Date",sortable:!0,render:({dob:e})=>t("div",{children:C(e)})},{accessor:"email",title:"Email",sortable:!0},{accessor:"phone",title:"Phone No.",sortable:!0},{accessor:"action",title:"Action",titleClassName:"!text-center",render:()=>r("div",{className:"flex items-center w-max mx-auto gap-2",children:[t(v,{content:"Edit",children:t("button",{type:"button",children:t(K,{})})}),t(v,{content:"Delete",children:t("button",{type:"button",children:t(U,{})})})]})}],totalRecords:m.length,recordsPerPage:d,page:b,onPageChange:e=>A(e),recordsPerPageOptions:p,onRecordsPerPageChange:T,sortStatus:g,onSortStatusChange:B,minHeight:200,paginationText:({from:e,to:a,totalRecords:o})=>`Showing  ${e} to ${a} of ${o} entries`})})]})]})};export{ae as default};