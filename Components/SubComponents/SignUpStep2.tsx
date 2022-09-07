import {
    Collapse,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { Bind } from "../../utils/dto/index.dto";
import { useState } from "react";
import { useColor } from "../../Context/ColorContext";

interface Step2 {
    bindPassword: Bind;
    bindUsername: Bind;
    bindRePassword: Bind;
    bindEmail: Bind;
    isValid: {
        password: boolean;
        username: boolean;
        email: boolean;
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
                <Text color={common(isPassValid.length)}>Lenght of password</Text>
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
                <Text color={common(isPassValid.number)}>Number</Text>
            </HStack>
        </Stack>
    );
};
const Step2 = ({
    bindPassword,
    bindUsername,
    bindRePassword,
    bindEmail,
    isValid,
}: Step2) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [isPassValid, setPassValid] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
    });
    return (
        <>
            <FormControl isInvalid={isValid.email}>
                <FormLabel>Email</FormLabel>
                <Input type='email' {...bindEmail} />
                <FormErrorMessage>
                    Имайл хоосон зай агуулж бологүй
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={isValid.username}>
                <FormLabel>Username</FormLabel>
                <Input type="username" {...bindUsername} />
                <FormErrorMessage>
                    Нэвтрэх нэр хоосон зай агуулж бологүй
                </FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid={!IsDisabled(isPassValid) && bindPassword.value !== ""}
            >
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    autoComplete="new-password"
                    onFocusCapture={onOpen}
                    onBlurCapture={onClose}
                    value={bindPassword.value}
                    onChange={(e) => {
                        setPassValid(validatePassword(e.target.value));
                        bindPassword.onChange(e);
                    }}
                />
                <FormErrorMessage>Нууц үг шаардлага хангахгүй байна.</FormErrorMessage>
            </FormControl>
            <Collapse in={isOpen}>
                <Requirement isPassValid={isPassValid} />
            </Collapse>
            <FormControl isInvalid={isValid.password}>
                <FormLabel>Repeat Password</FormLabel>
                <Input 
                    type="password" 
                    {...bindRePassword} />
                <FormErrorMessage>
                    Давтан оруулсан нууц үг таарахгүй байна.
                </FormErrorMessage>
            </FormControl>
            </>
    );
};

export const passdoesntmatch = (passwordRepeat: string) => {
    const rePassObj: Req = {
        length: false,
        uppercase: true,
        lowercase: true,
        number: true
    }
    if (passwordRepeat.length > 7) rePassObj.length = true;
    return rePassObj
}
export const validatePassword = (password: string) => {
    const obj: Req = {
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
    };
    if (password.length > 7) obj.length = true;
    if (/[A-Z]/g.test(password)) obj.uppercase = true;
    if (/[a-z]/g.test(password)) obj.lowercase = true;
    if (/[0-9]/g.test(password)) obj.number = true;
    return obj;
};

export default Step2;