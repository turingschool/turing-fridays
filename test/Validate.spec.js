import { expect, assert } from 'chai';
const Validate = require('../lib/helpers/validate');

describe('Validator', () => {
  it('should return link if it starts with http://', () => {
    const inputLink = 'http://someurl.com';
    const expected = 'http://someurl.com';

    assert.equal(Validate.link(inputLink), expected);
  })

  it('should add http:// to link that does not have it', () => {
    const inputLink = 'someurl.com';
    const expected = 'http://someurl.com';

    assert.equal(Validate.link(inputLink), expected);
  })
})
