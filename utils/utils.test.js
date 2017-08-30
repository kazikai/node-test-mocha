const expect = require('expect');
const utils = require('./utils');


describe('Utils', () => {

  describe('#add', () => {
    it('should add tow numbers', () => {
      let res = utils.add(33, 11);
      //if (res !== 44) {
      //  throw new Error(`Expected 44, but got ${res}`);
      //}
      expect(res).toBe(44).toBeA('number');//, `Expected 44, but got ${res}`);
    });
      // done이 필요
    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done(); // done을 가지고 비동기의 Resolve를 해줘야함
      });
    });
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

  it('should async square two numbers', (done) => {
    utils.asyncSquare(4, (res) => {
      expect(res).toBe(16).toBeA('number');
      done(); // done을 가지고 비동기의 Resolve를 해줘야함
    });
  });
});



