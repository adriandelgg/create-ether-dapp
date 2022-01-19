import NavBar from "./NavBar/NavBar";
import Head from "next/head";
import Image from "next/image";

const Layout: React.FC = ({ children }) => (
	<>
		<Head>
			{/* <link rel="icon" href="" /> */}
			{/* <link rel="shortcut icon" href="" /> */}
		</Head>
		<NavBar />
		<main>{children}</main>
	</>
);

export default Layout;
