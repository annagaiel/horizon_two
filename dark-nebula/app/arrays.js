exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      var index = arr.indexOf(item);
      if (index > -1) {
          arr.splice(index, 1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert : function(arr, item, index) {
    var latter_arr = arr.slice(index);
    arr[index] = item;
    for (var i = 0; i < latter_arr.length; i++) {
      arr[index + i + 1] = latter_arr[i];
    }
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item){
        count += 1;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var list = [];
    var duplicates = [];
    for (var i = 0; i < arr.length; i++) {
      if (list.indexOf(arr[i]) < 0) {
        list.push(arr[i]);
      }else if (duplicates.indexOf(arr[i]) < 0) {
        duplicates.push(arr[i]);
      }
    }
    return duplicates;
  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target){
        result.push(i);
      }
    }
    return result;
  }
};
