import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as n}from"./index-B-SYruCi.js";import{F as d}from"./StyleFadeTransition-BWikRFW8.js";import"./CSSTransition-p54P5Xt1.js";const g={tags:["!dev"]},t={render:()=>{const[r,a]=n.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>a(!r),type:"button",children:"Toggle visibility"}),e.jsx("hr",{}),e.jsx(d,{in:r,alwaysMounted:!0,children:e.jsx("div",{style:{width:100,height:100,borderRadius:"15%",background:"linear-gradient(to bottom right, seagreen, teal)"}})})]})}};var i,s,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          borderRadius: '15%',
          background: 'linear-gradient(to bottom right, seagreen, teal)'
        }} />
        </FadeTransition>
      </>;
  }
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,g as default};
