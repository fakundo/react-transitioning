import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as l}from"./index-B-SYruCi.js";import{C as d}from"./CSSTransition-p54P5Xt1.js";function a(t){return e.jsx(d,{...t,classNames:"fade"})}try{a.displayName="FadeTransition",a.__docgenInfo={description:"",displayName:"FadeTransition",props:{onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"(() => void)"}},onEntering:{defaultValue:null,description:"",name:"onEntering",required:!1,type:{name:"(() => void)"}},onEntered:{defaultValue:null,description:"",name:"onEntered",required:!1,type:{name:"(() => void)"}},onExit:{defaultValue:null,description:"",name:"onExit",required:!1,type:{name:"(() => void)"}},onExiting:{defaultValue:null,description:"",name:"onExiting",required:!1,type:{name:"(() => void)"}},onExited:{defaultValue:null,description:"",name:"onExited",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"The child element to which the animation will be applied.\nThis should be a single React element that supports the `className` prop.\nThe `className` prop will be combined with the class name from the `classNames` prop, based on the current transition phase.",name:"children",required:!0,type:{name:"ReactElement<{ className?: string | undefined; }, string | JSXElementConstructor<any>>"}},in:{defaultValue:{value:"false"},description:`If true, the component is shown and transitions through the "appear", "enter", or "exit" phases to the "entered" state.
If false, it transitions through the "exit" phases to the "exited" state.`,name:"in",required:!1,type:{name:"boolean"}},appear:{defaultValue:{value:"false"},description:'If true, the transition will run the "appear" phases ("appear", "appearActive", "appearDone") when the component is first mounted.',name:"appear",required:!1,type:{name:"boolean"}},enter:{defaultValue:{value:"true"},description:'If true, enables the "enter" phases ("enter", "enterActive", "enterDone") when the component enters.',name:"enter",required:!1,type:{name:"boolean"}},exit:{defaultValue:{value:"true"},description:'If true, enables the "exit" phases ("exit", "exitActive", "exitDone") when the component leaves.',name:"exit",required:!1,type:{name:"boolean"}},duration:{defaultValue:{value:"DEFAULT_TRANSITION_DURATION=500"},description:"Duration of the transition in milliseconds. Can be used to override default durations for the phases.",name:"duration",required:!1,type:{name:"number"}},alwaysMounted:{defaultValue:{value:"false"},description:'If true, the component remains mounted in the DOM even when it transitions to the "exited" state.',name:"alwaysMounted",required:!1,type:{name:"boolean"}},addEndListener:{defaultValue:null,description:`A function called to manually handle the end of a transition phase.
@param phase - The current transition phase (e.g., "appear", "enter", "exit").
@param done - A callback function to signal that the phase is complete.`,name:"addEndListener",required:!1,type:{name:"((phase: TransitionPhase, done: () => void) => void)"}}}}}catch{}const h={tags:["!dev"]},n={render:()=>{const[t,o]=l.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!t),type:"button",children:"Toggle visibility"}),e.jsx("hr",{}),e.jsx(a,{in:t,alwaysMounted:!0,children:e.jsx("div",{style:{width:100,height:100,background:"olive"}})})]})}};var i,r,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const m=["Default"];export{n as Default,m as __namedExportsOrder,h as default};
