"use strict";(self.webpackChunkforminer=self.webpackChunkforminer||[]).push([[930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={description:"Quick start"},o="Installation",l={unversionedId:"installation",id:"installation",title:"Installation",description:"Quick start",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,tags:[],version:"current",frontMatter:{description:"Quick start"},sidebar:"docs",previous:{title:"Technical requirements",permalink:"/docs/technical-requirements"},next:{title:"Form Definition",permalink:"/docs/form-definition"}},c={},p=[{value:"Unzip the Forminer package and add it to your project",id:"unzip-the-forminer-package-and-add-it-to-your-project",level:2},{value:"Install required dependencies",id:"install-required-dependencies",level:2},{value:"Deep dive",id:"deep-dive",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The Forminer installation process is pretty straightforward and requires only a few steps."),(0,a.kt)("h2",{id:"unzip-the-forminer-package-and-add-it-to-your-project"},"Unzip the Forminer package and add it to your project"),(0,a.kt)("p",null,"The Forminer code will be delivered to you as a zip file. Unzip it and copy it into the project. We suggest creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"packages")," directory for locally installed NPM packages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install ./packages/forminer\nyarn add file:./packages/forminer\npnpm add ./packages/forminer\n")),(0,a.kt)("h2",{id:"install-required-dependencies"},"Install required dependencies"),(0,a.kt)("p",null,"You should install one of the selected ",(0,a.kt)("a",{parentName:"p",href:"https://uniforms.tools/"},"uniforms")," themes that match your needs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install uniforms-???@3.10.2\n")),(0,a.kt)("h2",{id:"deep-dive"},"Deep dive"),(0,a.kt)("p",null,"If you want to learn more about the Forminer integration process, please check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/integration"},"Integration deep dive")," page."))}d.isMDXComponent=!0}}]);