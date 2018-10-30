export default class Range {
  constructor() {
    this.makeEmpty();
  }

  /**
   * Extends the range to include the given point
   * @param  {number} point - the point to include
   */
  extendTo( point ) {
    if ( this.min > point ) {
      this.min = point;
    }
    if ( this.max < point ) {
      this.max = point;
    }
  }

  /**
   * Checks if the range contains the given point
   * @param  {number} point - the point to check
   * @return {boolean} - true if the point is contained in the range
   */
  containsPoint( point ) {
    return this.min <= point && point <= this.max;
  }

  /**
   * Checks if this range contains the given range
   * @param  {Range} range - the range to check
   * @return {boolean} - true if the range is contained in this range
   */
  containsRange( range ) {
    return this.min <= range.min && this.max > range.max;
  }

  /**
   * Gets if the range is empty
   * @return {Boolean} - true if the range is empty
   */
  isEmpty() {
    return this.min > this.max;
  }

  /**
   * Makes this range empty
   */
  makeEmpty() {
    this.min = Number.POSITIVE_INFINITY;
    this.max = Number.NEGATIVE_INFINITY;
  }

  /**
   * Gets the length of the range
   * @return {number} - the length
   */
  length() {
    if ( this.isEmpty() ) {
      return NaN;
    }
    return this.max - this.min;
  }

  /**
   * Gets the intersection range of the two given ranges
   * @param  {Range} r1 - the first range
   * @param  {Range} r2 - the second range
   * @return {Range} - the intersection of the two ranges
   */
  static intersection( r1, r2 ) {
    const range = new Range();
    range.min = Math.max( r1.min, r2.min );
    range.max = Math.min( r1.max, r2.max );
    if ( range.min > range.max ) {
      range.makeEmpty();
    }
    return range;
  }

  /**
   * Gets the bounds of both ranges combined
   * @param  {Range} r1 - the first range
   * @param  {Range} r2 - the second range
   * @return {Range} - the bounds of the two ranges
   */
  static bound( r1, r2 ) {
    const range = new Range();
    range.min = Math.min( r1.min, r2.min );
    range.max = Math.max( r1.max, r2.max );
    return range;
  }
}