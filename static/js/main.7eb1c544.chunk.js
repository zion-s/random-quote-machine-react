(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),c=n.n(r),u=(n(14),n(15),n(1)),i=n.n(u),s=n(4),l=n(5),m=n(6),h=n(8),d=n(7),f=(n(17),function(e){return a.a.createElement("div",{id:"quote-box"},a.a.createElement("div",{id:"text"},e.quote),a.a.createElement("div",{id:"author"},e.author),a.a.createElement("button",{id:"new-quote",onClick:e.randomQuote},"New Quote"),a.a.createElement("a",{href:"twitter.com/intent/tweet",id:"tweet-quote"},"Tweet Quote"))}),p=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={quote:"",author:""},e.randomQuote=Object(s.a)(i.a.mark((function t(){var n,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.quotable.io/random");case 2:return n=t.sent,t.next=5,n.json();case 5:o=t.sent,e.setState({quote:o.content,author:o.author});case 7:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.randomQuote()},e}return Object(m.a)(n,[{key:"render",value:function(){return a.a.createElement(f,{randomQuote:this.randomQuote,quote:this.state.quote,author:this.state.author})}}]),n}(a.a.Component);var w=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.7eb1c544.chunk.js.map