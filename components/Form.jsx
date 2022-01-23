import styles from "@styles/Form.module.scss";

export default function Form({ children, onChange }) {
	return (
		<form className={styles.form} onChange={onChange} onSubmit={(e) => e.preventDefault()}>
			{children}
		</form>
	);
}
