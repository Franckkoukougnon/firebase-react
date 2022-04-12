import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-fm2oe_IBr1BNoFzeMxVr5yPizYMyOi0",
  authDomain: "authentification-tuto.firebaseapp.com",
  projectId: "authentification-tuto",
  storageBucket: "authentification-tuto.appspot.com",
  messagingSenderId: "173623380613",
  appId: "1:173623380613:web:9d164ee902456216d0b7ec",
  measurementId: "G-ENY1N0ZVDT",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
