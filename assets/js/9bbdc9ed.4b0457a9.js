"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[533],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(a,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3341:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],s={sidebar_label:"Quick Start",title:"Quick Start"},a=void 0,c={unversionedId:"overview/quickstart",id:"overview/quickstart",title:"Quick Start",description:"Below is a quick example of smithy4s in action. This page does not give very much explanation or detail. For more information on various aspects of smithy4s, read through the other sections of this documentation site.",source:"@site/../docs/target/jvm-2.13/mdoc/01-overview/02-quickstart.md",sourceDirName:"01-overview",slug:"/overview/quickstart",permalink:"/smithy4s/docs/overview/quickstart",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/01-overview/02-quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Quick Start",title:"Quick Start"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/smithy4s/docs/overview/intro"},next:{title:"Installation (SBT)",permalink:"/smithy4s/docs/overview/sbt"}},u={},m=[{value:"project/plugins.sbt",id:"projectpluginssbt",level:2},{value:"build.sbt",id:"buildsbt",level:2},{value:"modules/example/src/main/smithy/ExampleService.smithy",id:"modulesexamplesrcmainsmithyexampleservicesmithy",level:2},{value:"modules/example/src/main/scala/Main.scala",id:"modulesexamplesrcmainscalamainscala",level:2},{value:"Run Service",id:"run-service",level:2},{value:"Navigate to localhost:9000/docs",id:"navigate-to-localhost9000docs",level:2},{value:"Client Example",id:"client-example",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Below is a quick example of smithy4s in action. This page does not give very much explanation or detail. For more information on various aspects of smithy4s, read through the other sections of this documentation site."),(0,o.kt)("h2",{id:"projectpluginssbt"},"project/plugins.sbt"),(0,o.kt)("p",null,"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"smithy4s-sbt-codegen")," plugin to your build."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("com.disneystreaming.smithy4s" % "smithy4s-sbt-codegen" % "0.16.0")\n')),(0,o.kt)("h2",{id:"buildsbt"},"build.sbt"),(0,o.kt)("p",null,"Enable the plugin in your project, add the smithy and http4s dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import smithy4s.codegen.Smithy4sCodegenPlugin\n\nThisBuild / scalaVersion := "2.13.8"\n\nval example = project\n  .in(file("modules/example"))\n  .enablePlugins(Smithy4sCodegenPlugin)\n  .settings(\n    libraryDependencies ++= Seq(\n      "com.disneystreaming.smithy4s" %% "smithy4s-http4s" % smithy4sVersion.value,\n      "com.disneystreaming.smithy4s" %% "smithy4s-http4s-swagger" % smithy4sVersion.value,\n      "org.http4s" %% "http4s-ember-server" % "0.23.15"\n    )\n  )\n')),(0,o.kt)("h2",{id:"modulesexamplesrcmainsmithyexampleservicesmithy"},"modules/example/src/main/smithy/ExampleService.smithy"),(0,o.kt)("p",null,"Define your API in smithy files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'namespace smithy4s.hello\n\nuse smithy4s.api#simpleRestJson\n\n@simpleRestJson\nservice HelloWorldService {\n  version: "1.0.0",\n  operations: [Hello]\n}\n\n@http(method: "POST", uri: "/{name}", code: 200)\noperation Hello {\n  input: Person,\n  output: Greeting\n}\n\nstructure Person {\n  @httpLabel\n  @required\n  name: String,\n\n  @httpQuery("town")\n  town: String\n}\n\nstructure Greeting {\n  @required\n  message: String\n}\n')),(0,o.kt)("p",null,"The Scala code corresponding to this smithy file will be generated the next time you compile your project."),(0,o.kt)("h2",{id:"modulesexamplesrcmainscalamainscala"},"modules/example/src/main/scala/Main.scala"),(0,o.kt)("p",null,"Implement your service by extending the generated Service trait. Wire up routes into server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import smithy4s.hello._\nimport cats.effect._\nimport cats.implicits._\nimport org.http4s.implicits._\nimport org.http4s.ember.server._\nimport org.http4s._\nimport com.comcast.ip4s._\nimport smithy4s.http4s.SimpleRestJsonBuilder\n\nobject HelloWorldImpl extends HelloWorldService[IO] {\n  def hello(name: String, town: Option[String]) : IO[Greeting] = IO.pure {\n    town match {\n      case None => Greeting(s"Hello $name!")\n      case Some(t) => Greeting(s"Hello $name from $t!")\n    }\n  }\n}\n\nobject Routes {\n  private val example: Resource[IO, HttpRoutes[IO]] =\n    SimpleRestJsonBuilder.routes(HelloWorldImpl).resource\n\n  private val docs: HttpRoutes[IO] =\n    smithy4s.http4s.swagger.docs[IO](HelloWorldService)\n\n  val all: Resource[IO, HttpRoutes[IO]] = example.map(_ <+> docs)\n}\n\nobject Main extends IOApp.Simple {\n\n  val run = Routes.all\n    .flatMap { routes =>\n      EmberServerBuilder\n        .default[IO]\n        .withPort(port"9000")\n        .withHost(host"localhost")\n        .withHttpApp(routes.orNotFound)\n        .build\n    }\n    .use(_ => IO.never)\n\n}\n')),(0,o.kt)("h2",{id:"run-service"},"Run Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sbt "example/run"\n')),(0,o.kt)("h2",{id:"navigate-to-localhost9000docs"},"Navigate to localhost:9000/docs"),(0,o.kt)("p",null,"Here you will find the automatically generated SwaggerUI which will allow you to easily test your API."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/WQgetF6.png",alt:"SwaggerUI documentation site request"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/JRUQyny.png",alt:"SwaggerUI documentation site response"})),(0,o.kt)("h2",{id:"client-example"},"Client Example"),(0,o.kt)("p",null,"You can also generate a client using smithy4s."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import org.http4s.ember.client.EmberClientBuilder\n\nobject ClientImpl extends IOApp.Simple {\n\n  val helloWorldClient: Resource[IO, HelloWorldService[IO]] = for {\n    client <- EmberClientBuilder.default[IO].build\n    helloClient <- SimpleRestJsonBuilder(HelloWorldService).clientResource(\n      client,\n      Uri.unsafeFromString("http://localhost:9000")\n    )\n  } yield helloClient\n\n  val run = helloWorldClient.use(c =>\n    c.hello("Sam", Some("New York City"))\n      .flatMap(greeting => IO.println(greeting.message))\n  )\n\n}\n')))}d.isMDXComponent=!0}}]);