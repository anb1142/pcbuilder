import styles from "@styles/InfoPage.module.scss";
import Layout from "@layouts/Layout";

export default function InfoPage({ className, title, children }) {
	return (
		<Layout className={styles.infopage}>
			<h1>{title}</h1>
			<section className={className}>{children}</section>
		</Layout>
	);
}
