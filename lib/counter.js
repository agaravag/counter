var Increment = function() {
  var count = 0;
  this.add = function () {
    return count++;
  };

  this.findResult = function () {
    return count;
  };
};

module.exports = Increment;
