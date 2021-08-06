import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { Map } from 'immutable';

const config = {
    apiKey: 'AIzaSyCuoKle8r8FCIijhELLSaZaaSTq-uhj7lg',
    authDomain: 'wanderlogs-6461b.firebaseapp.com',
    databaseURL:
        'https://wanderlogs-6461b-default-rtdb.firebaseio.com',
    projectId: 'wanderlogs-6461b',
    storageBucket: 'wanderlogs-6461b.appspot.com',
    messagingSenderId: '871682112993',
    appId: '1:871682112993:web:bbda57b9f619c8e3c966a0',
};

const initFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
};

initFirebase();

const firebaseDB = firebase.database();
const firebaseDBLogs = firebaseDB.ref('logs');
const firebaseStorage = firebase.storage();

const firebaseLooper = (snapshot) => {
    const data: Array<{}> = [];
    snapshot.forEach((childSnapshot) => {
        data.push(
            Map({
                ...childSnapshot.val(),
                id: childSnapshot.key,
            })
        );
        return false;
    });
    return data;
};

export {
    firebase,
    firebaseDB,
    firebaseDBLogs,
    firebaseLooper,
    firebaseStorage,
};
