/* global it */
'use strict';

var assert    = require('assert');
var charcount = require('.');

it('Astrals', function () {
  assert.equal(charcount('😀'), 1);
  assert.equal(charcount('foo😀'), 4);
  assert.equal(charcount('😀foo'), 4);
  assert.equal(charcount('fo😀o'), 4);
  assert.equal(charcount('fo😀😀o'), 5);
  assert.equal('😀'.length, 2);
});

it('broken surrogates', function () {
  assert.equal(charcount('\uD800foo'), 4);
  assert.equal(charcount('\uDC00foo'), 4);
  assert.equal(charcount('foo\uDC00'), 4);
  assert.equal(charcount('foo\uDC00'), 4);
});
