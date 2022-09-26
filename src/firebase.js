// v9 compat packages are API compatible with v8 code
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA8MEG4jzl332LZ8GTgh-x9Wy38lhXJMEA",
  authDomain: "disneyplus-clone-27bbd.firebaseapp.com",
  projectId: "disneyplus-clone-27bbd",
  storageBucket: "disneyplus-clone-27bbd.appspot.com",
  messagingSenderId: "743544916698",
  appId: "1:743544916698:web:79f2391d253a8e2249b3e3",
  measurementId: "G-R70SNRHS4V",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();
export { auth, provider, storage };
export default db;
