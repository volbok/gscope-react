(this.webpackJsonpgscope=this.webpackJsonpgscope||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n(7),r=n.n(c),o=(n(25),n(26),n(2)),a=n(6),s=n.n(a),u=n(4),l=n.p+"static/media/logo.608c1bb3.svg",d=(n(9),n(0));var f=function(t){var e=t.valor,n=t.cor,c=t.mensagem,r=Object(i.useState)(0),a=Object(o.a)(r,2),s=a[0],u=a[1];return Object(i.useEffect)((function(){u(e)}),[e]),1===s?Object(d.jsx)("div",{className:"toast popup-bottom",children:Object(d.jsx)("div",{className:"default",style:{textAlign:"center",backgroundColor:n,padding:25,minHeight:50,maxHeight:300,minWidth:100,maxWidth:300,color:"#ffffff",fontWeight:"bold"},children:c})}):null};var h=function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.login}));Object(i.useEffect)((function(){1===e&&(document.getElementById("inputUsuario").value="",document.getElementById("inputSenha").value="")}),[e]);var n=Object(i.useState)(0),c=Object(o.a)(n,2),r=c[0],a=c[1],h=Object(i.useState)("transparent"),b=Object(o.a)(h,2),j=b[0],m=b[1],O=Object(i.useState)(""),g=Object(o.a)(O,2),p=g[0],x=g[1],y=Object(i.useState)(2e3),S=Object(o.a)(y,2),N=S[0],w=S[1],v=function(t,e,n,i){a(t),m(e),x(n),w(i),setTimeout((function(){a(0)}),i+1e3)};return 1===e?Object(d.jsxs)("div",{className:"main fade-in",children:[Object(d.jsx)(f,{valor:r,cor:j,mensagem:p,tempo:N}),Object(d.jsx)("img",{alt:"",src:l,style:{height:"25%"}}),Object(d.jsx)("label",{className:"title",style:{margin:10,fontSize:28},children:"G-SCOPE"}),Object(d.jsxs)("div",{className:"default",children:[Object(d.jsx)("input",{autoComplete:"off",placeholder:"USU\xc1RIO",className:"input",type:"text",id:"inputUsuario",onFocus:function(t){return t.target.placeholder=""},onBlur:function(t){return t.target.placeholder="USU\xc1RIO"},style:{marginTop:20,marginBottom:10,width:200,height:50}}),Object(d.jsx)("input",{autoComplete:"off",placeholder:"SENHA",className:"input",type:"password",id:"inputSenha",onFocus:function(t){return t.target.placeholder=""},onBlur:function(t){return t.target.placeholder="SENHA"},style:{margin:0,marginBottom:7.5,width:200,height:50}}),Object(d.jsx)("button",{className:"blue-button",style:{width:205,color:"#ffffff",alignSelf:"center"},onClick:function(){return function(){var e=document.getElementById("inputUsuario").value,n=document.getElementById("inputSenha").value,i={usuario:e,senha:n};s.a.post("https://scope-server.herokuapp.com/login/'"+e+"'/'"+n+"'",i).then((function(e){var n=[0,1];if((n=e.data).length>0){var i=n.map((function(t){return t.id}));v("LOGIN EFETUADO COM SUCESSO","#52be80",3e3),setTimeout((function(){t({type:"HOSPITAIS_ON",payloadIdusuario:i})}),3500)}else document.getElementById("inputUsuario").value="",document.getElementById("inputSenha").value="",v("DADOS INCORRETOS","#ec7063",3e3)}))}()},children:"ENTRAR"})]})]}):null};var b=function(){var t="https://scope-server.herokuapp.com",e=Object(u.b)(),n=Object(u.c)((function(t){return t.hospitais})),c=Object(u.c)((function(t){return t.idusuario}));Object(i.useEffect)((function(){1===n&&(h(),g())}),[n]);var r=Object(i.useState)([]),a=Object(o.a)(r,2),l=a[0],f=a[1],h=function(){s.a.get(t+"/usuariosxhospitais").then((function(t){f(t.data)}))},b=Object(i.useState)([]),j=Object(o.a)(b,2),m=j[0],O=j[1],g=function(){s.a.get(t+"/hospitais").then((function(t){O(t.data)}))};function p(){return Object(d.jsx)("div",{className:"scroll",id:"LISTA DE HOSPITAIS",style:{height:.5*window.innerHeight,width:window.innerWidth>800?.5*window.innerWidth:.8*window.innerWidth,flexWrap:"wrap"},children:l.filter((function(t){return t.idusuario==c})).map((function(t){return Object(d.jsx)("button",{className:"blue-button",onClick:function(){return function(t){e({type:"UNIDADES_ON",payloadIdusuario:c,payloadIdhospital:t.idhospital})}(t)},style:{width:"100%"},children:m.filter((function(e){return e.id==t.idhospital})).map((function(t){return t.hospital}))})}))})}return 1===n?Object(d.jsx)("div",{className:"main fade-in",children:Object(d.jsx)(p,{})}):null};var j=function(){var t="https://scope-server.herokuapp.com",e=Object(u.b)(),n=Object(u.c)((function(t){return t.unidades})),c=Object(u.c)((function(t){return t.idusuario})),r=Object(u.c)((function(t){return t.idhospital}));Object(i.useEffect)((function(){1===n&&(b(),p())}),[n]);var a=Object(i.useState)([]),l=Object(o.a)(a,2),f=l[0],h=l[1],b=function(){s.a.get(t+"/usuariosxhospitaisxunidades").then((function(t){h(t.data)}))},j=Object(i.useState)([]),m=Object(o.a)(j,2),O=m[0],g=m[1],p=function(){s.a.get(t+"/unidades").then((function(t){g(t.data)}))};function x(){return Object(d.jsx)("div",{className:"scroll",id:"LISTA DE HOSPITAIS",style:{height:.5*window.innerHeight,width:window.innerWidth>800?.5*window.innerWidth:.8*window.innerWidth,flexWrap:"wrap"},children:f.filter((function(t){return t.idusuario==c})).map((function(t){return Object(d.jsx)("button",{className:"blue-button",onClick:function(){return function(t){e({type:"CALEND\xc1RIO_ON",payloadIdusuario:c,payloadIdhospital:r,payloadIdunidade:t.idunidade})}(t)},style:{width:"100%"},children:O.filter((function(e){return e.id==t.idunidade})).map((function(t){return t.unidade}))})}))})}return 1===n?Object(d.jsx)("div",{className:"main fade-in",children:Object(d.jsx)(x,{})}):null},m=n(3),O=n.n(m),g=(n(53),n.p+"static/media/salvar.43cba929.svg"),p=n.p+"static/media/deletar.636e1409.svg";var x=function(){O.a.locale("pt-br");var t="https://scope-server.herokuapp.com",e=Object(u.b)(),n=Object(u.c)((function(t){return t.calendario})),c=Object(u.c)((function(t){return t.idusuario})),r=Object(u.c)((function(t){return t.idhospital})),a=Object(u.c)((function(t){return t.idunidade}));Object(i.useEffect)((function(){1===n&&l()}),[n]);var l=function(){k(),x(),q(),L()},h=Object(i.useState)([]),b=Object(o.a)(h,2),j=b[0],m=b[1],x=function(){s.a.get(t+"/calendario").then((function(t){m(t.data)}))},y=[],S=Object(i.useState)([]),N=Object(o.a)(S,2),w=N[0],v=N[1],D=O()().format("MM"),A=O()().format("YY"),C=Object(i.useState)(O()("01/"+D+"/"+A,"DD/MM/YY")),I=Object(o.a)(C,1)[0],E=function(t,e){for(;t.weekday()>0;)t.subtract(1,"day"),e.subtract(1,"day");t.month()==I.month()&&(t.subtract(7,"days"),e.subtract(7,"days"))},M=function(t,e){for(y=[t.format("DD/MM/YY")];e.diff(t,"days")>1;)t.add(1,"day"),y.push(t.format("DD/MM/YY").toString())},k=function(){var t=O()(I).format("MM"),e=O()(I).format("YY"),n=O()("01/"+t+"/"+e,"DD/MM/YY"),i=O()("01/"+t+"/"+e,"DD/MM/YY").add(42,"days");E(n,i),M(n,i),v(y)};function H(){return Object(d.jsxs)("div",{className:"main",style:{display:"flex",position:"relative",backgroundColor:"#ffffff",borderRadius:5,width:window.innerWidth-50,height:window.innerHeight-50},children:[Object(d.jsx)("button",{className:"red-button",style:{position:"absolute",top:10,left:10},onClick:function(){return W()},children:Object(d.jsx)("img",{alt:"",src:p,style:{margin:10,height:30,width:30}})}),Object(d.jsxs)("div",{className:"default",style:{flexDirection:"row",width:"100%"},children:[Object(d.jsx)("button",{className:"blue-button",onClick:function(){return function(){I.subtract(30,"days");var t=O()(I).format("MM"),e=O()(I).format("YY"),n=O()("01/"+t+"/"+e,"DD/MM/YY"),i=O()("01/"+t+"/"+e,"DD/MM/YY").add(42,"days");E(n,i),M(n,i),v(y)}()},id:"previous",style:{width:50,height:50,margin:2.5,color:"#ffffff"},title:"M\xcaS ANTERIOR",children:"\u25c4"}),Object(d.jsx)("p",{className:"title",style:{width:200,fontSize:16,margin:2.5},children:I.format("MMMM").toUpperCase()+" "+I.year()}),Object(d.jsx)("button",{className:"blue-button",onClick:function(){return function(){I.add(30,"days");var t=O()(I).format("MM"),e=O()(I).format("YY"),n=O()("01/"+t+"/"+e,"DD/MM/YY"),i=O()("01/"+t+"/"+e,"DD/MM/YY").add(42,"days");E(n,i),M(n,i),v(y)}()},id:"next",style:{width:50,height:50,margin:2.5,color:"#ffffff"},title:"PR\xd3XIMO M\xcaS",children:"\u25ba"})]}),Object(d.jsxs)("div",{className:"scroll-header",style:{width:1100,flexDirection:"row",margin:0,padding:0},children:[Object(d.jsx)("p",{className:"title",style:{width:150,fontSize:12,margin:2.5},children:"DOM"}),Object(d.jsx)("p",{className:"title",style:{width:150,fontSize:12,margin:2.5},children:"SEG"}),Object(d.jsx)("p",{className:"title",style:{width:150,fontSize:12,margin:2.5},children:"TER"}),Object(d.jsx)("p",{className:"title",style:{width:150,fontSize:12,margin:2.5},children:"QUA"}),Object(d.jsx)("p",{className:"title",style:{width:150,fontSize:12,margin:2.5},children:"QUI"}),Object(d.jsx)("p",{className:"title",style:{width:150,fontSize:12,margin:2.5},children:"SEX"}),Object(d.jsx)("p",{className:"title",style:{width:150,fontSize:12,margin:2.5},children:"SAB"})]}),Object(d.jsx)("div",{className:"scroll",id:"LISTA DE DATAS",style:{width:1105,height:.6*window.innerHeight,justifyContent:"flex-start",flexDirection:"row",flexWrap:"wrap"},children:w.map((function(t){return Object(d.jsxs)("div",{className:"blue-button",onClick:function(){return nt(t)},style:{flexDirection:"column",justifyContent:"flex-start",width:150,height:168,margin:2.5,fontSize:16,opacity:t.substring(3,5)===O()(I).format("MM")?1:.5},title:t,children:[Object(d.jsx)("div",{style:{padding:5},children:t.substring(0,2)}),Object(d.jsx)("div",{style:{flexDirection:"column",fontSize:12,width:"90%"},children:Object(d.jsx)("div",{className:"scrollcalendar",style:{padding:0,margin:2.5,height:117.5},children:j.filter((function(e){return JSON.stringify(e.inicio).substring(1,9)==JSON.stringify(t).substring(1,9)})).map((function(t){return Object(d.jsxs)("div",{className:"green-button",style:{display:"flex",flexDirection:"column",justifyContent:"center",margin:2.5,padding:2.5,marginRight:10,width:100},title:t.funcao,children:[Object(d.jsx)("div",{style:{margin:2.5},children:t.nome}),Object(d.jsx)("div",{style:{margin:2.5},children:JSON.stringify(t.inicio).substring(9,15)+" - "+JSON.stringify(t.termino).substring(9,15)})]})}))})})]})}))})]})}var W=function(){e({type:"UNIDADES_ON",payloadIdusuario:c,payloadIdhospital:r})},z=Object(i.useState)([]),Y=Object(o.a)(z,2),T=Y[0],R=Y[1],L=function(){s.a.get(t+"/usuariosxhospitaisxunidades").then((function(t){R(t.data)}))},U=Object(i.useState)([]),_=Object(o.a)(U,2),B=_[0],P=_[1],F=Object(i.useState)(""),J=Object(o.a)(F,2),X=J[0],G=J[1],Q=Object(i.useState)(""),V=Object(o.a)(Q,2),Z=(V[0],V[1]),q=function(){s.a.get(t+"/usuarios").then((function(t){var e=t.data;P(t.data),Z(B.filter((function(t){return t.id==c})).map((function(t){return t.nome}))),G(B.filter((function(t){return t.id==c})).map((function(t){return t.funcao}))),e.filter((function(t){return t.id==c})).map((function(t){return t.funcao}))}))},K=Object(i.useState)(""),$=Object(o.a)(K,2),tt=$[0],et=$[1],nt=function(t){et(t),Ct(1)},it=Object(i.useState)(0),ct=Object(o.a)(it,2);function rt(){return Object(d.jsx)("div",{className:"scroll",id:"LISTA DE PLANTONISTAS",style:{display:"flex",height:.3*window.innerHeight,width:300,flexWrap:"wrap"},children:T.filter((function(t){return t.idunidade==a})).map((function(t){return Object(d.jsx)("button",{className:"blue-button",onClick:function(){return bt(t)},style:{width:"100%"},children:B.filter((function(e){return e.id==t.idusuario})).map((function(t){return t.usuario}))})}))})}ct[0],ct[1];var ot=Object(i.useState)(""),at=Object(o.a)(ot,2),st=at[0],ut=at[1],lt=Object(i.useState)("?"),dt=Object(o.a)(lt,2),ft=dt[0],ht=dt[1],bt=function(t){ut(t.idusuario),ht(B.filter((function(t){return t.id==st})).map((function(t){return t.nome})))},jt=Object(i.useState)("?"),mt=Object(o.a)(jt,2),Ot=mt[0],gt=mt[1],pt=Object(i.useState)("?"),xt=Object(o.a)(pt,2),yt=xt[0],St=xt[1],Nt=function(t){"?"===Ot?gt(t):"?"!==Ot&&"?"===yt?St(t):(gt(t),St("?"))};function wt(){return Object(d.jsxs)("div",{className:"default",style:{flexDirection:"column",width:400},children:[Object(d.jsxs)("div",{className:"default",style:{flexDirection:"row"},children:[Object(d.jsx)("button",{className:Ot>0||yt<0?"red-button":"green-button",onClick:function(){return Nt(0)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"00h"}),Object(d.jsx)("button",{className:Ot>1||yt<1?"red-button":"green-button",onClick:function(){return Nt(1)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"01h"}),Object(d.jsx)("button",{className:Ot>2||yt<2?"red-button":"green-button",onClick:function(){return Nt(2)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"02h"}),Object(d.jsx)("button",{className:Ot>3||yt<3?"red-button":"green-button",onClick:function(){return Nt(3)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"03h"}),Object(d.jsx)("button",{className:Ot>4||yt<4?"red-button":"green-button",onClick:function(){return Nt(4)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"04h"}),Object(d.jsx)("button",{className:Ot>5||yt<5?"red-button":"green-button",onClick:function(){return Nt(5)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"05h"}),Object(d.jsx)("button",{className:Ot>6||yt<6?"red-button":"green-button",onClick:function(){return Nt(6)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"06h"}),Object(d.jsx)("button",{className:Ot>7||yt<7?"red-button":"green-button",onClick:function(){return Nt(7)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"07h"}),Object(d.jsx)("button",{className:Ot>8||yt<8?"red-button":"green-button",onClick:function(){return Nt(8)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"08h"}),Object(d.jsx)("button",{className:Ot>9||yt<9?"red-button":"green-button",onClick:function(){return Nt(9)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"09h"}),Object(d.jsx)("button",{className:Ot>10||yt<10?"red-button":"green-button",onClick:function(){return Nt(10)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"10h"}),Object(d.jsx)("button",{className:Ot>11||yt<11?"red-button":"green-button",onClick:function(){return Nt(11)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"11h"})]}),Object(d.jsxs)("div",{className:"default",style:{flexDirection:"row"},children:[Object(d.jsx)("button",{className:Ot>12||yt<12?"red-button":"green-button",onClick:function(){return Nt(12)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"12h"}),Object(d.jsx)("button",{className:Ot>13||yt<13?"red-button":"green-button",onClick:function(){return Nt(13)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"13h"}),Object(d.jsx)("button",{className:Ot>14||yt<14?"red-button":"green-button",onClick:function(){return Nt(14)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"14h"}),Object(d.jsx)("button",{className:Ot>15||yt<15?"red-button":"green-button",onClick:function(){return Nt(15)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"15h"}),Object(d.jsx)("button",{className:Ot>16||yt<16?"red-button":"green-button",onClick:function(){return Nt(16)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"16h"}),Object(d.jsx)("button",{className:Ot>17||yt<17?"red-button":"green-button",onClick:function(){return Nt(17)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"17h"}),Object(d.jsx)("button",{className:Ot>18||yt<18?"red-button":"green-button",onClick:function(){return Nt(18)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"18h"}),Object(d.jsx)("button",{className:Ot>19||yt<19?"red-button":"green-button",onClick:function(){return Nt(19)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"19h"}),Object(d.jsx)("button",{className:Ot>20||yt<20?"red-button":"green-button",onClick:function(){return Nt(20)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"20h"}),Object(d.jsx)("button",{className:Ot>21||yt<21?"red-button":"green-button",onClick:function(){return Nt(21)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"21h"}),Object(d.jsx)("button",{className:Ot>22||yt<22?"red-button":"green-button",onClick:function(){return Nt(22)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"22h"}),Object(d.jsx)("button",{className:Ot>23||yt<23?"red-button":"green-button",onClick:function(){return Nt(23)},style:{width:40,height:40,minWidth:40,minHeight:40,margin:2.5,color:"#ffffff",fontSize:10},children:"23h"})]})]})}var vt=Object(i.useState)(0),Dt=Object(o.a)(vt,2),At=Dt[0],Ct=Dt[1];function It(){return 1===At?Object(d.jsx)("div",{className:"popup-bottom",children:Object(d.jsxs)("div",{className:"popup-screen",style:{width:.8*window.innerWidth},children:[Object(d.jsx)("div",{className:"title",style:{fontSize:16},children:"INSERIR PLANTONISTA NA ESCALA DE "+tt+"."}),Object(d.jsxs)("div",{className:"default",style:{flexDirection:"row"},children:[Object(d.jsx)(rt,{}),Object(d.jsxs)("div",{className:"default",style:{flexDirection:"column",width:600},children:[Object(d.jsx)(wt,{}),Object(d.jsx)("div",{className:"title",children:"COLABORADOR: "+ft}),Object(d.jsxs)("div",{className:"default",style:{flexDirection:"row"},children:[Object(d.jsx)("div",{className:"grey-button",style:{width:130,paddingLeft:10,paddingRight:10,backgroundColor:"#99A3A4"},children:"?"===Ot?"ENTRADA: ?":"ENTRADA: "+Ot+"H"}),Object(d.jsx)("div",{className:"grey-button",style:{width:130,paddingLeft:10,paddingRight:10,backgroundColor:"#99A3A4"},children:"?"===yt?"SA\xcdDA: ?":"SA\xcdDA: "+yt+"H"})]}),Object(d.jsx)("button",{className:"green-button",onClick:function(){return Et()},children:Object(d.jsx)("img",{alt:"",src:g,style:{margin:10,height:30,width:30}})})]})]})]})}):null}var Et=function(){if("?"==ft)Gt(1,"#ec7063","INFORME O NOME DO COLABORADOR.",3e3);else if("?"==Ot||"?"==yt)Gt(1,"#ec7063","INFORME OS HOR\xc1RIOS DE ENTRADA E DE SA\xcdDA DO PLANT\xc3O.",3e3);else{var e={idusuario:st,nome:ft,funcao:X,idhospital:r,idunidade:a,inicio:O()(tt,"DD/MM/YY").startOf("day").add(Ot,"hours").format("DD/MM/YY HH:00"),termino:O()(tt,"DD/MM/YY").startOf("day").add(yt,"hours").format("DD/MM/YY HH:00")};s.a.post(t+"/insertcalendario",e).then((function(){Gt(1,"#52be80","ESCALA ATUALIZADA COM SUCESSO.",3e3),Ct(0),ut(0),ht("?"),gt("?"),St("?"),l()}))}},Mt=Object(i.useState)(0),kt=Object(o.a)(Mt,2),Ht=kt[0],Wt=kt[1],zt=Object(i.useState)("transparent"),Yt=Object(o.a)(zt,2),Tt=Yt[0],Rt=Yt[1],Lt=Object(i.useState)(""),Ut=Object(o.a)(Lt,2),_t=Ut[0],Bt=Ut[1],Pt=Object(i.useState)(2e3),Ft=Object(o.a)(Pt,2),Jt=Ft[0],Xt=Ft[1],Gt=function(t,e,n,i){Wt(t),Rt(e),Bt(n),Xt(i),setTimeout((function(){Wt(0)}),i+1e3)};return 1===n?Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"main fade-in",style:{display:"flex",position:"relative",flexDirection:"column",justifyContent:"center",margin:0,padding:0},children:[Object(d.jsx)(H,{}),Object(d.jsx)(It,{}),Object(d.jsx)(f,{valor:Ht,cor:Tt,mensagem:_t,tempo:Jt})]})}):null};var y=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)(h,{}),Object(d.jsx)(b,{}),Object(d.jsx)(j,{}),Object(d.jsx)(x,{})]})})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),i(t),c(t),r(t),o(t)}))},N=n(20),w={login:1,hospitais:0,unidades:0,calendario:0,idusuario:0,idhospital:0,idunidade:0},v=Object(N.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOGIN_ON":return{login:1,hospitais:0,unidades:0,calendario:0};case"HOSPITAIS_ON":return{login:0,hospitais:1,unidades:0,calendario:0,idusuario:e.payloadIdusuario};case"UNIDADES_ON":return{login:0,hospitais:0,unidades:1,calendario:0,idusuario:e.payloadIdusuario,idhospital:e.payloadIdhospital};case"CALEND\xc1RIO_ON":return{login:0,hospitais:0,unidades:0,calendario:1,idusuario:e.payloadIdusuario,idhospital:e.payloadIdhospital,idunidade:e.payloadIdunidade};default:return t}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(d.jsx)(u.a,{store:v,children:Object(d.jsx)(y,{})}),document.getElementById("root")),S()},9:function(t,e,n){}},[[54,1,2]]]);
//# sourceMappingURL=main.7fa9104b.chunk.js.map