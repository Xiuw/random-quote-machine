(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),u=n(8),r=n.n(u),i=(n(16),n(1)),s=n(2),c=n(4),l=n(3),m=n(5),h=function(e){var t=e.quoteData;return o.a.createElement("div",null,o.a.createElement("p",{id:"text"},o.a.createElement("i",{className:"fas fa-quote-left"})," ",t.quote," ",o.a.createElement("i",{className:"fas fa-quote-right"})," "),o.a.createElement("p",{id:"author"},t.author))},d=n(9),p=(n(7),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).onHandleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(d.a)({},a,o))},n.onHandleSubmit=function(e){n.state.inputQuote.length<=10||n.state.inputAuthor.length<=1?alert("Please check your form again"):fetch("https://intense-reef-85189.herokuapp.com/submitQuote",{method:"post",headers:{"Content-Type":"Application/json"},body:JSON.stringify({quote:n.state.inputQuote,author:n.state.inputAuthor})}).then(function(e){return e.json()}).then(function(e){console.log(e),e[0]&&(console.log("yes"),n.setState({route:"other",inputQuote:"",inputAuthor:"",message:"*Your quote has been sucessfully submitted."}))})},n.state={inputQuote:"",inputAuthor:"",message:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.inputQuote,n=e.inputAuthor,a=e.message;return o.a.createElement("div",{className:"formPage"},o.a.createElement("div",{className:"formCSS"},o.a.createElement("p",{className:"nav",onClick:this.props.handleRoute}," Return to quote page"),o.a.createElement("div",{className:"input-section"},o.a.createElement("textarea",{className:"inputArea",name:"inputQuote",value:t,type:"text",placeholder:"Write your quote here",rows:"6",onChange:this.onHandleChange})),o.a.createElement("div",{className:"input-section"},o.a.createElement("input",{className:"inputArea",type:"text",placeholder:"Author or source",name:"inputAuthor",value:n,onChange:this.onHandleChange}),o.a.createElement("p",{className:"msg"},a)),o.a.createElement("div",null,o.a.createElement("button",{className:"btn-quote",onClick:this.onHandleSubmit},"Submit"))))}}]),t}(a.Component)),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).call(this))).onHandleGenerate=function(){fetch("https://intense-reef-85189.herokuapp.com/getQuote").then(function(e){return e.json()}).then(function(t){console.log(t.id),t.id===e.state.random.id?e.onHandleGenerate():e.setState({random:t,fadeIn:!0})})},e.onHandleRoute=function(t){"main"===e.state.route?e.setState({route:"form"}):e.setState({route:"main"})},e.state={random:[],route:"main",fadeIn:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://intense-reef-85189.herokuapp.com/getQuote").then(function(e){return e.json()}).then(function(t){e.setState({random:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.random,a=t.route,u=t.fadeIn;return o.a.createElement("div",{className:"App"},"main"===a?o.a.createElement("div",null,o.a.createElement("div",{id:"quote-box"},o.a.createElement("p",{className:"nav",onClick:this.onHandleRoute},"Submit a new quote"),o.a.createElement("div",{className:"quoteCSS"},o.a.createElement("div",{className:u?"effect_fade":"",onAnimationEnd:function(){return e.setState({fadeIn:!1})}},o.a.createElement("a",{id:"tweet-quote",href:"http://twitter.com/intent/tweet",style:{color:"#1da1f2",fontSize:"25px"}},o.a.createElement("i",{className:"fab fa-twitter-square"})),o.a.createElement(h,{quoteData:n}))),o.a.createElement("div",null,o.a.createElement("p",{id:"new-quote",className:"btn-quote",onClick:this.onHandleGenerate},"Generate new Quote")))):o.a.createElement(p,{handleRoute:this.onHandleRoute}))}}]),t}(a.Component);r.a.render(o.a.createElement(f,null),document.getElementById("root"))},7:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.a750a028.chunk.js.map