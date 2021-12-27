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
        -   [Error](#error)

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

Type: class


```ts


```
