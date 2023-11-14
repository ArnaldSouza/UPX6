// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyDBBe17ykgFKy-YiBl6dW9LiRTyUlhBru0",
  authDomain: "upx6-a3193.firebaseapp.com",
  projectId: "upx6-a3193",
  storageBucket: "upx6-a3193.appspot.com",
  messagingSenderId: "625695865671",
  appId: "1:625695865671:web:3ba7e4cc792ef2b113ea62",
  measurementId: "G-77V5C1PD4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default app;
