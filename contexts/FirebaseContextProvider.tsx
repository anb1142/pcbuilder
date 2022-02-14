import { Firebase } from "@stores/FirebaseStore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { createContext } from "react";

export const FirebaseContext = createContext<Firebase.data>({} as Firebase.data);

const FirebaseContextProvider = (props: { children: any }) => {
	const firebaseConfig = {
		apiKey: "AIzaSyCw5jzlnY5ekX1mxlx6pxYwfYqOiSmCx64",
		authDomain: "pcbuilder9410.firebaseapp.com",
		projectId: "pcbuilder9410",
		storageBucket: "pcbuilder9410.appspot.com",
		messagingSenderId: "4505711692",
		appId: "1:4505711692:web:83c5b2726fe8a21138f0e9",
		measurementId: "G-P9ZWD0K8LZ",
	};

	const app = initializeApp(firebaseConfig);

	const db = getFirestore(app);

	const faqCollection = collection(db, "faq");
	const auth = getAuth(app);

	return (
		<FirebaseContext.Provider value={{ app, db, auth, faqCollection }}>
			{props.children}
		</FirebaseContext.Provider>
	);
};

export default FirebaseContextProvider;
