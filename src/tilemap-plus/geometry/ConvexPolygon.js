import PolyDecomp from 'poly-decomp';
import Vector from './Vector';
import AABB from './AABB';
import Range from './Range';

const average = ( array ) => array.reduce(
    ( accumulator, value ) => accumulator + value, 0) / array.length;
const validateBounds = ( left, top, right, bottom ) => {
  if ( left > right ) {
    throw new Error('Right must be greater than Left');
  }
  if ( top > bottom ) {
    throw new Error('Bottom must be greater than Top');
  }
}

export default class ConvexPolygon {

  constructor( vertices ) {
    this.vertices = vertices;
    this.recompute();
  }

  /**
   * Recomputes the edges, normals, and bounding box
   */
  recompute() {
    const vertices = this.vertices;
    this.aabb = AABB.fromPoints(vertices);
    this.edges = [];
    this.normals = [];
    this.count = vertices.length;
    this.center = new Vector(
        average(vertices.map(v => v.x)),
        average(vertices.map(v => v.y))
    );

    if ( this.count > 1 ) {
      for (let i = 0; i < this.count; i++) {
        let j = (i + 1) % this.count;
        const edge = vertices[j].sub(vertices[i]);
        this.edges.push(edge);

        // generate outward normals
        let normal = edge.normalized().perpendicular();
        const radius = vertices[i].sub(this.center);
        if ( radius.dot(normal) < 0 ) {
          normal = normal.scale(-1);
        }
        this.normals.push(normal);
      }
    }
  }

  isValid() {
    if ( this.count < 4 ) {
      return true;
    }

    let prevPerpDot = 0;
    for (let i = 0; i < this.count; i++) {
      let j = (i + 1) % this.count;
      const perpDot = this.edges[i].perpDot(this.edges[j]);
      if ( perpDot * prevPerpDot < 0 ) {
        return false;
      }
      prevPerpDot = perpDot;
    }
    return true;
  }

  /**
   * Projects the shaped onto the given axis
   * @param  {Vecotr}  axis - the axis
   * @return {Range} - the projection as a range
   */
  projectOntoAxis( axis ) {
    const range = new Range();
    for (const vertex of this.vertices) {
      const projection = vertex.dot(axis);
      range.extendTo(projection);
    }
    return range;
  }

  /**
   * Creates a rotated version of this shape by the given angle
   * @param  {number} angle - the angle to rotate in radians
   * @return {ConvexPolygon} - the rotated shape
   */
  rotated( angle ) {
    const rotatedVertices = [];
    for (const vertex of this.vertices) {
      const vertexOffset = vertex.clone().sub(this.center);
      const rotatedOffset = vertexOffset.rotated(angle);
      const rotatedVertex = this.center.add(rotatedOffset);
      rotatedVertices.push(rotatedVertex);
    }
    return new ConvexPolygon(rotatedVertices);
  }

  /**
   * Creates a translated version of this shape by the given offset
   * @param  {Vector} offset - the translation offset
   * @return {ConvexPolygon} - the translated shape
   */
  translated( offset ) {
    const translatedVertices = this.vertices.map(vertex => vertex.add(offset));
    return new ConvexPolygon(translatedVertices);
  }

  /**
   * Creates a new ConvexPolygon from a rectangle
   * @param  {number} left - the left side of the rectangle
   * @param  {number} top - the top of the rectangle
   * @param  {number} right - the right side of the rectangle
   * @param  {number} bottom - the bottom of the rectangle
   * @return {ConvexPolygon} - the constructed ConvexPolygon rectangle
   */
  static fromRectangle( left, top, right, bottom ) {
    validateBounds(left, top, right, bottom);

    const vertices = [
      new Vector(left, top),
      new Vector(right, top),
      new Vector(right, bottom),
      new Vector(left, bottom)
    ];
    return new ConvexPolygon(vertices);
  }

  static fromCapsule( left, top, right, bottom, capSegments ) {
    if ( capSegments < 3 ) {
      throw new Error('Specify at least 3 cap segments');
    }
    validateBounds(left, top, right, bottom);
    const width = right - left;
    const height = bottom - top;
    if ( height < width ) {
      throw new Error('Capsule height must be larger than width');
    }

    const capRadius = width * 0.5;
    const capAngles = [...Array(capSegments).keys()].map(
        index => -index * Math.PI / capSegments);
    const centerX = (left + right) * 0.5;
    const capVertices = capAngles.map(
        angle => new Vector(Math.cos(angle), Math.sin(angle)).scale(capRadius));
    const topCapFocus = new Vector(centerX, top + capRadius);
    let vertices = capVertices.map(capVertex => topCapFocus.add(capVertex));
    vertices.push(new Vector(left, topCapFocus.y));
    const bottomCapFocus = new Vector(centerX, bottom - capRadius);
    vertices = vertices.concat(
        capVertices.map(capVertex => bottomCapFocus.sub(capVertex)));
    vertices.push(new Vector(right, bottomCapFocus.y));

    return new ConvexPolygon(vertices);
  }

  static generateConvexPolygons( vertices ) {
    const pdVertices = vertices.map(v => [v.x, v.y]);
    const pdConvexPolygons = PolyDecomp.decomp(pdVertices);
    const convexPolygons = pdConvexPolygons.map(pdConvexPolygon =>
        new ConvexPolygon(pdConvexPolygon.map(pdVertex =>
            new Vector(pdVertex[0], pdVertex[1])
        ))
    );
    return convexPolygons;
  }

}