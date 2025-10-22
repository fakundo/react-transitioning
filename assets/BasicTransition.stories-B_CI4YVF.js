import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as n}from"./index-B-SYruCi.js";import{T as y}from"./CSSTransition-p54P5Xt1.js";const x={tags:["!dev"]},e={render:()=>{const[i,l]=n.useState(!0),[s,u]=n.useState(!0),c=()=>l(!i),d=()=>u(!s);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"group",children:[t.jsx("button",{onClick:c,type:"button",children:"Toggle visibility"}),t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",checked:s,onChange:d}),"Always mounted"]})]}),t.jsx("hr",{}),t.jsx(y,{in:i,alwaysMounted:s,children:g=>t.jsx("pre",{children:JSON.stringify(g,null,"  ")})})]})}};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    const [alwaysMounted, setAlwaysMounted] = useState(true);
    const toggleVisibility = () => setVisible(!visible);
    const toggleAlwaysMounted = () => setAlwaysMounted(!alwaysMounted);
    return <>
        <div className="group">
          <button onClick={toggleVisibility} type="button">
            Toggle visibility
          </button>
          <label>
            <input type="checkbox" checked={alwaysMounted} onChange={toggleAlwaysMounted} />
            Always mounted
          </label>
        </div>
        <hr />
        <Transition in={visible} alwaysMounted={alwaysMounted}>
          {transitionState => <pre>{JSON.stringify(transitionState, null, '  ')}</pre>}
        </Transition>
      </>;
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,x as default};
