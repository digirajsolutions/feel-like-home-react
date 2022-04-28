import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBH6boBqTQqQENWxAxGM4ABKhpKA7AH91A',
  authDomain: 'feel-like-home-3f092.firebaseapp.com',
  projectId: 'feel-like-home-3f092',
  storageBucket: 'feel-like-home-3f092.appspot.com',
  messagingSenderId: '138301833180',
  appId: '1:138301833180:web:c9a5e19df000d2c7c35919',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
