import Layout from "@layouts/Layout";
import Head from "next/head";
import { CSSProperties } from "react";

type Props = {
	className?: string;
	h1style?: CSSProperties;
	title: string;
	children: any;
};

const InfoPage = (props: Props) => {
	return (
		<Layout>
			<h1 style={{ ...props.h1style }}>{props.title}</h1>
			<section className={props.className}>{props.children}</section>
			<Head>
				<title>PC Builder - {props.title}</title>
			</Head>
		</Layout>
	);
};

export default InfoPage;
