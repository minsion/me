import{u as I,r as a,s as k,b as t,j as i,L as D,N as w,n as E}from"./index-8cd85ed0.js";import{N as $}from"./index-40fc37bd.js";import{s as C}from"./sortBy-0eb6a48e.js";import{I as S}from"./IconTrashLines-415b8511.js";import{I as J}from"./IconPlus-510712df.js";import{I as G}from"./IconEye-b85296c3.js";import"./floating-ui.dom.browser.min-e93d2b51.js";import"./_baseIsEqual-bd2b1744.js";import"./_defineProperty-9f3cfea9.js";const V=()=>{const L=I();a.useEffect(()=>{L(k("Invoice List"))});const[r,x]=a.useState([{id:1,invoice:"081451",name:"Laurie Fox",email:"lauriefox@company.com",date:"15 Dec 2020",amount:"2275.45",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:2,invoice:"081452",name:"Alexander Gray",email:"alexGray3188@gmail.com",date:"20 Dec 2020",amount:"1044.00",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:3,invoice:"081681",name:"James Taylor",email:"jamestaylor468@gmail.com",date:"27 Dec 2020",amount:"20.00",status:{tooltip:"Pending",color:"danger"},profile:"profile-1.jpeg"},{id:4,invoice:"082693",name:"Grace Roberts",email:"graceRoberts@company.com",date:"31 Dec 2020",amount:"344.00",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:5,invoice:"084743",name:"Donna Rogers",email:"donnaRogers@hotmail.com",date:"03 Jan 2021",amount:"405.15",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:6,invoice:"086643",name:"Amy Diaz",email:"amy968@gmail.com",date:"14 Jan 2020",amount:"100.00",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:7,invoice:"086773",name:"Nia Hillyer",email:"niahillyer666@comapny.com",date:"20 Jan 2021",amount:"59.21",status:{tooltip:"Pending",color:"danger"},profile:"profile-1.jpeg"},{id:8,invoice:"087916",name:"Mary McDonald",email:"maryDonald007@gamil.com",date:"25 Jan 2021",amount:"79.00",status:{tooltip:"Pending",color:"danger"},profile:"profile-1.jpeg"},{id:9,invoice:"089472",name:"Andy King",email:"kingandy07@company.com",date:"28 Jan 2021",amount:"149.00",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:10,invoice:"091768",name:"Vincent Carpenter",email:"vincentcarpenter@gmail.com",date:"30 Jan 2021",amount:"400",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"},{id:11,invoice:"095841",name:"Kelly Young",email:"youngkelly@hotmail.com",date:"06 Feb 2021",amount:"49.00",status:{tooltip:"Pending",color:"danger"},profile:"profile-1.jpeg"},{id:12,invoice:"098424",name:"Alma Clarke",email:"alma.clarke@gmail.com",date:"10 Feb 2021",amount:"234.40",status:{tooltip:"Paid",color:"success"},profile:"profile-1.jpeg"}]),N=(e=null)=>{if(window.confirm("Are you sure want to delete selected row ?"))if(e)d(r.filter(o=>o.id!==e)),u(r.filter(o=>o.id!==e)),x(r.filter(o=>o.id!==e)),f(""),g([]);else{const h=(P||[]).map(b=>b.id),v=r.filter(b=>!h.includes(b.id));d(v),u(v),x(v),f(""),g([]),c(1)}},[p,c]=a.useState(1),y=[10,20,30,50,100],[l,j]=a.useState(y[0]),[n,u]=a.useState(C(r,"invoice")),[R,d]=a.useState(n),[P,g]=a.useState([]),[s,f]=a.useState(""),[m,A]=a.useState({columnAccessor:"firstName",direction:"asc"});return a.useEffect(()=>{c(1)},[l]),a.useEffect(()=>{const e=(p-1)*l,o=e+l;d([...n.slice(e,o)])},[p,l,n]),a.useEffect(()=>{u(()=>r.filter(e=>e.invoice.toLowerCase().includes(s.toLowerCase())||e.name.toLowerCase().includes(s.toLowerCase())||e.email.toLowerCase().includes(s.toLowerCase())||e.date.toLowerCase().includes(s.toLowerCase())||e.amount.toLowerCase().includes(s.toLowerCase())||e.status.tooltip.toLowerCase().includes(s.toLowerCase())))},[s]),a.useEffect(()=>{const e=C(n,m.columnAccessor);d(m.direction==="desc"?e.reverse():e),c(1)},[m]),t("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:i("div",{className:"invoice-table",children:[i("div",{className:"mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5",children:[i("div",{className:"flex items-center gap-2",children:[i("button",{type:"button",className:"btn btn-danger gap-2",onClick:()=>N(),children:[t(S,{}),"Delete"]}),i(D,{to:"/apps/invoice/add",className:"btn btn-primary gap-2",children:[t(J,{}),"Add New"]})]}),t("div",{className:"ltr:ml-auto rtl:mr-auto",children:t("input",{type:"text",className:"form-input w-auto",placeholder:"Search...",value:s,onChange:e=>f(e.target.value)})})]}),t("div",{className:"datatables pagination-padding",children:t($,{className:"whitespace-nowrap table-hover invoice-table",records:R,columns:[{accessor:"invoice",sortable:!0,render:({invoice:e})=>t(w,{to:"/apps/invoice/preview",children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})})},{accessor:"name",sortable:!0,render:({name:e,id:o})=>i("div",{className:"flex items-center font-semibold",children:[t("div",{className:"p-0.5 bg-white-dark/30 rounded-full w-max ltr:mr-2 rtl:ml-2",children:t("img",{className:"h-8 w-8 rounded-full object-cover",src:`/assets/images/profile-${o}.jpeg`,alt:""})}),t("div",{children:e})]})},{accessor:"email",sortable:!0},{accessor:"date",sortable:!0},{accessor:"amount",sortable:!0,titleClassName:"text-right",render:({amount:e,id:o})=>t("div",{className:"text-right font-semibold",children:`$${e}`})},{accessor:"status",sortable:!0,render:({status:e})=>t("span",{className:`badge badge-outline-${e.color} `,children:e.tooltip})},{accessor:"action",title:"Actions",sortable:!1,textAlignment:"center",render:({id:e})=>i("div",{className:"flex gap-4 items-center w-max mx-auto",children:[t(w,{to:"/apps/invoice/edit",className:"flex hover:text-info",children:t(E,{className:"w-4.5 h-4.5"})}),t(w,{to:"/apps/invoice/preview",className:"flex hover:text-primary",children:t(G,{})}),t("button",{type:"button",className:"flex hover:text-danger",onClick:o=>N(e),children:t(S,{})})]})}],highlightOnHover:!0,totalRecords:n.length,recordsPerPage:l,page:p,onPageChange:e=>c(e),recordsPerPageOptions:y,onRecordsPerPageChange:j,sortStatus:m,onSortStatusChange:A,selectedRecords:P,onSelectedRecordsChange:g,paginationText:({from:e,to:o,totalRecords:h})=>`Showing  ${e} to ${o} of ${h} entries`})})]})})};export{V as default};