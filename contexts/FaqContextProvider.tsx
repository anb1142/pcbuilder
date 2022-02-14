import { faqCollection } from "@data/firebase";
import { FaqSpace } from "@stores/FaqStore";
import { createContext, useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

export const FaqContext = createContext<FaqSpace.List[]>([]);

const FaqContextProvider = (props: { children: any }) => {
	const [faqs, setFaqs] = useState<FaqSpace.List[]>([]);
	const [value] = useCollection(faqCollection);

	useEffect(() => {
		const getData = async () => {
			if (value) {
				const data = await value.docs.map((doc) => ({
					id: doc.id,
					question: doc.data().question,
					answer: doc.data().answer,
				}));
				setFaqs(data);
			}
		};
		getData();
	}, [value]);

	return <FaqContext.Provider value={faqs}>{props.children}</FaqContext.Provider>;
};

export default FaqContextProvider;
