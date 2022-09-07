import {
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormErrorMessage,
    Grid,
    Stack,
    Text,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import { BodyInterface } from "..";
import { UseInput } from "../../../Hooks/UseInput";
import { UseApi } from "../../../Hooks/UseApi";
import { SignUp as _SignUp } from "../../../Services/lib/Auth";
import Step2, {
    IsDisabled as _IsDisabled,
    validatePassword,
    passdoesntmatch,
} from "../../SubComponents/SignUpStep2";
import { Bind } from "../../../utils/dto/index.dto";
import Step1 from "../../SubComponents/SignUpStep1";
import { Toaster } from "../../../Services/assets/Toaster";
import { useColor } from ".../../../Context/ColorContext";

function SignUp({  ChangeHandler, setCred }: BodyInterface) {
    const { value: phoneNum, setValue: setPhoneNum } = UseInput();
    const { value: username, bind: bindUsername } = UseInput();
    const { value: password, bind: bindPassword } = UseInput();
    const { value: passwordRepeat, bind: bindRePassword } = UseInput();
    const { value: dial, setValue: setDial } = UseInput();
    const { value : email, bind: bindEmail } = UseInput();
    const [isAgreed, setAgreed] = useState(false);
    const [isAgreedValid, setAgreedValid] = useState(false);
    const [isValid, setValid] = useState({
        password: false,
        username: false,
        email: false,
        passwordRepeat: false,
    });
    const [{ isLoading: SignUpIsloading, data }, fetch] = UseApi({
        service: _SignUp,
    });

    const AgreeHandler = () => {
        if (isAgreed) {
            setAgreedValid(false);
            return true;
        } else {
            setAgreedValid(true);
            return false;
        }
    };

    const usernameHandler = () => {
        if (!/\s/g.test(username)) {
            setValid((p) => {
                return { ...p, username: false };
            });
            return true;
        } else {
            setValid((p) => {
                return { ...p, username: true };
            });
            return false;
        }
    };
    useEffect(() => {
        if (data) {
            Toaster({
                type: "signup_success",
            });
            // setCred({
            //     code: data.code,
            //     credential: data.credential,
            // });
            ChangeHandler("Verify");
        }
    }, [data]);

    const passHandler = () => {
        if (passwordRepeat === password) {
            setValid((p) => {
                return { ...p, password: false };
            });
            return true;
        } else {
            setValid((p) => {
                return { ...p, password: true };
            });
            return false;
        }
    };

    const StepHandler = (e: FormEvent) => {
        e.preventDefault();
        if (passHandler() && usernameHandler() && AgreeHandler())
            fetch({
                phoneNum,
                username,
                password,
                passwordRepeat,
                // countryCode: +${dial},
            });
    };

    const isDisabled = () => {

        return (
            phoneNum === "" ||
            passwordRepeat === "" ||
            !_IsDisabled(validatePassword(password)) ||
            !_IsDisabled(passdoesntmatch(passwordRepeat))
        );
    };
    const Step2Props = {
        phoneNum,
        bindPassword,
        bindUsername,
        bindRePassword,
        bindEmail,
        isValid,
    };

return (
        <form autoComplete="off" onSubmit={StepHandler}>
            <Stack>
                <Step1 setDial={setDial} setValue={setPhoneNum} />
                <Step2 {...Step2Props} />
                <FormControl maxW="90%" isInvalid={isAgreedValid}>
                    <Checkbox
                        isChecked={isAgreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                    >
                        <Text fontSize="12px" textAlign="center">
                            I agree to the terms of service and privacy policy
                        </Text>
                    </Checkbox>
                    <FormErrorMessage>
                        You must agree with our to terms of service and privacy policy to
                        create account
                    </FormErrorMessage>
                </FormControl>
                <Button
                    isLoading={SignUpIsloading}
                    isDisabled={isDisabled()}
                    type="submit"
                    onClick={() => ChangeHandler("Verify")}
                >
                    Sign Up
                </Button>
                <Divider />
                <Button
                    isDisabled={SignUpIsloading}
                    variant="ghost"
                    onClick={() => ChangeHandler("SignIn")}
                >
                    Log In 
                </Button>
            </Stack>
        </form>
    );
}
export default SignUp;