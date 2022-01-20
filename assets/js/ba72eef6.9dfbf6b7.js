"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[298],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3089:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),i=["components"],a={sidebar_label:"Openapi",title:"Openapi"},l=void 0,p={unversionedId:"protocols/simple-rest-json/docs",id:"protocols/simple-rest-json/docs",title:"Openapi",description:'At build-time, when encountering a service annotated with the simpleRestJson protocol, Smithy4s will automatically generate an openapi "view" for this service.',source:"@site/../docs/target/jvm-2.13/mdoc/03-protocols/02-simple-rest-json/04-docs.md",sourceDirName:"03-protocols/02-simple-rest-json",slug:"/protocols/simple-rest-json/docs",permalink:"/smithy4s/docs/protocols/simple-rest-json/docs",editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/03-protocols/02-simple-rest-json/04-docs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Openapi",title:"Openapi"},sidebar:"tutorialSidebar",previous:{title:"Client",permalink:"/smithy4s/docs/protocols/simple-rest-json/client"},next:{title:"AWS",permalink:"/smithy4s/docs/protocols/aws/aws"}},c=[],m={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"At build-time, when encountering a service annotated with the ",(0,s.kt)("inlineCode",{parentName:"p"},"simpleRestJson"),' protocol, Smithy4s will automatically generate an openapi "view" for this service.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'namespace smithy4s.example\n\nuse smithy4s.api#simpleRestJson\n\n@simpleRestJson\nservice HelloWorldService {\n  version: "1.0.0",\n  operations: [Hello]\n}\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"smithy4s-http4s-swagger")," module provides a one liner function to serve swagger-ui using that generated openapi view. By default, the documentation is routed under the ",(0,s.kt)("inlineCode",{parentName:"p"},"/docs")," path."),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"build.sbt")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  // version sourced from the plugin\n  "com.disneystreaming.smithy4s"  %% "smithy4s-http4s-swagger" % smithy4sVersion.value\n)\n')),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"Docs.scala")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"import org.http4s._\nimport cats.effect.IO\n// the package under which the scala code was generated\nimport smithy4s.hello._\n\nobject Docs {\n  val myDocRoutes : HttpRoutes[IO] =\n    smithy4s.http4s.swagger.docs[IO](HelloWorldService)\n}\n")),(0,s.kt)("p",null,"As a reminder, http4s' ",(0,s.kt)("inlineCode",{parentName:"p"},"HttpRoutes")," can be composed using the ",(0,s.kt)("inlineCode",{parentName:"p"},"<+>")," operator"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"import smithy4s.http4s._\nimport smithy4s.http4s.swagger.docs\nimport cats.effect.IO\nimport cats.implicits._\nimport org.http4s.implicits._\nimport smithy4s.hello._\n\n// ...\nval docRoutes = docs[IO](HelloWorldService)\nval app = SimpleRestJsonBuilder\n  .routes(HelloWorldImpl)\n  .make\n  .map(serviceRoutes => docRoutes <+> serviceRoutes)\n  .map(_.orNotFound)\n")))}u.isMDXComponent=!0}}]);