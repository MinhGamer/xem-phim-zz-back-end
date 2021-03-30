const admin = require('firebase-admin');

var serviceAccount = require('../my-service-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'xem-phim-zz.appspot.com',
});

const db = admin.firestore();

module.exports = { admin, db };
