import { BsTrash } from "react-icons/bs";
import styles from "@styles/FaqList.module.scss";

const FaqList = ({ user, faq, setRemoveId, setConfirmFaqOpen }) => {
	return (
		<div className={styles.faqlist}>
			{faq.docs.map((doc) => (
				<article key={doc.id}>
					{user && (
						<button
							onClick={() => {
								setRemoveId(doc.id);
								setConfirmFaqOpen(true);
							}}
						>
							<BsTrash />
						</button>
					)}
					<h3>{doc.data().question}</h3>
					<p>{doc.data().answer}</p>
				</article>
			))}
		</div>
	);
};

export default FaqList;
