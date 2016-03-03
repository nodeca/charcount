'use strict';

var SURROGATES_RE = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

module.exports = function (s) {
  return s.replace(SURROGATES_RE, ' ').length;
};
