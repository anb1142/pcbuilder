/* eslint-disable @next/next/no-img-element */
import reviews from "@data/reviews";
import InfoPage from "@layouts/InfoPage";
import styles from "@styles/Reviews.module.scss";

const Reviews = () => {
	const Stars = () => (
		<>
			<img src={"/star.png"} alt="star" />
			<img src={"/star.png"} alt="star" />
			<img src={"/star.png"} alt="star" />
			<img src={"/star.png"} alt="star" />
			<img src={"/star.png"} alt="star" />
		</>
	);

	const GoogleReviews = () => (
		<>
			<img src="/reviews/googleLogo.png" alt="Reviews from Google" />
			<section>
				{reviews.map(({ src, user, text }, i) => (
					<article key={i}>
						<div>
							<img src={src} alt="User" />
							<div>
								<h4>{user}</h4>
								<div>{<Stars />}</div>
							</div>
						</div>
						<p>{text}</p>
					</article>
				))}
			</section>
		</>
	);

	const sites = [
		{ name: "Kijiji", img: "/reviews/kijiji.jpg" },
		{ name: "Facebook", img: "/reviews/fb.jpg" },
	];
	const SiteReviews = () => (
		<div>
			{sites.map(({ name, img }, i) => (
				<article key={i}>
					<h5>{name}</h5>
					<img src={img} alt={name} />
				</article>
			))}
		</div>
	);
	return (
		<InfoPage className={styles.reviews} title="Reviews">
			<GoogleReviews />
			<SiteReviews />
		</InfoPage>
	);
};

export default Reviews;
