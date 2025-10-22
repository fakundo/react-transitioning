import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as l}from"./index-B-SYruCi.js";import{a as k}from"./CSSTransition-p54P5Xt1.js";import{F as y}from"./StyleFadeTransition-BWikRFW8.js";const m=()=>`Fading item #${Math.random().toString().substring(2,8)}`,F={tags:["!dev"]},i={render:()=>{const[s,c]=l.useState(!1),[e,o]=l.useState(()=>new Array(10).fill("").map(m)),h=()=>o([m(),...e]),f=()=>o([...e,m()]),b=()=>o(e.slice(1)),p=()=>o(e.slice(0,e.length-1)),x=()=>o([...e.slice(0,e.length/2),...e.slice(e.length/2+1)]),S=()=>o([...e.sort(()=>.5-Math.random())]),v=()=>c(!s),g=n=>()=>o([...e.slice(0,n),...e.slice(n+1)]);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"group",children:[t.jsx("button",{onClick:h,type:"button",children:"+ Add item to the start"}),t.jsx("button",{onClick:f,type:"button",children:"+ Add item to the end"}),t.jsx("br",{}),t.jsx("button",{onClick:b,type:"button",children:"× Remove item from the start"}),t.jsx("button",{onClick:x,type:"button",children:"× Remove item from the center"}),t.jsx("button",{onClick:p,type:"button",children:"× Remove item from the end"}),t.jsx("br",{}),t.jsx("button",{onClick:S,type:"button",children:"? Shuffle items"}),t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",checked:s,onChange:v}),"Should animate shuffle"]})]}),t.jsx("hr",{}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:".25rem"},children:t.jsx(k,{exit:!s,children:e.map((n,r)=>t.jsx(y,{children:t.jsxs("div",{children:[t.jsx("button",{onClick:g(r),type:"button",children:"×"}),` ${n}`]})},s?`${n}${r}`:n))})})]})}};var a,u,d;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [shouldAnimateShuffle, setShouldAnimateShuffle] = useState(false);
    const [items, setItems] = useState(() => new Array(10).fill('').map(makeItem));
    const addToStart = () => setItems([makeItem(), ...items]);
    const addToEnd = () => setItems([...items, makeItem()]);
    const removeFromStart = () => setItems(items.slice(1));
    const removeFromEnd = () => setItems(items.slice(0, items.length - 1));
    const removeFromCenter = () => setItems([...items.slice(0, items.length / 2), ...items.slice(items.length / 2 + 1)]);
    const shuffle = () => setItems([...items.sort(() => 0.5 - Math.random())]);
    const toggleShouldAnimateShuffle = () => setShouldAnimateShuffle(!shouldAnimateShuffle);
    const removeItem = (index: number) => () => setItems([...items.slice(0, index), ...items.slice(index + 1)]);
    return <>
        <div className="group">
          <button onClick={addToStart} type="button">
            + Add item to the start
          </button>
          <button onClick={addToEnd} type="button">
            + Add item to the end
          </button>
          <br />
          <button onClick={removeFromStart} type="button">
            × Remove item from the start
          </button>
          <button onClick={removeFromCenter} type="button">
            × Remove item from the center
          </button>
          <button onClick={removeFromEnd} type="button">
            × Remove item from the end
          </button>
          <br />
          <button onClick={shuffle} type="button">
            ? Shuffle items
          </button>
          <label>
            <input type="checkbox" checked={shouldAnimateShuffle} onChange={toggleShouldAnimateShuffle} />
            Should animate shuffle
          </label>
        </div>
        <hr />
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '.25rem'
      }}>
          <TransitionGroup exit={!shouldAnimateShuffle}>
            {items.map((item, index) => <FadeTransition key={shouldAnimateShuffle ? \`\${item}\${index}\` : item}>
                <div>
                  <button onClick={removeItem(index)} type="button">
                    ×
                  </button>
                  {\` \${item}\`}
                </div>
              </FadeTransition>)}
          </TransitionGroup>
        </div>
      </>;
  }
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const T=["Default"];export{i as Default,T as __namedExportsOrder,F as default};
