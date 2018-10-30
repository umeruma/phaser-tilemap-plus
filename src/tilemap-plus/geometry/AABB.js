import Vector from './Vector';

export default class AABB {
  constructor( left, top, right, bottom ) {
    this.left = left || Number.POSITIVE_INFINITY;
    this.right = right || Number.NEGATIVE_INFINITY;
    this.top = top || Number.POSITIVE_INFINITY;
    this.bottom = bottom || Number.NEGATIVE_INFINITY;
  }

  /**
   * Checks if the bounding box has no volume
   * @return {Boolean} true if bounding box has no volume
   */
  isEmpty() {
    return this.left > this.right || this.top > this.bottom;
  }

  /**
   * Gets the width of the bounding box
   * @return {number} - the width of the bounding box, NaN if width is negative
   */
  width() {
    const width = this.right - this.left;
    return width >= 0 ? width : NaN;
  }

  /**
   * Gets the height of the bounding box
   * @return {number} - the height of the bounding box, NaN if height is negative
   */
  height() {
    const height = this.bottom - this.top;
    return height >= 0 ? height : NaN;
  }

  /**
   * Gets the point in the center of the bounding box
   * @return {Vector} - the point in the center of the bounding box
   */
  center() {
    return new Vector( ( this.left + this.right ) * 0.5, ( this.top + this.bottom ) * 0.5 );
  }

  /**
   * Checks to see if the bounding box contains the given point
   * @param  {Vector} point - the point to locate
   * @return {boolean} - true if the point is within the bounding box
   */
  containsPoint( point ) {
    return this.left <= point.x && point.x <= this.right &&
      this.top <= point.y && point.y <= this.bottom;
  }

  /**
   * Checks to see if the bounding box contains all the given points
   * @param  {Vector[]} points - an array of points to locate
   * @return {boolean} - true if all the points are within the bounding box
   */
  containsPoints( points ) {
    for ( const point of points ) {
      if ( !this.containsPoint( point ) ) {
        return false;
      }
    }
    return true;
  }

  /**
   * Gets whether or not the given bounding box intersects this one
   * @param  {AABB} aabb - the other bounding box
   * @return {boolean} - true if the bounding boxes intersect
   */
  intersects( aabb ) {
    const result = this.left <= aabb.right &&
      this.right >= aabb.left &&
      this.top <= aabb.bottom &&
      this.bottom >= aabb.top;
    return result;
  }

  /**
   * Gets a translated bounding box based off this one
   * @param  {Vector} offset - the offset vector
   * @return {AABB} - the translated bounding box
   */
  translated( offset ) {
    return new AABB(
      this.left + offset.x,
      this.top + offset.y,
      this.right + offset.x,
      this.bottom + offset.y
    );
  }

  /**
   * Creates a bounding box based on a list of points
   * @param  {Vector[] | Vector} points - the list of points
   * @return {AABB} - the constructed bounding box
   */
  static fromPoints( points ) {
    let left = Number.POSITIVE_INFINITY,
      top = Number.POSITIVE_INFINITY,
      right = Number.NEGATIVE_INFINITY,
      bottom = Number.NEGATIVE_INFINITY;

    if ( Array.isArray( points ) ) {
      left = Math.min( ...points.map( point => point.x ) );
      top = Math.min( ...points.map( point => point.y ) );
      right = Math.max( ...points.map( point => point.x ) );
      bottom = Math.max( ...points.map( point => point.y ) );
    } else {
      left = points.x;
      top = points.y;
      right = points.x;
      bottom = points.y;
    }
    return new AABB( left, top, right, bottom );
  }

  /**
   * Creates a bounding box based on a list of AABB objects
   * @param  {AABB[] | AABB} aabbs - the AABB objects
   * @return {AABB} - the constructed bounding box
   */
  static fromAABBs( aabbs ) {
    let left = Number.POSITIVE_INFINITY,
      top = Number.POSITIVE_INFINITY,
      right = Number.NEGATIVE_INFINITY,
      bottom = Number.NEGATIVE_INFINITY;

    if ( Array.isArray( aabbs ) ) {
      left = Math.min( ...aabbs.map( aabb => aabb.left ) );
      top = Math.min( ...aabbs.map( aabb => aabb.top ) );
      right = Math.max( ...aabbs.map( aabb => aabb.right ) );
      bottom = Math.max( ...aabbs.map( aabb => aabb.bottom ) );
    } else {
      left = Math.min( left, aabb.left );
      top = Math.min( top, aabb.top );
      right = Math.max( right, aabb.right );
      bottom = Math.max( bottom, aabb.bottom );
    }
    return new AABB( left, top, right, bottom );
  }
}