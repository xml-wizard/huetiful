# Module: wrappers

This module has the lazy wrappers that can bind collections of colors or individual color tokens and perform manipulations on the bound data.

### Functions

- [color](wrappers.md#color)
- [load](wrappers.md#load)

## Functions

### color

▸ **color**(`color`): `Color`

Wrapper function over the Color class that returns a new Color method chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`ColorToken`](types.md#colortoken) | The color token to bind. |

#### Returns

`Color`

A new Color class with all the utilities that take a single color as the first parameter bound to its prototype.

**`Example`**

```ts

```

#### Defined in

[wrappers.d.ts:1468](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1468)

___

### load

▸ **load**(`collection`): [`ColorArray`](../classes/wrappers.ColorArray.md)

A wrapper function over the `ColorArray` class which returns a new instance of the class. Use it to invoke the class without using the `new` keyword

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `object` \| `ArrayLike`\<[`ColorToken`](types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](types.md#colortoken)\> |

#### Returns

[`ColorArray`](../classes/wrappers.ColorArray.md)

#### Defined in

[wrappers.d.ts:1025](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1025)


### Class: ColorArray

[wrappers](../modules/wrappers.md).ColorArray

Creates a lazy chain wrapper over a collection of colors that has all the array methods (functions that take a collection of colors as their first argument).

**`Example`**

```ts
import { ColorArray } from 'huetiful-js'

let sample = ['blue', 'pink', 'yellow', 'green'];
let wrapper = new ColorArray(sample);
// We can even chain the methods and get the result by calling output()

console.log(wrapper.sortByHue('desc', 'lch').output());

// [ 'blue', 'green', 'yellow', 'pink' ]
```

## Table of contents

### Constructors

- [constructor](wrappers.ColorArray.md#constructor)

### Methods

- [discoverPalettes](wrappers.ColorArray.md#discoverpalettes)
- [filterByChroma](wrappers.ColorArray.md#filterbychroma)
- [filterByContrast](wrappers.ColorArray.md#filterbycontrast)
- [filterByDistance](wrappers.ColorArray.md#filterbydistance)
- [filterByHue](wrappers.ColorArray.md#filterbyhue)
- [filterByLightness](wrappers.ColorArray.md#filterbylightness)
- [filterByLuminance](wrappers.ColorArray.md#filterbyluminance)
- [getFarthestChromaFrom](wrappers.ColorArray.md#getfarthestchromafrom)
- [getFarthestHue](wrappers.ColorArray.md#getfarthesthue)
- [getFarthestHueFrom](wrappers.ColorArray.md#getfarthesthuefrom)
- [getFarthestLightness](wrappers.ColorArray.md#getfarthestlightness)
- [getFarthestLightnessFrom](wrappers.ColorArray.md#getfarthestlightnessfrom)
- [getFarthestLuminanceFrom](wrappers.ColorArray.md#getfarthestluminancefrom)
- [getMeanChroma](wrappers.ColorArray.md#getmeanchroma)
- [getMeanContrast](wrappers.ColorArray.md#getmeancontrast)
- [getMeanDistance](wrappers.ColorArray.md#getmeandistance)
- [getMeanHue](wrappers.ColorArray.md#getmeanhue)
- [getMeanLightness](wrappers.ColorArray.md#getmeanlightness)
- [getMeanLuminance](wrappers.ColorArray.md#getmeanluminance)
- [getNearestChromaFrom](wrappers.ColorArray.md#getnearestchromafrom)
- [getNearestColor](wrappers.ColorArray.md#getnearestcolor)
- [getNearestHue](wrappers.ColorArray.md#getnearesthue)
- [getNearestHueFrom](wrappers.ColorArray.md#getnearesthuefrom)
- [getNearestLightness](wrappers.ColorArray.md#getnearestlightness)
- [getNearestLightnessFrom](wrappers.ColorArray.md#getnearestlightnessfrom)
- [getNearestLuminanceFrom](wrappers.ColorArray.md#getnearestluminancefrom)
- [interpolateSpline](wrappers.ColorArray.md#interpolatespline)
- [output](wrappers.ColorArray.md#output)
- [sortByChroma](wrappers.ColorArray.md#sortbychroma)
- [sortByContrast](wrappers.ColorArray.md#sortbycontrast)
- [sortByDistance](wrappers.ColorArray.md#sortbydistance)
- [sortByHue](wrappers.ColorArray.md#sortbyhue)
- [sortByLightness](wrappers.ColorArray.md#sortbylightness)
- [sortByLuminance](wrappers.ColorArray.md#sortbyluminance)

### constructor

• **new ColorArray**(`colors`): `ColorArray`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | `object` \| `ArrayLike`\<[`ColorToken`](../modules/types.md#colortoken)\> \| `Map`\<`any`, [`ColorToken`](../modules/types.md#colortoken)\> | The collection of colors to bind. |

#### Returns

`ColorArray`

#### Defined in

[wrappers.d.ts:32](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L32)

## Methods

### discoverPalettes

▸ **discoverPalettes**(`schemeType?`): `object` \| `Map`\<`any`, [`ColorToken`](../modules/types.md#colortoken)\> \| [`ColorToken`](../modules/types.md#colortoken)[]

Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemeType?` | ``"analogous"`` \| ``"triadic"`` \| ``"tetradic"`` \| ``"complementary"`` | (Optional) The palette type you want to return. |

#### Returns

`object` \| `Map`\<`any`, [`ColorToken`](../modules/types.md#colortoken)\> \| [`ColorToken`](../modules/types.md#colortoken)[]

A `Set` of colors if the `schemeType` parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.

**`Example`**

```ts
import { load } from 'huetiful-js'

let sample = [
 "#ffff00",
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#720000",
 "#600000",
 "#4e0000",
 "#3e0000",
 "#310000",
]

console.log(load(sample).discoverPalettes(sample, "tetradic").output())
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
```

#### Defined in

[wrappers.d.ts:89](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L89)

___

### filterByChroma

▸ **filterByChroma**(`start?`, `end?`, `colorspace?`): `ColorArray`

Returns a `collection` of colors in the specified `saturation/chroma` range from the bound collection.

The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
This means a value in the range `[0,1]` will return, for example if you pass `start` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either `start` or `end` is above 1 AND the `colorspace` in use has an `end` range higher than 1 then the value is treated as if in the unnormalized range else the value is treated as if in the range `[0,100]` and will return the normalized value.

Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `string` \| `number` | The minimum end of the `saturation/chroma` range. |
| `end?` | `number` | The maximum end of the `saturation/chroma` range. |
| `colorspace?` | `Omit`\<`string`, ``"hwb"``\> | The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do. |

#### Returns

`ColorArray`

Collection of filtered colors.

**`See`**

< a href='https://culorijs.org/color-spaces/> For the expected ranges per colorspace.

**`Example`**

```ts
import { load } from 'huetiful-js'

let sample = [
 '#00ffdc',
 '#00ff78',
 '#00c000',
 '#007e00',
 '#164100',
 '#ffff00',
 '#310000',
 '#3e0000',
 '#4e0000',
 '#600000',
 '#720000'
];

console.log(load(sample).filterByChroma(0.1));

// [ '#00ff78', '#00c000', '#007e00', '#ffff00' ]
```

#### Defined in

[wrappers.d.ts:289](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L289)

___

### filterByContrast

▸ **filterByContrast**(`against`, `start?`, `end?`): `ColorArray`

Returns collection of colors within the specified contrast range. The contrast is tested against a comparison (`'against'`) color and the specified contrast ranges.

Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | - |
| `start?` | `string` \| `number` | The minimum end of the contrast range. Default is `1`. |
| `end?` | `number` | The maximum end of the contrast range. The default is `21`. |

#### Returns

`ColorArray`

Collection of filtered colors.

**`Example`**

```ts
import { load } from 'huetiful-js'

let sample = [
 '#00ffdc',
 '#00ff78',
 '#00c000',
 '#007e00',
 '#164100',
 '#ffff00',
 '#310000',
 '#3e0000',
 '#4e0000',
 '#600000',
 '#720000',
]

console.log(load(sample).filterByContrast('green', '>=3'))
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
```

#### Defined in

[wrappers.d.ts:391](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L391)

___

### filterByDistance

▸ **filterByDistance**(`against`, `start?`, `end?`): `ColorArray`

Returns colors with the specified distance range from the bound `collection`. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.

Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | - |
| `start?` | `string` \| `number` | The minimum end of the distance range. |
| `end?` | `number` | The maximum end of the distance range. |

#### Returns

`ColorArray`

Collection of filtered colors.

**`Example`**

```ts
import { load } from 'huetiful-js'

let sample = [
 "#ffff00",
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#720000",
 "#600000",
]

console.log(load(sample)filterByDistance("yellow", 0.1))
// [ '#ffff00' ]
```

#### Defined in

[wrappers.d.ts:355](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L355)

___

### filterByHue

▸ **filterByHue**(`start?`, `end?`): `ColorArray`

Returns colors in the specified hue ranges between 0 to 360.
Supports expression strings for the `start` and `end` parameters e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `string` \| `number` | The minimum end of the `hue` range. |
| `end?` | `string` \| `number` | The maximum end of the `hue` range. |

#### Returns

`ColorArray`

A collecion of the filtered colors.

**`Example`**

```ts
import { load } from 'huetiful-js'

let sample = [
 '#00ffdc',
 '#00ff78',
 '#00c000',
 '#007e00',
 '#164100',
 '#ffff00',
 '#310000',
 '#3e0000',
 '#4e0000',
 '#600000',
 '#720000',
]

load(sample).filterByHue(20, 80)

// [ '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]
```

#### Defined in

[wrappers.d.ts:425](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L425)

___

### filterByLightness

▸ **filterByLightness**(`start?`, `end?`): `ColorArray`

Returns a `collection` of colors in the specified `lightness` range.

The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
This means a value in the range `[0,1]` will return, for example if you pass `start` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either `start` or `end` is above 1 AND the `colorspace` in use has an `end` range higher than 1 then the value is treated as if in the unnormalized range else the value is treated as if in the range `[0,100]` and will return the normalized value.

Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The minimum end of the `lightness` range. |
| `end?` | `number` | The maximum end of the `lightness` range. |

#### Returns

`ColorArray`

Collection of filtered colors.

**`See`**

<a href="https://culorijs.org/color-spaces">Culori's colorspaces page</a> for the expected ranges per colorspace.

**`Example`**

```ts
import { load } from 'huetiful-js'
let sample = [
 '#00ffdc',
 '#00ff78',
 '#00c000',
 '#007e00',
 '#164100',
 '#ffff00',
 '#310000',
 '#3e0000',
 '#4e0000',
 '#600000',
 '#720000',
]

load(sample).filterByLightness(20, 80)

// [ '#00c000', '#007e00', '#164100', '#720000' ]
```

#### Defined in

[wrappers.d.ts:329](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L329)

___

### filterByLuminance

▸ **filterByLuminance**(`start?`, `end?`): `ColorArray`

Returns a `collection` of colors in the specified luminance range. The range is normalised to [0,1].
Supports expression strings for the `start` and `end` parameters e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `string` \| `number` | The minimum end of the luminance range. |
| `end?` | `string` \| `number` | The maximum end of the luminance range. |

#### Returns

`ColorArray`

Collection of filtered colors.

**`Example`**

```ts
import { load } from 'huetiful-js'
let sample = [
 '#00ffdc',
 '#00ff78',
 '#00c000',
 '#007e00',
 '#164100',
 '#ffff00',
 '#310000',
 '#3e0000',
 '#4e0000',
 '#600000',
 '#720000',
]

load(sample).filterByLuminance(0.4, 0.9)

// [ '#00ffdc', '#00ff78' ]
```

#### Defined in

[wrappers.d.ts:454](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L454)

___

### getFarthestChromaFrom

▸ **getFarthestChromaFrom**(`against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the largest chroma/saturation difference between the colors in the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The largest chroma/saturation difference in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 10, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ],
       against = { l: 5, c: 5, h: 5, mode: 'lch' },
       mode='lch'

       console.log(load(sample).getFarthestChromaFrom(against,mode))

       // 35
```

#### Defined in

[wrappers.d.ts:701](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L701)

___

### getFarthestHue

▸ **getFarthestHue**(`colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Returns the largest hue angle from the bound collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `string` | The mode color space to perform the computation in. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The largest hue value in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(load(sample).getFarthestHue('lch'))
// 273.54920266436477
```

#### Defined in

[wrappers.d.ts:106](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L106)

___

### getFarthestHueFrom

▸ **getFarthestHueFrom**(`against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the largest hue angle difference between the colors in the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The largest hue angle difference in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 10, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ],
       against = { l: 5, c: 5, h: 5, mode: 'lch' },
       mode='lch'

       console.log(load(sample).getFarthestHueFrom(against,mode))

       // 35
```

#### Defined in

[wrappers.d.ts:773](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L773)

___

### getFarthestLightness

▸ **getFarthestLightness**(`colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Returns the largest `lightness` value from the bound collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `string` | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with `factor` (lightness) and `name` of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The largest `lightness` value in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(load(sample).getFarthestLightness('lch', true))

// { lightness: 80.94668903360088, name: '#f3bac1' }
```

#### Defined in

[wrappers.d.ts:244](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L244)

___

### getFarthestLightnessFrom

▸ **getFarthestLightnessFrom**(`against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the largest lightness difference between the colors the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The largest lightness difference in the colors passed in or a custom object.

**`Example`**

```ts
import { color } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 10, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ],
       against = { l: 5, c: 5, h: 5, mode: 'lch' },
       mode='lch'

       console.log(load(sample)getFarthestLightnessFrom(against,mode))

       // 35
```

#### Defined in

[wrappers.d.ts:844](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L844)

___

### getFarthestLuminanceFrom

▸ **getFarthestLuminanceFrom**(`against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the largest `luminance` difference between the colors in the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The largest lightness difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { getFarthestLuminanceFrom } from 'huetiful-js'
var sample = [
   { l: 40, c: 20, h: 40, mode: 'lch' },
   { l: 20, c: 10, h: 20, mode: 'lch' },
   { l: 10, c: 40, h: 10, mode: 'lch' }
 ],
 against = { l: 5, c: 5, h: 5, mode: 'lch' };

console.log(getFarthestLuminanceFrom(sample, against));
// 0.10644205738623673
```

#### Defined in

[wrappers.d.ts:217](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L217)

___

### getMeanChroma

▸ **getMeanChroma**(`colorspace?`): `number`

Returns the average `chroma` from the bound `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `string` | The colorspace to fetch the `chroma` channel value from. |

#### Returns

`number`

The average `chroma` in the passed in `collection` or undefined if no color in the `collection` has a valid `chroma` channel.

**`Example`**

```ts
import { color } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 30, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ]

       console.log(color(sample).getMeanChroma())

       // 30
```

#### Defined in

[wrappers.d.ts:909](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L909)

___

### getMeanContrast

▸ **getMeanContrast**(`against?`): `number`

Returns the average `contrast` from the bound `collection` of colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against?` | [`ColorToken`](../modules/types.md#colortoken) | The color to compare the `contrast` against. Used by the `getContrast` function for each color in the `collection`. Default is `black` |

#### Returns

`number`

The average `distance` in the passed in `collection` .

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample = [
   { l: 40, c: 20, h: 40, mode: 'lch' },
   { l: 20, c: 30, h: 20, mode: 'lch' },
   { l: 10, c: 40, h: 10, mode: 'lch' }
 ],
 against = 'blue';

console.log(load(sample).getMeanContrast(against));

// 1.5960886749927419
```

#### Defined in

[wrappers.d.ts:1014](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1014)

___

### getMeanDistance

▸ **getMeanDistance**(`against?`): `number`

Returns the average `distance` from the passed in `collection` of colors using the `differenceHyab` metric. In the future, an option to specify the metric to use when querying the `distance` factor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against?` | [`ColorToken`](../modules/types.md#colortoken) | The color to compare the distance from. Used by the metric function for each color in the `collection`. Default is `black`. |

#### Returns

`number`

The average `distance` in the passed in `collection` .

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample = [
   { l: 40, c: 20, h: 40, mode: 'lch' },
   { l: 20, c: 30, h: 20, mode: 'lch' },
   { l: 10, c: 40, h: 10, mode: 'lch' }
 ],
 against = 'blue';

console.log(load(against).getMeanDistance(sample));

// 142.7183074639663
```

#### Defined in

[wrappers.d.ts:991](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L991)

___

### getMeanHue

▸ **getMeanHue**(`colorspace?`, `excludeGreys?`): `number`

Returns the average `hue` from the bound `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum if `excludeGreys` is `true`. This can help make your color scales make more 'visual sense since the `hue` channel depends on the `chroma` channel to look colorful. This will also alter the final average hue angle returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `string` | The colorspace to fetch the `hue` channel value from. |
| `excludeGreys?` | `boolean` | Optional boolean to filter out achromatic colors from the passed in `collection`. |

#### Returns

`number`

The average `hue` angle in the passed in `collection`.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 10, mode: 'lch' },
         { l: 20, c: 30, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 6, mode: 'lch' }
       ]

       console.log(load(sample).getMeanHue())

       // 12
```

#### Defined in

[wrappers.d.ts:950](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L950)

___

### getMeanLightness

▸ **getMeanLightness**(`colorspace?`): `number`

Returns the average `lightness` from the passed in `collection` of colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `string` | The colorspace to fetch the `lightness` channel value from. |

#### Returns

`number`

The average `lightness` in the passed in `collection`.

**`Example`**

```ts
import { color } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 30, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ]

       console.log(color(sample).getMeanLightness())

       // 20
```

#### Defined in

[wrappers.d.ts:929](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L929)

___

### getMeanLuminance

▸ **getMeanLuminance**(): `number`

Returns the average relative `luminance` from the bound `collection` of colors.

#### Returns

`number`

The average relative `luminance` in the passed in `collection` or undefined if no color in the `collection` has a valid `chroma` channel.

**`Example`**

```ts
import { color } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 30, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ]

       console.log(load(sample).getMeanLuminance())

       // 0.05158704622405754
```

#### Defined in

[wrappers.d.ts:969](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L969)

___

### getNearestChromaFrom

▸ **getNearestChromaFrom**(`against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the smallest chroma/saturation difference between the colors in the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The smallest chroma/saturation difference in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 10, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ],
       against = { l: 5, c: 5, h: 5, mode: 'lch' },
       mode='lch'

       console.log(load(sample).getNearestChromaFrom(against,mode))

       // 5
```

#### Defined in

[wrappers.d.ts:738](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L738)

___

### getNearestColor

▸ **getNearestColor**(`against`, `num?`): [`ColorToken`](../modules/types.md#colortoken) \| `Map`\<`any`, [`ColorToken`](../modules/types.md#colortoken)\> \| [`ColorToken`](../modules/types.md#colortoken)[]

Returns the nearest color(s) in the bound collection against
 *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | The color to use for distance comparison. |
| `num?` | `number` | The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric. |

#### Returns

[`ColorToken`](../modules/types.md#colortoken) \| `Map`\<`any`, [`ColorToken`](../modules/types.md#colortoken)\> \| [`ColorToken`](../modules/types.md#colortoken)[]

An array of colors.

**`Example`**

```ts
import { load } from 'huetiful-js';

let cols = tailwindColors('all', '500')

console.log(load(cols).getNearestColor('blue', 3));
// [ '#a855f7', '#8b5cf6', '#d946ef' ]
```

#### Defined in

[wrappers.d.ts:671](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L671)

___

### getNearestHue

▸ **getNearestHue**(`colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Returns the smallest `hue` angle from the bound `collection`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `string` | The mode color space to perform the computation in. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The smallest hue value in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(load(sample).getNearestHue('lch'))
// 12.462831644544274
```

#### Defined in

[wrappers.d.ts:130](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L130)

___

### getNearestHueFrom

▸ **getNearestHueFrom**(`against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the smallest `hue` angle difference between the colors in the bound collection `against` a comparison color.
 *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The smallest hue angle difference in the colors passed in or a custom object.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 10, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ],
       against = { l: 5, c: 5, h: 5, mode: 'lch' },
       mode='lch'

       console.log(load(sample).getNearestHueFrom(against,mode))

       // 5
```

#### Defined in

[wrappers.d.ts:808](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L808)

___

### getNearestLightness

▸ **getNearestLightness**(`colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Returns the smallest `lightness` value from the bound collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `string` | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The smallest `lightness` value in the colors passed in or a custom object.

**`Example`**

```ts
import { getNeareastLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(load(sample).getNearestLightness('lch', true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }
```

#### Defined in

[wrappers.d.ts:155](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L155)

___

### getNearestLightnessFrom

▸ **getNearestLightnessFrom**(`against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the smallest lightness difference between the colors in the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | The mode colorspace to retrieve the channel being queried. |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is false. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The smallest lightness difference in the colors passed in or a custom object.

**`Example`**

```ts
import { color } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 10, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ],
       against = { l: 5, c: 5, h: 5, mode: 'lch' },
       mode='lch'

       console.log(load(sample).getNearestLightnessFrom(against,mode))

       // 5
```

#### Defined in

[wrappers.d.ts:879](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L879)

___

### getNearestLuminanceFrom

▸ **getNearestLuminanceFrom**(`against`, `colorspace?`, `colorObj?`): `number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

Gets the smallest `luminance` difference between the colors in the bound collection `against` a comparison color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | The color to compare against. This color is used as a subtrahend against each color in the collection. |
| `colorspace?` | `string` | - |
| `colorObj?` | `boolean` | Optional boolean that makes the function return a custom object with factor (`luminance`) and name of the color as keys. Default is `false`. |

#### Returns

`number` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `factor`: `number`  }

The smallest `luminance` difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.

**`Example`**

```ts
import { load } from 'huetiful-js'

var sample =  [
         { l: 40, c: 20, h: 40, mode: 'lch' },
         { l: 20, c: 10, h: 20, mode: 'lch' },
         { l: 10, c: 40, h: 10, mode: 'lch' }
       ],
       against = { l: 5, c: 5, h: 5, mode: 'lch' },

     console.log(load(sample).getNearestLuminanceFrom(against));

// 0.00831940271523677
```

#### Defined in

[wrappers.d.ts:185](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L185)

___

### interpolateSpline

▸ **interpolateSpline**(`colorspace?`, `samples?`, `kind?`, `closed?`, `options?`): `object` \| `Map`\<`any`, [`ColorToken`](../modules/types.md#colortoken)\> \| [`ColorToken`](../modules/types.md#colortoken)[]

Returns a spline interpolator function with customizable interpolation methods (by selecting the `kind` of ), with support for generating color scales for cyclic data (by setting the `closed` parameter to `true`) and optional channel specific overrides.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorspace?` | `string` | The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch. |
| `samples?` | `number` | - |
| `kind?` | ``"natural"`` \| ``"monotone"`` \| ``"basis"`` | The type of the spline interpolation method. Default is basis. |
| `closed?` | `boolean` | Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false |
| `options?` | `Pick`\<[`InterpolatorOptions`](../modules/types.md#interpolatoroptions), ``"easingFn"`` \| ``"hueFixup"``\> | Optional channel specific overrides. |

#### Returns

`object` \| `Map`\<`any`, [`ColorToken`](../modules/types.md#colortoken)\> \| [`ColorToken`](../modules/types.md#colortoken)[]

The discovered palettes.Respects the `ColorToken` type of the first color in the array of colors to interpolate

**`Example`**

```ts
import { load } from 'huetiful-js';

console.log(load(['pink', 'blue']).interpolateSpline('lch', 8));

// [
'#ffc0cb', '#ff9ebe',
'#f97bbb', '#ed57bf',
'#d830c9', '#b800d9',
'#8700eb', '#0000ff'
]
```

#### Defined in

[wrappers.d.ts:56](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L56)

___

### output

▸ **output**(): [`ColorToken`](../modules/types.md#colortoken)

#### Returns

[`ColorToken`](../modules/types.md#colortoken)

Returns the result value from the chain.

#### Defined in

[wrappers.d.ts:1019](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1019)

___

### sortByChroma

▸ **sortByChroma**(`order`, `colorspace?`): `ColorArray`

Sorts colors in the bound collection according to their saturation. Achromatic colors are not supported as they lack a truthy `chroma` or saturation channel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `colorspace?` | `string` | The mode color space to compute the saturation value in. The default is jch . |

#### Returns

`ColorArray`

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

**`Example`**

```ts
import { load } from "huetiful-js";
let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
];

let sorted = load(sample).sortByChroma();
console.log(sorted);

// [
 '#310000', '#3e0000',
 '#164100', '#4e0000',
 '#600000', '#720000',
 '#00ffdc', '#007e00',
 '#00ff78', '#00c000',
 '#ffff00'
]

let sortedDescending = sortByChroma(sample,'desc');
console.log(sortedDescending)
// [
 '#ffff00', '#00c000',
 '#00ff78', '#007e00',
 '#00ffdc', '#720000',
 '#600000', '#4e0000',
 '#164100', '#3e0000',
 '#310000'
]
```

#### Defined in

[wrappers.d.ts:601](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L601)

___

### sortByContrast

▸ **sortByContrast**(`against`, `order?`): `ColorArray`

Sorts colors in the bound collection according to their contrast value as defined by WCAG. The contrast is tested against a comparison color (the 'against' param)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | - |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

`ColorArray`

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

**`Example`**

```ts
import { load } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(load(sample).sortByContrast('yellow'))
// [ 'red', 'green', 'brown', 'purple' ]

console.log(load(sample).sortByContrast('yellow', 'desc'))
// [ 'purple', 'brown', 'green', 'red' ]
```

#### Defined in

[wrappers.d.ts:619](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L619)

___

### sortByDistance

▸ **sortByDistance**(`against`, `order?`): `ColorArray`

Sorts colors according to their Euclidean distance. The distance factor is determined by the color space used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the array i.e it sorts the colors against the dist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array. |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

`ColorArray`

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

**`Example`**

```ts
import { load } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 load(sample)sortByDistance('yellow', 'asc')
)

// [ 'brown', 'red', 'green', 'purple' ]

let sample = ['purple', 'green', 'red', 'brown']
console.log(
 sortByDistance(sample, 'yellow', 'asc', {
   mode: 'lch',
 })
)

// [ 'green', 'brown', 'red', 'purple' ]
```

#### Defined in

[wrappers.d.ts:517](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L517)

___

### sortByHue

▸ **sortByHue**(`order?`, `colorspace?`): `ColorArray`

Sorts colors in the bound collection according to hue values. It works with any color space with a hue channel. Note that hue values between `hsl` and `lch` do not align. Achromatic colors are not supported.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |
| `colorspace?` | `string` | The colorspace to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results. |

#### Returns

`ColorArray`

A collection of the sorted color values.

**`Example`**

```ts
let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
];

let sortedDescending = load(sample)sortByHue('desc');
console.log(sortedDescending)
// [
 '#00ffdc', '#00ff78',
 '#007e00', '#00c000',
 '#164100', '#ffff00',
 '#720000', '#600000',
 '#4e0000', '#3e0000',
 '#310000'
]
```

#### Defined in

[wrappers.d.ts:655](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L655)

___

### sortByLightness

▸ **sortByLightness**(`order?`): `ColorArray`

Sorts colors in the bound collection according to their lightness.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

`ColorArray`

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

**`Example`**

```ts
import { load } from "huetiful-js";

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
]

load(sample).sortByLightness('desc')

// [
 '#ffff00', '#00ffdc',
 '#00ff78', '#00c000',
 '#007e00', '#164100',
 '#720000', '#600000',
 '#4e0000', '#3e0000',
 '#310000'
]
```

#### Defined in

[wrappers.d.ts:491](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L491)

___

### sortByLuminance

▸ **sortByLuminance**(`order?`): `ColorArray`

Sorts colors in the bound collection according to the relative brightness as defined by WCAG.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order?` | ``"asc"`` \| ``"desc"`` | The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc') |

#### Returns

`ColorArray`

The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.

**`Example`**

```ts
import { load } from "huetiful-js";
let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000",
 "#007e00",
 "#164100",
 "#ffff00",
 "#310000",
 "#3e0000",
 "#4e0000",
 "#600000",
 "#720000",
];

let sortedDescending = load(sample).sortByLuminance("desc");
console.log(sortedDescending)
// [
 '#ffff00', '#00ffdc',
 '#00ff78', '#00c000',
 '#007e00', '#164100',
 '#720000', '#600000',
 '#4e0000', '#3e0000',
 '#310000'
]
```

#### Defined in

[wrappers.d.ts:554](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L554)


# Class: Color

[wrappers](../modules/wrappers.md).Color

Creates a lazy chain wrapper over a single color token that has all the functions that take a `ColorToken` as their first argument.

**`Example`**

```ts
import { Color } from 'huetiful-js'

let wrapper = new Color('pink');

console.log(wrapper.color2hex());
// #ffc0cb
```

## Table of contents

### Constructors

- [constructor](wrappers.Color.md#constructor)

### Methods

- [alpha](wrappers.Color.md#alpha)
- [color2hex](wrappers.Color.md#color2hex)
- [contrast](wrappers.Color.md#contrast)
- [deficiency](wrappers.Color.md#deficiency)
- [earthtone](wrappers.Color.md#earthtone)
- [getChannel](wrappers.Color.md#getchannel)
- [getComplimentaryHue](wrappers.Color.md#getcomplimentaryhue)
- [getHueFamily](wrappers.Color.md#gethuefamily)
- [hueShift](wrappers.Color.md#hueshift)
- [isAchromatic](wrappers.Color.md#isachromatic)
- [isCool](wrappers.Color.md#iscool)
- [isWarm](wrappers.Color.md#iswarm)
- [luminance](wrappers.Color.md#luminance)
- [output](wrappers.Color.md#output)
- [overtone](wrappers.Color.md#overtone)
- [pairedScheme](wrappers.Color.md#pairedscheme)
- [pastel](wrappers.Color.md#pastel)
- [saturation](wrappers.Color.md#saturation)
- [scheme](wrappers.Color.md#scheme)
- [setChannel](wrappers.Color.md#setchannel)
- [via](wrappers.Color.md#via)

## Constructors

### constructor

• **new Color**(`c`, `options?`): `Color`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`ColorToken`](../modules/types.md#colortoken) |
| `options?` | [`ColorOptions`](../modules/types.md#coloroptions) |

#### Returns

`Color`

#### Defined in

[wrappers.d.ts:1042](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1042)

## Methods

### alpha

▸ **alpha**(`amount?`): `number` \| `Color`

Sets/Gets the opacity or `alpha` channel of a color. If the `value` parameter is omitted it gets the bound color's `alpha` value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount?` | `string` \| `number` |

#### Returns

`number` \| `Color`

color The resulting color. Preserves the bound `ColorToken` type.

**`Example`**

```ts
import { color } from 'huetiful-js';

// Getting the alpha
console.log(color('#a1bd2f0d').alpha())
// 0.050980392156862744

// Setting the alpha
let myColor = color('b2c3f1')alpha(0.5)

console.log(myColor)

// #b2c3f180
```

#### Defined in

[wrappers.d.ts:1064](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1064)

___

### color2hex

▸ **color2hex**(): `string`

Returns the bound `ColorToken` as a hexadecimal string.

#### Returns

`string`

#### Defined in

[wrappers.d.ts:1109](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1109)

___

### contrast

▸ **contrast**(`against`): `number`

Gets the contrast value between the bound and  comparison ( or `against`) color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `against` | [`ColorToken`](../modules/types.md#colortoken) | The color to use for comparison. |

#### Returns

`number`

The contrast value between the two colors.

**`Example`**

```ts
import { color } from 'huetiful-js'

console.log(color('pink').contrast('yellow'))
// 1.4322318222624262
```

#### Defined in

[wrappers.d.ts:1221](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1221)

___

### deficiency

▸ **deficiency**(`deficiencyType?`, `severity?`): [`ColorToken`](../modules/types.md#colortoken)

Returns the bound color as a simulation of the specified type of color vision deficiency with the deficiency filter's intensity determined by the `severity` value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deficiencyType?` | ``"red"`` \| ``"blue"`` \| ``"green"`` \| ``"monochromacy"`` | The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' can't perceive `'blue'` light properly. Default is `'red'` when the defeciency parameter is `undefined`. |
| `severity?` | `number` | The intensity of the filter in the range [0,1]. |

#### Returns

[`ColorToken`](../modules/types.md#colortoken)

The color as its simulated variant. Preserves the bound `ColorToken` type.

**`Example`**

```ts
import { color } from 'huetiful-js'

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
let tritanomaly = color(['rgb', 230, 100, 50, 0.5]).colorDeficiency('blue', 0.1)
console.log(tritanomaly)
// #dd663680

// Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
let protanopia = color({ h: 20, w: 50, b: 30, mode: 'hwb' }).colorDeficiency('red')
console.log(protanopia)
// #9f9f9f
```

#### Defined in

[wrappers.d.ts:1405](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1405)

___

### earthtone

▸ **earthtone**(`options?`): [`ColorArray`](wrappers.ColorArray.md) \| `Color`

Returns a spline interpolation between an `earthtone` and the bound color. Call `output()` to get the results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`EarthtoneOptions`](../modules/types.md#earthtoneoptions) | Optional overrides for customizing interpolation and easing functions. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md) \| `Color`

The collection of colors resulting from the earthtone interpolation. Preserves the `ColorToken` type of the bound color.

**`Example`**

```ts
import { color } from 'huetiful-js'

let base = 'purple'

console.log(color(base).earthtone({iterations:8}))

ColorArray {
colors: [
 '#352a21', '#3e2825',
 '#4c2624', '#5f2028',
 '#741033', '#860040',
 '#940049', '#99004b'
]
}

console.log(color(base).earthtone({ iterations:8 }).output())
// call output() to only get results array

// [
 '#352a21', '#3e2825',
 '#4c2624', '#5f2028',
 '#741033', '#860040',
 '#940049', '#99004b'
]
```

#### Defined in

[wrappers.d.ts:1207](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1207)

___

### getChannel

▸ **getChannel**(`modeChannel`): `number`

Returns the specified channel value on the bound color token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `modeChannel` | `string` |

#### Returns

`number`

value The value of the queried channel.

**`Example`**

```ts
import { color } from 'huetiful-js'

console.log(color('#a1bd2f').getChannel('rgb.g'))
// 0.7411764705882353
```

#### Defined in

[wrappers.d.ts:1079](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1079)

___

### getComplimentaryHue

▸ **getComplimentaryHue**(`colorObj?`): `Color` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `hue`: [`HueFamily`](../modules/types.md#huefamily) \| ``"gray"``  }

Returns the complementary hue of the bound color. The function may behave unexpectedly when you pass in an achromatic color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorObj?` | `boolean` | Optional boolean whether to return a custom object with the color `name` and `hueFamily` as keys or just the result color. Default is `false`. |

#### Returns

`Color` \| \{ `color`: [`ColorToken`](../modules/types.md#colortoken) ; `hue`: [`HueFamily`](../modules/types.md#huefamily) \| ``"gray"``  }

A custom object if `colorObj` is `true` else the complimentary color. Preserves the bound `Colortoken` type.

**`Example`**

```ts
import { color } from "huetiful-js";

console.log(color("pink").getComplimentaryHue(true))
// { hue: 'blue-green', color: '#97dfd7ff' }
```

#### Defined in

[wrappers.d.ts:1169](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1169)

___

### getHueFamily

▸ **getHueFamily**(): `string`

Returns the hue family of the bound color with the overtone included (if it has one). For achromatic colors it returns `"gray"`.

#### Returns

`string`

The name of the hue family for example `red` or `blue-green`.

**`Example`**

```ts
import { color } from 'huetiful-js'

console.log(color("#310000").getHueFamily())
// red
```

#### Defined in

[wrappers.d.ts:1439](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1439)

___

### hueShift

▸ **hueShift**(`options?`): [`ColorArray`](wrappers.ColorArray.md)

Returns a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down) from a single color. `maxLightness` and `minLightness` values determine how light or dark our colour will be at either extreme. Call `output()` to get the result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`HueShiftOptions`](../modules/types.md#hueshiftoptions) | The optional overrides object to customize the `HueShiftOptions` like easing function. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

An array of colors. The length of the resultant array is the number of iterations multiplied by 2 plus the scheme color passed or `(iterations * 2) + 1`. Preserves the passed in `ColorToken` type.

**`Example`**

```ts
import { color } from "huetiful-js";

let hueShiftedPalette = color("#3e0000").hueShift({ iterations:1 });

console.log(hueShiftedPalette);

// [
 '#ffffe1', '#ffdca5',
 '#ca9a70', '#935c40',
 '#5c2418', '#3e0000',
 '#310000', '#34000f',
 '#38001e', '#3b002c',
 '#3b0c3a'
]
```

#### Defined in

[wrappers.d.ts:1155](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1155)

___

### isAchromatic

▸ **isAchromatic**(): `boolean`

Returns `true` if the bound color has hue or is grayscale else `false`.

#### Returns

`boolean`

True if the color is achromatic else false.

**`Example`**

```ts
import { color } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori"

var test = c => color(c).isAchromatic()

test('pink')
// false

let sample = [
 "#164100",
 "#ffff00",
 "#310000",
 'pink'
];

console.log(sample.map(test));

// [false, false, false,false]

test('gray')

// true

// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = samples(12).map((c) => formatHex8(f(c)));
console.log(grays.map(test));

//
[ false, true, true,
 true,  true, true,
 true,  true, true,
 true,  true, false
]
```

#### Defined in

[wrappers.d.ts:1339](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1339)

___

### isCool

▸ **isCool**(): `boolean`

Returns `true` if color the bound color can be roughly classified as a cool color else `false`.

#### Returns

`boolean`

**`Example`**

```ts
import { color } from 'huetiful-js'

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000"
];

console.log(color(sample[2]).isCool());
// false
```

#### Defined in

[wrappers.d.ts:1383](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1383)

___

### isWarm

▸ **isWarm**(): `boolean`

Returns `true` if color the bound color can be roughly classified as a warm color else `false`.

#### Returns

`boolean`

**`Example`**

```ts
import { color } from 'huetiful-js'

let sample = [
 "#00ffdc",
 "#00ff78",
 "#00c000"
];

console.log(color(sample[2]).isWarm());
//true
```

#### Defined in

[wrappers.d.ts:1360](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1360)

___

### luminance

▸ **luminance**(`amount?`): `number` \| `Color`

Sets/Gets the `luminance` value of the bound color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `string` \| `number` | The `luminance` value to set on the bound color. |

#### Returns

`number` \| `Color`

The `luminance` value if the method is called with no arguments else it returns a color with its `luminance `value mutated.

**`Example`**

```ts
import { color } from 'huetiful-js'

let myColor = 'green';
console.log(color(myColor).luminance());
// 0.1543834296814607

console.log(color(myColor)._luminance);
// 0.1543834296814607

console.log(color(myColor).luminance(0.5));

// It returns
Color {
alpha: 1,
_color: '#008000',
_luminance: 0.5,
lightness: 46.27770902748027,
colorspace: 'lch',
_saturation: undefined,
lightMode: '#f3f4f6',
darkMode: '#1f2937'
}
```

#### Defined in

[wrappers.d.ts:1253](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1253)

___

### output

▸ **output**(): `any`

Returns the final value from the chain.

#### Returns

`any`

**`Example`**

```ts
import { color } from 'huetiful-js'

let myOutput = color(['rgb',200,34,65]).output()

console.log(myOutput)
// ['rgb',200,34,65]
```

#### Defined in

[wrappers.d.ts:1267](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1267)

___

### overtone

▸ **overtone**(): `string` \| `boolean`

Returns the hue which is biasing the passed in color.

#### Returns

`string` \| `boolean`

The name of the overtone hue. If an achromatic color is passed in it return the string `'gray'` otherwise if the color has no bias it returns false.

**`Example`**

```ts
console.log(color("fefefe").overtone())
// 'gray'

console.log(color("cyan").overtone())
// 'green'

console.log(color("blue").overtone())
// false
```

#### Defined in

[wrappers.d.ts:1425](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1425)

___

### pairedScheme

▸ **pairedScheme**(`options?`): [`ColorArray`](wrappers.ColorArray.md)

Returns a palette that contains a base color that is incremented by a `hueStep` to get the final hue to pair with.The colors are interpolated via white or black. A negative `hueStep` will pick a color that is `n` degrees behind the base color. Call `output()` to get the final result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`PairedSchemeOptions`](../modules/types.md#pairedschemeoptions) | The optional overrides object to customize per channel options like interpolation methods and channel fixups. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

An array containing the paired scheme.

**`Example`**

```ts
import { color } from 'huetiful-js'

console.log(color("green").pairedScheme({hueStep:6,samples:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
```

#### Defined in

[wrappers.d.ts:1134](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1134)

___

### pastel

▸ **pastel**(): `Color`

Returns a randomized pastel variant of the bound color token. Preserves the bound `ColorToken` type.

#### Returns

`Color`

**`Example`**

```ts
import { color } from 'huetiful-js';

console.log(color("green").pastel())

// #036103ff
```

#### Defined in

[wrappers.d.ts:1122](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1122)

___

### saturation

▸ **saturation**(`amount?`): `any`

Sets/Gets the saturation value of the bound color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `string` \| `number` | The amount of `saturation` to set on the bound color token. See also the supported string expressions in the docs. |

#### Returns

`any`

The `saturation` value if the method is called with no arguments else it returns a color with its `saturation` value mutated.

**`See`**

https://huetiful-js.com/basics/string-expressions

**`Example`**

```ts
import { color } from 'huetiful-js'

let myColor = ['hsl',200,0.09,0.5]

console.log(color(myColor).saturation())
// 0.3

console.log(color(myColor).saturation("*0.3"))

// ['hsl',200,0.09,0.5]
```

#### Defined in

[wrappers.d.ts:1289](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1289)

___

### scheme

▸ **scheme**(`schemeType`, `easingFunc?`): [`ColorArray`](wrappers.ColorArray.md)

Returns a randomised classic color scheme from the bound color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schemeType` | ``"analogous"`` \| ``"triadic"`` \| ``"tetradic"`` \| ``"complementary"`` | Any classic color scheme either `"analogous"\|"triadic"\|"tetradic"\|"complementary"\|"splitComplementary"`. |
| `easingFunc?` | (`t`: `number`) => `number` | The easing function to apply to the palette. It's applied on the `hue` channel. |

#### Returns

[`ColorArray`](wrappers.ColorArray.md)

The collection of colors. Elements in the array depend on the number of sample colors in the targeted scheme. Preserves the type of the bound `ColorToken` as elements of the collection.

**`Example`**

```ts
import { color  } from 'huetiful-js'

console.log(color("#a1bd2f").scheme("triadic"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
```

#### Defined in

[wrappers.d.ts:1454](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1454)

___

### setChannel

▸ **setChannel**(`modeChannel`, `value`): `Color`

Sets the specified channel value on the bound color token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modeChannel` | `string` | - |
| `value` | `string` \| `number` | The value to set on the queried channel. Also supports expressions as strings e.g `"#fc23a1"` `"*0.5"` |

#### Returns

`Color`

The mutated color. Preserves the bound in `ColorToken` type.

**`Example`**

```ts
import { color } from 'huetiful-js'

let myColor = color('green').setChannel('lch.h',10)

console.log(myColor.getChannel('lch.h'))
// 10
```

#### Defined in

[wrappers.d.ts:1097](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1097)

___

### via

▸ **via**(`origin`, `t?`, `options?`): `string`

Interpolates the bound color via the `origin` at the point `t`. Call `output()` to get the results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | [`ColorToken`](../modules/types.md#colortoken) | The color to interpolate via. |
| `t?` | `number` | The point in the interpolation to return. Expected value is in the range [0,1] |
| `options?` | [`InterpolatorOptions`](../modules/types.md#interpolatoroptions) | Overrides object to customize the easing and the interpolation methods /fixups. |

#### Returns

`string`

The result of the interpolation. Preserves the bound `ColorToken` type.

#### Defined in

[wrappers.d.ts:1105](https://github.com/prjctimg/huetiful/blob/12f39ea/types/wrappers.d.ts#L1105)
