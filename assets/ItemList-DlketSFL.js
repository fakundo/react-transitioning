import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-3LwI-BAG.js";import{M as r,C as s}from"./index-DuJwqPZ6.js";import{Default as a}from"./ItemList.stories-BGchtVEC.js";import"./index-B-SYruCi.js";import"./iframe-BM4zL1DI.js";import"./index-u5h8o4a9.js";import"./index-C-aVi5AG.js";import"./index-NOh9rqHv.js";import"./CSSTransition-B8Ww_fk3.js";import"./StyleFadeTransition-bdVO9Axl.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Examples/Transition Group/Item List"}),`
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
`,e.jsx(s,{of:a})]})}function g(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{g as default};
