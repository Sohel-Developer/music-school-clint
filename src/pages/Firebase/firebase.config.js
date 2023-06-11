
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCHvNPpAdEl834NHeUvAfP4F8l1hH_yiNs",
    authDomain: "music-school-9e40b.firebaseapp.com",
    projectId: "music-school-9e40b",
    storageBucket: "music-school-9e40b.appspot.com",
    messagingSenderId: "203678954522",
    appId: "1:203678954522:web:f54abd937c413868afcda3"
};

const app = initializeApp(firebaseConfig);

export default app