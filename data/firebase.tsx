import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

const addFaq = async (question: string, answer: string) => {
	try {
		await addDoc(faqCollection, { question, answer });
	} catch (error) {
		error instanceof Error && alert(error.message);
	}
};

const removeFaq = async (id: string) => {
	try {
		await deleteDoc(doc(db, "faq", id));
	} catch (error) {
		error instanceof Error && alert(error.message);
	}
};

export { app, db, auth, faqCollection, addFaq, removeFaq };
