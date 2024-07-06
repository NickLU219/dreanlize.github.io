import{c as e,I as t,u as n,M as a,r,o as l,d as c,w as o,i,e as u,f as s,F as d,g as m,l as f,m as b,T as p,K as y,k as v}from"./index-DlcaZKbg.js";import{_ as h}from"./_plugin-vue_export-helper-BCo6x5W8.js";var g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"};function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){k(e,t,n[t])}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(n,a){var r=O({},n,a.attrs);return e(t,O({},r,{icon:g}),null)};w.displayName="MailOutlined",w.inheritAttrs=!1;var j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 00-282.8 117.1 398.19 398.19 0 00-85.7 127.1A397.61 397.61 0 0072 552a398.46 398.46 0 00117.1 282.8c36.7 36.7 79.5 65.6 127.1 85.7A397.61 397.61 0 00472 952a398.46 398.46 0 00282.8-117.1c36.7-36.7 65.6-79.5 85.7-127.1A397.61 397.61 0 00872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8A331.59 331.59 0 01470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552c0-88.7 34.5-172.1 97.2-234.8 54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8zM952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 00589 74.6L560.7 72c-4.7-.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6zm-332.2-58.2V147.6a332.24 332.24 0 01166.4 89.8c45.7 45.6 77 103.6 90 166.1l-256.4.7z"}}]},name:"pie-chart",theme:"outlined"};function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){M(e,t,n[t])}))}return e}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=function(n,a){var r=_({},n,a.attrs);return e(t,_({},r,{icon:j}),null)};I.displayName="PieChartOutlined",I.inheritAttrs=!1;const C={class:"h-full overflow-y"};const K={__name:"siderMenu",setup(t){const b=n(),p=a.SubMenu,y=a.Item,v={name:"CustomSubMenu",components:{SubMenu:p,MenuItem:y,PieChartOutlined:I,MailOutlined:w},props:{menuInfo:{type:Object,default:()=>({})}},emit:["clickItem"],setup:(e,{slots:t,emit:n})=>({click:e=>{n("clickItem",e)}}),render(){var t;let n;const{menuInfo:a,$emit:r,click:l}=this;return e(d,null,[(null==(t=null==a?void 0:a.children)?void 0:t.length)?e(p,{key:a.name,title:a.meta.title},(c=n=a.children.map((t=>t.children?e(v,{"menu-info":t,onClickItem:l},null):e(y,{key:t.name,onClick:()=>r("clickItem",t)},{default:()=>[t.meta.title]}))),"function"==typeof c||"[object Object]"===Object.prototype.toString.call(c)&&!f(c)?n:{default:()=>[n]})):e(y,{key:a.name,onClick:()=>r("clickItem",a)},{default:()=>[a.meta.title]})]);var c}};return(t,n)=>{const a=r("a-menu"),f=r("a-layout-sider");return l(),c(f,{width:"200",class:"bg-white border-r"},{default:o((()=>[i("div",C,[e(a,{selectedKeys:u(b).currentPageName,"onUpdate:selectedKeys":n[0]||(n[0]=e=>u(b).currentPageName=e),openKeys:u(b).openKeys,"onUpdate:openKeys":n[1]||(n[1]=e=>u(b).openKeys=e),mode:"inline"},{default:o((()=>[(l(!0),s(d,null,m(u(b).currentSiderMenu.children,(e=>(l(),c(v,{"menu-info":e,key:e.name,onClickItem:u(b).siderMenuClick},null,8,["menu-info","onClickItem"])))),128))])),_:1},8,["selectedKeys","openKeys"])])])),_:1})}}},P={class:"overflow-auto w-full flex items-center px-4 bg-white border-b h-12 radio-tab"},x=h({__name:"tabbar",setup(t){const n=b(),a=(e,t)=>{"remove"===t&&n.removeTabbar(e)},i=e=>{n.changeTabbar(e)};return(t,f)=>{const b=r("a-tab-pane"),p=r("a-tabs");return l(),s("div",P,[e(p,{class:"",activeKey:u(n).currentTabbar,"onUpdate:activeKey":f[0]||(f[0]=e=>u(n).currentTabbar=e),"hide-add":"",type:"editable-card",onEdit:a,onTabClick:i},{default:o((()=>[(l(!0),s(d,null,m(u(n).tabbarList,(e=>(l(),c(b,{key:e.name,tab:e.meta.title},null,8,["tab"])))),128))])),_:1},8,["activeKey"])])}}},[["__scopeId","data-v-80f84682"]]),S={class:"content-wrapper flex flex-row"},z={class:"content flex-1"},A={class:"p-0 pt-0 overflow-auto",style:{height:"calc(100vh - 96px)"}},V=h({__name:"content",setup:t=>(t,n)=>{const a=r("router-view");return l(),s("div",S,[e(K),i("div",z,[e(x,{class:"sticky top-0 left-0 z-10"}),i("div",A,[e(a,null,{default:o((({Component:t})=>[e(p,null,{default:o((()=>[(l(),c(y,null,[(l(),c(v(t)))],1024))])),_:2},1024)])),_:1})])])])}},[["__scopeId","data-v-d75abf9d"]]);export{V as default};