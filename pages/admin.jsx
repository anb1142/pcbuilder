import Form from "@components/Form";
import InfoPage from "@layouts/InfoPage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@data/firebase";
import { useRouter } from "next/router";

export default function Admin() {
	const router = useRouter();
	const login = async (e) => {
		e.preventDefault();
		const form = e.target.parentElement;
		try {
			await signInWithEmailAndPassword(auth, form.email.value, form.password.value);
			router.push("/");
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<InfoPage title="Admin" className="center">
			<Form>
				<input type="text" name="email" placeholder="Email" />
				<input type="password" name="password" placeholder="Password" />
				<button type="submit" onClick={login}>
					Login
				</button>
			</Form>
		</InfoPage>
	);
}
