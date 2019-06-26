import React from 'react'
import Firebase, { FirebaseContext } from './src/firebase'

export const wrapRootElement = ({ element }) => (
    <FirebaseContext.Provider value={new Firebase()}>{element}</FirebaseContext.Provider>
)