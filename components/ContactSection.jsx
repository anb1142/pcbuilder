import styles from "@styles/ContactSection.module.scss";
import ContactForm from "@components/ContactForm";

const ContactSection = () => (
	<section className={styles.contactsection}>
		<h2>Contact Us</h2>

		<article>
			<div>
				<h4>
					Have any questions? Want to book an appointment? Don't hesitate to get in touch with us, we're
					happy to help!
				</h4>
				<h5>51 Britannia Ave E, Oshawa, ON, L1L 0C1</h5>
				<h5>rahmanmuta@gmail.com</h5>
				<h5>(437) 771-6114</h5>
				<p>P.S If Oshawa is too far, arrangements can be made!</p>
			</div>
			<ContactForm />
		</article>
	</section>
);

export default ContactSection;
