const expect = require('expect');
const utils = require('./utils');

it('should add tow numbers', () => {
  let res = utils.add(33, 11);
  //if (res !== 44) {
  //  throw new Error(`Expected 44, but got ${res}`);
  //}
  expect(res).toBe(44).toBeA('number');//, `Expected 44, but got ${res}`);
});

it('should square number', () => {
  let res = utils.square(2);
  //if (res !== 4) {
  //  throw new Error(`Expected 4, but got ${res}`);
  //}
  expect(res).toBe(4, `Expected 4, but got ${res}`);
});

it('should expect some values', () => {
  expect({
    name: 'kazikai'
  }).toNotEqual({
    name: 'Kazikai'
  });
});

it('should expect some values', () => {
  expect([1,2,3]).toExclude(4);
});

it('should verify first and last name are set', () => {
  let user = {
    location: 'Korea',
    age: 34
  };
  let name = utils.setName(user, 'Han Junghyun');
  //expect(name.firstName).toBe('Han');
  //expect(name.lastName).toBe('Junghyun');
  expect(name).toInclude({
    firstName: 'Han',
    lastName: 'Junghyun'
  });
});


