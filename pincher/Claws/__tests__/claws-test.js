import Claws from '../../Claws';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    let claws = new Claws();
    expect(claws.pinch()).toEqual({ message: 'OUCH!' });
  });
});