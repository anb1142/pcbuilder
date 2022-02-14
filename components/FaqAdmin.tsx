import AddFaq from "@components/AddFaq";
import Modal from "@components/Modal";
import { FirebaseContext } from "@contexts/FirebaseContextProvider";
import styles from "@styles/FaqAdmin.module.scss";
import { deleteDoc, doc } from "firebase/firestore";
import { Dispatch, SetStateAction, useContext } from "react";

type Props = {
	faqIsOpen: boolean;
	setFaqOpen: Dispatch<SetStateAction<boolean>>;
	removeId: string;
	confirmFaqIsOpen: boolean;
	setConfirmFaqOpen: Dispatch<SetStateAction<boolean>>;
};

const FaqAdmin = (props: Props) => {
	const { db } = useContext(FirebaseContext);

	const removeFaq = async (id: string) => {
		try {
			await deleteDoc(doc(db, "faq", id));
		} catch (error) {
			error instanceof Error && alert(error.message);
		}
	};
	return (
		<>
			<section className={styles.faqadmin}>
				<button onClick={() => props.setFaqOpen(true)}>+</button>
			</section>
			<Modal
				title="Are you sure you want to delete this Q/A ?"
				func={() => removeFaq(props.removeId)}
				isOpen={props.confirmFaqIsOpen}
				setOpen={props.setConfirmFaqOpen}
				contentLabel="confirm"
			/>
			<AddFaq faqIsOpen={props.faqIsOpen} setFaqOpen={props.setFaqOpen} />
		</>
	);
};

export default FaqAdmin;
