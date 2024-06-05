const admin = require('firebase-admin');
// const serviceAccount = require('./path/to/your/serviceAccountKey.json'); // Sesuaikan dengan path ke file JSON Anda

const firebaseConfig = {
  apiKey: 'AIzaSyCBTZ4ZiAclEdP3x6kGIMmd8EiwqOJrnSU',
  authDomain: 'wanderlust-api-472c3.firebaseapp.com',
  projectId: 'wanderlust-api-472c3',
  storageBucket: 'wanderlust-api-472c3.appspot.com',
  messagingSenderId: '483194771047',
  appId: '1:483194771047:web:039bc106a9e073ad63e6c2',
  measurementId: 'G-SJPQJK8MD2',
};
admin.initializeApp(firebaseConfig);

const db = admin.firestore();

module.exports = { admin, db };
