import styles from "@styles/Location.module.scss";

const Location = () => (
	<section className={styles.location}>
		<iframe
			loading="eager"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.9918474729957!2d-79.33145816730374!3d43.71071849267964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa71ee19cbbbded94!2sCustom%20PC%20Builder%20and%20Repair%20Services!5e0!3m2!1sen!2slk!4v1621061167710!5m2!1sen!2slk"
			width="100%"
			height="100%"
		/>
	</section>
);

export default Location;
