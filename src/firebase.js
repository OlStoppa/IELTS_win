
import React from 'react'
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID
  };

  class Firebase {
    
    constructor() {
      if (typeof window !== 'undefined') {
       
       app.initializeApp(config) 
      this.database = app.database()
      this.storage = app.storage()
      }
    }
  }

  export default Firebase

  const FirebaseContext = React.createContext(null)

  export { FirebaseContext }





