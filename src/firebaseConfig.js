import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp_9wMR_aQ006KHlN0y3tz9Jsz7adAkhI",
  authDomain: "user-login-component.firebaseapp.com",
  projectId: "user-login-component",
  storageBucket: "user-login-component.firebasestorage.app",
  messagingSenderId: "997969971009",
  appId: "1:997969971009:web:ed71f051510203836943c0",
  measurementId: "G-S6HVMW7RTK"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const auth = getAuth(app);
