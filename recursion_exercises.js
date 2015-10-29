var exp = function(b, n){
  if (n === 0)
    return 1;

  return b*exp(b, n - 1);
};

var exp2 = function(b, n){
  if (n === 0)
    return 1;

  if (n == 1)
    return b;

  if (n%2 == 0) {
    var result = exp2(b, n / 2);
    return result * result;
  } else {
    var result = exp2(b, (n - 1) / 2);
    return b * result * result;
  }
};

var fib = function(n) {
  if (n <= 2)
    return [0, 1].slice(0, n);

  var last = fib(n - 1);
  last.push(last.slice(-1)[0] + last.slice(-2)[0]);
  return last;
};

var bsearch = function(arr, target) {
  if (arr.length === 0)
    return null;

  var middle = Math.floor(arr.length / 2);

  if (target === arr[middle])
    return middle;
  else if (target > arr[middle]) {
    var next_search = bsearch(arr.slice(middle + 1), target);

    if (next_search === null)
      return null;
    else
      return ((middle + 1) + next_search);
  } else {
    return bsearch(arr.slice(0, middle), target);
  }
}

var makeChange = function(value, coins) {
  if (value === 0)
    return [];

  var bestChange = null;

  coins.forEach(function(coin) {
    if (coin <= value) {
      var remainder = value - coin;

      var possibleBestChange = makeChange(remainder, coins).concat([coin]);
      if (bestChange === null || possibleBestChange.length < bestChange.length)
        bestChange = possibleBestChange;
    }

  })
  return bestChange;
}

Array.prototype.merge_sort = function() {
  "use strict";
  if (this.length <= 1)
    return this;

  var middle = Math.floor(this.length / 2);

  var left_half = this.slice(0, middle);
  var right_half = this.slice(middle);

  var merge = function(left, right) {
    var result = [];

    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0])
        result.push(left.shift());
      else
        result.push(right.shift());
    }

    return result.concat(left).concat(right);
  }

  return merge(left_half.merge_sort(), right_half.merge_sort());
}

Array.prototype.subsets = function() {

  if (this.length === 0)
    return [[]];

  var lastElement = this.slice(-1)[0];
  var prevSubs = this.slice(0,-1).subsets();
  debugger
  return prevSubs.concat(prevSubs.map(function(el) {
    return el.concat([lastElement]);
  }));
}
