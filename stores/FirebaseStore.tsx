import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
import { CollectionReference, DocumentData, Firestore } from "firebase/firestore";

export namespace Firebase {
	export interface data {
		app: FirebaseApp;
		db: Firestore;
		faqCollection: CollectionReference<DocumentData>;
		auth: Auth;
	}
}
