import{b as s,r as a,j as e,C as y,f as p,g as j,d as f,L as N,I as g,B as n}from"./label-CJMez355.js";/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],b=s("circle-alert",v);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],k=s("eye-off",w);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],S=s("eye",C);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],_=s("lock",A);/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],L=s("shield",E),z=({onLogin:m})=>{const[r,i]=a.useState(""),[c,h]=a.useState(!1),[l,o]=a.useState(""),[t,x]=a.useState(!1),u=d=>{d.preventDefault(),x(!0),o(""),setTimeout(()=>{r==="huzairi77"?m():(o("Invalid access code. Please try again."),i("")),x(!1)},800)};return e.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center p-6",children:e.jsxs("div",{className:"w-full max-w-md",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("div",{className:"flex items-center justify-center mb-4",children:e.jsx("div",{className:"w-16 h-16 bg-primary rounded-full flex items-center justify-center",children:e.jsx(L,{className:"w-8 h-8 text-primary-foreground"})})}),e.jsx("h1",{className:"text-3xl font-bold mb-2",children:e.jsx("span",{className:"text-primary",children:"EKA Studio"})}),e.jsx("p",{className:"text-muted-foreground",children:"Admin Access Required"})]}),e.jsxs(y,{className:"shadow-lg",children:[e.jsxs(p,{className:"text-center",children:[e.jsxs(j,{className:"flex items-center justify-center gap-2",children:[e.jsx(_,{className:"w-5 h-5"}),"Secure Access"]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Enter your access code to continue to the Hyperlink Manager"})]}),e.jsxs(f,{children:[e.jsxs("form",{onSubmit:u,className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(N,{htmlFor:"accessCode",children:"Access Code"}),e.jsxs("div",{className:"relative",children:[e.jsx(g,{id:"accessCode",type:c?"text":"password",value:r,onChange:d=>i(d.target.value),placeholder:"Enter access code",className:"pr-10",required:!0,disabled:t}),e.jsx(n,{type:"button",variant:"ghost",size:"sm",className:"absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent",onClick:()=>h(!c),disabled:t,children:c?e.jsx(k,{className:"h-4 w-4"}):e.jsx(S,{className:"h-4 w-4"})})]})]}),l&&e.jsxs("div",{className:"flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md",children:[e.jsx(b,{className:"w-4 h-4 text-destructive"}),e.jsx("span",{className:"text-sm text-destructive",children:l})]}),e.jsx(n,{type:"submit",className:"w-full",disabled:t||!r.trim(),children:t?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"}),"Verifying..."]}):"Access Hyperlink Manager"})]}),e.jsx("div",{className:"mt-6 pt-4 border-t border-border",children:e.jsx("div",{className:"text-center",children:e.jsx(n,{variant:"ghost",onClick:()=>window.location.href="/index.html",className:"text-sm text-muted-foreground hover:text-foreground",children:"← Back to Website"})})})]})]}),e.jsx("div",{className:"text-center mt-8 text-sm text-muted-foreground",children:e.jsx("p",{children:"© 2024 EKA Studio. All rights reserved."})})]})})};export{z as L};
