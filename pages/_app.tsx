import FaqContextProvider from "@contexts/FaqContextProvider";
import FirebaseContextProvider from "@contexts/FirebaseContextProvider";
import UserContextProvider from "@contexts/UserContextProvider";
import "@styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<FirebaseContextProvider>
			<UserContextProvider>
				<FaqContextProvider>
					<Component {...pageProps} />
				</FaqContextProvider>
			</UserContextProvider>
		</FirebaseContextProvider>
	);
}

export default MyApp;
