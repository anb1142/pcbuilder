import styles from "@styles/Faq.module.scss";
import InfoPage from "@layouts/InfoPage";
import { useEffect, useState } from "react";
import { getFaq, auth } from "@data/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "@components/Loading";
import Admin from "@components/Admin";
import FaqList from "@components/FaqList";

export default function FAQ() {
	const [user] = useAuthState(auth);
	const [removeId, setRemoveId] = useState("");
	const [confirmFaqIsOpen, setConfirmFaqOpen] = useState(false);
	const [faqIsOpen, setFaqOpen] = useState(false);
	const [faq, setFaq] = useState(null);

	const saveFaq = async () => {
		const session = sessionStorage.getItem("faq");
		if (session == null) {
			const faqs = await getFaq();
			setFaq(faqs);
			sessionStorage.setItem("faq", JSON.stringify(faqs));
		} else {
			setFaq(JSON.parse(session));
		}
	};

	useEffect(async () => saveFaq(), []);

	return (
		<InfoPage className={styles.faq} title="Questions and Answers">
			{faq == null && <Loading />}
			{user && faq !== null && (
				<Admin
					faqIsOpen={faqIsOpen}
					setFaqOpen={setFaqOpen}
					removeId={removeId}
					confirmFaqIsOpen={confirmFaqIsOpen}
					setConfirmFaqOpen={setConfirmFaqOpen}
				/>
			)}
			{faq !== null && (
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
