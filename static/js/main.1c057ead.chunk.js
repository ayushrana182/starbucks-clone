(this["webpackJsonpstarbucks-clone"]=this["webpackJsonpstarbucks-clone"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n(1),a=n.n(c),i=n(16),r=n.n(i),o=(n(100),n(101),n(102),n(7)),l=n(23),d=n(17),j=n(79),b=function(e){return Object(s.jsx)(d.b.path,Object(j.a)({fill:"transparent",strokeWidth:"3",stroke:"hsl(0, 0%, 18%)",strokeLinecap:"round"},e))},u=function(e){var t=e.toggle;return Object(s.jsx)("button",{onClick:t,className:"menuToggle__button",children:Object(s.jsxs)("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[Object(s.jsx)(b,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),Object(s.jsx)(b,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),Object(s.jsx)(b,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})})},m=n(84),h=n.n(m),p=n(80),O=n.n(p),f={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},x=function(e){var t=e.link,n=e.path,c=e.icon,a=e.goBackIcon,i=e.onClick,r=e.width;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(o.b,{to:n,children:Object(s.jsxs)(d.b.li,{style:{width:r},onClick:i,variants:f,whileHover:{scale:1.1},whileTap:{scale:.95},children:[a&&Object(s.jsx)(O.a,{fontSize:"large"}),t,c&&Object(s.jsx)(h.a,{fontSize:"large"})]})})})};n(108);var g=function(){return Object(s.jsx)(o.b,{className:"signInButton",to:"/account/signin",children:"Sign in"})};n(109);var _=function(){return Object(s.jsx)(o.b,{className:"signUpButton",to:"/account/create",children:"Join now"})},k=(n(110),n(85)),v=n.n(k);var y=function(){return Object(s.jsxs)(o.b,{className:"findAStore",children:[Object(s.jsx)(v.a,{}),Object(s.jsx)("h5",{children:"Find a store"})]})},N=n(28),S=n(66),w=Object(S.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),C=w.actions,F=C.login,I=C.logout,L=function(e){return e.user.user},E=w.reducer,P=(n(111),n(90).a.initializeApp({apiKey:"AIzaSyDFPOEapzE2otnYAjcgGRf-gc7tbK0MX00",authDomain:"starbucks-clone.firebaseapp.com",projectId:"starbucks-clone",storageBucket:"starbucks-clone.appspot.com",messagingSenderId:"852007719923",appId:"1:852007719923:web:4c57f4ef9782f81026f886"}).auth()),A=n(18);var R=function(){var e=Object(N.b)(),t=Object(A.g)();return Object(s.jsx)("button",{className:"logoutButton",onClick:function(){P.signOut().then((function(){e(I()),t.replace("/")})).catch((function(e){return alert(e.message)}))},children:"Log Out"})},D={open:{transition:{staggerChildren:.07,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},H={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},W=function(e){var t=e.toggle,n=Object(N.c)(L),a=c.useState(!1),i=Object(l.a)(a,2),r=i[0],o=i[1];return Object(s.jsx)(s.Fragment,{children:r?Object(s.jsxs)(d.b.ul,{variants:D,children:[Object(s.jsx)(x,{link:"Menu",goBackIcon:!0,onClick:function(){o(!1)},width:"60%"}),Object(s.jsx)(x,{link:"All products",path:"/menu",onClick:function(){o(!1),t()}}),Object(s.jsx)(x,{link:"Featured",path:"/menu/featured",onClick:function(){o(!1),t()}}),Object(s.jsx)(x,{link:"Previous Orders",onClick:function(){o(!1),t()}}),Object(s.jsx)(x,{link:"Favorite Products",onClick:function(){o(!1),t()}})]}):Object(s.jsxs)(d.b.ul,{variants:D,children:[Object(s.jsx)(x,{link:"Menu",icon:!0,onClick:function(){return o(!0)}}),Object(s.jsx)(x,{link:"Rewards"}),Object(s.jsx)(x,{link:"Gift Cards"}),Object(s.jsx)(d.b.hr,{variants:H}),Object(s.jsx)(d.b.div,{className:"navigation__buttons",variants:H,children:n?Object(s.jsx)(R,{}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(g,{}),Object(s.jsx)(_,{})]})}),Object(s.jsx)(d.b.div,{variants:H,children:Object(s.jsx)(y,{})})]})})},M={open:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return{clipPath:"circle(".concat(2*e+200,"px at 40px 40px)"),transition:{type:"spring",stiffness:20,restDelta:2}}},closed:{clipPath:"circle(30px at 40px 40px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}},B=function(){var e=Object(d.c)(!1,!0),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useRef)(null),r=function(e){var t=Object(c.useRef)({width:0,height:0});return Object(c.useEffect)((function(){t.current.width=e.current.offsetWidth,t.current.height=e.current.offsetHeight}),[e]),t.current}(i).height;return Object(s.jsxs)(d.b.nav,{initial:!1,animate:n?"open":"closed",custom:r,ref:i,children:[Object(s.jsx)(d.b.div,{className:"background",variants:M}),Object(s.jsx)(W,{toggle:function(){return a()}}),Object(s.jsx)(u,{toggle:function(){return a()}})]})};var z=function(e){var t=e.menuPage,n=Object(N.c)(L);return Object(s.jsxs)("div",{className:"header ".concat(t&&"header__menuPage"),children:[Object(s.jsxs)("div",{className:"header__left",children:[Object(s.jsx)(o.b,{className:"header__logo",to:"/",children:Object(s.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",alt:""})}),Object(s.jsx)(o.b,{to:"/menu",className:"header__link",children:"Menu"}),Object(s.jsx)(o.b,{className:"header__link",children:"Rewards"}),Object(s.jsx)(o.b,{className:"header__link",children:"Gift Cards"})]}),Object(s.jsxs)("div",{className:"header__right",children:[Object(s.jsx)(B,{}),Object(s.jsx)(y,{}),n?Object(s.jsx)("div",{className:"header__logout",children:t?Object(s.jsx)(R,{}):Object(s.jsx)(o.b,{to:"/menu",children:"Order Now"})}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o.b,{to:"/account/signin",children:Object(s.jsx)(g,{})}),Object(s.jsx)(o.b,{to:"/account/create",children:Object(s.jsx)(_,{})})]})]})]})},T=(n(135),n(114),function(e){var t=e.link;return Object(s.jsx)(o.b,{className:"word",children:t})}),J=function(e){var t=e.link1,n=e.link2,c=e.link3,a=e.link4,i=e.link5,r=e.link6;return Object(s.jsxs)("div",{className:"paragraph",children:[Object(s.jsx)(T,{link:t}),Object(s.jsx)(T,{link:n}),Object(s.jsx)(T,{link:c}),Object(s.jsx)(T,{link:a}),Object(s.jsx)(T,{link:i}),Object(s.jsx)(T,{link:r})]})},U=function(e){var t=e.link1,n=e.link2,c=e.link3,a=e.link4,i=e.link5,r=e.link6;return Object(s.jsx)(d.b.div,{variants:{collapsed:{scale:.8},open:{scale:1}},transition:{duration:.8},className:"contentPlaceholder",children:Object(s.jsx)(J,{link1:t,link2:n,link3:c,link4:a,link5:i,link6:r})})},Y=(n(115),n(87)),G=n.n(Y),q=n(88),K=n.n(q),V=function(e){var t=e.i,n=e.expanded,c=e.setExpanded,a=e.linkHeading,i=e.link1,r=e.link2,l=e.link3,j=e.link4,b=e.link5,u=e.link6,m=t===n;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(d.b.header,{className:"accordion__header",initial:!1,onClick:function(){return c(!m&&t)},children:[Object(s.jsx)(o.b,{children:a}),Object(s.jsx)("div",{className:"accordion__icon",children:m?Object(s.jsx)(G.a,{fontSize:"large"}):Object(s.jsx)(K.a,{fontSize:"large"})})]}),Object(s.jsx)(d.a,{initial:!1,children:m&&Object(s.jsx)(d.b.section,{className:"accordion__section",initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.8,ease:[.04,.62,.23,.98]},children:Object(s.jsx)(U,{link1:i,link2:r,link3:l,link4:j,link5:b,link6:u})},"content")})]})},$=function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(V,{expanded:n,setExpanded:a,linkHeading:"About Us",i:0,link1:"Our Heritage",link2:"Our Coffee",link3:"Stories and News",link4:"Investor Relations",link5:"Policies and Standards",link6:"Customer Service"}),Object(s.jsx)(V,{expanded:n,setExpanded:a,linkHeading:"Careers",i:1,link1:"Culture and Values",link2:"Inclusion, Diversity, and Equity",link3:"College Achievement Plan",link4:"U.S. Careers",link5:"International Careers"}),Object(s.jsx)(V,{expanded:n,setExpanded:a,linkHeading:"Social Impact",i:2,link1:"Ethical Sourcing",link2:"Leading in Sustainability",link3:"Strengthening Communities",link4:"Creating Oppurtunities",link5:"Global Social Impact Report"}),Object(s.jsx)(V,{expanded:n,setExpanded:a,linkHeading:"For Business Partners",i:3,link1:"Landlord Support Center",link2:"Suppliers",link3:"Corporate Gift Card Sales",link4:"Office and Foodservice Coffee"}),Object(s.jsx)(V,{expanded:n,setExpanded:a,linkHeading:"Order and Pickup",i:4,link1:"Order on the App",link2:"Order on the Web",link3:"Delivery",link4:"Order and Pickup Options",link5:"Explore and Find Coffee for Home"})]})},X=n(20);n(116);var Q=function(e){var t=e.title,n=e.info,c=e.link,a=e.path,i=e.image,r=e.order,l=e.background,d=e.color,j=e.className;return Object(s.jsxs)("div",{className:"featured",style:{background:l},children:[Object(s.jsxs)("div",{className:"featured__left",style:{order:r,color:d},children:[Object(s.jsx)("h1",{children:t}),Object(s.jsx)("h4",{children:n}),Object(s.jsx)(o.b,{to:a,className:j,children:c})]}),Object(s.jsx)("div",{className:"featured__right",children:Object(s.jsx)("img",{src:i,alt:""})})]})};n(117),n(118);var Z=function(e){var t=e.heading;return Object(s.jsx)("h1",{className:"heading",children:t})};n(119);var ee=function(e){var t=e.image,n=e.title,c=e.info,a=e.link,i=e.background,r=e.color,l=e.path,d=e.className;return Object(s.jsxs)("div",{className:"info",style:{color:r,background:i},children:[Object(s.jsx)("img",{src:t,alt:"",className:"info__image"}),Object(s.jsxs)("div",{className:"info__text",children:[Object(s.jsx)("h4",{children:n}),Object(s.jsx)("h6",{children:c}),Object(s.jsx)(o.b,{to:l,style:{color:r},className:d,children:a})]})]})};var te=function(){return Object(s.jsxs)("div",{className:"featuredScreen",children:[Object(s.jsx)(X.a,{children:Object(s.jsx)(Z,{heading:"SELF-CARE IS COOL"})}),Object(s.jsx)(X.a,{children:Object(s.jsxs)("div",{className:"featuredScreen__discover",children:[Object(s.jsx)(ee,{title:"Honey Almondmilk Flat White",image:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67893.png",info:"Our signature espresso meets creamy sweetness.",link:"Order",color:"#1e3932",background:"#f0ebe0",className:"info__hoverLight"}),Object(s.jsx)(ee,{title:"NEW Honey Almondmilk Cold Brew",image:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67894.png",info:"With a hint of honey and an almondmilk finish. ",link:"Order",color:"#1e3932",background:"#f0ebe0",className:"info__hoverLight"})]})}),Object(s.jsx)(X.a,{children:Object(s.jsx)(Z,{heading:"CREAMY, DREAMY COFFEE"})}),Object(s.jsx)(X.a,{children:Object(s.jsxs)("div",{className:"featuredScreen__discover",children:[Object(s.jsx)(ee,{title:"NEW Pistachio Latte",image:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67901.png",info:"Espresso, steamed milk and nutty pistachio sauce.",link:"Order",color:"white",background:"#1e3932",className:"info__hoverDark"}),Object(s.jsx)(ee,{title:"NEW Pistachio Frappuccino\xae blended beverage",image:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67900.png",info:"Finished with whipped cream and a brown-buttery topping. ",link:"Order",color:"white",background:"#1e3932",className:"info__hoverDark"}),Object(s.jsx)(ee,{title:"Nitro Cold Brew",image:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67905.png",info:"Velvety-smooth with a lush, cascading texture. ",link:"Order",color:"white",background:"#1e3932",className:"info__hoverDark"}),Object(s.jsx)(ee,{title:"Nitro Cold Brew with Sweet Cream",image:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67906.png",info:"Topped with house-made sweet cream.",link:"Order",color:"white",background:"#1e3932",className:"info__hoverDark"})]})}),Object(s.jsx)(X.a,{children:Object(s.jsx)(Z,{heading:"GOOD FOOD, GOOD MOOD"})}),Object(s.jsx)(X.a,{children:Object(s.jsxs)("div",{className:"featuredScreen__discover",children:[Object(s.jsx)(ee,{title:"NEW Kale & Portabella Mushroom Sous Vide Egg Bites",image:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67911.png",info:"With cage-free eggs and Monterey Jack cheese.",link:"Order",color:"#1e3932",background:"#d4e9e4",className:"info__hoverLight"}),Object(s.jsx)(ee,{title:"Impossible\u2122 Breakfast Sandwich*",image:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67912.png",info:"Featuring savory Impossible\u2122 Sausage Made from Plants.",link:"Order",color:"#1e3932",background:"#d4e9e4",className:"info__hoverLight"})]})}),Object(s.jsx)(X.a,{children:Object(s.jsx)("div",{className:"featuredScreen__featured",children:Object(s.jsx)(Q,{title:"MEATLESS MONDAYS AT STARBUCKS",info:"Enjoy $2 off any vegetarian breakfast sandwich or wrap every Monday in January.**",link:"Order now",path:"",image:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67916.png",order:"2",background:"#1e3932",color:"white",className:"featured__hoverDark"})})})]})};n(121);var ne=function(){return Object(s.jsxs)("div",{className:"homeScreen",children:[Object(s.jsx)(X.a,{children:Object(s.jsx)("div",{className:"homeScreen__top",children:Object(s.jsxs)("h4",{children:["We\u2019re working hard to put the health and well-being of our partners and customers first in all that we do. ",Object(s.jsx)(o.b,{children:"Learn more"})]})})}),Object(s.jsx)(X.a,{children:Object(s.jsxs)("div",{className:"homeScreen__bottom",children:[Object(s.jsxs)("div",{className:"homeScreen__bottomLeft",children:[Object(s.jsx)("h4",{children:"Investing in our communities"}),Object(s.jsx)("p",{children:"The Starbucks Foundation awarded grants to over 400 nonprofits serving communities of color. Recipients were nominated by Starbucks partners (employees)."}),Object(s.jsx)("button",{children:"Learn more"})]}),Object(s.jsx)("div",{className:"homeScreen__bottomRight",children:Object(s.jsx)("img",{src:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68026.jpg",alt:""})})]})}),Object(s.jsx)(X.a,{children:Object(s.jsx)(Z,{heading:"TODAY IS YOURS"})}),Object(s.jsxs)("div",{className:"homeScreen__featured",children:[Object(s.jsx)(X.a,{children:Object(s.jsx)(Q,{title:"NICELY NONDAIRY",info:"Say yes to sips of delight with our Honey Almondmilk Flat White and new Honey Almondmilk Cold Brew.",link:"Explore the honey drinks",path:"",image:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68069.png",background:"#f0ebe0",color:"#1e3932",className:"featured__hoverLight"})}),Object(s.jsx)(X.a,{children:Object(s.jsx)(Q,{title:"PISTACHIOOOOOOO",info:"Embrace creamy coffee bliss with our new Pistachio Latte and Pistachio Frappuccino\xae blended beverage.",link:"Try the new pistachio drinks",path:"",image:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67826.png",order:"2",background:"#f0ebe0",color:"#1e3932",className:"featured__hoverLight"})})]}),Object(s.jsx)(X.a,{children:Object(s.jsx)(Z,{heading:"MORE TO DISCOVER"})}),Object(s.jsx)(X.a,{children:Object(s.jsxs)("div",{className:"homeScreen__discover",children:[Object(s.jsx)(ee,{title:"Order and pick up. Easy as that.",image:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67828.jpg",info:"Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you.",link:"See pickup options",color:"#1e3932",background:"#d4e9e4",className:"info__hoverLight"}),Object(s.jsx)(ee,{title:"Coffee delivered. Day made.",image:"https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67829.jpg",info:"Make everything a little brighter. Enjoy a $0 Delivery Fee* on your first Uber Eats order over $15 through 1/31.",link:"Order now",color:"#1e3932",background:"#d4e9e4",className:"info__hoverLight"})]})})]})},se=n(167),ce=(n(122),n(65)),ae=n(41),ie=n.n(ae),re=n(42),oe=n.n(re),le=n(63),de=n.n(le),je=n(62),be=n.n(je);n(124);var ue=function(e){var t=e.name,n=e.type;return e.onClick,Object(s.jsx)("button",{className:"formSubmit",type:n,children:t})};n(125);var me=function(e){var t=e.alignItems,n=e.paddingLeft,c=e.flexDirection;return Object(s.jsx)("div",{className:"footerSecondary",style:{alignItems:t,paddingLeft:"".concat(2*n,"px")},children:Object(s.jsxs)("div",{className:"footerSecondary__container",style:{paddingLeft:"".concat(n,"px")},children:[Object(s.jsxs)("div",{className:"footerSecondary__info",children:[Object(s.jsx)("div",{className:"footerSecondary__left",children:Object(s.jsx)(y,{})}),Object(s.jsxs)("div",{className:"footerSecondary__right",style:{flexDirection:c},children:[Object(s.jsx)(o.b,{children:"Responsibility"}),Object(s.jsx)(o.b,{children:"Web Accessibility"}),Object(s.jsx)(o.b,{children:"Privacy Policy"}),Object(s.jsx)(o.b,{children:"Terms of Use "}),Object(s.jsx)(o.b,{children:"Cookie Preferences"})]})]}),Object(s.jsx)("span",{className:"footerSecondary__copyright",children:"\xa9 2021 Starbucks"})]})})};var he=function(){var e=Object(ce.a)(),t=e.register,n=e.handleSubmit,a=(e.watch,e.errors),i=Object(c.useState)(!1),r=Object(l.a)(i,2),d=r[0],j=r[1],b=Object(N.b)();return Object(s.jsxs)("div",{className:"loginScreen",children:[Object(s.jsxs)("div",{className:"loginScreen__left",children:[Object(s.jsx)(o.b,{to:"/",children:Object(s.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",alt:""})}),Object(s.jsx)("div",{className:"loginScreen__info",children:Object(s.jsx)("h1",{children:"Sign in or create an account \ud83c\udf1f"})})]}),Object(s.jsxs)("div",{className:"loginScreen__right",children:[Object(s.jsxs)("form",{onSubmit:n((function(e){var t=e.email,n=e.password;P.signInWithEmailAndPassword(t,n).then((function(e){b(F({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName}))})).catch((function(e){return alert(e.message)}))})),children:[Object(s.jsxs)("div",{className:"loginScreen__inputContainer",children:[Object(s.jsx)(se.a,{name:"email",label:"Email Address",type:"email",InputLabelProps:{style:{color:"rgba(0,0,0,.56)"}},InputProps:{style:{fontWeight:"800"}},className:"loginScreen__input",inputRef:t({required:!0})}),a.email&&Object(s.jsxs)("div",{className:"loginScreen__error",children:[Object(s.jsx)(ie.a,{fontSize:"small"}),Object(s.jsx)("span",{children:"Enter an email."}),Object(s.jsx)(oe.a,{fontSize:"small",className:"loginScreen__reportIcon"})]})]}),Object(s.jsxs)("div",{className:"loginScreen__inputContainer",children:[Object(s.jsx)(se.a,{name:"password",label:"Password",type:d?"text":"password",InputLabelProps:{style:{color:"rgba(0,0,0,.56)"}},InputProps:{style:{fontWeight:"800"}},className:"loginScreen__input",inputRef:t({required:!0})}),d?Object(s.jsx)(be.a,{onClick:function(){return j(!d)},className:"loginScreen__visibilityIcon"}):Object(s.jsx)(de.a,{onClick:function(){return j(!d)},className:"loginScreen__visibilityIcon"}),a.password&&Object(s.jsxs)("div",{className:"loginScreen__error",children:[Object(s.jsx)(ie.a,{fontSize:"small"}),Object(s.jsx)("span",{children:"Enter an password."}),Object(s.jsx)(oe.a,{fontSize:"small",className:"loginScreen__reportIcon"})]})]}),Object(s.jsxs)("div",{className:"loginScreen__resetLinks",children:[Object(s.jsx)(o.b,{children:"Forgot your username?"}),Object(s.jsx)(o.b,{children:"Forgot your password?"})]}),Object(s.jsx)(ue,{name:"Sign in",type:"submit"})]}),Object(s.jsx)("div",{className:"loginScreen__rewards",children:Object(s.jsx)("h4",{children:"JOIN STARBUCKS\xae REWARDS"})}),Object(s.jsx)("div",{className:"loginScreen__joinNow",children:Object(s.jsxs)("div",{className:"loginScreen__joinNowContainer",children:[Object(s.jsx)(o.b,{to:"/account/create",children:"Join now"}),Object(s.jsx)("h4",{children:"Create an account and bring on the Rewards!"}),Object(s.jsx)("p",{children:"Join Starbucks\xae Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more."})]})}),Object(s.jsx)(me,{paddingLeft:30,flexDirection:"column"})]})]})};n(127),n(128);var pe=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(s.jsx)("div",{className:"menuHeader",children:Object(s.jsxs)("div",{className:"menuHeader__links",children:[Object(s.jsx)(o.b,{className:"".concat(0===n&&"menuHeader__link--active"),onClick:function(){return a(0)},children:"All products"}),Object(s.jsx)(o.b,{to:"/menu/featured",className:"".concat(1===n&&"menuHeader__link--active"),onClick:function(){return a(1)},children:"Featured"}),Object(s.jsx)(o.b,{children:"Previous Orders"}),Object(s.jsx)(o.b,{children:"Favorite Products"})]})})},Oe=(n(129),n(35));var fe=function(){return Object(s.jsxs)("div",{className:"menuList",children:[Object(s.jsxs)("div",{className:"menuList__container",children:[Object(s.jsx)("h4",{children:"Drinks"}),Object(s.jsx)("div",{className:"menuList__items",children:Oe.map((function(e){return e.drinks.map((function(e){return Object(s.jsx)(o.b,{children:e.type})}))}))})]}),Object(s.jsxs)("div",{className:"menuList__container",children:[Object(s.jsx)("h4",{children:"Food"}),Object(s.jsx)("div",{className:"menuList__items",children:Oe.map((function(e){return e.food.map((function(e){return Object(s.jsx)(o.b,{children:e.type})}))}))})]}),Object(s.jsxs)("div",{className:"menuList__container",children:[Object(s.jsx)("h4",{children:"At Home Coffee"}),Object(s.jsx)("div",{className:"menuList__items",children:Oe.map((function(e){return e.atHomeCoffee.map((function(e){return Object(s.jsx)(o.b,{children:e.type})}))}))})]}),Object(s.jsxs)("div",{className:"menuList__container",children:[Object(s.jsx)("h4",{children:"Merchandise"}),Object(s.jsx)("div",{className:"menuList__items",children:Oe.map((function(e){return e.merchandise.map((function(e){return Object(s.jsx)(o.b,{children:e.type})}))}))})]})]})};n(130);var xe=function(e){var t=e.type,n=e.image;return Object(s.jsx)(X.a,{children:Object(s.jsxs)(o.b,{className:"menuItem",children:[Object(s.jsx)("img",{src:n,alt:"",className:"menuItem__image"}),Object(s.jsx)("h4",{className:"menuItem__type",children:t})]})})};var ge=function(){return Object(s.jsxs)("div",{className:"menuScreen",children:[Object(s.jsx)(pe,{}),Object(s.jsxs)("div",{className:"menuScreen__container",children:[Object(s.jsx)("div",{className:"menuScreen__left",children:Object(s.jsx)(fe,{})}),Object(s.jsxs)("div",{className:"menuScreen__right",children:[Object(s.jsx)("h1",{children:"Menu"}),Object(s.jsxs)("div",{className:"menuScreen__category",children:[Object(s.jsx)("h2",{children:"Drinks"}),Object(s.jsx)("div",{className:"menuScreen__items",children:Oe.map((function(e){return e.drinks.map((function(e){var t=e.type,n=(e.path,e.image);return Object(s.jsx)(xe,{type:t,image:n})}))}))})]}),Object(s.jsxs)("div",{className:"menuScreen__category",children:[Object(s.jsx)("h2",{children:"Food"}),Object(s.jsx)("div",{className:"menuScreen__items",children:Oe.map((function(e){return e.food.map((function(e){var t=e.type,n=(e.path,e.image);return Object(s.jsx)(xe,{type:t,image:n})}))}))})]}),Object(s.jsxs)("div",{className:"menuScreen__category",children:[Object(s.jsx)("h2",{children:"At Home Coffee"}),Object(s.jsx)("div",{className:"menuScreen__items",children:Oe.map((function(e){return e.atHomeCoffee.map((function(e){var t=e.type,n=(e.path,e.image);return Object(s.jsx)(xe,{type:t,image:n})}))}))})]}),Object(s.jsxs)("div",{className:"menuScreen__category",children:[Object(s.jsx)("h2",{children:"Merchandise"}),Object(s.jsx)("div",{className:"menuScreen__items",children:Oe.map((function(e){return e.merchandise.map((function(e){var t=e.type,n=(e.path,e.image);return Object(s.jsx)(xe,{type:t,image:n})}))}))})]})]})]})]})};n(131),n(132);var _e=function(){var e=Object(ce.a)(),t=e.register,n=e.handleSubmit,a=e.errors,i=Object(c.useState)(!1),r=Object(l.a)(i,2),o=r[0],d=r[1],j=Object(N.b)(),b=Object(A.g)();return Object(s.jsx)("div",{className:"signupForm",children:Object(s.jsx)("div",{className:"signupForm__container",children:Object(s.jsxs)("form",{onSubmit:n((function(e){var t=e.fName,n=(e.lName,e.email),s=e.password;P.createUserWithEmailAndPassword(n,s).then((function(e){e.user.updateProfile({displayName:t}).then((function(){j(F({email:e.user.email,uid:e.user.uid,displayName:t})),b.replace("/menu")}))})).catch((function(e){return alert(e.message)}))})),className:"signupForm__form",children:[Object(s.jsx)("h4",{className:"signupForm__section",children:"Personal Information"}),Object(s.jsxs)("div",{className:"signupForm__inputContainer",children:[Object(s.jsx)(se.a,{name:"fName",label:"First name",type:"text",InputLabelProps:{style:{color:"rgba(0,0,0,.56)"}},InputProps:{style:{fontWeight:"800"}},className:"signupForm__input",inputRef:t({required:!0})}),a.fName&&Object(s.jsxs)("div",{className:"signupForm__error",children:[Object(s.jsx)(ie.a,{fontSize:"small"}),Object(s.jsx)("span",{children:"Enter your first name."}),Object(s.jsx)(oe.a,{fontSize:"small",className:"signupForm__reportIcon"})]})]}),Object(s.jsxs)("div",{className:"signupForm__inputContainer",children:[Object(s.jsx)(se.a,{name:"lName",label:"Last name",type:"text",InputLabelProps:{style:{color:"rgba(0,0,0,.56)"}},InputProps:{style:{fontWeight:"800"}},className:"signupForm__input",inputRef:t({required:!0})}),a.lName&&Object(s.jsxs)("div",{className:"signupForm__error",children:[Object(s.jsx)(ie.a,{fontSize:"small"}),Object(s.jsx)("span",{children:"Enter your last name."}),Object(s.jsx)(oe.a,{fontSize:"small",className:"signupForm__reportIcon"})]})]}),Object(s.jsx)("h4",{className:"signupForm__section",children:"Account Security"}),Object(s.jsxs)("div",{className:"signupForm__inputContainer",children:[Object(s.jsx)(se.a,{name:"email",label:"Email Address",type:"email",InputLabelProps:{style:{color:"rgba(0,0,0,.56)"}},InputProps:{style:{fontWeight:"800"}},className:"signupForm__input",inputRef:t({required:!0})}),a.email&&Object(s.jsxs)("div",{className:"signupForm__error",children:[Object(s.jsx)(ie.a,{fontSize:"small"}),Object(s.jsx)("span",{children:"Enter an email."}),Object(s.jsx)(oe.a,{fontSize:"small",className:"signupForm__reportIcon"})]})]}),Object(s.jsxs)("div",{className:"signupForm__inputContainer",children:[Object(s.jsx)(se.a,{name:"password",label:"Password",type:o?"text":"password",InputLabelProps:{style:{color:"rgba(0,0,0,.56)"}},InputProps:{style:{fontWeight:"800"}},className:"signupForm__input",inputRef:t({required:!0})}),o?Object(s.jsx)(be.a,{onClick:function(){return d(!o)},className:"signupForm__visibilityIcon"}):Object(s.jsx)(de.a,{onClick:function(){return d(!o)},className:"signupForm__visibilityIcon"}),a.password&&Object(s.jsxs)("div",{className:"signupForm__error",children:[Object(s.jsx)(ie.a,{fontSize:"small"}),Object(s.jsx)("span",{children:"Enter an password."}),Object(s.jsx)(oe.a,{fontSize:"small",className:"login__reportIcon"})]})]}),Object(s.jsx)("h4",{className:"signupForm__rewards",children:"COLLECT MORE STARS & EARN REWARDS"}),Object(s.jsx)("span",{className:"signupForm__span",children:"Email is a great way to know about offers and what\u2019s new from Starbucks."}),Object(s.jsx)(ue,{name:"Create account",type:"submit"})]})})})};var ke=function(){return Object(s.jsxs)("div",{className:"signupScreen",children:[Object(s.jsx)("div",{className:"signupScreen__header",children:Object(s.jsx)(o.b,{to:"/",children:Object(s.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",alt:""})})}),Object(s.jsx)("h1",{className:"signupScreen__heading",children:"Create an account"}),Object(s.jsxs)("div",{className:"signupScreen__rewards",children:[Object(s.jsx)("h4",{children:"STARBUCKS\xae REWARDS"}),Object(s.jsxs)("p",{children:["Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and"," ",Object(s.jsx)(o.b,{children:"more"}),"."]})]}),Object(s.jsx)(_e,{}),Object(s.jsx)(me,{alignItems:"center",flexDirection:"column"})]})};var ve=function(){var e=Object(N.c)(L),t=Object(N.b)();return Object(c.useEffect)((function(){P.onAuthStateChanged((function(e){t(e?F({email:e.email,uid:e.uid,displayName:e.displayName}):I())}))}),[t]),Object(s.jsx)("div",{className:"app",children:Object(s.jsx)(o.a,{children:Object(s.jsxs)(A.d,{children:[Object(s.jsxs)(A.b,{exact:!0,path:"/",children:[Object(s.jsx)(z,{}),Object(s.jsx)(ne,{}),Object(s.jsx)(X.a,{children:Object(s.jsx)($,{})})]}),Object(s.jsx)(A.b,{exact:!0,path:"/account/signin",children:e?Object(s.jsx)(A.a,{to:"/menu"}):Object(s.jsx)(he,{})}),Object(s.jsx)(A.b,{exact:!0,path:"/account/create",children:e?Object(s.jsx)(A.a,{to:"/menu"}):Object(s.jsx)(ke,{})}),Object(s.jsx)(A.b,{exact:!0,path:"/menu",children:e?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(z,{menuPage:!0}),Object(s.jsx)(ge,{})]}):Object(s.jsx)(A.a,{to:"/account/signin"})}),Object(s.jsxs)(A.b,{exact:!0,path:"/menu/featured",children:[Object(s.jsx)(z,{}),Object(s.jsx)(te,{}),Object(s.jsx)(X.a,{children:Object(s.jsx)($,{})})]})]})})})},ye=Object(S.a)({reducer:{user:E}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(N.a,{store:ye,children:Object(s.jsx)(ve,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},35:function(e){e.exports=JSON.parse('[{"drinks":[{"path":"/drinks/hot-coffees","type":"Hot Coffees","image":"https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288"},{"path":"/drinks/hot-teas","type":"Hot Teas","image":"https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_tight_288"},{"path":"/drinks/hot-drinks","type":"Hot Drinks","image":"https://globalassets.starbucks.com/assets/d51e67249b7c4d5383fc68b3be1d62eb.jpg?impolicy=1by1_wide_1242"},{"path":"/drinks/frappuccino-blended-beverages","type":"Frappuccino\xae Blended Beverages","image":"https://globalassets.starbucks.com/assets/06cfd44aac9f4b488495e0f7da404825.jpg?impolicy=1by1_tight_288"},{"path":"/drinks/cold-coffees","type":"Cold Coffees","image":"https://globalassets.starbucks.com/assets/21f012c25a714d81b211a19094fb90cc.jpg?impolicy=1by1_wide_1242"},{"path":"/drinks/iced-teas","type":"Iced Teas","image":"https://globalassets.starbucks.com/assets/0f3e19ad457f4b9f9fb5afde29d0c7cf.jpg?impolicy=1by1_wide_1242"},{"path":"/drinks/cold-drinks","type":"Cold Drinks","image":"https://globalassets.starbucks.com/assets/1fbfdef2d1814c86ae271460a5b85f93.jpg?impolicy=1by1_wide_1242"}],"food":[{"path":"/food/hot-breakfast","type":"Hot Breakfast","image":"https://globalassets.starbucks.com/assets/f9a4cd143c4342abbb4f60b7fab4e6df.jpg?impolicy=1by1_wide_1242"},{"path":"/food/bakery","type":"Bakery","image":"https://globalassets.starbucks.com/assets/2362e79aa0ab4c37a930956c67ab557a.jpg?impolicy=1by1_wide_1242"},{"path":"/food/lunch","type":"Lunch","image":"https://globalassets.starbucks.com/assets/02ea801e3aca434fa2fcccfcd4adba8c.jpg?impolicy=1by1_wide_1242"},{"path":"/food/snacks-and-sweets","type":"Snacks & Sweets","image":"https://globalassets.starbucks.com/assets/374230e32c03466e9f1696551d843f3b.jpg?impolicy=1by1_wide_1242"},{"path":"/food/oatmeal-and-yogurt","type":"Oatmeal & Yogurt","image":"https://globalassets.starbucks.com/assets/3e10e6d4c9cb412b9f37d421c0376465.jpg?impolicy=1by1_wide_1242"}],"atHomeCoffee":[{"path":"/at-home-coffee/whole-bean","type":"Whole Bean","image":"https://globalassets.starbucks.com/assets/69b578aa962c40f98d88d9d521c5410c.jpg?impolicy=1by1_wide_1242"},{"path":"/at-home-coffee/verismo-pods","type":"Verismo\xae Pods","image":"https://globalassets.starbucks.com/assets/833e95732cc849a4b1fe1d315771ae0a.jpg?impolicy=1by1_wide_1242"},{"path":"/at-home-coffee/via-instant","type":"VIA\xae Instant","image":"https://globalassets.starbucks.com/assets/27d30b52d95948fc81141af6bb91a108.jpg?impolicy=1by1_wide_1242"}],"merchandise":[{"path":"/merchandise/drinkware","type":"Drinkware","image":"https://globalassets.starbucks.com/assets/b3c749e064534f608fcc84076329f39d.jpg?impolicy=1by1_wide_1242"}]}]')}},[[133,1,2]]]);
//# sourceMappingURL=main.1c057ead.chunk.js.map