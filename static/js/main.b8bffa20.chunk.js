(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{221:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},225:function(e,t,n){e.exports=n(554)},234:function(e,t,n){},236:function(e,t,n){},337:function(e,t){},360:function(e,t){},362:function(e,t){},431:function(e,t){},554:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(88),o=n.n(r),i=(n(234),n(32)),c=n(33),u=n(35),l=n(34),p=n(36),m=n(221),d=n.n(m),y=(n(236),n(16)),g=n.n(y),b=n(46),f=n(26),h=n.n(f),v=(n(309),n(222)),_=n.n(v),x=(a.Component,n(223)),w=n(224),E=new(n.n(w).a)(window.ethereum),k=new E.eth.Contract([{constant:!1,inputs:[{name:"message_text",type:"string"},{name:"recipient",type:"address"}],name:"create_message",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"username",type:"bytes32"}],name:"create_txtr",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"},{name:"addr",type:"address"}],name:"get_one_message_recipient",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"message_text",type:"string"}],name:"send_public_message",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"},{name:"addr",type:"address"}],name:"get_one_sent_message",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"get_sent_user_message_total",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"get_user_message_total",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"}],name:"get_public_message_address",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"},{name:"addr",type:"address"}],name:"get_one_message",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"txtrs",outputs:[{name:"name",type:"bytes32"},{name:"owner",type:"address"},{name:"exists",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"},{name:"addr",type:"address"}],name:"get_one_message_sender",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"}],name:"get_public_message_sender",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"index",type:"uint256"}],name:"get_public_message_message",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"get_public_message_count",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"message_addr",type:"address"},{indexed:!1,name:"message",type:"string"},{indexed:!0,name:"_from",type:"address"}],name:"NewPublicMessage",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"}],name:"NewTxtr",type:"event"}],"0x39012AEb632B355876D5c75B46b2d40313477547");function j(){return M.apply(this,arguments)}function M(){return(M=Object(b.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.enable();case 2:return e.next=4,E.eth.getAccounts();case 4:t=e.sent,k.options.from=t[0];case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}var O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).mySubmitHandler=function(){var e=Object(b.a)(g.a.mark(function e(t){var a,s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,E.eth.getAccounts();case 3:return a=e.sent,alert(a+"You are submitting "+n.state.message),e.next=7,k.methods.send_public_message(n.state.message).send();case 7:return s=e.sent,alert(s),e.abrupt("return",!1);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.myChangeHandler=function(e){var t=e.target.name,a=e.target.value,r="";"message"===t&&""==a&&(r=s.a.createElement("strong",null,"Your message can't be blank")),n.setState({errormessage:r}),n.setState(Object(x.a)({},t,a))},n.state={message:"",errormessage:""},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.mySubmitHandler},s.a.createElement("input",{type:"text",name:"message",onChange:this.myChangeHandler}),s.a.createElement("input",{type:"submit"}),this.state.errormessage)}}]),t}(s.a.Component),N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={selectedArt:1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return e.next=4,this.getPublicMessages();case 4:t=e.sent,console.log("response is ",t),this.setState({publicMessages:{data:t}});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPublicMessages",value:function(){var e=Object(b.a)(g.a.mark(function e(){var t,n,a,s,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.methods.get_public_message_count().call();case 2:t=e.sent,console.log("messages count",t),n=[],a=t-1;case 6:if(!(a>=0)){e.next=18;break}return console.log("index is",a),e.next=10,k.methods.get_public_message_message(a).call();case 10:return s=e.sent,e.next=13,k.methods.get_public_message_sender(a).call();case 13:r=e.sent,n.push({message:s,sender:r,id:a});case 15:a--,e.next=6;break;case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.publicMessages?s.a.createElement("div",{className:"addmargin"},s.a.createElement("div",{className:"col-md-4"}),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("p",null,s.a.createElement(O,null)),this.state.publicMessages.data.map(function(e){return s.a.createElement(h.a,{bsStyle:"info",key:e.id,className:"centeralign"},s.a.createElement(h.a.Heading,null,s.a.createElement(h.a.Title,{componentClass:"h3"},e.message)),s.a.createElement(h.a.Body,null,s.a.createElement("p",null,e.sender)))}))):s.a.createElement("p",null,"Loading data")}}]),t}(a.Component),C=n(556),A=n(558),S=n(559),H=n(557),B=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("Host URL/txtrs-react"),s.a.createElement(C.a,{basename:"/txtrs-react"},s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),s.a.createElement("h1",{className:"App-title"},"Txt.rs"),s.a.createElement("h3",{className:"App-subtitle"},"Connect ",s.a.createElement("a",{href:"http://metamask.io",target:"_blank"},"Metamask.io")," to the goerli testnet")),s.a.createElement(A.a,null,s.a.createElement(S.a,{exact:!0,path:"/",render:function(){return s.a.createElement(H.a,{to:"/chat"})}}),s.a.createElement(S.a,{exact:!0,path:"/chat",component:N}))))}}]),t}(a.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(s.a.createElement(B,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/txtrs-react",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/txtrs-react","/service-worker.js");T?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):W(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):W(e)})}}()}},[[225,2,1]]]);
//# sourceMappingURL=main.b8bffa20.chunk.js.map