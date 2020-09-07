"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _posts = _interopRequireDefault(require("./_posts.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var posts = _posts["default"];
posts.forEach(function (post) {
  post.html = post.html.replace(/^\t{3}/gm, '');
});
var _default = posts;
exports["default"] = _default;