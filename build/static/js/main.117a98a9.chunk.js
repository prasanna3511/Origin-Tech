(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,c,t){},102:function(e,c,t){},103:function(e,c,t){},121:function(e,c,t){},122:function(e,c,t){},123:function(e,c,t){},125:function(e,c,t){},126:function(e,c,t){},127:function(e,c,t){},128:function(e,c,t){},129:function(e,c,t){},130:function(e,c,t){},132:function(e,c,t){"use strict";t.r(c);var s=t(7),i=t.n(s),n=t(68),a=t.n(n),r=(t(80),t(69)),j=t(14),d=(t(81),t(82),t.p+"static/media/origin1.634067b2.png"),l=t(54),b=t.n(l),h=t(21),o=t(1),O=Object(s.createContext)(),u=function(e){var c=e.reducer,t=e.initialState,i=e.children;return Object(o.jsx)(O.Provider,{value:Object(s.useReducer)(c,t),children:i})},x=function(){return Object(s.useContext)(O)},m=t(55),p=(t(85),t(133),m.a.initializeApp({apiKey:"AIzaSyCHYhQwZxg4Y8X9Ixu3EVKbGzg6821GgQ0",authDomain:"origin-tech-1eddc.firebaseapp.com",projectId:"origin-tech-1eddc",storageBucket:"origin-tech-1eddc.appspot.com",messagingSenderId:"451117346760",appId:"1:451117346760:web:71c441ed02380ac78a9afd",measurementId:"G-55TZX7Z58L"}).firestore()),v=m.a.auth();t.p;var g=function(){var e=x(),c=Object(j.a)(e,2),t=c[0],s=t.basket,i=t.user;return c[1],Object(o.jsxs)("div",{className:"header",children:[Object(o.jsxs)("div",{className:"hl",children:[Object(o.jsx)(h.b,{to:"/",children:Object(o.jsx)("img",{className:"header_logo",src:d})}),Object(o.jsx)("div",{className:"ptag"}),Object(o.jsxs)(h.b,{to:"/",children:["  ",Object(o.jsx)("p",{className:"p",children:"Home"})," "]}),Object(o.jsx)("p",{className:"p",children:"Shop"}),Object(o.jsxs)(h.b,{to:"/About",children:["  ",Object(o.jsx)("p",{className:"p",children:"Info"}),"    "]}),Object(o.jsx)("p",{className:"p",children:"Courses"})]}),Object(o.jsx)("div",{className:"hn",children:Object(o.jsxs)("div",{className:"header_nav",children:[Object(o.jsx)(h.b,{to:!i&&"/login",children:Object(o.jsxs)("div",{onClick:function(){i&&v.signOut()},className:"header_option",children:[Object(o.jsxs)("span",{className:"header_optionlineone",children:["Hello ",i?i.email:"Guest"]}),Object(o.jsx)("span",{className:"header_optionlinetwo",children:i?"Sign Out":"Sign In"})]})}),Object(o.jsx)(h.b,{to:"/checkout",children:Object(o.jsxs)("div",{className:"header_optionbasket",children:[Object(o.jsx)(b.a,{}),Object(o.jsx)("span",{className:"header_optionlinetwo header_basketcount",children:null===s||void 0===s?void 0:s.length})]})})]})})]})};t(94),t(95);var f=function(e){var c=e.id,t=e.title,s=e.image,i=e.price,n=x(),a=Object(j.a)(n,2),r=(a[0].basket,a[1]);return Object(o.jsxs)("div",{className:"product",children:[Object(o.jsxs)(h.b,{to:"/description",style:{textDecoration:"none"},children:[Object(o.jsxs)("div",{className:"product_info",children:[Object(o.jsx)("p",{children:t}),Object(o.jsxs)("p",{className:"product_price",children:[Object(o.jsx)("small",{children:"\u20b9"}),Object(o.jsx)("strong",{children:i})]})]}),Object(o.jsx)("img",{src:s,alt:""})]}),Object(o.jsx)("button",{onClick:function(){r({type:"ADD_TO_BASKET",item:{id:c,title:t,image:s,price:i}})},children:"Add To Basket"})]})},w=(t.p,t.p+"static/media/teslaboard.3150da02.jpeg");var E=function(){var e=x(),c=Object(j.a)(e,2),t=c[0];return t.basket,t.user,c[1],Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)("div",{className:"home_container"}),Object(o.jsxs)("div",{className:"home_row",children:[Object(o.jsx)("h1",{children:" Product"}),Object(o.jsx)("hr",{}),Object(o.jsx)(f,{id:"1",title:"Tesla Board",price:1899,image:w})]}),Object(o.jsx)("br",{})]})};t(96);t(97),t(98);var A=function(e){var c=e.id,t=e.image,s=e.title,i=e.price,n=x(),a=Object(j.a)(n,2),r=(a[0].basket,a[1]);return Object(o.jsxs)("div",{className:"checkoutproduct",children:[Object(o.jsx)("img",{className:"checkoutproduct_image",src:t,alt:""}),Object(o.jsxs)("div",{className:"checkoutproduct_info",children:[Object(o.jsx)("p",{className:"checkoutproduct_title",children:s}),Object(o.jsxs)("p",{className:"checkoutproduct_price",children:[Object(o.jsx)("small",{children:"\u20b9"}),Object(o.jsx)("strong",{children:i})]}),Object(o.jsx)("button",{onClick:function(){r({type:"REMOVE_FROM_BASKET",id:c})},children:"Remove from Basket"})]})]})},N=(t(99),t(48)),k=t.n(N),S=t(17),y=t(31),T=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,c){return c.price+e}),0)},C=function(e,c){switch(c.type){case"ADD_TO_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[].concat(Object(S.a)(e.basket),[c.item])});case"EMPTY_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===c.id})),s=Object(S.a)(e.basket);return t>=0?s.splice(t,1):console.warn("Cant remove product (id: ".concat(c.id,") as its not in basket!")),Object(y.a)(Object(y.a)({},e),{},{basket:s});case"SET_USER":return Object(y.a)(Object(y.a)({},e),{},{user:c.user});default:return e}},I=t(20);var M=function(){var e=Object(I.f)(),c=x(),t=Object(j.a)(c,2),s=t[0].basket;return t[1],Object(o.jsxs)("div",{className:"subtotal",children:[Object(o.jsx)(k.a,{renderText:function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("p",{children:["Subtotal (",s.length," items): ",Object(o.jsx)("strong",{children:e})]})})},decimalScale:2,value:T(s),displayType:"text",thousandSeparator:!0,prefix:"\u20a8"}),Object(o.jsx)("button",{onClick:function(c){return e.push("/payment")},className:"subtotal_button",children:"Proceed to Checkout"})]})};var P=function(){var e=x(),c=Object(j.a)(e,1)[0],t=c.basket,s=c.user;return Object(o.jsxs)("div",{className:"checkout",children:[Object(o.jsx)("div",{className:"checkout_right",children:Object(o.jsx)(M,{})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h3",{children:["hello,",null===s||void 0===s?void 0:s.email]}),Object(o.jsx)("h2",{className:"checkout_title",children:"Your Shopping List"}),t.map((function(e){return Object(o.jsx)(A,{id:e.id,title:e.title,image:e.image,price:e.price})}))]})]})};t(101);t(102);var B=function(){var e=Object(I.f)(),c=Object(s.useState)(""),t=Object(j.a)(c,2),i=t[0],n=t[1],a=Object(s.useState)(""),r=Object(j.a)(a,2),l=r[0],b=r[1];return Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)(h.b,{to:"/",children:Object(o.jsx)("img",{className:"login_logo",src:d,alt:""})}),Object(o.jsxs)("div",{className:"login_container",children:[Object(o.jsx)("h1",{children:"Sign-In"}),Object(o.jsxs)("form",{action:"",children:[Object(o.jsx)("h5",{children:"E-mail"}),Object(o.jsx)("input",{type:"text",value:i,onChange:function(e){return n(e.target.value)}}),Object(o.jsx)("h5",{children:"Password"}),Object(o.jsx)("input",{type:"password",value:l,onChange:function(e){return b(e.target.value)}}),Object(o.jsx)("button",{type:"submit",className:"login_signinbutton",onClick:function(c){c.preventDefault(),v.signInWithEmailAndPassword(i,l).then((function(c){e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(o.jsxs)("div",{className:"order_container",children:[Object(o.jsx)("p",{children:"Create your account now and have shop now"}),Object(o.jsx)("button",{onClick:function(c){c.preventDefault(),v.createUserWithEmailAndPassword(i,l).then((function(c){c&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_registerbutton",children:"CREATE YOUR ACCOUNT NOW"})]})]})]})},R=t.p+"static/media/insta.9a9e6f69.png";t(103);var G=function(){return Object(o.jsxs)("div",{className:"foot",children:[Object(o.jsxs)("div",{className:"fot1",children:[Object(o.jsxs)("div",{className:"ft1",children:[Object(o.jsx)("p",{children:" Home"}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{href:"#news",children:"Boards And Programmer"}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{href:"#about",children:"Products"}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{href:"#about",children:"Courses"}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{href:"#about",children:"Information"})]}),Object(o.jsxs)("div",{className:"ft1",children:[Object(o.jsx)("p",{className:"active",href:"#home",children:"Shopping Return"}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{href:"#news",children:"Boards And Programmer"}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{href:"#about",children:"Payment Method"}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{href:"#about",children:"Track Order"}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{href:"#about",children:"Information"}),Object(o.jsx)("br",{})]})]}),Object(o.jsxs)("div",{className:"smedia",children:[Object(o.jsx)("a",{href:"https://instagram.com/_shubhamomase?utm_medium=copy_link",children:Object(o.jsx)("img",{className:"instagram",src:R})}),Object(o.jsx)("a",{href:"https://instagram.com/_shubhamomase?utm_medium=copy_link",children:Object(o.jsx)("img",{className:"linkedin",src:"data:image/png;base64,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"})})]})]})},U=t(0),L=t.n(U),D=t(3),K=t(35),J=t(71),H=t.n(J);t(121);var Q=function(){var e=x(),c=Object(j.a)(e,2),t=c[0],i=t.basket,n=t.user,a=c[1],r=Object(I.f)(),d=Object(K.useStripe)(),l=Object(K.useElements)(),b=Object(s.useState)(!1),O=Object(j.a)(b,2),u=O[0],m=O[1],v=Object(s.useState)(""),g=Object(j.a)(v,2),f=g[0],w=g[1],E=Object(s.useState)(null),N=Object(j.a)(E,2),S=N[0],y=N[1],C=Object(s.useState)(!0),M=Object(j.a)(C,2),P=M[0],B=M[1],R=Object(s.useState)(!0),G=Object(j.a)(R,2),U=G[0],J=G[1];Object(s.useEffect)((function(){var e=function(){var e=Object(D.a)(L.a.mark((function e(){var c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H()({method:"post",url:"/payments/create?total=".concat(1*T(i))});case 2:c=e.sent,J(c.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i]),console.log("the secret",U);var Q=function(){var e=Object(D.a)(L.a.mark((function e(c){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),w(!0),e.next=4,d.confirmCardPayment(U,{payment_method:{Card:l.getElement(K.CardElement)}}).then((function(e){var c=e.paymentIntent;p.collection("users").doc(null===n||void 0===n?void 0:n.uid).collection("orders").doc(c.id).set({basket:i,amount:c.amount,created:c.created}),m(!0),y(null),w(!1),a({type:"EMPTY_BASKET"}),r.replace("/Orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"payment_container",children:[Object(o.jsxs)("h1",{children:["Checkout (",Object(o.jsxs)(h.b,{to:"/checkout",children:[null===i||void 0===i?void 0:i.length," items"]}),")"]}),Object(o.jsx)("div",{className:"payment_section",children:Object(o.jsxs)("div",{className:"payment_title",children:[Object(o.jsx)("h3",{children:"Delivery Address"}),Object(o.jsx)("p",{children:null===n||void 0===n?void 0:n.email}),Object(o.jsx)("p",{children:"RIT islampur"}),Object(o.jsx)("p",{children:"Sangli"})]})}),Object(o.jsxs)("div",{className:"payment_section",children:[Object(o.jsx)("div",{className:"payment_title",children:Object(o.jsx)("h3",{children:"Review items and delivery"})}),Object(o.jsx)("div",{className:"payments_items",children:i.map((function(e){return Object(o.jsx)(A,{id:e.id,title:e.title,image:e.image,price:e.price})}))})]}),Object(o.jsxs)("div",{className:"payment_section",children:[Object(o.jsx)("div",{className:"payment_title",children:Object(o.jsx)("h3",{children:"payment Method"})}),Object(o.jsx)("div",{className:"payment_details",children:Object(o.jsxs)("form",{onSubmit:Q,children:[Object(o.jsx)(K.CardElement,{onChange:function(e){B(e.empty),y(e.error?e.error.message:"")}}),Object(o.jsxs)("div",{className:"payment_pricecontainer",children:[Object(o.jsx)(k.a,{renderText:function(e){return Object(o.jsxs)("h3",{children:["Order Total : ",e," "]})},decimalScale:2,value:T(i),displayType:"text",thousandSeparator:!0,prefix:"Rs "}),Object(o.jsx)("button",{disabled:f||P||u,children:Object(o.jsx)("span",{children:f?Object(o.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),S&&Object(o.jsx)("div",{children:S})]})})]})]})})},X=t(72);t(122),t(123),t(73);var Z=function(){var e=x(),c=Object(j.a)(e,2),t=c[0],i=(t.basket,t.user),n=(c[1],Object(s.useState)([])),a=Object(j.a)(n,2),r=a[0],d=a[1];return Object(s.useEffect)((function(){i?p.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){d(e.docs.map((function(e){return{id:e.id,data:e.data}})))})):d([])}),[i]),Object(o.jsxs)("div",{className:"orders",children:[Object(o.jsx)("h1",{children:"Yours Orders"}),Object(o.jsx)("div",{className:"orders_order",children:null===r||void 0===r?void 0:r.map((function(e){}))})]})};t(125);var z=function(){return Object(o.jsx)("div",{className:"Homebg",children:Object(o.jsx)("div",{class:"header-banner container",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"ORIGIN TECH"}),Object(o.jsx)("h1",{children:"Tesla Board IOT"}),Object(o.jsx)("button",{type:"button",class:"btn-trans",children:"Order Now"})]})})})};t(126);var F=function(){return Object(o.jsxs)("div",{className:"dcontainer",children:[Object(o.jsx)("div",{className:"left-column",children:Object(o.jsx)("img",{src:w,alt:""})}),Object(o.jsxs)("div",{className:"right-column",children:[Object(o.jsxs)("div",{className:"product-description",children:[Object(o.jsx)("span",{children:"Tesla Board"}),Object(o.jsx)("h1",{children:"Features"}),Object(o.jsxs)("p",{children:["1.Direct Programming using Micro-USB ",Object(o.jsx)("br",{})," 2.ESP8266 12-E On-Board Chip ",Object(o.jsx)("br",{})," 3. 12v power jack to power tesla board ",Object(o.jsx)("br",{})," 4.On-Board DC motor driver ",Object(o.jsx)("br",{})," 4.On board Buzzer ",Object(o.jsx)("br",{})," 5.Direct LCD interfacing setup ",Object(o.jsx)("br",{})," 6. 2 relay driver ",Object(o.jsx)("br",{})," 7. On-board LED's ,potentiometer ,pull ups ,power source and switch ",Object(o.jsx)("br",{})," 8. Easy to interface other sensors, Microcontrollers and peripherals ",Object(o.jsx)("br",{})," 9. Extremely easy to use and program using arduino IDE, Visual studio at commands ,Micro-python ,Mongoose OS ",Object(o.jsx)("br",{}),"10. Inexpensive with respect to other IOT boards available in the market"]})]}),Object(o.jsxs)("div",{className:"product-price",children:[Object(o.jsx)("span",{children:"RS /- 1800 "}),Object(o.jsx)("a",{href:"#",class:"cart-btn",children:"Contact us"}),Object(o.jsx)("br",{})]})]})]})},Y=t.p+"static/media/Shubham.9832ec45.jpg",W=t.p+"static/media/anandkakade.bf5c78f8.png",V=t.p+"static/media/Randhirpatil.90b65fad.png",_=t.p+"static/media/Sachinkumbhar.35b7976c.jpeg",q=t.p+"static/media/Harshalpatil.ca010fb4.jpg",$=(t(127),"data:image/png;base64,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");var ee=function(){return Object(o.jsxs)("div",{className:"aboutf",children:[Object(o.jsx)("div",{class:"about",children:Object(o.jsxs)("div",{class:"inner-section",children:[Object(o.jsx)("h1",{children:"About Us"}),Object(o.jsx)("p",{class:"text",children:Object(o.jsx)("b",{children:"Origin Tech is a startup company . Started by Mr. Shubham Omase to make innovative highly reliable and easy to use , electronics & electrical products in different domains for e.g. IOT , healthcare , domestic , industrial , education , agriculture , etc."})}),Object(o.jsx)("div",{class:"skills",children:Object(o.jsx)("button",{children:"Contact Us"})})]})}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{class:"wrapper",children:[Object(o.jsx)("h1",{children:"Our Team"}),Object(o.jsxs)("div",{class:"team",children:[Object(o.jsxs)("div",{class:"team_member",children:[Object(o.jsx)("div",{class:"team_img",children:Object(o.jsx)("img",{src:Y,alt:"Team_image"})}),Object(o.jsx)("b",{children:Object(o.jsx)("h3",{children:"Mr. Shubham Omase"})}),Object(o.jsx)("p",{class:"role",children:"Founder & CEO of Origin Tech."}),Object(o.jsx)("p",{children:"B.Tech in Elctronics and Telecommunication."}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/shubham-omase-72aa72137/",children:Object(o.jsx)("img",{alt:"in",src:$,class:"linkdin"})})})]}),Object(o.jsxs)("div",{class:"team_member",children:[Object(o.jsx)("div",{class:"team_img",children:Object(o.jsx)("img",{src:W,alt:"Team_img"})}),Object(o.jsx)("h3",{children:"Dr. Anand Kakade"}),Object(o.jsx)("p",{class:"role",children:"Co-founder & CTO"}),Object(o.jsx)("p",{children:'M.Tech and PhD from "Indian Institute of Technology, Kharagpur'}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/dr-anand-kakade-b4a70191/",children:Object(o.jsx)("img",{alt:"in",src:$,class:"linkdin"})})})]}),Object(o.jsxs)("div",{class:"team1",children:[Object(o.jsxs)("div",{class:"team_member1",children:[Object(o.jsx)("div",{class:"team_img1",children:Object(o.jsx)("img",{src:V,alt:"Team_img"})}),Object(o.jsx)("h3",{children:"Mr. Randhir Patil"}),Object(o.jsx)("p",{class:"role1",children:"Head Marketing"}),Object(o.jsx)("p",{children:"M.Tech in Electronics."}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/randhir-patil-40003/",children:Object(o.jsx)("img",{alt:"in",src:$,class:"linkdin"})})})]}),Object(o.jsxs)("div",{class:"team_member1",children:[Object(o.jsx)("div",{class:"team_img1",children:Object(o.jsx)("img",{src:_,alt:"Team_img"})}),Object(o.jsx)("h3",{children:"Mr. Sachin Kumbhar"}),Object(o.jsx)("p",{class:"role1",children:"Works in Origin Tech"}),Object(o.jsx)("p",{children:"M.Tech Electrical Power Syatem from IIT , Kharagpur."})]}),Object(o.jsxs)("div",{class:"team_member1",children:[Object(o.jsx)("div",{class:"team_img1",children:Object(o.jsx)("img",{src:q,alt:"Team_img"})}),Object(o.jsx)("h3",{children:"Mr. Harshal Patil"}),Object(o.jsx)("p",{class:"role1",children:"Works in Origin Tech"}),Object(o.jsx)("p",{children:"M.E. in Electronics & Telecommunication."})]})]})]})]}),Object(o.jsx)("div",{class:"wteam",children:Object(o.jsx)("h4",{children:"Web Developers"})}),Object(o.jsxs)("div",{class:"t1",children:[Object(o.jsxs)("div",{class:"b1",children:[Object(o.jsx)("p",{children:"Vrushali Patil"}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/vrushali-vinayak-patil-0a61631a7/",children:Object(o.jsx)("img",{alt:"in",src:$,class:"linkdin"})})})]}),Object(o.jsxs)("div",{class:"b1",children:[Object(o.jsx)("p",{children:"Prasanna Joshi"}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/prasanna-joshi-0783a01b2/",children:Object(o.jsx)("img",{alt:"in",src:$,class:"linkdin"})})})]}),Object(o.jsxs)("div",{class:"b1",children:[Object(o.jsx)("p",{children:"Shreeya Paranjape"}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/shreeya-paranjape-8356091a3/",children:Object(o.jsx)("img",{alt:"in",src:$,class:"linkdin"})})})]}),Object(o.jsxs)("div",{class:"b1",children:[Object(o.jsx)("p",{children:"Soham Nanaware"}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/soham-nanaware-b47bb61b4/",children:Object(o.jsx)("img",{alt:"in",src:$,class:"linkdin"})})})]}),Object(o.jsxs)("div",{class:"b1",children:[Object(o.jsx)("p",{children:"Samad Pathan"}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/samad-pathan-9976271a3/",children:Object(o.jsx)("img",{alt:"in",src:$,class:"linkdin"})})})]})]})]})},ce=(t(128),function(){return Object(o.jsxs)("div",{className:"aboutf",children:[Object(o.jsx)("div",{class:"about",children:Object(o.jsxs)("div",{class:"inner-section",children:[Object(o.jsx)("h1",{children:"About Us"}),Object(o.jsx)("p",{class:"text",children:Object(o.jsx)("b",{children:"Origin Tech is a startup company . Started by Mr. Shubham Omase to make innovative highly reliable and easy to use , electronics & electrical products in different domains for e.g. IOT , healthcare , domestic , industrial , education , agriculture , etc."})}),Object(o.jsx)("div",{class:"skills",children:Object(o.jsx)("button",{children:"Contact Us"})})]})}),Object(o.jsx)("br",{})]})}),te=(t(129),function(){return Object(o.jsx)("div",{className:"contactbg",children:Object(o.jsxs)("div",{className:"textcontact",children:[Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("h4",{children:"Mr. Shubham Omase"})]}),Object(o.jsx)("p",{children:"Founder & CEO"}),Object(o.jsx)("p",{children:"+91 9552116440 | shubham@anandtechno.in"}),Object(o.jsx)("p",{children:Object(o.jsx)("h4",{children:"Dr. Anand Kakade"})}),Object(o.jsx)("p",{children:"Co-Founder & CEO"}),Object(o.jsx)("p",{children:Object(o.jsx)("h4",{children:"Mr. Randhir Patil"})}),Object(o.jsx)("p",{children:"Head Marketing"}),Object(o.jsx)("p",{children:"+91 9423984211 | randhir@anandtechno.in"})]})})}),se=t.p+"static/media/iot-water.1a00edb7.jpg",ie=[{id:1,product_name:"curd maker",description:"More efficient , easy to handle ",thumb:"../src/curdmaker.jpg"},{id:2,product_name:"curd maker",description:"More efficient , easy to handle ",thumb:"../src/curd-maker-home.jpg"},{id:3,product_name:"occupancy",description:"More efficient , easy to handle ",thumb:"./src/occupancy.jpg"},{id:4,product_name:"water leve checker",description:"More efficient , easy to handle ",thumb:"./src/water.jpg"},{id:5,product_name:"sanitizer machine",description:"More efficient , easy to handle ",thumb:"./src/sanitizer.jpg"},{id:6,product_name:"iotbased water level monitoring",description:"More efficient , easy to handle ",thumb:"iot-water.jpg"}],ne=(t(130),t.p+"static/media/water.fce84bca.jpg"),ae=t.p+"static/media/sanitizer-1.32b73762.jpg",re=t.p+"static/media/occupancy.1ceb5a61.jpg",je=function(){console.log(ie);ie.map((function(e){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card_img",children:Object(o.jsx)("img",{src:e.thumb})}),Object(o.jsxs)("div",{className:"card_header",children:[Object(o.jsx)("h2",{children:e.product_name}),Object(o.jsx)("p",{children:e.description}),Object(o.jsx)("div",{className:"btn",children:"Contact Us"})]})]})}));return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)("div",{className:"home_container"}),Object(o.jsxs)("div",{className:"home_row",children:[Object(o.jsx)("h1",{children:" Our Products "}),Object(o.jsx)("hr",{}),Object(o.jsx)(f,{id:"2",title:"Sanitizer Machine",image:se})]}),Object(o.jsxs)("div",{className:"home_row",children:[Object(o.jsx)("hr",{}),Object(o.jsx)(f,{id:"2",title:"Sanitizer Machine",image:ae})]}),Object(o.jsxs)("div",{className:"home_row",children:[Object(o.jsx)("hr",{}),Object(o.jsx)(f,{id:"2",title:"Sanitizer Machine",image:ne})]}),Object(o.jsxs)("div",{className:"home_row",children:[Object(o.jsx)("hr",{}),Object(o.jsx)(f,{id:"2",title:"Sanitizer Machine",image:re})]}),Object(o.jsx)("br",{})]})},de=Object(X.a)("pk_live_51JvPo4SDCqaXJOSgPvHqyRj1QSLVPymM39D0JlxJAwhXyzW8TKCT1X5ZfkLtGhU1Q4cgqcu1tWjUibUXjOVXfCkU00hAYI0ePb");var le=function(){var e=x(),c=Object(j.a)(e,2);Object(r.a)(c[0]);var t=c[1];return Object(s.useEffect)((function(){v.onAuthStateChanged((function(e){console.log(e),t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(o.jsx)(h.a,{children:Object(o.jsx)("div",{className:"app",children:Object(o.jsxs)(I.c,{children:[Object(o.jsxs)(I.a,{path:"/orders",children:[Object(o.jsx)(g,{}),Object(o.jsx)(Z,{}),Object(o.jsx)(G,{})]}),Object(o.jsx)(I.a,{path:"/login",children:Object(o.jsx)(B,{})}),Object(o.jsxs)(I.a,{path:"/description",children:[Object(o.jsx)(g,{}),Object(o.jsx)(F,{}),Object(o.jsx)(G,{})]}),Object(o.jsxs)(I.a,{path:"/about",children:[Object(o.jsx)(g,{}),Object(o.jsx)(ee,{}),Object(o.jsx)(G,{})]}),Object(o.jsxs)(I.a,{path:"/checkout",children:[Object(o.jsx)(g,{}),Object(o.jsx)(P,{}),Object(o.jsx)(G,{})]}),Object(o.jsxs)(I.a,{path:"/maincontent",children:[Object(o.jsx)(g,{}),Object(o.jsx)(je,{}),Object(o.jsx)(G,{})]}),Object(o.jsxs)(I.a,{path:"/payment",children:[Object(o.jsx)(g,{}),Object(o.jsx)(K.Elements,{stripe:de,children:Object(o.jsx)(Q,{})}),Object(o.jsx)(G,{})]}),Object(o.jsxs)(I.a,{path:"/",children:[Object(o.jsx)(g,{}),Object(o.jsx)(z,{}),Object(o.jsx)(E,{}),Object(o.jsx)(ce,{}),Object(o.jsx)(te,{}),Object(o.jsx)(G,{})]})]})})})},be=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,141)).then((function(c){var t=c.getCLS,s=c.getFID,i=c.getFCP,n=c.getLCP,a=c.getTTFB;t(e),s(e),i(e),n(e),a(e)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(u,{initialState:{basket:[],user:null},reducer:C,children:Object(o.jsx)(le,{})})}),document.getElementById("root")),be()},80:function(e,c,t){},81:function(e,c,t){},82:function(e,c,t){},94:function(e,c,t){},95:function(e,c,t){},96:function(e,c,t){},97:function(e,c,t){},98:function(e,c,t){},99:function(e,c,t){}},[[132,1,2]]]);
//# sourceMappingURL=main.117a98a9.chunk.js.map