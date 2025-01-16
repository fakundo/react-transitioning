import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-3LwI-BAG.js";import{M as t,C as s}from"./index-421-uJMs.js";import{Default as d}from"./ConditionalRender.stories-D7FGQ_c_.js";import"./index-B-SYruCi.js";import"./iframe-BV7mTgF-.js";import"./index-u5h8o4a9.js";import"./index-C-aVi5AG.js";import"./index-NOh9rqHv.js";import"./CSSTransition-B8Ww_fk3.js";import"./StyleFadeTransition-bdVO9Axl.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Examples/Transition Group/Conditional Render"}),`
`,n.jsx(e.h1,{id:"transition-group-example-conditional-render",children:"Transition Group Example: Conditional Render"}),`
`,n.jsxs(e.p,{children:["This example demonstrates how to use the ",n.jsx(e.code,{children:"TransitionGroup"})," component with conditionally rendered children. By leveraging ",n.jsx(e.code,{children:"TransitionGroup"}),", you can easily handle animations for elements that are dynamically added or removed based on conditions."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["To use the ",n.jsx(e.code,{children:"TransitionGroup"})," with conditionally rendered children in your project, follow the example below:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<TransitionGroup>
  {shouldRenderFirstElement && (
    <FadeTransition>
      <div>First element</div>
    </FadeTransition>
  )}
  {shouldRenderSecondElement && (
    <FadeTransition>
      <div>Second element</div>
    </FadeTransition>
  )}
</TransitionGroup>
`})}),`
`,n.jsx(e.h2,{id:"explanation",children:"Explanation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:[n.jsx(e.code,{children:"shouldRenderFirstElement"})," and ",n.jsx(e.code,{children:"shouldRenderSecondElement"})]}),": These are boolean conditions controlling whether specific elements should appear or disappear."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"FadeTransition"})}),": Wraps each child with animations for entering and exiting phases."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"TransitionGroup"})}),": Handles the mounting and unmounting of its children with smooth transitions."]}),`
`]}),`
`,n.jsx(e.h2,{id:"live-demo",children:"Live Demo"}),`
`,n.jsxs(e.p,{children:["Check out the live demo below to see the ",n.jsx(e.code,{children:"TransitionGroup"})," in action with conditionally rendered children:"]}),`
`,n.jsx(s,{of:d})]})}function f(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{f as default};
