var expect = require('chai').expect,
Increment = require('../lib/counter');

describe('Mocha Chai increment testing.', function() {
  var increment;
  beforeEach(function() {
    increment = new Increment();
  });

  describe('Initialization and plus one', function () {
    it('count value is 0 when initialized', function() {
      expect(increment.findResult()).to.equal(0);
    });

    it('The result should be plus one', function() {
      increment.add();
      expect(increment.findResult()).to.equal(1);
    });
  });
});
