// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrAdCF7tGNSX__J_DLUTqNLvV7xGVvH7w",
  authDomain: "test-2024-57d15.firebaseapp.com",
  projectId: "test-2024-57d15",
  storageBucket: "test-2024-57d15.appspot.com",
  messagingSenderId: "61359574521",
  appId: "1:61359574521:web:fe0e4a76bbc965c2028128",
  measurementId: "G-NZLG9BRCSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);