import { DeficiencyType, ColorToken } from './types';

/**
 *
 * Returns the color as a simulation of the passed in `defeciencyType` of color vision deficiency with the deficiency filter's intensity determined by the `severity` value.
 * @param deficiencyType The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is `'red'` when the defeciency parameter is undefined or any falsy value.
 * @param color The color to return its simulated variant.
 * @param severity The intensity of the filter. The exepected value is between [0,1]. For example 0.5
 * @returns The color as its simulated variant. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 * import { colorDeficiency, color2hex } from 'huetiful-js'

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
let tritanomaly = colorDeficiency('blue')
console.log(tritanomaly(['rgb', 230, 100, 50, 0.5], 0.1))
// #dd663680

// Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
let protanopia = colorDeficiency('red')
console.log(protanopia({ h: 20, w: 50, b: 30, mode: 'hwb' }))
// #9f9f9f
 */
declare function colorDeficiency(
  deficiencyType?: DeficiencyType
): (color: ColorToken, severity?: number) => string;
