"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[467],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=s,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2298:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(3117),s=n(102),r=(n(7294),n(3905)),i=["components"],o={title:"Week 9",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},l=void 0,u={unversionedId:"2021/buildsystem/updates/2021-08-06",id:"2021/buildsystem/updates/2021-08-06",title:"Week 9",description:"\x3c!--",source:"@site/docs/2021/buildsystem/updates/2021-08-06.md",sourceDirName:"2021/buildsystem/updates",slug:"/2021/buildsystem/updates/2021-08-06",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-08-06",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/buildsystem/updates/2021-08-06.md",tags:[{label:"gsoc21",permalink:"/gsoc/docs/tags/gsoc-21"},{label:"buildsystem",permalink:"/gsoc/docs/tags/buildsystem"},{label:"ci/cd",permalink:"/gsoc/docs/tags/ci-cd"},{label:"cmake",permalink:"/gsoc/docs/tags/cmake"}],version:"current",frontMatter:{title:"Week 9",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},sidebar:"2021",previous:{title:"Week 8",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-07-30"},next:{title:"Week 10",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-08-13"}},c={},p=[{value:"Meeting 13",id:"meeting-13",level:2},{value:"Attendees",id:"attendees",level:3},{value:"Week 9 Progress",id:"week-9-progress",level:3},{value:"Discussions",id:"discussions",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"meeting-13"},"Meeting 13"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(August 6th, 2021)")),(0,r.kt)("h3",{id:"attendees"},"Attendees"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/GMishx"},"Gaurav Mishra ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ag4ums"},"Anupam Ghosh ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/itssingh"},"Sarita Singh ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/avinal"},"Avinal Kumar "))),(0,r.kt)("h3",{id:"week-9-progress"},"Week 9 Progress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initial CMake testing configuration added."),(0,r.kt)("li",{parentName:"ul"},"Few tests working, e.g copyright, nomos"),(0,r.kt)("li",{parentName:"ul"},"Improved packaging configurations"),(0,r.kt)("li",{parentName:"ul"},"To test the current progress, follow the instructions ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/avinal/FOSSologywiki#test-the-new-system-only-gcc-with-make-and-ninja-tested-for-now"},"here"))),(0,r.kt)("h3",{id:"discussions"},"Discussions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Is this a necessity that tests must be run as the fossy user? Because when I run tests as me they as for permissions. But proceeds as the fossy user."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No this is not required and this should not happen. They run under fossy as they sometimes require writing into /srv/fossology. But if they can run under other users that is an enhancement."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"I am getting a lot of install issues in C/C++ agent tests?"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    Start 3: delagent_unit_test\n    \n    3: Test command: /home/avinal/Documents/my_git/fossology/build/src/delagent/agent_tests/test_delagent\n    3: Test timeout computed to be: 10000000\n    3: install: cannot stat '/home/avinal/Documents/my_git/fossology/build/src/delagent/agent_tests/..//../../install/defconf/Db.conf': No such file or directory\n    3: install: cannot stat '/home/avinal/Documents/my_git/fossology/build/src/delagent/agent_tests/..//VERSION': No such file or directory\n    3: sh: 1: ../../../testing/db/createTestDB.php: not found\n    3: Failed to run ../../../testing/db/createTestDB.php -c /home/avinal/Documents/my_git/fossologbuild/src/delagent/agent_tests/testconf -e, exit code is:127 .\n    3/8 Test #3: delagent_unit_test ...............***Failed    0.02 sec\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Not sure about the reason. I was suspecting Makefile but since they are gone now, I think PHP files are calling some shell commands causing this. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Suggestions/Changes from Gaurav for fixing tests."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For clib-tests, it needs to be called from PHP file (via PHPUnit) as it requires setting up a dummy repo. Check the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/lib/c/test/Makefile"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For missing services.xml, the test cases include ",(0,r.kt)("inlineCode",{parentName:"p"},"src/lib/php/common-container.php")," which loads the file. It expects it to be in current dir. Can be solved in two ways"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create another common-container.php just for test cases with correct paths."),(0,r.kt)("li",{parentName:"ul"},"Edit the current file and take the help of environment variables. For example, if a test variable is exported in env, find the XML relative to it otherwise continue as normal and this variable can be exported by CMake during the test."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Scheduler tests do need ",(0,r.kt)("inlineCode",{parentName:"p"},"fossology_testconfig")," from Makefile.deps which set up the srv and create test configurations, DB, etc."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Another shell script can be written to do all that and call it from CMake. The PHP file called makes everything required in /tmp so not an issue."),(0,r.kt)("li",{parentName:"ul"},"The locations like ",(0,r.kt)("inlineCode",{parentName:"li"},"LOG_DIR, FOSSDB_CONF"),", etc. in CMakeLists.txt can be changed to some other values. I am guessing this is the reason you were asked for the fossy password."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"File ",(0,r.kt)("inlineCode",{parentName:"p"},"src/copyright/agent_tests/Functional/cli_test.sh")," needs to be edited to take paths relative to build dir. It can also be made into a .in file which is generated from CMake? So every path can easily be updated.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For PHP agents with missing version.php issue, there is a hack possible"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check ",(0,r.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/function.set-include-path.php"},"https://www.php.net/manual/en/function.set-include-path.php")),(0,r.kt)("li",{parentName:"ul"},"Another hack will be to use soft links for version.php in the source."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Other PHP issues like ",(0,r.kt)("inlineCode",{parentName:"p"},"PHP Fatal error: Uncaught Error: Class 'Fossology\\Lib\\Agent\\Agent' not found")," can only be solved by editing composer.json before doing composer install (look for autoload: psr-4 ).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For delagent, pkgagent, mimetype issues, something can be done here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/avinal/fossology/blob/avinal/feat/testing/src/testing/db/c/libfodbreposysconf.c#L349"},"https://github.com/avinal/fossology/blob/avinal/feat/testing/src/testing/db/c/libfodbreposysconf.c#L349")))))),(0,r.kt)("h3",{id:"conclusion-and-further-plans"},"Conclusion and Further Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Raise a pull request for all the progress till now."),(0,r.kt)("li",{parentName:"ul"},"Refactor the test source code according to suggestions."),(0,r.kt)("li",{parentName:"ul"},"Implement remaining testing configurations.")))}d.isMDXComponent=!0}}]);