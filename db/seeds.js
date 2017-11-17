const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const dbURI =
process.env.MONGODB_URI || 'mongodb://localhost/wdip3-development';
mongoose.connect(dbURI, { useMongoClient: true });

const User = require('../models/user');
const Shop = require('../models/shop');

Shop.collection.drop();
User.collection.drop();

User.create([
  {
    userType: 'Donor',
    username: 'CamJones',
    email: 'cam@cam.com',
    password: 'password',
    passwordConfirmation: 'password',
    image:
      'http://i.dailymail.co.uk/i/pix/2017/03/05/10/0018F2E600000258-0-image-a-55_1488709297836.jpg'
  },
  {
    userType: 'Donor',
    username: 'HannahCross',
    email: 'han@han.com',
    password: 'password',
    passwordConfirmation: 'password',
    image:
      'http://www.licensingsource.net/wp-content/uploads/2017/03/MiffyBalloon.jpg'
  },
  {
    userType: 'Shop Owner',
    username: 'Catriona',
    email: 'cat@cat.com',
    password: 'password',
    passwordConfirmation: 'password',
    image:
      'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKDAAAAJDliNmVlNDk1LTg1YmYtNDlkNi04OTBlLThkNmI3Yjk0ZGFlMQ.jpg'
  },
  {
    userType: 'Shop Owner',
    username: 'CamJ',
    email: 'camj@camj.com',
    password: 'password',
    passwordConfirmation: 'password',
    image:
      'https://shapersofthe80s.files.wordpress.com/2010/11/pp10rcja.jpg?w=500'
  }
])
  .then(users => {
    console.log(`${users.length} users created!`);

    return Shop.create([
      {
        name: 'Oxfam',
        formatted_address: '29 Islington High St, London N1 9LH',
        lat: '51.532903',
        lng: '-0.10638410000001386',
        email: 'oxfam@oxfam.com',
        international_phone_number: '020 8341 6333',
        bio:
          'Oxfam is an international confederation of charitable organizations focused on the alleviation of global poverty.',
        icon:
          'https://pbs.twimg.com/profile_images/875688263721385984/Fepaw00Z.jpg',
        clothesWanted: 'Jumpers, Books',
        clothesNotWanted: 'Dresses',
        place_id: 'ChIJibNxJkMbdkgR54kUGV-3aY0',
        createdBy: users[1],
        comments: [
          {
            content: 'Amaaaazing stuff and for a great cause!',
            createdBy: users[2]
          }
        ]
      },
      {
        name: 'Cancer Research Highgate',
        formatted_address: '72 Highgate High St, Highgate, London N6 5HX',
        lat: '51.5709557851283',
        lng: '-0.148043912362248',
        email: 'cr@cr.com',
        international_phone_number: '020 8341 6330',
        bio:
          'Cancer Research UK is a cancer research and awareness charity in the United Kingdom.',
        icon: 'http://s3.amazonaws.com/ldc/large/2268/22686148.jpg',
        clothesWanted: 'Jeans, T-Shirts',
        clothesNotWanted: 'Shoes, Hats',
        place_id: 'ChIJq1Mxkk4adkgRsGt1gj3UbYo',
        createdBy: users[3],
        comments: [
          {
            content: 'Great shop!',
            createdBy: users[0]
          }
        ]
      },
      {
        name: 'Shelter charity shop',
        formatted_address: '19, Topsfield Parade, Tottenham Ln, London N8 8PT',
        lat: '51.58018949999999',
        lng: '-0.12332839999999123',
        email: 'shelter@shelter.com',
        international_phone_number: '020 8340 7061',
        bio:
          'Shelter is a registered charity that campaigns to end homelessness and bad housing in England and Scotland.',
        icon:
          'http://media.shelter.org.uk/__data/assets/image/0003/355278/shelter-white-large.png',
        clothesWanted: 'Dresses, Shoes',
        clothesNotWanted: 'Jeans, Bags',
        place_id: 'ChIJzyHTI8EbdkgReT3bxlBL9ss',
        createdBy: users[3],
        comments: [
          {
            content: 'Great charity Shop - so friendly!',
            createdBy: users[1]
          }
        ]
      },
      {
        name: 'The Spitalfields Crypt Trust',
        formatted_address: '27 Whitechapel Rd, London E1 1DU',
        lat: '51.5166254',
        lng: '-0.0688211000000365',
        email: 'crypt-trust@spitalfields.com',
        international_phone_number: '020 7377 9893',
        bio:
          'SCT part of interfaith charity shop at Selfridges by Artangel and Miranda July',
        icon: 'http://spitalfields.co.uk/content/uploads/2016/02/SCT-Logo.jpg',
        clothesWanted: 'Dresses, Shoes',
        clothesNotWanted: 'Jeans, Bags',
        place_id: 'ChIJA975-LQcdkgRpXONJwY1kI4s',
        createdBy: users[2],
        comments: [
          {
            content: 'Great charity Shop - so friendly!',
            createdBy: users[0]
          }
        ]
      },
      {
        name: 'Crisis',
        formatted_address: '66 Commercial St, London E1 6LT',
        lat: '51.5181011',
        lng: '-0.07392670000001544',
        email: 'crisis@crisis.com',
        international_phone_number: '0300 636 1967',
        bio:
          'We are the national charity for homeless people. We know that homelessness is not inevitable. We know that together we can end it.',
        icon: 'https://www.crisis.org.uk/media/237531/crisis_fblogo.jpg',
        clothesWanted: 'Coats, Shoes',
        clothesNotWanted: 'Dresses, Bags',
        place_id: 'ChIJZ6E1ALUcdkgRCooOhiRHoM8',
        createdBy: users[2],
        comments: [
          {
            content:
              'Can hardly tell it is a charity shop! Amazing things on sale.',
            createdBy: users[1]
          }
        ]
      }
    ]);
  })
  .then(shops => {
    console.log(`${shops.length} shops created!`);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
