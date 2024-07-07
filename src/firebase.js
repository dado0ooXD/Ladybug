import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  // getDocs,
  getFirestore,
  // orderBy,
  // query,
} from "firebase/firestore";

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
const postCollection = collection(db, "posts");
const bookmarksCollection = collection(db, "bookmarks");

// const sorted = query(postCollection, orderBy("createdAt", "desc"));

// All posts

// export const allPosts = async () => {
//   const res = await getDocs(sorted)
//     .then((res) => res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//     .catch((error) => console.log("This is error ===>", error));
//   console.log(res);
//   return res;
// };

// Add ladybug
export const createLadybug = async (data) => {
  await addDoc(postCollection, data);
};

// Add to favorites
export const addToBookmarks = async (data) => {
  await addDoc(bookmarksCollection, data);
};
