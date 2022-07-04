"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[8200],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),l=["components"],s={title:"Week 10",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},o=void 0,u={unversionedId:"2021/buildsystem/updates/2021-08-13",id:"2021/buildsystem/updates/2021-08-13",title:"Week 10",description:"\x3c!--",source:"@site/docs/2021/buildsystem/updates/2021-08-13.md",sourceDirName:"2021/buildsystem/updates",slug:"/2021/buildsystem/updates/2021-08-13",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-08-13",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/buildsystem/updates/2021-08-13.md",tags:[{label:"gsoc21",permalink:"/gsoc/docs/tags/gsoc-21"},{label:"buildsystem",permalink:"/gsoc/docs/tags/buildsystem"},{label:"ci/cd",permalink:"/gsoc/docs/tags/ci-cd"},{label:"cmake",permalink:"/gsoc/docs/tags/cmake"}],version:"current",frontMatter:{title:"Week 10",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},sidebar:"2021",previous:{title:"Week 9",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-08-06"},next:{title:"Building FOSSology",permalink:"/gsoc/docs/2021/buildsystem/build"}},c={},p=[{value:"Meeting 14",id:"meeting-14",level:2},{value:"Attendees",id:"attendees",level:3},{value:"Week 9 Progress",id:"week-9-progress",level:3},{value:"Discussions",id:"discussions",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"meeting-14"},"Meeting 14"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(August 14th, 2021)")),(0,r.kt)("h3",{id:"attendees"},"Attendees"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mcjaeger"},"Michael C. Jaeger ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ag4ums"},"Anupam Ghosh ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/itssingh"},"Sarita Singh ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/avinal"},"Avinal Kumar "))),(0,r.kt)("h3",{id:"week-9-progress"},"Week 9 Progress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Testing configuration for all agents added"),(0,r.kt)("li",{parentName:"ul"},"GitHub Actions Configuration added"),(0,r.kt)("li",{parentName:"ul"},"Fixed and refactored most of the tests"),(0,r.kt)("li",{parentName:"ul"},"Raised a pull request for all the works till now. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fossology/fossology/pull/2075"},"#2075")),(0,r.kt)("li",{parentName:"ul"},"To test the current progress, follow the instructions ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/avinal/FOSSologywiki#test-the-new-system-only-gcc-with-make-and-ninja-tested-for-now"},"here"))),(0,r.kt)("h3",{id:"discussions"},"Discussions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"I suspect that the Ojo regression test's expected data file is outdated")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Michael said that on their internal Jenkins CI, these tests are not being run currently, so this might be possible that the file is outdated."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Since some of the tests need Makefile to install while testing, CMake generated Makefiles and test Makefiles are conflicting, and hence we are forced to use Ninja for testing. What can I do about it?")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Michael suggested using ",(0,r.kt)("inlineCode",{parentName:"li"},"--file=filename")," flag with the make command and change the name of the test Makefile to something else. This will solve the problem."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mimetype is detecting executables as shared lib, is that expected or needs to be fixed?")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mimetype internally depends on the ",(0,r.kt)("em",{parentName:"li"},"file")," command to get the mime-type. If the output of the ",(0,r.kt)("em",{parentName:"li"},"file")," command is also the same then it is okay."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"What is")," ",(0,r.kt)("inlineCode",{parentName:"p"},"folderlist")," ",(0,r.kt)("strong",{parentName:"p"},"in ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/fossology/fossology/blob/master/src/delagent/agent_tests/Functional/ft_cliDelagentTest.php#L126"},"https://github.com/fossology/fossology/blob/master/src/delagent/agent_tests/Functional/ft_cliDelagentTest.php#L126")," ?")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"folderlist")," is a view. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"createViews()")," function."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Suggestions/Changes from Gaurav for fixing phpunit tests.")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please note the changes in ",(0,r.kt)("inlineCode",{parentName:"li"},"setUp()")," function in ",(0,r.kt)("inlineCode",{parentName:"li"},"src/lib/php/tests/test_common_license_file.php")),(0,r.kt)("li",{parentName:"ul"},"The test database name is given to the constructor of TestPgDb and can be anything as it gets deleted in ",(0,r.kt)("inlineCode",{parentName:"li"},"teardown()")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"dbmanager")," is provided by the object, no need to initialize global ",(0,r.kt)("inlineCode",{parentName:"li"},"PG_CONN")," (it will be exposed by the library in case some of the functions need it)."),(0,r.kt)("li",{parentName:"ul"},"All the tables needs to be explicitly mentioned to ",(0,r.kt)("inlineCode",{parentName:"li"},"createPlainTables()")," and their corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"createSequences()")," (you can get them using ",(0,r.kt)("inlineCode",{parentName:"li"},"\\d tablename")," from existing DB easily. Then call the ",(0,r.kt)("inlineCode",{parentName:"li"},"alterTables()")," to update the sequence. (I am not sure if ",(0,r.kt)("inlineCode",{parentName:"li"},"createConstraints()")," is required at all, try to remove)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tearDown()")," is pretty easy, just need to call ",(0,r.kt)("inlineCode",{parentName:"li"},"fullDestruct()"),". For debugging, you can add ",(0,r.kt)("inlineCode",{parentName:"li"},"exit(-1);")," after any line you as suspecting, connect to DB and checkout the database, select/inspect tables."),(0,r.kt)("li",{parentName:"ul"},"There is also ",(0,r.kt)("inlineCode",{parentName:"li"},"TestInstaller")," class in case any of test case needs the whole mods-enabled with fossology.conf, VERSION, etc. Please check ",(0,r.kt)("inlineCode",{parentName:"li"},"src/cli/tests/test_fo_copyright_list.php")," for quick reference.")))),(0,r.kt)("h3",{id:"conclusion-and-further-plans"},"Conclusion and Further Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix the remaining tests."),(0,r.kt)("li",{parentName:"ul"},"Add week 8, 9 reports."),(0,r.kt)("li",{parentName:"ul"},"Add Final Evaluation Report."),(0,r.kt)("li",{parentName:"ul"},"Complete Final Evaluation.")))}d.isMDXComponent=!0}}]);