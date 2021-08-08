import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { Logs } from '~types/Log';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: '871682112993',
    appId: '1:871682112993:web:bbda57b9f619c8e3c966a0',
};

const initFirebase = () => !firebase.apps.length && firebase.initializeApp(config);

initFirebase();

const firebaseDB = firebase.database();
const firebaseDBLogs = firebaseDB.ref('logs');
const firebaseStorage = firebase.storage();

const firebaseLooper = (snapshot: firebase.database.DataSnapshot) => {
    const data: Logs = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key,
        });
        return false;
    });
    return data;
};

export { firebase, firebaseDB, firebaseDBLogs, firebaseLooper, firebaseStorage };
