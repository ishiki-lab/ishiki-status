(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/francesco.7489ea26.png"},17:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(10),i=a.n(s),c=(a(23),a(11)),l=a(12),r=a(15),d=a(13),u=a(16),m=a(14),p=a.n(m),h=a(3),f=a.n(h),g=(a(43),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).statusEndpoint="https://arup-iot-desk.appspot.com/api/desks/",a.infoEndpoint="http://172.24.2.65/info",a.infoLoading=!0,a.state={booked:!1,userEmail:"",deskName:"",deskId:"",infoLoading:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getStatus",value:function(){var e=this;f.a.get(this.statusEndpoint+this.state.deskId).then(function(t){console.log(t.data),e.setState({booked:t.data.booked,userEmail:t.data.user_email,deskName:t.data.name})})}},{key:"getInfo",value:function(){var e=this;f.a.get(this.infoEndpoint).then(function(t){console.log(t),e.setState({hostname:t.data[0],eth0Ip:t.data[2][0][2],wlan0Ip:t.data[2][1][2],deskId:t.data[1],infoLoading:!1})})}},{key:"componentDidMount",value:function(){this.getInfo()}},{key:"render",value:function(){var e=this;return!1!==this.state.infoLoading&&setInterval(function(){e.getStatus()},4e3),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",{className:"debug"},o.a.createElement("code",null,this.state.hostname," : (",this.state.eth0Ip,") : (",this.state.wlan0Ip,")")),o.a.createElement("p",null,o.a.createElement("code",null,this.state.deskName)),o.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),!0===this.state.booked&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Booked by: ",this.state.userEmail),o.a.createElement("p",null,"until 5:30pm"))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.05234877.chunk.js.map