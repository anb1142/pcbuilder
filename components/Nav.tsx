import { UserContext } from "@contexts/userContext";
import { auth } from "@data/firebase";
import styles from "@styles/Nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function Nav() {
	const router = useRouter();
	const [hide, hideNav] = useState<boolean>(false);
	const [scrolled, setScrolled] = useState<boolean>(false);
	const user = useContext(UserContext);

	useEffect(() => {
		let prevScrollpos = window.pageYOffset;
		window.onscroll = () => {
			prevScrollpos > window.pageYOffset ? hideNav(false) : hideNav(true);
			prevScrollpos = window.pageYOffset;
			window.pageYOffset > 0 ? setScrolled(true) : setScrolled(false);
		};
	}, []);

	const pages = [
		{ href: "/", label: "Home" },
		{ href: "/reviews", label: "Reviews" },
		{ href: "/faq", label: "FAQ" },
		{ href: "/contact", label: "Contact" },
	];

	const NavLinks = () => (
		<ul>
			{pages.map(({ href, label }) => (
				<Link href={href} key={label}>
					<a className={router.pathname == href ? styles.active : ""}>{label}</a>
				</Link>
			))}
			{user && <a onClick={() => auth.signOut()}>Sign Out</a>}
		</ul>
	);

	return (
		<nav
			className={`
				${styles.nav} ${hide ? styles.hide : ""} 
				${scrolled || router.pathname !== "/" ? styles.scrolled : ""}
			`}
		>
			<Link href={`/`}>home</Link>
			<NavLinks />
		</nav>
	);
}
