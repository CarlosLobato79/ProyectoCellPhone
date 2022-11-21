// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARQL8GTjpdEIt_vJyutgF1RgipIokJi58",
  authDomain: "cellphonestoreshop.firebaseapp.com",
  projectId: "cellphonestoreshop",
  storageBucket: "cellphonestoreshop.appspot.com",
  messagingSenderId: "360266346578",
  appId: "1:360266346578:web:ffa7f7d5c26a9243e9ef8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const usersCollection = db.collection("users");

export const createUser = (user) => {
  return usersCollection.add("user");
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exist ? user.data() : null;
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};

export const useLoadUser = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onMounted(close);
  return users;
};
