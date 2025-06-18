import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Importa o Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBvR_IlzZPkpV28MOjNQjPuUNkBL1Cfxuk",
  authDomain: "facetec-3a335.firebaseapp.com",
  projectId: "facetec-3a335",
  storageBucket: "facetec-3a335.appspot.com",
  messagingSenderId: "517730701506",
  appId: "1:517730701506:web:ee9d0f8c6064d244f62b5b",
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);

// Inicialização do serviço de autenticação
const autenticacao = getAuth(app);

// Inicialização do Firestore
const firestore = getFirestore(app); // Inicializa o Firestore

export { autenticacao, firestore }; // Exporta tanto a autenticação quanto o Firestore
