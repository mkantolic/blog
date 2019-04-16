import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyCgefwrR6Jp_BalbWikG-PygBIdFPxsCBI",
  authDomain: "photography-dfaf9.firebaseapp.com",
  databaseURL: "https://photography-dfaf9.firebaseio.com",
  projectId: "photography-dfaf9",
  storageBucket: "photography-dfaf9.appspot.com",
  messagingSenderId: "53429412109"
};
firebase.initializeApp(config);

export const database = firebase.database().ref("posts/blog");
export const database_users = firebase.database().ref("posts/userProfile");
export const auth = firebase.auth();
