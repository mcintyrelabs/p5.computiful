/**
* By default, p5 uses a left-handed coordinate system with the origin placed
* at the top-left corner of the canvas. This library overrides p5's default
* behavior, creating a right-handed coordinate system with the origin placed
* at the bottom-left corner of the canvas.
* 
* In other words, the canvas is now Quadrant I from math class.
*/
p5.prototype.RIGHT_HAND = 'right-hand';
p5.prototype.LEFT_HAND = 'left-hand';
p5.prototype._coordinateMode = p5.prototype.RIGHT_HAND;


/**
* Transforms the coordinate system based on the current coordinateMode.
*/
p5.prototype._toRightHand = function setCoordinateSystemToRightHanded() {
 if (this._coordinateMode === this.RIGHT_HAND) {
   this.scale(1, -1);
   this.translate(0, -this.height);
 }
};


/**
* Transforms the coordinate system before draw() is called.
*/
p5.prototype.registerMethod('pre', p5.prototype._toRightHand);


/**
* Sets the coordinate system mode to either left-handed or right-handed.
* 
* @param {Constant} mode either LEFT_HAND or RIGHT_HAND
*/
p5.prototype.coordinateMode = function setCoordinateMode(mode) {
 if (mode === this.LEFT_HAND || mode === this.RIGHT_HAND) {
   p5.prototype._coordinateMode = mode;
 }
};

/**
 * Set the default angleMode to degrees.
 */
p5.prototype._angleMode = p5.prototype.DEGREES;

/**
 * Creates a wrapper function to simplify constructing p5.Oscillator objects.
 * 
 * @param {Number} freq defaults to 440Hz (Optional)
 * @param {String} type type of oscillator. Options: 'sine' (default),
 *                      'triangle', 'sawtooth', 'square' (Optional)
 */
p5.prototype.createOscillator = function createP5Oscillator(freq, type) {
  return new p5.Oscillator(freq, type);
};
