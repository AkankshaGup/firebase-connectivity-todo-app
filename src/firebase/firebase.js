import * as firebase from "firebase";
const Config = {
    apiKey: "AIzaSyB3wmR4ee05SlsdmTu4TLKlPnXs4cE7AxE",
    authDomain: "vkaps-todolist.firebaseapp.com",
    databaseURL: "https://vkaps-todolist.firebaseio.com",
    projectId: "vkaps-todolist",
    storageBucket: "vkaps-todolist.appspot.com",
    messagingSenderId: "673239613777",
    appId: "1:673239613777:web:dd7aed338bd99329f91370",
    measurementId: "G-NGFF06RSJZ"
  };
  firebase.initializeApp(Config);

const database= firebase.database()


export { firebase, database as default };