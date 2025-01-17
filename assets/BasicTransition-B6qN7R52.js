import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as o}from"./index-3LwI-BAG.js";import{M as s,C as r}from"./index-bMLgyUK2.js";import{Default as a}from"./BasicTransition.stories-D16-MJVp.js";import"./index-B-SYruCi.js";import"./iframe-cw8r5SXd.js";import"./index-u5h8o4a9.js";import"./index-C-aVi5AG.js";import"./index-NOh9rqHv.js";import"./CSSTransition-fp5K7w0O.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Examples/Basic Transition"}),`
`,e.jsx(n.h1,{id:"basic-transition-example",children:"Basic Transition Example"}),`
`,e.jsxs(n.p,{children:["This example demonstrates how to use the ",e.jsx(n.code,{children:"Transition"})," component to handle simple transitions. The ",e.jsx(n.code,{children:"Transition"})," component provides information about its current state, which can be used to apply animations or styles dynamically."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Here’s how you can use the ",e.jsx(n.code,{children:"Transition"})," component in your project:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Transition in={visible}>
  {transitionState => <pre>{JSON.stringify(transitionState)}</pre>}
</Transition>
`})}),`
`,e.jsx(n.h2,{id:"explanation",children:"Explanation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"in"}),": A boolean that determines whether the transition is entering or exiting."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"transitionState"}),": An object that represents the current state of the transition, such as ",e.jsx(n.code,{children:"entering"}),", ",e.jsx(n.code,{children:"entered"}),", ",e.jsx(n.code,{children:"exiting"}),", or ",e.jsx(n.code,{children:"exited"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"live-demo",children:"Live Demo"}),`
`,e.jsxs(n.p,{children:["Check out the live demo below to see the ",e.jsx(n.code,{children:"Transition"})," component in action:"]}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h2,{id:"source-code",children:"Source Code"}),`
`,e.jsxs(n.p,{children:["The source code for this example is available on ",e.jsx(n.a,{href:"https://github.com/fakundo/react-transitioning/blob/main/stories/examples/BasicTransition.stories.tsx",rel:"nofollow",children:"GitHub"}),"."]})]})}function b(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{b as default};
