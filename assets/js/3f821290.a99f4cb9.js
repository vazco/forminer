"use strict";(self.webpackChunkform_builder_documentation=self.webpackChunkform_builder_documentation||[]).push([[364],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(h,i(i({ref:t},p),{},{components:r})):o.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={description:"Check what technology stack is required to use the Form Builder"},i="Supported technologies",s={unversionedId:"supported-stack",id:"supported-stack",title:"Supported technologies",description:"Check what technology stack is required to use the Form Builder",source:"@site/docs/supported-stack.mdx",sourceDirName:".",slug:"/supported-stack",permalink:"/form-builder-documentation/supported-stack",draft:!1,tags:[],version:"current",frontMatter:{description:"Check what technology stack is required to use the Form Builder"},sidebar:"docs",previous:{title:"Form Builder Docs",permalink:"/form-builder-documentation/"},next:{title:"Technical requirements",permalink:"/form-builder-documentation/technical-requirements"}},l={},c=[{value:"Other libraries/frameworks",id:"other-librariesframeworks",level:2},{value:"FAQ",id:"faq",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"supported-technologies"},"Supported technologies"),(0,n.kt)("p",null,"FormBuilder's primary requirement is to use ",(0,n.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),". The components for that tool are written within this library and are built to use ",(0,n.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," and ",(0,n.kt)("a",{parentName:"p",href:"https://sass-lang.com/"},"Sass"),". You're good to go if your current application already uses TypeScript and Sass. If not, you may need to configure your bundler (e.g., ",(0,n.kt)("a",{parentName:"p",href:"https://parceljs.org/"},"Parcel"),", ",(0,n.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack"),", etc.) to handle such files. Another option is to transpile (translate) all of the code manually, before incorporating it into your project."),(0,n.kt)("h2",{id:"other-librariesframeworks"},"Other libraries/frameworks"),(0,n.kt)("p",null,"If you're using another frontend framework it's not all lost! In any major frontend framework like Angular, Vue, Svelte, Ember, and many more there is a possibility to ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react"},"install React"),". After doing that next step would be to check React documentation on how to implement it correctly in your app - ",(0,n.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/integrating-with-other-libraries.html#integrating-with-other-view-libraries"},"Integrating with Other View Libraries"),"."),(0,n.kt)("p",null,"One of real life examples: you can create a simple React-based app (e.g. with ",(0,n.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),") that will be used by forms creators, and use an application built with Angular for your customers that uses React and render the proper forms within it."),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("admonition",{title:"Can I use it on the project with Angular/Svelte/Vue?",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Yes, as per the explanation above")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"What are the technological limitations of Form Builder - with what stack it will work? ",(0,n.kt)("br",null)," What are possible workarounds for other technologies? What is not possible at all?"),(0,n.kt)("p",{parentName:"admonition"},"If you are able to install and use React with your current project then it's possible to use Form Builder. Please also check the dependencies section of technical documentation.")))}u.isMDXComponent=!0}}]);