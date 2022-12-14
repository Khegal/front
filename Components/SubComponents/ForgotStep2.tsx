import {
    Alert,
    Collapse,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    PinInput,
    PinInputField,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { Bind } from "../../utils/dto/index.dto";
import { Dispatch, SetStateAction, useState } from "react";
import { useColor } from "../../Context/ColorContext";

interface ForgotStep2 {
    bindPassword: Bind;
    bindRePassword: Bind;
    setotp: Dispatch<SetStateAction<string>>;
    isValid: {
        password: boolean;
    };
}

type Req = {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
};

export const IsDisabled = (isPassValid: Req) => {
    return (
        isPassValid.length &&
        isPassValid.uppercase &&
        isPassValid.lowercase &&
        isPassValid.number 
    );
};
const ForgotStep2 = ({
    bindPassword,
    bindRePassword,
    isValid,
    setotp,
}: ForgotStep2) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [isPassValid, setPassValid] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
    });
    return (
        <>
            <Alert>Enter Otp</Alert>
            <HStack>
                <PinInput onChange={(otp) => setotp(otp)}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>

            <FormControl
                isInvalid={!IsDisabled(isPassValid) && bindPassword.value !== ""}
            >
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    onFocusCapture={onOpen}
                    onBlurCapture={onClose}
                    value={bindPassword.value}
                    onChange={(e) => {
                    setPassValid(validatePassword(e.target.value));
                    bindPassword.onChange(e);
                    }}
                />
                <FormErrorMessage>???????? ???? ?????????????????? ?????????????????? ??????????.</FormErrorMessage>
            </FormControl>
            <Collapse in={isOpen}>
                <Requirement  isPassValid={isPassValid} />
            </Collapse>
            <FormControl isInvalid={isValid.password}>
                <FormLabel>Repeat Password</FormLabel>
                <Input type="password" {...bindRePassword} />
                <FormErrorMessage>
                    ???????????? ???????????????? ???????? ???? ?????????????????? ??????????.
                </FormErrorMessage>
            </FormControl>
        </>
    );
};
const Requirement = ({
    isPassValid,
}: {
    isPassValid: Req;
}) => {
    const { red, green } = useColor();
    const common = (valid: boolean) => (valid ? green : red);
    return (
        <Stack
            borderRadius={10}
            border="1px solid"
            borderColor={IsDisabled(isPassValid) ? green : red}
            p={2}
        >
            <HStack>
                <Text color={common(isPassValid.length)}>Len</Text>
            </HStack>
            <HStack>
                <Text color={common(isPassValid.uppercase)}>
                    UpperCase
                </Text>
            </HStack>
            <HStack>
                <Text color={common(isPassValid.lowercase)}>
                    LowerCase
                </Text>
            </HStack>
            <HStack>
                <Text color={common(isPassValid.number)}>Numb   er</Text>
            </HStack>
        </Stack>
    );
};
export const validatePassword = (password: string) => {
    const obj: Req = {
        length: false,
        uppercase: false,
        lowercase: false,
        number: false
    };
    if (password.length > 7) obj.length = true;
    if (/[A-Z]/g.test(password)) obj.uppercase = true;
    if (/[a-z]/g.test(password)) obj.lowercase = true;
    if (/[0-9]/g.test(password)) obj.number = true;
    return obj;
};

export default ForgotStep2;