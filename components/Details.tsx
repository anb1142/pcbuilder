import styles from "@styles/Details.module.scss";
import Detail from "@components/Detail";

const Details = () => (
	<section className={styles.details}>
		<Detail title="Why a Custom PC" img="/home/1.jpg">
			Getting a custom PC is a better alternative than buying a prebuilt one. You can choose exactly
			what parts you want, customize the looks of your system, and avoid the hundreds & hundreds of
			dollars in markups that prebuilt companies and other selling PC{`'`}s charge. Lucky for you we
			are here to guide you through every step of the way!
		</Detail>
		<Detail title="Our Services" img="/home/2.jpg">
			<li>Build your PC</li>
			<li>Find the best PC parts based on your needs/budget</li>
			<li>Scour the web to find you the best deals</li>
			<li>Troubleshooting/computer repair</li>
			<li>Cable manage your PC</li>
			<li>
				Install windows, update your BIOS, and download necessary softwares for your PC to run optimally
			</li>
			<li>Drive cloning</li>
			<li>Much, much, more</li>
		</Detail>
	</section>
);

export default Details;
