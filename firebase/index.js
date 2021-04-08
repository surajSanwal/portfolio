
import firebase from "firebase";
import "firebase/analytics";

export const Firebase = {}
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpS7X5L4GHrIqDlRaDnuQdfsvV7e5RMSo",
    authDomain: "portfolio-8a577.firebaseapp.com",
    projectId: "portfolio-8a577",
    storageBucket: "portfolio-8a577.appspot.com",
    messagingSenderId: "68954022452",
    appId: "1:68954022452:web:b3d977c76a9f1b46d92061",
    measurementId: "G-G14VHJP9WZ"
};


if (typeof window !== undefined && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    //to insure analytics 
    if ('measurementId' in firebaseConfig) {
        Firebase["analytics"] = firebase.analytics()
    };
}


export default firebase;