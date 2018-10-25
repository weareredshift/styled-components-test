import { bp } from 'styles/breakpoints';
export const breakpoints = bp;

/**
 * Returns a string that matchs / is adjacent to the current breakpoint
 * @param {valueObj} valueObj           Obj containing key / value pairs for desired breakpoints
 * @param {Object} breakpoint           Obj describing current breakpoint state
 * @param {string} breakpoint.name      String defining current breakpoint name
 * @param {number} breakpoint.size      Number defining current breakpoint size
 * @return {string}                     Returns class string that matches correct breakpoint
 */
export function setValue (valueObj, breakpoint) {
  if (valueObj.def === undefined) valueObj.def = '';
  if (typeof breakpoint !== 'object') {
    throw new Error(`Bad breakpoint type given: ${breakpoint} (${typeof breakpoint})`);
  }

  if (breakpoint.name === 'def') return valueObj['def'];

  const sizeArray = Object.keys(breakpoints).reverse();
  const startingIndex = sizeArray.indexOf(breakpoint.name);
  const firstMatchedKey = sizeArray
    .slice(startingIndex)
    .find(key => valueObj[key]) ||
    'def';

  return valueObj[firstMatchedKey];
}

function dispatchActiveQuery (mediaQueryState, action) {
  // Reduce media query to the smallest breakpoint
  const activeQuery = mediaQueryState.reduce((prev, curr) => curr.matches ? curr : prev && prev.matches ? prev : null);

  const breakpointName = activeQuery ? activeQuery.name : 'default';
  const breakpointSize = activeQuery && activeQuery.breakpoint;

  // Pushes active query string to store. If no breakpoint is active, pushes 'default'
  action(breakpointName, breakpointSize, mediaQueryState);
}

/**
 * Called in componentDidMount in top-level app component, this initializes the Redux breakpoint object
 *
 * @param      {Object[]}   windowObj    The window object (default given)
 */
export function initReduxBreakpoints (windowObj = window) {
  if (!this.mediaQueryState) { this.mediaQueryState = []; }

  Object.keys(breakpoints).forEach(key => {
    // Create breakpoint object
    const query = windowObj.matchMedia(`(max-width: ${breakpoints[key]}px)`);
    // Add breakpoint value
    query.breakpoint = breakpoints[key];
    // Add breakpoint name
    query.name = key;
    // Add breakpoint change handler
    function breakpointChange () {
      dispatchActiveQuery(this.mediaQueryState, this.props.setActiveBreakpoint);
    }

    // Shouldn't need to remove listener since app wrapper is present in whole
    // app and mounted once.
    query.addListener(breakpointChange.bind(this));

    // Push breakpoint into array
    this.mediaQueryState.push(query);
  });

  dispatchActiveQuery(this.mediaQueryState, this.props.setActiveBreakpoint);
}

function breakpointFromString (string, breakpoints) {
  const breakpoint = breakpoints[string];

  if (!breakpoint) {
    throw new Error(`Bad breakpoint variable given: ${string}`);
  }

  return breakpoint;
}

/**
 * Returns a boolean indicating whether or not the currentBreakpoint.size value
 * is greater than the passed breakpointToCompare value
 * @param {Object} breakpointToCompare           String or number, if string, it is used to retrieve
 *                                               the correct value from breakpoints[]
 * @param {Object} currentBreakpoint             Object describing current breakpoint
 * @param {number} currentBreakpoint.size        Number indicating the current breakpoint value
 * @return {boolean}                             Returns boolean that indicates whether the passed
 *                                               breakpointToCompare string or number is currently
 *                                               greater than the currentBreakpoint
 */
export const bpIsGreaterThan = (breakpointToCompare, currentBreakpoint) => {
  const comparison = typeof breakpointToCompare === 'string'
    ? breakpointFromString(breakpointToCompare, breakpoints)
    : breakpointToCompare;

  if (currentBreakpoint.size === null || currentBreakpoint.size > comparison) {
    return true;
  } else {
    return false;
  }
};

/**
 * Returns a boolean indicating whether or not the currentBreakpoint.size value
 * is less than the passed breakpointToCompare value
 * @param {Object} breakpointToCompare           String or number, if string, it is used to retrieve
 *                                               the correct value from breakpoints[]
 * @param {Object} currentBreakpoint             Object describing current breakpoint
 * @param {number} currentBreakpoint.size        Number indicating the current breakpoint value
 * @return {boolean}                             Returns boolean that indicates whether the passed
 *                                               breakpointToCompare string or number is currently
 *                                               less than the currentBreakpoint
 */
export const bpIsLessThan = (breakpointToCompare, currentBreakpoint) => {
  const comparison = typeof breakpointToCompare === 'string'
    ? breakpointFromString(breakpointToCompare, breakpoints)
    : breakpointToCompare;

  if (currentBreakpoint.size !== null &&
      currentBreakpoint.size <= comparison) {
    return true;
  } else {
    return false;
  }
};
