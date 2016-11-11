// Generated by typings
// Source: https://raw.githubusercontent.com/typed-typings/npm-assertion-error/105841317bd2bdd5d110bfb763e49e482a77230d/main.d.ts
declare module '~chai~assertion-error' {
// Type definitions for assertion-error 1.0.0
// Project: https://github.com/chaijs/assertion-error
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

export class AssertionError implements Error {
  constructor(message: string, props?: any, ssf?: Function);
  public name: string;
  public message: string;
  public showDiff: boolean;
  public stack: string;

  /**
   * Allow errors to be converted to JSON for static transfer.
   *
   * @param {Boolean} include stack (default: `true`)
   * @return {Object} object that can be `JSON.stringify`
   */
  public toJSON(stack: boolean): Object;
}
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-chai/793bee097a6a644e078a033603d88ac89eb7b560/lib/Assert.d.ts
declare module '~chai/lib/Assert' {
export interface AssertStatic extends Assert {
}

export interface Assert {
    /**
     * @param expression Expression to test for truthiness.
     * @param message Message to display on error.
     */
    (expression: any, message?: string): void;
    (expression: any, messageCallback: () => string): void;

    fail(actual?: any, expected?: any, msg?: string, operator?: string): void;

    ok(val: any, msg?: string): void;
    isOk(val: any, msg?: string): void;
    notOk(val: any, msg?: string): void;
    isNotOk(val: any, msg?: string): void;

    equal(act: any, exp: any, msg?: string): void;
    notEqual(act: any, exp: any, msg?: string): void;

    strictEqual(act: any, exp: any, msg?: string): void;
    notStrictEqual(act: any, exp: any, msg?: string): void;

    deepEqual(act: any, exp: any, msg?: string): void;
    notDeepEqual(act: any, exp: any, msg?: string): void;

    isTrue(val: any, msg?: string): void;
    isFalse(val: any, msg?: string): void;

    isNotTrue(val: any, msg?: string): void;
    isNotFalse(val: any, msg?: string): void;

    isNull(val: any, msg?: string): void;
    isNotNull(val: any, msg?: string): void;

    isUndefined(val: any, msg?: string): void;
    isDefined(val: any, msg?: string): void;

    isNaN(val: any, msg?: string): void;
    isNotNaN(val: any, msg?: string): void;

    isAbove(val: number, abv: number, msg?: string): void;
    isBelow(val: number, blw: number, msg?: string): void;

    isAtLeast(val: number, atlst: number, msg?: string): void;
    isAtMost(val: number, atmst: number, msg?: string): void;

    isFunction(val: any, msg?: string): void;
    isNotFunction(val: any, msg?: string): void;

    isObject(val: any, msg?: string): void;
    isNotObject(val: any, msg?: string): void;

    isArray(val: any, msg?: string): void;
    isNotArray(val: any, msg?: string): void;

    isString(val: any, msg?: string): void;
    isNotString(val: any, msg?: string): void;

    isNumber(val: any, msg?: string): void;
    isNotNumber(val: any, msg?: string): void;

    isBoolean(val: any, msg?: string): void;
    isNotBoolean(val: any, msg?: string): void;

    typeOf(val: any, type: string, msg?: string): void;
    notTypeOf(val: any, type: string, msg?: string): void;

    instanceOf(val: any, type: Function, msg?: string): void;
    notInstanceOf(val: any, type: Function, msg?: string): void;

    include(exp: string, inc: any, msg?: string): void;
    include(exp: any[], inc: any, msg?: string): void;
    include(exp: Object, inc: Object, msg?: string): void;

    notInclude(exp: string, inc: any, msg?: string): void;
    notInclude(exp: any[], inc: any, msg?: string): void;

    match(exp: any, re: RegExp, msg?: string): void;
    notMatch(exp: any, re: RegExp, msg?: string): void;

    property(obj: Object, prop: string, msg?: string): void;
    notProperty(obj: Object, prop: string, msg?: string): void;
    deepProperty(obj: Object, prop: string, msg?: string): void;
    notDeepProperty(obj: Object, prop: string, msg?: string): void;

    propertyVal(obj: Object, prop: string, val: any, msg?: string): void;
    propertyNotVal(obj: Object, prop: string, val: any, msg?: string): void;

    deepPropertyVal(obj: Object, prop: string, val: any, msg?: string): void;
    deepPropertyNotVal(obj: Object, prop: string, val: any, msg?: string): void;

    lengthOf(exp: any, len: number, msg?: string): void;

    throw(fn: Function, msg?: string): void;
    throw(fn: Function, regExp: RegExp): void;
    throw(fn: Function, errType: Function, msg?: string): void;
    throw(fn: Function, errType: Function, regExp: RegExp): void;

    throws(fn: Function, msg?: string): void;
    throws(fn: Function, regExp: RegExp): void;
    throws(fn: Function, errType: Function, msg?: string): void;
    throws(fn: Function, errType: Function, regExp: RegExp): void;

    Throw(fn: Function, msg?: string): void;
    Throw(fn: Function, regExp: RegExp): void;
    Throw(fn: Function, errType: Function, msg?: string): void;
    Throw(fn: Function, errType: Function, regExp: RegExp): void;

    doesNotThrow(fn: Function, msg?: string): void;
    doesNotThrow(fn: Function, regExp: RegExp): void;
    doesNotThrow(fn: Function, errType: Function, msg?: string): void;
    doesNotThrow(fn: Function, errType: Function, regExp: RegExp): void;

    operator(val: any, operator: string, val2: any, msg?: string): void;
    closeTo(act: number, exp: number, delta: number, msg?: string): void;
    approximately(act: number, exp: number, delta: number, msg?: string): void;

    sameMembers(set1: any[], set2: any[], msg?: string): void;
    sameDeepMembers(set1: any[], set2: any[], msg?: string): void;
    includeMembers(superset: any[], subset: any[], msg?: string): void;
    includeDeepMembers(superset: any[], subset: any[], msg?: string): void;

    ifError(val: any, msg?: string): void;

    isExtensible(obj: {}, msg?: string): void;
    extensible(obj: {}, msg?: string): void;
    isNotExtensible(obj: {}, msg?: string): void;
    notExtensible(obj: {}, msg?: string): void;

    isSealed(obj: {}, msg?: string): void;
    sealed(obj: {}, msg?: string): void;
    isNotSealed(obj: {}, msg?: string): void;
    notSealed(obj: {}, msg?: string): void;

    isFrozen(obj: Object, msg?: string): void;
    frozen(obj: Object, msg?: string): void;
    isNotFrozen(obj: Object, msg?: string): void;
    notFrozen(obj: Object, msg?: string): void;

    oneOf(inList: any, list: any[], msg?: string): void;

    changes(fn: Function, obj: {}, property: string): void;
    doesNotChange(fn: Function, obj: {}, property: string): void;
    increases(fn: Function, obj: {}, property: string): void;
    doesNotIncrease(fn: Function, obj: {}, property: string): void;

    decreases(fn: Function, obj: {}, property: string): void;
    doesNotDecrease(fn: Function, obj: {}, property: string): void;
  }
}
declare module 'chai/lib/Assert' {
export * from '~chai/lib/Assert';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-chai/793bee097a6a644e078a033603d88ac89eb7b560/lib/Assertion.d.ts
declare module '~chai/lib/Assertion' {
export interface AssertionStatic {
  (target?: any, message?: string, stack?: Function): Assertion;
  new (target?: any, message?: string, stack?: Function): Assertion;
}

export interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
  not: Assertion;
  deep: Deep;
  any: KeyFilter;
  all: KeyFilter;
  a: TypeComparison;
  an: TypeComparison;
  include: Include;
  includes: Include;
  contain: Include;
  contains: Include;
  ok: Assertion;
  true: Assertion;
  false: Assertion;
  null: Assertion;
  undefined: Assertion;
  NaN: Assertion;
  exist: Assertion;
  empty: Assertion;
  arguments: Assertion;
  Arguments: Assertion;
  equal: Equal;
  equals: Equal;
  eq: Equal;
  eql: Equal;
  eqls: Equal;
  property: Property;
  ownProperty: OwnProperty;
  haveOwnProperty: OwnProperty;
  ownPropertyDescriptor: OwnPropertyDescriptor;
  haveOwnPropertyDescriptor: OwnPropertyDescriptor;
  length: Length;
  lengthOf: Length;
  match: Match;
  matches: Match;
  string(str: string, message?: string): Assertion;
  keys: Keys;
  key(str: string): Assertion;
  throw: Throw;
  throws: Throw;
  Throw: Throw;
  respondTo: RespondTo;
  respondsTo: RespondTo;
  itself: Assertion;
  satisfy: Satisfy;
  satisfies: Satisfy;
  closeTo: CloseTo;
  approximately: CloseTo;
  members: Members;
  increase: PropertyChange;
  increases: PropertyChange;
  decrease: PropertyChange;
  decreases: PropertyChange;
  change: PropertyChange;
  changes: PropertyChange;
  extensible: Assertion;
  sealed: Assertion;
  frozen: Assertion;
  oneOf(list: any[], message?: string): Assertion;
}

export interface LanguageChains {
  to: Assertion;
  be: Assertion;
  been: Assertion;
  is: Assertion;
  that: Assertion;
  which: Assertion;
  and: Assertion;
  has: Assertion;
  have: Assertion;
  with: Assertion;
  at: Assertion;
  of: Assertion;
  same: Assertion;
}

export interface NumericComparison {
  above: NumberComparer;
  gt: NumberComparer;
  greaterThan: NumberComparer;
  least: NumberComparer;
  gte: NumberComparer;
  below: NumberComparer;
  lt: NumberComparer;
  lessThan: NumberComparer;
  most: NumberComparer;
  lte: NumberComparer;
  within(start: number, finish: number, message?: string): Assertion;
}

export interface NumberComparer {
  (value: number, message?: string): Assertion;
}

export interface TypeComparison {
  (type: string, message?: string): Assertion;
  instanceof: InstanceOf;
  instanceOf: InstanceOf;
}

export interface InstanceOf {
  (constructor: Object, message?: string): Assertion;
}

export interface CloseTo {
  (expected: number, delta: number, message?: string): Assertion;
}

export interface Deep {
  equal: Equal;
  equals: Equal;
  eq: Equal;
  include: Include;
  property: Property;
  members: Members;
}

export interface KeyFilter {
  keys: Keys;
}

export interface Equal {
  (value: any, message?: string): Assertion;
}

export interface Property {
  (name: string, value?: any, message?: string): Assertion;
}

export interface OwnProperty {
  (name: string, message?: string): Assertion;
}

export interface OwnPropertyDescriptor {
  (name: string, descriptor: PropertyDescriptor, message?: string): Assertion;
  (name: string, message?: string): Assertion;
}

export interface Length extends LanguageChains, NumericComparison {
  (length: number, message?: string): Assertion;
}

export interface Include {
  (value: Object, message?: string): Assertion;
  (value: string, message?: string): Assertion;
  (value: number, message?: string): Assertion;
  string(value: string, message?: string): Assertion;
  keys: Keys;
  members: Members;
  any: KeyFilter;
  all: KeyFilter;
}

export interface Match {
  (regexp: RegExp | string, message?: string): Assertion;
}

export interface Keys {
  (...keys: any[]): Assertion;
  (keys: any[]): Assertion;
  (keys: Object): Assertion;
}

export interface Throw {
  (): Assertion;
  (expected: string, message?: string): Assertion;
  (expected: RegExp, message?: string): Assertion;
  (constructor: Error, expected?: string, message?: string): Assertion;
  (constructor: Error, expected?: RegExp, message?: string): Assertion;
  (constructor: Function, expected?: string, message?: string): Assertion;
  (constructor: Function, expected?: RegExp, message?: string): Assertion;
}

export interface RespondTo {
  (method: string, message?: string): Assertion;
}

export interface Satisfy {
  (matcher: Function, message?: string): Assertion;
}

export interface Members {
  (set: any[], message?: string): Assertion;
}

export interface PropertyChange {
  (object: Object, prop: string, msg?: string): Assertion;
}
}
declare module 'chai/lib/Assertion' {
export * from '~chai/lib/Assertion';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-chai/793bee097a6a644e078a033603d88ac89eb7b560/lib/Expect.d.ts
declare module '~chai/lib/Expect' {
import {AssertionStatic} from '~chai/lib/Assertion';

export interface ExpectStatic extends AssertionStatic {
  fail(actual?: any, expected?: any, message?: string, operator?: string): void;
}
}
declare module 'chai/lib/Expect' {
export * from '~chai/lib/Expect';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-chai/793bee097a6a644e078a033603d88ac89eb7b560/lib/Should.d.ts
declare module '~chai/lib/Should' {
export interface Should extends ShouldAssertion {
  not: ShouldAssertion;
  fail(actual: any, expected: any, message?: string, operator?: string): void;
}

export interface ShouldAssertion {
  Throw: ShouldThrow;
  throw: ShouldThrow;
  equal(value1: any, value2: any, message?: string): void;
  exist(value: any, message?: string): void;
}

export interface ShouldThrow {
  (actual: Function): void;
  (actual: Function, expected: string | RegExp, message?: string): void;
  (actual: Function, constructor: Error | Function, expected?: string | RegExp, message?: string): void;
}
}
declare module 'chai/lib/Should' {
export * from '~chai/lib/Should';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-chai/793bee097a6a644e078a033603d88ac89eb7b560/lib/Config.d.ts
declare module '~chai/lib/Config' {
export interface Config {
  includeStack: boolean;
  showDiff: boolean;
  truncateThreshold: number;
}
}
declare module 'chai/lib/Config' {
export * from '~chai/lib/Config';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-chai/793bee097a6a644e078a033603d88ac89eb7b560/lib/Utils.d.ts
declare module '~chai/lib/Utils' {
import {Assertion} from '~chai/lib/Assertion';

export interface PathInfo {
  parent: any;
  name: number|string;
  value: any;
  exists: boolean;
}

export interface Utils {
  addChainableMethod(ctx: any, name: string, chainingBehavior: (value: any) => void): void;
  addMethod(ctx: any, name: string, method: (value: any) => void): void;
  addProperty(ctx: any, name: string, getter: () => void): void;
  expectTypes(obj: Object, types: string[]): void;
  flag(obj: Object, key: string, value?: any): any;
  getActual(obj: Object, actual?: any): any;
  getEnumerableProperties(obj: Object): string[];
  getMessage(obj: Object, params: any[]): string;
  getMessage(obj: Object, message: string, negateMessage: string): string;
  getName(func: Function): string;
  getPathInfo(path: string, obj: Object): PathInfo;
  getPathValue(path: string, obj: Object): any;
  getProperties(obj: Object): string[];
  hasProperty(obj: Object, name: string): boolean;
  transferFlags(assertion: Assertion | any, obj: Object, includeAll?: boolean): void;
  inspect(obj: any): any;
}
}
declare module 'chai/lib/Utils' {
export * from '~chai/lib/Utils';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-chai/793bee097a6a644e078a033603d88ac89eb7b560/lib/Chai.d.ts
declare module '~chai/lib/Chai' {
import * as AE from '~chai~assertion-error';

import * as Assert from '~chai/lib/Assert';
import * as A from '~chai/lib/Assertion';
import * as Expect from '~chai/lib/Expect';
import * as Should from '~chai/lib/Should';
import * as Config from '~chai/lib/Config';
import * as Utils from '~chai/lib/Utils';

namespace chai {
  export interface AssertionStatic extends A.AssertionStatic {}
  export class AssertionError extends AE.AssertionError {}
  export var Assertion: A.AssertionStatic;
  export var expect: Expect.ExpectStatic;
  export var assert: Assert.AssertStatic;
  export var config: Config.Config;
  export var util: Utils.Utils;
  export function should(): Should.Should;
  export function Should(): Should.Should;
  /**
   * Provides a way to extend the internals of Chai
   */
  export function use(fn: (chai: any, utils: Utils.Utils) => void): typeof chai;
}

export = chai;

/* tslint:disable:no-internal-module */
global {
  interface Object {
    should: A.Assertion;
  }
}
}
declare module 'chai/lib/Chai' {
import main = require('~chai/lib/Chai');
export = main;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/types/npm-chai/793bee097a6a644e078a033603d88ac89eb7b560/index.d.ts
declare module 'chai' {
// Type definitions for chai 3.4.0
// Project: http://chaijs.com/
// Original Definitions by: Jed Mao <https://github.com/jedmao/>,
//                 Bart van der Schoor <https://github.com/Bartvds>,
//                 Andrew Brown <https://github.com/AGBrown>,
//                 Olivier Chevet <https://github.com/olivr70>,
//                 Matt Wistrand <https://github.com/mwistrand>

import chai = require('~chai/lib/Chai');

export = chai;
}
