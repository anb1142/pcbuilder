import Modal from "@components/Modal";
import AddFaq from "@components/AddFaq";
import { removeFaq } from "@data/firebase";
import styles from "@styles/FaqAdmin.module.scss";
import { Dispatch, SetStateAction } from "react";

type Props = {
	faqIsOpen: boolean;
	setFaqOpen: Dispatch<SetStateAction<boolean>>;
	removeId: string;
	confirmFaqIsOpen: boolean;
	setConfirmFaqOpen: Dispatch<SetStateAction<boolean>>;
};

const FaqAdmin = (props: Props) => (
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

export default FaqAdmin;
