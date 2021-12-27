# `@webiny/error`
[![](https://img.shields.io/npm/dw/@webiny/error.svg)](https://www.npmjs.com/package/@webiny/error)
[![](https://img.shields.io/npm/v/@webiny/error.svg)](https://www.npmjs.com/package/@webiny/error)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

An extended version of the native `Error` class.

## Table of Contents

-   [Installation](#installation)
-   [Overview](#overview)
-   [Examples](#examples)
-   [Reference](#reference)
    -   [Classes](#classes)
        -   [`Error`](#error)

## Installation

```
npm install --save @webiny/error
```

Or if you prefer yarn:

```
yarn add @webiny/error
```


## Overview

The Error component exported from the `@webiny/error` package is a regular error, except extended with additional fields.

The `WError` class is used as any other Error class. Simply import it from `@webiny/error` and use it.

```ts
import Error from "@webiny/error";

if (new Date().getFullYear() > 2021) {
  throw new Error({
    message: "Year must be greater than 2021.",
    code: "YEAR_NOT_GT_2021",
    data: {
      xyz: 123
    }
  });
}
```


## Examples

| Example | Description |
| ------- | ----------- |
| [Basic Usage](./docs/examples/basicUsage.md) | Shows basic usage of the &#x60;Error&#x60; class. |
| [Custom Error Classes](./docs/examples/customClasses.md) | Shows how to create custom &#x60;Error&#x60; classes. |

## Reference

### Classes

#### `Error`

[@webiny/error](../README.md) / [Exports](../modules.md) / Error

# Class: Error<TData\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `any` |

## Hierarchy

- `Error`

  ↳ **`Error`**

## Table of contents

### Constructors

- [constructor](Error.md#constructor)

### Properties

- [code](Error.md#code)
- [data](Error.md#data)
- [message](Error.md#message)
- [name](Error.md#name)
- [stack](Error.md#stack)
- [prepareStackTrace](Error.md#preparestacktrace)
- [stackTraceLimit](Error.md#stacktracelimit)

### Methods

- [captureStackTrace](Error.md#capturestacktrace)
- [from](Error.md#from)

## Constructors

### constructor

• **new Error**<`TData`\>(`message`, `code?`, `data?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | `string` \| `ErrorOptions`<`TData`\> | `undefined` |
| `code` | `string` | `null` |
| `data` | `TData` | `null` |

#### Overrides

Error.constructor

#### Defined in

[packages/error/src/Error.ts:11](https://github.com/webiny/webiny-js/blob/e526d617a8/packages/error/src/Error.ts#L11)

## Properties

### code

• `Optional` **code**: `string`

#### Defined in

[packages/error/src/Error.ts:9](https://github.com/webiny/webiny-js/blob/e526d617a8/packages/error/src/Error.ts#L9)

___

### data

• `Optional` **data**: `TData`

#### Defined in

[packages/error/src/Error.ts:10](https://github.com/webiny/webiny-js/blob/e526d617a8/packages/error/src/Error.ts#L10)

___

### message

• **message**: `string`

#### Overrides

Error.message

#### Defined in

[packages/error/src/Error.ts:8](https://github.com/webiny/webiny-js/blob/e526d617a8/packages/error/src/Error.ts#L8)

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:140

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:142

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `Object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:133

___

### from

▸ `Static` **from**<`TData`\>(`err`, `options?`): [`Error`](Error.md)<`any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |
| `options` | `ErrorOptions`<`TData`\> |

#### Returns

[`Error`](Error.md)<`any`\>

#### Defined in

[packages/error/src/Error.ts:23](https://github.com/webiny/webiny-js/blob/e526d617a8/packages/error/src/Error.ts#L23)
