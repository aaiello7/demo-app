(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{132:function(e,t,a){"use strict";a.r(t);var i=a(2),r=a(0),n=a.n(r),c=a(11),s=a.n(c),o=a(15),l=a(178),m=a(14),d=a(204),u=a(99),j=Object(u.a)({palette:{type:"light",primary:{light:"#616161",main:"#8e8e8e",dark:"#373737"},secondary:{light:"#263238",main:"#4f5b62",dark:"#000a12"}}}),g=a(205),p=a(46),b=a(59),h=a(211),x=a.p+"static/media/logo-placeholder.70fce7a0.png",O=a(184),f=a(206),v=a(183),y=a(209),N=a(185),k=a(182),w=a(207),I=a(103),C=a(102),T=a(180),S=Object(l.a)((function(e){return{headLogo:{width:"100%",textAlign:"-webkit-center",marginTop:e.spacing(6),marginBottom:e.spacing(2)},customPaper:{marginRight:e.spacing(2),marginLeft:e.spacing(2),marginBottom:e.spacing(12),padding:e.spacing(3)},large:{width:e.spacing(12),height:e.spacing(12),margin:e.spacing(3)},bottomText:{paddingTop:e.spacing(3)}}}));var L=function(e){var t=S(),a=Object(m.f)(),n=Object(r.useState)(!0),c=Object(o.a)(n,2),s=c[0],l=c[1],d=Object(r.useState)({firstName:"",lastName:"",email:"",password:""}),u=Object(o.a)(d,2),j=u[0],g=u[1];function L(e){var t=e.target,a=t.name,i=t.value;g((function(e){return Object(b.a)(Object(b.a)({},j),{},Object(p.a)({},a,i))}))}return Object(i.jsxs)(T.a,{onLoad:function(){e.isLogin(!0)},component:"main",maxWidth:"xs",children:[Object(i.jsxs)(w.a,{className:t.headLogo,children:[Object(i.jsx)(h.a,{alt:"Logo",src:x,className:t.large}),Object(i.jsx)(C.a,{component:"h1",variant:"h5",children:s?"Sign in":"Sign up"})]}),Object(i.jsx)(I.a,{className:t.customPaper,elevation:3,children:Object(i.jsxs)("form",{noValidate:!0,children:[!s&&Object(i.jsxs)(k.a,{container:!0,spacing:2,children:[Object(i.jsx)(k.a,{item:!0,xs:6,children:Object(i.jsx)(f.a,{onChange:L,autoComplete:"fname",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"firstName",label:"First Name",name:"firstName",value:j.firstName,autoFocus:!0})}),Object(i.jsx)(k.a,{item:!0,xs:6,children:Object(i.jsx)(f.a,{onChange:L,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",value:j.lastName,autoComplete:"lname"})})]}),Object(i.jsxs)(k.a,{container:!0,spacing:2,children:[Object(i.jsx)(k.a,{item:!0,xs:12,children:Object(i.jsx)(f.a,{onChange:L,variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:j.email,autoComplete:"email",autoFocus:!0})}),Object(i.jsx)(k.a,{item:!0,xs:12,children:Object(i.jsx)(f.a,{onChange:L,variant:"outlined",required:!0,fullWidth:!0,type:"password",id:"password",label:"Password",name:"password",value:j.password,autoComplete:"current-password"})})]}),Object(i.jsx)(v.a,{control:Object(i.jsx)(y.a,{value:"remember",color:"primary"}),label:s?"Remember me":"Terms and conditions"}),Object(i.jsxs)("div",{className:t.bottomText,children:[Object(i.jsx)(O.a,{onClick:function(t){e.getUser(j),a.push("/feed"),t.preventDefault()},type:"submit",margin:"normal",fullWidth:!0,variant:"contained",color:"primary",children:s?"Sign in":"Sign up"}),Object(i.jsxs)(k.a,{container:!0,className:t.bottomText,children:[Object(i.jsx)(k.a,{item:!0,xs:!0,children:Object(i.jsx)(N.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(i.jsx)(k.a,{item:!0,xs:6,style:{textAlign:"right"},children:s?Object(i.jsx)(N.a,{onClick:function(){l(!1)},variant:"body2",children:"Don't have an account? Sign Up"}):Object(i.jsx)(N.a,{onClick:function(){l(!0)},variant:"body2",children:"Already a member? Sign In"})})]})]})]})})]})},q=a(13),B=a(28),A=a(186),P=a(187),R=a(212),V=a(134),D=a(92),W=a.n(D),z=a(91),H=a.n(z),Q=a(93),E=a.n(Q),F=[{id:"1",firstName:"Lorem",lastName:"Ipsum",pic:a.p+"static/media/profile-pic3.767054fb.jpeg",email:"loremipsum@dolor.com",password:"perroTico",about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nDuis vitae elit sit amet neque tempor ornare fringilla eget urna.\nInteger vel erat malesuada, fermentum nulla ut, commodo risus."}],M=Object(l.a)((function(e){return{root:{maxWidth:"480px",margin:"auto",right:"auto",zIndex:"10"},spacingHeader:{justifyContent:"space-between",flexGrow:1,paddingRight:e.spacing(2),paddingLeft:e.spacing(2)},customIcon:{margin:"0 ".concat(e.spacing(2))},search:Object(p.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(q.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(q.b)(e.palette.common.white,.25)},marginLeft:0,width:"50%"},e.breakpoints.up("xs"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("xs"),{width:"12ch","&:focus":{width:"20ch"}})}}));var U=function(){var e=M(),t=Object(r.useState)(!0),a=Object(o.a)(t,2),n=a[0],c=a[1],s=Object(m.f)();function l(){c(!n)}return Object(i.jsx)(A.a,{className:e.root,elevation:1,color:"background",children:Object(i.jsxs)(P.a,{className:e.spacingHeader,children:[n?Object(i.jsx)(B.b,{to:"/petProfile",onClick:l,children:Object(i.jsx)(h.a,{alt:"profile picture",src:F[0].pic,className:e.customAvatar})}):Object(i.jsx)(B.b,{to:"/feed",onClick:l,children:Object(i.jsx)(H.a,{color:"primary"})}),Object(i.jsxs)("div",{className:e.search,children:[Object(i.jsx)("div",{className:e.searchIcon,children:Object(i.jsx)(W.a,{})}),Object(i.jsx)(R.a,{placeholder:"Search\u2026",onClick:function(){s.push("/Nearby")},classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(i.jsx)(V.a,{color:"inherit","aria-label":"menu",children:Object(i.jsx)(B.b,{to:"/demo-app",children:Object(i.jsx)(E.a,{className:e.customIcon,color:"action",fontSize:"medium"})})})]})})},Y=a(188),G=a(189),J=a(191),X=a(190),_=a(94),K=a.n(_),Z=Object(l.a)((function(e){return{root:{},tileItem:{display:"inline-block",columnBreakInside:"avoid",width:"100%",marginTop:e.spacing(3),borderRadius:"15px"},tileImg:{width:"100%",height:"auto",padding:e.spacing(0)},cardBottom:{backgroundColor:"transparent",margin:0,padding:0},dotsBtn:{padding:0}}}));var $=function(e){var t=Z();return Object(i.jsxs)(Y.a,{className:t.tileItem,children:[Object(i.jsx)(G.a,{children:Object(i.jsx)(X.a,{children:Object(i.jsx)("img",{className:t.tileImg,src:e.image,alt:e.user})})}),Object(i.jsx)(J.a,{className:t.cardBottom,children:Object(i.jsx)(O.a,{className:t.dotsBtn,size:"small",color:"default",children:Object(i.jsx)(K.a,{})})})]})},ee=a(192),te=Object(l.a)((function(e){return{root:{},tileItem:{display:"inline-block",columnBreakInside:"avoid",width:"100%",marginTop:e.spacing(3),borderRadius:"15px"},tileImg:{width:"100%",height:"auto",padding:e.spacing(0)},cardBottom:{margin:0,padding:0},dotsBtn:{padding:0}}}));var ae=function(){var e=te();return Object(i.jsxs)(Y.a,{className:e.tileItem,children:[Object(i.jsx)(G.a,{children:Object(i.jsx)(X.a,{children:Object(i.jsx)(ee.a,{variant:"rect",className:e.tileImg})})}),Object(i.jsx)(J.a,{className:e.cardBottom,children:Object(i.jsx)(O.a,{className:e.dotsBtn,size:"small",color:"default",children:Object(i.jsx)(ee.a,{variant:"circle"})})})]})},ie=a.p+"static/media/placeholder.09cb794a.png",re=a.p+"static/media/placeholder2.bc5213bd.png",ne=a.p+"static/media/placeholder3.4ea3a93e.png",ce=[{key:"5",img:ie,title:"Image5",author:"author",featured:!1},{key:"3",img:re,title:"Image3",author:"author",featured:!1},{key:"9",img:ie,title:"Image9",author:"author",featured:!1},{key:"4",img:re,title:"Image4",author:"author",featured:!1},{key:"2",img:ne,title:"Image2",author:"author",featured:!0},{key:"10",img:re,title:"Image10",author:"author",featured:!1},{key:"8",img:ne,title:"Image8",author:"author",featured:!1},{key:"6",img:ne,title:"Image6",author:"author",featured:!1},{key:"1",img:ie,title:"Image",author:"author",featured:!1},{key:"7",img:re,title:"Image7",author:"author",featured:!0},{key:"11",img:ne,title:"Image5",author:"author",featured:!1},{key:"14",img:ie,title:"Image3",author:"author",featured:!1},{key:"17",img:re,title:"Image9",author:"author",featured:!1},{key:"20",img:re,title:"Image4",author:"author",featured:!1},{key:"12",img:ie,title:"Image2",author:"author",featured:!0},{key:"15",img:re,title:"Image10",author:"author",featured:!1},{key:"18",img:ne,title:"Image8",author:"author",featured:!1},{key:"13",img:ie,title:"Image6",author:"author",featured:!1},{key:"16",img:re,title:"Image",author:"author",featured:!1},{key:"19",img:ne,title:"Image7",author:"author",featured:!0}],se=Object(l.a)((function(e){return{root:{columnCount:"2",columnGap:e.spacing(2),width:"90%",margin:"".concat(e.spacing(8),"px auto")}}}));var oe=function(e){var t=e.loading,a=void 0!==t&&t,r=se();return Object(i.jsx)("div",{className:r.root,children:(a?Array.from(new Array(10)):ce).map((function(e,t){return Object(i.jsx)("div",{children:e?Object(i.jsx)($,{user:e.author,image:e.img,comment:e.title},e.key):Object(i.jsx)(ae,{})})}))})},le=a(71),me=a.n(le),de=a(4),ue=a(210),je=a(194),ge=a(193),pe=a(196),be=a(95),he=a.n(be),xe=a(89);function Oe(e){return Object(i.jsxs)(w.a,{position:"relative",display:"inline-flex",children:[Object(i.jsx)(xe.a,Object(b.a)({variant:"determinate"},e)),Object(i.jsx)(w.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(i.jsx)(C.a,{variant:"caption",component:"div",color:"textSecondary",children:"".concat(Math.round(e.value),"%")})})]})}function fe(){var e=n.a.useState(10),t=Object(o.a)(e,2),a=t[0],r=t[1];return n.a.useEffect((function(){var e=setInterval((function(){r((function(e){return e>=100?0:e+10}))}),800);return function(){clearInterval(e)}}),[]),Object(i.jsx)(Oe,{value:a})}var ve=a(195),ye=Object(l.a)((function(e){return{root:{margin:"".concat(e.spacing(3),"px auto"),width:"90%"},badge:{width:e.spacing(8),height:e.spacing(8)},heading:{width:"max-content",fontSize:e.typography.pxToRem(17)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:e.spacing(3),width:e.spacing(3)},details:{alignItems:"center"},column:{padding:e.spacing(1),flexBasis:"fill"},helper:{borderRight:"2px solid ".concat(e.palette.divider),padding:e.spacing(1,2)},rating:{margin:"auto"}}}));var Ne=function(e){var t=ye();return Object(i.jsx)("div",{className:t.root,children:Object(i.jsxs)(ue.a,{children:[Object(i.jsxs)(ge.a,{expandIcon:Object(i.jsx)(he.a,{}),"aria-controls":"challenge-content",id:"challenge-header",children:[Object(i.jsxs)("div",{className:t.column,children:[Object(i.jsx)(h.a,{className:t.badge,img:e.img}),"          "]}),Object(i.jsxs)("div",{className:t.column,children:[Object(i.jsx)(C.a,{className:t.heading,children:e.title}),Object(i.jsx)(C.a,{className:t.secondaryHeading,children:e.description})]})]}),Object(i.jsxs)(je.a,{className:t.details,children:[Object(i.jsx)("div",{className:Object(de.a)(t.column,t.helper),children:Object(i.jsx)(C.a,{className:t.secondaryHeading,children:"Your progress:"})}),Object(i.jsx)("div",{className:Object(de.a)(t.column,t.rating),children:Object(i.jsx)(fe,{})})]}),Object(i.jsx)(ve.a,{}),Object(i.jsx)(pe.a,{children:Object(i.jsx)(O.a,{size:"small",children:"Commit"})})]})})},ke=a(32),we=a.n(ke),Ie=[{key:"5",img:we.a,title:"Challenge Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",progress:"100%"},{key:"3",img:we.a,title:"Challenge Name3",description:"Quisque vestibulum dolor eu auctor luctus.",progress:"100%"},{key:"9",img:we.a,title:"Challenge Name9",description:"Aenean facilisis velit sed blandit porttitor.",progress:"100%"},{key:"4",img:we.a,title:"Challenge Name4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",progress:"100%"},{key:"2",img:we.a,title:"Challenge Name2",description:"In sed massa sit amet quam ultricies pharetra.",progress:"100%"},{key:"10",img:we.a,title:"Challenge Name10",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",progress:"100%"},{key:"8",img:we.a,title:"Challenge Name8",description:"In sed massa sit amet quam ultricies pharetra.",progress:"100%"},{key:"6",img:we.a,title:"Challenge Name6",description:"Quisque vestibulum dolor eu auctor luctus.",progress:"100%"},{key:"1",img:we.a,title:"Challenge Name",description:"Aenean facilisis velit sed blandit porttitor.",progress:"100%"},{key:"7",img:we.a,title:"Challenge Name7",description:"In sed massa sit amet quam ultricies pharetra.",progress:"100%"}],Ce=Object(l.a)((function(e){return{root:{marginTop:e.spacing(8)}}}));var Te=function(){var e=Ce();return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)(me.a,{src:ne,aspectRatio:16/9,disableSpinner:!0}),Ie.map((function(e){return Object(i.jsx)(Ne,{img:e.img,title:e.title,description:e.description},e.key)}))]})},Se=a(96),Le=a.n(Se),qe=Object(l.a)((function(e){return{root:{marginTop:"40%",textAlign:"center"},icon:{fontSize:"5rem"}}}));var Be=function(){var e=qe();return Object(i.jsx)("div",{className:e.root,children:Object(i.jsx)(V.a,{children:Object(i.jsx)(Le.a,{className:e.icon,color:"action"})})})},Ae=a(208),Pe=a(197),Re=Object(l.a)((function(e){return{root:{display:"block",width:"100%",margin:"auto"}}}));var Ve=function(e){var t=Re(),a=Object(r.useState)(0),n=Object(o.a)(a,2),c=n[0],s=n[1];return Object(i.jsx)("div",{className:t.root,children:Object(i.jsx)(I.a,{square:!0,children:Object(i.jsx)(Ae.a,{variant:"fullWidth",value:c,indicatorColor:"primary",textColor:"primary",onChange:function(t,a){s(a),e.selectTab(a)},"aria-label":"Tabs",children:e.tabs.map((function(e){return Object(i.jsx)(Pe.a,{label:e})}))})})})},De=a(198),We=Object(l.a)((function(e){return{root:{position:"relative",width:"100%",height:e.spacing(18),marginTop:e.spacing(2)},cover:{position:"absolute",height:"100%",width:"100%"},coverImg:{opacity:"0.5"},coverText:{height:e.spacing(10),whiteSpace:"break-spaces",overflow:"hidden"}}}));var ze=function(e){var t=We();return Object(i.jsxs)(Y.a,{className:t.root,children:[Object(i.jsx)(X.a,{className:Object(de.a)(t.cover,t.coverImg),image:e.image}),Object(i.jsx)("div",{className:Object(de.a)(t.cover),children:Object(i.jsxs)(De.a,{children:[Object(i.jsx)(C.a,{component:"h5",variant:"h5",children:e.title}),Object(i.jsx)(C.a,{className:t.coverText,variant:"subtitle1",children:e.detail})]})})]})},He=a.p+"static/media/google-maps.836a4ef4.jpg",Qe=[{id:"11",storeName:"Vete",pic:re,email:"loremipsum@dolor.com",password:"perroTico",about:"Duis vitae elit sit amet neque tempor ornare fringilla eget urna.\nInteger vel erat malesuada, fermentum nulla ut, commodo risus.",location:"45'5344' , 51'51232",category:0},{id:"12",storeName:"Shop",pic:re,email:"loremipsum@dolor.com",password:"perroTico",about:"Duis vitae elit sit amet neque tempor ornare fringilla eget urna.\nInteger vel erat malesuada, fermentum nulla ut, commodo risus.",location:"45'5344' , 51'51232",category:1},{id:"13",storeName:"Let's meet",pic:re,email:"loremipsum@dolor.com",password:"perroTico",about:"Duis vitae elit sit amet neque tempor ornare fringilla eget urna.\nInteger vel erat malesuada, fermentum nulla ut, commodo risus.",location:"45'5344' , 51'51232",category:2},{id:"14",storeName:"Care",pic:re,email:"loremipsum@dolor.com",password:"perroTico",about:"Duis vitae elit sit amet neque tempor ornare fringilla eget urna.\nInteger vel erat malesuada, fermentum nulla ut, commodo risus.",location:"45'5344' , 51'51232",category:3},{id:"15",storeName:"Vete",pic:re,email:"loremipsum@dolor.com",password:"perroTico",about:"Duis vitae elit sit amet neque tempor ornare fringilla eget urna.\nInteger vel erat malesuada, fermentum nulla ut, commodo risus.",location:"45'5344' , 51'51232",category:0},{id:"16",storeName:"Shop",pic:re,email:"loremipsum@dolor.com",password:"perroTico",about:"Duis vitae elit sit amet neque tempor ornare fringilla eget urna.\nInteger vel erat malesuada, fermentum nulla ut, commodo risus.",location:"45'5344' , 51'51232",category:1},{id:"17",storeName:"Vete",pic:re,email:"loremipsum@dolor.com",password:"perroTico",about:"Duis vitae elit sit amet neque tempor ornare fringilla eget urna.\nInteger vel erat malesuada, fermentum nulla ut, commodo risus.",location:"45'5344' , 51'51232",category:0},{id:"18",storeName:"Care",pic:re,email:"loremipsum@dolor.com",password:"perroTico",about:"Duis vitae elit sit amet neque tempor ornare fringilla eget urna.\nInteger vel erat malesuada, fermentum nulla ut, commodo risus.",location:"45'5344' , 51'51232",category:3}],Ee=Object(l.a)((function(e){return{root:{marginTop:e.spacing(8),marginBottom:e.spacing(10)},fixedPosition:{position:"sticky",maxWidth:"480px",top:e.spacing(-2),zIndex:8},serviceList:{width:"90%",margin:"0 auto",marginTop:e.spacing(4)}}}));var Fe=function(){var e=Ee(),t=Object(r.useState)(0),a=Object(o.a)(t,2),n=a[0],c=a[1],s=Object(m.f)();return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsxs)("div",{className:e.fixedPosition,children:[Object(i.jsx)(me.a,{src:He,aspectRatio:16/9}),Object(i.jsx)(Ve,{selectTab:function(e){c(e)},tabs:["Vets","Shops","MeetUp","Care"]})]}),Qe.filter((function(e){return e.category===n})).map((function(t){return Object(i.jsx)("div",{onClick:function(){!function(e){console.log(e),s.push({pathname:"/VetProfile",state:e})}(t)},className:e.serviceList,children:Object(i.jsx)(ze,{title:t.storeName,image:t.pic,detail:t.about},t.id)})}))]})},Me=a(199),Ue=a(73),Ye=a.n(Ue),Ge=a(74),Je=a.n(Ge),Xe=Object(l.a)((function(e){return{profileCard:{width:"100%",textAlign:"-webkit-center"},customPaper:{marginTop:e.spacing(-4),marginRight:e.spacing(4),marginLeft:e.spacing(4),marginBottom:e.spacing(2),paddingTop:e.spacing(5),paddingBottom:e.spacing(3),paddingRight:e.spacing(2),paddingLeft:e.spacing(2)},headImg:{width:e.spacing(12),height:e.spacing(12),boxShadow:e.shadows[3]},aboutText:{paddingTop:e.spacing(1),textAlign:"left",height:e.spacing(10),overflow:"hidden",whiteSpace:"pre-wrap"},fab:{bottom:e.spacing(-2)}}}));var _e=function(e){var t=Xe(),a=Object(m.f)();return Object(i.jsx)("div",{className:t.root,children:Object(i.jsxs)(w.a,{className:t.profileCard,children:[Object(i.jsx)(h.a,{alt:"ProfilePic",src:e.pic,className:t.headImg}),Object(i.jsxs)(I.a,{className:t.customPaper,elevation:2,children:[Object(i.jsxs)(C.a,{variant:"h5",children:[e.firstName," ",e.lastName]}),Object(i.jsxs)(k.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(i.jsx)(k.a,{item:!0,xs:8,children:Object(i.jsx)(C.a,{className:t.aboutText,children:e.about})}),Object(i.jsx)(k.a,{item:!0,m:!0,children:Object(i.jsx)(Me.a,{onClick:function(){a.push(e.fabLink)},className:t.fab,c:!0,olor:"primary","aria-label":"add",children:"pet"===e.type?Object(i.jsx)(Ye.a,{}):Object(i.jsx)(Je.a,{})})})]})]})]})})},Ke=a(200),Ze=a(201),$e=Object(l.a)((function(e){return{root:{display:"flex"},gridList:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",overflow:"hidden",backgroundColor:e.palette.background.paper}}}));var et=function(){var e=$e();return Object(i.jsx)("div",{className:e.root,children:Object(i.jsx)(Ke.a,{cellHeight:160,className:e.gridList,cols:3,children:ce.map((function(e){return Object(i.jsx)(Ze.a,{cols:e.cols||1,children:Object(i.jsx)("img",{src:e.img,alt:e.title})},e.key)}))})})},tt=Object(l.a)((function(e){return{root:{display:"flex",marginTop:e.spacing(2)},details:{width:"70%"},cover:{width:"30%"}}}));var at=function(e){var t=tt();return Object(i.jsxs)(Y.a,{className:t.root,children:[Object(i.jsx)(X.a,{className:t.cover,image:e.image}),Object(i.jsx)("div",{className:t.details,children:Object(i.jsxs)(De.a,{children:[Object(i.jsx)(C.a,{component:"h5",variant:"h5",children:e.title}),Object(i.jsx)(C.a,{variant:"subtitle1",children:e.detail})]})})]})},it=[{key:"5",img:ie,title:"Visit",detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{key:"3",img:re,title:"Visit",detail:"Duis vitae elit sit amet neque tempor ornare fringilla eget urna."},{key:"9",img:ie,title:"Visit",detail:"Integer vel erat malesuada, fermentum nulla ut, commodo risus."},{key:"4",img:re,title:"Visit",detail:"Etiam accumsan velit vitae ligula varius tempus."},{key:"2",img:ne,title:"Visit",detail:"In ullamcorper dui eget dui hendrerit porttitor."},{key:"10",img:re,title:"Visit",detail:"Sed scelerisque purus sit amet finibus vulputate."},{key:"8",img:ne,title:"Visit",detail:"Sed rhoncus magna eget tempus dapibus."},{key:"6",img:ne,title:"Visit",detail:"Aliquam egestas eros eget augue sodales, sed sagittis nisl commodo."},{key:"1",img:ie,title:"Visit",detail:"Nunc rutrum tortor sed ultricies tempor."},{key:"7",img:re,title:"Visit",detail:"Pellentesque porttitor arcu quis tortor malesuada auctor."}],rt=Object(l.a)((function(e){return{root:{width:"90%",margin:"0 auto",marginTop:e.spacing(4)}}}));var nt=function(e){var t=e.loading,a=void 0!==t&&t,r=rt();return Object(i.jsx)("div",{className:r.root,children:(a?Array.from(new Array(10)):it).map((function(e,t){return Object(i.jsx)("div",{children:e?Object(i.jsx)(at,{title:e.title,image:e.img,detail:e.detail},e.key):Object(i.jsx)(ae,{})})}))})},ct=Object(l.a)((function(e){return{root:{marginTop:e.spacing(12),marginBottom:e.spacing(10),width:"100%"}}}));var st=function(e){var t=ct(),a=Object(r.useState)(0),n=Object(o.a)(a,2),c=n[0],s=n[1];return Object(i.jsxs)("div",{className:t.root,children:[Object(i.jsx)(_e,{type:"pet",fabLink:"/Treats",firstName:F[0].firstName,lastName:F[0].lastName,pic:F[0].pic,about:F[0].about},F[0].id),Object(i.jsx)(Ve,{selectTab:function(e){s(e)},tabs:["Posts","Activity"]}),0===c?Object(i.jsx)(et,{}):Object(i.jsx)(nt,{})]})},ot=a(202),lt=a(203),mt=a(97),dt=a.n(mt),ut=a(98),jt=a.n(ut),gt=Object(l.a)((function(e){return{stickToBottom:{maxWidth:"480px",width:"100%",position:"fixed",bottom:"0px"},navBar:{margin:e.spacing(2),marginRight:e.spacing(5),marginLeft:e.spacing(5),borderRadius:e.spacing(3)}}}));function pt(){return Object(i.jsx)(w.a,{p:2,children:Object(i.jsxs)(C.a,{p:2,variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(i.jsx)(N.a,{color:"inherit",href:"https://cdn.vox-cdn.com/thumbor/qQPUPBlaiVYrsXg5QM1QQYVgH34=/0x0:900x500/1400x1400/filters:focal(378x178:522x322):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg",children:"This is fine company"})," ",(new Date).getFullYear(),"."]})})}var bt=function(e){var t=gt(),a=n.a.useState(""),r=Object(o.a)(a,2),c=r[0],s=r[1],l=Object(m.f)();return Object(i.jsx)("footer",{className:t.stickToBottom,children:e.isLogin?Object(i.jsx)("div",{onMouseLeave:function(e){s("")},children:Object(i.jsxs)(ot.a,{value:c,onChange:function(e,t){s(t),l.push("/".concat(t))},className:e.isLogin&&t.navBar,children:[Object(i.jsx)(lt.a,{label:"Treats",value:"Treats",icon:Object(i.jsx)(Ye.a,{})}),Object(i.jsx)(lt.a,{label:"Camera",value:"Camera",icon:Object(i.jsx)(dt.a,{})}),Object(i.jsx)(lt.a,{label:"Nearby",value:"Nearby",icon:Object(i.jsx)(jt.a,{})})]})}):Object(i.jsx)(ot.a,{children:Object(i.jsx)(pt,{})})})},ht=Object(l.a)((function(e){return{root:{marginTop:e.spacing(12),marginBottom:e.spacing(10),width:"100%"}}}));var xt=function(e){var t=ht(),a=Object(r.useState)(0),n=Object(o.a)(a,2),c=n[0],s=n[1],l=Object(m.f)();return Object(i.jsxs)("div",{className:t.root,children:[Object(i.jsx)(_e,{type:"vet",fabLink:"/Schedule",firstName:l.location.state.firstName,lastName:l.location.state.lastName,pic:l.location.state.pic,about:l.location.state.about},l.location.state.id),Object(i.jsx)(Ve,{selectTab:function(e){s(e)},tabs:["Services","History"]}),0===c?Object(i.jsx)(et,{}):Object(i.jsx)(nt,{})]})},Ot=Object(l.a)((function(e){return{root:{marginTop:"40%",textAlign:"center"},icon:{fontSize:"5rem"}}}));var ft=function(){var e=Ot();return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)(V.a,{children:Object(i.jsx)(Je.a,{className:e.icon,color:"action"})}),Object(i.jsx)(C.a,{children:"To scheduling API"})]})},vt=Object(l.a)((function(e){return{mobileScreen:{maxWidth:"480px",margin:"auto"}}}));var yt=function(){var e=vt(),t=Object(r.useState)({}),a=Object(o.a)(t,2),n=a[0],c=a[1],s=Object(r.useState)(!1),l=Object(o.a)(s,2),u=l[0],p=l[1];return Object(i.jsxs)(d.a,{theme:j,children:[Object(i.jsx)(g.a,{}),Object(i.jsxs)("div",{className:e.mobileScreen,children:[!u&&Object(i.jsx)(U,{}),Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{exact:!0,path:"/demo-app",children:Object(i.jsx)(L,{isLogin:function(e){p(e)},getUser:function(e){c(e),p(!1)}})}),Object(i.jsx)(m.a,{path:"/feed",children:Object(i.jsx)(oe,{user:n})}),Object(i.jsx)(m.a,{path:"/petProfile",children:Object(i.jsx)(st,{})}),Object(i.jsx)(m.a,{path:"/Treats",children:Object(i.jsx)(Te,{})}),Object(i.jsx)(m.a,{path:"/Camera",children:Object(i.jsx)(Be,{})}),Object(i.jsx)(m.a,{path:"/Nearby",children:Object(i.jsx)(Fe,{})}),Object(i.jsx)(m.a,{path:"/vetProfile",children:Object(i.jsx)(xt,{})}),Object(i.jsx)(m.a,{path:"/Schedule",children:Object(i.jsx)(ft,{})})]}),Object(i.jsx)(bt,{isLogin:!u})]})]})};s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(B.a,{children:Object(i.jsx)(yt,{})})}),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.b3a5359b.chunk.js.map