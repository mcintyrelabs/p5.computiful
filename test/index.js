describe('p5.computiful', function () {
  let pInst;

  beforeEach(function () {
    pInst = new p5(function () {});
  });

  afterEach(function () {
    pInst.remove();
  });

  describe('coordinateMode()', function () {
    it('Should default to RIGHT_HAND', function () {
      expect(pInst._coordinateMode).to.equal(pInst.RIGHT_HAND);
    });

    it('Should set coordinateMode to LEFT_HAND', function () {
      pInst.coordinateMode(pInst.LEFT_HAND);
      expect(pInst._coordinateMode).to.equal(pInst.LEFT_HAND);
    });
  });
});
