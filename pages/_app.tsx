import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Layout";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../Theme";
import { UserProvider } from "../Context/UserContext";
import { AuthModalProvider } from "../Context/AuthModalContext";
function MyApp(AppProps: AppProps) {
	return (
		<ChakraProvider theme={Theme}>
			<UserProvider>
				<AuthModalProvider>
					<Layout {...AppProps}/>
				</AuthModalProvider>
			</UserProvider>
		</ChakraProvider>
	);
}

export default MyApp;
