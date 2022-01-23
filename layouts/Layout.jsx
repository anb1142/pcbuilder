import Head from "next/head";
import Nav from "@components/Nav";
import styles from "@styles/Layout.module.scss";
export default function Layout({ className, children }) {
	return (
		<>
			<Head>
				<title>PC Builder</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Nav />
			<main className={`${styles.layout} ${className ? className : ""}`}>{children}</main>
		</>
	);
}
