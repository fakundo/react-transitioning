import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as n}from"./index-B-SYruCi.js";import{a as T}from"./CSSTransition-p54P5Xt1.js";import{F as o}from"./StyleFadeTransition-BWikRFW8.js";const x={tags:["!dev"]},e={render:()=>{const[s,a]=n.useState(!0),[i,h]=n.useState(!0),[r,l]=n.useState(!1),u=()=>a(!s),g=()=>h(!i),I=()=>l(!r);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"group",children:[t.jsx("button",{onClick:u,type:"button",children:"Toggle first item"}),t.jsx("button",{onClick:g,type:"button",children:"Toggle second item"}),t.jsx("button",{onClick:I,type:"button",children:"Toggle third item"})]}),t.jsx("hr",{}),t.jsxs(T,{exit:!0,children:[s&&t.jsx(o,{children:t.jsx("div",{children:"First item"})}),i&&t.jsx(o,{children:t.jsx("div",{children:"Second item"})}),r&&t.jsx(o,{children:t.jsx("div",{children:"Third item"})})]})]})}};var d,m,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [showFirstItem, setShowFirstItem] = useState(true);
    const [showSecondItem, setShowSecondItem] = useState(true);
    const [showThirdItem, setShowThirdItem] = useState(false);
    const toggleFirstItem = () => setShowFirstItem(!showFirstItem);
    const toggleSecondItem = () => setShowSecondItem(!showSecondItem);
    const toggleThirdItem = () => setShowThirdItem(!showThirdItem);
    return <>
        <div className="group">
          <button onClick={toggleFirstItem} type="button">
            Toggle first item
          </button>
          <button onClick={toggleSecondItem} type="button">
            Toggle second item
          </button>
          <button onClick={toggleThirdItem} type="button">
            Toggle third item
          </button>
        </div>
        <hr />
        <TransitionGroup exit>
          {showFirstItem && <FadeTransition>
              <div>First item</div>
            </FadeTransition>}
          {showSecondItem && <FadeTransition>
              <div>Second item</div>
            </FadeTransition>}
          {showThirdItem && <FadeTransition>
              <div>Third item</div>
            </FadeTransition>}
        </TransitionGroup>
      </>;
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,x as default};
