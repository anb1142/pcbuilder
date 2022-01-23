import styles from "@styles/Top.module.scss";

const Top = () => (
	<section className={styles.top}>
		<h1>CUSTOM PC BUILDER</h1>
		<video src="/home/bg.mp4" autoPlay={true} loop={true} />
	</section>
);

export default Top;
