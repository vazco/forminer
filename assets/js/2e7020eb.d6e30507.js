"use strict";(self.webpackChunkforminer=self.webpackChunkforminer||[]).push([[281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),m=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||s;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var m=2;m<s;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>m});var o=n(7462),r=(n(7294),n(3905));const s={description:"Learn how to apply custom styles to UI components for a tailored design experience."},i="Styling form components",a={unversionedId:"styling-form-components",id:"styling-form-components",title:"Styling form components",description:"Learn how to apply custom styles to UI components for a tailored design experience.",source:"@site/docs/styling-form-components.mdx",sourceDirName:".",slug:"/styling-form-components",permalink:"/docs/styling-form-components",draft:!1,tags:[],version:"current",frontMatter:{description:"Learn how to apply custom styles to UI components for a tailored design experience."},sidebar:"docs",previous:{title:"Integration deep dive",permalink:"/docs/integration"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},c={},m=[{value:"Implementing custom theme",id:"implementing-custom-theme",level:2},{value:"Using CSS classes",id:"using-css-classes",level:2},{value:"Customizing field styles in the editor",id:"customizing-field-styles-in-the-editor",level:2}],l={toc:m};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"styling-form-components"},"Styling form components"),(0,r.kt)("p",null,"There are multiple ways to style Forminer's components. The most common way to customize the look of the form is to custom theme of ",(0,r.kt)("a",{parentName:"p",href:"https://uniforms.tools/"},"uniforms")," package. There are also other ways to customize the look of the form, such as using CSS styles."),(0,r.kt)("h2",{id:"implementing-custom-theme"},"Implementing custom theme"),(0,r.kt)("p",null,"Forminer uses ",(0,r.kt)("inlineCode",{parentName:"p"},"uniforms")," package to render forms. You can change the theme of components in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Forminer")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Form")," components. To do so, you need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," prop to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Forminer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Form")," components. Creating custom theme is described in the ",(0,r.kt)("a",{parentName:"p",href:"https://uniforms.tools/docs/tutorials-creating-custom-theme/"},"uniforms documentation"),". Imported theme can be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"createDefaultComponents")," function to generate the components definitions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Form, Forminer } from 'forminer';\nimport * as theme from './uniforms-custom-theme';\n\nconst components = createDefaultComponents(theme);\n\nreturn (\n  <>\n    <Forminer components={components}>\n    <Form\n      components={components}\n      /* the rest of required props */\n    />\n  </>\n)\n")),(0,r.kt)("h2",{id:"using-css-classes"},"Using CSS classes"),(0,r.kt)("p",null,"You can also use CSS classes to customize the look of fields. If you have imported stylesheet files into your project, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," prop to apply custom styles to the fields. Forminer editor allows you to pass custom properties to the fields, which can be used to set CSS classes. Setting custom property is available in the edit field view."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting custom property",src:n(7349).Z,width:"618",height:"276"})),(0,r.kt)("h2",{id:"customizing-field-styles-in-the-editor"},"Customizing field styles in the editor"),(0,r.kt)("p",null,"The additional feature in the editor is setting independent styles for each field. It is available in the same view as the custom properties - edit field view."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting custom styles",src:n(4799).Z,width:"606",height:"418"})))}p.isMDXComponent=!0},7349:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/custom-class-name-ce9bc0d7048c185a45b6f73381a9204b.png"},4799:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/custom-styles-bd88210aa082f44b352bb87933cb66de.png"}}]);