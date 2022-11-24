import { boot } from "quasar/wrappers";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";








// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
export const firebaseConfig = {
  apiKey: "AIzaSyAuXYmnR3pDtBCW1NhNHua_xcXTfc5Qt7c",
  authDomain: "ebaycelulares-fd5c6.firebaseapp.com",
  projectId: "ebaycelulares-fd5c6",
  storageBucket: "ebaycelulares-fd5c6.appspot.com",
  messagingSenderId: "999734887088",
  appId: "1:999734887088:web:b85ddfa6e0f3629725b175",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const dbMarcas = getDocs(collection(db, "users"));

export default { dbMarcas, boot };



const querySnapshot = getDocs(collection(db, "marcas")).then(console.log);
console.log(
  querySnapshot.forEach(element => { console.log(element.id) }))