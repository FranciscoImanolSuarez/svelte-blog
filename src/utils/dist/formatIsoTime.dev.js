"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var formatIsoTime = function formatIsoTime(isoTime) {
  var date = new Date(isoTime);
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return date.toLocaleDateString("es-ES", options);
};

var _default = formatIsoTime;
exports["default"] = _default;