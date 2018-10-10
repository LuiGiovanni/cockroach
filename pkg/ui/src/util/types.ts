// Copyright 2018 The Cockroach Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
// implied. See the License for the specific language governing
// permissions and limitations under the License.

/**
 * nullOfReturnType allows us to extract the return type of a function; this is
 * necessary because typescript does not currently have a syntax to directly
 * extract the return type of a function.
 *
 * This is needed in cases where:
 * 1. A function returns an object with a complex type which is not explicitly
 * declared. This occurs, for example, when constructing lookup objects that
 * contain many fields: explicitly declaring the return type results in
 * significant boilerplate which is unnecessary, because typescript knows the
 * type of the variable being returned.
 * 2. We need to declare a variable to hold the output of this function, but
 * cannot immediately assign the output of the function to the variable.
 *
 * The output of nullOfReturnType() cannot be directly fed into a typeof
 * statement; instead, its result must be stored in a variable, and in turn
 * that variable can be used with a typeof statement.
 *
 * An example of extracting type information using nullOfReturnType():
 *
 * function fnWithComplicatedResult() {
 *  return {...};
 * }
 *
 * const complicatedReturnType = nullOfReturnType(fnWithComplicatedReturn);
 * let complicatedVariable: typeof complicatedReturnType;
 */
export function nullOfReturnType<R> (_: (...args: any[]) => R): R {
    return null;
}
