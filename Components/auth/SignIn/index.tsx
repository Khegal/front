import {
    Button,
    Divider,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";
import { BodyInterface } from "..";
import { UseApi } from "../../../Hooks/UseApi";
import { SignIn as _SignIn } from "../../../Services/lib/Auth";
import { UseInput } from "../../../Hooks/UseInput";
import { FormEvent, useEffect } from "react";
import { Toaster } from "../../../Services/assets/Toaster";
import { useUser } from "../../../Context/UserContext";

function SignIn({ ChangeHandler,  setCred }: BodyInterface) {
    const { bind: userNameBind, value: credential } = UseInput();
    const { bind: passwordBind, value: password } = UseInput();
    // const { dispatcher } = useUser();
    const [{ data, isLoading }, fetch] = UseApi({
        service: _SignIn,
    });
// useEffect(() => {
//         if (data) {
//             if (data.code) {
//                 // setCred({
//                 //     code: data.code,
//                 //     credential: data.credential,
//                 // });
//                 ChangeHandler("verify");
//             } else {
//                 const { access_token, refresh_token } = data;
//                 Toaster({ type: "login_success" });
//                 dispatcher({
//                     type: "login",
//                     state: {
//                         token: access_token,
//                         refresh_token,
//                     },
//                 });
//             }
//         }
//     }, [data]);

    const IsDisabled = () => {
        return credential === "" || password === "";
    };

    const Handler = (e: FormEvent) => {
        e.preventDefault();
        fetch({ credential, password });
    };

    return (
        <Stack as="form" onSubmit={Handler}>
            <FormControl>
                <FormLabel>"email"</FormLabel>
                <Input {...userNameBind} type="username" />
            </FormControl>
            <FormControl>
                <HStack alignItems="flex-start" justifyContent="space-between">
                    <FormLabel>"password"</FormLabel>
                    <Text
                        onClick={() => ChangeHandler("forgotpass")}
                        textDecor="underline"
                        cursor="pointer"
                    >
                    "forgotpass"
                    </Text>
                </HStack>
                <Input {...passwordBind} type="password" />
            </FormControl>
            <Button isDisabled={IsDisabled()} type="submit" isLoading={isLoading}>
            "Login"
			</Button>
            <Divider />
            <Button
                isDisabled={isLoading}
                variant="ghost"
                onClick={() => ChangeHandler("sign-up")}
            >
            "Sign Up"
            </Button>
        </Stack>
    );
}

export default SignIn;