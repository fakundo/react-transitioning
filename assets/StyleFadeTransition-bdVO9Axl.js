import{j as i}from"./jsx-runtime-CLpGMVip.js";import{r}from"./index-B-SYruCi.js";import{S as o}from"./CSSTransition-B8Ww_fk3.js";function n(t){const{duration:e=500}=t,a=r.useMemo(()=>({appear:{opacity:0},appearActive:{opacity:1,transition:`opacity ${e}ms`},enter:{opacity:0},enterActive:{opacity:1,transition:`opacity ${e}ms`},exit:{opacity:1},exitActive:{opacity:0,transition:`opacity ${e}ms`},exitDone:{opacity:0}}),[e]);return i.jsx(o,{...t,styles:a})}try{n.displayName="FadeTransition",n.__docgenInfo={description:"",displayName:"FadeTransition",props:{onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"(() => void)"}},onEntering:{defaultValue:null,description:"",name:"onEntering",required:!1,type:{name:"(() => void)"}},onEntered:{defaultValue:null,description:"",name:"onEntered",required:!1,type:{name:"(() => void)"}},onExit:{defaultValue:null,description:"",name:"onExit",required:!1,type:{name:"(() => void)"}},onExiting:{defaultValue:null,description:"",name:"onExiting",required:!1,type:{name:"(() => void)"}},onExited:{defaultValue:null,description:"",name:"onExited",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"The child element to which the animation will be applied.\nThis should be a single React element that supports the `style` prop.\nThe `style` prop will be combined with the styles specified in the `styles` prop for the current transition phase.",name:"children",required:!0,type:{name:"ReactElement<{ style?: CSSProperties | undefined; }, string | JSXElementConstructor<any>>"}},in:{defaultValue:{value:"false"},description:`If true, the component is shown and transitions through the "appear", "enter", or "exit" phases to the "entered" state.
If false, it transitions through the "exit" phases to the "exited" state.`,name:"in",required:!1,type:{name:"boolean"}},appear:{defaultValue:{value:"false"},description:'If true, the transition will run the "appear" phases ("appear", "appearActive", "appearDone") when the component is first mounted.',name:"appear",required:!1,type:{name:"boolean"}},enter:{defaultValue:{value:"true"},description:'If true, enables the "enter" phases ("enter", "enterActive", "enterDone") when the component enters.',name:"enter",required:!1,type:{name:"boolean"}},exit:{defaultValue:{value:"true"},description:'If true, enables the "exit" phases ("exit", "exitActive", "exitDone") when the component leaves.',name:"exit",required:!1,type:{name:"boolean"}},duration:{defaultValue:{value:"500"},description:"Duration of the transition in milliseconds. Can be used to override default durations for the phases.",name:"duration",required:!1,type:{name:"number"}},alwaysMounted:{defaultValue:{value:"false"},description:'If true, the component remains mounted in the DOM even when it transitions to the "exited" state.',name:"alwaysMounted",required:!1,type:{name:"boolean"}},addEndListener:{defaultValue:null,description:`A function called to manually handle the end of a transition phase.
@param phase - The current transition phase (e.g., "appear", "enter", "exit").
@param done - A callback function to signal that the phase is complete.`,name:"addEndListener",required:!1,type:{name:"((phase: TransitionPhase, done: () => void) => void)"}}}}}catch{}export{n as F};
