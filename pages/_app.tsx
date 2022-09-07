import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Layout";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../Theme";
import { UserProvider } from "../Context/UserContext";
import { AuthModalProvider } from "../Context/AuthModalContext";
import { ColorProvider } from "../Context/ColorContext";
function MyApp(AppProps: AppProps) {
	return (
		<ChakraProvider theme={Theme}>
			<UserProvider>
				<ColorProvider>
					<AuthModalProvider>
						<Layout {...AppProps}/>
					</AuthModalProvider>
				</ColorProvider>
			</UserProvider>
		</ChakraProvider>
	);
}

export default MyApp;
