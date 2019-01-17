(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,r){e.exports=r(33)},25:function(e,t,r){},31:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),u=r(17),s=r.n(u),c=(r(25),r(1)),o=r(2),i=r(5),l=r(3),p=r(6),h=r(4),d=(r(31),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.currentGroup,t=this.props.chats.filter(function(t){return t.groupId===e.id});return a.a.createElement("div",{className:"message-list"},t.map(function(e){return a.a.createElement("div",{className:"message"},a.a.createElement("div",{className:"message-username"},e.nameuser),a.a.createElement("div",{className:"message-text"},e.message))}))}}]),t}(n.Component)),m=Object(h.b)(function(e){return{chats:e.reducer.chats,currentGroup:e.reducer.currentGroup,currentUser:e.reducer.currentUser}})(d),b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleGroupItem",value:function(e){this.props.changeCurrentGroup(e),this.props.currentGroup}},{key:"render",value:function(){var e=this,t=this.props.currentGroup;return console.log("group",this.props.groups),a.a.createElement("div",{className:"room-list"},a.a.createElement("h2",null,"Room List"),a.a.createElement("div",{className:"content-room"},this.props.groups.map(function(r){return a.a.createElement("button",{className:"btnGroupList",key:r.id,style:t.id===r.id?{backgroundColor:"#3f4144"}:{},onClick:e.handleGroupItem.bind(e,r)},r.title)})))}}]),t}(n.Component),f=Object(h.b)(function(e){return{groups:e.reducer.groups,currentGroup:e.reducer.currentGroup}},{changeCurrentGroup:function(e){return function(t){t({type:"CHANGE_CURRENT_GROUP",payload:e})}}})(b),g=function(e){function t(){var e,r;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return(r=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={message:""},r}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleNewMessage",value:function(e){console.log(this.state.message),e.preventDefault(),this.props.addChat({groupId:this.props.currentGroup.id,nameuser:this.props.currentUser.userName,message:this.state.message}),this.setState({message:""})}},{key:"render",value:function(){return a.a.createElement("form",{className:"send-message-form",onSubmit:this.handleNewMessage.bind(this)},a.a.createElement("input",{onChange:this.handleChange.bind(this),value:this.state.message,type:"text",placeholder:"Type Message",required:!0}))}}]),t}(n.Component),O=Object(h.b)(function(e){return{currentUser:e.reducer.currentUser,currentGroup:e.reducer.currentGroup}},{addChat:function(e){return function(t){t({type:"ADD_CHAT",payload:e})}}})(g),v=function(e){function t(){var e,r;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return(r=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={groupname:""},r}return Object(p.a)(t,e),Object(o.a)(t,[{key:"generateID",value:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}},{key:"handleOnSubmit",value:function(e){e.preventDefault(),this.props.addGroup({id:this.generateID(),title:this.state.groupname}),this.setState({groupname:""})}},{key:"handleOnChange",value:function(e){this.setState({groupname:e.target.value})}},{key:"render",value:function(){return a.a.createElement("div",{className:"new-room-form"},a.a.createElement("form",{onSubmit:this.handleOnSubmit.bind(this)},a.a.createElement("input",{className:"inputGroup",onChange:this.handleOnChange.bind(this),type:"text",placeholder:"NewRoom",value:this.state.groupname,required:!0})))}}]),t}(n.Component),y=Object(h.b)(null,{addGroup:function(e){return function(t){t({type:"ADD_GROUP",payload:e})}}})(v),j=function(e){function t(){var e,r;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return(r=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={user:""},r}return Object(p.a)(t,e),Object(o.a)(t,[{key:"generateID",value:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}},{key:"handleAdduser",value:function(e){e.preventDefault(),this.props.addUser({userId:this.generateID(),userName:this.state.user}),this.setState({user:""})}},{key:"handleChange",value:function(e){this.setState({user:e.target.value})}},{key:"render",value:function(){return a.a.createElement("div",{className:"insert-user"},a.a.createElement("form",{onSubmit:this.handleAdduser.bind(this)},a.a.createElement("input",{onChange:this.handleChange.bind(this),type:"text",value:this.state.user,placeholder:"Insert User",required:!0})),a.a.createElement("span",null,"UserName: ",this.props.currentUser.userName))}}]),t}(n.Component),E=Object(h.b)(function(e){return{currentUser:e.reducer.currentUser}},{addUser:function(e){return function(t){t({type:"CHANGE_USER",payload:e})}}})(j),C=r(7),N=r(19),G=r(11),U=r(10),w={chats:[],groups:[],users:[],currentGroup:{},currentUser:{}},_=Object(C.c)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_GROUP":return Object(U.a)({},e,{groups:[].concat(Object(G.a)(e.groups),[t.payload])});case"CHANGE_CURRENT_GROUP":return Object(U.a)({},e,{currentGroup:t.payload});case"ADD_USER":return Object(U.a)({},e,{newUser:[].concat(Object(G.a)(e.users),[t.payload])});case"CHANGE_USER":return Object(U.a)({},e,{currentUser:t.payload});case"ADD_CHAT":return Object(U.a)({},e,{chats:[].concat(Object(G.a)(e.chats),[t.payload])});default:return e}}}),k=[N.a],D=Object(C.e)(_,{},Object(C.d)(C.a.apply(void 0,k),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),S=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement(h.a,{store:D},a.a.createElement("div",{className:"App"},a.a.createElement(f,null),a.a.createElement(m,null),a.a.createElement(O,null),a.a.createElement(E,null),a.a.createElement(y,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.851fc045.chunk.js.map