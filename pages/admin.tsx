import Form from "@components/Form";
import InfoPage from "@layouts/InfoPage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@data/firebase";
import { useRouter } from "next/router";
import { FormEventHandler, MouseEventHandler, useState } from "react";
import { AdminSpace } from "@stores/AdminStore";

const initState: AdminSpace.Form = {
	email: "",
	password: "",
};

const Admin = () => {
	const router = useRouter();
	const [form, setForm] = useState<AdminSpace.Form>(initState);

	const handleChange: FormEventHandler<HTMLFormElement> = (e) => {
		const { name, value } = e.target as HTMLInputElement;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit: MouseEventHandler = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, form.email, form.password);
			router.push("/");
		} catch (error) {
			error instanceof Error && alert(error.message);
		}
	};

	return (
		<InfoPage title="Admin" className="center">
			<Form onChange={handleChange}>
				<input value={form.email} type="text" name="email" placeholder="Email" required />
				<input value={form.password} type="password" name="password" placeholder="Password" required />
				<button type="submit" onClick={handleSubmit}>
					Login
				</button>
			</Form>
		</InfoPage>
	);
};

export default Admin;
