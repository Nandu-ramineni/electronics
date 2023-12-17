
import { initializeApp } from "firebase/app";
import{getAuth,} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB2LvXI89f5qt--9iHnV8kriGBpZQ6wz7k",
  authDomain: "techcraft-3c321.firebaseapp.com",
  projectId: "techcraft-3c321",
  storageBucket: "techcraft-3c321.appspot.com",
  messagingSenderId: "940298134618",
  appId: "1:940298134618:web:00197ee32eacd2a5a02463",
  measurementId: "G-J7N3SXD0T0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;