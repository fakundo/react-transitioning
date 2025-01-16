import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as t}from"./index-3LwI-BAG.js";import{M as o}from"./index-DuJwqPZ6.js";import"./index-B-SYruCi.js";import"./iframe-BM4zL1DI.js";import"./index-u5h8o4a9.js";import"./index-C-aVi5AG.js";import"./index-NOh9rqHv.js";function e(s){const i={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Introduction"}),`
`,n.jsx(i.h1,{id:"react-transitioning",children:"react-transitioning"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.a,{href:"https://www.npmjs.com/package/react-transitioning",rel:"nofollow",children:n.jsx(i.img,{src:"https://img.shields.io/npm/v/react-transitioning.svg",alt:"npm"})}),`
`,n.jsx(i.a,{href:"https://github.com/fakundo/react-transitioning",rel:"nofollow",children:n.jsx(i.img,{src:"https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white",alt:"GitHub"})})]}),`
`,n.jsxs(i.p,{children:["A simple React library that provides components for managing animations and transitions with ease. It allows seamless transitions for both individual components and groups of elements. The library is inspired by ",n.jsx(i.a,{href:"https://reactcommunity.org/react-transition-group/",rel:"nofollow",children:"react-transition-group"})," and shares a similar API with a few notable differences."]}),`
`,n.jsx(i.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Ease of Use"}),": Simple and intuitive API for creating animations and transitions for both components and groups of elements."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Modern Approach"}),": Built with functional components and hooks, avoiding deprecated methods like ",n.jsx(i.code,{children:"findDOMNode"}),"."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"No External Dependencies"}),": No additional dependencies, keeping your project lightweight and reducing potential conflicts."]}),`
`,n.jsxs(i.li,{children:[n.jsxs(i.strong,{children:["No ",n.jsx(i.code,{children:"nodeRef"})," Required"]}),": Unlike ",n.jsx(i.code,{children:"react-transition-group"}),", there's no need to pass a ",n.jsx(i.code,{children:"nodeRef"})," prop."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Flexibility"}),": Supports both CSS-based and inline style-based animations."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Lightweight"}),": Minimal bundle size to keep your application fast."]}),`
`]}),`
`,n.jsx(i.p,{children:"The library provides components that allow you to easily create custom components with animations and transitions tailored to your needs. You can integrate them into your own React components to add smooth animations and transitions with minimal effort."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`<FadeTransition in={visible}>
  <div>Fading element</div>
</FadeTransition>
`})}),`
`,n.jsx(i.h2,{id:"installation",children:"Installation"}),`
`,n.jsxs(i.p,{children:["To install ",n.jsx(i.code,{children:"react-transitioning"}),", run the following command in your project:"]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-bash",children:`npm install react-transitioning
# or
yarn add react-transitioning
`})}),`
`,n.jsx(i.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.a,{href:"../?path=/docs/examples-basic-transition--docs",children:"Basic Transition Component"}),": Demonstrates the functionality of a basic transition component."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.a,{href:"../?path=/docs/examples-fade-transition-inline-styles--docs",children:"Fade Transition with Inline Styles"}),": Implements a fading transition using inline styles."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.a,{href:"../?path=/docs/examples-fade-transition-class-names--docs",children:"Fade Transition with Class Names"}),": Implements a fading transition using CSS class names."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.a,{href:"../?path=/docs/examples-transition-group-conditional-render--docs",children:"Transition Group: Conditional Render"}),": Renders children conditionally with animations."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.a,{href:"../?path=/docs/examples-transition-group-item-list--docs",children:"Transition Group: Item List"}),": Renders an array of items with animations."]}),`
`]}),`
`,n.jsx(i.h2,{id:"components-overview",children:"Components Overview"}),`
`,n.jsx(i.p,{children:"The library includes the following components to manage transitions and animations:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.a,{href:"../?path=/docs/components-transition--docs",children:"Transition"}),": Controls the mounting and unmounting of a component with transitions."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.a,{href:"../?path=/docs/components-styletransition--docs",children:"StyleTransition"}),": Applies inline styles during the transition phases."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.a,{href:"../?path=/docs/components-csstransition--docs",children:"CSSTransition"}),": Adds CSS classes during the transition phases for seamless animations."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.a,{href:"../?path=/docs/components-transitiongroup--docs",children:"TransitionGroup"}),": Manages a group of transitioning elements."]}),`
`]})]})}function x(s={}){const{wrapper:i}={...t(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(e,{...s})}):e(s)}export{x as default};
