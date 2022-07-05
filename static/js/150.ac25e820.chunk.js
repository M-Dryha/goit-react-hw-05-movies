"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[150,186,275],{7603:function(e,n,r){r.d(n,{bb:function(){return u},Pg:function(){return l},tx:function(){return d},Wf:function(){return p},yo:function(){return f}});var t=r(5861),a=r(7757),s=r.n(a),i=r(4569),c=r.n(i);c().defaults.baseURL="https://api.themoviedb.org/",c().defaults.headers.post["Content-Type"]="application/json; charset=utf-8";var o="96dea35b5a4d6ccb61b77721fd102ef9",u=function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("3/trending/movie/day?api_key=".concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("3/movie/".concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("3/movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/3/search/movie?api_key=".concat(o,"&query=").concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/3/movie/".concat(n,"/credits?api_key=").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},275:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});var t=r(5861),a=r(885),s=r(7757),i=r.n(s),c=r(6871),o=r(2791),u=r(7603),l=r(6373),d=r(6030),p="Cast_photo__lvFLf",f="Cast_castList__ARoWn",h="Cast_castItem__-Jcfe",v=r(184),m=function(){var e=(0,c.UO)().movieId,n=(0,o.useState)([]),r=(0,a.Z)(n,2),s=r[0],m=r[1],x=(0,o.useState)(!1),_=(0,a.Z)(x,2),g=_[0],j=_[1];return(0,o.useEffect)((function(){function n(){return(n=(0,t.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),n.prev=1,n.next=4,(0,u.yo)(e);case 4:r=n.sent,m(r.cast),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,j(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),(0,v.jsxs)("section",{children:[g&&(0,v.jsx)(l.Z1,{color:"red",outerCircleColor:"blue",middleCircleColor:"red",innerCircleColor:"grey"}),(0,v.jsx)("ul",{className:f,children:s.length>0&&s.map((function(e){var n=e.original_name,r=e.character,t=e.profile_path,a=e.id;return(0,v.jsxs)("li",{className:h,children:[(0,v.jsx)("img",{className:p,src:t?"https://image.tmdb.org/t/p/w500".concat(t):d,alt:n}),(0,v.jsxs)("p",{children:["Name: ",n]}),(0,v.jsxs)("p",{children:["Character: ",r]})]},a)}))}),0===s.length&&(0,v.jsx)("p",{children:" Cast not found =("})]})}},3150:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var t=r(5861),a=r(885),s=r(7757),i=r.n(s),c=r(2791),o=r(7603),u=r(275),l=r(186),d=r(501),p=r(6871),f=r(6373),h=r(6030),v={cardContainer:"MovieDetails_cardContainer__80lGT",Image:"MovieDetails_Image__Gpymw",Container:"MovieDetails_Container__RyaeD",imageThumb:"MovieDetails_imageThumb__hm1qO",genresList:"MovieDetails_genresList__iljfW",movieGenres:"MovieDetails_movieGenres__TTLvJ",information:"MovieDetails_information__vmdmd"},m=r(184),x=function(){var e,n,r=(0,p.UO)().movieId,s=(0,c.useState)({}),x=(0,a.Z)(s,2),_=x[0],g=x[1],j=(0,c.useState)([]),C=(0,a.Z)(j,2),b=C[0],w=C[1],y=(0,c.useState)(!1),k=(0,a.Z)(y,2),Z=k[0],N=k[1],S=(0,p.TH)(),U=null!==(e=null===S||void 0===S||null===(n=S.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";(0,c.useEffect)((function(){function e(){return(e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.prev=1,e.next=4,(0,o.Pg)(r);case 4:n=e.sent,g(n),w(n.genres),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.prev=12,N(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]);var D=_.original_title,T=_.vote_average,G=_.overview,I=_.poster_path;return(0,m.jsxs)("main",{className:v.cardContainer,children:[Z&&(0,m.jsx)(f.Z1,{color:"red",outerCircleColor:"blue",middleCircleColor:"red",innerCircleColor:"grey"}),(0,m.jsx)(d.rU,{to:U,children:" Go back "}),_&&(0,m.jsxs)("section",{className:v.Container,children:[(0,m.jsx)("div",{className:v.imageThumb,children:(0,m.jsx)("img",{className:v.Image,src:I?"https://image.tmdb.org/t/p/w500".concat(I):h,alt:D})}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("h2",{children:[" ",D]}),(0,m.jsxs)("p",{children:[" User Score: ",10*T,"%"]}),_&&(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("ul",{className:v.genresList,children:b.map((function(e){return(0,m.jsx)("li",{className:v.movieGenres,children:e.name},e.id)}))})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsxs)("p",{children:[" ",G]})]})]})]}),(0,m.jsx)("section",{className:v.section,children:(0,m.jsxs)("div",{className:v.information,children:[(0,m.jsx)("h3",{children:"Additional information"}),(0,m.jsx)(d.rU,{to:"cast",movieid:r,state:{from:U},children:"Cast"}),(0,m.jsx)(d.rU,{to:"reviews",movieid:r,state:{from:U},children:"Reviews"})]})}),(0,m.jsx)(c.Suspense,{fallback:(u.default,(0,m.jsx)(l.default,{})),children:(0,m.jsx)(p.j3,{})})]})}},186:function(e,n,r){r.r(n);var t=r(5861),a=r(885),s=r(7757),i=r.n(s),c=r(6871),o=r(2791),u=r(6373),l=r(7603),d=r(184);n.default=function(){var e=(0,c.UO)().movieId,n=(0,o.useState)([]),r=(0,a.Z)(n,2),s=r[0],p=r[1],f=(0,o.useState)(!1),h=(0,a.Z)(f,2),v=h[0],m=h[1];return(0,o.useEffect)((function(){function n(){return(n=(0,t.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),n.prev=1,n.next=4,(0,l.tx)(e);case 4:r=n.sent,p(r.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),(0,d.jsxs)("section",{children:[v&&(0,d.jsx)(u.Z1,{color:"red",outerCircleColor:"blue",middleCircleColor:"red",innerCircleColor:"grey"}),s.length>0?s.map((function(e){var n=e.author,r=e.content;return(0,d.jsxs)("div",{children:[(0,d.jsxs)("h4",{children:["Author: ",n]}),(0,d.jsx)("p",{children:r})]},n)})):(0,d.jsx)("p",{children:" No Reviews found =("})]})}},6030:function(e,n,r){e.exports=r.p+"static/media/no-image.ae12979f6099185ebba0.jpg"}}]);
//# sourceMappingURL=150.ac25e820.chunk.js.map