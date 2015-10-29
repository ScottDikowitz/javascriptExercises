Array.prototype.bubble_sort = function () {
  var dup = this.slice(0);

  for (var x = dup.length - 1; x >= 0; x--) {
    for (var y = 0; y < dup.length; y++) {
      if (dup[y] > dup[y + 1]) {
        temp = dup[y + 1];
        dup[y + 1] = dup[y];
        dup[y] = temp;
      }
    }
  }

  return dup;
};

String.prototype.substrings = function() {
  var sub_strs = [];
  for (var x = 0; x < this.length; x++){
    for (var y = (x + 1); y <= this.length; y++){
      sub_strs.push(this.slice(x,y));

    }
  }
  return sub_strs;
};
