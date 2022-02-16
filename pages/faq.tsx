import FaqAdmin from "@components/FaqAdmin";
import FaqList from "@components/FaqList";
import Loading from "@components/Loading";
import { FaqContext } from "@contexts/FaqContextProvider";
import { UserContext } from "@contexts/UserContextProvider";
import InfoPage from "@layouts/InfoPage";
import { useContext, useState } from "react";

const Faq = () => {
	const user = useContext(UserContext);

	const [removeId, setRemoveId] = useState<string>("");
	const [confirmFaqIsOpen, setConfirmFaqOpen] = useState<boolean>(false);
	const [faqIsOpen, setFaqOpen] = useState<boolean>(false);
	const faqs = useContext(FaqContext);
	console.log(user);

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
