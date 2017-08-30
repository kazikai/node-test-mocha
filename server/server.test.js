const request = require('supertest');
const expect = require('expect');

const app = require('./server.js').app;

// Server
  //GET /
    //SOME TEST CASE
  //GET /users
    //some test case

describe('Express', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        //.expect({
        //  error: 'Page not found'
        //})
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Todo App v1.0'
          })
        })
        .end(done);
    });
  });
  describe('GET /users', () => {
    it('should return User Info response', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'kazikai',
            age: 34
          });
        })
        .end(done);
    });
  });
});

