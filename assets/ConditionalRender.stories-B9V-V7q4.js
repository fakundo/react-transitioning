import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as n}from"./index-B-SYruCi.js";import{a as g}from"./CSSTransition-C2y1aoT6.js";import{F as o}from"./StyleFadeTransition-M4YQNHeZ.js";const x={tags:["!dev"]},e={render:()=>{const[r,a]=n.useState(!0),[s,h]=n.useState(!0),[i,I]=n.useState(!1),l=()=>a(!r),u=()=>h(!s),T=()=>I(!i);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:l,type:"button",children:"Toggle first item"}),t.jsx("button",{onClick:u,type:"button",children:"Toggle second item"}),t.jsx("button",{onClick:T,type:"button",children:"Toggle third item"}),t.jsx("hr",{}),t.jsxs(g,{exit:!0,children:[r&&t.jsx(o,{children:t.jsx("pre",{children:"FIRST ITEM"})}),s&&t.jsx(o,{children:t.jsx("pre",{children:"SECOND ITEM"})}),i&&t.jsx(o,{children:t.jsx("pre",{children:"THIRD ITEM"})})]})]})}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [showFirstItem, setShowFirstItem] = useState(true);
    const [showSecondItem, setShowSecondItem] = useState(true);
    const [showThirdItem, setShowThirdItem] = useState(false);
    const toggleFirstItem = () => setShowFirstItem(!showFirstItem);
    const toggleSecondItem = () => setShowSecondItem(!showSecondItem);
    const toggleThirdItem = () => setShowThirdItem(!showThirdItem);
    return <>
        <button onClick={toggleFirstItem} type="button">
          Toggle first item
        </button>
        <button onClick={toggleSecondItem} type="button">
          Toggle second item
        </button>
        <button onClick={toggleThirdItem} type="button">
          Toggle third item
        </button>
        <hr />
        <TransitionGroup exit>
          {showFirstItem && <FadeTransition>
              <pre>FIRST ITEM</pre>
            </FadeTransition>}
          {showSecondItem && <FadeTransition>
              <pre>SECOND ITEM</pre>
            </FadeTransition>}
          {showThirdItem && <FadeTransition>
              <pre>THIRD ITEM</pre>
            </FadeTransition>}
        </TransitionGroup>
      </>;
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,x as default};
