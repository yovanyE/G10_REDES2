(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{51:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(41),s=c.n(r),j=(c(51),c(18)),o=c(8),l=c(87),d=c(0),i=function(){var e=Object(o.f)(),t=function(t){e.push(t)};return Object(d.jsxs)(l.a,{activeKey:"/",children:[Object(d.jsx)(l.a.Item,{children:Object(d.jsx)(l.a.Link,{onClick:function(){return t("/")},children:"Lista de reportes"})}),Object(d.jsx)(l.a.Item,{children:Object(d.jsx)(l.a.Link,{onClick:function(){return t("/report")},children:"Crear Reporte"})}),Object(d.jsx)(l.a.Item,{children:Object(d.jsx)(l.a.Link,{onClick:function(){return t("/evento/asistencia")},children:"Ingresar Asistencia"})}),Object(d.jsx)(l.a.Item,{children:Object(d.jsx)(l.a.Link,{onClick:function(){return t("/evento/asistencias")},children:"Asistencias de Evento"})}),Object(d.jsx)(l.a.Item,{children:Object(d.jsx)(l.a.Link,{onClick:function(){return t("/estudiante/eventos")},children:"Eventos estudiante"})})]})},b=c(9),h=c(2),O=c(7),u=c(83),x=c(84),m=c(88),p=c(85),f=c(15),v=c.n(f),g=function(e){var t=Object(o.f)(),c=Object(n.useState)({carne:"",name:"",course:"",bodyMessage:""}),a=Object(O.a)(c,2),r=a[0],s=a[1],j=function(e){s(Object(h.a)(Object(h.a)({},r),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)(u.a,{children:[Object(d.jsx)(x.a,{children:Object(d.jsx)("h2",{children:"Ingreso de reportes de practicantes"})}),Object(d.jsx)(x.a,{children:Object(d.jsxs)(m.a,{noValidate:!0,children:[Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"carnet",children:[Object(d.jsx)(m.a.Label,{children:"Carnet"}),Object(d.jsx)(m.a.Control,{placeholder:"#########",name:"carne",onChange:j})]}),Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"nombre",children:[Object(d.jsx)(m.a.Label,{children:"Nombre"}),Object(d.jsx)(m.a.Control,{placeholder:"",name:"name",onChange:j})]}),Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"curso",children:[Object(d.jsx)(m.a.Label,{children:"Curso/proyecto"}),Object(d.jsx)(m.a.Control,{placeholder:"",name:"course",onChange:j})]}),Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"cuerpo",children:[Object(d.jsx)(m.a.Label,{children:"Cuerpo del reporte"}),Object(d.jsx)(m.a.Control,{as:"textarea",rows:3,name:"bodyMessage",onChange:j})]}),Object(d.jsx)(p.a,{onClick:function(){v.a.post("http://balanceador-r2-231361140.us-east-2.elb.amazonaws.com:3000/addReport",r).then((function(e){200===e.status&&e.data?(console.log(e.data),t.push("/")):console.log("Error")})).catch((function(e){console.log(e)}))},children:"Enviar Reporte"})]})})]})},C=c(16),I=c.n(C),y=c(19),L=c(86),N=function(){var e=Object(o.f)(),t=Object(n.useState)({server:"",data:[]}),c=Object(O.a)(t,2),a=c[0],r=c[1],s=function(){var e=Object(y.a)(I.a.mark((function e(){var t,c,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://balanceador-r2-231361140.us-east-2.elb.amazonaws.com:3000/getall");case 2:(t=e.sent)&&(c=t.data.message.result,n=t.data.message.processByGet,r({data:c,server:n}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(x.a,{children:Object(d.jsx)("h2",{children:"Listado de reportes enviados por los estudiantes"})}),Object(d.jsx)(x.a,{xs:1,md:3,className:"g-4",children:Object(d.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Carnet"}),Object(d.jsx)("th",{children:"Nombre"}),Object(d.jsx)("th",{children:"Proyecto"}),Object(d.jsx)("th",{children:"Fecha"}),Object(d.jsx)("th",{children:"Servidor"}),Object(d.jsx)("th",{children:"Accion"})]})}),Object(d.jsx)("tbody",{children:a.data?a.data.map((function(t,c){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.carne}),Object(d.jsx)("td",{children:t.name}),Object(d.jsx)("td",{children:t.course}),Object(d.jsx)("td",{children:t.dateTime}),Object(d.jsx)("td",{children:t.processBy}),Object(d.jsx)("td",{children:Object(d.jsx)(p.a,{onClick:function(){return e.push("/report/"+t.carne)},children:"Ver Reporte"})})]},t.idReport)})):"cargando..."})]})}),Object(d.jsx)(x.a,{children:Object(d.jsx)("h3",{children:a.server})})]})},G=function(){var e=Object(o.g)().id,t=(Object(o.f)(),Object(n.useState)({carne:e,name:"",course:"",bodyMessage:"",dateTime:"",processBy:""})),c=Object(O.a)(t,2),a=c[0],r=c[1],s=function(){var t=Object(y.a)(I.a.mark((function t(){var c,n,a,s;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://balanceador-r2-231361140.us-east-2.elb.amazonaws.com:3000/getOne/"+e);case 2:return c=t.sent,t.next=5,c.json();case 5:n=t.sent,a=n.message.result[0],s=n.message.processByGet,r(Object(h.a)(Object(h.a)({},a),{},{processByGet:s}));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){s()}),[]);return Object(d.jsxs)(u.a,{children:[Object(d.jsx)(x.a,{children:Object(d.jsx)("h2",{children:"Informacion del reporte"})}),Object(d.jsx)(x.a,{children:Object(d.jsxs)(m.a,{noValidate:!0,children:[Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"carnet",children:[Object(d.jsx)(m.a.Label,{children:"Carnet"}),Object(d.jsx)(m.a.Control,{placeholder:"#########",disabled:!0,name:"carne",value:a.carne})]}),Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"nombre",children:[Object(d.jsx)(m.a.Label,{children:"Nombre"}),Object(d.jsx)(m.a.Control,{placeholder:"",disabled:!0,name:"name",value:a.name})]}),Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"curso",children:[Object(d.jsx)(m.a.Label,{children:"Curso/proyecto"}),Object(d.jsx)(m.a.Control,{placeholder:"",disabled:!0,name:"course",value:a.course})]}),Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"cuerpo",children:[Object(d.jsx)(m.a.Label,{children:"Cuerpo del reporte"}),Object(d.jsx)(m.a.Control,{as:"textarea",rows:3,disabled:!0,name:"bodyMessage",value:a.bodyMessage})]}),Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"nombre",children:[Object(d.jsx)(m.a.Label,{children:"Fecha"}),Object(d.jsx)(m.a.Control,{placeholder:"",disabled:!0,name:"dateTime",value:a.dateTime})]}),Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"curso",children:[Object(d.jsx)(m.a.Label,{children:"Ingresado por"}),Object(d.jsx)(m.a.Control,{placeholder:"",disabled:!0,name:"processBy",value:a.processBy})]})]})}),Object(d.jsx)(x.a,{children:Object(d.jsx)("h3",{children:a.processByGet})})]})},k=(c(81),function(){var e=Object(o.f)(),t=Object(n.useState)({carne:"",estudiante:"",evento:"",idevento:"",namefile:"",content:""}),c=Object(O.a)(t,2),a=c[0],r=c[1],s=function(e){var t;"file"===e.target.name?e.target.files&&e.target.files.length>0&&(console.log(e.target.files[0]),(t=e.target.files[0],new Promise((function(e,c){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(e){return c(e)}}))).then((function(t){r(Object(h.a)(Object(h.a)({},a),{},{namefile:e.target.files[0].name,content:t||""}))})).catch((function(e){console.log(e)}))):r(Object(h.a)(Object(h.a)({},a),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)(u.a,{children:[Object(d.jsx)(x.a,{children:Object(d.jsx)("h2",{children:"Ingreso de asistencia"})}),Object(d.jsx)(x.a,{children:Object(d.jsxs)(m.a,{noValidate:!0,children:[Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"carnet",children:[Object(d.jsx)(m.a.Label,{children:"Carnet"}),Object(d.jsx)(m.a.Control,{placeholder:"#########",name:"carne",onChange:s})]}),Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"nombre",children:[Object(d.jsx)(m.a.Label,{children:"Nombre"}),Object(d.jsx)(m.a.Control,{placeholder:"",name:"estudiante",onChange:s})]}),Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"curso",children:[Object(d.jsx)(m.a.Label,{children:"Evento"}),Object(d.jsx)(m.a.Control,{placeholder:"",name:"evento",onChange:s})]}),Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"cuerpo",children:[Object(d.jsx)(m.a.Label,{children:"Id evento"}),Object(d.jsx)(m.a.Control,{name:"idevento",onChange:s})]}),Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"cuerpo",children:[Object(d.jsx)(m.a.Label,{children:"Imagen"}),Object(d.jsx)(m.a.Control,{type:"file",name:"file",onChange:s})]}),Object(d.jsx)(p.a,{onClick:function(){var t="http://balanceador-r2-231361140.us-east-2.elb.amazonaws.com:3000";console.log(t),v.a.post(t+"/addAssistence",a).then((function(t){200===t.status&&t.data?e.push("/evento/asistencias"):console.log("Error")})).catch((function(e){console.log(e)}))},children:"Enviar Asistencia"})]})})]})}),w=c(46),E=function(){Object(o.f)();var e=Object(n.useState)({server:"",data:[]}),t=Object(O.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(O.a)(r,2),j=s[0],l=s[1],i=function(){var e=Object(y.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://balanceador-r2-231361140.us-east-2.elb.amazonaws.com:3000/getByCarne/"+j);case 2:(t=e.sent)&&(a({data:t.data.message.result,server:t.data.message?t.data.message.processByGet:""}),console.log(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(u.a,{children:[Object(d.jsx)(x.a,{children:Object(d.jsx)("h2",{children:"Eventos asistidos por estudiante"})}),Object(d.jsx)(x.a,{children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)(w.a,{md:6,children:Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"carnet",children:[Object(d.jsx)(m.a.Label,{children:"Carnet"}),Object(d.jsx)(m.a.Control,{placeholder:"#########",name:"carne",onChange:function(e){return l(e.target.value)}})]})}),Object(d.jsx)(w.a,{md:4,children:Object(d.jsx)(p.a,{onClick:i,children:"Buscar"})})]})}),Object(d.jsx)(x.a,{xs:1,md:3,className:"g-4",children:Object(d.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Id Evento"}),Object(d.jsx)("th",{children:"Evento"}),Object(d.jsx)("th",{children:"Fecha"}),Object(d.jsx)("th",{children:"Servidor"}),Object(d.jsx)("th",{children:"Imagen"})]})}),Object(d.jsx)("tbody",{children:c.data?c.data.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.idEvento}),Object(d.jsx)("td",{children:e.evento}),Object(d.jsx)("td",{children:e.fecha}),Object(d.jsx)("td",{children:e.servidor}),Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:e.imageURL})})]},e.idAsistencia)})):"cargando..."})]})}),Object(d.jsx)(x.a,{children:Object(d.jsx)("h3",{children:c.server})})]})},B=function(){Object(o.f)();var e=Object(n.useState)({server:"",data:[]}),t=Object(O.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(O.a)(r,2),j=s[0],l=s[1],i=function(){var e=Object(y.a)(I.a.mark((function e(){var t,c,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://balanceador-r2-231361140.us-east-2.elb.amazonaws.com:3000/getById/"+j);case 2:(t=e.sent)&&(c=t.data.message.result,n=t.data.message.processByGet,a({data:c,server:n}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(u.a,{children:[Object(d.jsx)(x.a,{children:Object(d.jsx)("h2",{children:"Asistencias de Evento"})}),Object(d.jsx)(x.a,{children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)(w.a,{md:6,children:Object(d.jsxs)(m.a.Group,{className:"mb-3",controlId:"carnet",children:[Object(d.jsx)(m.a.Label,{children:"Id Evento"}),Object(d.jsx)(m.a.Control,{placeholder:"#########",name:"idevento",onChange:function(e){return l(e.target.value)}})]})}),Object(d.jsx)(w.a,{md:4,children:Object(d.jsx)(p.a,{onClick:i,children:"Buscar"})})]})}),Object(d.jsx)(x.a,{xs:1,md:3,className:"g-4",children:Object(d.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Carne"}),Object(d.jsx)("th",{children:"Estudiante"}),Object(d.jsx)("th",{children:"Fecha"}),Object(d.jsx)("th",{children:"Servidor"}),Object(d.jsx)("th",{children:"Imagen"})]})}),Object(d.jsx)("tbody",{children:c.data?c.data.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.carnet}),Object(d.jsx)("td",{children:e.estudiante}),Object(d.jsx)("td",{children:e.fecha}),Object(d.jsx)("td",{children:e.servidor}),Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:e.imageURL})})]},e.idAsistencia)})):"cargando..."})]})}),Object(d.jsx)(x.a,{children:Object(d.jsx)("h3",{children:c.server})})]})};var S=function(){return Object(d.jsxs)(j.a,{children:[Object(d.jsx)(i,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/estudiante/eventos",component:E}),Object(d.jsx)(o.a,{path:"/evento/asistencias",component:B}),Object(d.jsx)(o.a,{path:"/evento/asistencia",component:k}),Object(d.jsx)(o.a,{path:"/report/:id",component:G}),Object(d.jsx)(o.a,{path:"/report",component:g}),Object(d.jsx)(o.a,{path:"/",component:N})]})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,89)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),A()}},[[82,1,2]]]);
//# sourceMappingURL=main.c9670504.chunk.js.map