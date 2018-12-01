 import Firebase from 'firebase'
 var config = {
    apiKey: "AIzaSyDefGMp0m-baFh96gWRz18XBt9EkNmvQsk",
    authDomain: "harold-pizza.firebaseapp.com",
    databaseURL: "https://harold-pizza.firebaseio.com",
    projectId: "harold-pizza",
    storageBucket: "harold-pizza.appspot.com",
    messagingSenderId: "690590290670"
  };
  const firebaseApp = Firebase.initializeApp(config);

  const db = firebaseApp.database()
  export const dbMenuRef = db.ref('menu')