const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json');

const app = express();
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/api/:temp', (req, res) => {
    let docRef = db.collection('temp-reader').doc('current-reading').set({
        temp: req.params.temp
    });
    res.send('Success');
})

app.listen(3000, () => console.log('Listening on port 3000'));