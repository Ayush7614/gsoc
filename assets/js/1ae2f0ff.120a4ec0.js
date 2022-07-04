"use strict";(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[5962],{3905:function(A,e,t){t.d(e,{Zo:function(){return u},kt:function(){return g}});var o=t(7294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,o)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function l(A,e){if(null==A)return{};var t,o,n=function(A,e){if(null==A)return{};var t,o,n={},r=Object.keys(A);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var s=o.createContext({}),i=function(A){var e=o.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},u=function(A){var e=i(A.components);return o.createElement(s.Provider,{value:e},A.children)},c={inlineCode:"code",wrapper:function(A){var e=A.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(A,e){var t=A.components,n=A.mdxType,r=A.originalType,s=A.parentName,u=l(A,["components","mdxType","originalType","parentName"]),p=i(t),g=n,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||r;return t?o.createElement(m,a(a({ref:e},u),{},{components:t})):o.createElement(m,a({ref:e},u))}));function g(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var r=t.length,a=new Array(r);a[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=A,l.mdxType="string"==typeof A?A:n,a[1]=l;for(var i=2;i<r;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6303:function(A,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});var o=t(3117),n=t(102),r=(t(7294),t(3905)),a=["components"],l={sidebar_position:3,title:"Installation"},s=void 0,i={unversionedId:"2021/ui/installation",id:"2021/ui/installation",title:"Installation",description:"\x3c!--",source:"@site/docs/2021/ui/installation.md",sourceDirName:"2021/ui",slug:"/2021/ui/installation",permalink:"/gsoc/docs/2021/ui/installation",draft:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/ui/installation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Installation"},sidebar:"2021",previous:{title:"Week 10",permalink:"/gsoc/docs/2021/ui/updates/aman/2021-08-17"},next:{title:"Style Guide",permalink:"/gsoc/docs/2021/ui/styleGuide"}},u={},c=[{value:"Requirements \ud83d\udcdc",id:"requirements-",level:2},{value:"Installation Steps \ud83d\udeb6\u200d\u2642\ufe0f",id:"installation-steps-\ufe0f",level:2},{value:"1. Fork it \ud83c\udf74",id:"1-fork-it-",level:3},{value:"2. Clone it \ud83d\udc65",id:"2-clone-it-",level:3},{value:"3. Set it up \u2b06\ufe0f",id:"3-set-it-up-\ufe0f",level:3},{value:"4. Run it \ud83c\udfc1",id:"4-run-it-",level:3}],p={toc:c};function g(A){var e=A.components,l=(0,n.Z)(A,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"requirements-"},"Requirements \ud83d\udcdc"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your machine should have ",(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/install/#windows-stable"},"Yarn")," (preferable) or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Npm")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," installed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A working ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fossology/fossology#installation"},"FOSSology")," setup.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Setup CORS in FOSSology"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open FOSSology and go to Admin > Customize."),(0,r.kt)("li",{parentName:"ul"},'Look out for "Allowed origins for REST API"'),(0,r.kt)("li",{parentName:"ul"},'Set the value to "http://localhost:3000"')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(936).Z,width:"1367",height:"249"})),(0,r.kt)("h2",{id:"installation-steps-\ufe0f"},"Installation Steps \ud83d\udeb6\u200d\u2642\ufe0f"),(0,r.kt)("h3",{id:"1-fork-it-"},"1. Fork it \ud83c\udf74"),(0,r.kt)("p",null,"You can get your own fork/copy of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI"},"FOSSologyUI")," by using the ",(0,r.kt)("kbd",null,(0,r.kt)("b",null,"Fork"))," button."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI"},(0,r.kt)("img",{alt:"Fork Button",src:t(406).Z,width:"745",height:"116"}))),(0,r.kt)("h3",{id:"2-clone-it-"},"2. Clone it \ud83d\udc65"),(0,r.kt)("p",null,"You need to clone (download) it to a local machine using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/Your_Username/FOSSologyUI.git\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This makes a local copy of the repository in your machine.")),(0,r.kt)("p",null,"Once you have cloned the ",(0,r.kt)("inlineCode",{parentName:"p"},"FOSSologyUI")," repository in GitHub, move to that folder first using the change directory command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# This will change directory to a folder FOSSologyUI\ncd FOSSologyUI\n")),(0,r.kt)("p",null,"Move to this folder for all other commands."),(0,r.kt)("h3",{id:"3-set-it-up-\ufe0f"},"3. Set it up \u2b06\ufe0f"),(0,r.kt)("p",null,"Run the following commands to see that ",(0,r.kt)("em",{parentName:"p"},"your local copy")," has a reference to ",(0,r.kt)("em",{parentName:"p"},"your forked remote repository")," in GitHub :octocat:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git remote -v\norigin  https://github.com/Your_Username/FOSSologyUI.git (fetch)\norigin  https://github.com/Your_Username/FOSSologyUI.git (push)\n")),(0,r.kt)("p",null,"Now, add a reference to the original ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fossology/FOSSologyUI"},"FOSSologyUI")," repository using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream https://github.com/fossology/FOSSologyUI.git\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This adds a new remote named ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"upstream")),".")),(0,r.kt)("p",null,"See the changes using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git remote -v\norigin    https://github.com/Your_Username/FOSSologyUI.git (fetch)\norigin    https://github.com/Your_Username/FOSSologyUI.git (push)\nupstream  https://github.com/fossology/FOSSologyUI.git (fetch)\nupstream  https://github.com/fossology/FOSSologyUI.git (push)\n")),(0,r.kt)("h3",{id:"4-run-it-"},"4. Run it \ud83c\udfc1"),(0,r.kt)("p",null,"Using Yarn (preferable)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# To install all the dependencies\nyarn install\n\n# To start the application\nyarn start\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OR")),(0,r.kt)("p",null,"using NPM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# To install all the dependencies\nnpm install\n\n# To start the application\nnpm start\n")),(0,r.kt)("p",null,"The React application will start on port 3000.\nGo to: http://localhost:3000"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OR")),(0,r.kt)("p",null,"using Docker"),(0,r.kt)("p",null,"FOSSology comes with a Dockerfile allowing the containerized execution."),(0,r.kt)("p",null,"Run the following commands inside the project directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'docker build \\\n-t fossologyui:react1.0 \\\n--build-arg REACT_APP_SERVER_URL="localhost/repo/api/v1" \\\n--build-arg REACT_APP_HTTPS="false" .\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -p 3000:3000 fossologyui:react1.0\n")),(0,r.kt)("p",null,"The UI can then be accessed at http://IP_OF_DOCKER_HOST:3000/, user fossy password fossy."))}g.isMDXComponent=!0},936:function(A,e,t){e.Z=t.p+"assets/images/CorsSetup-51d5913c490a7078e954b9baba674f72.png"},406:function(A,e){e.Z="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwcIBwoICAoPCggKDxINCgoNEhQQEBIQEBQRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBCwwMFRMVIhgYIhQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/CABEIAHQC6QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUBAgQGB//aAAgBAQAAAAD7MAAAAAAAAAAwwAAAGWQAAAAAAAAAAa8vNgAAANurpyAAAAAAAAAAEVfYYAAADNdZ7gDTUAAAZAka6AADINK+35gADWQG0tNayACLcAAA122CORFuAAaSg5uG35JwAEHWCCemtZABDu5/PPQz1MM9tpzdnFL0BrvtSdWLKORFsVizj8/Y72AaTYrILaXm4bfinqfMPT+f5Pf5z5n0myDt08RcbeggnprWQAQ7PA36g995bksq7ozr08l7t5r18uN80PHn1UciLKo8a9lY+d6uHSaP1rWak4Z7Xt5uG34Z3yh9X+VXtbwt9Pq20HdB879L576PBPTWsgAg2ee5nR6Khm2r+jSDs6JLCKViTND1LWORDk+fvoEND0xQyd1oxNHwcNz0c3Db187yz1Phvc+G4bKTg95JBYQ+FtZPTwT01rIAIMnNjqAAGJdgjkQmNW2QDE4Obht66ZVrQAQ2IIJ6a1kAEGoAABiXIYlRRgACUEXDb1mQAEfeDXpprWQAAAAAAAAAAIq23AAAAprWQAAAAAAAAAAI6+bAAAAZhsdwAAAAAAAAAAxDDgAAAMzy5AAAAAAAAAAAwAAABkAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8QAMxAAAQQBAwMDAgUDBAMAAAAAAwABAgQFERMUBhASFTIzBzQgJDA1YBYXQCEiI0MxUHD/2gAIAQEAAQgA/wDfasvJl5MvJl5MvJl5MvJl5MvJl5MvJl5MvJl5MvJl5MvJl5MvJl5MvJl5MvJl5MvJlq38Dk+jI1hop7zM657Lnsuey57Lnsuey57Lnsuey57Lnsuey57Lnsuey57Lnsuey57Lnsuey57Lnso3md0E7STPq38CM+jIbtO6OEuLVXEqriVVxKq4lVcSquJVXEqriVVxKq4lVcSquJVXEqriVVxKq4lVcSquJVXEqriVVxKq4lVcSquLWb/wKelgsWG/+n6cyeL+LbhVuFW4VbhVuFW4VbhVuFW4VbhVuFW4VbhVuFW4VbhVuFW4VbhVuFW4VOQrM7uxCOzO3mReZF5kXmReZFuOzs0+05tBtX3CrcKtwq3CrcKtwq3CrcKtwq3CrcKtwq3CrcKtwqYs/LxXmReZF5kXmReZF5kRJNKLuwP3EXaVqTylEO/aW/aW/aW/aW/aW/aW/aW/aW/aW/aW/aW/aW/aW/aRLdgcHnPdsrdsrdsrdsrdsrdsoZ/OTwkh/dmQvb+nH5if4xPjkh/HH8RvjfuT5R/4DfP+MnvIgfuIu1H7WC1Wq1Wq1Wq1Wq1Wq1Wq1WqvP+Vn+Mv3IOw/uzIXt/Tj8xO969Wogc9j17N5Ccmxvrubx84tkqN+teAx68tfF/HCZg2QmcR6PUJLOWelKzlzwzIcaHVkcrBAQz4vIwyNZ7ENWWXvToUZ2R0bL2aYbE/wk9kkP449jdT14TJtWs3Tr0xWlj80K4eVYiN8cu5PlH+DqDIcLHzePT+Q5uPg8lYOOuAhyDzWfts56WGzDZGJIEx+WHesWAR1btq3dvn7O7RZ5Pjc5XyNkoAn6mrjIRhVrIbQIWAonvIgfuIu1J/y0FquqfUX6fvNjOnCYSfUFN+k+oyYSHUFx+rOlvUW6fotk+r+tsthc5WxOO/q36iIcpOOMpxnGTax1XXHVVnpujWs1RT8xwm+q1V1/wAtPsUowimYv908c0mPLP8AWVDDvUELprq+l1BOxXgi/cg7D+7Mhe39NvmJ3zWQNeuzeeVtkwuOq16WKtkzWOtV7uFyBqN2EhqRPS+obUkAT1K2LvrDty87fvPYFj5lPK9jGlewNoVjAxhUxdnKRx+EllKU7x8iG6Dpwgbs8O0sHHIEwNgtjFAIXLQybg3MdWzPUVmw1cNUZxgjGwp+ySH8cU7szavlgljjCwxEqxD4/F3sc9m3Z6jolKjfHLuX5B984DKuPeoHs2Tuz2AWbIHd6+DBlWHvX7leNqqWvIIepcTDaDjL1XJvZql6eoCnk7LvcFj53TyyWCsmniskGeBxhbwh2C9o/P26iuwHENGWHtUY5+ywbx6tURcPicRSlRx4q00T3kQP3EXam/5aC1WqpPd+nGdIO1de79R86MdXVfUMlwfXmJJQo5f6mzvVoXOpyW+petx9LPmcdL6f5rG3MVnql/I/UqxjafX2FHgukcVjBY+8/XfU4q9kcIDHEY9Vcf8ALT7XGqyqGjc+oFe+LAwHi67Ye1TpXcP0OSwLrXNAzaL9yDsP7syF7f0/+4nfqLByO73alPN0D040svczdAFOVLEdO4OQHa7bXUmKtXZALUyOLKXBiphwuNNVxhAmxlPN0oFqDwmMu16NytZxGPyEKtjG3K4eo6NclAFnF5B8FKrKVOy/T/DbB1j1MaIFhDrVxlIaHafskh/HHtLpuxCJa9U+CHKiCrWoYcobb3rqN8cu5fkH31ZlGtbyd0060q1vGXQzs6s6u1mtVS13rf1JjR8WGGxlwdw2Rv0KWUo5U7tjaeaxpDBFicXkK1fJBN09Ts06Dhs9ofP2IABXZy1sKKvkj3oh6ZuAnOYaNc1auwjonvIgfuIu1R/y8FqtV9QGe5ho4Wv9P2enhpYWxqupencze64xGVq6rqjpvOB6iD1R09LB9WdV5mlaz7dP5f8AuQ+bX1HwWVzeNqAxnUnR+UBksZmumK5CEAMhdVbf8vPtcqhuVD1Dv9NcnKrHESzPQ8bJsfcw3TPRz4e9ay19F+5B2H92ZC9v6f8A3EWq1Wqs42hafyPWxlCq/kDVarVarVarXtqtVqtVqtVqtVP2SQ/jj+I3xy7m+Qa1WqkzSi8XEIQRsMJRCMNxmizRi0W1Wq1Wq1Wq1Wq1UPn/ABk95ED9xF2qv/wQWq1WZwz5GVaxXw2GfHSs2LGq1Wq1Wq1Wq1Wq1Vp/+Cf4y/cg7D+7Mhe39MmsCPJ92C3YLdgt2C3YLdgt2C3YLdgt2C3YLdgt2C3YLdgt2C3YLdgt2C3YLdgpFg8XZQKNoRZ94a3hreGt4a3hqc2I3hDsaL/7ZtuwW7BbsFuwW7BbsFuwW7BbsFuwW7BbsFuwW7BbsFAkN15LeGt4a3hreGt4a3hqer+U3B+4i7Rlx22i8oK5QVygrlBXKCuUFcoK5QVygrlBXKCuUFcoK5QUewKYpRjzKy5lZcysuZWXMrLmVlGW8eE4of3ZkL2/wI3tQP3EX+UP7syF7f4EVtWX+gbMDSfKgZerAXqwF6sBerAXqwF6sBerAXqwF6sBerAXqwF6sBerAXqwF6sBerAXqwF6sBerAXqwF6sBerAXqwE2VA6DDyNMjQbRv4E7aqYWknqRXDiuHFcOK4cVw4rhxXDiuHFcOK4cVw4rhxXDiuHFcOK4cVw4rhxXDiuHFcOK4cVw4pqkWUBNFM2n/wBB/8QASxAAAgEBAwYJCAcECAcAAAAAAQIDAAQREhATISKisQUxUWFikZKh0RQjMkFCUrLSIDAzU3FygkBDYMEGJERjcHOB8BUWJTSjs8L/2gAIAQEACT8A/wAHDRo0aNGjRo0aNGjRo0aNGjRo0aNGjR/gUBlN94OkeiahTsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqGPsjwqFOyPCtADsABzH6wFm47hUe0Kj2hUe0Kj2hUe0Kj2hUe0Kj2hUe0Kj2hUe0Kj2hUe0Kj2hUe0Kj2hUe0Kj2hUe0Kj2hUe0Kj0Dj1hUeg6eMVH3io+8VH3io+8VH3ilK3+vjGXTfoAHGaj7xUe0Kj2hUe0Kj2hUe0Kj2hUe0Kj2hUe0Kj2hUe0Kj2hUe0Kj2hUetdfdfUfeKj7xUfeKj7xUfeKj7xWi7jBrpfC2SIyYTcWvCi/8TVm2xVm2xVm2xVm2xVm2xVm2xVm2xVm2xVm2xVm2xVm2xVm2xVm2xVm2xVnuUcZxjwqDbFQbYqDbFQbYqDbFQbYpSjgX3H1jmyfeN8R+s6O79m5DurkG76XNvy9Ld+we5/P6fNurpfC2Tn3n6/m3j6fT3ZPvG+I/WdHdla5RoAGlmPuqKs4VF0YrgxH5nfzdWcOjaMVwUn8rp5umvXiZToZT7rCrsV2i/ivqNY5YbtC3+u8Nx+7dUaiEs6xuL7zhvK36btIWkVlcKZGN94vvZrrj93kF4jVnI5cIxUhjAYphJv4gD/PIodlKgK3FpN3qoBWlQMVHFeeT6XIa5BuyWeWazxNhktCDUBq+QT/Yoo1mP4dH2qiks1qUYs1KLiR0cnNvy9Ld9A3TS+bj5Rf6TfpWjfNF5uTlN3ot+pchuSNSzXcgqxIbMCcJbSTdz40xfoWo81aYftE9XJeL/hqMobObixIN+kr/APP0vc/nkNwGkk8lIwEYLBzdcwvw8VWeWaGE4ZZ0GqD/AL96mxRSC9Tk5t1dL4Wyc+85Mflub83m/tLrxnc1/e5nOZvp08rWIQSHhnEZTHpA8lznlH9qzwf0PYzlPKtiMEZ4GwmUR6AfKs35P/as8U9P2M3WPy3N+czn2l15zWd/vczm8506scVqe0wo6B8WMu8kkQRcDL92tf0cHZk+ehhYgFhyG7TRBB4iDeMkMc7TSmJhITcAFLewRyVoLKCR+Iy828ZGCRRqXkc6AFUYmY/gK4Ntg4JaTNLwiU82T/v2cec6FQy8IWy3LjstmswxMyHik/K3satQy2O32T/uLJOLnAvw3j9Wq2Tp7sn3jfEfrObdlBRIyUjjPsgH19NvaoBS4IMl191wBZtPtOzUAxQACS66+8Eq2j2kZaBdJCEkjHtAn1dNfZyaI5onkX/Vc9/7I2WtGKdjIeYlV+BHrSsZKIfxOBf/ABx1bXtNrJObWzgkA8l7rh7NSORZyXjIOnQhYIb79SixmQOioTqewynDy4qtDm1SFs0SdF66NfQT6Xu04klR1CuCWvXEt2IsFqaRrQkYaNbxgVAdCAXX+jTFpNZSx4zhYqL/APSpsEqaTFhVgw5satr1MTKTdhzcYuu48Wpq4alz03tyXBRfzKoXVychrkG6tA9dLB5EVZrTgIJ0XYsF2p6A1qiMgsZOKAm9iQwZttKs5szFblRjexW58TNxcrZObfl6W7LO4wjXgW4Ej3kN2K/o1K8pXixsWu7VSvEW48DFb+zU7nENSBriQPec3Yr+jRuEqlb+S/10i2izKSVUaw0m/QNSWrMLLa3VhKyAKzAm59bDiD4j7VM48lfzdx49Zl19GtxVbXmlLERxWcE4dJ1L3XBq07MsMZzYbjGJXvGxU7LDZ5b44hpvYYXZjl9z+eSTMpaj56bTqxD0wLvaf0acCCVFjs9wNxuCao7NQZy02jEJEUlguIYXZ2YnWw9mjidQS5HFexxG7ryc26ul8LZOfecqG0cB8IFR5So1rkxYG/zYs42ci/eexSGz8B8Hlh5Sw1rnw42/zZc2ubi/d+3kjEttSGA2aNvRaQTzZtW1k9JunXBNmjsjSotokW69YywErL/Wm0qnRq0PZ+DIFDTiM3Yjm/KHbkZsLLEmL0PTq0yvYbWxW0WeVgbwhTOK2BUVsSSeb1PNvVqayG0xokkwvOGPydHlwgEaWRcNStMkVpc5xgATjEkh0D81TtZuCrFHjhsYYq8oXCrXlfbk9KT3Ivs/vKULGgCooFwAGgAZObeMmDyRkZZ84QEwMML4y2jDhqOy/wDJ8RjeQWUjO3mQ4sDa8WbzrrrRr9p6dJZf+NrYUHBS2phnUjwHNo6qc7gUM+PB06jw/wBIJUDs8ZGZzXm2wxqPeVoXXW9Dp5OnuyfeN8R+s5t2Vb5f3sY426a9Koyc3cA5BPFoF+HXR1qMjOXgvcRx6Ddi13dqW6X9zGeNem3SyJjkUMji9V1eNfSK9KlxTwiMqt4F7DVfSdX2noZu0TFy2kEi8YF0rf8AmqyxgyMf60zC4AjD6tZveWo820wIRsSsDepT2GaoRHZpFciYMCcTYVA1T+qoFdGLYJgRoxcZVsS3frp2tNsdldsT33aRqq0h9FQKT+s5kJgvHpcmK/DS4JVLXreDxsSNKkjJGqyy3ZxwNJuy8hrkG7JbmisUxJeErfdfxjFiFTPA9mN8Uo0m86WxgYfSarQbVasOBGuwhRzZObfl6W76EZcyOzE8SjEb9ZuIVGUMbqwPGpwm/VbiORiucW4MPUeMHrqzpaI1JwOTfx6feRsP5quW0SggRrcbrzpJu/Lq1CHstpc4psQ0LezBsN9/tVZUkMhGG0swuA97jxYehUWtOhETBlIYgOvvauLH7VJgkMjNhvB0EL7pbky+7/PJGrkcRZQbuumUiUXJFgACEXaytf0fdrhNo3kN7ssdxJ49PnKnNpkBJMrC4m8/i2Tm3V0vhbJz7zliM/CXCUirY4xdoMLLPNIzuVWNUiVlxdOojBwlwbIy2yM3aTMzTwyK6FlkV4mVcXQyWfOWCyiATzY41w5uaSV9R3WRsKMvopkVZrWoC2izOQMVy5rFrMisjQ6jLjx+5VlTg/g2xHEIQwJbSGdVXFI+KXAis7YNSrP/ANMKYfKMacfk+Z+zx537TV+zqDPyxTF3XGiXLgZb75WQcdWdRbLMqJPZ1ZI182uFG12jRlaPzEut6FRmGVlBeEkMUYjWQshZGw9HJzbxkGKC0RtFKvFergo3ca4flPACvjFkzQx3YseDOY+XW9zHr5mra3Bdv4NhFms8qrnFMSgqkbqSvvtrbFW1uEeF7WMMloZcAC6pKqt7e4nYydPdk+8b4j9ZzbvoQI7e9dc3aW5qgRG9TXXt2mvb9h5DXIN30ubfl592XSCLj+BpAkY4lUXCkDxnjVheK0AC4fgPqvd/n9Pm3V0vhbJz7zltLWLhCxMz2W1IofDjGCVHifVkjkWrS1t4QtrK9qtTqExYBgiRIk1Y441+r5t4+n092T7xviP1g1Wu08l1HfR30d9HfR30d9HfR30d9HfR30d9HfR30d9HfR30d9HfR30d9HjFHSAOWm7jTdxpu403cabuNab+M+oZRfhvvH40aO+jvo76O+jvo76O+jvo76O+jvo76O+jvo6MN3fTdxpu403cabuNN3Gj3Ghdi4h+FdL4WyAgKTc1xuI46buNN3Gm7jTdxpu403cabuNN3Gm7jTdxpu403cabuNN3GmvJu9R5afuPhT9x8KfuPhT9x8KfuPhT9x8KBEcYOsRdeTo0ZPvG+I/wJ0vhb9q+8b4j/AgJC33gcekEVHJ1D5qjk6h81RydQ+ao5OofNUcnUPmqOTqHzVHJ1D5qjk6h81RydQ+ao5OofNUcnUPmqOTqHzVHJ1D5qjk6h81RydQ+ao5OofNUcnUPmqOTqHzVHJ1D5qjk6h81RydQ+ao5OofNUcnUPmqOTqHzVHJ1D5qFwdiwv5zf/AooUKFChQoUKFChQoUKFChQoUKFChQ/xD//xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAECAQE/ADBf/8QAFBEBAAAAAAAAAAAAAAAAAAAAoP/aAAgBAwEBPwAwX//Z"}}]);