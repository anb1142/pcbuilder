import styles from "@styles/Form.module.scss";
import { DetailedHTMLProps, FormHTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

const Form = (props: Props) => (
	<form className={styles.form} {...props}>
		{props.children}
	</form>
);

export default Form;
