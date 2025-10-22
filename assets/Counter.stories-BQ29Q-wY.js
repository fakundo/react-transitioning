import{j as r}from"./jsx-runtime-CLpGMVip.js";import{a as u}from"./CSSTransition-p54P5Xt1.js";import{r as t}from"./index-B-SYruCi.js";import{F as p}from"./StyleFadeTransition-BWikRFW8.js";const S={tags:["!dev"]},e={render:()=>{const[n,i]=t.useState(0);return t.useEffect(()=>{const c=setInterval(()=>{i(d=>d+1)},1e3);return()=>{clearInterval(c)}},[]),r.jsx(u,{duration:1e3,children:r.jsx(p,{children:r.jsx("div",{style:{fontSize:60},children:n})},n)})}};var s,a,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          <div style={{
          fontSize: 60
        }}>{sec}</div>
        </FadeTransition>
      </TransitionGroup>;
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,S as default};
