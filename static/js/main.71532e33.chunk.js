(this["webpackJsonpimdb-list-react-router-dom"]=this["webpackJsonpimdb-list-react-router-dom"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(23),s=n.n(r),j=(n(32),n(14)),a=n(27),o=(n(33),n(24)),l=n.n(o),b=n(13),d=n(2),u=n(1);function x(e){return Object(u.jsx)("div",{children:e.movie.map((function(e,t){return Object(u.jsx)("div",{className:"movie-div",children:Object(u.jsxs)("div",{style:{margin:"0 auto",width:"100%",textAlign:"center"},children:[Object(u.jsx)("span",{children:" Film Ad\u0131: "})," ",Object(u.jsxs)("p",{children:[" ",e.fullTitle]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"IMDB S\u0131ras\u0131:  "})," ",Object(u.jsxs)("p",{children:[e.rank," "]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"Vizyon Tarihi:  "}),"  ",Object(u.jsxs)("p",{children:[" ",e.year," "]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"Ekip:  "})," ",Object(u.jsxs)("p",{children:[" ",e.crew," "]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"IMDB Rating:   "}),"  ",Object(u.jsxs)("p",{children:[e.imDbRating," "]}),Object(u.jsx)("br",{}),Object(u.jsx)("img",{src:e.image,alt:e.fullTitle,width:"250px",height:"250px"})]})},t)}))})}var h=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){l.a.get("https://imdb-api.com/en/API/Top250Movies/pk_5g8ie7oxtyveni2lp").then((function(e){return i([e.data])})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)(b.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d.a,{path:"/",exact:!0,render:function(){return n.map((function(e,t){return Object(u.jsx)("div",{className:"movies-container",children:e.items.map((function(e){return Object(u.jsxs)(b.b,{to:"movie/".concat(e.id),className:"link",style:{textDecoration:"none",color:"black"},children:[Object(u.jsx)("div",{style:{textAlign:"center"},children:e.fullTitle}),Object(u.jsx)("hr",{})]})}))},t)}))}}),Object(u.jsx)(d.a,{path:"/movie/:code",render:function(e){var t=n.map((function(t){return t.items.find((function(t){return t.id===e.match.params.code}))}));return Object(u.jsx)(x,Object(j.a)(Object(j.a)({},e),{},{movie:t}))}})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),O()}},[[61,1,2]]]);
//# sourceMappingURL=main.71532e33.chunk.js.map