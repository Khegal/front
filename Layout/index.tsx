import { AppProps } from "next/dist/shared/lib/router/router";

const Layout = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default Layout;
