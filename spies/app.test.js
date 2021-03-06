const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

//app.__get__
//app.__set__

describe('App', () => {
  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy corretly', () => {
    const spy = expect.createSpy();
    spy('kazikai', 34);
    expect(spy).toHaveBeenCalledWith('kazikai', 34);
  });

  it('should call saveUser with user object', () => {
    const email = 'kazikai84@gmail.com';
    const password = '1234abcd';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});

  });
});