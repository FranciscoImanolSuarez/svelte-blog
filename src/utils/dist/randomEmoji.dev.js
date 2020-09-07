"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var randomEmoji = function randomEmoji() {
  var emojis = ["😀", "🙊", "🥭", "🗻", "🧡"];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

var _default = randomEmoji;
exports["default"] = _default;