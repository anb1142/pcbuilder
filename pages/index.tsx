import Layout from "@layouts/Layout";
import Top from "@components/Top";
import Details from "@components/Details";
import ContactSection from "@components/ContactSection";
import Location from "@components/Location";

export default function Home() {
	return (
		<Layout>
			<Top />
			<Details />
			<ContactSection />
			<Location />
		</Layout>
	);
}
