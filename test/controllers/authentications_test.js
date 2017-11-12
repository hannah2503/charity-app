/* globals api, expect, describe, beforeEach, afterEach, it, xit */

require('../spec_helper');
const User = require('../../models/user');

describe('Authentications', function() {

  // drop the database before each instance of the test
  beforeEach(done => {
    User.collection.remove();
    done();
  });

  afterEach(done => {
    User.collection.remove();
    done();
  });

  //describe the POST request to the registration api
  describe('POST /api/register', function(){
    // it syntax with text explaining the task and followed by a function which posts, sets and sends sample log-in data based on the user model.
    it('should register a user with the correct credentials', function  (done) {
      api
        .post('/api/register')
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
      // end syntax which passes 'err' and 'res' as arguments and 'expects' responses as specified by us
        .end((err, res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.be.a('object');
          expect(res.body.token).to.be.a('string');
          //complete the test with 'done' and it will move to the next one.
          done();
        });
    });
    it('should not register a user with no email', function(done) {
      api
        .post('api/register')
        .set('Accept', 'application/json')
        .send({
          user: {
            userType: 'shop',
            username: 'sam',
            password: 'password',
            passwordConfirmation: 'password'
          }
        })
        .end((err, res) => {
          expect(res.status).to.eq(400);
          expect(res.body).to.be.a('object');
          expect(res.body.errors).to.eq('ValidationError: email: Path `email` is required.');
          expect(res.body.message).to.eq('Bad Request');
          done();
        });
    });
    xit('should not register a user with no password', function() {
    });
    xit('should not register a user with no password confirmation', function() {
    });
  });


});
