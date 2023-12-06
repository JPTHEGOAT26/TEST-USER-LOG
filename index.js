import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCxXN03D3ZNDwstNgbsWWlRjPcq9IB3JwU",
  authDomain: "gethen-407121.firebaseapp.com",
  databaseURL: "https://gethen-407121-default-rtdb.firebaseio.com",
  projectId: "gethen-407121",
  storageBucket: "gethen-407121.appspot.com",
  messagingSenderId: "661524162176",
  appId: "1:661524162176:web:4f21876f81d7f67f656865",
  measurementId: "G-XSDRT0T60Q"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

function writeUserData(userID, name, email, imageUrl) {
const db = getDatabase();
const refrence = ref(db, 'users/' + userID);

set(reference, {
  username: name, 
  email: email,
  profile_picture: imageUrl
  });
}
writeUserData("JPGOD", "JP", "JP@JP.com", "imageUrl");
