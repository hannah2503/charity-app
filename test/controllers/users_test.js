/* globals api, expect, describe, beforeEach, afterEach, it */

require('../spec_helper');

const User = require('../../models/user');

describe('User tests', () => {

  beforeEach(done => {
    User.collection.remove();
    done();
  });

  afterEach(done => {
    User.collection.remove();
    done();
  });

  describe('GET /api/users/:id', () => {

    let user;

    beforeEach(done => {
      User.create({
        userType: 'shop',
        username: 'sam',
        email: 'sam@sam.com',
        password: 'password',
        passwordConfirmation: 'password'
      })
        .then(userData => {
          user = userData;
          done();
        })
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get(`/api/users/${user.id}`)
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });

  describe('PUT /api/users/:id', () => {

    it('should return a 201 response', done => {
      api
        .put('/api/users/:id')
        .set('Accept', 'application/json')
        .send({
          user: {
            userType: 'shop',
            username: 'sam',
            email: 'sam@sam.com',
            password: 'password',
            passwordConfirmation: 'password'
          }
        })
        .expect(201, done);
    });

    it('should update a user', done => {
      api
        .put('/api/users/:id')
        .set('Accept', 'application/json')
        .send({
          user: {
            userType: 'shop',
            username: 'sam',
            email: 'sam@sam.com',
            password: 'password',
            passwordConfirmation: 'password'
          }
        })
        .end((err, res) => {
          const user = res.body;

          expect(user)
            .to.have.property('_id')
            .and.to.be.a('string');

          expect(user)
            .to.have.property('username')
            .and.to.be.a('string');

          expect(user)
            .to.have.property('userType')
            .and.to.be.a('string');

          expect(user)
            .to.have.property('email')
            .and.to.be.a('string');

          done();
        });
    });
  });

  describe('DELETE /api/users/:id', () => {

    let user;

    beforeEach(done => {
      User.create({
        userType: 'shop',
        username: 'sam',
        email: 'sam@sam.com',
        password: 'password',
        passwordConfirmation: 'password'
      })
        .then(userData => {
          user = userData;
          done();
        })
        .catch(done);
    });

    it('should return a 204 response', done => {
      api
        .delete(`/api/users/${user.id}`)
        .set('Accept', 'application/json')
        .expect(204, done);
    });
  });
});
