import firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB74qTZLUYWXvYODY8uxIBgy-MU-wnu1ik",
    authDomain: "blasco-388317.firebaseapp.com",
    projectId: "blasco-388317",
    storageBucket: "blasco-388317.appspot.com",
    messagingSenderId: "123487317539",
    appId: "1:123487317539:web:6e8898187643cc1ad74b96",
    measurementId: "G-X4RFSXQF2B"
  };

export const useFirebase = () => {
    // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app); // TODO: Enable it in the future


    // Initialize Cloud Firestore and get a reference to the service
    // const db = getFirestore(app);


// Ejemplo de creación de un nuevo documento en la colección "products"
// const collectionRef = collection(db, 'products');
// const collectionRef2 = collection(db, 'category');

// const newProduct = {
//   name: 'Producto 1',
//   price: 9.99,
//   description: 'Descripción del producto 1',
// //   category: collectionRef2,
// };

// Crea un nuevo documento con un ID generado automáticamente
// const docRef = doc(collectionRef);

// // Establece los datos del nuevo documento
// setDoc(docRef, newProduct);

// console.log('Nuevo producto creado con ID:', docRef.id);


    return {
        // app,
        // db,
        // docRef,
    };
};
