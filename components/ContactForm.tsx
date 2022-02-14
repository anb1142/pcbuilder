import Form from "@components/Form";
import { ContactSpace } from "@stores/ContactStore";
import { FormEventHandler, MouseEventHandler, useState } from "react";

const initState: ContactSpace.Form = {
	name: "",
	email: "",
	subject: "",
	phone: "",
	message: "",
};

const ContactForm = () => {
	const [form, setForm] = useState<ContactSpace.Form>(initState);

	const handleChange: FormEventHandler<HTMLFormElement> = (e) => {
		const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit: MouseEventHandler = (e) => {
		e.preventDefault();
		setForm(initState);
	};

	return (
		<Form onChange={handleChange}>
			<input type="text" value={form.name} name="name" placeholder="Your name" required />
			<input type="email" value={form.email} name="email" placeholder="Email" required />
			<input type="text" value={form.subject} name="subject" placeholder="Subject" required />
			<input type="tel" value={form.phone} name="phone" placeholder="Phone (optional)" />
			<textarea value={form.message} placeholder="Message" name="message" />
			<button type="submit" onClick={handleSubmit}>
				Submit
			</button>
		</Form>
	);
};

export default ContactForm;
