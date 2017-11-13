/* globals api, expect, describe, xdescribe, beforeEach, afterEach, it, xit */

require('../spec_helper');

const Shop = require('../../models/shop');

describe('Shop tests', () => {

  beforeEach(done => {
    Shop.collection.remove();
    done();
  });

  afterEach(done => {
    Shop.collection.remove();
    done();
  });

  describe('GET /api/shops', () => {

    beforeEach(done => {
      Shop.create({
        name: 'Catriona',
        address: {
          line1: '260 Ability Place',
          city: 'London',
          postcode: 'E14 9DF',
          country: 'UK'
        },
        email: 'odwyercatriona@gmail.com',
        number: '072432676427',
        bio: 'blah blah',
        image: 'http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/256/shop-icon.png',
        clothesWanted: 'tee-shirts',
        clothesNotWanted: 'jeans'
      })
        .then(() => done())
        .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get('/api/shops')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should respond with a JSON object', done => {
      api
        .get('/api/shops')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return an array of shops', done => {
      api
        .get('/api/shops')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  describe('POST /api/shops', () => {
    it('should return a 201 response', done => {
      api
        .post('/api/shops')
        .set('Accept', 'application/json')
        .send({
          shop: {
            name: 'Catriona',
            address: {
              line1: '260 Ability Place',
              city: 'London',
              postcode: 'E14 9DF',
              country: 'UK'
            },
            email: 'odwyercatriona@gmail.com',
            number: '072432676427',
            bio: 'blah blah',
            image: 'http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/256/shop-icon.png',
            clothesWanted: 'tee-shirts',
            clothesNotWanted: 'jeans'
          }
        })
        .expect(201, done);
    });
    it('should create a shop', done => {
      api
      .post('/api/shops')
      .set('Accept', 'application/json')
      .send({
      shop: {
        name: 'Catriona',
        address: {
          line1: '260 Ability Place',
          city: 'London',
          postcode: 'E14 9DF',
          country: 'UK'
        },
        email: 'odwyercatriona@gmail.com',
        number: '072432676427',
        bio: 'blah blah',
        image: 'http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/256/shop-icon.png',
        clothesWanted: 'tee-shirts',
        clothesNotWanted: 'jeans'
      }
    })
    .end((err, res) => {
      const shop = res.body;

      expect(shop)
        .to.have.property('id')
        .and.to.be.a('string');

        done();
    })
    })
  }); 
  });

});
