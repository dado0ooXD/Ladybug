import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const userDb = getAuth(app);
const posts = collection(db, "posts");

// All posts

export const allPosts = async () => {
  const res = await getDocs(posts);
  const ladybugs = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  console.log(ladybugs);
  return ladybugs;
};

// Add ladybug
export const createLadybug = async (data) => {
  await addDoc(posts, data);
};
