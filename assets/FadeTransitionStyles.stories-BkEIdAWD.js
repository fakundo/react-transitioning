import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as a}from"./index-B-SYruCi.js";import{F as l}from"./StyleFadeTransition-BWikRFW8.js";import"./CSSTransition-p54P5Xt1.js";const m={tags:["!dev"]},t={render:()=>{const[i,n]=a.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!i),type:"button",children:"Toggle visibility"}),e.jsx("hr",{}),e.jsx(l,{in:i,alwaysMounted:!0,children:e.jsx("div",{style:{width:100,height:100,background:"olive"}})})]})}};var s,r,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    return <>
        <button onClick={() => setVisible(!visible)} type="button">
          Toggle visibility
        </button>
        <hr />
        <FadeTransition in={visible} alwaysMounted>
          <div style={{
          width: 100,
          height: 100,
          background: 'olive'
        }} />
        </FadeTransition>
      </>;
  }
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,m as default};
