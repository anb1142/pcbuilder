import { useState } from "react";
import ModalView from "@components/Modal";

export default function useModal() {
	const [modalOpen, setModalOpen] = useState(false);
	const [anim, setAnim] = useState(false);

	console.log(modalOpen);
	const closeModal = () => {
		setAnim(true);
		setTimeout(() => {
			setAnim(false);
			setModalOpen(false);
		}, 200);
	};
	ModalView.defaultProps = {
		anim,
		modalOpen,
		closeModal,
	};
	return [ModalView, setModalOpen];
}
