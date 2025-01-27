import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as o}from"./index-3LwI-BAG.js";import{M as a,S as s,C as r}from"./index-CmglxkYy.js";import{Default as c}from"./FadeTransitionClassNames.stories-DpIIzKky.js";import"./index-B-SYruCi.js";import"./iframe-Ba7t0kxX.js";import"./index-u5h8o4a9.js";import"./index-C-aVi5AG.js";import"./index-NOh9rqHv.js";import"./CSSTransition-eKwl1jvd.js";const d=`import { CSSTransition, CSSTransitionProps } from 'react-transitioning';
import './CSSFadeTransition.css';

export type FadeTransitionProps = Omit<CSSTransitionProps, 'classNames'>;

export function FadeTransition(props: FadeTransitionProps) {
  return <CSSTransition {...props} classNames="fade" />;
}
`,l=`.fade-apper {
  opacity: 0;
}
.fade-apper-active {
  opacity: 1;
  transition: opacity 500ms;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  opacity: 1;
  transition: opacity 500ms;
}
.fade-exit {
  opacity: 1;
}
.fade-exit-active {
  opacity: 0;
  transition: opacity 500ms;
}
.fade-exit-done {
  opacity: 0;
}
`;function t(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Examples/Fade Transition/Class Names"}),`
`,n.jsx(e.h1,{id:"fade-transition-with-class-names",children:"Fade Transition with Class Names"}),`
`,n.jsxs(e.p,{children:["This example demonstrates how to create a fade transition using the ",n.jsx(e.code,{children:"CSSTransition"})," component with class names for styling."]}),`
`,n.jsx(e.h2,{id:"code-example",children:"Code Example"}),`
`,n.jsx(e.p,{children:"Here’s the implementation:"}),`
`,n.jsx(s,{code:d,language:"tsx",dark:!0}),`
`,n.jsxs(e.p,{children:["File: ",n.jsx(e.code,{children:"CSSFadeTransition.css"})]}),`
`,n.jsx(s,{code:l,language:"css",dark:!0}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["You can easily use the ",n.jsx(e.code,{children:"FadeTransition"})," component in your project like this:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<FadeTransition in={visible}>
  <div>Fading element</div>
</FadeTransition>
`})}),`
`,n.jsx(e.h2,{id:"explanation",children:"Explanation:"}),`
`,n.jsxs(e.p,{children:["The example implements a fading transition effect using the ",n.jsx(e.code,{children:"StyleTransition"})," component. Below are the key points:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"CSS Classes for Animation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["The ",n.jsx(e.code,{children:"classNames"})," prop defines the base name for the transition classes (e.g., ",n.jsx(e.code,{children:"fade"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"CSSTransition"})," automatically appends suffixes like ",n.jsx(e.code,{children:"-enter"}),", ",n.jsx(e.code,{children:"-enter-active"}),", ",n.jsx(e.code,{children:"-exit"}),", and ",n.jsx(e.code,{children:"-exit-active"})," to match the different transition phases."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Transition Control"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["The ",n.jsx(e.code,{children:"in"})," prop toggles the visibility of the component and triggers the appropriate CSS animations (e.g., enter/exit)."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Reusability"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["By encapsulating logic into a ",n.jsx(e.code,{children:"FadeTransition"})," component, you can easily reuse fade animations across your project."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"live-demo",children:"Live Demo"}),`
`,n.jsxs(e.p,{children:["Check out the live demo below to see the ",n.jsx(e.code,{children:"FadeTransition"})," in action:"]}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(e.h2,{id:"source-code",children:"Source Code"}),`
`,n.jsxs(e.p,{children:["The source code for this example is available on ",n.jsx(e.a,{href:"https://github.com/fakundo/react-transitioning/blob/main/stories/examples/FadeTransitionClassNames.stories.tsx",rel:"nofollow",children:"GitHub"}),"."]})]})}function S(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{S as default};
