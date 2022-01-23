import { useState } from "react";
import Form from "@components/Form";

export default function ContactForm() {
	const [form, setForm] = useState({});

	const sendEmail = () => {
		console.log(form);
	};

	return (
		<Form onChange={({ target }) => setForm((prev) => ({ ...prev, [target.name]: target.value }))}>
			<input type="text" name="name" placeholder="Your name" required />
			<input type="email" name="email" placeholder="Email" required />
			<input type="text" name="subject" placeholder="Subject" />
			<input type="tel" name="phone" placeholder="Phone (optional)" />
			<textarea placeholder="Message" name="message" />
			<button type="submit" onClick={sendEmail}>
				Submit
			</button>
		</Form>
	);
}
