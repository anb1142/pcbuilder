import styles from "@styles/Faq.module.scss";
import InfoPage from "@layouts/InfoPage";
import { useState } from "react";
import { faqCollection, auth } from "@data/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "@components/Loading";
import Admin from "@components/Admin";
import FaqList from "@components/FaqList";

export default function FAQ() {
	const [faq, loading] = useCollection(faqCollection);
	const [user] = useAuthState(auth);
	const [removeId, setRemoveId] = useState("");
	const [confirmFaqIsOpen, setConfirmFaqOpen] = useState(false);
	const [faqIsOpen, setFaqOpen] = useState(false);

	return (
		<InfoPage className={styles.faq} title="Questions and Answers">
			{loading && <Loading />}
			{user && faq && (
				<Admin
					faqIsOpen={faqIsOpen}
					setFaqOpen={setFaqOpen}
					removeId={removeId}
					confirmFaqIsOpen={confirmFaqIsOpen}
					setConfirmFaqOpen={setConfirmFaqOpen}
				/>
			)}
			{faq && (
				<FaqList
					setConfirmFaqOpen={setConfirmFaqOpen}
					setRemoveId={setRemoveId}
					faq={faq}
					user={user ? user : undefined}
				/>
			)}
		</InfoPage>
	);
}
