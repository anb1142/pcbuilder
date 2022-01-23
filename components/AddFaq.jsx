import Form from "@components/Form";
import Modal from "@components/Modal";
import { addFaq } from "@data/firebase";

export default function AddFaq({ faqIsOpen, setFaqOpen }) {
	return (
		<Modal isOpen={faqIsOpen} setOpen={setFaqOpen} contentLabel="faq">
			<Form>
				<textarea name="q" placeholder="Question" />
				<textarea name="a" placeholder="Answer" />
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						addFaq(e.target.parentElement.q.value, e.target.parentElement.a.value);
						setFaqOpen(false);
					}}
				>
					Submit
				</button>
			</Form>
		</Modal>
	);
}
