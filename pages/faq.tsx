import InfoPage from "@layouts/InfoPage";
import { useEffect, useState } from "react";
import { getFaq, auth } from "@data/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "@components/Loading";
import FaqAdmin from "@components/FaqAdmin";
import FaqList from "@components/FaqList";
import { FaqSpace } from "@stores/FaqStore";

const Faq = () => {
	const [user] = useAuthState(auth);
	const [removeId, setRemoveId] = useState<string>("");
	const [confirmFaqIsOpen, setConfirmFaqOpen] = useState<boolean>(false);
	const [faqIsOpen, setFaqOpen] = useState<boolean>(false);
	const [faqs, setFaqs] = useState<FaqSpace.List[]>([]);

	const saveFaq = async () => {
		const session = sessionStorage.getItem("faq");
		if (session == null) {
			const faq = await getFaq();
			if (faq) setFaqs(faq);
			sessionStorage.setItem("faq", JSON.stringify(faq));
		} else {
			setFaqs(JSON.parse(session));
		}
	};

	useEffect(() => {
		saveFaq();
	}, []);
	return (
		<InfoPage h1style={user ? { marginBottom: 0 } : {}} title="Questions and Answers">
			{faqs.length === 0 ? (
				<Loading />
			) : (
				<>
					{user && (
						<FaqAdmin
							faqIsOpen={faqIsOpen}
							setFaqOpen={setFaqOpen}
							removeId={removeId}
							confirmFaqIsOpen={confirmFaqIsOpen}
							setConfirmFaqOpen={setConfirmFaqOpen}
						/>
					)}
					<FaqList
						setConfirmFaqOpen={setConfirmFaqOpen}
						setRemoveId={setRemoveId}
						faqs={faqs}
						user={user ? user : undefined}
					/>
				</>
			)}
		</InfoPage>
	);
};

export default Faq;
