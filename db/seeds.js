const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/wdip3-development';
mongoose.connect(dbURI, { useMongoClient: true });

const User = require('../models/user');
const Shop = require('../models/shop');

Shop.collection.drop();
User.collection.drop();


User
  .create([{
    userType: 'Donor',
    username: 'CamJones',
    email: 'cam@cam.com',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userType: 'Donor',
    username: 'HannahCross',
    email: 'han@han.com',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userType: 'Shop Owner',
    username: 'CatrionaO',
    email: 'cat@cat.com',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    userType: 'Shop Owner',
    username: 'camJ',
    email: 'camj@camj.com',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created!`);

    return Shop
      .create([{
        name: 'Oxfam Aldgate',
        formatted_address: '20 Aldgate street',
        lng: '-0.148043912362249',
        lat: '51.5709557851282',
        email: 'cr@cdrfdverr.com',
        international_phone_number: '020 8341 6333',
        bio: 'charity shop with lots of wonderful things in it',
        icon: 'http://s3.amazonaws.com/ldc/large/2268/22686146.jpg',
        clothesWanted: 'jumpers',
        clothesNotWanted: 'dresses',
        place_id: 'London',
        createdBy: users[1],
        comments: [
          {
            content: 'amaaaazing!',
            createdBy: users[2]
          }
        ]
      },{
        name: 'Cancer Research Highgate',
        formatted_address: '10 Aldgate street',
        lng: '-0.148043912362248',
        lat: '51.5709557851283',
        email: 'cr@cr.com',
        international_phone_number: '020 8341 6330',
        bio: 'charity shop with lots of things in it',
        icon: 'http://s3.amazonaws.com/ldc/large/2268/22686148.jpg',
        clothesWanted: 'jeans, t-shirts',
        clothesNotWanted: 'shoes, hats',
        place_id: 'London',
        createdBy: users[3],
        comments: [
          {
            content: 'great shop',
            createdBy: users[0]
          }
        ]
      }]);
  })
  .then((shops) => {
    console.log(`${shops.length} shops created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
