"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[19],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),h=u(n),m=i,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||a;return n?r.createElement(d,o(o({ref:e},c),{},{components:n})):r.createElement(d,o({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9930:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_label:"Smithy traits",title:"Smithy traits"},l=void 0,u={unversionedId:"the-smithy-idl/traits",id:"the-smithy-idl/traits",title:"Smithy traits",description:"Smithy comes with a powerful annotation system. Annotations in smithy are called traits.",source:"@site/../docs/target/jvm-2.13/mdoc/02-the-smithy-idl/02-traits.md",sourceDirName:"02-the-smithy-idl",slug:"/the-smithy-idl/traits",permalink:"/smithy4s/docs/the-smithy-idl/traits",editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/02-the-smithy-idl/02-traits.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Smithy traits",title:"Smithy traits"},sidebar:"tutorialSidebar",previous:{title:"Smithy IDL",permalink:"/smithy4s/docs/the-smithy-idl/smithy-idl"},next:{title:"Editor support",permalink:"/smithy4s/docs/the-smithy-idl/editor-support"}},c=[{value:"Creating your own traits",id:"creating-your-own-traits",children:[],level:3},{value:"Regarding smithy4s handling of traits",id:"regarding-smithy4s-handling-of-traits",children:[],level:3}],p={toc:c};function h(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Smithy comes with a powerful annotation system. Annotations in smithy are called ",(0,a.kt)("a",{parentName:"p",href:"https://awslabs.github.io/smithy/1.0/spec/core/model.html#applying-traits-to-shapes"},"traits"),"."),(0,a.kt)("p",null,"These traits let you associate protocol-specific details to your data models and services."),(0,a.kt)("p",null,"For instance, an operation can be labelled as compatible with http semantics using the ",(0,a.kt)("a",{parentName:"p",href:"https://awslabs.github.io/smithy/1.0/spec/core/http-traits.html?highlight=http%20traits#http-binding-traits"},"http traits"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'namespace foo\n\n@http(method: "GET", uri: "/hello/{name}")\noperation Greet {\n  input: GreetInput,\n  output: GreetOutput,\n  errors: [BadInput]\n}\n\nstructure GreetInput {\n  // Matches the {name} hole in the uri path above\n  @httpLabel\n  name: String\n}\n\nstructure GreetOutput {\n  @httpPayload\n  message: String\n}\n\n@error("client")\n@httpError(400)\nstructure BadInput {\n  @jsonName("oops")\n  message: String\n}\n')),(0,a.kt)("h3",{id:"creating-your-own-traits"},"Creating your own traits"),(0,a.kt)("p",null,"Smithy makes it really easy to create your own traits:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'namespace foo\n\n@trait(selector: is(structure))\nstring customThing\n\n@customThing("hello")\nstructure MyStructure {\n}\n')),(0,a.kt)("h3",{id:"regarding-smithy4s-handling-of-traits"},"Regarding smithy4s handling of traits"),(0,a.kt)("p",null,"Smithy4s automatically creates corresponding values in the generated Scala code, for all the annotations it finds, whether defined in the smithy prelude, or defined by users."),(0,a.kt)("p",null,"These values can be retrieved via some interfaces that will be documented in a near future."))}h.isMDXComponent=!0}}]);