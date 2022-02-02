import styles from "@styles/InfoPage.module.scss";
import Layout from "@layouts/Layout";

export default function InfoPage({ className, h1style, title, children }) {
	return (
		<Layout className={styles.infopage}>
			<h1 style={h1style ? h1style : {}}>{title}</h1>
			<section className={className}>{children}</section>
		</Layout>
	);
}
