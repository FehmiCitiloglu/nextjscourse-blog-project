(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3269:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(2894)}])},2894:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var a=n(5893),r=n(912),o=n.n(r),c=n(7294),s=function(e){var t=(0,c.useState)(""),n=t[0],r=t[1],s=(0,c.useState)(""),i=s[0],l=s[1],u=(0,c.useState)(""),m=u[0],d=u[1];return(0,a.jsxs)("section",{className:o().contact,children:[(0,a.jsx)("h1",{children:"How can I help you?"}),(0,a.jsxs)("form",{className:o().form,onSubmit:function(e){e.preventDefault(),fetch("/api/contact",{method:"POST",body:JSON.stringify({email:n,name:i,message:m})})},children:[(0,a.jsxs)("div",{className:o().control,children:[(0,a.jsxs)("div",{className:o().control,children:[(0,a.jsx)("label",{htmlFor:"email",children:"Your Email"}),(0,a.jsx)("input",{type:"email",id:"email",required:!0,value:n,onChange:function(e){return r(e.target.value)}})]}),(0,a.jsxs)("div",{className:o().control,children:[(0,a.jsx)("label",{htmlFor:"name",children:"Your Name"}),(0,a.jsx)("input",{type:"text",id:"name",required:!0,value:i,onChange:function(e){return l(e.target.value)}})]})]}),(0,a.jsxs)("div",{className:o().control,children:[(0,a.jsx)("label",{htmlFor:"message",children:"Your Name"}),(0,a.jsx)("textarea",{id:"message",rows:"5",required:!0,value:m,onChange:function(e){return d(e.target.value)}})]}),(0,a.jsx)("div",{className:o().actions,children:(0,a.jsx)("button",{type:"submit",children:"Send Message"})})]})]})};var i=function(){return(0,a.jsx)(s,{})}},912:function(e){e.exports={contact:"contact-form_contact__GijBr",form:"contact-form_form__mCtdE",controls:"contact-form_controls__dtElR",control:"contact-form_control__uWpHG",actions:"contact-form_actions__fs8a5"}}},function(e){e.O(0,[774,888,179],(function(){return t=3269,e(e.s=t);var t}));var t=e.O();_N_E=t}]);