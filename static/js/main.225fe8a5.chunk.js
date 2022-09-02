(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(6),s=n.n(c),a=n(4),r=n(3),o=n(2),u=n.n(o),i=n(1),l=(n(12),n(13),n(14),n(0)),j=function(e){var t=e.posts,n=e.selectPostId,c=e.selectedPostId;return Object(l.jsxs)("div",{className:"PostsList",children:[Object(l.jsx)("h2",{children:"Posts:"}),Object(l.jsx)("ul",{className:"PostsList__list","data-cy":"postDetails",children:t.map((function(e){return Object(l.jsxs)("li",{className:"PostsList__item",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"[User #".concat(e.userId,"]: ")}),e.title]}),Object(l.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return n(e.id)},children:c===e.id?"Close":"Open"})]},e.id)}))})]})},d="https://mate.academy/students-api";function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),fetch(d+e,c).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var m=function(e){return b(e)},p=function(e,t){return b(e,"POST",t)},f=function(e){return b(e,"DELETE")},O=function(){return m("/posts")},h=function(e){return m("/posts/".concat(e))},x=function(e){return m("/comments?postId=".concat(e))},v=function(e){return p("/comments",e)},_=function(e,t,n){return!!(e&&t&&t.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")&&n)},N=(n(16),function(){return Object(l.jsx)("div",{className:"Loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),y=(n(17),function(e){var t=e.name,n=e.email,c=e.body,s=e.addComment,a=e.handleInputChange;return Object(l.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault()},children:[Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:t,onChange:a,required:!0})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{type:"email",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:n,onChange:a,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",required:!0})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:c,onChange:a,required:!0})}),Object(l.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",onClick:s,children:"Add a comment"})]})}),w=(n(18),function(e){var t=e.selectPostDetails,n=e.selectedPostId,c=Object(i.useState)(""),s=Object(r.a)(c,2),o=s[0],j=s[1],d=Object(i.useState)(""),b=Object(r.a)(d,2),p=b[0],O=b[1],h=Object(i.useState)(""),w=Object(r.a)(h,2),P=w[0],k=w[1],C=Object(i.useState)(!1),S=Object(r.a)(C,2),g=S[0],D=S[1],I=Object(i.useState)([]),A=Object(r.a)(I,2),E=A[0],L=A[1],z=Object(i.useState)(!1),F=Object(r.a)(z,2),T=F[0],q=F[1],J=Object(i.useState)(!1),U=Object(r.a)(J,2),Y=U[0],$=U[1],B=function(){var e=Object(a.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:n=e.sent,q(!1),L(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(a.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/comments");case 2:return t=e.sent,e.abrupt("return",t[t.length-1].id+1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(a.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_(o,p,P)){e.next=2;break}return e.abrupt("return",null);case 2:if(q(!0),$(!0),!n){e.next=15;break}return t={name:o,email:p,body:P,id:+G,postId:n,createdAt:new Date,updatedAt:new Date},e.next=8,v(t);case 8:return c=e.sent,B(n),j(""),O(""),k(""),$(!1),e.abrupt("return",c);case 15:return e.abrupt("return",null);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(a.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(!0),e.next=3,c=t.id,f("/comments/".concat(c));case 3:return n=e.sent,B(t.postId),e.abrupt("return",n);case 6:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}();return t?Object(l.jsxs)("div",{className:"PostDetails",children:[Object(l.jsx)("h2",{children:"Post details:"}),Object(l.jsx)("section",{className:"PostDetails__post",children:Object(l.jsx)("p",{children:t.body})}),Object(l.jsxs)("section",{className:"PostDetails__comments","data-cy":"postList",children:[Object(l.jsx)("button",{type:"button",className:"button",onClick:function(){q(!0),D(!g),n&&B(n)},children:g?"Hide comments":"Show comments"}),g&&(T?Object(l.jsx)(N,{}):Object(l.jsx)("ul",{className:"PostDetails__list",children:E.length>0?E.map((function(e){return Object(l.jsxs)("li",{className:"PostDetails__list-item",children:[Object(l.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return X(e)},children:"X"}),Object(l.jsx)("p",{children:e.body})]},e.id)})):"No comments yet"}))]}),Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:"PostDetails__form-wrapper",children:Y?Object(l.jsx)(N,{}):Object(l.jsx)(y,{addComment:H,name:o,email:p,body:P,handleInputChange:function(e){var t=e.target,n=t.value,c=t.name;"name"===c&&j(n),"email"===c&&O(n),"body"===c&&k(n)}})})})]}):null}),P=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)([]),o=Object(r.a)(s,2),d=o[0],b=o[1],p=Object(i.useState)(0),f=Object(r.a)(p,2),x=f[0],v=f[1],_=Object(i.useState)(null),y=Object(r.a)(_,2),P=y[0],k=y[1],C=Object(i.useState)(null),S=Object(r.a)(C,2),g=S[0],D=S[1],I=Object(i.useState)(!0),A=Object(r.a)(I,2),E=A[0],L=A[1],z=Object(i.useState)(!1),F=Object(r.a)(z,2),T=F[0],q=F[1];Object(i.useEffect)((function(){var e=function(){var e=Object(a.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,L(!1),c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var t=function(){var e=Object(a.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/users");case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t()}),[]),Object(i.useEffect)((function(){var e=function(){var e=Object(a.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==x){e.next=6;break}return e.next=3,O();case 3:t=e.sent,e.next=9;break;case 6:return e.next=8,m("/posts?userId=".concat(x));case 8:t=e.sent;case 9:L(!1),c(t);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[x]);var J=function(){var e=Object(a.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(!0),k(P===t?null:t),e.next=4,h(t);case 4:n=e.sent,q(!1),D(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App__header",children:Object(l.jsxs)("label",{children:["Select a user: \xa0",Object(l.jsxs)("select",{className:"App__user-selector",onChange:function(e){L(!0),v(+e.target.value)},children:[Object(l.jsx)("option",{value:"0",children:"All users"}),d.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})}),Object(l.jsxs)("main",{className:"App__main",children:[Object(l.jsx)("div",{className:"App__sidebar",children:E?Object(l.jsx)(N,{}):Object(l.jsx)(j,{posts:n,selectPostId:J,selectedPostId:P})}),P&&Object(l.jsx)("div",{className:"App__content",children:T?Object(l.jsx)(N,{}):Object(l.jsx)(w,{selectPostDetails:g,selectedPostId:P})})]})]})};s.a.render(Object(l.jsx)(P,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.225fe8a5.chunk.js.map