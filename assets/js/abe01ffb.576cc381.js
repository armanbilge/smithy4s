"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[905],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2884:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_label:"Services and endpoints",title:"Services and endpoints"},l=void 0,p={unversionedId:"design/services",id:"design/services",title:"Services and endpoints",description:"In addition to relying heavily on a Schema construct, which enables abstracting over serialisation, Smithy4s uses abstractions to codify the notion of interface, to allow for interoperability with various communication protocols. The idea is to reason generically about things of this shape :",source:"@site/../docs/target/jvm-2.13/mdoc/05-design/03-services.md",sourceDirName:"05-design",slug:"/design/services",permalink:"/smithy4s/docs/design/services",editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/05-design/03-services.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Services and endpoints",title:"Services and endpoints"},sidebar:"tutorialSidebar",previous:{title:"Datatypes and schemas",permalink:"/smithy4s/docs/design/schemas"}},d=[{value:"The duality of final and initial algebras",id:"the-duality-of-final-and-initial-algebras",children:[{value:"A detour around kinds",id:"a-detour-around-kinds",children:[{value:"Input",id:"input",children:[],level:4},{value:"Error",id:"error",children:[],level:4},{value:"Output",id:"output",children:[],level:4},{value:"StreamedInput, StreamedOutput",id:"streamedinput-streamedoutput",children:[],level:4}],level:3},{value:"Transformation",id:"transformation",children:[],level:3},{value:"Codifying the duality between initial and final algebras",id:"codifying-the-duality-between-initial-and-final-algebras",children:[],level:3}],level:2},{value:"The high-level philosophy of Smithy4s",id:"the-high-level-philosophy-of-smithy4s",children:[{value:"Logical flow: client-side",id:"logical-flow-client-side",children:[],level:3},{value:"Logical flow: server-side",id:"logical-flow-server-side",children:[],level:3},{value:"A note about efficiency",id:"a-note-about-efficiency",children:[],level:3}],level:2},{value:"The Endpoint abstraction",id:"the-endpoint-abstraction",children:[{value:"A note on errors",id:"a-note-on-errors",children:[],level:3}],level:2},{value:"Services and endpoints",id:"services-and-endpoints",children:[],level:2},{value:"Conclusion and complete interfaces",id:"conclusion-and-complete-interfaces",children:[],level:2}],c={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In addition to relying heavily on a ",(0,o.kt)("inlineCode",{parentName:"p"},"Schema")," construct, which enables abstracting over serialisation, Smithy4s uses abstractions to codify the notion of interface, to allow for interoperability with various communication protocols. The idea is to reason generically about things of this shape :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait Interface[Context[_]]{\n  def operation1(a: A, b: B) : Context[Output1]\n  def operation2(c: C, d: D, e: E) : Context[Output2]\n}\n")),(0,o.kt)("p",null,"This generalisation enables the easy interpretation of implementations of such interfaces into services (HTTP, RPC, etc), or conversely, the derivation of stub instances of these interfaces to talk to remote services."),(0,o.kt)("p",null,"The creation of an abstraction that allows for this generalisation is a problem similar to the one that lead to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Schema"),' construct : one needs to deconstruct the notion of "interface" into fundamental building blocks.'),(0,o.kt)("h2",{id:"the-duality-of-final-and-initial-algebras"},"The duality of final and initial algebras"),(0,o.kt)("p",null,"Before we dive into the core of the solution, one notion that is drastically helpful is the duality between finally-encoded algebras and initially-encoded algebras."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Finally-encoded algebras are object-oriented encodings of a set of operations, just like above : operations are represented as ",(0,o.kt)("strong",{parentName:"p"},"methods"),' in an interface. Interpretation of expressions written in terms of these methods does not involve any runtime transformation from one context to another : the method call is merely executed. In other words, when they are executed, expressions coming from finally-encoded algebras are already in their "final form".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Conversely, initially-encoded algebras represent expressions as ",(0,o.kt)("strong",{parentName:"p"},"data"),", implying that interpretation involves a transformation of this data into lower level method calls. However, ",(0,o.kt)("strong",{parentName:"p"},"data")," has the quality of being a first class construct in programming languages, meaning you can pass it around and use it as parameter to functions. This allows for the unification of code-paths, as the differences between some aspects of a bit of logic can be absorbed by the data and handled later on."))),(0,o.kt)("p",null,"Finally-encoded KVStore algebra :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait KVStore[Context[_]]{\n  def put(key: String, value: String) : Context[Unit]\n  def get(key: String)                : Context[Option[String]]\n  def delete(key: String)             : Context[Unit]\n}\n")),(0,o.kt)("p",null,"Initially-encoded KVStore algebra :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait KVStoreOp[Output]\nobject KVStoreOp {\n  case class Put(key: String, value: String)  extends KVStore[Unit]\n  case class Get(key: String)                 extends KVStore[Option[String]]\n  case class Delete(key: String)              extends KVStore[Unit]\n}\n")),(0,o.kt)("p",null,"These two encodings contain a similar amount of information. It is nearly-trivial to go from a ",(0,o.kt)("inlineCode",{parentName:"p"},"KVstore[Context]")," instance to a ",(0,o.kt)("inlineCode",{parentName:"p"},"KVStoreOp ~> Context")," natural transformation, and vice versa:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait ~>[F[_], G[_]]{\n  def apply[A](fa: F[A]) : G[A]\n}\n\ndef asNaturalTransformation[Context[_]](impl: KVStore[Context]) = new (KVStoreOp ~> Context){\n  def apply[A](fa: KVStoreOp[A]) : Context[A] = fa match {\n    case KVStoreOp.Put(key, value) => impl.put(key, value)\n    case KVStoreOp.Get(key)        => impl.get(key)\n    case KVStoreOp.Delete(key)     => impl.delete(key)\n  }\n}\n\ndef fromNaturalTransformation[Context[_]](run: KVStoreOp ~> Context) = new KVStore[Context]{\n  def put(key: String, value: String) = run(KVStoreOp.Put(key, value))\n  def get(key: String)                = run(KVStoreOp.Get(key))\n  def delete(key: String)             = run(KVStoreOp.Delete(key))\n}\n")),(0,o.kt)("p",null,"This duality is heavily used by Smithy4s : finally-encoded interfaces are generally more natural to Scala developers, and are better supported in editors (autocompletion, etc). But from an implementation's perspective, the initial, data-based encoding is really interesting, because operations are reified as ",(0,o.kt)("strong",{parentName:"p"},"data-types")," that can be associated with instances of generic type-classes : it is possible to abstract over data, it is not possible to abstract over method calls."),(0,o.kt)("h3",{id:"a-detour-around-kinds"},"A detour around kinds"),(0,o.kt)("p",null,"The methods generated by Smithy4s are conceptually similar to the methods expressed in the example above, except that the output types are significantly more verbose."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait Interface[Context[_, _, _, _, _,]]{\n  def operation1(a: A, b: B) : Context[Input, Error, Output, StreamedInput, StreamedOutput]\n}\n")),(0,o.kt)("p",null,"Let's address this awkwardness right away, by explaining the rationale behind this seemingly humongous signature :"),(0,o.kt)("h4",{id:"input"},"Input"),(0,o.kt)("p",null,"It's the input type of an operation. Typically, a case class that holds fields matching the method parameters. We keep track of it in the return type for several reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the internal logic of Smithy4s, It prevents having to prematurely shoe-horn kinds into other kinds by means of injection/projection, which helps both implementor and compiler alike"),(0,o.kt)("li",{parentName:"ul"},"It will come in handy for the implementation of some pagination-aware interpreters, as pagination typically works by performing a modification of the previous input in order to get the next batch (page) of results. This implies that the input (and therefore its type) must be tracked across several requests resulting from a single method call.")),(0,o.kt)("h4",{id:"error"},"Error"),(0,o.kt)("p",null,"The execution of an operation can result in errors. The Smithy language allows for tying a list of errors to operations. When generating the associated code, Smithy4s synthesize a union. This allows the coproduct of errors associated to an operation to be represented as a bona fide Scala type, which we can abstract over via some type-class instance. This is also very useful for the writing of bi-functor interpreters, for users that are interested in this kind of UX."),(0,o.kt)("h4",{id:"output"},"Output"),(0,o.kt)("p",null,"No surprise there : this is the data resulting from the run of the operation."),(0,o.kt)("h4",{id:"streamedinput-streamedoutput"},"StreamedInput, StreamedOutput"),(0,o.kt)("p",null,"Smithy supports the concept of ",(0,o.kt)("a",{parentName:"p",href:"https://awslabs.github.io/smithy/1.0/spec/core/stream-traits.html?highlight=streaming#streaming-trait"},"Streaming"),'. It is communicated as a trait that annotates a single field of the input shape or/and output shape of an operation. Scala does not have a "standard" way of expressing streaming semantics. Moreover, streaming constructs in Scala are heavily context dependant. It is therefore impossible for us to incorporate the concept of "streaming" to our ',(0,o.kt)("inlineCode",{parentName:"p"},"Schema")," construct as it is meant to be context-free and third-party-free."),(0,o.kt)("p",null,"To get some intuition for why that is : say we want to express streaming using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typelevel/fs2/"},"fs2"),". If we naively generate a case class that has one of its fields annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@streaming"),", it means that the the field is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"fs2.Stream[F, A]"),", which means that we either need to make a decision on what the ",(0,o.kt)("inlineCode",{parentName:"p"},"F")," is, which is not okay for obvious reasons, or we need to propagate the ",(0,o.kt)("inlineCode",{parentName:"p"},"F[_]")," type parameter upward to the case class. Now our ",(0,o.kt)("inlineCode",{parentName:"p"},"Schema")," value, which accompanies the case-class, also have to carry the ",(0,o.kt)("inlineCode",{parentName:"p"},"F")," ... this propagates throughout the whole codebase. We deemed that not acceptable."),(0,o.kt)("p",null,"Rather than polluting all layers of abstraction, we decided to just have the concept of operation be impacted and hold the streamed type in a separate type parameter. This allows for interpreters from various ecosystem to emerge. It also has the quality of allowing users to access the unary component of outputs (ie, data that is communicated in the headers of HTTP responses) without necessarily allocating resources to consume the streamed component of the output."),(0,o.kt)("p",null,"NB: at the time of writing this, Smithy4s does not have any streaming-aware interpreter implemented. But streaming is such a fundamental notion in remote interactions, and we had to devise a plan to ensure that third parties could decide to implement interpreters without waiting."),(0,o.kt)("h3",{id:"transformation"},"Transformation"),(0,o.kt)("p",null,"Because of the complex kinds we're dealing with, we codify a natural-transformation, called ",(0,o.kt)("inlineCode",{parentName:"p"},"Smithy4s.Transformation")," that allows us to work at this level :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait Transformation[F[_, _, _, _, _], G[_, _, _, _, _]] {\n  def apply[I, E, O, SI, SO](fa: F[I, E, O, SI, SO]): G[I, E, O, SI, SO]\n}\n")),(0,o.kt)("p",null,"This is a mouthful, but conceptually, it's exactly the same as our good old polymorphic function typically aliased to ",(0,o.kt)("inlineCode",{parentName:"p"},"~>"),"."),(0,o.kt)("h3",{id:"codifying-the-duality-between-initial-and-final-algebras"},"Codifying the duality between initial and final algebras"),(0,o.kt)("p",null,"What we want users to manipulate is the final-encoded version of a service: a good-old object-oriented interface that has decent editor support. But we need the initial-encoded version to implement interpreters in a generic fashion."),(0,o.kt)("p",null,"So we codify the duality to allow for switching from one to the other via an abstraction called ",(0,o.kt)("inlineCode",{parentName:"p"},"Smithy4s.Service"),", which is the entry point to all interpreters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait Service[Final[_[_, _, _, _, _]], Initial[_, _, _, _, _]] {\n  def asTransformation[F[_, _, _, _, _,]](alg: Final[F]) : Transformation[Initial, F]\n  def transform[F[_, _, _, _, _]](transformation: Transformation[Initial, F]) : Final[F]\n\n  // ...\n}\n")),(0,o.kt)("p",null,"Implementations of such interfaces are code-generated. This implies that any smithy ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," shape gets translated as a finally-encoded interface, but also as an initially-encoded ",(0,o.kt)("inlineCode",{parentName:"p"},"GADT")),(0,o.kt)("h2",{id:"the-high-level-philosophy-of-smithy4s"},"The high-level philosophy of Smithy4s"),(0,o.kt)("p",null,"The goal of Smithy4s is to allow users to derive client stubs and routers in various protocols, by running the generated code (or instances of generated interfaces) in some one-liner functions. To that end, Smithy4s surfaces a number of abstractions (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"smithy4s.schema.Schema"),") that allow for the implementation of (very) polymorphic interpreters. These interpreters operate on the generated code, which reflects what the user defines in their smithy Specs."),(0,o.kt)("p",null,"The abstractions used by interpreters contain all the elements that allow for turning a high-level method call (from an interface generated by Smithy4s) into a low level request of some sort, and then transform a low level response into the output of the method call."),(0,o.kt)("h3",{id:"logical-flow-client-side"},"Logical flow: client-side"),(0,o.kt)("p",null,"Conceptually, to derive a high-level client that uses some sort of ",(0,o.kt)("inlineCode",{parentName:"p"},"Request => Response")," protocol, the implementation has to follow a sequence of steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Assuming this method call : ",(0,o.kt)("inlineCode",{parentName:"li"},'kvstore.get("key")')),(0,o.kt)("li",{parentName:"ol"},"turning the method call into a piece of data : ",(0,o.kt)("inlineCode",{parentName:"li"},'KVStoreOp.Get("key")')," using the initially-encoded dual of the ",(0,o.kt)("inlineCode",{parentName:"li"},"KVStore")," interface"),(0,o.kt)("li",{parentName:"ol"},"Retrieving the Smithy4s ",(0,o.kt)("inlineCode",{parentName:"li"},"Schemas")," (input and output) associated to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Get")," operation"),(0,o.kt)("li",{parentName:"ol"},"Compiling the schema associated to the input of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Get")," operation into some encoding function : ",(0,o.kt)("inlineCode",{parentName:"li"},"GetInput => Request")),(0,o.kt)("li",{parentName:"ol"},"Running the request through a low-level ",(0,o.kt)("inlineCode",{parentName:"li"},"Request => Response")," function (like an HTTP client)"),(0,o.kt)("li",{parentName:"ol"},"Running ",(0,o.kt)("inlineCode",{parentName:"li"},"Get")," into some function that gives us its ",(0,o.kt)("inlineCode",{parentName:"li"},"GetInput")," representation"),(0,o.kt)("li",{parentName:"ol"},"Compiling the schema associated to the output (",(0,o.kt)("inlineCode",{parentName:"li"},"GetOutput")," ~= ",(0,o.kt)("inlineCode",{parentName:"li"},"Option[String]"),") of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Get")," operation into some decoding function ",(0,o.kt)("inlineCode",{parentName:"li"},"Response => Output"))),(0,o.kt)("p",null,"So we get ",(0,o.kt)("inlineCode",{parentName:"p"},"kvstore.get => KVStoreOp.Get => GetInput => Request => Response => GetOutput"),", which gives us the full data flow, client side."),(0,o.kt)("h3",{id:"logical-flow-server-side"},"Logical flow: server-side"),(0,o.kt)("p",null,"The server side is different in that we want to derive the ",(0,o.kt)("inlineCode",{parentName:"p"},"Request => Response")," function from an instance of our interface (",(0,o.kt)("inlineCode",{parentName:"p"},"KVStore"),"). The goal is to mechanically translate a request into a method call, and a method's output into a response. The sequence:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From a given ",(0,o.kt)("inlineCode",{parentName:"li"},"Request"),", find the corresponding operation ",(0,o.kt)("inlineCode",{parentName:"li"},"Op")," (for instance, by means of HTTP path). Let's assume it's the ",(0,o.kt)("inlineCode",{parentName:"li"},"get")," operation,"),(0,o.kt)("li",{parentName:"ol"},"Retrieve the Smithy4s ",(0,o.kt)("inlineCode",{parentName:"li"},"Schemas")," (input and output) associated to the operation (",(0,o.kt)("inlineCode",{parentName:"li"},"KVStoreOp.Get"),")"),(0,o.kt)("li",{parentName:"ol"},"Compile a ",(0,o.kt)("inlineCode",{parentName:"li"},"Request => GetInput")," decoding function, and run the ",(0,o.kt)("inlineCode",{parentName:"li"},"Request")," through it"),(0,o.kt)("li",{parentName:"ol"},"From ",(0,o.kt)("inlineCode",{parentName:"li"},"GetInput"),", recreate the ",(0,o.kt)("inlineCode",{parentName:"li"},"KVStoreOp.Get")," instance"),(0,o.kt)("li",{parentName:"ol"},"From ",(0,o.kt)("inlineCode",{parentName:"li"},"KVStoreOp.Get"),", use the final-encoded dual of ",(0,o.kt)("inlineCode",{parentName:"li"},"KVStoreOp")," to call the ",(0,o.kt)("inlineCode",{parentName:"li"},"KVStore#get")," method (implemented by the user). This gets us an ",(0,o.kt)("inlineCode",{parentName:"li"},"GetOutput")),(0,o.kt)("li",{parentName:"ol"},"Compile a ",(0,o.kt)("inlineCode",{parentName:"li"},"GetOutput => Response")," encoding function from the schemas, and run the output through it")),(0,o.kt)("p",null,"So we get ",(0,o.kt)("inlineCode",{parentName:"p"},"Request => KVStoreOp.GetInput => KVStoreOp.Get => kvstore.get => GetOutput => Response"),", which gives us the full data flow, service side."),(0,o.kt)("p",null,"Both the service-side and client-side logical flows guide the design of the abstractions that are exposed by Smithy4s."),(0,o.kt)("h3",{id:"a-note-about-efficiency"},"A note about efficiency"),(0,o.kt)("p",null,"The flows described above are merely conceptual, and do not account for the optimisations involved to ensure that schemas are not recompiled into codecs on a per-request basis (which would greatly impact performance). Interpreters provided by Smithy4s (HTTP and co) are written to ensure that all compilation is performed ahead of receiving requests, by means of preliminary computations and caching."),(0,o.kt)("h2",{id:"the-endpoint-abstraction"},"The Endpoint abstraction"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"smithy4s.Endpoint")," abstraction ties a specific operation to the various schemas that are tied to it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait Endpoint[Initial[_, _, _, _, _], I, E, O, SI, SO] {\n  def shapeId : ShapeId\n  def hints: Hints\n  def input: Schema[I]\n  def output: Schema[O]\n  def streamedInput: StreamingSchema[SI]\n  def streamedOutput: StreamingSchema[SO]\n  def wrap(input: I): Initial[I, E, O, SI, SO]\n\n  def errorable: Option[Errorable[E]]\n}\n")),(0,o.kt)("p",null,"Endpoints are not type-classes. Instead, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Endpoint")," trait is extended by the companion object of each member of the ",(0,o.kt)("inlineCode",{parentName:"p"},"GADT")," forming the initial-encoding of the service interface. So, going back to our ",(0,o.kt)("inlineCode",{parentName:"p"},"KVStore"),", the corresponding sealed-trait would look like this :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait KVStoreOp[Input, Error, Output, StreamedInput, StreamedOutput]\n")),(0,o.kt)("p",null,"and the ",(0,o.kt)("inlineCode",{parentName:"p"},"put")," operation would look like :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"case class Put(input: PutRequest) extends KVStoreOp[PutRequest, PutError, PutResult, Nothing, Nothing]\nobject Put extends Endpoint[KVStoreOp, PutRequest, PutError, PutResult, Nothing, Nothing] with Errorable[PutError]{\n  val input = PutRequest.input\n  val output = PutRequest.input\n  val streamedInput = SteamingSchema.nothing\n  val streamedOutput = StreamingSchema.nothing\n  val errorable: Option[Errorable[PutResult]] = this\n  // ...\n}\n")),(0,o.kt)("h3",{id:"a-note-on-errors"},"A note on errors"),(0,o.kt)("p",null,"As stated previously, Smithy4s generates a coproduct type for each operation, where the members of the coproduct point to the various errors listed in the smithy operation shape. Additionally, each structure annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@error")," in smithy is rendered as a case-class that extends ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable"),", because ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwables")," are the de-facto standard of doing error handling on the JVM. Even libraries that use ",(0,o.kt)("inlineCode",{parentName:"p"},"Either")," to perform error handling often represent the left-hand-side of the Either as some throwable type, to facilitate the absorption of errors into the error-channels of monadic constructs (",(0,o.kt)("inlineCode",{parentName:"p"},"IO.raiseError"),", etc)"),(0,o.kt)("p",null,"As a result, it is important for Smithy4s to expose functions that generically enable the filtering of throwables against the ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," type parameter of an operation, so that interpreters can intercept errors and apply the correct encoding (dictated via ",(0,o.kt)("inlineCode",{parentName:"p"},"Schema"),") before communicating them back to the caller over the wire. Conversely, it is important to expose a function that allows to go from the generic ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," type parameter to ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable"),", so that errors received via low-level communication channels can be turned into ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable")," at the client call site, in order to populate the relevant error channel when exposing mono-functor semantics."),(0,o.kt)("p",null,"Therefore, when a smithy operation has ",(0,o.kt)("inlineCode",{parentName:"p"},"errors")," defined, the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"smithy4s.Endpoint")," also extends the ",(0,o.kt)("inlineCode",{parentName:"p"},"Errorable")," interface, which looks like this :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait Errorable[E] {\n  def error: UnionSchema[E]\n  def liftError(throwable: Throwable): Option[E]\n  def unliftError(e: E): Throwable\n}\n")),(0,o.kt)("h2",{id:"services-and-endpoints"},"Services and endpoints"),(0,o.kt)("p",null,"In order to implement any server-side interpreters, it is required to have a list of endpoints. That list is used to implement some matching logic based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"shapeId")," and/or the ",(0,o.kt)("inlineCode",{parentName:"p"},"hints")," associated to the endpoints, in order to deterministically decide where to route a low level ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," to a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"Endpoint")," instance."),(0,o.kt)("p",null,"For instance, smithy provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"@http")," trait out of the box that can annotate operations :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'service KVStore {\n  operations: [Get, Put]\n}\n\n@http(method: "GET", uri: "/resource/${key}, code: 200)\noperation Get {\n  input: GetInput\n  output: GetOutput\n}\n\nstructure GetInput {\n  @httpLabel\n  key: String\n}\n\nstructure GetOutput {\n  value: String\n}\n\n@http(method: "PUT", uri: "/resource/${key}, code: 200)\noperation Put {\n\n}\n\nstructure PutInput {\n  @httpLabel\n  key: String,\n  @httpPayload\n  value: String\n}\n')),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"@http")," occurrence get translated to a scala value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Hints")," associated to the corresponding endpoint."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On server-side, having a list of all the endpoints associated to a service allows for creating a routing logic that dispatches an HTTP Request to the correct endpoint."),(0,o.kt)("li",{parentName:"ul"},"On client-side, a method call to a service stub gets translated to an instance of the corresponding ",(0,o.kt)("inlineCode",{parentName:"li"},"GADT")," member. From there, we have to retrieve the schemas associated to the member in question. Additionally, we need to extract the input value out of the member, to run it through an encoder derived from the the associated ",(0,o.kt)("inlineCode",{parentName:"li"},"Schema"),".")),(0,o.kt)("p",null,"Therefore, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," abstraction needs to be enriched with the following methods :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait Service[Final[_[_, _, _, _, _]], Initial[_, _, _, _, _]] {\n  // ...\n\n  // useful for server-side\n  def endpoints: List[Endpoint[Initial, _, _, _, _, _]]\n  // useful for client-side\n  def endpoint[I, E, O, SI, SO](op: Initial[I, E, O, SI, SO]): (I, Endpoint[Initial, I, E, O, SI, SO])\n}\n")),(0,o.kt)("h2",{id:"conclusion-and-complete-interfaces"},"Conclusion and complete interfaces"),(0,o.kt)("p",null,"Here are links to the complete interfaces discussed in this chapter."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/disneystreaming/smithy4s/blob/main/modules/core/src/smithy4s/Service.scala"},"Service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/disneystreaming/smithy4s/blob/main/modules/core/src/smithy4s/Endpoint.scala"},"Endpoint"))))}h.isMDXComponent=!0}}]);