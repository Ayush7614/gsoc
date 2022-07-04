"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[6217],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),f=i,h=c["".concat(s,".").concat(f)]||c[f]||d[f]||n;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<n;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7277:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=a(3117),i=a(102),n=(a(7294),a(3905)),o=["components"],l={title:"Week 8",author:"Shruti Agarwal"},s=void 0,u={unversionedId:"2021/ui/updates/shruti/2021-08-03",id:"2021/ui/updates/shruti/2021-08-03",title:"Week 8",description:"\x3c!--",source:"@site/docs/2021/ui/updates/shruti/2021-08-03.md",sourceDirName:"2021/ui/updates/shruti",slug:"/2021/ui/updates/shruti/2021-08-03",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-08-03",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/ui/updates/shruti/2021-08-03.md",tags:[],version:"current",frontMatter:{title:"Week 8",author:"Shruti Agarwal"},sidebar:"2021",previous:{title:"Week 7",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-07-27"},next:{title:"Week 9",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-08-10"}},p={},d=[{value:"Screenshots",id:"screenshots",level:2},{value:"Add new Candidate License",id:"add-new-candidate-license",level:3},{value:"Upload From Server",id:"upload-from-server",level:3},{value:"Fix Delete Uploads",id:"fix-delete-uploads",level:3},{value:"Contributions",id:"contributions",level:2}],c={toc:d};function f(e){var t=e.components,l=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added the create new license page for candidate.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added the endpoint and route for createCandidateLicense in constant folder."),(0,n.kt)("li",{parentName:"ul"},"Created the function for it in services and api."),(0,n.kt)("li",{parentName:"ul"},"Shifted the listing of license page in organize/license folder."))),(0,n.kt)("li",{parentName:"ul"},"Fixed the groups error which leads to logout the user again and again."),(0,n.kt)("li",{parentName:"ul"},"Added the upload server page and the required state variables for it.\n",(0,n.kt)("em",{parentName:"li"},"Currently, upload from server api is unavailable.")),(0,n.kt)("li",{parentName:"ul"},"Code is getting broken if no upload is selected to delete. Added the error checks in deleteUploads."),(0,n.kt)("li",{parentName:"ul"},"Fixed the analysis options in vcs. Added the defaultAgentsList function instead of hard coded analysis options."),(0,n.kt)("li",{parentName:"ul"},"Fixed the user experience for uploads page since uploads page are longer than one page so on clicking the upload button user have to manually scroll to see the snackbar that whether the file is uploaded or not and for the first time user it may be bit confusing."),(0,n.kt)("li",{parentName:"ul"},"Created the separate repository for ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Shruti3004/FOSSology-REST-API"},"fossology rest apis"),"."),(0,n.kt)("li",{parentName:"ul"},"Added the open pull requests of rest api in the new repository. Added prs are: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/fossology/pull/2064"},"#2064")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/fossology/pull/2038"},"#2038")),(0,n.kt)("li",{parentName:"ul"},"Opened the issues for required rest apis.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Pagination feature request in the Search api."),(0,n.kt)("li",{parentName:"ul"},"Single request for the upload and analysis."),(0,n.kt)("li",{parentName:"ul"},"Edit request for the Uploads."),(0,n.kt)("li",{parentName:"ul"},"Upload from URL api has missing dependencies."),(0,n.kt)("li",{parentName:"ul"},"Jobs api is not giving complete data.")))),(0,n.kt)("h2",{id:"screenshots"},"Screenshots"),(0,n.kt)("h3",{id:"add-new-candidate-license"},"Add new Candidate License"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"add-new-candidate-license",src:a(8876).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"add-new-candidate-success",src:a(7057).Z,width:"1920",height:"1080"})),(0,n.kt)("h3",{id:"upload-from-server"},"Upload From Server"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"upload-from-server",src:a(3053).Z,width:"1920",height:"1080"})),(0,n.kt)("h3",{id:"fix-delete-uploads"},"Fix Delete Uploads"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"fix-delete-uploads",src:a(5793).Z,width:"1920",height:"1080"})),(0,n.kt)("h2",{id:"contributions"},"Contributions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/120/commits/7478f68434eac3639f0acec28ee422020781aae9"},"feat(license): added the candidate new license page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/120/commits/2fc264eb9a6929c454af03c03ea97b05d496316a"},"fix(ui): fixed the ui changes in create candidate license page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/120/commits/006c011f8d45f91007f26c78a1916d732cd4664f"},"fix(groups): fixed the logout error")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/121"},"feat(upload-server): added the upload server page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/123"},"feat(refactor): refactored the codebase")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/126"},"fix(errors): Added the error checks in deleteUploads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/127"},"fix(vcs): fixed the analysis of scanData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/132"},"fix(ux): fixed the ux of upload pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Shruti3004/FOSSology-REST-API/issues/1"},"REST API: Pagination feature in the Search request")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Shruti3004/FOSSology-REST-API/issues/2"},"REST API: Created the single request for the upload and analysis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Shruti3004/FOSSology-REST-API/issues/3"},"REST API: Edit request for the Uploads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Shruti3004/FOSSology-REST-API/issues/4"},"REST API: Upload from URL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Shruti3004/FOSSology-REST-API/issues/5"},"REST API: Jobs api is not giving complete data"))))}f.isMDXComponent=!0},8876:function(e,t,a){t.Z=a.p+"assets/images/addLicense-c873e5e3c4852e608845c5b955d7bac0.png"},7057:function(e,t,a){t.Z=a.p+"assets/images/addLicenseSuccess-0d5e2bd7eaa3ff5a21be36554f3d36e0.png"},5793:function(e,t,a){t.Z=a.p+"assets/images/fixDeleteUploads-b9caee8a86a0dafa764817a1916270e1.png"},3053:function(e,t,a){t.Z=a.p+"assets/images/uploadServer-e1676c250c837c7fa8f3b151ad454c73.png"}}]);