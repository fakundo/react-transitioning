import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as s}from"./index-3LwI-BAG.js";import{M as o,S as r,C as a}from"./index-Bi23Sk9p.js";import{Default as l}from"./FadeTransitionStyles.stories-BdHZR3Tq.js";import"./index-B-SYruCi.js";import"./iframe-CT30NpRr.js";import"./index-u5h8o4a9.js";import"./index-C-aVi5AG.js";import"./index-NOh9rqHv.js";import"./StyleFadeTransition-CH4Gj1N2.js";import"./CSSTransition-GvfMPfYj.js";const c=`import { useMemo } from 'react';
import { StyleTransition, StyleTransitionProps } from 'react-transitioning';

export type FadeTransitionProps = Omit<StyleTransitionProps, 'styles'>;

export function FadeTransition(props: FadeTransitionProps) {
  const { duration = 500 } = props;

  const styles = useMemo(
    () => ({
      appear: { opacity: 0 },
      appearActive: { opacity: 1, transition: \`opacity \${duration}ms\` },
      enter: { opacity: 0 },
      enterActive: { opacity: 1, transition: \`opacity \${duration}ms\` },
      exit: { opacity: 1 },
      exitActive: { opacity: 0, transition: \`opacity \${duration}ms\` },
      exitDone: { opacity: 0 },
    }),
    [duration],
  );

  return <StyleTransition {...props} styles={styles} />;
}
`;function t(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Examples/Fade Transition/Inline Styles"}),`
`,n.jsx(e.h1,{id:"fade-transition-with-inline-styles",children:"Fade Transition with Inline Styles"}),`
`,n.jsxs(e.p,{children:["This example demonstrates how to create a fade transition using the ",n.jsx(e.code,{children:"StyleTransition"})," component with custom inline styles."]}),`
`,n.jsx(e.h2,{id:"code-example",children:"Code Example"}),`
`,n.jsx(e.p,{children:"Here’s the implementation:"}),`
`,n.jsx(r,{code:c,language:"tsx",dark:!0}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["You can easily use the ",n.jsx(e.code,{children:"FadeTransition"})," component in your project like this:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<FadeTransition in={visible}>
  <div>Fading element</div>
</FadeTransition>
`})}),`
`,n.jsx(e.h2,{id:"explanation",children:"Explanation"}),`
`,n.jsxs(e.p,{children:["The example implements a fading transition effect using the ",n.jsx(e.code,{children:"StyleTransition"})," component. Below are the key points:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Custom Inline Styles"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Inline styles are used to define the appearance for different phases of the transition (e.g., enter, exit)."}),`
`,n.jsx(e.li,{children:"This allows you to avoid external CSS files and keep styles self-contained."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Transition Control"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["The ",n.jsx(e.code,{children:"in"})," prop determines whether the component is visible or not, triggering the appropriate transition (enter/exit)."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Reusability"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["By wrapping the logic inside a reusable ",n.jsx(e.code,{children:"FadeTransition"})," component, you can easily integrate fade animations across your project."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Dynamic Animation Phases"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["The ",n.jsx(e.code,{children:"StyleTransition"})," component applies specific inline styles during each phase of the transition (",n.jsx(e.code,{children:"enter"}),", ",n.jsx(e.code,{children:"enterActive"}),", ",n.jsx(e.code,{children:"exit"}),", etc.)."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"live-demo",children:"Live Demo"}),`
`,n.jsxs(e.p,{children:["Check out the live demo below to see the ",n.jsx(e.code,{children:"FadeTransition"})," in action:"]}),`
`,n.jsx(a,{of:l}),`
`,n.jsx(e.h2,{id:"source-code",children:"Source Code"}),`
`,n.jsxs(e.p,{children:["The source code for this example is available on ",n.jsx(e.a,{href:"https://github.com/fakundo/react-transitioning/blob/main/stories/examples/FadeTransitionStyles.stories.tsx",rel:"nofollow",children:"GitHub"}),"."]})]})}function S(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{S as default};
