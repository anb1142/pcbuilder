import styles from "@styles/Modal.module.scss";
import { Dispatch, SetStateAction, useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("body");

type Props = {
	title?: string;
	func?: Function;
	children?: any;
	className?: string;
	isOpen: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	contentLabel: string;
};

const Modal = (props: Props) => {
	const [closeAnim, setCloseAnim] = useState<boolean>(false);

	const closeModal = () => {
		setCloseAnim(true);
		setTimeout(() => {
			setCloseAnim(false);
			props.setOpen(false);
		}, 200);
	};
	return (
		<ReactModal
			isOpen={props.isOpen}
			onRequestClose={closeModal}
			shouldCloseOnOverlayClick={true}
			contentLabel={props.contentLabel}
			overlayClassName={`${styles.overlay} ${closeAnim ? styles.close : ""}`}
			className={`
				${styles.modal} 
				${props.className ? props.className : ""} 
				${props.title ? styles.faqRemove : ""} 
				${closeAnim ? styles.close : ""}
			`}
		>
			<button onClick={closeModal}>×</button>
			{props.children}
			{props.title && (
				<>
					<p>{props.title}</p>
					<article>
						<button
							className={styles.g}
							onClick={() => {
								if (props.func) props.func();
								closeModal();
							}}
						>
							Yes
						</button>
						<button onClick={closeModal} className={styles.r}>
							No
						</button>
					</article>
				</>
			)}
		</ReactModal>
	);
};

export default Modal;
