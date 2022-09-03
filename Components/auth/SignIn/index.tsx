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
    const { bind: userNameBind, value: username } = UseInput();
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
//                 //     username: data.username,
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
        return username === "" || password === "";
    };

    const Handler = (e: FormEvent) => {
        e.preventDefault();
        fetch({ username, password });
    };

    return (
        <Stack as="form" onSubmit={Handler}>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input {...userNameBind} type="username" />
            </FormControl>
            <FormControl>
                <HStack alignItems="flex-start" justifyContent="space-between">
                    <FormLabel>Password</FormLabel>
                    <Text
                        onClick={() => ChangeHandler("ForgotPassword")}
                        textDecor="underline"
                        cursor="pointer"
                    >
                    Forgot Password
                    </Text>
                </HStack>
                <Input {...passwordBind} type="password" />
            </FormControl>
            <Button isDisabled={IsDisabled()} type="submit" isLoading={isLoading}>
            Login
			</Button>
            <Divider />
            <Button
                isDisabled={isLoading}
                variant="ghost"
                onClick={() => ChangeHandler("SignUp")}
            >
            Sign Up
            </Button>
        </Stack>
    );
}

export default SignIn;