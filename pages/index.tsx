import ContactSection from "@components/ContactSection";
import Details from "@components/Details";
import Location from "@components/Location";
import Top from "@components/Top";
import Layout from "@layouts/Layout";

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
