/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:true, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:6, maxcomplexity:2 */

/*global JSON:true, expect, module, require, describe, it, returnExports */

(function () {
  'use strict';

  var hasToStringTag;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    hasToStringTag = require('../../index.js');
  } else {
    hasToStringTag = returnExports;
  }

  describe('Basic tests', function () {
    it('results should match', function () {
      var expected = typeof Symbol === 'function' &&
        typeof Symbol() === 'symbol' &&
        typeof Symbol.toStringTag === 'symbol';
      expect(hasToStringTag).toEqual(expected);
    });
  });
}());
