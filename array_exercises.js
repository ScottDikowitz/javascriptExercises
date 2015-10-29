Array.prototype.uniq = function () {
  result = [];
  for (var x = 0; x < this.length; x++) {
    if (result.indexOf(this[x]) === -1)
      result.push(this[x]);
  }

  return result;
};

Array.prototype.two_sum = function () {
  result = [];

  for (var x = 0; x < this.length; x++) {
    for (var y = x + 1; y < this.length; y++) {
      if (this[x] + this[y] === 0)
        result.push([x, y]);
    }
  }

  return result;
};

Array.prototype.my_transpose = function () {
  result = [];
  for(var x = 0; x < this[0].length; x++) {
    new_row = [];
    for(var y = 0; y < this.length; y++) {
      new_row.push(this[y][x]);
    }
    result.push(new_row);
  }
  return result;
};
