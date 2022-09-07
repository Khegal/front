import { Box, Button, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import Auth from "../../Components/auth";
import { useUser } from "../../Context/UserContext";
import { useRouter } from "next/router";
import { UseAuthContext } from "../../Context/AuthModalContext";
import { ReactChild } from "react";
import { Flex } from "@chakra-ui/react";
import { useColor } from ".../../../Context/ColorContext";

const noFooter = ["/nfts"];

const Home = () => {
    const router = useRouter();
    const { isOpen, onClose, onOpen } = UseAuthContext();
    const HH = useBreakpointValue({
        base: "54px",
        sm: "60.5px",
    });

    const Handler = () => {
        onOpen();
    };


    return (
		<Button onClick={Handler}>
			Log In
			<Auth isOpen={isOpen} onClose={onClose} />
		</Button>
		
    );
};

const EmptyOutlet = ({ children }: { children: ReactChild }) => {
    return <>{children}</>;
};

export default Home;