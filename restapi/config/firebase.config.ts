import { initializeApp } from "firebase/app";

import {firebaseConfig} from './dotenv'

const app = initializeApp(firebaseConfig);

export { app };
