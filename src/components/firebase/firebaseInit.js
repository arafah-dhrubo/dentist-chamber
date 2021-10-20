import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebaseConfig';
export const firebaseInitializer = () => initializeApp(firebaseConfig);
