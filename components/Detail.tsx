/* eslint-disable @next/next/no-img-element */
type Props = { title: string; img: string; children: any };

const Detail = (props: Props) => (
	<article>
		<h2>{props.title}</h2>
		<figure>
			<img src={props.img} alt="photo of a pc" />
			<figcaption>{props.children}</figcaption>
		</figure>
	</article>
);

export default Detail;
