import { BsTrash } from "react-icons/bs";
import styles from "@styles/FaqList.module.scss";

const FaqList = ({ user, faq, setRemoveId, setConfirmFaqOpen }) => (
	<div className={styles.faqlist}>
		{faq.map(({ id, question, answer }) => (
			<article key={id}>
				{user && (
					<button
						onClick={() => {
							setRemoveId(id);
							setConfirmFaqOpen(true);
						}}
					>
						<BsTrash />
					</button>
				)}
				<h3>{question}</h3>
				<p>{answer}</p>
			</article>
		))}
	</div>
);

export default FaqList;
