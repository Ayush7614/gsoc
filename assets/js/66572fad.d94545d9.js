"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[6635],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},656:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],s={title:"Week 8",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},o=void 0,u={unversionedId:"2021/buildsystem/updates/2021-07-30",id:"2021/buildsystem/updates/2021-07-30",title:"Week 8",description:"\x3c!--",source:"@site/docs/2021/buildsystem/updates/2021-07-30.md",sourceDirName:"2021/buildsystem/updates",slug:"/2021/buildsystem/updates/2021-07-30",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-07-30",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/buildsystem/updates/2021-07-30.md",tags:[{label:"gsoc21",permalink:"/gsoc/docs/tags/gsoc-21"},{label:"buildsystem",permalink:"/gsoc/docs/tags/buildsystem"},{label:"ci/cd",permalink:"/gsoc/docs/tags/ci-cd"},{label:"cmake",permalink:"/gsoc/docs/tags/cmake"}],version:"current",frontMatter:{title:"Week 8",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},sidebar:"2021",previous:{title:"Week 7",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-07-23"},next:{title:"Week 9",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-08-06"}},c={},p=[{value:"Meeting 12",id:"meeting-12",level:2},{value:"Attendees",id:"attendees",level:3},{value:"Week 8 Progress",id:"week-8-progress",level:3},{value:"Discussions",id:"discussions",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"meeting-12"},"Meeting 12"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(July 30th, 2021)")),(0,i.kt)("h3",{id:"attendees"},"Attendees"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/shaheemazmalmmd"},"Shaheem Azmal M MD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GMishx"},"Gaurav Mishra")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/itssingh"},"Sarita Singh")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/avinal"},"Avinal Kumar"))),(0,i.kt)("h3",{id:"week-8-progress"},"Week 8 Progress"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CMake Packaging configuration almost completed."),(0,i.kt)("li",{parentName:"ul"},"Packages can be built according to the FOSSology previous packaging structure."),(0,i.kt)("li",{parentName:"ul"},"Initial testing configuration added."),(0,i.kt)("li",{parentName:"ul"},"Ninja build has been fixed."),(0,i.kt)("li",{parentName:"ul"},"To test the current progress, follow the instructions ",(0,i.kt)("a",{href:"https://github.com/avinal/FOSSology/wiki#test-the-new-system-only-gcc-with-make-and-ninja-tested-for-now"},"here"))),(0,i.kt)("h3",{id:"discussions"},"Discussions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"How is the testing implemented in FOSSology?")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Not all agents have testing implemented."),(0,i.kt)("li",{parentName:"ul"},"There are two types of tests ",(0,i.kt)("em",{parentName:"li"},"Unit")," and ",(0,i.kt)("em",{parentName:"li"},"Functional"),"."),(0,i.kt)("li",{parentName:"ul"},"At first, the test executable calls multiple PHP scripts to create a test environment. And then tests are executed. "),(0,i.kt)("li",{parentName:"ul"},"Files related to testing and common for all the agents are in ",(0,i.kt)("inlineCode",{parentName:"li"},"src/testing")),(0,i.kt)("li",{parentName:"ul"},"Other tests depends on ",(0,i.kt)("inlineCode",{parentName:"li"},"phpunit"),". This ",(0,i.kt)("em",{parentName:"li"},"PHPUnit")," is generated inside ",(0,i.kt)("inlineCode",{parentName:"li"},"vendor"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"As of now, the testing configurations are hardcoded, what should I do, because it seems the testing configuration will require changes to a lot of files?")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Decide a deadline for the testing configuration and if until that point there is not very productive implementation then move to the next task that is implementing CI."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As of now building, installation, and packaging via CMake is working and in a stable state. To create an initial Pull Request. This would also be useful in case of the final evaluation and further testing will be based on this PR itself.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fix any bugs or if there is the scope of improvement in Building, Installation and Packaging do that. "))),(0,i.kt)("h3",{id:"conclusion-and-further-plans"},"Conclusion and Further Plans"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prepare for an initial PR."),(0,i.kt)("li",{parentName:"ul"},"Fix known bugs and apply Improvements."),(0,i.kt)("li",{parentName:"ul"},"Work on testing configurations.")))}d.isMDXComponent=!0}}]);