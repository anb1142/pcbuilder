import styles from "@styles/Modal.module.scss";
import { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("body");

export default function ModalView({
	title,
	func,
	children,
	className,
	isOpen,
	setOpen,
	contentLabel,
}) {
	const [closeAnim, setCloseAnim] = useState(false);
	const closeModal = () => {
		setCloseAnim(true);
		setTimeout(() => {
			setCloseAnim(false);
			setOpen(false);
		}, 200);
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			shouldCloseOnOverlayClick={true}
			contentLabel={contentLabel}
			overlayClassName={`${styles.overlay} ${closeAnim ? styles.close : ""}`}
			className={`
				${styles.modal} 
				${className ? className : ""} 
				${title ? styles.faqRemove : ""} 
				${closeAnim ? styles.close : ""}
			`}
		>
			<button onClick={closeModal}>×</button>
			{children && children}
			{title && (
				<>
					<p>{title}</p>
					<article>
						<button
							className={styles.g}
							onClick={() => {
								func();
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
		</Modal>
	);
}
