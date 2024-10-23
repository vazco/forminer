"use strict";(self.webpackChunkforminer=self.webpackChunkforminer||[]).push([[860],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(h,a(a({ref:n},u),{},{components:t})):r.createElement(h,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={description:"Check minimum required versions to use Forminer"},a="Technical requirements",s={unversionedId:"technical-requirements",id:"version-1.0.0/technical-requirements",title:"Technical requirements",description:"Check minimum required versions to use Forminer",source:"@site/versioned_docs/version-1.0.0/technical-requirements.mdx",sourceDirName:".",slug:"/technical-requirements",permalink:"/docs/1.0.0/technical-requirements",draft:!1,tags:[],version:"1.0.0",frontMatter:{description:"Check minimum required versions to use Forminer"},sidebar:"docs",previous:{title:"Supported technologies",permalink:"/docs/1.0.0/supported-stack"},next:{title:"Installation",permalink:"/docs/1.0.0/installation"}},l={},c=[{value:"Prerequistences",id:"prerequistences",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"FAQ",id:"faq",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"technical-requirements"},"Technical requirements"),(0,o.kt)("h2",{id:"prerequistences"},"Prerequistences"),(0,o.kt)("p",null,"Node.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ node --version\nv14.20.0\n")),(0,o.kt)("p",null,"npm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm --version\n6.14.17\n")),(0,o.kt)("p",null,"Our current implementation requires Node.js and npm versions as listed above. Choosing them will help you to eliminate issues related to the installation of the package and its' usage."),(0,o.kt)("p",null,"Our work is underway to provide the possibility to use newer versions of the runtime environment and package manager, stay tuned."),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"Forminer is a tool that has a couple of external dependencies. All of them are listed below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ajv@7.1.1\najv-errors@2.0.0\najv-formats@1.5.1\nclassnames@2.2.6\nreact@17.0.2\nreact-dnd@14.0.4\nreact-dnd-html5-backend@14.0.2\nreact-dnd-mouse-backend@1.0.0-rc.2\nreact-dnd-multi-backend@6.0.2\nreact-dnd-touch-backend@14.1.1\nreact-dom@17.0.2\nreact-popper@1.3.11\nuniforms@3.4.0\nuniforms-bridge-json-schema@3.4.0\nuniforms-???@3.4.0 // One of the uniforms themes.\n")),(0,o.kt)("p",null,"The versions presented above are the recommended ones that we are sure will work for you. Although, all of them with minor updates (",(0,o.kt)("inlineCode",{parentName:"p"},"^"),' operator) should also do the trick.\nIt\'s also important to note that the dependencies mentioned above are not "built-in" with Forminer and must be installed manually.'),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("admonition",{title:"What version of React we are supporting?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Currently we support React 17.")),(0,o.kt)("admonition",{title:"What version of uniforms is required?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"3.4.0 or higher")),(0,o.kt)("admonition",{title:"How can technical requirements change in the future?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"React and uniforms are the foundations of Forminer and it's unquestionable that they always will be. Packages and their versions might be changed in the future.")),(0,o.kt)("admonition",{title:"How can I make sure that Forminer is compatible?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Check your npm, Node.js, React, and other packages' versions.")))}p.isMDXComponent=!0}}]);