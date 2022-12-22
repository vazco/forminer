"use strict";(self.webpackChunkform_builder_documentation=self.webpackChunkform_builder_documentation||[]).push([[591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={description:"How to translate the FormBuilder UI and forms itself"},i="Translations (i18n)",l={unversionedId:"translations",id:"translations",title:"Translations (i18n)",description:"How to translate the FormBuilder UI and forms itself",source:"@site/docs/translations.mdx",sourceDirName:".",slug:"/translations",permalink:"/form-builder-documentation/translations",draft:!1,tags:[],version:"current",frontMatter:{description:"How to translate the FormBuilder UI and forms itself"},sidebar:"docs",previous:{title:"Handling lists",permalink:"/form-builder-documentation/handling-lists"}},s={},p=[{value:"Translating the FormBuilder interface",id:"translating-the-formbuilder-interface",level:2},{value:"Translating the forms",id:"translating-the-forms",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"translations-i18n"},"Translations (i18n)"),(0,a.kt)("p",null,"We can think about this topic from two sides, depending on the user's perspective:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"The FormBuilder interface"),", facing the users who create forms.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"The form view"),", for the users who are filling the forms built with FormBuilder."))),(0,a.kt)("p",null,"As it also impacts the way how it's handled in the code, we'll split this document into two sections."),(0,a.kt)("h2",{id:"translating-the-formbuilder-interface"},"Translating the FormBuilder interface"),(0,a.kt)("p",null,"The FormBuilder UI (labels, titles, tooltips, etc.) is completely translatable with a centralized i18n system. At its core is the ",(0,a.kt)("inlineCode",{parentName:"p"},"Translations")," type, defining all of the required strings (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"StyleTooltip"),") and formatters (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"RemovePageConfirmation"),"). Once you have a complete ",(0,a.kt)("inlineCode",{parentName:"p"},"Translations")," object, pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"FormBuilder")," component in the ",(0,a.kt)("inlineCode",{parentName:"p"},"translations")," prop:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { NS } from '../FormBuilder/const/namespace';\nimport { Translations } from '../FormBuilder/const/types';\n\nconst translations: Translations = {\n  // ...\n  RemovePageConfirmation(pageNumber) {\n    return `Are you sure you want to remove entire Page ${pageNumber}? Your fields might be lost.`;\n  },\n  StyleTooltip:\n    'Define CSS styles to be used in rendered container of the field.JSON format',\n};\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("inlineCode",{parentName:"p"},"example-demo/lib/translations.tsx")," for an example configuration to start with."),(0,a.kt)("h2",{id:"translating-the-forms"},"Translating the forms"),(0,a.kt)("p",null,'While there\'s no built-in way of doing that, you can treat the translatable values (labels, placeholders, etc.) as translation keys. For example: instead of using the first name field\'s label as "First name", use "labels.firstName". Then, you can use it in one of these two ways:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Translate them directly ",(0,a.kt)("strong",{parentName:"p"},"in the components"),". This requires you to provide custom field and widget components but also gives you the most flexibility.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Translate them ",(0,a.kt)("strong",{parentName:"p"},"in the form definition"),". As the form definition is simply a JSON object (as described in ",(0,a.kt)("a",{parentName:"p",href:"form-definition"},"Form definition"),"), you can modify it freely before passing it down to the ",(0,a.kt)("inlineCode",{parentName:"p"},"FormBuilder")," component. That means you could translate all of the values up front and render a translated form. This requires some additional code but is seamless from the FormBuilder perspective."))),(0,a.kt)("p",null,"In both scenarios, as the labels are provided as-is, you can use any tool to actually translate them. To visualize this example better, here's a code sample translating the labels using an external library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"}," <Form\n   components={components}\n   containers={containers}\n-  definition={definition}\n+  definition={translateModel(definition)}\n   widgets={widgets}\n   translations={translations}\n />\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import translate from 'some-i18n-library';\n\nfunction translateModel(model: Model) {\n  return {\n    ...model,\n    views: model.views.map(view => ({\n      ...view,\n      label: translate(view.label),\n    })),\n  };\n}\n")),(0,a.kt)("p",null,"Of course, you can translate other fields too, as well as provide the translations with more context, e.g., the field's name or used component."))}c.isMDXComponent=!0}}]);