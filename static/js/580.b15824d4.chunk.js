"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[580],{580:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(439),r=n(689),s=n(87),i=n(791),c=n(264),o=n(323),u=n(60),l=n(413),d=n(1),m={movieList:"Home_movieList__dew6t",link:"Home_link__nk6bm"},p=n(184),f=function(){var e=(0,i.useState)(1),t=(0,a.Z)(e,1)[0],n=(0,i.useState)(l.Z.trending),f=(0,a.Z)(n,1)[0],h=(0,i.useState)([]),v=(0,a.Z)(h,2),g=v[0],_=v[1],b=(0,i.useState)(""),k=(0,a.Z)(b,1)[0],Z=(0,r.TH)(),w="".concat(f).concat(k,"?api_key=").concat(d.Z,"&page=").concat(t,"&language=en-US&include_adult=false");return(0,i.useEffect)((function(){(0,o.Z)(w).then((function(e){0===e.data.results.length&&c.Notify.failure("Please check the request and try again!"),_(e.data.results)}))}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)("ul",{className:m.movieList,children:g.map((function(e){return(0,p.jsx)("li",{className:m.moviesItem,children:(0,p.jsx)(s.rU,{to:{pathname:"movies/".concat(e.id),state:{from:Z}},className:m.link,children:(0,p.jsx)("img",{width:"250px",src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):u,alt:e.title,className:m.poster})})},e.id)}))})]})}},1:function(e,t){t.Z="487147f1f35b8dc05ecb62d6b1edb1cd"},413:function(e,t){t.Z={trending:"/trending/movie/day",querySearch:"/search/movie",movieDetails:"/movie/",movieCredits:"/credits",movieReviews:"/reviews"}},323:function(e,t,n){var a=n(861),r=n(757),s=n.n(r),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,a.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log("getMovies says:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();t.Z=c},60:function(e,t,n){e.exports=n.p+"static/media/no_image.d94858f9ed2950bcb958.jpg"}}]);
//# sourceMappingURL=580.b15824d4.chunk.js.map