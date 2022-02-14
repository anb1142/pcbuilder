import { BsTrash } from "react-icons/bs";
import styles from "@styles/FaqList.module.scss";
import { Dispatch, SetStateAction } from "react";
import { FaqSpace } from "@stores/FaqStore";

type Props = {
	user: any;
	faqs: FaqSpace.List[];
	setRemoveId: Dispatch<SetStateAction<string>>;
	setConfirmFaqOpen: Dispatch<SetStateAction<boolean>>;
};

const FaqList = (props: Props) => {
	const handleAddButton: Function = (id: string) => {
		props.setRemoveId(id);
		props.setConfirmFaqOpen(true);
	};

	return (
		<div className={styles.faqlist}>
			{props.faqs.map(({ id, question, answer }) => (
				<article key={id}>
					{props.user && (
						<button onClick={() => handleAddButton(id)}>
							<BsTrash />
						</button>
					)}
					<h3>{question}</h3>
					<p>{answer}</p>
				</article>
			))}
		</div>
	);
};

export default FaqList;
