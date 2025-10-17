import{j as r}from"./jsx-runtime-CLpGMVip.js";import{a as u}from"./CSSTransition-C2y1aoT6.js";import{r as t}from"./index-B-SYruCi.js";import{F as d}from"./StyleFadeTransition-M4YQNHeZ.js";const x={tags:["!dev"]},e={render:()=>{const[n,c]=t.useState(0);return t.useEffect(()=>{const i=setInterval(()=>{c(p=>p+1)},1e3);return()=>{clearInterval(i)}},[]),r.jsx(u,{duration:1e3,children:r.jsx(d,{children:r.jsx("pre",{style:{fontSize:60},children:n})},n)})}};var s,a,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [sec, setSec] = useState(0);
    useEffect(() => {
      const i = setInterval(() => {
        setSec(prevSec => prevSec + 1);
      }, 1000);
      return () => {
        clearInterval(i);
      };
    }, []);
    return <TransitionGroup duration={1000}>
        <FadeTransition key={sec}>
          <pre style={{
          fontSize: 60
        }}>{sec}</pre>
        </FadeTransition>
      </TransitionGroup>;
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,x as default};
