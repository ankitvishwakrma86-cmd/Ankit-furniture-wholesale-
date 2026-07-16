import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBdQ9402U3IPMaqyhjcdr1IvNurFpY4lKg",
  authDomain: "ankit-furniture-wholesale.firebaseapp.com",
  projectId: "ankit-furniture-wholesale",
  storageBucket: "ankit-furniture-wholesale.firebasestorage.app",
  messagingSenderId: "1049610444217",
  appId: "1:1049610444217:web:807e685c4e95db6484ea68"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };