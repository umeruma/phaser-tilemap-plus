export default class Vector {
  constructor( x, y ) {
    this.x = x || 0;
    this.y = y || 0;
  }

  /**
   * Creates and returns a copy of this object
   * @return {Vector} - a clone of this instance
   */
  clone() {
    return new Vector( this.x, this.y );
  }

  /**
   * Compare the vector components of this vector with the given vector
   * @param  {Vector} vector - the other vector
   * @return {boolean} - true if all of the vector components are equal; false otherwise
   */
  equals( vector ) {
    return vector && this.x === vector.x && this.y === vector.y;
  }

  /**
   * Get the length of the vector
   * @return {number} - the length
   */
  length() {
    return Math.sqrt( this.x * this.x + this.y * this.y );
  }

  /**
   * Normalize this vector
   * @return {Vector} - a vector holding the result
   */
  normalized() {
    const len = this.length();
    if ( len === 0 ) {
      return new Vector( 0, 0 );
    } else {
      return new Vector( this.x / len, this.y / len );
    }
  }

  /**
   * Gets the perpendicular vector to this one
   * @return {Vector} - the perpendicular vector
   */
  perpendicular() {
    return new Vector( -this.y, this.x );
  }

  /**
   * Rotates the vector by the given angle
   * @param  {number} angle - the angle in radians to rotate
   * @return {Vector} - the rotated vector
   */
  rotated( angle ) {
    const cos = Math.cos( angle );
    const sin = Math.sin( angle );
    return new Vector( cos * this.x + sin * this.y, -sin * this.x + cos * this.y );
  }

  /**
   * Add the vector to this vector
   * @param {Vector} vector - the vector to add
   * @return {Vector} - a vector holding the result
   */
  add( vector ) {
    return new Vector( this.x + vector.x, this.y + vector.y );
  }

  /**
   * Subtract the vector from this vector
   * @param  {Vector} vector - the vector to subtract
   * @return {Vector} - a vector holding the result
   */
  sub( vector ) {
    return new Vector( this.x - vector.x, this.y - vector.y );
  }

  /**
   * Gets the dot product of this vector and the given vector
   * @param  {Vector} vector - the other vector
   * @return {number} - the dot product
   */
  dot( vector ) {
    return this.x * vector.x + this.y * vector.y;
  }

  perpDot( vector ) {
    return this.x * vector.y - this.y * vector.x;
  }

  scale( factor ) {
    return new Vector( this.x * factor, this.y * factor );
  }
}