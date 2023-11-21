"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[411],{43896:(e,t,o)=>{o.d(t,{Z:()=>w});var l=o(63366),r=o(87462),n=o(72791),i=o(28182),a=o(94419),s=o(23701),c=o(14036),d=o(31402),u=o(66934),p=o(75878),b=o(21217);function f(e){return(0,b.Z)("MuiTab",e)}const h=(0,p.Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]);var m=o(80184);const v=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],S=(0,u.ZP)(s.Z,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t["textColor".concat((0,c.Z)(o.textColor))],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})((e=>{let{theme:t,ownerState:o}=e;return(0,r.Z)({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},o.label&&{flexDirection:"top"===o.iconPosition||"bottom"===o.iconPosition?"column":"row"},{lineHeight:1.25},o.icon&&o.label&&{minHeight:72,paddingTop:9,paddingBottom:9,["& > .".concat(h.iconWrapper)]:(0,r.Z)({},"top"===o.iconPosition&&{marginBottom:6},"bottom"===o.iconPosition&&{marginTop:6},"start"===o.iconPosition&&{marginRight:t.spacing(1)},"end"===o.iconPosition&&{marginLeft:t.spacing(1)})},"inherit"===o.textColor&&{color:"inherit",opacity:.6,["&.".concat(h.selected)]:{opacity:1},["&.".concat(h.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity}},"primary"===o.textColor&&{color:(t.vars||t).palette.text.secondary,["&.".concat(h.selected)]:{color:(t.vars||t).palette.primary.main},["&.".concat(h.disabled)]:{color:(t.vars||t).palette.text.disabled}},"secondary"===o.textColor&&{color:(t.vars||t).palette.text.secondary,["&.".concat(h.selected)]:{color:(t.vars||t).palette.secondary.main},["&.".concat(h.disabled)]:{color:(t.vars||t).palette.text.disabled}},o.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},o.wrapped&&{fontSize:t.typography.pxToRem(12)})})),w=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiTab"}),{className:s,disabled:u=!1,disableFocusRipple:p=!1,fullWidth:b,icon:h,iconPosition:w="top",indicator:x,label:g,onChange:Z,onClick:C,onFocus:y,selected:B,selectionFollowsFocus:M,textColor:W="inherit",value:P,wrapped:E=!1}=o,R=(0,l.Z)(o,v),T=(0,r.Z)({},o,{disabled:u,disableFocusRipple:p,selected:B,icon:!!h,iconPosition:w,label:!!g,fullWidth:b,textColor:W,wrapped:E}),I=(e=>{const{classes:t,textColor:o,fullWidth:l,wrapped:r,icon:n,label:i,selected:s,disabled:d}=e,u={root:["root",n&&i&&"labelIcon","textColor".concat((0,c.Z)(o)),l&&"fullWidth",r&&"wrapped",s&&"selected",d&&"disabled"],iconWrapper:["iconWrapper"]};return(0,a.Z)(u,f,t)})(T),N=h&&g&&n.isValidElement(h)?n.cloneElement(h,{className:(0,i.Z)(I.iconWrapper,h.props.className)}):h;return(0,m.jsxs)(S,(0,r.Z)({focusRipple:!p,className:(0,i.Z)(I.root,s),ref:t,role:"tab","aria-selected":B,disabled:u,onClick:e=>{!B&&Z&&Z(e,P),C&&C(e)},onFocus:e=>{M&&!B&&Z&&Z(e,P),y&&y(e)},ownerState:T,tabIndex:B?0:-1},R,{children:["top"===w||"start"===w?(0,m.jsxs)(n.Fragment,{children:[N,g]}):(0,m.jsxs)(n.Fragment,{children:[g,N]}),x]}))}))},25228:(e,t,o)=>{o.d(t,{Z:()=>K});var l=o(63366),r=o(87462),n=o(72791),i=(o(57441),o(28182)),a=o(94419),s=o(21607),c=o(66934),d=o(31402),u=o(13967),p=o(83199);let b;function f(){if(b)return b;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),b="reverse",e.scrollLeft>0?b="default":(e.scrollLeft=1,0===e.scrollLeft&&(b="negative")),document.body.removeChild(e),b}function h(e,t){const o=e.scrollLeft;if("rtl"!==t)return o;switch(f()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function m(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var v=o(40162),S=o(17602),w=o(80184);const x=["onChange"],g={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var Z=o(76189);const C=(0,Z.Z)((0,w.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),y=(0,Z.Z)((0,w.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");var B=o(23701),M=o(75878),W=o(21217);function P(e){return(0,W.Z)("MuiTabScrollButton",e)}const E=(0,M.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),R=["className","slots","slotProps","direction","orientation","disabled"],T=(0,c.ZP)(B.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})((e=>{let{ownerState:t}=e;return(0,r.Z)({width:40,flexShrink:0,opacity:.8,["&.".concat(E.disabled)]:{opacity:0}},"vertical"===t.orientation&&{width:"100%",height:40,"& svg":{transform:"rotate(".concat(t.isRtl?-90:90,"deg)")}})})),I=n.forwardRef((function(e,t){var o,n;const c=(0,d.Z)({props:e,name:"MuiTabScrollButton"}),{className:p,slots:b={},slotProps:f={},direction:h}=c,m=(0,l.Z)(c,R),v="rtl"===(0,u.Z)().direction,S=(0,r.Z)({isRtl:v},c),x=(e=>{const{classes:t,orientation:o,disabled:l}=e,r={root:["root",o,l&&"disabled"]};return(0,a.Z)(r,P,t)})(S),g=null!=(o=b.StartScrollButtonIcon)?o:C,Z=null!=(n=b.EndScrollButtonIcon)?n:y,B=(0,s.Z)({elementType:g,externalSlotProps:f.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S}),M=(0,s.Z)({elementType:Z,externalSlotProps:f.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S});return(0,w.jsx)(T,(0,r.Z)({component:"div",className:(0,i.Z)(x.root,p),ref:t,role:null,ownerState:S,tabIndex:null},m,{children:"left"===h?(0,w.jsx)(g,(0,r.Z)({},B)):(0,w.jsx)(Z,(0,r.Z)({},M))}))}));var N=o(89683);function k(e){return(0,W.Z)("MuiTabs",e)}const L=(0,M.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);var z=o(98301);const F=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],A=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,H=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,j=(e,t,o)=>{let l=!1,r=o(e,t);for(;r;){if(r===e.firstChild){if(l)return;l=!0}const t=r.disabled||"true"===r.getAttribute("aria-disabled");if(r.hasAttribute("tabindex")&&!t)return void r.focus();r=o(e,r)}},X=(0,c.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{["& .".concat(L.scrollButtons)]:t.scrollButtons},{["& .".concat(L.scrollButtons)]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})((e=>{let{ownerState:t,theme:o}=e;return(0,r.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{["& .".concat(L.scrollButtons)]:{[o.breakpoints.down("sm")]:{display:"none"}}})})),Y=(0,c.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})((e=>{let{ownerState:t}=e;return(0,r.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})})),D=(0,c.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})((e=>{let{ownerState:t}=e;return(0,r.Z)({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})})),V=(0,c.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((e=>{let{ownerState:t,theme:o}=e;return(0,r.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create()},"primary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.primary.main},"secondary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})})),O=(0,c.ZP)((function(e){const{onChange:t}=e,o=(0,l.Z)(e,x),i=n.useRef(),a=n.useRef(null),s=()=>{i.current=a.current.offsetHeight-a.current.clientHeight};return(0,v.Z)((()=>{const e=(0,p.Z)((()=>{const e=i.current;s(),e!==i.current&&t(i.current)})),o=(0,S.Z)(a.current);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}}),[t]),n.useEffect((()=>{s(),t(i.current)}),[t]),(0,w.jsx)("div",(0,r.Z)({style:g,ref:a},o))}),{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),q={};const K=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiTabs"}),c=(0,u.Z)(),b="rtl"===c.direction,{"aria-label":v,"aria-labelledby":x,action:g,centered:Z=!1,children:C,className:y,component:B="div",allowScrollButtonsMobile:M=!1,indicatorColor:W="primary",onChange:P,orientation:E="horizontal",ScrollButtonComponent:R=I,scrollButtons:T="auto",selectionFollowsFocus:L,slots:K={},slotProps:_={},TabIndicatorProps:G={},TabScrollButtonProps:U={},textColor:J="primary",value:Q,variant:$="standard",visibleScrollbar:ee=!1}=o,te=(0,l.Z)(o,F),oe="scrollable"===$,le="vertical"===E,re=le?"scrollTop":"scrollLeft",ne=le?"top":"left",ie=le?"bottom":"right",ae=le?"clientHeight":"clientWidth",se=le?"height":"width",ce=(0,r.Z)({},o,{component:B,allowScrollButtonsMobile:M,indicatorColor:W,orientation:E,vertical:le,scrollButtons:T,textColor:J,variant:$,visibleScrollbar:ee,fixed:!oe,hideScrollbar:oe&&!ee,scrollableX:oe&&!le,scrollableY:oe&&le,centered:Z&&!oe,scrollButtonsHideMobile:!M}),de=(e=>{const{vertical:t,fixed:o,hideScrollbar:l,scrollableX:r,scrollableY:n,centered:i,scrollButtonsHideMobile:s,classes:c}=e,d={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",l&&"hideScrollbar",r&&"scrollableX",n&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",s&&"scrollButtonsHideMobile"],scrollableX:[r&&"scrollableX"],hideScrollbar:[l&&"hideScrollbar"]};return(0,a.Z)(d,k,c)})(ce),ue=(0,s.Z)({elementType:K.StartScrollButtonIcon,externalSlotProps:_.startScrollButtonIcon,ownerState:ce}),pe=(0,s.Z)({elementType:K.EndScrollButtonIcon,externalSlotProps:_.endScrollButtonIcon,ownerState:ce});const[be,fe]=n.useState(!1),[he,me]=n.useState(q),[ve,Se]=n.useState({start:!1,end:!1}),[we,xe]=n.useState({overflow:"hidden",scrollbarWidth:0}),ge=new Map,Ze=n.useRef(null),Ce=n.useRef(null),ye=()=>{const e=Ze.current;let t,o;if(e){const o=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:h(e,c.direction),scrollWidth:e.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(e&&!1!==Q){const e=Ce.current.children;if(e.length>0){const t=e[ge.get(Q)];0,o=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:o}},Be=(0,N.Z)((()=>{const{tabsMeta:e,tabMeta:t}=ye();let o,l=0;if(le)o="top",t&&e&&(l=t.top-e.top+e.scrollTop);else if(o=b?"right":"left",t&&e){const r=b?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;l=(b?-1:1)*(t[o]-e[o]+r)}const r={[o]:l,[se]:t?t[se]:0};if(isNaN(he[o])||isNaN(he[se]))me(r);else{const e=Math.abs(he[o]-r[o]),t=Math.abs(he[se]-r[se]);(e>=1||t>=1)&&me(r)}})),Me=function(e){let{animation:t=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t?function(e,t,o){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:()=>{};const{ease:n=m,duration:i=300}=l;let a=null;const s=t[e];let c=!1;const d=()=>{c=!0},u=l=>{if(c)return void r(new Error("Animation cancelled"));null===a&&(a=l);const d=Math.min(1,(l-a)/i);t[e]=n(d)*(o-s)+s,d>=1?requestAnimationFrame((()=>{r(null)})):requestAnimationFrame(u)};s===o?r(new Error("Element already at target position")):requestAnimationFrame(u)}(re,Ze.current,e,{duration:c.transitions.duration.standard}):Ze.current[re]=e},We=e=>{let t=Ze.current[re];le?t+=e:(t+=e*(b?-1:1),t*=b&&"reverse"===f()?-1:1),Me(t)},Pe=()=>{const e=Ze.current[ae];let t=0;const o=Array.from(Ce.current.children);for(let l=0;l<o.length;l+=1){const r=o[l];if(t+r[ae]>e){0===l&&(t=e);break}t+=r[ae]}return t},Ee=()=>{We(-1*Pe())},Re=()=>{We(Pe())},Te=n.useCallback((e=>{xe({overflow:null,scrollbarWidth:e})}),[]),Ie=(0,N.Z)((e=>{const{tabsMeta:t,tabMeta:o}=ye();if(o&&t)if(o[ne]<t[ne]){const l=t[re]+(o[ne]-t[ne]);Me(l,{animation:e})}else if(o[ie]>t[ie]){const l=t[re]+(o[ie]-t[ie]);Me(l,{animation:e})}})),Ne=(0,N.Z)((()=>{if(oe&&!1!==T){const{scrollTop:e,scrollHeight:t,clientHeight:o,scrollWidth:l,clientWidth:r}=Ze.current;let n,i;if(le)n=e>1,i=e<t-o-1;else{const e=h(Ze.current,c.direction);n=b?e<l-r-1:e>1,i=b?e>1:e<l-r-1}n===ve.start&&i===ve.end||Se({start:n,end:i})}}));n.useEffect((()=>{const e=(0,p.Z)((()=>{Ze.current&&(Be(),Ne())})),t=(0,S.Z)(Ze.current);let o;return t.addEventListener("resize",e),"undefined"!==typeof ResizeObserver&&(o=new ResizeObserver(e),Array.from(Ce.current.children).forEach((e=>{o.observe(e)}))),()=>{e.clear(),t.removeEventListener("resize",e),o&&o.disconnect()}}),[Be,Ne]);const ke=n.useMemo((()=>(0,p.Z)((()=>{Ne()}))),[Ne]);n.useEffect((()=>()=>{ke.clear()}),[ke]),n.useEffect((()=>{fe(!0)}),[]),n.useEffect((()=>{Be(),Ne()})),n.useEffect((()=>{Ie(q!==he)}),[Ie,he]),n.useImperativeHandle(g,(()=>({updateIndicator:Be,updateScrollButtons:Ne})),[Be,Ne]);const Le=(0,w.jsx)(V,(0,r.Z)({},G,{className:(0,i.Z)(de.indicator,G.className),ownerState:ce,style:(0,r.Z)({},he,G.style)}));let ze=0;const Fe=n.Children.map(C,(e=>{if(!n.isValidElement(e))return null;const t=void 0===e.props.value?ze:e.props.value;ge.set(t,ze);const o=t===Q;return ze+=1,n.cloneElement(e,(0,r.Z)({fullWidth:"fullWidth"===$,indicator:o&&!be&&Le,selected:o,selectionFollowsFocus:L,onChange:P,textColor:J,value:t},1!==ze||!1!==Q||e.props.tabIndex?{}:{tabIndex:0}))})),Ae=(()=>{const e={};e.scrollbarSizeListener=oe?(0,w.jsx)(O,{onChange:Te,className:(0,i.Z)(de.scrollableX,de.hideScrollbar)}):null;const t=ve.start||ve.end,o=oe&&("auto"===T&&t||!0===T);return e.scrollButtonStart=o?(0,w.jsx)(R,(0,r.Z)({slots:{StartScrollButtonIcon:K.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:ue},orientation:E,direction:b?"right":"left",onClick:Ee,disabled:!ve.start},U,{className:(0,i.Z)(de.scrollButtons,U.className)})):null,e.scrollButtonEnd=o?(0,w.jsx)(R,(0,r.Z)({slots:{EndScrollButtonIcon:K.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:pe},orientation:E,direction:b?"left":"right",onClick:Re,disabled:!ve.end},U,{className:(0,i.Z)(de.scrollButtons,U.className)})):null,e})();return(0,w.jsxs)(X,(0,r.Z)({className:(0,i.Z)(de.root,y),ownerState:ce,ref:t,as:B},te,{children:[Ae.scrollButtonStart,Ae.scrollbarSizeListener,(0,w.jsxs)(Y,{className:de.scroller,ownerState:ce,style:{overflow:we.overflow,[le?"margin".concat(b?"Left":"Right"):"marginBottom"]:ee?void 0:-we.scrollbarWidth},ref:Ze,onScroll:ke,children:[(0,w.jsx)(D,{"aria-label":v,"aria-labelledby":x,"aria-orientation":"vertical"===E?"vertical":null,className:de.flexContainer,ownerState:ce,onKeyDown:e=>{const t=Ce.current,o=(0,z.Z)(t).activeElement;if("tab"!==o.getAttribute("role"))return;let l="horizontal"===E?"ArrowLeft":"ArrowUp",r="horizontal"===E?"ArrowRight":"ArrowDown";switch("horizontal"===E&&b&&(l="ArrowRight",r="ArrowLeft"),e.key){case l:e.preventDefault(),j(t,o,H);break;case r:e.preventDefault(),j(t,o,A);break;case"Home":e.preventDefault(),j(t,null,A);break;case"End":e.preventDefault(),j(t,null,H)}},ref:Ce,role:"tablist",children:Fe}),be&&Le]}),Ae.scrollButtonEnd]}))}))}}]);
//# sourceMappingURL=411.8d65581b.chunk.js.map