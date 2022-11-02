"use strict";(self.webpackChunkform_builder_documentation=self.webpackChunkform_builder_documentation||[]).push([[963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={description:"Check minimum required versions to use Form Builder"},a="Technical requirements (versions)",s={unversionedId:"technical-requirements",id:"technical-requirements",title:"Technical requirements (versions)",description:"Check minimum required versions to use Form Builder",source:"@site/docs/technical-requirements.mdx",sourceDirName:".",slug:"/technical-requirements",permalink:"/form-builder-documentation/technical-requirements",draft:!1,tags:[],version:"current",frontMatter:{description:"Check minimum required versions to use Form Builder"},sidebar:"docs",previous:{title:"Supported technologies/stack",permalink:"/form-builder-documentation/supported-stack"},next:{title:"Translations (i18n)",permalink:"/form-builder-documentation/translations"}},l={},c=[{value:"Prerequistences",id:"prerequistences",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"FAQ",id:"faq",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"technical-requirements-versions"},"Technical requirements (versions)"),(0,o.kt)("h2",{id:"prerequistences"},"Prerequistences"),(0,o.kt)("p",null,"Node.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ node --version\nv14.20.0\n")),(0,o.kt)("p",null,"npm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm --version\n6.14.17\n")),(0,o.kt)("p",null,"Our current implementation requires Node.js and npm versions as listed above. Choosing them will help you to eliminate issues related to the installation of the package and its\u2019 usage."),(0,o.kt)("p",null,"Our work is underway to provide the possibility to use newer versions of the runtime environment and package manager, stay tuned."),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"FormBuilder is a tool that has a couple of external dependencies. All of them are listed below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ajv@7.1.1\najv-errors@2.0.0\najv-formats@1.5.1\nclassnames@2.2.6\nreact@17.0.2\nreact-dnd@14.0.4\nreact-dnd-html5-backend@14.0.2\nreact-dnd-mouse-backend@1.0.0-rc.2\nreact-dnd-multi-backend@6.0.2\nreact-dnd-touch-backend@14.1.1\nreact-dom@17.0.2\nreact-popper@1.3.11\nuniforms@3.4.0\nuniforms-bridge-json-schema@3.4.0\n")),(0,o.kt)("p",null,"The versions presented above are the recommended ones that we are sure will work for you. Although, all of them with minor updates  (",(0,o.kt)("inlineCode",{parentName:"p"},"^")," operator) should also do the trick.\nIt\u2019s also important to note that the dependencies mentioned above are not \u201cbuilt-in\u201d with FormBuilder and must be installed manually."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("admonition",{title:"What version of React we are supporting?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Currently we support React 17.")),(0,o.kt)("admonition",{title:"What version of uniforms is required?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"3.4.0 or higher")),(0,o.kt)("admonition",{title:"How can technical requirements change in the future?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"React and uniforms are the foundations of FormBuilder and it\u2019s unquestionable that they always will be. Packages and their versions might be changed in the future.")),(0,o.kt)("admonition",{title:"How can I make sure that FB is compatible?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Check your npm, Node.js, React, and other packages' versions.")))}d.isMDXComponent=!0}}]);