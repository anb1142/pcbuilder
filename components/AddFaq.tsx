import Form from "@components/Form";
import Modal from "@components/Modal";
import { FirebaseContext } from "@contexts/FirebaseContextProvider";
import { FaqSpace } from "@stores/FaqStore";
import { addDoc } from "firebase/firestore";
import {
	Dispatch,
	FormEventHandler,
	MouseEventHandler,
	SetStateAction,
	useContext,
	useState,
} from "react";

type Props = { faqIsOpen: boolean; setFaqOpen: Dispatch<SetStateAction<boolean>> };

const initState: FaqSpace.Add = {
	q: "",
	a: "",
};

const AddFaq = (props: Props) => {
	const [form, setForm] = useState<FaqSpace.Add>(initState);
	const { faqCollection } = useContext(FirebaseContext);

	const handleChange: FormEventHandler<HTMLFormElement> = (e) => {
		const { name, value } = e.target as HTMLInputElement;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit: MouseEventHandler = async (e) => {
		e.preventDefault();
		try {
			await addDoc(faqCollection, { question: form.q, answer: form.a });
		} catch (error) {
			error instanceof Error && alert(error.message);
		}
		props.setFaqOpen(false);
	};

	return (
		<Modal isOpen={props.faqIsOpen} setOpen={props.setFaqOpen} contentLabel="faq">
			<Form onChange={handleChange}>
				<textarea value={form.q} name="q" placeholder="Question" />
				<textarea value={form.a} name="a" placeholder="Answer" />
				<button type="submit" onClick={handleSubmit}>
					Submit
				</button>
			</Form>
		</Modal>
	);
};

export default AddFaq;
