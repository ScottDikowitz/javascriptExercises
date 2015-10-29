Array.prototype.myEach = function(funct){
  for (var x = 0; x < this.length; x++){
    funct(this[x])
  }

  return this
}

Array.prototype.myMap = function(funct) {
  result = [];

  this.myEach(function(el) {
    result.push(funct(el));
  });

  return result;
}

Array.prototype.myInject = function(funct) {
  accum = this[0];
  var first = true;

  this.myEach(function(el) {
    if (!first)
      accum = funct(accum, el);

    first = false;
  });

  return accum;
};
