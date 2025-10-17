import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as o}from"./index-B-SYruCi.js";import{T as g}from"./CSSTransition-C2y1aoT6.js";const w={tags:["!dev"]},e={render:()=>{const[n,l]=o.useState(!0),[s,u]=o.useState(!0),c=()=>l(!n),d=()=>u(!s);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:c,type:"button",children:"Toggle visibility"}),t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",checked:s,onChange:d}),"Always mounted"]}),t.jsx("hr",{}),t.jsx(g,{in:n,alwaysMounted:s,children:y=>t.jsx("pre",{children:JSON.stringify(y,null,"  ")})})]})}};var i,a,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    const [alwaysMounted, setAlwaysMounted] = useState(true);
    const toggleVisibility = () => setVisible(!visible);
    const toggleAlwaysMounted = () => setAlwaysMounted(!alwaysMounted);
    return <>
        <button onClick={toggleVisibility} type="button">
          Toggle visibility
        </button>
        <label>
          <input type="checkbox" checked={alwaysMounted} onChange={toggleAlwaysMounted} />
          Always mounted
        </label>
        <hr />
        <Transition in={visible} alwaysMounted={alwaysMounted}>
          {transitionState => <pre>{JSON.stringify(transitionState, null, '  ')}</pre>}
        </Transition>
      </>;
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,w as default};
