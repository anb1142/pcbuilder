const Detail = ({ title, img, children }) => (
	<article>
		<h2>{title}</h2>
		<figure>
			<img src={img} alt="photo of a pc" />
			<figcaption>{children}</figcaption>
		</figure>
	</article>
);

export default Detail;
