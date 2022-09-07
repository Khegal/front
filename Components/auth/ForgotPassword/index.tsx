import { Button, Divider, Stack } from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import { BodyInterface } from "..";
import { UseApi } from "../../../Hooks/UseApi";
import { UseInput } from "../../../Hooks/UseInput";
import { Toaster } from "../../../Services/assets/Toaster";
import {
    ForgotPasswordChange,
    ForgotPasswordOtp,
} from "../../../Services/lib/Auth";
import ForgotStep2, {
    IsDisabled as _IsDisabled,
    validatePassword,
} from "../../SubComponents/ForgotStep2";
import ForgotStep1 from "../../SubComponents/ForgotStep1";
import { useColor } from ".../../../Context/ColorContext";

function ForgotPassword({
    ChangeHandler,
    fromLocal,
    _username,
}: BodyInterface) {
    const [code, setCode] = useState("");
    const { value: username, setValue: setusername } = UseInput();
    const { value: otp, setValue: setotp } = UseInput();
    const { value: password, bind: bindPassword } = UseInput();
    const { value: repassword, bind: bindRePassword } = UseInput();
    const [{ isLoading, data }, fetchOtp] = UseApi({
        service: ForgotPasswordOtp,
    });
    const [{ isLoading: SignUpIsloading, data: SignUpBody }, fetch] = UseApi({
        service: ForgotPasswordChange,
    });
    const [step, setStep] = useState<1 | 2>(fromLocal ? 2 : 1);
    const StepHandler = (e: FormEvent) => {
        e.preventDefault();
        if (step === 1) fetchOtp({ username });
        else if (passHandler())
            fetch({
                username,
                password,
                code,
                otp,
            });
    };
useEffect(() => {
        if (data) {
            setStep(2);
            // setCode(data.code);
        }
    }, [data]);

    useEffect(() => {
        if (_username) {
            fetchOtp({ username: _username });
        }
    }, []);

    useEffect(() => {
        if (SignUpBody) {
            Toaster({ type: "reset_password" });
            ChangeHandler("SignIn");
        }
    }, [SignUpBody]);
    const [isValid, setValid] = useState({
        password: false,
    });

    const IsDisabled = () => {
        if (step === 1) return username === "";
        else
            return (
                password === "" 
            )
    };

    const passHandler = () => {
        if (repassword === password) {
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
    const Step2Props = {
        bindPassword,
        bindRePassword,
        isValid,
        setotp,
    };
    return (
        <Stack as="form" onSubmit={StepHandler}>
            {step === 1 ? (
                <ForgotStep1 setValue={setusername} />
            ) : (
                <ForgotStep2 {...Step2Props} />
            )}
            <Button
                type="submit"
                isLoading={isLoading || SignUpIsloading}
                isDisabled={IsDisabled()}
            >
                Submit
            </Button>
            {!fromLocal && <Divider />}
            {!fromLocal && (
                <Button
                    isDisabled={isLoading || SignUpIsloading}
                    variant="ghost"
                    onClick={() => ChangeHandler("SignUp")}
                >
                    Log In
                </Button>
            )}
    
        </Stack>
    );
}

export default ForgotPassword;