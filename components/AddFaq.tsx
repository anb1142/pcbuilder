import Form from "@components/Form";
import Modal from "@components/Modal";
import { addFaq } from "@data/firebase";
import { FaqSpace } from "@stores/FaqStore";

import { Dispatch, FormEventHandler, MouseEventHandler, SetStateAction, useState } from "react";

type Props = { faqIsOpen: boolean; setFaqOpen: Dispatch<SetStateAction<boolean>> };

const initState: FaqSpace.Add = {
	q: "",
	a: "",
};

const AddFaq = (props: Props) => {
	const [form, setForm] = useState<FaqSpace.Add>(initState);

	const handleChange: FormEventHandler<HTMLFormElement> = (e) => {
		const { name, value } = e.target as HTMLInputElement;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit: MouseEventHandler = async (e) => {
		e.preventDefault();
		addFaq(form.q, form.a);
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
