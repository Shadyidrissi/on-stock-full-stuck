import firebase from 'firebase/app';
import 'firebase/auth'; // لاستعمال Authentication فقط، اضف حسب ما تحتاج
import 'firebase/firestore'; // لاستعمال Firestore فقط، اضف حسب ما تحتاج

// ضع هنا الإعدادات التي تجدها في صفحة Firebase بعد التسجيل
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID",
};

// تهيئة Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
