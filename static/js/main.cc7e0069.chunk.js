(this.webpackJsonpelfsight=this.webpackJsonpelfsight||[]).push([[0],{12:function(e,t,n){e.exports={header:"Album_header__9tNao",grid:"Album_grid__36f37",item:"Album_item__3Cqmh",img:"Album_img__1m4Bo","text-wrap":"Album_text-wrap__23Rfm",name:"Album_name__3gbbm",link:"Album_link__19qCY"}},16:function(e,t,n){e.exports={wrap:"Carousel_wrap__1QU2G",btns:"Carousel_btns__3qxab",carousel:"Carousel_carousel__1TWpp",slide:"Carousel_slide__2inBQ",_active:"Carousel__active__1hUGN"}},19:function(e,t,n){e.exports={header:"Photo_header__1I8ZN",grid:"Photo_grid__uocWy",item:"Photo_item__1NgsX",popup:"Photo_popup__1Lfp4","btn-wrap":"Photo_btn-wrap__1P3td"}},22:function(e,t,n){e.exports={grid:"Home_grid__2jcRz",item:"Home_item__3Gu9g",name:"Home_name__fZDvV"}},23:function(e,t,n){e.exports={wrap:"Popup_wrap__3Tlor",overlay:"Popup_overlay__1AYS5",body:"Popup_body__2WnEX"}},26:function(e,t,n){e.exports={container:"Preloader_container__1ZJzZ",spinner:"Preloader_spinner__1-fCQ","lsd-spinner":"Preloader_lsd-spinner__2wWP5"}},29:function(e,t,n){e.exports={button:"Button_button__2_KMK"}},35:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(20),r=n.n(a),s=(n(34),n(35),n(3)),i=n(22),o=n.n(i),u=n(10),l=n(11),d=n(9),j=n.n(d),b=n(14),p=n(7),h="https://jsonplaceholder.typicode.com",m=function(e){return["".concat(h,"/users/").concat(e,"/albums"),"".concat(h,"/photos")]},f=function(e){return fetch("".concat(h,"/albums/").concat(e,"/photos"))},x=Object(p.b)("getAllUsers",Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"/users"));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))),_=Object(p.c)({name:"users",initialState:{data:[],loading:!1},reducers:{},extraReducers:function(e){e.addCase(x.pending,(function(e){e.loading=!0})),e.addCase(x.fulfilled,(function(e,t){var n=t.payload;e.data=n,e.loading=!1}))}}).reducer,O=Object(p.b)("getAlbumsById",function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all(m(t).map(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return n=e.sent,e.abrupt("return",n[0].map((function(e){var t=n[1].filter((function(t){return e.id===t.albumId}));return e.photosCount=t.length,e.thumbnailUrl=t[0].thumbnailUrl,e})));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),v=Object(p.c)({name:"albums",initialState:{data:[],loading:!1},reducers:{},extraReducers:function(e){e.addCase(O.pending,(function(e){e.loading=!0})),e.addCase(O.fulfilled,(function(e,t){var n=t.payload;e.data=n,e.loading=!1}))}}).reducer,g=Object(p.b)("getPhotosById",function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),N=Object(p.c)({name:"photos",initialState:{data:[],loading:!1},reducers:{},extraReducers:function(e){e.addCase(g.pending,(function(e){e.loading=!0})),e.addCase(g.fulfilled,(function(e,t){var n=t.payload;e.data=n,e.loading=!1}))}}).reducer,C={getAllUsers:x,getAlbumsById:O,getPhotosById:g},w=function(){var e=Object(u.b)();return Object(l.b)(C,e)},y=function(e){return e.users},P=n(13),k=n(26),A=n.n(k),B=n(1),I=function(){return Object(B.jsx)("div",{className:A.a.container,children:Object(B.jsx)("div",{className:A.a.spinner,children:Array.from({length:12}).map((function(e,t){return Object(B.jsx)("div",{},"".concat(e,"/").concat(t))}))})})},U=function(){var e=w().getAllUsers,t=Object(u.c)(y),n=t.data,a=t.loading;return Object(c.useEffect)((function(){e()}),[]),a?Object(B.jsx)(I,{}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h1",{children:"Authors"}),Object(B.jsx)("div",{className:o.a.grid,children:n.map((function(e){var t=e.name,n=e.id;return Object(B.jsxs)("div",{className:o.a.item,children:[Object(B.jsx)("h3",{className:o.a.name,children:t}),Object(B.jsx)(P.b,{className:"btn-primary",to:"/album/".concat(n),children:"View album"})]},"".concat(n))}))})]})},S=n(12),E=n.n(S),R=n(29),W=n.n(R),Z=function(e){var t=e.onClick,n=e.children;return Object(B.jsx)("button",{className:W.a.button,onClick:t,children:n})},q=function(){var e=Object(s.e)();return Object(B.jsx)(Z,{onClick:function(){return e.goBack()},children:"Back"})},F=function(e){return e.albums},G=function(){var e=Object(s.f)().id,t=Object(u.c)(F),n=t.data,a=t.loading,r=w().getAlbumsById;return Object(c.useEffect)((function(){r(e)}),[e]),a?Object(B.jsx)(I,{}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("div",{className:E.a.header,children:[Object(B.jsx)("h1",{children:"Albums"}),Object(B.jsx)(q,{})]}),Object(B.jsx)("div",{className:E.a.grid,children:n.map((function(e){var t=e.id,n=e.title,c=e.thumbnailUrl,a=e.photosCount;return Object(B.jsxs)("div",{className:E.a.item,children:[Object(B.jsx)("div",{className:E.a.img,children:Object(B.jsx)("img",{className:E.a.img,src:c,alt:n})}),Object(B.jsxs)("div",{className:E.a["text-wrap"],children:[Object(B.jsx)("h2",{className:E.a.name,children:n}),Object(B.jsxs)("p",{className:E.a["photo-count"],children:["\u041a\u043e\u043b-\u0432\u043e \u0444\u043e\u0442\u043e: ",a]})]}),Object(B.jsx)(P.b,{className:"btn-primary ".concat(E.a.link),to:"/photo/".concat(t),children:"View"})]},"".concat(t))}))})]})},H=n(18),J=n(19),Q=n.n(J),V=function(e){return e.photos},z=n(23),K=n.n(z),T=function(e){var t=e.children,n=e.handleClosePopup;return Object(B.jsxs)("div",{className:K.a.wrap,children:[Object(B.jsx)("div",{onClick:n,className:K.a.overlay}),Object(B.jsx)("div",{className:K.a.body,children:t})]})},X=n(16),Y=n.n(X),D=function(e){var t=e.items,n=e.currentIndex,a=Object(c.useState)(n),r=Object(H.a)(a,2),s=r[0],i=r[1];return Object(B.jsxs)("div",{className:Y.a.wrap,children:[Object(B.jsx)("ul",{className:Y.a.carousel,children:t.map((function(e,t){var n=e.id,c=e.url,a=e.title;return Object(B.jsx)("li",{className:"".concat(Y.a.slide," ").concat(t===s?"".concat(Y.a._active):""),children:Object(B.jsx)("img",{id:n,src:c,alt:a})},n)}))}),Object(B.jsxs)("div",{className:Y.a.btns,children:[Object(B.jsx)(Z,{onClick:function(){var e=s;e<1&&(e=t.length),--e,i(e)},children:"Prev"}),Object(B.jsx)(Z,{onClick:function(){var e=s;e===t.length-1&&(e=-1),++e,i(e)},children:"Next"})]})]})},L=function(){var e=Object(s.f)().id,t=Object(u.c)(V),n=t.data,a=t.loading,r=w().getPhotosById,i=Object(c.useState)(!1),o=Object(H.a)(i,2),l=o[0],d=o[1],j=Object(c.useState)(null),b=Object(H.a)(j,2),p=b[0],h=b[1];Object(c.useEffect)((function(){r(e)}),[e]);return a?Object(B.jsx)(I,{}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("div",{className:Q.a.header,children:[Object(B.jsx)("h1",{children:"Photos"}),Object(B.jsx)(q,{})]}),Object(B.jsx)("div",{className:Q.a.grid,children:n.map((function(e,t){var n=e.id,c=e.url,a=e.title;return Object(B.jsx)("div",{className:Q.a.item,children:Object(B.jsx)("img",{src:c,alt:a,onClick:function(){return function(e){d(!0),h(e)}(t)}})},n)}))}),Object(B.jsx)("div",{className:Q.a.popup,children:l&&Object(B.jsx)(T,{handleClosePopup:function(){d(!1),h(null)},children:Object(B.jsx)(D,{items:n,currentIndex:p})})})]})},M=function(){return Object(B.jsxs)("div",{className:"container",children:[Object(B.jsx)(s.a,{exact:!0,path:"/",children:Object(B.jsx)(U,{})}),Object(B.jsx)(s.a,{path:"/album/:id",children:Object(B.jsx)(G,{})}),Object(B.jsx)(s.a,{path:"/photo/:id",children:Object(B.jsx)(L,{})})]})},$={users:_,albums:v,photos:N},ee=Object(p.a)({reducer:$});r.a.render(Object(B.jsx)(P.a,{basename:"/elfsight-test",children:Object(B.jsx)(u.a,{store:ee,children:Object(B.jsx)(M,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.cc7e0069.chunk.js.map