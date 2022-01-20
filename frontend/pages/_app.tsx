import type { AppProps } from "next/app";
import "styles/globals.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";

import { Web3Provider } from "src/context/Web3Context";
import Layout from "src/context/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Web3Provider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Web3Provider>
	);
}

export default MyApp;
