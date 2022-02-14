import UserContextProvider from "@contexts/UserContextProvider";
import type { AppProps } from "next/app";
import "@styles/globals.scss";
import FaqContextProvider from "@contexts/FaqContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<FaqContextProvider>
			<UserContextProvider>
				<Component {...pageProps} />
			</UserContextProvider>
		</FaqContextProvider>
	);
}

export default MyApp;
