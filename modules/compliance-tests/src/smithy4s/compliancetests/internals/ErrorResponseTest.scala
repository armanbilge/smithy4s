/*
 *  Copyright 2021-2022 Disney Streaming
 *
 *  Licensed under the Tomorrow Open Source Technology License, Version 1.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     https://disneystreaming.github.io/TOST-1.0.txt
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package smithy4s.compliancetests
package internals

import smithy4s.Document
import smithy4s.schema.Schema
import smithy4s.Errorable
import cats.ApplicativeThrow
import cats.syntax.all._

private[compliancetests] final case class ErrorResponseTest[A, E](
    schema: Schema[A],
    inject: A => E,
    errorable: Errorable[E]
) {

  def kleisliFy[F[_]: ApplicativeThrow]: Document => F[Throwable] = {
    val errorDecoder = Document.Decoder.fromSchema(schema)
    (doc: Document) =>
      errorDecoder
        .decode(doc)
        .map(inject)
        .liftTo[F]
        .map(errorable.unliftError(_))
  }

}

private[compliancetests] object ErrorResponseTest {
  def from[E, A](
      errorAlt: smithy4s.schema.SchemaAlt[E, A],
      errorable: smithy4s.Errorable[E]
  ): ErrorResponseTest[A, E] =
    ErrorResponseTest(errorAlt.instance, errorAlt.inject, errorable)
}