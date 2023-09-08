---
title: Core utilities
eleventyNavigation:
  key: Core utilities
---
These are helper utilities for doing various low level manipulations and such as querying a color's channel values.

#### alpha

**Parameters:**
(color: Color, value?: number): Color | number
*color* **The color with the targeted opacity/alpha channel.**
*value* **The value to apply to the opacity channel. The value is between [0,1]**

**Returns:**
The resulting color. Returns an 8 character hex code.

**Description**
Sets the opacity of a color. Also gets the alpha value of the color if the value parameter is omitted

**Example:**

```javascript



// Example

```

#### darken

**Parameters:**
(color: Color, amount: number): Color
 *color* **The color to darken.**
 *amount* **The amount to darken with. Also supports expressions as strings e.g darken("#fc23a1","*0.5")**

**Returns:**
The darkened color.

**Description:**
Darkens the color by reducing the lightness channel.

**Example:**

```javascript
// Example
```

#### getChannel

**Parameters**
(mc: string) => (color: Color): number
 *mc* **The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color.**
 *color* **The color being queried.**

**Returns:**
The value of the queried channel.

**Description:**
Gets the  value specified channel on the color.

```javascript
// Example
```

#### getLuminance

**Parameters:**
(color: Color): number
*color* **The color to query.**

**Returns:**
The color's luminance value.

**Description:**
Gets the luminance value of that color as defined by WCAG.

```javascript
//Example

```

#### setLuminance

**Parameters:**
(color: Color, lum: number):Color
*color* **The color to set luminance**
*lum* **The amount of luminance to set. The value range is normalised between [0,1].**

**Returns:**
The mutated color with the modified properties.

**Description:**
Sets the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance).

```javascript
// Example

```

#### getTemp

**Parameters:**
(color: Color): number
*color* **The color to query its temperature value**

**Returns:**
The color's temperature in Kelvins.

**Description:**
Gets the temperature value in Kelvins of the passed in color.

**Example:**

```javascript
// Example

```

#### setChannel

**Parameters:**
(mc: string) => (color: Color, value: number | string): Color
*color* **Any recognizable color token.**
 *mc* **The mode and channel to work with. For example 'rgb.b'.**
 *value* **The value to set on the queried channel. Also supports expressions as strings e.g set('lch.c)("#fc23a1","*0.5")**

 **Returns:**
 The mutated color.

 **Description:**
 Sets the value for the specified channel in a color.

 **Example:**

```javascript
// Example
```

#### setTemp

**Parameters:**
(kelvin: number,hex=false): Color
*kelvin* **The number of Kelvins. From 0 to 30,000 .**
*hex* **Optional parameter to either return an RGB or hexadecimal.**

**Returns:**
The color as a hexadecimal string.

**Description:**
Converts the temperature value (in Kelvins) to an RGB color.

**Example:**

```javascript
// Example
```