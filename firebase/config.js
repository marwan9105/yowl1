// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA66Z1m7AtRCN1tD3sLib3qSKNPLQmxfik",
  authDomain: "yowl-48c83.firebaseapp.com",
  projectId: "yowl-48c83",
  storageBucket: "yowl-48c83.appspot.com",
  messagingSenderId: "582170534578",
  appId: "1:582170534578:web:cc19f9b1f208e203d2dfab",
  measurementId: "G-SDKCJYB2C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
// Comment out or remove the following line if you do not want to use Firebase Analytics
const analytics = getAnalytics(app);

// Export the Firebase app and analytics instances
export { app, analytics };
