/**
 * @typedef { import('../types.js').Collection} ColorToken
 * @typedef { import('../types.js').Collection} Collection
 * @typedef {import('../types.js').FactObject} FactObject
 * @typedef {import('../types.js').ColorObject} ColorObject
 * @typedef {import('../types.js').ColorTuple} ColorTuple
 * @typedef {import('../types.js').TokenOptions} TokenOptions
 * @typedef {import('../types.js').Colorspaces} Colorspaces
 *
 */
import {
	colorsNamed,
	useMode,
	modeJch,
	modeHsv,
	modeLch65,
	modeLrgb,
	modeLab65,
	modeOklch,
	formatHex,
	modeLch,
	modeXyz65,
	modeLab
} from 'culori/fn';

import 'culori/css';

import {
	and,
	entries,
	eq,
	getSrcMode,
	gmchn,
	gte,
	isArray,
	lte,
	neq,
	or
} from '../fp/index.js';

/**
 * Parses any recognizable color to the specified `kind` of `ColorToken` type.
 *
 * The `kind` option supports the following types as options:
 *
 * * `'arr'` - Parses the color token to an array of channel values with the `colorspace` as the first element if the `omitMode` parameter is set to `false` in the `options` object.
 *
 * * `'num'` - Parses the color token to its numerical equivalent to a number between `0` and `16,777,215`.
 *
 * The `numberType` can be used to specify which type of number to return if the `kind` option is set to `'number'`:
 *  - `'hex'` - Hexadecimal number
 *  - `'bin'` - Binary number
 *  - `'oct'` - Octal number
 *  - `'expo'` - Decimal exponential notation
 *
 * * `'str'` - Parses the color token to its hexadecimal string equivalent.
 *
 * If the color token has an explicit `alpha` (specified by the `alpha` key in color objects and as the fourth and last number in a color array) the string will be 8 characters long instead of 6.
 *
 * * `'obj'` - Parses the color token to a plain color object in the `mode` specified by the `targetMode` parameter in the `options` object.
 * * `'temp'` - Parses the color token to its RGB equivalent and expects the value to be between 0 and 30,000
 *
 * @param {ColorToken} color The color token to parse or convert.
 * @param {TokenOptions} options
 * @returns {ColorToken}
 */
function token(color, options = undefined) {
	/*
	 * SUPPORTED COLORSPACES
	 * huetiful-js does not focus on color conversion but parsing color from a myriad of sources and doing useful stuff
	 * This means we only support the colorspaces we use internally. The most accessible token type is the hexadecimal. after that you're on your own
	 * Colorspaces are heavy to load in the browser so expect support for certain colorspaces to be dropped
	 *
	 */
	var defs = {
			hsv: modeHsv,
			rgb: modeLrgb,
			lab: modeLab,
			lch65: modeLch65,
			lab65: modeLab65,
			oklch: modeOklch,
			lch: modeLch,
			xyz: modeXyz65,
			jch: modeJch
		},
		{ srcMode, targetMode, omitMode, kind, numType, omitAlpha, normalizeRgb } =
			options || {},
		cnv = (m, a) => useMode(defs[m])(or(a, c2hx()));

	/**
	 *
	 * 					* GLOBAL DEFAULTS (listed respectively to declarations)
	 *
	 * 							* color - if a color is a string we lowercase it
	 * 							* kind - return the color as hexadecimal by default
	 * 							* omitMode - return the array with the colorpace string by default
	 * 							* numType - return it as an ordinary integer if numType is undefined
	 * 							* srcMode - the mode the color was parsed in. Default is lch
	 * 							* targetMode - the mode to output the color token in. It is ignored for hex and number
	 * 							* omitAlpha - Omit the alpha channel from the color tuple. Default is false
	 * 							* normalizeRgb - Normalize RGB values above 1 as if in the range [0,255] back to the [0,1] range
	 */

	kind = or(kind?.toLowerCase(), 'str');

	omitMode = or(omitMode, false);

	numType = or(numType?.toLowerCase(), undefined);

	srcMode = getSrcMode(color, srcMode);

	targetMode = or(targetMode, undefined)?.toLowerCase();

	omitAlpha = or(omitAlpha, false);

	normalizeRgb = or(normalizeRgb, false);

	/*
	 *				* GLOBAL CONVERTER FUNCTIONS (listed respectively to declarations)
	 *
	 *						- num2c - converts a number to an RGB color object
	 *						- c2hx - converts any color token to hexadecimal
	 *						- c2num - converts a color token to its numerical equivalent
	 *						- tmp2c - converts any number between 1 and 30,000 to an RGB color object
	 *						- c2col - converts any color token to an array or object equivalent
	 * 						- State is shared so no converter takes a parameter.
	 *
	 */

	var num2c = () => {
			// Ported from chroma-js with slight modifications
			//
			//

			return and(
				and(eq(typeof color, 'number'), gte(color, 0)),
				lte(color, 0xffffff)
			)
				? {
						// @ts-ignore
						r: (color >> 16) / 255,
						// @ts-ignore
						g: ((color >> 8) & 0xff) / 255,
						// @ts-ignore
						b: (color & 0xff) / 255,
						mode: 'rgb'
					}
				: Error('unknown num color: ' + color);
		},
		c2hx = () => {
			return {
				boolean: or(and(eq(color, true), '#ffffff'), '#000000'),
				number: num2c(),
				object: formatHex(color),
				// @ts-ignore
				string: or(colorsNamed?.color, formatHex(color))
			}[typeof color];
		},
		c2num = () => {
			const _ = cnv('rgb');

			/**
			 * @type {number|string}
			 */
			// @ts-ignore
			var s = ((255 * _['r']) << 16) + ((255 * _['g']) << 8) + 255 * _['b'];

			return or(
				and(
					numType,
					s.toString(
						{ bin: 2, hex: 16, expo: 6, oct: 8 }[numType?.toLowerCase()]
					)
				),
				s
			);
		},
		c2col = () => {
			/*
			 * 							* GLOBALS
			 *								The following variables are valid if the token is a collection only
			 * 								- x is an array of channel keys
			 * 								- y is the array of channel values computed according to color tuple length
			 * 								- z is the alpha channel captured if it exists in the color tuple
			 *
			 *
			 *
			 */

			var [x, y, z] = [
				gmchn(srcMode || targetMode).split(''),
				eq(typeof color[0], 'string') ? color.slice(1) : color,
				eq(color?.length, 5) ? color[4] : undefined
			];

			/**
			 * 						* Conversion according to color token type
			 * 							- The conversion reassigns the color variable with the widely parseable format
			 * 							- If the color token is an array or plain object:
			 * 									* If it has a srcMode of rgb/lrgb we normalize the values if normalizeRgb is true
			 * 									* Finally we return the color as an object with values assigned using a forof loop
			 *
			 *
			 *
			 *
			 */
			if (typeof color === 'number') {
				color = num2c();
			} else if (typeof color === 'string') {
				color = cnv(targetMode);
			} else if (typeof color === 'object') {
				/**
				 * This block only runs on objects not strings/numbers and boolean
				 */
				if (eq(srcMode, 'rgb' || 'lrgb') && normalizeRgb) {
					/**
					 *  Normalize the color back to the rgb gamut supported by culori
					 * @type {boolean}
					 * */
					var s = y.some((c) => 1 < Math.abs(c));
					y = s ? y.map((c) => c / 255) : y;
				}

				// reinitialize color to an empty object
				color = {};

				// then assign the alpha and colorspace properties
				color = { alpha: z, mode: srcMode };

				// assign channel keys with their values
				for (const [k, v] of entries(x)) {
					color[v] = y[k];
				}
			}

			// convert the color to a target mode if it is specified
			color = targetMode ? cnv(targetMode) : color;

			if (eq(kind, 'obj')) {
				return color;
			} else if (eq(kind, 'arr')) {
				/**
				 * The result array if `kind` is `arr`
				 */
				var j = [];
				for (const [k, v] of entries(x)) {
					j[k] = color[v];
				}

				// dont add mode string if true
				omitMode ? j : j.unshift(targetMode);
				// dont add alpha channel if true
				omitAlpha ? j : j.push(or(z, 1));

				return j;
			}
		};

	return {
		obj: c2col,
		arr: c2col,
		str: c2hx,
		num: c2num
	}[kind]();
}

export { token };