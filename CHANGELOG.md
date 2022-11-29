
# 0.17.0

This 0.17.0 release of Smithy4s brings a number of improvements on the abstractions implemented by the generated code, in particular in terms of flexibility and user experience.

This release also aims at bringing inter-operability with other tools and projects that Disney Streaming is putting forward to reinforce the Smithy ecosystem, such as [smithy-translate](https://github.com/disneystreaming/smithy-translate/) and [alloy](https://github.com/disneystreaming/alloy).

In order to achieve these improvements, we've had to break a number of things at different levels. This release is therefore neither source nor binary compatible with the previous ones, and also forces the user to update their Smithy specifications.

## Breaking changes

### Smithy-level breaking changes

See https://github.com/disneystreaming/smithy4s/pull/561

The Smithy shapes that were previously residing under `smithy4s.api` namespace have moved to the `alloy` namespace. Alloy is a standalone library containing Smithy shapes and validators, defined [here](https://github.com/disneystreaming/alloy).

The reason for us to bring this change is to have a language specific location to define shapes that are relevant to the protocols/runtime-behaviours we're putting forward, that could be used by tooling working with other languages than Scala. It was important for us to lose the `4s` suffix, which is short for `for Scala`.

This change implies, for instance, that any use of `smithy4s.api#simpleRestJson` in your specification will have to be replaced by `alloy#simpleRestJson`.

Note that this change, in use cases that follow our documentation, should have no visible effect in the Scala code.

### Build-plugins breaking changes (SBT/mill)

#### Multiple input directories

See https://github.com/disneystreaming/smithy4s/pull/587

The `smithy4sInputDir` setting/task in SBT/mill has been replaced by `smithy4sInputDirs`, allowing the user to set several directories where the plugins should look for Smithy files.

#### Change in smithy-library dependency resolution

See https://github.com/disneystreaming/smithy4s/pull/607

We've changed the smithy-sharing mechanism to do two things:

1. By default, any dependency declared "normally" in SBT or mill, by means or `libraryDepedencies ++=` or `def ivyDeps`, will be inspected for Smithy files after being resolved. This means that, for instance, if your application has a runtime dependency on a library that was built with Smithy4s and contains Smithy files, your local specs can use the code defined in these Smithy files to create or annotate new shapes. You no longer need to declare those using `% Smithy4s` or `def smithy4sIvyDeps`: these are now reserved for libraries containing Smithy files that you **do not want your application's runtime to depend on**.
2. Libraries built by Smithy4s automatically track the dependencies that they used during their own code-generation, by storing some metadata in their Jar's manifests. By default, the Smithy4s plugins will also pull those dependencies (which will have been declared upstream using `% Smithy4s` in SBT or `def smithy4sIvyDeps` in mill), for your project's code generation. This facilitates the transitivity of specification-holding artifacts. This mechanism is used, for instance, to communicate to users projects the fact that Smithy4s depends on shapes that are defined in the [alloy](https://github.com/disneystreaming/alloy) library, and that these shapes should be made available to user projects, without impacting the user's application runtime, and without requiring any setup from the user.

One side-effect of this change is that if you produce JARs containing artifacts produced by Smithy4s code generation, you'll have a `smithy4s.tracking.smithy` file in your JARs. This could be a problematic file if you're using `sbt-assembly` because if you depend on multiple JARs that contain this file, you'll need to write a custom `assemblyMergeStrategy`, like so:

```sbt
assemblyMergeStrategy := {
  case "META-INF/smithy/smithy4s.tracking.smithy" =>
    MergeStrategy.discard
  case x =>
    val oldStrategy = (assemblyMergeStrategy).value
    oldStrategy(x)
}
```

This is perfectly fine to discard this file from your assembly jar.

### Normal-usage breaking changes in the generated code

See https://github.com/disneystreaming/smithy4s/pull/599

Depending on your setup, it may be a breaking change, but `@deprecated` Smithy-traits now translate to the `@deprectated` Scala annotation in the generated code. For instance, if you used `@enum` heavily, you'll probably deprecation warnings in your console when compiling. Depending on your `scalacOptions`, it is possible that these warnings turn into errors. If you want to silence these particular errors while upgrading, you can do the following:

```sbt
scalacOptions ++= Seq(
  "-Wconf:msg=object Enum in package api is deprecated:silent",
  "-Wconf:msg=type Enum in package api is deprecated:silent",
  // for Scala 3
  "-Wconf:msg=object Enum in package smithy.api is deprecated:silent",
  "-Wconf:msg=type Enum in package smithy.api is deprecated:silent"
)
```

### Normal-usage source breaking changes

See https://github.com/disneystreaming/smithy4s/pull/569

If you use Smithy4s in the ways that were previously advertised in the documentation, you may have to perform some small adjustments.

In particular, the `simpleRestJson` extension method that was added to implementations of service-interfaces generated by Smithy4s is now removed, in favour of the `SimpleRestJsonBuilder` construct (which now works for any `service` Smithy shape that will have been annotated with `alloy#simpleRestJson`).

Additionally, some methods that were deprecated in 0.16.x releases [have been removed](https://github.com/disneystreaming/smithy4s/pull/589).

### Advanced usage breaking changes

The abstractions that the generated code implements and that the runtime interpreters use have undergone some massive changes.

Non-exhaustive list of symbol renames :

| old                               | new                               |
| --------------------------------- | --------------------------------- |
| smithy4s.Monadic                  | smithy4s.kinds.FunctorAlgebra     |
| smithy4s.Interpreter              | smithy4s.kinds.FunctorInterpreter |
| smithy4s.Service#asTransformation | toPolyFunction                    |
| smithy4s.Service#transform        | fromPolyFunction                  |
| smithy4s.PolyFunction             | smithy4s.kinds.PolyFunction       |
| smithy4s.Transformation           | smithy4s.kinds.PolyFunction5      |
| smithy4s.GenLift[F]#λ             | smithy4s.kinds.Kind1[F]#toKind5   |

#### Unification of the natural-transformations/polymorphic functions.

* Smithy4s makes a lot of use of polymorphic functions of various kinds. Those are now code-generated (see the `project/Boilerplate.scala` file) to ensure the consistency of the various ways they are being used. This means that `smithy4s.PolyFunction` has moved to `smithy4s.kinds.PolyFunction`, and that the previous `smithy4s.Transformation` is now `smithy4s.kinds.PolyFunction5`. This decision ripples in the `smithy4s.Service` interface, which now sports `toPolyFunction` and `fromPolyFunction` methods, allowing to turn a finally-encoded implementation into a final one. `smithy4s.kinds.PolyFunction2` is also a thing, and may be used in bi-functor contexts.
* `kind`-specific types were created to facilitate the "lift" of constructs to the right kinds. For instance, when inspecting the internals of this library, you might see things like `Kind1[IO]#toKind5` where it was previously `GenLift[IO]#λ`. We're hoping to convey meaning better, although this code is definitely still not trivial (and never will).
* `smithy4s.Transformation` is now a typeclass-like construct, which expresses the fact that a construct can be applied on another like a function. This construct is used by the `transform` method that is generated on service interfaces, which allows to apply custom behaviour generically on all method invocations in these interfaces.
* The `Service` interface takes a single `Alg` type parameter, the `Op` parameter has moved to type-member position, facilitating implicit search in some contexts (as well as the writing of some logic).
* A bunch of path-dependent type aliases were created in the `Service` interface.
* The `compliancetest` module has changed drastically in UX. For those not aware, this module allows to run tests written in Smithy against your own implementation of protocols. This will be useful for third-party libraries that implement `simpleRestJson` (or any other http/rest like protocol), to virtually get tests for free. We don't think this module had any users so far, but we'll slowly be porting some of our tests away from the `smithy4s` repository and into the `alloy` repository.

## User facing improvements

### Stubs

See https://github.com/disneystreaming/smithy4s/pull/595

It is now possible to quickly stub a service with a default value (`IO.stub` being a good candidate), which can be helpful for testing purposes. The resulting code looks like this :

```scala
import smithy4s.hello._
import cats.effect._
val stubbedHelloWorld : HelloWorldService[IO] = new HelloWorldService.Default[IO](IO.stub)
```

### Transformations, including bi-functors

See https://github.com/disneystreaming/smithy4s/pull/584

`smithy4s.Transformation`  has been revised to facilitate the integration with various shapes of transformations. It allows, in particular, to transform a service implementation by applying generic (but polymorphic) behaviour in all of its methods. For instance, this can be used to apply a timeout on all of the methods of a service, or retrying behaviour, etc ...

In particular, the `smithy4s.Transformation` companion object contains in particular `AbsorbError` and `SurfaceError` interfaces that developers can leverage to get their services to go from mono-functor (where all errors are treated as `Throwable`) to bi-functor (where errors are surfaced on a per-endpoint basis, forcing the developers to handle them one way or another), and vice-versa.

### Bi-functor-specialised type aliases

See https://github.com/disneystreaming/smithy4s/pull/584/files#diff-064c6fb10e5927021c4fdb928e68fd8594443b767c54bec7d3b4a424e087401bR26

The generated code now contains bi-functor-specialised `ErrorAware`type-aliases. Those, combined with the transformations described above, should make it easier to interop with Bi-functor constructs such as `EitherT` or `ZIO`.

### Endpoint Specific Middleware

See https://github.com/disneystreaming/smithy4s/pull/614

Adds the ability to have smithy4s-level middleware that is made aware of the `Server` and `Endpoint` for use in creating middleware implementations. This unlocks creating middleware that is aware of the Smithy traits (`Hints` in smithy4s) and shapes in your specification. This means the middleware can apply transformations based on traits applied in a Smithy specification and it can return error responses defined in the Smithy specification. An example of this is authentication. You are now able to create middleware that will check authentication on only the endpoints that require it AND you can return a smithy-defined error response when the authentication is not valid. See the [endpoint specific middleware guide](https://disneystreaming.github.io/smithy4s/docs/guides/endpoint-middleware) for more.


### Error Response Handling Improvements

See https://github.com/disneystreaming/smithy4s/pull/570

Streamlines and improves how error responses are mapped to their corresponding smithy4s-generated types. It now works such that IF no `X-Error-Type` header is found AND the status code doesn't map precisely to an error annotated with `@httpCode` AND exactly one error happens to have `@error("client")` without `@httpCode`, that error will be selected (provided the status code is in the 4xx range). Same for `@error("server")` and 5xx range. See the [error handling documentation](https://disneystreaming.github.io/smithy4s/docs/protocols/simple-rest-json/client#error-handling) for more.

### Support for more HTTP methods

Previously, smithy4s's `HttpEndpoint` was limited to supporting just a small subset of HTTP methods (`POST`, `GET`, `PATCH`, `PUT` and `DELETE`). This is now mitigated, and all other methods are accepted by `HttpEndpoint`, by means of an open-enumeration.

### Configurable maximum arity during Json parsing

See https://github.com/disneystreaming/smithy4s/pull/569

In order to mitigate known security problems, our json parsing logic has hard-limits over the number of elements it will parse from arrays
or maps, resulting in an error when receiving payloads with larger collections. Previously, this limit was hardcoded to 1024 elements per collection. This is now configurable, 1024 being the default.
