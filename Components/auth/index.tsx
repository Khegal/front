import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { useUser } from "../../Context/UserContext";
import ForgotPassword from "../auth/ForgotPassword";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp"
import VerifyUser from "../auth/VerifyUser"

interface Auth {
    isOpen: boolean;
    onClose: () => void;
}

export type Cred = {
    code: string;
    credential: string;
};

type Which = "SignIn" | "sign-up" | "forgotpass" | "verify";

export interface BodyInterface {
    ChangeHandler: (selected: Which) => void;
    setCred: ({}: Cred) => void;
    fromLocal?: boolean;
    _credential?: string;
}

const AuthBody = (
    which: Which,
    ChangeHandler: (selected: Which) => void,

    setCred: ({}: Cred) => void,
    data: Cred
) => {
    const props = { ChangeHandler, setCred, data };
    switch (which) {
        case "SignIn":
            return <SignIn {...props} />;
        case "sign-up":
        //     return <SignUp {...props} />;
        // case "forgotpass":
        //     return <ForgotPassword {...props} />;
        case "verify":
            return <VerifyUser  />;
    }
};

function Auth({ isOpen, onClose }: Auth) {
    const [which, setWhich] = useState<Which>("SignIn");
    const [data, setdata] = useState({
        credential: "",
        code: "",
    });
    // const {
    //     state: { token },
    // } = useUser();

    const setCred = ({ credential, code }: Cred) => {
        setdata({
            credential,
            code,
        });
    };

    const ChangeHandler = (selected: Which) => {
        setWhich(selected);
    };

    // useEffect(() => {
    //     onClose();
    // }, [token]);
	useEffect(() => {
        setWhich("SignIn");
    }, [isOpen]);
	console.log(isOpen)
	return (
        <Modal isOpen={isOpen} size="xs" onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {which !== "SignIn" && [which]}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {AuthBody(which, ChangeHandler, setCred, data)}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default Auth;