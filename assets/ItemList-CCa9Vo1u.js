import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as t}from"./index-3LwI-BAG.js";import{M as s,C as r}from"./index-bMLgyUK2.js";import{Default as a}from"./ItemList.stories-BysQ9uIP.js";import"./index-B-SYruCi.js";import"./iframe-cw8r5SXd.js";import"./index-u5h8o4a9.js";import"./index-C-aVi5AG.js";import"./index-NOh9rqHv.js";import"./CSSTransition-fp5K7w0O.js";import"./StyleFadeTransition--5_ql6XF.js";function i(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Examples/Transition Group/Item List"}),`
`,e.jsx(n.h1,{id:"transition-group-example-item-list",children:"Transition Group Example: Item List"}),`
`,e.jsxs(n.p,{children:["This example demonstrates how to use the ",e.jsx(n.code,{children:"TransitionGroup"})," component with an array of items to manage animations when adding or removing elements."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"TransitionGroup"})," in your project, you can follow the example below:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TransitionGroup>
  {items.map((item) => (
    <FadeTransition key={item.id}>
      <div>{item.content}</div>
    </FadeTransition>
  ))}
</TransitionGroup>
`})}),`
`,e.jsx(n.h2,{id:"live-demo",children:"Live Demo"}),`
`,e.jsxs(n.p,{children:["Check out the live demo below to see the ",e.jsx(n.code,{children:"TransitionGroup"})," in action:"]}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h2,{id:"source-code",children:"Source Code"}),`
`,e.jsxs(n.p,{children:["The source code for this example is available on ",e.jsx(n.a,{href:"https://github.com/fakundo/react-transitioning/blob/main/stories/examples/ItemList.stories.tsx",rel:"nofollow",children:"GitHub"}),"."]})]})}function g(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{g as default};
