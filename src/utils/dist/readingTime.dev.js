"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var readingTime = function readingTime(text) {
  var wordsPerMinute = 200;
  var numOfWords = text.split(/\s/g).length;
  var minutes = numOfWords / wordsPerMinute;
  var readTime = Math.ceil(minutes);
  return "\uD83D\uDCD6 ".concat(readTime, " Min.");
};

var _default = readingTime;
exports["default"] = _default;