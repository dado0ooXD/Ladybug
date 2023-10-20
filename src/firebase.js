import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEBav2r_ZguSfHNXilNKeagWHL6tplPK0",
  authDomain: "ladybug-48e45.firebaseapp.com",
  projectId: "ladybug-48e45",
  storageBucket: "ladybug-48e45.appspot.com",
  messagingSenderId: "1097733359904",
  appId: "1:1097733359904:web:803c8e5e653e19c0876f45",
};

const app = initializeApp(firebaseConfig);
export const userDb = getAuth(app);
