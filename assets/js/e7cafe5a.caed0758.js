"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[712],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),l=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return r?o.createElement(h,s(s({ref:t},p),{},{components:r})):o.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7622:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),s=["components"],c={sidebar_label:"Protocols and smithy4s",title:"Protocols and smithy4s"},a=void 0,l={unversionedId:"protocols/protocols",id:"protocols/protocols",title:"Protocols and smithy4s",description:"The code generated by smithy4s is strictly protocol agnostic, meaning that there is no particular processing to handle HTTP semantics, or JSON semantics in the generated code.",source:"@site/../docs/target/jvm-2.13/mdoc/03-protocols/01-protocols.md",sourceDirName:"03-protocols",slug:"/protocols/protocols",permalink:"/smithy4s/docs/protocols/protocols",editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/03-protocols/01-protocols.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Protocols and smithy4s",title:"Protocols and smithy4s"},sidebar:"tutorialSidebar",previous:{title:"Editor support",permalink:"/smithy4s/docs/the-smithy-idl/editor-support"},next:{title:"SimpleRestJson",permalink:"/smithy4s/docs/protocols/simple-rest-json/overview"}},p=[],u={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The code generated by smithy4s is strictly ",(0,i.kt)("strong",{parentName:"p"},"protocol agnostic"),", meaning that there is no particular processing to handle HTTP semantics, or JSON semantics in the generated code."),(0,i.kt)("p",null,"Instead, smithy4s relies on a number of highly polymorphic interfaces to communicate with the generated code, and derive JSON codecs out of it, or turn high level user provided code into HTTP services. But in theory, the same generated code can be used conjointly with other serialisation technologies (protobuf for instance) and protocols (gRPC)."),(0,i.kt)("p",null,'Protocol specific "hints" (called ',(0,i.kt)("a",{parentName:"p",href:"/smithy4s/docs/the-smithy-idl/traits"},"traits"),")can be added to the smithy models. smithy4s accurately renders corresponding values, and allows for their retrieval via the polymorphic interfaces. This is how HTTP semantics can be derived from the generated code, for instance."),(0,i.kt)("p",null,"Smithy4s is also not married to any third party library, and users could provide integrations with existing libraries on their own side, or come up with new interesting usecases."),(0,i.kt)("p",null,"However, smithy4s provides a few out-of-the-box integrations that are described in this section."))}d.isMDXComponent=!0}}]);