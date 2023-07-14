"use strict";(self.webpackChunkforminer=self.webpackChunkforminer||[]).push([[237],{6906:(e,t,a)=>{a.d(t,{GA:()=>l,W5:()=>r});var n=a(7379);const r=n.css`
  border-radius: 8px;
`,i=n.css`
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
`,l=n.css`
  ${r}
  ${i}
`},4242:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ba});var n=a(9960),r=a(7676),i=a(7294),l=a(3457),o=a(7379),s=a(4968),m=a(8770),c=a(7704);const d=(0,a(605).Jq)({xs:"0",sm:"576px",md:"768px",lg:"1024px",xl:"1360px",xxl:"1920px"}),p=o.css`
  font-size: ${(0,m.hO)("40px")};
  line-height: ${(0,m.hO)("50px")};

  ${d.greaterThan("md")`
    font-size: ${(0,m.hO)("54px")};
    line-height: ${(0,m.hO)("64px")};
  `}
`,x=o.css`
  font-size: ${(0,m.hO)("26px")};
  line-height: ${(0,m.hO)("36px")};

  ${d.greaterThan("md")`
    font-size: ${(0,m.hO)("40px")};
    line-height: ${(0,m.hO)("50px")};
  `}
`,h=o.css`
  font-size: ${(0,m.hO)("20px")};
  line-height: ${(0,m.hO)("30px")};

  ${d.greaterThan("md")`
    font-size: ${(0,m.hO)("28px")};
    line-height: ${(0,m.hO)("38px")};
  `}
`,u=(0,s.Z)({breakpoints:{values:{xs:0,sm:576,md:768,lg:1024,xl:1360}},palette:{primary:{main:"#1074ef"}}}),k={color:{primary:"#1074ef",darkBlue:"#0d5dbf",body:"#000000",grey:"#fafafb",darkGrey:"#f4f5f6",white:"#fff"}},f=o.createGlobalStyle`
${c.Fv}
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
*, *:before, *:after {
  box-sizing: inherit;
}
main {
  font-family: 'Muli', sans-serif;
  font-weight: 300;
  color: ${k.color.body};
  overflow-x: hidden;
  
  h1, h2, h3, h4, h5 {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  margin-top: 0;
}

h1, h2, h3 {
  margin-bottom: ${(0,m.hO)("24px")};
}

h4, h5 {
  margin-bottom: ${(0,m.hO)("20px")};
}

h1 {
  ${p}
}
h2 {
  ${x}
}
h3 {
  ${h}
}
h4 {
  font-size: ${(0,m.hO)("18px")};
  line-height: ${(0,m.hO)("28px")};

  ${d.greaterThan("md")`
    font-size: ${(0,m.hO)("24px")};
    line-height: ${(0,m.hO)("34px")};
  `}
}
h5 {
  font-size: ${(0,m.hO)("16px")};
  line-height: ${(0,m.hO)("26px")};

  ${d.greaterThan("md")`
    font-size: ${(0,m.hO)("20px")};
    line-height: ${(0,m.hO)("30px")};
  `}
}

p, a, ul, ol {
  font-size: ${(0,m.hO)("16px")};
  line-height: ${(0,m.hO)("26px")};

  ${d.greaterThan("md")`
    font-size: ${(0,m.hO)("19px")};
    line-height: ${(0,m.hO)("29px")};
  `}
}

p {
  margin-top: 0;
  margin-bottom: ${(0,m.hO)("24px")};
}

a {
  font-weight: 500;
  color: ${k.color.primary};
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
}

small {
  font-size: ${(0,m.hO)("14px")};
  line-height: ${(0,m.hO)("24px")};
}

strong {
  font-weight: 500;
}
}
`,g=e=>{let{children:t}=e;return i.createElement(l.Z,{theme:u},i.createElement(f,null),i.createElement(o.ThemeProvider,{theme:k},i.createElement("main",null,t)))};var y=a(5742);const E=JSON.parse('{"TN":"Forminer | Build Forms in React the way you need","WL":"Check how Forminer can solve your issues with forms in React. Enjoy your saved time by using conditional field validation, WYSIWYG form editor and more straight from the start and take your business to another level.","vu":"index, follow"}'),b=()=>i.createElement(y.Z,null,i.createElement("title",null,E.TN),i.createElement("meta",{name:"description",content:E.WL}),i.createElement("meta",{property:"robots",content:E.vu}));var A=a(8920),v=a(1437),w=a(1749);const B=o.default.div`
  max-width: 1360px;
  margin: 0 auto;
  ${d.lessThan("xl")`
    padding-left: 16px;
    padding-right: 16px;
  `}
`,G=e=>{let{children:t,id:a,className:n,wide:r=!1}=e;return i.createElement(B,{id:a,className:n,wide:r},t)};var D=a(3192);const V=o.default.section`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0;
  min-height: calc(100vh - 60px);
  ${e=>{let{bgColor:t}=e;return t&&o.css`
      background-color: ${t};
    `}};
`,S=(0,o.default)(G)`
  width: 100%;
  padding: 0 16px;
  overflow: hidden;
  position: relative;
`,O=(0,o.default)(w.Z)`
  && {
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }
`,T=o.default.div`
  padding-top: 20px;
  ${d.greaterThan("md")`
    padding: 0 24px 0 0;
  `}
`,j=(0,o.default)(w.Z)`
  && {
    width: 100%;
    padding-bottom: 16px;
    ${d.greaterThan("md")`
    min-width: 700px;
    padding-top: 16px;
    
  `}
    ${d.greaterThan("lg")`
    min-width: 1000px;
  `}
  }
`,z=o.default.img`
  max-width: 100%;
  height: auto;
`,Z="#0d5dbf",P=e=>{let{children:t}=e;const a=(0,A.Z)(),n=(0,v.Z)(a.breakpoints.up("md")),r=(0,v.Z)(a.breakpoints.up("lg"));return i.createElement(V,{bgColor:Z},i.createElement(S,{bgColor:Z},i.createElement(j,{direction:"row-reverse",alignItems:"start",container:!0},!r&&i.createElement(w.Z,{xs:12,sm:12,md:12,lg:6,item:!0},i.createElement(T,{reversed:!0},t)),n&&i.createElement(O,{xs:12,sm:12,md:12,lg:6,item:!0},i.createElement(z,{src:D.default,alt:"Forminer - Build form in React without any problems"})),r&&i.createElement(w.Z,{xs:12,sm:12,md:12,lg:6,item:!0},i.createElement(T,{reversed:!0},t)))))};var F=a(308),I=a.n(F);const M=o.css`
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;
`,L=o.css`
  cursor: pointer;
  font-weight: 700;
  min-width: 180px;
  padding: 16px;
  border-radius: 32px;
  transition: all 0.2s ease-out;
  &:hover {
    text-decoration: none;
  }

  ${e=>{let{theme:t,variant:a,reversed:n}=e;return n&&"solid"===a?o.css`
        background-color: ${t.color.primary};
        color: ${t.color.white};
        border: 2px solid white;
        &:hover {
          background-color: ${t.color.white};
          color: ${t.color.primary};
          border: 2px solid ${e=>{let{theme:t}=e;return t.color.primary}};
        }
      `:"solid"===a?o.css`
        background-color: ${t.color.white};
        color: ${t.color.primary};
        border: 2px solid ${t.color.white};
        &:hover {
          background-color: inherit;
          color: ${t.color.white};
        }
      `:"outlined"===a?o.css`
        color: ${t.color.white};
        border: 2px solid ${t.color.white};
        &:hover {
          background-color: ${t.color.white};
          color: ${t.color.primary};
        }
      `:o.css``}}

  ${e=>{let{size:t}=e;return"md"===t?o.css`
        font-size: ${(0,m.hO)("16px")};
        line-height: ${(0,m.hO)("26px")};
      `:"sm"===t?o.css`
        font-size: ${(0,m.hO)("14px")};
        line-height: ${(0,m.hO)("24px")};
      `:"lg"===t?o.css`
        font-size: ${(0,m.hO)("18px")};
        line-height: ${(0,m.hO)("28px")};
      `:o.css``}}
`,K=o.default.button`
  ${M}
  ${L}
`,Q=e=>{let{children:t,className:a,disabled:n=!1,onClick:r=I(),reversed:l=!1,size:o="md",type:s="button",variant:m="solid"}=e;return i.createElement(K,{className:a,disabled:n,onClick:r,reversed:l,size:o,type:s,variant:m},t)};var Y;function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},N.apply(this,arguments)}const H=e=>{let{title:t,titleId:a,...n}=e;return i.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:39,height:39,viewBox:"0 0 39 39",role:"img","aria-labelledby":a},n),t?i.createElement("title",{id:a},t):null,Y||(Y=i.createElement("g",{fill:"none",transform:"translate(2 2)"},i.createElement("ellipse",{cx:17.723,cy:17.723,stroke:"#1074EF",strokeWidth:3,rx:17.723,ry:17.711}),i.createElement("path",{fill:"#1074EF",d:"m16.302 27.144-8.38-6.528 2.383-3.058 5.146 4.009 8.492-12.255 3.187 2.207z"}))))};var R;function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},C.apply(this,arguments)}const W=e=>{let{title:t,titleId:a,...n}=e;return i.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",width:39,height:39,viewBox:"0 0 39 39",role:"img","aria-labelledby":a},n),t?i.createElement("title",{id:a},t):null,R||(R=i.createElement("g",{fill:"none",transform:"translate(2 2)"},i.createElement("ellipse",{cx:17.723,cy:17.723,stroke:"#fff",strokeWidth:3,rx:17.723,ry:17.711}),i.createElement("path",{fill:"#fff",d:"m16.302 27.144-8.38-6.528 2.383-3.058 5.146 4.009 8.492-12.255 3.187 2.207z"}))))},q=o.default.ul`
  list-style-type: none;
  padding: 0;
  margin-top: ${(0,m.hO)("24px")};
  &:last-child {
    margin: 0;
  }
`,U=(0,o.default)(W)`
  content: '';
  position: absolute;
  left: 0;
  width: 36px;
  height: 36px;
`,X=(0,o.default)(H)`
  content: '';
  position: absolute;
  left: 0;
  width: 36px;
  height: 36px;
`,J=o.default.li`
  position: relative;
  padding: 0 0 0 50px;
  min-height: 36px;
  display: flex;
  align-items: center;
  color: ${e=>"white"===e.theme?"white":"inherit"};

  ${d.lessThan("sm")`
    margin-bottom: ${(0,m.hO)("12px")};
  `}
  ${d.lessThan("xl")`
    margin-bottom: ${(0,m.hO)("18px")};
  `}
  margin-bottom: ${(0,m.hO)("24px")};

  span {
    display: inline-block;
    align-self: center;
    margin: 0;
  }
`,$=e=>{let{children:t,theme:a}=e;return i.createElement(J,{theme:a},"white"===a?i.createElement(U,null):i.createElement(X,null),t)},_=e=>{let{children:t}=e;return i.createElement(q,null,t)},ee=e=>{let{to:t,children:a,internal:r=!1,newTab:l=!0}=e;return r?i.createElement(n.Z,{to:t},a):i.createElement("a",{href:t,target:l?"_blank":"_self",rel:l?"noopener noreferrer":""},a)},te=o.default.div`
  display: grid;
  justify-items: start;
  align-items: center;

  ${e=>{let{numberOfItems:t}=e;return o.css`
    grid-template-columns: repeat(
      ${re(t)},
      1fr
    );
    ${d.greaterThan("sm")`
      grid-template-columns: repeat(
        ${re(t,"sm")},
        1fr
      ); 
    `};
    ${d.greaterThan("md")`
      grid-template-columns: repeat(${t}, 1fr);
    `};
  `}}

  grid-row-gap: 5px;
  grid-column-gap: 10px;
  ${d.greaterThan("md")`
    grid-row-gap: 10px;
    grid-column-gap: 20px;
    width: 55%;
  `};
  ${d.between("md","xl")`
    width: 70%;
  `};
  ${d.greaterThan("lg")`
    grid-row-gap: 15px;
    grid-column-gap: 30px;
  `};
`,ae=o.default.img`
  width: 200;
  height: 80%;
  max-height: 40px;
  object-fit: scale-down;
  margin: 0 !important;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
`,ne=[{src:"data:image/webp;base64,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",alt:"semanticUI icon"},{src:"data:image/webp;base64,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",alt:"antDesign icon"},{src:"data:image/webp;base64,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",alt:"MUI icon"},{src:"data:image/webp;base64,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",alt:"bootstrap icon"}],re=function(e,t){return void 0===t&&(t="xs"),"xs"===t&&e>4||"sm"===t&&e>6?Math.ceil(e/2):e},ie=ne.length,le=()=>i.createElement(te,{numberOfItems:ie},ne.map((e=>{let{src:t,alt:a}=e;return i.createElement(ae,{key:t,loading:"lazy",src:t,alt:a})}))),oe=o.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  margin-top: ${(0,m.hO)("45px")};
  gap: ${(0,m.hO)("10px")} ${(0,m.hO)("15px")};

  ${d.between("md","lg")`
    gap: ${(0,m.hO)("10px")} ${(0,m.hO)("5px")}; 
`}

  ${d.between("lg","xl")`
    gap: ${(0,m.hO)("10px")} ${(0,m.hO)("12px")};
  `}

  ${d.lessThan("sm")`
    margin-top: ${(0,m.hO)("30px")};
    flex-direction: column;
  `}
`,se=o.default.p`
  ${d.greaterThan("xl")`
    font-size: ${(0,m.hO)("30px")};
    line-height: ${(0,m.hO)("40px")};
  `}
  ${d.between("md","xl")`
    font-size: ${(0,m.hO)("23px")};
    line-height: ${(0,m.hO)("30px")};
  `}
  font-size: ${(0,m.hO)("20px")};
  line-height: ${(0,m.hO)("30px")};

  font-weight: 300;
  max-width: 660px;
  color: white;

  &:last-child {
    margin-bottom: 0;
  }
`,me=o.default.h4`
  color: white;
  ${d.between("xs","sm")`
  margin-top: ${(0,m.hO)("40px")};
`}
  ${d.between("sm","md")`
    margin-top: ${(0,m.hO)("30px")};
  `}
  ${d.greaterThan("md")`
    margin-top: ${(0,m.hO)("40px")};
  `}
`,ce=e=>{e.preventDefault();const t=document.getElementById("pricing");t&&t.scrollIntoView()},de=()=>{const e=(0,A.Z)(),t=(0,v.Z)(e.breakpoints.down("xs"));return i.createElement(P,null,i.createElement("h1",{style:{color:"white",fontWeight:600}},"Forminer"),i.createElement(se,null,i.createElement("strong",null,"Save up to 1500 hours")," while building form-heavy React apps with our easy to integrate package"),i.createElement(_,null,i.createElement($,{theme:"white"},i.createElement("span",null,i.createElement("strong",null,"Powerful solution")," - custom fields, full state machine, conditional fields, schema-first approach, and many more...")),i.createElement($,{theme:"white"},i.createElement("span",null,i.createElement("strong",null,"Traffic-independent payment")," - pick a one-time payment or subscription, not based on the number of users")),i.createElement($,{theme:"white"},i.createElement("span",null,i.createElement("strong",null,"Good support")," - basing on our popular OpenSource package, uniforms, guarantees no vendor locking"))),!t&&i.createElement(i.Fragment,null,i.createElement(me,null,"Supported design libraries:"),i.createElement(le,null)),i.createElement(oe,null,i.createElement(Q,{onClick:ce,size:"lg"},"Check pricing"),i.createElement(ee,{to:"/docs",internal:!0},i.createElement(Q,{variant:"outlined",size:"lg"},"See technical documentation"))),t&&i.createElement(i.Fragment,null,i.createElement(me,null,"Supported design libraries:"),i.createElement(le,null)))},pe=o.default.li`
  &:not(:last-child) {
    margin-bottom: ${(0,m.hO)("8px")};
  }
`,xe=o.default.ul`
  padding-left: 50px;
`,he=e=>{let{children:t}=e;return i.createElement(pe,null,t)},ue=e=>{let{children:t}=e;return i.createElement(xe,null,t)},ke=o.default.div`
  ${e=>{let{alternativeBackground:t,theme:a}=e;return t&&`background-color: ${a.color.grey}\n  `}}
`,fe=(0,o.default)(ke)`
  position: relative;
  overflow: hidden;
  padding-top: 60px;
  padding-bottom: 60px;

  ${d.greaterThan("md")`
    padding-top: 75px;
    padding-bottom: 75px;
  `}
`,ge=e=>{let{children:t,id:a,alternativeBackground:n}=e;return i.createElement(fe,{id:a,alternativeBackground:n,as:"section"},t)},ye=o.default.h2`
  font-weight: ${e=>{let{isStrong:t}=e;return t?500:300}};
  margin: 0;
  ${e=>{let{marginBottom:t}=e;return t?`margin-bottom: ${t}px`:0}};

  ${e=>{let{size:t}=e;switch(t){case"xl":return p;case"lg":return x;case"md":return h;default:return o.css`
          font-size: inherit;
          line-height: inherit;
        `}}}
`,Ee=e=>{let{children:t,level:a=3,size:n="md",isStrong:r=!0,marginBottom:l}=e;return i.createElement(ye,{isStrong:r,as:`h${a}`,size:n,marginBottom:l},t)},be=o.default.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
  ${d.greaterThan("md")`
    margin-bottom: 35px;
  `}
`,Ae=(0,o.default)(Ee)`
  max-width: 660px;
  font-weight: 300;
`,ve=e=>{let{children:t,level:a=3,size:n="md",isStrong:r=!0}=e;return i.createElement(be,null,i.createElement(Ae,{level:a,size:n,isStrong:r},t))},we=e=>{let{children:t,heading:a,alternativeBackground:n=!1,id:r}=e;return i.createElement(ge,{alternativeBackground:n,id:r},i.createElement(G,null,a&&i.createElement(ve,{isStrong:!0},a),t))};var Be=a(1248),Ge=a.n(Be),De=a(1216);const Ve=o.default.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  ${d.greaterThan("md")`
    width: 50%;
    margin-bottom: 0px;
    position: relative;
  `}
`,Se=e=>{let{data:t}=e;const a=(0,i.useRef)(null);return(0,i.useEffect)((()=>{let e;if(a.current){const n=JSON.parse(t);e=Ge().loadAnimation({animationData:n,container:a.current,loop:!0,renderer:"svg"})}return()=>{e.destroy()}}),[t,a]),i.createElement("div",{ref:a})},Oe=(0,o.default)(Ve)`
  ${d.greaterThan("md")`
    min-height: 600px;
  `}
`,Te=o.default.div`
  width: 100%;
`;var je=a(5477);const ze=o.default.div`
  width: 100%;
  min-height: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${d.greaterThan("md")`
    min-height: 400px;
  `}
`,Ze=()=>i.createElement(ze,null,i.createElement(je.Z,null)),Pe=(0,i.lazy)((()=>Promise.all([a.e(655),a.e(307)]).then(a.bind(a,307)))),Fe=(0,o.default)(Ve)`
  ${d.greaterThan("md")`
    min-height: 600px;
  `}
`,Ie=o.default.div`
  width: 100%;
`,Me=(0,o.default)(Ve)`
  ${d.greaterThan("md")`
    min-height: 600px;
  `}
`,Le=o.default.img`
  width: 100%;
  max-width: 709px;
  max-height: 600px;
  object-fit: scale-down;
`,Ke=o.default.div`
  display: flex;
  align-items: space-between;
  flex-direction: column-reverse;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  ${d.greaterThan("md")`
    flex-direction: ${e=>{let{isReversed:t}=e;return t?"row-reverse":"row"}};
    &:not(:last-child) {
      margin-bottom: 0px;
    }
  `}
`,Qe=o.default.div`
  width: 100%;

  ${d.greaterThan("md")`
    width: 50%;
    padding-top: 58px;
    padding-bottom: 58px;
    ${e=>{let{isReversed:t}=e;return t?o.css`
            padding-right: 0;
            padding-left: 116px;
          `:o.css`
            padding-left: 0;
            padding-right: 116px;
          `}}
  `}

  p:last-child {
    margin-bottom: ${e=>{let{isButton:t}=e;return t?"1.5rem":0}};
  }
`,Ye={animation:e=>{let{data:t}=e;return i.createElement(Oe,null,i.createElement(Te,null,i.createElement(De.ZP,{offset:1200,once:!0},i.createElement(Se,{data:t}))))},video:e=>{let{data:t}=e;return i.createElement(Fe,null,i.createElement(Ie,null,i.createElement(De.ZP,{offset:1200,once:!0},i.createElement(i.Suspense,{fallback:i.createElement(Ze,null)},i.createElement(Pe,{videoURL:t})))))},image:e=>{let{data:t,alt:a}=e;return i.createElement(Me,null,i.createElement(Le,{loading:"lazy",src:t,alt:a}))}},Ne=e=>{let{index:t,children:a,heading:n,mediaType:r,mediaData:l,alt:o="",isStrong:s=!0,reversedItems:m=!1}=e;const c=m?!!((t+1)%2):!!(t%2),d=Ye[r];return i.createElement(Ke,{isReversed:c},i.createElement(Qe,{isReversed:c},i.createElement(ve,{isStrong:s},n),a),i.createElement(d,{data:l,alt:o}))},He=()=>i.createElement(we,{heading:"Key Functionalities",id:"key-functionalities",alternativeBackground:!0},i.createElement(Ne,{index:0,heading:"Intuitive Drag & Drop",mediaType:"video",mediaData:"https://youtu.be/8UN8S5WyI8Y",isStrong:!1,reversedItems:!0},i.createElement(ue,null,i.createElement(he,null,"Build your forms in React by using",i.createElement(ue,null,i.createElement(he,null,i.createElement("strong",null,"drag & drop interface")),i.createElement(he,null,"nested fields"),i.createElement(he,null,"vertical and horizontal lists"))),i.createElement(he,null,"Choose Forminer that supports all common field types from",i.createElement(ee,{to:"https://uniforms.tools/"}," uniforms")),i.createElement(he,null,"Use ",i.createElement("strong",null,"WYSIWYG")," code editor, if you prefer it over the no-code interface"),i.createElement(he,null,"Set field properties",i.createElement(ue,null,i.createElement(he,null,"like required/predefined values (dropdown list)"),i.createElement(he,null,"min/max length"),i.createElement(he,null,"placeholder"),i.createElement(he,null,"default value"),i.createElement(he,null,"others"))))),i.createElement(Ne,{index:1,heading:"Conditional fields",mediaType:"video",mediaData:"https://youtu.be/Q5_JNpGoxCo",isStrong:!1,reversedItems:!0},i.createElement(ue,null,i.createElement(he,null,"Use",i.createElement("strong",null," conditional field validation"),", and spend your saved time on other areas of your project."),i.createElement(he,null,"Save your time by a conditional rendering of fields, a",i.createElement("strong",null," display-if "),"solution"),i.createElement(he,null,"You'll have the support of any logic for any field"),i.createElement(he,null,"Define logic by",i.createElement("strong",null," no-code interface")))),i.createElement(Ne,{index:2,heading:"Custom fields",mediaType:"video",mediaData:"https://youtu.be/wSkpwRrBN_s",isStrong:!1,reversedItems:!0},i.createElement(ue,null,i.createElement(he,null,"Add simply any new field you'd like"),i.createElement(he,null,"Use fields already present in your application"),i.createElement(he,null,"Use any fields from",i.createElement(ee,{to:"https://uniforms.tools/"}," uniforms")))),i.createElement(Ne,{index:3,heading:"Schema-based headless approach",mediaType:"video",mediaData:"https://youtu.be/xswDB9qbJKU",isStrong:!1,reversedItems:!0},i.createElement(ue,null,i.createElement(he,null,"Prepare React form once and",i.createElement("strong",null," use it with various themes")),i.createElement(he,null,"Take advantage of a",i.createElement("strong",null," clear schema definition "),"that operates on data and correct, copy and paste the form",i.createElement("strong",null," directly into your project")),i.createElement(he,null,"You can",i.createElement("strong",null," create no-code and low-code solutions "),"quickly and well, thanks to schema management with easily display form resources"),i.createElement(he,null,"Use",i.createElement(ee,{to:"https://uniforms.tools/"}," uniforms "),"with full state engine, able to handle logic between fields and custom error messages"))),i.createElement(Ne,{index:4,heading:"Quality of the generated code",mediaType:"video",mediaData:"https://youtu.be/3Av4N_qlN2U",isStrong:!1,reversedItems:!0},i.createElement(ue,null,i.createElement(he,null,"Build React forms through a code, as well as through a",i.createElement("strong",null," WYSIWYG "),"interface, with a",i.createElement("strong",null," stable synchronization "),"between two methods"),i.createElement(he,null,"Ensure",i.createElement("strong",null," good Developer Experience "),"by choosing a package based on",i.createElement(ee,{to:"https://uniforms.tools/"}," uniforms"),", trusted by GitHub community"),i.createElement(he,null,"Use",i.createElement("strong",null," clean-looking components "),"while keeping extensibility and separation of concerns")))),Re="0 0 38 38",Ce="19",We="19",qe=16,Ue=o.default.div`
  position: relative;
  min-width: 92px;
  height: auto;
  margin-right: 16px;
  margin-bottom: auto;
  ${d.greaterThan("lg")`
    margin: 0 auto 16px;
  `}

  svg {
    display: block;
    background-color: ${e=>{let{theme:t}=e;return t.color.white}};
    position: relative;
    z-index: 3;
  }
`,Xe=o.default.div`
  position: relative;
  &:after {
    content: '';
    display: ${e=>{let{lastChild:t}=e;return t?"none":"block"}};
    height: 100%;
    width: 1px;
    background-color: #e7eaec;
    position: absolute;
    bottom: -50px;
    left: 50%;
    z-index: 1;
  }
  ${d.greaterThan("lg")`
    &:after {
      display: none;
    }
  `}
`,Je=o.default.circle`
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-dasharray: ${e=>{let{array:t}=e;return t}};
  stroke-dashoffset: ${e=>{let{offset:t}=e;return t}};
  animation: rotate 2s forwards;
  @keyframes rotate {
    from {
      stroke-dashoffset: ${e=>{let{array:t}=e;return t}};
    }
    ,
    to {
      stroke-dashoffset: ${e=>{let{offset:t}=e;return t}};
    }
  }
`,$e=o.default.p`
  margin: 0;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`,_e=e=>{let{textContent:t,lastChild:a,length:n}=e;const r=(0,i.useRef)(),l=(e=>{const[t,a]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const t=new IntersectionObserver((e=>{let[t]=e;return t.isIntersecting&&a(!0)}));return t.observe(e.current),()=>{t.disconnect()}}),[e]),t})(r),o=2*qe*Math.PI,s=o-100/n*t/100*o;return i.createElement(Ue,{ref:r},i.createElement(Xe,{lastChild:a},i.createElement("svg",{viewBox:Re},l&&i.createElement(Je,{animation:l,stroke:"#1074EF",fill:"transparent",strokeWidth:3,array:o,offset:s,"stroke-width":1,cx:Ce,cy:We,r:qe}))),i.createElement($e,null,t))},et=o.default.div`
  position: relative;
  display: flex;
  align-items: center;
  ${d.greaterThan("lg")`
    flex-direction: column;
    text-align: center;
  `}
  p:last-child {
    margin-bottom: 0;
  }
  ${d.greaterThan("lg")`
    &:after,
    &:before {
      content: '';
      height: 1px;
      background-color: #E7EAEC;
      position: absolute;
      top: 46px;
      width: 20%;
    }
    &:before {
      left: 0;
      display: ${e=>{let{firstChild:t}=e;return t?"none":"display"}}
    }
    &:after {
      right: 0;
      display: ${e=>{let{lastChild:t}=e;return t?"none":"display"}}
    }
  `}
  ${d.greaterThan("1200px")`
    &:after,
    &:before {
      width: 25%;
    }
  `}
`,tt=o.default.p`
  font-weight: ${e=>{let{bold:t}=e;return t?"500":"300"}};
  margin-bottom: 8px;
  padding: 0 8px;
`,at=(0,o.default)(w.Z)`
  && {
    margin-bottom: 24px;
    ${d.greaterThan("lg")`
  margin-bottom: 0;
`}
  }
`,nt=e=>{let{heading:t,children:a,orderNum:n,numOfSteps:r}=e;const l=r===n;return i.createElement(at,{xs:12,item:!0,lg:!0},i.createElement(et,{firstChild:1===n,lastChild:l},i.createElement(_e,{lastChild:l,textContent:n,length:r}),i.createElement("div",null,i.createElement(tt,{bold:!0},t),i.createElement("p",null,a))))},rt=(0,o.default)(w.Z)`
  && {
    margin-top: 60px;
    ${d.greaterThan("lg")`
  margin-top: 100px;
`}
  }
`,it=()=>i.createElement(we,{heading:"Solution easy to use",id:"easy-to-use"},i.createElement(rt,{container:!0},i.createElement(nt,{heading:"Installation",orderNum:1,numOfSteps:3},"We provide you with ",i.createElement("strong",null,"ready-to-use code")),i.createElement(nt,{heading:"Modification",orderNum:2,numOfSteps:3},"Based on",i.createElement(ee,{to:"https://www.vazco.eu/technologies/reactjs"}," React "),"components"),i.createElement(nt,{heading:"Customization",orderNum:3,numOfSteps:3},"Freely modify the look by editing the CSS, either by hand or using indexes and variables")));var lt=a(6906);const ot=o.default.div`
  h3 {
    color: ${e=>{let{theme:t}=e;return t.color.white}};
    margin: 0;
    text-align: center;
    width: 100%;
    ${d.greaterThan("xl")`
      font-size: ${(0,m.hO)("40px")};
      line-height: ${(0,m.hO)("50px")};
    `}
  }
`,st=o.default.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  ${lt.W5};
  ${d.greaterThan("xl")`
    padding: 75px 0;
  `}
  background-color: ${e=>{let{theme:t}=e;return t.color.darkBlue}};
`,mt=o.default.h3`
  margin-bottom: 24px !important;
`,ct=e=>{let{heading:t,buttonText:a}=e;return i.createElement(ot,null,i.createElement(G,null,i.createElement(st,null,i.createElement(mt,null,t),i.createElement(ee,{to:"mailto:hello@forminer.com",newTab:!1},i.createElement(Q,{variant:"outlined"},a)))))};var dt,pt=a(7462);function xt(){return xt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},xt.apply(this,arguments)}const ht=e=>{let{title:t,titleId:a,...n}=e;return i.createElement("svg",xt({viewBox:"0 0 41.25 41.25",height:55,width:55,xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":a},n),t?i.createElement("title",{id:a},t):null,dt||(dt=i.createElement("defs",null,i.createElement("clipPath",{id:"a"},i.createElement("path",{d:"M.418 1.086h39.773V39.39H.418Zm0 0"})))),i.createElement("g",{clipPath:"url(#a)"},i.createElement("path",{d:"M30.371 1.324a.64.64 0 0 0-.496-.195.67.67 0 0 0-.48.234l-4.86 5.684-4.297.879-4.293-.88-4.86-5.683a.677.677 0 0 0-.48-.234.686.686 0 0 0-.5.195L.633 10.883a.657.657 0 0 0-.031.894l4.933 5.774.832 2.144-2.125 2.489a4.642 4.642 0 0 0 .281 6.324l9.872 9.637a4.67 4.67 0 0 0 3.257 1.332c.903 0 1.801-.282 2.586-.809.758.508 1.649.8 2.582.8a4.674 4.674 0 0 0 3.258-1.323L36.836 27.64a3.315 3.315 0 0 0 .203-4.516l-1.332-1.559c-.492-.578-1.184-.933-1.91-1.066l1.144-2.95 4.934-5.773a.666.666 0 0 0-.031-.898ZM2.011 11.383l8.532-8.61 4.543 5.305a.665.665 0 0 0 .371.223l4.648.949h.008l5.95 1.219a2.616 2.616 0 0 1 2.042 3.086 2.626 2.626 0 0 1-3.097 2.039l-6.051-1.239a2.973 2.973 0 0 0-1.781.192 11.564 11.564 0 0 1-6.653.797.678.678 0 0 0-.62.222l-2.551 2.985-.614-1.582a.564.564 0 0 0-.113-.192Zm13.321 25.812-.469-.453 2.38-2.582c.081.805.355 1.598.866 2.293.067.086.133.172.203.25l.895 1.05a3.303 3.303 0 0 1-3.875-.558Zm9.648.157a3.328 3.328 0 0 1-2.152.793c-.98 0-1.902-.422-2.535-1.165l-.969-1.132a3.313 3.313 0 0 1 .555-4.816l.281-.208 5.457 5.914-.469.457c-.054.055-.113.11-.168.157Zm4.254-13.204 4.399 4.77-3.055 2.984-4.805-5.203Zm-4.539 3.34 4.93 5.34-3.055 2.984-5.332-5.777Zm11.336-3.504a1.995 1.995 0 0 1-.12 2.711l-1.329 1.293-4.273-4.629 1.687-1.242a1.981 1.981 0 0 1 1.188-.387c.582 0 1.136.254 1.52.7Zm-2.176-7.207a.728.728 0 0 0-.113.192l-1.379 3.55a3.26 3.26 0 0 0-1.16.532L19.09 29.969c-1.11.812-1.73 2.031-1.852 3.304-.011-.015-.02-.035-.035-.05a.662.662 0 0 0-.937.043l-2.356 2.547-3.058-2.981 5.105-5.527a.662.662 0 0 0-.039-.938.667.667 0 0 0-.941.04l-5.075 5.491-3.054-2.984 4.98-5.394a.658.658 0 0 0-.039-.938.667.667 0 0 0-.941.04l-4.953 5.366-.438-.43a3.315 3.315 0 0 1-.207-4.515l5.418-6.332c2.395.348 4.82.023 7.039-.953a1.64 1.64 0 0 1 .977-.102l6.046 1.235a3.948 3.948 0 0 0 2.973-.57 3.888 3.888 0 0 0 1.7-2.497 3.952 3.952 0 0 0-3.079-4.656l-2.781-.566 1.477-.305a.65.65 0 0 0 .37-.219l4.54-5.308 8.535 8.609Zm0 0",style:{stroke:"none",fillRule:"nonzero",fill:"#1e7cf0",fillOpacity:1}})))};var ut;function kt(){return kt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},kt.apply(this,arguments)}const ft=e=>{let{title:t,titleId:a,...n}=e;return i.createElement("svg",kt({viewBox:"0 0 41.25 41.25",height:55,width:55,xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":a},n),t?i.createElement("title",{id:a},t):null,ut||(ut=i.createElement("defs",null,i.createElement("clipPath",{id:"a"},i.createElement("path",{d:"M5 19h30v20.688H5Zm0 0"})),i.createElement("clipPath",{id:"b"},i.createElement("path",{d:"M.648 1h39.04v21H.648Zm0 0"})),i.createElement("clipPath",{id:"c"},i.createElement("path",{d:"M27 .648h12.688V13H27Zm0 0"})))),i.createElement("path",{d:"M24.207 22.188a4.044 4.044 0 0 0-4.039-4.04 4.044 4.044 0 0 0-4.04 4.04 4.044 4.044 0 0 0 4.04 4.039 4.044 4.044 0 0 0 4.039-4.04M20.102 27.57l-.098-.004-.484 5.809.648.648.648-.648-.484-5.8h-.164c-.02 0-.043-.005-.066-.005",style:{stroke:"none",fillRule:"nonzero",fill:"#1e7cf0",fillOpacity:1}}),i.createElement("g",{clipPath:"url(#a)"},i.createElement("path",{d:"M33.746 19.496c-.324 0-.64.129-.871.36l-5.258 5.257a7.443 7.443 0 0 1-4.187 2.098l-1.754.246.535 6.43-2.043 2.043-2.043-2.043.535-6.426-1.754-.25a7.443 7.443 0 0 1-4.187-2.098L7.46 19.855a1.233 1.233 0 0 0-1.742 1.742l9.738 9.735v8.355h9.422v-8.355l9.738-9.734a1.23 1.23 0 0 0-.871-2.102",style:{stroke:"none",fillRule:"nonzero",fill:"#1e7cf0",fillOpacity:1}})),i.createElement("g",{clipPath:"url(#b)"},i.createElement("path",{d:"m27.375 17.277-.953-.949.871-.871h-14.25l.871.871-.953.95-2.496-2.493 2.496-2.496.953.95-.871.87h14.25l-.871-.87.953-.95 2.496 2.496ZM8.156 10.855l-1.328-.222a8.716 8.716 0 0 1 8.629-7.293v1.348a7.373 7.373 0 0 0-7.3 6.167Zm8.758-7.394c.496.082.988.21 1.457.375l-.445 1.273a7.078 7.078 0 0 0-1.235-.32Zm18.734 9.976a4.044 4.044 0 0 0-4.039 4.04h-1.343a5.388 5.388 0 0 1 5.261-5.38c-.636-3.456-3.695-6.066-7.28-6.066a7.33 7.33 0 0 0-3.423.844l-.543.285-.336-.515a10.042 10.042 0 0 0-8.488-4.649c-5.57 0-10.098 4.527-10.098 10.094v.047a5.383 5.383 0 0 1 3.746 2.261L8 15.168a4.046 4.046 0 0 0-3.313-1.73 4.044 4.044 0 0 0-4.039 4.039 4.043 4.043 0 0 0 3.485 3.996 2.636 2.636 0 0 1-.117-.746 2.58 2.58 0 0 1 2.574-2.579c.691 0 1.336.27 1.824.754l2.61 2.614h3.808a5.385 5.385 0 0 1 5.336-4.711 5.385 5.385 0 0 1 5.336 4.71h3.808l2.614-2.613a2.562 2.562 0 0 1 1.82-.754 2.583 2.583 0 0 1 2.578 2.579c0 .257-.05.507-.12.746a4.043 4.043 0 0 0 3.483-3.996 4.044 4.044 0 0 0-4.039-4.04",style:{stroke:"none",fillRule:"nonzero",fill:"#1e7cf0",fillOpacity:1}})),i.createElement("g",{clipPath:"url(#c)"},i.createElement("path",{d:"m38.21 6.145-.108-.352a5.261 5.261 0 0 0-.383-.926l-.172-.328.758-1.332-1.176-1.176-1.332.762-.328-.176a5.35 5.35 0 0 0-.922-.383l-.356-.109L33.79.648h-1.664l-.402 1.477-.352.11a5.261 5.261 0 0 0-.926.382l-.328.176-1.332-.762-1.176 1.176.762 1.332-.078.152c.52 0 1.031.051 1.531.145a4.012 4.012 0 0 1 3.133-1.496 4.044 4.044 0 0 1 4.04 4.039c0 .875-.294 1.707-.813 2.402.359.766.601 1.594.718 2.461.188.047.371.102.547.164l.856-.855-.758-1.332.172-.328c.156-.301.289-.61.383-.922l.109-.356 1.477-.402V6.547l-1.477-.402",style:{stroke:"none",fillRule:"nonzero",fill:"#1e7cf0",fillOpacity:1}})),i.createElement("path",{d:"M35.418 8.453c.148-.336.23-.7.23-1.074a2.694 2.694 0 0 0-2.691-2.691c-.61 0-1.184.203-1.648.566a8.853 8.853 0 0 1 4.109 3.2",style:{stroke:"none",fillRule:"nonzero",fill:"#1e7cf0",fillOpacity:1}}))};var gt;function yt(){return yt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},yt.apply(this,arguments)}const Et=e=>{let{title:t,titleId:a,...n}=e;return i.createElement("svg",yt({viewBox:"0 0 41.25 41.25",height:55,width:55,xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":a},n),t?i.createElement("title",{id:a},t):null,gt||(gt=i.createElement("defs",null,i.createElement("clipPath",{id:"a"},i.createElement("path",{d:"M1.055 1.055h38.3v38.3h-38.3Zm0 0"})))),i.createElement("path",{d:"m20.234 19.383 6.121 6.144a2.028 2.028 0 0 0 2.84-.035 2.028 2.028 0 0 0 .012-2.84l-6.113-6.144c-.696.703.168-.164-2.86 2.875Zm0 0",style:{stroke:"none",fillRule:"nonzero",fill:"#1e7cf0",fillOpacity:1}}),i.createElement("path",{d:"m30.02 9.547-2.73 2.746a.662.662 0 0 1-.47.195h-2.84a.66.66 0 0 1-.66-.66v-2.86c0-.171.07-.34.192-.46L26.25 5.75a4.73 4.73 0 0 0-4.527 1.703 4.728 4.728 0 0 0-.653 4.793.662.662 0 0 1-.14.719C18.457 15.469 17.914 16 10.707 23.246a1.353 1.353 0 1 0 1.902 1.926c16.63-16.719 6.782-6.813 10.23-10.281a.66.66 0 0 1 .724-.141 4.718 4.718 0 0 0 4.785-.672 4.709 4.709 0 0 0 1.672-4.531Zm0 0",style:{stroke:"none",fillRule:"nonzero",fill:"#1e7cf0",fillOpacity:1}}),i.createElement("g",{clipPath:"url(#a)"},i.createElement("path",{d:"M35.371 1.055H5.027A3.954 3.954 0 0 0 1.07 5.012v22.43a3.954 3.954 0 0 0 3.957 3.956h7.258s.473 4.258-2.586 6.766a.66.66 0 0 0 .438 1.18c3.246-.227 8.699-1.57 10.062-7.946h15.172c2.188 0 3.961-1.77 3.961-3.957V5.011a3.958 3.958 0 0 0-3.96-3.956ZM5.027 4.352h-.66a.662.662 0 0 1-.66-.66c0-.364.297-.66.66-.66h.66c.364 0 .66.296.66.66 0 .363-.296.66-.66.66Zm1.98-.66c0-.364.294-.66.657-.66h3.3c.364 0 .661.296.661.66 0 .363-.297.66-.66.66h-3.3a.659.659 0 0 1-.657-.66Zm23.087 25.73h-.657a.66.66 0 1 1 0-1.32h.657a.66.66 0 1 1 0 1.32Zm.047-7.7a3.347 3.347 0 0 1 .718 3.641 3.354 3.354 0 0 1-3.074 2.078 3.303 3.303 0 0 1-2.363-.984l-6.117-6.14-5.758 5.785c-.5.507-1.18.793-1.89.793a2.698 2.698 0 0 1-2.462-1.668 2.695 2.695 0 0 1 .575-2.915l6.71-6.742-2.914-2.93a.646.646 0 0 1-.511.2.644.644 0 0 1-.485-.254l-3.316-4.29a.656.656 0 0 1 .055-.866l1.894-1.907a.662.662 0 0 1 .875-.05l4.266 3.332a.667.667 0 0 1 .05.996l2.91 2.93.391-.399a6.027 6.027 0 0 1 8.047-7.508.652.652 0 0 1 .39.48.654.654 0 0 1-.175.59l-3.32 3.344v1.926h1.906l3.316-3.336a.67.67 0 0 1 .594-.183.671.671 0 0 1 .485.394 6.035 6.035 0 0 1-6.086 8.367Zm5.89 7.7h-3.297a.66.66 0 1 1 0-1.32h3.297a.66.66 0 1 1 0 1.32Zm0 0",style:{stroke:"none",fillRule:"nonzero",fill:"#1e7cf0",fillOpacity:1}})),i.createElement("path",{d:"M18.371 13.668c-3.586-3.613-3.598-3.496-3.555-3.934 0-.086.028-.171.079-.246.011-.035.03-.066.05-.101L11.727 6.87 10.652 7.95l2.508 3.239c.008-.008.176-.094.188-.098.078-.02.156-.035.238-.04.363.009.195-.066 3.824 3.583Zm0 0",style:{stroke:"none",fillRule:"nonzero",fill:"#1e7cf0",fillOpacity:1}}))},bt=(0,o.default)(w.Z)`
  && {
    &:not(:last-child) {
      margin-bottom: ${(0,m.hO)("40px")};
    }

    ${d.greaterThan("md")`
    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}
  }
`,At=o.default.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,vt=o.default.div`
  ${e=>{let{type:t}=e;return"icon"===t?o.css`
          display: flex;
          align-items: center;
          min-height: 50px;
        `:lt.GA}}

  ${e=>{let{bgColor:t}=e;return t&&o.css`
      background-color: ${t};
    `}};

  margin: 0 0 24px;
  max-width: 735px;
  max-height: 612px;
  img {
    display: block;
  }
`,wt=o.default.div`
  display: flex;
  flex-direction: column;
  div > * {
    &:last-child {
      margin-bottom: 0;
    }
  }
  > a {
    color: inherit;
    &:hover {
      color: ${e=>{let{theme:t}=e;return t.color.primary}};
    }
  }
`,Bt=o.default.h3`
  margin-bottom: 8px;
`,Gt={ageement:ht,opportunities:ft,techtalk:Et},Dt=e=>{let{numOfItems:t,icon:a,children:n,heading:r}=e;const l=Gt[a];return i.createElement(bt,(0,pt.Z)({xs:12},t%2==0&&{sm:6},{md:4},t%4==0&&{lg:3},{item:!0}),i.createElement(At,null,i.createElement(vt,{type:"icon"},i.createElement(l,null)),i.createElement(wt,null,i.createElement(Bt,null,r),i.createElement("div",null,i.createElement("p",null,n)))))},Vt=()=>i.createElement(we,{heading:"What do you get?",id:"what-you-get"},i.createElement(w.Z,{spacing:3,container:!0},i.createElement(Dt,{heading:"Handy",icon:"ageement",numOfItems:3},"A ",i.createElement("strong",null," user-centric system ")," for building custom forms in React with a ",i.createElement("strong",null," drag-and-drop interface")),i.createElement(Dt,{heading:"Extensible",icon:"opportunities",numOfItems:3},i.createElement("strong",null,"Easily extend to other tools "),"with a universal data schema."),i.createElement(Dt,{heading:"Developer-friendly",icon:"techtalk",numOfItems:3},"A well-documented package, easy to integrate,",i.createElement("strong",null," ","based on ",i.createElement(ee,{to:"https://uniforms.tools/"},"uniforms"))))),St=JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":130,"w":960,"h":540,"nm":"Gif animation","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Layer 26","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":0.496},"o":{"x":0.333,"y":0},"t":47.822,"s":[308.616,4.295,0],"to":[-42.806,21.463,0],"ti":[119.312,8.828,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0.496},"t":64.109,"s":[38.155,66.804,0],"to":[-107.224,-7.933,0],"ti":[46.963,30.179,0]},{"t":80.951171875,"s":[-236,-36,0]}],"ix":2},"a":{"a":0,"k":[308.616,4.295,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":47.822,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[264.443,-18.536],[264.443,27.126],[218.781,27.126],[218.781,-18.536]],"c":true}]},{"t":93,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[155.193,-65.536],[155.193,73.376],[-25.969,73.376],[-25.969,-65.536]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":47.822,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[398.451,-18.536],[398.451,27.126],[218.781,27.126],[218.781,-18.536]],"c":true}]},{"t":93,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[643.451,-65.536],[643.451,73.376],[-25.969,73.376],[-25.969,-65.536]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":47.822,"s":[4]},{"t":93,"s":[8]}],"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 30","parent":29,"sr":1,"ks":{"o":{"a":0,"k":25,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[308.616,4.295,0],"ix":2},"a":{"a":0,"k":[308.616,4.295,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[264.443,-18.536],[264.443,27.126],[218.781,27.126],[218.781,-18.536]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[398.451,-18.536],[398.451,27.126],[218.781,27.126],[218.781,-18.536]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 6","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-235.95,-36.436,0],"ix":2},"a":{"a":0,"k":[-235.95,-36.436,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[98.732,-51.694],[98.732,-5.921]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":30.515,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":30.515,"ix":2}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[75.232,-105.709],[98.732,-105.709],[98.732,-82.209]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-499.258,-105.709],[-347.64,-105.709],[51.295,-105.709]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":47.874,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":47.874,"ix":2}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-570.632,-82.209],[-570.632,-105.709],[-547.132,-105.709]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-570.632,-21.179],[-570.632,-66.952]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":30.515,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":30.515,"ix":2}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-547.132,32.837],[-570.632,32.837],[-570.632,9.337]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[27.358,32.837],[-39.824,32.837],[-523.195,32.837]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":47.874,"ix":1}},{"n":"g","nm":"gap","v":{"a":0,"k":47.874,"ix":2}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[98.732,9.337],[98.732,32.837],[75.232,32.837]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Layer 29","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":136,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":0.748},"o":{"x":0.333,"y":0},"t":0,"s":[301.35,27.126,0],"to":[0,0,0],"ti":[228.88,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":1,"y":0.266},"t":19.619,"s":[-25.622,162.635,0],"to":[-228.88,0,0],"ti":[0,0,0]},{"t":36.78515625,"s":[-294.135,55.626,0]}],"ix":2},"a":{"a":0,"k":[-283.753,64.43,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":1,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-302.77,84.622],[-302.77,44.237],[-264.736,53.212]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.9882352941176471,0.8549019607843137,0.396078431372549,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Layer 28","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-2,"ix":10},"p":{"a":0,"k":[301.107,27.88,0],"ix":2},"a":{"a":0,"k":[301.107,27.88,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[228.88,0],[0,0]],"o":[[0,0],[-228.88,0],[0,0]],"v":[[301.35,27.126],[-25.622,162.635],[-294.135,55.626]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.9882352941176471,0.8549019607843137,0.396078431372549,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[0.624]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[1],"y":[0.352]},"t":20.844,"s":[55]},{"t":36.78515625,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Layer 25","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[166.268,-1.51,0],"ix":2},"a":{"a":0,"k":[166.268,-1.51,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[166.268,431.81],[166.268,-434.83]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Layer 24","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[330.304,173.754,0],"ix":2},"a":{"a":0,"k":[330.304,173.754,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[225.277,173.754],[435.331,173.754]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Layer 23","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[330.304,141.607,0],"ix":2},"a":{"a":0,"k":[330.304,141.607,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[225.277,141.607],[435.331,141.607]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Layer 22","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[387.331,105.937,0],"ix":2},"a":{"a":0,"k":[387.331,105.937,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[225.277,105.937],[549.386,105.937]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Layer 21","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[443.74,4.295,0],"ix":2},"a":{"a":0,"k":[443.74,4.295,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[466.571,27.126],[420.909,27.126],[420.909,-18.536],[466.571,-18.536]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Layer 20","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[510.744,4.295,0],"ix":2},"a":{"a":0,"k":[510.744,4.295,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[600.579,27.126],[420.909,27.126],[420.909,-18.536],[600.579,-18.536]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Layer 19","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[443.74,-82.878,0],"ix":2},"a":{"a":0,"k":[443.74,-82.878,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[466.571,-60.047],[420.909,-60.047],[420.909,-105.709],[466.571,-105.709]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Layer 18","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[510.744,-82.878,0],"ix":2},"a":{"a":0,"k":[510.744,-82.878,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[600.579,-60.047],[420.909,-60.047],[420.909,-105.709],[600.579,-105.709]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Layer 17","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[241.612,-82.878,0],"ix":2},"a":{"a":0,"k":[241.612,-82.878,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[264.443,-60.047],[218.781,-60.047],[218.781,-105.709],[264.443,-105.709]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Layer 16","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[308.616,-82.878,0],"ix":2},"a":{"a":0,"k":[308.616,-82.878,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[398.451,-60.047],[218.781,-60.047],[218.781,-105.709],[398.451,-105.709]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Layer 15","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[443.74,-170.051,0],"ix":2},"a":{"a":0,"k":[443.74,-170.051,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[466.571,-147.22],[420.909,-147.22],[420.909,-192.882],[466.571,-192.882]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Layer 14","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[510.744,-170.051,0],"ix":2},"a":{"a":0,"k":[510.744,-170.051,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[600.579,-147.22],[420.909,-147.22],[420.909,-192.882],[600.579,-192.882]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"Layer 13","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[241.612,-170.051,0],"ix":2},"a":{"a":0,"k":[241.612,-170.051,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[264.443,-147.22],[218.781,-147.22],[218.781,-192.882],[264.443,-192.882]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"Layer 12","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[308.616,-170.051,0],"ix":2},"a":{"a":0,"k":[308.616,-170.051,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[398.451,-147.22],[218.781,-147.22],[218.781,-192.882],[398.451,-192.882]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"Layer 11","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[443.74,-257.224,0],"ix":2},"a":{"a":0,"k":[443.74,-257.224,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[466.571,-234.393],[420.909,-234.393],[420.909,-280.055],[466.571,-280.055]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"Layer 10","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[510.744,-257.224,0],"ix":2},"a":{"a":0,"k":[510.744,-257.224,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[600.579,-234.393],[420.909,-234.393],[420.909,-280.055],[600.579,-280.055]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"Layer 9","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[241.612,-257.224,0],"ix":2},"a":{"a":0,"k":[241.612,-257.224,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[264.443,-234.393],[218.781,-234.393],[218.781,-280.055],[264.443,-280.055]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":23,"ty":4,"nm":"Layer 8","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[308.616,-257.224,0],"ix":2},"a":{"a":0,"k":[308.616,-257.224,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[398.451,-234.393],[218.781,-234.393],[218.781,-280.055],[398.451,-280.055]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":24,"ty":4,"nm":"Layer 7","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-496.787,152.231,0],"ix":2},"a":{"a":0,"k":[-496.787,152.231,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-422.942,179.479],[-570.632,179.479],[-570.632,124.983],[-422.942,124.983]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":25,"ty":4,"nm":"Layer 5","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-59.01,-170.051,0],"ix":2},"a":{"a":0,"k":[-59.01,-170.051,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[98.732,-147.22],[-216.751,-147.22],[-216.751,-192.882],[98.732,-192.882]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":26,"ty":4,"nm":"Layer 4","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-412.89,-170.051,0],"ix":2},"a":{"a":0,"k":[-412.89,-170.051,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-255.149,-147.22],[-570.632,-147.22],[-570.632,-192.882],[-255.149,-192.882]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":27,"ty":4,"nm":"Layer 3","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-59.01,-257.224,0],"ix":2},"a":{"a":0,"k":[-59.01,-257.224,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[98.732,-234.393],[-216.751,-234.393],[-216.751,-280.055],[98.732,-280.055]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":28,"ty":4,"nm":"Layer 2","parent":29,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-412.89,-257.224,0],"ix":2},"a":{"a":0,"k":[-412.89,-257.224,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-255.149,-234.393],[-570.632,-234.393],[-570.632,-280.055],[-255.149,-280.055]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0},{"ddd":0,"ind":29,"ty":4,"nm":"Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[479.81,268.49,0],"ix":2},"a":{"a":0,"k":[-0.19,-1.51,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-13.53],[0,0],[23.56,0],[0,0],[0,23.57],[0,0],[-9.82,7.82],[-10.03,0],[0,0],[-7.28,-5.79]],"o":[[0,0],[0,23.57],[0,0],[-23.56,0],[0,0],[0,-13.53],[7.28,-5.79],[0,0],[10.03,0],[9.82,7.82]],"v":[[651.11,-392.17],[651.11,389.14],[608.45,431.81],[-608.83,431.81],[-651.49,389.14],[-651.49,-392.17],[-635.37,-425.58],[-608.83,-434.83],[608.45,-434.83],[634.99,-425.58]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.06274509803921569,0.4549019607843137,0.9372549019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.984313726425,0.984313726425,0.984313726425,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1380,"st":0,"bm":0}],"markers":[]}'),Ot=()=>{const e=JSON.stringify(St);return i.createElement(we,{alternativeBackground:!0},i.createElement(Ne,{index:0,heading:"Trial Version",mediaType:"animation",mediaData:e},i.createElement("p",null,"You deserve to try out a form solution before making an investment.",i.createElement("br",null),"To ensure that you are satisfied with Forminer, you can",i.createElement("strong",null," try the trial version for free ")," and use it in PoC (Proof of Concept) to see how it fits your requirements with",i.createElement("strong",null," no strings attached"),".",i.createElement("br",null),"Once ready to use it in your operations, you can purchase Forminer and",i.createElement("strong",null," enjoy it on production"),"."),i.createElement(ee,{to:"https://sowl.co/s/bjKCyA",newTab:!1},i.createElement(Q,{reversed:!0},"Get the trial"))))},Tt=a.p+"assets/images/uniforms-7d0138a2777a049c2745fee689decaad.webp",jt=()=>i.createElement(we,{alternativeBackground:!0},i.createElement(Ne,{index:0,heading:"Trusted by Open Source community",mediaType:"image",mediaData:Tt,alt:"uniforms screenshot"},i.createElement(ue,null,i.createElement(he,null,"Reliance on",i.createElement(ee,{to:"https://uniforms.tools/"}," uniforms "),"guarantees a good level of support for Forminer - both from the community and Vazco"),i.createElement(he,null,"The most popular form package with the schema-first approach for",i.createElement(ee,{to:"https://www.vazco.eu/technologies/reactjs"}," ","React.js")),i.createElement(he,null,"The solution focuses on",i.createElement("strong",null," Developer Experience "),"and speeding up the development"),i.createElement(he,null,i.createElement("strong",null,"We believe in Open Source. "),"Your purchase of Forminer helps us support",i.createElement(ee,{to:"https://uniforms.tools/"}," uniforms "),"and our other Open Source packages")),i.createElement(ee,{to:"https://uniforms.tools/"},i.createElement(Q,{reversed:!0},"Explore")))),zt=o.default.div`
  width: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.color.white}};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px;
  ${lt.W5};
`,Zt=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Pt=o.default.div`
  display: inline-flex;

  flex-direction: column;
  ${d.greaterThan("md")`
    flex-direction: row;
  `}

  margin-top: ${(0,m.hO)("20px")};
  gap: ${(0,m.hO)("20px")} ${(0,m.hO)("40px")};
`,Ft=o.default.h3`
  margin-bottom: 16px;
`,It=o.default.div`
  margin: 5px 0;
`,Mt=o.default.p`
  text-align: center;
`,Lt=o.default.p`
  margin-top: 24px;
`,Kt=e=>{let{heading:t,subHeading:a,listItems:n,buttons:r,subtitle:l}=e;return i.createElement(zt,null,i.createElement(Zt,null,i.createElement(Ft,null,t),i.createElement(It,null,i.createElement(Mt,null,a),i.createElement(_,null,n.map((e=>i.createElement($,{key:e,theme:"blue"},e)))),l&&i.createElement(Lt,null,i.createElement("strong",null,l)))),i.createElement(Pt,null,r.map((e=>{let{text:t,...a}=e;return i.createElement(ee,(0,pt.Z)({key:a.to},a),i.createElement(Q,{reversed:!0},t))}))))},Qt=o.default.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,Yt=o.default.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  justify-content: center;
`,Nt=o.default.div`
  font-size: ${(0,m.hO)("18px")};
  font-weight: ${e=>{let{current:t}=e;return t?700:300}};
  padding: 10px 10px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  :after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 3px;
    left: 0;
    background-color: ${e=>{let{theme:t}=e;return t.color.primary}};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  ${e=>{let{current:t}=e;return t&&o.css`
      :after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    `}}
`,Ht=o.default.p`
  margin: 0;
`,Rt=["Monthly","Yearly","Lifelong","Enterprise"],Ct=[{heading:"$149 / month",subHeading:"Within this price, you receive:",listItems:["A multi-tenant license for a single project","Unlimited traffic & users","Internal deployment","Debugging support & free updates"],buttons:[{text:"Buy now",to:"https://sowl.co/s/SPRv4",newTab:!1}]},{heading:"$1490 / year",subHeading:"Within this price, you receive:",listItems:["A multi-tenant license for a single project","Unlimited traffic & users","Internal deployment","Debugging support & free updates"],buttons:[{text:"Buy now",to:"https://sowl.co/s/eEjpk",newTab:!1}]},{heading:"$4900",subHeading:"Within this price, you receive:",listItems:["A multi-tenant lifetime license for a single project","Unlimited traffic & users","Internal deployment","Debugging support & free updates"],buttons:[{text:"Buy now",to:"https://sowl.co/s/7jLwM",newTab:!1}]},{heading:"Price estimation based on your needs",subHeading:"We also provide:",listItems:["Multi-project licenses","Custom extensions","Training sessions","Integrations"],buttons:[{text:"Contact us",to:"https://www.vazco.eu/contact-us",newTab:!1}],subtitle:"Contact us to estimate your project based on business requirements."}],Wt=()=>{const[e,t]=(0,i.useState)(0);return i.createElement(we,{id:"pricing"},i.createElement(Qt,null,i.createElement(Ee,{level:2,size:"lg",marginBottom:24},"Pricing"),i.createElement(Ht,null,"Interested in using Forminer? Find the plan that suits you best."),i.createElement(Yt,null,Rt.map(((a,n)=>i.createElement(Nt,{key:n,current:n===e,onClick:()=>t(n)},a)))),i.createElement(Kt,Ct[e])))};var qt,Ut,Xt=a(2513),Jt=a(4965),$t=a(2425);function _t(){return _t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},_t.apply(this,arguments)}const ea=e=>{let{title:t,titleId:a,...n}=e;return i.createElement("svg",_t({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:18,height:18,role:"img","aria-labelledby":a},n),t?i.createElement("title",{id:a},t):null,qt||(qt=i.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})),Ut||(Ut=i.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))},ta=o.default.div`
  max-width: 500px;
`,aa=o.default.p`
  margin: 0;
  font-weight: 500;
`,na=(0,o.default)((e=>{let{lastChild:t,...a}=e;return i.createElement(Xt.Z,a)}))`
  && {
    box-shadow: none;
    background-color: transparent;
    margin: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);

    ${e=>{let{lastChild:t}=e;return t&&"border-bottom: 0;"}}
    &.Mui-expanded {
      margin-top: 0;
    }

    &:before {
      display: none;
    }
  }
`,ra=(0,o.default)($t.Z)`
  && {
    padding: 60px 0;

    .MuiExpansionPanelSummary-content {
      margin: 0;
      padding-right: 30px;
      position: relative;
      display: flex;
      justify-content: space-between;
    }
  }
`,ia=(0,o.default)(ea)`
  width: 24px;
  height: 24px;
  margin-top: 2px;
  transition: transform 0.2s ease-out;
  ${e=>{let{isExpanded:t}=e;return t&&"transform: rotate(-225deg);"}}
`,la=[{question:"What is Forminer?",answer:"It\u2019s a WYSIWYG React form builder. It allows you to build single- and multi-page forms, add custom validation, and configure conditional rendering. To put it in another way, It\u2019s a ready-to-use set of React components for your project to have a fully functional Forminer in minutes."},{question:"How is Forminer different from Formium, TypeForm, or JotForm?",answer:[{content:"Forminer is a set of React components, and TypeForm/JotForm are SaaS products. The primary difference between these is that the Forminer becomes a part of your project and you integrate it directly in the code, while the others are external applications.",list:["That implies you decide what you do with the data gathered with Forminer, while the others store it on their systems and give you options to access it."]},{content:"Formium is also a set of React components for rendering the built forms, but to build them, you have to interact with their SaaS backend. That\u2019s where you create the forms and store the gathered data (by default). Forminer is distributed in its entirety as source code, including both the rendering of built forms and the Forminer itself.",list:["The difference is that the Forminer definition (how the form looks like) is part of your app, can be adjusted, extended, and even generated by your app.","Also, because there\u2019s no backend Forminer contacts, it can also work offline (if your app supports that)."]}]},{question:"Is Forminer Open Source?",answer:"No, Forminer is not open source. However, its core \u2013 uniforms \u2013 is a set of 100% open source (MIT licensed) packages, hosted on GitHub."},{question:"Is Forminer compatible with technologies other than React?",answer:"Forminer requires React to work, but you can embed it in your application even if it\u2019s not there yet (e.g., it\u2019s an Angular- or Vue-based app)."}],oa=(0,o.default)(Jt.Z)`
  && {
    padding: 0;
  }
`,sa=()=>{const[e,t]=(0,i.useState)("");return i.createElement(we,{alternativeBackground:!0},i.createElement(G,null,i.createElement(w.Z,{spacing:3,container:!0},i.createElement(w.Z,{xs:12,lg:6,item:!0},i.createElement(ta,null,i.createElement(Ee,{level:2,size:"lg",isStrong:!0},"Frequently asked questions"))),i.createElement(w.Z,{xs:12,lg:6,item:!0},la.map(((a,n)=>{let{question:r,answer:l}=a;const o=e===`panel${n}`;return i.createElement(na,{key:`panel${n}`,expanded:o,onChange:(s=`panel${n}`,(e,a)=>{t(a?s:"")}),lastChild:la.length===n+1,square:!0},i.createElement(ra,{"aria-controls":`panel${n}d-content`},i.createElement(aa,null,r),i.createElement(ia,{isExpanded:o})),i.createElement(oa,null,Array.isArray(l)?i.createElement(ue,null,l.map((e=>{let{content:t,list:a}=e;return i.createElement(he,{key:t},t,Array.isArray(a)&&i.createElement(ue,null,a.map((e=>i.createElement(he,{key:e},e)))))}))):i.createElement("p",null,l)));var s}))))))};var ma=a(86);const ca=o.default.footer`
  background-color: ${e=>{let{theme:t}=e;return t.color.darkBlue}};
  overflow: hidden;
  padding: 20px 0;
  ${d.greaterThan("md")`
    padding: 30px 0;
  `}
  color: ${e=>{let{theme:t}=e;return t.color.white}};
`,da=o.default.div`
  margin-top: 42px;
  padding-bottom: 56px;
`,pa=o.default.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  ${d.greaterThan("md")`
    width: 20%
  `}
`,xa=o.default.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,ha=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`,ua=o.default.div`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  border: 2px dashed white;
  ${d.greaterThan("md")`
    max-width: 20%
  `}
`,ka=o.default.p`
  text-align: center;
  padding-top: 1.5em;
  font-size: 16px;
`,fa=o.default.li`
  margin-bottom: 10;
`,ga=o.css`
  background-color: inherit;
  border: none;
  font-size: 16px;
  font-weight: 300;
  color: white;
  transition: all 0.2s ease-out;
  &:hover {
    color: black;
    cursor: pointer;
  }
`,ya=o.default.button`
  ${ga}
  padding: 0;
`,Ea=o.default.a`
  ${ga}
  text-decoration: none !important;
`,ba=o.default.a`
  ${ga}
  text-decoration: none !important;
`,Aa=[{name:"Demo",link:"demo"},{name:"Docs",link:"docs"},{name:"Custom solutions",link:"https://www.vazco.eu/"}],va=[{name:"Installation",link:"https://forminer.com/docs/installation"},{name:"Handling custom components",link:"https://forminer.com/docs/custom-components"},{name:"Integration",link:"https://forminer.com/docs/integration"}],wa=()=>{const e=(0,A.Z)(),t=(0,v.Z)(e.breakpoints.down("sm"));return i.createElement(ca,null,i.createElement(G,null,i.createElement(da,null,i.createElement(ma.Z,{gridColumnGap:20,display:"flex",flexDirection:t?"column":"row",alignContent:"space-around",justifyContent:"center",flexWrap:"wrap"},i.createElement(ua,null,i.createElement("img",{width:75,height:75,alt:"forminer logo",src:"img/forminer-logo.svg"}),i.createElement(ka,null,"Powerful tool for building forms in React")),i.createElement(pa,null,i.createElement("h5",null,"Product"),i.createElement("ul",null,i.createElement(fa,null,i.createElement(ya,{onClick:e=>((e,t)=>{e.preventDefault();const a=document.getElementById(t);a&&a.scrollIntoView()})(e,"pricing")},"Pricing")),Aa.map((e=>i.createElement(fa,{key:e.link},i.createElement(Ea,{href:e.link},e.name)))))),i.createElement(pa,null,i.createElement("h5",null,"First steps"),i.createElement("ul",null,va.map((e=>i.createElement(fa,{key:e.link},i.createElement(Ea,{href:e.link},e.name)))))),i.createElement(xa,null,i.createElement("h5",null,"Start a conversation!"),i.createElement(ba,{href:"mailto:hello@forminer.com"},"hello@forminer.com"),i.createElement(ha,null,i.createElement("a",{href:"https://www.vazco.eu/",target:"_blank",rel:"noreferrer noopener"},i.createElement("img",{src:"img/vazco-logo-2023.svg",alt:"Vazco.eu",width:"150",height:"auto"})),i.createElement("p",{style:{marginBottom:0,fontSize:16}},`Copyright \xa9 2020 - ${(new Date).getFullYear()}`),i.createElement("p",{style:{fontSize:16}},"All Rights Reserved")))))))},Ba=()=>i.createElement(i.Fragment,null,i.createElement(b,null),i.createElement(n.Z,null,i.createElement("link",{rel:"preload",href:a(3192),as:"image",type:"image/webp"})),i.createElement(r.Z,{title:"Forminer | Build Forms in React the way you need | Vazco"},i.createElement(g,null,i.createElement(de,null),i.createElement(He,null),i.createElement(it,null),i.createElement(ct,{heading:"How can these solutions help your project?",buttonText:"Ask our CTO"}),i.createElement(Vt,null),i.createElement(Ot,null),i.createElement(Wt,null),i.createElement(jt,null),i.createElement(sa,null),i.createElement(wa,null))))},3192:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/forminer-48ddf33de3f8122e534b54e709ce5fe1.webp"}}]);