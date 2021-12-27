[@webiny/validation](../README.md) / [Exports](../modules.md) / Validation

# Class: Validation

Main class of Validation library.
Exported as a singleton instance, it offers methods for sync/async data validation and overwriting or adding new validators.

**`example`**
import { validation } from '@webiny/validation';

// `validation` is a preconfigured instance of Validation class.
// From here you can either add new validators or use it as-is.

## Table of contents

### Constructors

- [constructor](Validation.md#constructor)

### Properties

- [\_\_validators](Validation.md#__validators)

### Methods

- [\_\_parseValidateProperty](Validation.md#__parsevalidateproperty)
- [create](Validation.md#create)
- [createSync](Validation.md#createsync)
- [getValidator](Validation.md#getvalidator)
- [setValidator](Validation.md#setvalidator)
- [validate](Validation.md#validate)
- [validateSync](Validation.md#validatesync)

## Constructors

### constructor

• **new Validation**()

#### Defined in

[packages/validation/src/validation.ts:34](https://github.com/webiny/webiny-js/blob/e526d617a8/packages/validation/src/validation.ts#L34)

## Properties

### \_\_validators

• `Private` **\_\_validators**: `Object`

Contains a list of all set validators.

#### Index signature

▪ [key: `string`]: `Validator`

#### Defined in

[packages/validation/src/validation.ts:32](https://github.com/webiny/webiny-js/blob/e526d617a8/packages/validation/src/validation.ts#L32)

## Methods

### \_\_parseValidateProperty

▸ `Private` **__parseValidateProperty**(`validators`): `ParsedValidators`

Parses a string of validators with parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validators` | `string` | A list of comma-separated validators (eg. required,number,gt:20). |

#### Returns

`ParsedValidators`

#### Defined in

[packages/validation/src/validation.ts:159](https://github.com/webiny/webiny-js/blob/e526d617a8/packages/validation/src/validation.ts#L159)

___

### create

▸ **create**(`validators`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `validators` | `string` |

#### Returns

`any`

#### Defined in

[packages/validation/src/validation.ts:135](https://github.com/webiny/webiny-js/blob/e526d617a8/packages/validation/src/validation.ts#L135)

___

### createSync

▸ **createSync**(`validators`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `validators` | `string` |

#### Returns

`any`

#### Defined in

[packages/validation/src/validation.ts:144](https://github.com/webiny/webiny-js/blob/e526d617a8/packages/validation/src/validation.ts#L144)

___

### getValidator

▸ **getValidator**(`name`): `Validator`

Get validator function by name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Validator name. |

#### Returns

`Validator`

A validator function.

#### Defined in

[packages/validation/src/validation.ts:54](https://github.com/webiny/webiny-js/blob/e526d617a8/packages/validation/src/validation.ts#L54)

___

### setValidator

▸ **setValidator**(`name`, `callable`): [`Validation`](Validation.md)

Add new validator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Validator name. |
| `callable` | `Validator` | Validator function which throws a ValidationError if validation fails. |

#### Returns

[`Validation`](Validation.md)

#### Defined in

[packages/validation/src/validation.ts:44](https://github.com/webiny/webiny-js/blob/e526d617a8/packages/validation/src/validation.ts#L44)

___

### validate

▸ **validate**(`value`, `validators`, `options?`): `Promise`<`boolean` \| [`ValidationError`](ValidationError.md)\>

Asynchronously validates value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | Value to validate. |
| `validators` | `string` | A list of comma-separated validators (eg. required,number,gt:20). |
| `options` | `ValidateOptions` | - |

#### Returns

`Promise`<`boolean` \| [`ValidationError`](ValidationError.md)\>

#### Defined in

[packages/validation/src/validation.ts:68](https://github.com/webiny/webiny-js/blob/e526d617a8/packages/validation/src/validation.ts#L68)

___

### validateSync

▸ **validateSync**(`value`, `validators`, `options?`): `boolean` \| [`ValidationError`](ValidationError.md)

Synchronously validates value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | Value to validate. |
| `validators` | `string` | A list of comma-separated validators (eg. required,number,gt:20). |
| `options` | `ValidateOptions` | - |

#### Returns

`boolean` \| [`ValidationError`](ValidationError.md)

#### Defined in

[packages/validation/src/validation.ts:105](https://github.com/webiny/webiny-js/blob/e526d617a8/packages/validation/src/validation.ts#L105)
