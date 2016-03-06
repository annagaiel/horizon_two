exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
      if (str[i] != result[i])
      str[i]
    }
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
      result += str[str.length - i - 1];
    }
    return result;
  }
};
