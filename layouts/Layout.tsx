import Head from "next/head";
import Nav from "@components/Nav";
import styles from "@styles/Layout.module.scss";

const Layout = (props: { children: any }) => {
	return (
		<>
			<Head>
				<title>PC Builder</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Nav />
			<main className={`${styles.layout} `}>{props.children}</main>
		</>
	);
};

export default Layout;
