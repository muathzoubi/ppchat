// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, push } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCKJm0ZPKJtL770jecy8ld89Jgw7tw_DX4',
  authDomain: 'chatapp-6ef93.firebaseapp.com',
  projectId: 'chatapp-6ef93',
  storageBucket: 'chatapp-6ef93.appspot.com',
  messagingSenderId: '28264268558',
  appId: '1:28264268558:web:31442b89d29963ac114d5f',
  measurementId: 'G-LH4ZSPQ1YF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, onValue, push };
