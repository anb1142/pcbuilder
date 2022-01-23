import InfoPage from "@layouts/InfoPage";
import ContactForm from "@components/ContactForm";

export default function Contact() {
	return (
		<InfoPage title="Contact Us" className="center">
			<ContactForm />
		</InfoPage>
	);
}
