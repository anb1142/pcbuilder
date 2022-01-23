import Modal from "@components/Modal";
import AddFaq from "@components/AddFaq";
import { removeFaq } from "@data/firebase";

export default function Admin({
	faqIsOpen,
	setFaqOpen,
	removeId,
	confirmFaqIsOpen,
	setConfirmFaqOpen,
}) {
	return (
		<>
			<section>
				<button onClick={() => setFaqOpen(true)}>+</button>
			</section>
			<Modal
				title="Are you sure you want to delete this Q/A ?"
				func={() => removeFaq(removeId)}
				isOpen={confirmFaqIsOpen}
				setOpen={setConfirmFaqOpen}
				contentLabel="confirm"
			/>
			<AddFaq faqIsOpen={faqIsOpen} setFaqOpen={setFaqOpen} />
		</>
	);
}
