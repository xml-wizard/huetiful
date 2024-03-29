import 'culori/css';
import {
  ColorToken,
  HueColorSpaces,
  HueFamily,
  UniformColorSpaces
} from './types';

/**
 *
 * Gets the hue family which a color belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".
 * @param color The color to query its shade or hue family.
 * @returns The name of the hue family for example `red` or `blue-green`.
 * @example
 *
 * import { getHueFamily } from 'huetiful-js'


console.log(getHueFamily("#310000"))
// red
 */
declare function getHueFamily(color: ColorToken): string;
/**
 *
 *  Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.
 * @param color The color to check the temperature.
 * @returns True if the color is cool else false.
 * @example
 *
 * import { isCool } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];


console.log(isCool(sample[2]));
// false

console.log(map(sample, isCool));

// [ true,  false, true]



 */
declare function isCool(color: ColorToken): boolean;
/**
 * @experimental
 * Checks if a color can be roughly classified as a warm color. Returns true if color is a warm color else false.
 * @param color The color to check the temperature.
 * @returns True if the color is warm else false.
 * @example 
 * import { isWarm } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];



console.log(isWarm(sample[2]));
//true

console.log(sample.map(isWarm));


// [ false, true,  false]

 */
declare function isWarm(color: ColorToken): boolean;
/**
 *
 * Returns the complementary hue of the passed in color. The function is internally guarded against achromatic colors.
 * @param color The color to retrieve its complimentary hue.
 * @param colorObj Optional boolean whether to return an object with the result color hue family or just the result color. Default is `false`.
 * @returns An object with the hue family and complimentary color as keys.
 * @example
 *import { getComplimentaryHue } from "huetiful-js";
 *
 *
console.log(getComplimentaryHue("pink",'lch', true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(getComplimentaryHue("purple"))
// #005700ff
 */
declare function getComplimentaryHue(
  color: ColorToken,
  colorObj?: boolean
):
  | {
      hue: string;
      color: ColorToken;
    }
  | ColorToken;
/**
 *
 *  Sets the value for the specified channel in a color.
 * @param  color Any recognizable color token.
 * @param  mc The mode and channel to work with. For example 'rgb.b'.
 * @param  value The value to set on the queried channel. Also supports expressions as strings e.g set('lch.c)("#fc23a1","*0.5")
 * @returns color The mutated color. Preserves the `ColorToken` type of the passed in color.
 *
 * @example
 *
 * import { setChannel } from 'huetiful-js'

let myColor = setChannel('lch.h')('green',10)

console.log(getChannel('lch.h')(myColor))
// 10
 */
declare function setChannel(
  mc: string
): (color: ColorToken, value: number | string) => ColorToken;
/**
 *
 *  Gets the  value specifified channel on the color.
 * @param mc The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color.
 * @param color The color being queried.
 * @returns value The value of the queried channel.
 * @example
 *
 * import { getChannel } from 'huetiful-js'

console.log(getChannel('rgb.g')('#a1bd2f'))
// 0.7411764705882353
 * */
declare function getChannel(mc: string): (color: ColorToken) => number;
/** @alias
 * Gets the luminance value of that color as defined by WCAG.
 * @param color The color to query.
 * @returns value The color's luminance value.
 * @example
 *
 * import { getLuminance,colors } from 'huetiful-js'

console.log(getLuminance('#a1bd2f'))
// 0.4417749513730954

console.log(colors('all', '400').map(getLuminance));

// [
   0.3595097699638928,  0.3635745068550118,
   0.3596908494424909,  0.3662525955988395,
  0.36634113914916244, 0.32958967582076004,
  0.41393242740130043,  0.5789820793721787,
   0.6356386777636567,  0.6463720036841869,
   0.5525691083297639,  0.4961850321908156,
   0.5140644334784611,  0.4401325598899415,
  0.36299191043315415,  0.3358285501372504,
  0.34737270839643575, 0.37670102542883394,
   0.3464512307705231, 0.34012939384198054
]
 */
declare function getLuminance(color: ColorToken): number;
/**
 *
 *  Sets the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance).
 * @param color The color to set luminance
 * @param lum The amount of luminance to set. The value range is normalised between [0,1]
 * @returns The mutated color with the modified properties. Preserves the `ColorToken` type of the passed in color.
 * @example
 *
 * import { setLuminance, getLuminance } from 'huetiful-js'

let myColor = setLuminance('#a1bd2f', 0.5)

console.log(getLuminance(myColor))
// 0.4999999136285792
 */
declare function setLuminance(color: ColorToken, lum: number): ColorToken;
/**
 *
 * Sets the opacity of a color. Also gets the alpha value of the color if the value param is omitted
 * @param color The color with the targeted opacity/alpha channel.
 * @param value The value to apply to the opacity channel. The value is between [0,1]
 * @returns color. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 * // Getting the alpha
console.log(alpha('#a1bd2f0d'))
// 0.050980392156862744

// Setting the alpha

let myColor = alpha('b2c3f1', 0.5)

console.log(myColor)

// #b2c3f180
 */
declare function alpha(color: ColorToken, value?: number | string): number;
/**
 *
 *  Gets the contrast between the passed in colors.
 * @param color
 * @param against
 * @returns The relative luminance of the lightest color.
 * @example
 *
 * import { getContrast } from 'huetiful-js'
 *
 * console.log(getContrast("black", "white"));
 * // 21
 */
declare function getContrast(color: ColorToken, against: ColorToken): number;
/**
 *
 * Returns the hue which is biasing the passed in color
 * @param color The color to query its overtone.
 * @returns The name of the overtone hue. If an achromatic color is passed in it return the string `'gray'` otherwise if the color has no bias it returns false.
 * @example
 *
 * import { overtone } from "huetiful-js";
 *
console.log(overtone("fefefe"))
// 'gray'

console.log(overtone("cyan"))
// 'green'

console.log(overtone("blue"))
// false
 */
declare function overtone(color: ColorToken): string | boolean;

/**
 *
 * Darkens the color by reducing the lightness channel. .
 * @param color The color to darken.
 * @param amount The amount to darken with. The value is expected to be in the range `[0,1]`
 * @param colorspace The mode colorspace to darken the color in. Only uniform colorspaces are supported
 * @returns color The darkened color. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 *  import { darken } from "huetiful-js";
console.log(darken('blue', 0.3, 'lch'));
//#464646

 */
declare function darken(
  color: ColorToken,
  amount: number | string,
  colorspace?: UniformColorSpaces
): string;
/**
 *
 *  The inverse of `darken`. It brightens the passed in color by increasing the lightness channel.
 * @param color The color to brighten.
 * @param amount The amount to brighten with. The value is expected to be in the range `[0,100]`
 * @param colorspace The mode colorspace to brighten the color in. Only uniform colorspaces are supported.
 * @param hex Optional boolean to return a hex string (if `true`) or a color obect in the mode `colorspace`.
 * @returns The brightened color. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 *  import { brighten } from "huetiful-js";
console.log(brighten('blue', 0.3, 'lch'));
//#464646

 */
declare function brighten(
  color: ColorToken,
  amount?: number,
  colorspace?: UniformColorSpaces
): string | object;
/**
 *
 * Checks if a color is achromatic(without hue or simply grayscale).
 * @param color The color to test if it is achromatic or not.
 * @param colorspace The colorspace to use when checking if the `color` is grayscale or not.
 * @returns True if the color is achromatic else false.
 * @example
 *
 * import { isAchromatic } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori"


isAchromatic('pink')
// false

let sample = [
  "#164100",
  "#ffff00",
  "#310000",
  'pink'
];

console.log(sample.map(isAchromatic));

// [false, false, false,false]

isAchromatic('gray')
// Returns true



// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = samples(12).map((c) => formatHex8(f(c)));
console.log(grays.map(isAchromatic));

//
 [ false, true, true,
  true,  true, true,
  true,  true, true,
  true,  true, false
]

 */
declare function isAchromatic(
  color: ColorToken,
  colorspace?: HueColorSpaces
): boolean;

export {
  brighten,
  darken,
  isAchromatic,
  alpha,
  overtone,
  setChannel,
  setLuminance,
  getChannel,
  getLuminance,
  getContrast,
  isCool,
  isWarm,
  getHueFamily,
  getComplimentaryHue
};
