"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[2358],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1849:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),s=["components"],i={title:"Week 1",author:"Soham Banerjee",author_url:"https://github.com/soham4abc",author_image_url:"https://avatars.githubusercontent.com/u/63705023?v=4",tags:["gsoc22","react","API"]},l=void 0,c={unversionedId:"2022/ui/updates/soham/2022-06-24",id:"2022/ui/updates/soham/2022-06-24",title:"Week 1",description:"\x3c!--",source:"@site/docs/2022/ui/updates/soham/2022-06-24.md",sourceDirName:"2022/ui/updates/soham",slug:"/2022/ui/updates/soham/2022-06-24",permalink:"/gsoc/docs/2022/ui/updates/soham/2022-06-24",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2022/ui/updates/soham/2022-06-24.md",tags:[{label:"gsoc22",permalink:"/gsoc/docs/tags/gsoc-22"},{label:"react",permalink:"/gsoc/docs/tags/react"},{label:"API",permalink:"/gsoc/docs/tags/api"}],version:"current",frontMatter:{title:"Week 1",author:"Soham Banerjee",author_url:"https://github.com/soham4abc",author_image_url:"https://avatars.githubusercontent.com/u/63705023?v=4",tags:["gsoc22","react","API"]},sidebar:"2022",previous:{title:"Community Bonding",permalink:"/gsoc/docs/2022/ui/updates/soham/2022-06-02"},next:{title:"Week 2",permalink:"/gsoc/docs/2022/ui/updates/soham/2022-07-3"}},u={},p=[{value:"All Recent Jobs Page",id:"all-recent-jobs-page",level:2},{value:"PR link - feature(ui): /allRecentJobs page completed",id:"pr-link---featureui-allrecentjobs-page-completed",level:3},{value:"My Recent Jobs Page",id:"my-recent-jobs-page",level:2},{value:"PR link - feature(ui): /myRecentJobs page completed",id:"pr-link---featureui-myrecentjobs-page-completed",level:3},{value:"Search in Browse Page",id:"search-in-browse-page",level:2},{value:"PR link - fix(browse): search bar function implemented ",id:"pr-link---fixbrowse-search-bar-function-implemented-",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:3}],d={toc:p};function h(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"all-recent-jobs-page"},"All Recent Jobs Page"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(June 16th, 2022)")),(0,o.kt)("p",null,"Implementation of the All Recent Jobs page in the UI started.\nThe response from the ",(0,o.kt)("inlineCode",{parentName:"p"},"/jobs")," endpoint was used in order to get the data from the backend server"),(0,o.kt)("p",null,"Response format of the API: ",(0,o.kt)("br",null),"\n",(0,o.kt)("img",{alt:"Screenshot from 2022-06-24 10-04-12",src:n(8017).Z,width:"643",height:"342"})),(0,o.kt)("p",null,"At first ",(0,o.kt)("inlineCode",{parentName:"p"},"MDBReact")," datatable was used to render the data but further discussions on optimising the page the idea was scrapped and ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Total-pages")," header was used to get the data from the server in already paginated form."),(0,o.kt)("p",null,"Final UI of the All Recent jobs page after the discussions looks like: ",(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot from 2022-06-24 10-10-47",src:n(7179).Z,width:"1850",height:"1003"})),(0,o.kt)("h3",{id:"pr-link---featureui-allrecentjobs-page-completed"},"PR link - ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/fossology/FOSSologyUI/pull/223"},"feature(ui): /allRecentJobs page completed")),(0,o.kt)("h2",{id:"my-recent-jobs-page"},"My Recent Jobs Page"),(0,o.kt)("p",null,"The same API endpoint was used in My Recent Jobs page and the logged in user's UID was fetched from the ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserSelf()")," function.\n",(0,o.kt)("inlineCode",{parentName:"p"},"MDBReact")," table was used here and this requires change to the same UI as of ",(0,o.kt)("inlineCode",{parentName:"p"},"/allRecentJobs")," page."),(0,o.kt)("h3",{id:"pr-link---featureui-myrecentjobs-page-completed"},"PR link - ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/fossology/FOSSologyUI/pull/228"},"feature(ui): /myRecentJobs page completed")),(0,o.kt)("h2",{id:"search-in-browse-page"},"Search in Browse Page"),(0,o.kt)("p",null,"There was a search-bar present in the Browse page but, there was no function implented to make the search work. Thus introduced a search function which filters the API response as per the query data and only renders the value which is asked by the user."),(0,o.kt)("h3",{id:"pr-link---fixbrowse-search-bar-function-implemented-"},"PR link - ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/fossology/FOSSologyUI/pull/230"},"fix(browse): search bar function implemented ")),(0,o.kt)("h3",{id:"conclusion-and-further-plans"},"Conclusion and Further Plans"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Currently will be impleneting the My Recent Jobs page and will be introducing a row style pagination navigator as discussed with the mentors."),(0,o.kt)("li",{parentName:"ul"},"The REST API for ",(0,o.kt)("inlineCode",{parentName:"li"},"/jobs")," endpoint also needs a rework as it needs to send the processes as a subgroup of its respective job rather than sending all the processes at once."),(0,o.kt)("li",{parentName:"ul"},"Other filters in the Browse page aslo needs to be implemented as the UI is ready but there is no funtion implemented.")))}h.isMDXComponent=!0},7179:function(e,t,n){t.Z=n.p+"assets/images/alljobs_ui_sample-db5910acbfb5cb6e07268e421729c9b6.png"},8017:function(e,t,n){t.Z=n.p+"assets/images/docs_api_res-b674d5af3e54afbc846fcbb7d9299054.png"}}]);