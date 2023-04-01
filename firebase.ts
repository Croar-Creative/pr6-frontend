// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDqajPBHw9RLKlLOroLTn7cqqaMNpIj0JU",
   authDomain: "project6-330ab.firebaseapp.com",
   databaseURL:
      "https://project6-330ab-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "project6-330ab",
   storageBucket: "project6-330ab.appspot.com",
   messagingSenderId: "496258454743",
   appId: "1:496258454743:web:e413cf03e3acba94d6cc92",
   measurementId: "G-CT9NMY1410",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
