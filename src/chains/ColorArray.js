import { filterBy } from '../filterBy/filterBy.js';
import { sortBy } from '../sortBy/index.js';
import { nearest } from '../nearest.js';
import { stats } from '../stats/index.js';
import { interpolator } from '../interpolator/interpolator.js';
import { discover } from '../discover/discover.js';

/**
 Creates a lazy chain wrapper over a collection of colors that has all the array methods (functions that take a collection of colors as their first argument).
 * @example
 * import { ColorArray } from 'huetiful-js'
 *
let sample = ['blue', 'pink', 'yellow', 'green'];
let wrapper = new ColorArray(sample);
// We can even chain the methods and get the result by calling output()

console.log(wrapper.sortByHue('desc', 'lch').output());

// [ 'blue', 'green', 'yellow', 'pink' ]
 */
export class ColorArray {
	/**
	 *
	 * @param {import('../types.js').Collection} colors The collection of colors to bind.
	 */
	constructor(colors) {
		this['colors'] = colors;
		return this;
	}

	/**
 * Returns the nearest color(s) in the bound collection against
 * @param {ColorToken} against  The color to use for distance comparison.
 * @param {number} num The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric.
 * @returns {ColorArray}
 * @example
 *
 * import { load,colors } from 'huetiful-js';
 *
 * let cols = colors('all', '500')
 *
console.log(load(cols).nearest('blue', 3));
 // [ '#a855f7', '#8b5cf6', '#d946ef' ]
 */
	nearest(against, num) {
		this['colors'] = nearest(this['colors'], against, num);
		return this;
	}

	/**
 *
 * Interpolates the passed in colors and returns a collection of colors from the interpolation.
 *
 * Some things to keep in mind when creating color scales using this function:
 *
 * * To create a color scale for cyclic values pass `true` to the `closed` parameter in the `options` object.
 * * If `num` is 1 then a single color is returned from the resulting interpolation with the internal `t` value at `0.5` else a collection of the `num` of color scales is returned.
 * * If the collection of colors contains an achromatic color, the resulting samples may all be grayscale or pure black.
 * @param {import('../types.js').InterpolatorOptions} options Optional channel specific overrides.
 * @returns {ColorArray}
 *
 * @example
 *
 * import { load } from 'huetiful-js';
  
  console.log(load(['pink', 'blue']).interpolateSpline({num:8, colorspace:'lch'}));
  
  // [
	'#ffc0cb', '#ff9ebe',
	'#f97bbb', '#ed57bf',
	'#d830c9', '#b800d9',
	'#8700eb', '#0000ff'
  ]
	 *
	 */
	// @ts-ignore
	interpolator(options) {
		this['colors'] = interpolator(
			// @ts-ignore
			this['colors'],
			options
		);

		return this;
	}

	/**
   *
 * Takes a collection of colors and finds the nearest matches using the `differenceHyab()` color difference metric for a set of predefined palettes.
 *
 * The function returns different values based on the `kind` parameter passed in:
 *
 * * An array of colors for the `kind` of scheme, if the `kind` parameter is specified.
 * * Else it returns an object of all the palette types as keys and their values as an array of colors.
 *
 * If no colors are valid for the palette types it returns an empty array for the palette results. It does not work with achromatic colors thus they're excluded from the resulting collection.
 * @param {import('../types.js').DiscoverOptions} options
 * @returns {ColorArray}
 * @example
 *
 * import { load } from 'huetiful-js'
  
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
  
  console.log(load(sample).discover({kind:'tetradic'}).output())
  // [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
   */
	discover(options) {
		this['colors'] = discover(this['colors'], options);
		return this;
	}

	/**
 * Filters a collection of colors using the specified `factor` as the criterion. The supported options are:
 * * `'contrast'` - Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
 * * `'lightness'` - Returns colors in the specified lightness range.
 * * `'chroma'` - Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
 
 * * `'distance'` - Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the 'against' param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.
 * * `luminance` - Returns colors in the specified luminance range.
 * * `'hue'` - Returns colors in the specified hue ranges between 0 to 360.
 *
 *
 * For the `chroma` and `lightness` factors, the range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
 * This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range.
 * But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.
 *
 * @see https://culorijs.org/color-spaces/ For the expected ranges per colorspace.
 *
 * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param {import('../types.js').FilterByOptions} options
 * @returns {ColorArray}
 * @example
 *
 * import { filterBy } from 'huetiful-js'

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

// Filtering colors by their relative contrast against 'green'.
// The collection will include colors with a relative contrast equal to 3 or greater.

console.log(load(sample).filterBy({start:'>=3', factor:'contrast',against:'green' }))
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
 */
	filterBy(options) {
		return filterBy(this['colors'], options);
	}

	/**
 * Sorts colors according to the specified `factor`. The supported options are:
 *
 * * `'contrast'` - Sorts colors according to their contrast value as defined by WCAG.
 * The contrast is tested `against` a comparison color  which can be specified in the `options` object.
 * * `'lightness'` - Sorts colors according to their lightness.
 * * `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
 * * `'distance'` - Sorts colors according to their distance.
 * The distance is computed from the `against` color token which is used for comparison for all the colors in the `collection`.
 * * `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.
 *
 * The return type is determined by the type of `collection`:
 *
 * * Plain objects are returned as `Map` objects because they remember insertion order. `Map` objects are returned as is.
 * * `ArrayLike` objects are returned as plain arrays. Plain arrays are returned as is.
 * @param {import('../types.js').SortByOptions} options
 * @returns {ColorArray}

 * @example

import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
  load(sample).sortBy({ against:'yellow' factor:'distance',order:'desc'})
)

// [ 'brown', 'red', 'green', 'purple' ]
 */
	sortBy(options) {
		return sortBy(options)(this['colors']);
	}

	/**
	 * Computes statistical values about the passed in color collection.
	 *
	 * The topmost properties from each returned `factor` object are:
	 *
	 * * `against` - The color being used for comparison.
	 *
	 * Required for the `distance` and `contrast` factors.
	 * If `relativeMean` is `false`, other factors that take the comparison color token as an overload will have this property's value as `null`.
	 * * `colorspace` - The colorspace in which the factors were computed in. It has no effect on the `contrast` or `distance` factors (for now).
	 *
	 *
	 * * `extremums` - An array of the minimum and the maximum value (respectively) of the `factor`.
	 * * `colors` - An array of color tokens that have the minimum and maximum `extremum` values respectively.
	 * * `mean` - The average value for the `factor`.
	 * * `displayable` - The percentage of the displayable or colors with channel ranges that can be rendered in  that colorspace when converted to RGB.
	 *
	 * The `mean` property can be overloaded by the `relativeMean` option:
	 *
	 * * If `relativeMean` is `true`, the `against` option will be used as a subtrahend for calculating the distance between each `extremum`.
	 * For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest `factor` from thr passed in collection."
	 *
	 * @param {import('../types.js').StatsOptions} options Optional parameters to specify how the data should be computed.
	 * @returns {import('../types.js').Stats}
	 */
	stats(options) {
		return stats(this['colors'], options);
	}

	// distribute(options) {
	//   return discover(this['colors'], options);
	// }
	/**
	 *
	 * @returns Returns the result value from the chain.
	 */
	output() {
		return this['colors'];
	}
}