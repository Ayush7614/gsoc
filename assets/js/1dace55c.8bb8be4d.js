"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[6956],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9624:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:1,title:"Introduction",slug:"/2022/project/"},l=void 0,p={unversionedId:"2022/project/index",id:"2022/project/index",title:"Introduction",description:"\x3c!--",source:"@site/docs/2022/project/index.md",sourceDirName:"2022/project",slug:"/2022/project/",permalink:"/gsoc/docs/2022/project/",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2022/project/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",slug:"/2022/project/"},sidebar:"2022",previous:{title:"Week 3",permalink:"/gsoc/docs/2022/atarashi/updates/2022-06-27"},next:{title:"Community Bonding",permalink:"/gsoc/docs/2022/project/updates/2022-06-02"}},u={},s=[{value:"Author",id:"author",level:3},{value:"Contact info",id:"contact-info",level:3},{value:"Introduce concept of project in FOSSology",id:"introduce-concept-of-project-in-fossology",level:2}],d={toc:s};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"author"},"Author"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fwhdzh"},"Feng Wenhan"))),(0,i.kt)("h3",{id:"contact-info"},"Contact info"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mailto:"},"Email")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://linkedin.com/"},"LinkedIn"))),(0,i.kt)("h2",{id:"introduce-concept-of-project-in-fossology"},"Introduce concept of project in FOSSology"),(0,i.kt)("p",null,"I would like to participate in the project \u201cIntroduce concept of project in\nFOSSology\u201d which can be founded in the idea list. The \u201cproject\u201d is defined by:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"a project ID (as primary key)"),(0,i.kt)("li",{parentName:"ol"},"a project name"),(0,i.kt)("li",{parentName:"ol"},"a root folder in Fossology"),(0,i.kt)("li",{parentName:"ol"},"one or more Group IDs and associated access."),(0,i.kt)("li",{parentName:"ol"},"a URL / ID / Free field to link the project to an external tool")),(0,i.kt)("p",null,"The \u201cproject\u201d concept is put by Nicolas Toussaint in the issue\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fossology/fossology/issues/1738"},"#1738"),". As described, it\ncould be useful in many ways, such as gathering multiple uploads under the same\numbrella, and making bulk changes to all uploads / sub-directories that belong\nto a given project. This project is like a web project. I need to modify both\nback-end logic and front-end pages. And the product of this project will be a\nnew-version website that could support the operations on \u201cproject\u201d level."))}f.isMDXComponent=!0}}]);