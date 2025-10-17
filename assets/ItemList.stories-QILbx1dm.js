import{j as t}from"./jsx-runtime-CLpGMVip.js";import{r as l}from"./index-B-SYruCi.js";import{a as g}from"./CSSTransition-C2y1aoT6.js";import{F as y}from"./StyleFadeTransition-M4YQNHeZ.js";const i=()=>`Fading item #${Math.random().toString().substring(2,8)}`,F={tags:["!dev"]},m={render:()=>{const[s,d]=l.useState(!1),[e,n]=l.useState(()=>new Array(10).fill("").map(i)),h=()=>n([i(),...e]),f=()=>n([...e,i()]),b=()=>n(e.slice(1)),p=()=>n(e.slice(0,e.length-1)),S=()=>n([...e.slice(0,e.length/2),...e.slice(e.length/2+1)]),x=()=>n([...e.sort(()=>.5-Math.random())]),k=()=>d(!s),v=o=>()=>n([...e.slice(0,o),...e.slice(o+1)]);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:h,type:"button",children:"+ Add item to the start"}),t.jsx("button",{onClick:f,type:"button",children:"+ Add item to the end"}),t.jsx("br",{}),t.jsx("button",{onClick:b,type:"button",children:"× Remove item from the start"}),t.jsx("button",{onClick:S,type:"button",children:"× Remove item from the center"}),t.jsx("button",{onClick:p,type:"button",children:"× Remove item from the end"}),t.jsx("br",{}),t.jsx("button",{onClick:x,type:"button",children:"? Shuffle items"}),t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",checked:s,onChange:k}),"Should animate shuffle"]}),t.jsx("hr",{}),t.jsx(g,{exit:!s,children:e.map((o,r)=>t.jsx(y,{children:t.jsxs("pre",{children:[r,". ",o," ",t.jsx("button",{onClick:v(r),type:"button",children:"× Remove item"})]})},s?`${o}${r}`:o))})]})}};var a,u,c;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
        <hr />
        <TransitionGroup exit={!shouldAnimateShuffle}>
          {items.map((item, index) => <FadeTransition key={shouldAnimateShuffle ? \`\${item}\${index}\` : item}>
              <pre>
                {index}. {item}{' '}
                <button onClick={removeItem(index)} type="button">
                  × Remove item
                </button>
              </pre>
            </FadeTransition>)}
        </TransitionGroup>
      </>;
  }
}`,...(c=(u=m.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const T=["Default"];export{m as Default,T as __namedExportsOrder,F as default};
