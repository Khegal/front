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
    bindpassword: Bind;
    binduserName: Bind;
    bindRePassword: Bind;
    isValid: {
        password: boolean;
        username: boolean;
    };
}

type Req = {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    special: boolean;
};

export const IsDisabled = (isPassValid: Req) => {
    return (
        isPassValid.length &&
        isPassValid.uppercase &&
        isPassValid.lowercase &&
        isPassValid.number &&
        isPassValid.special
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
                <Text color={common(isPassValid.number)}>Number</Text>
            </HStack>
            <HStack>
                <Text color={common(isPassValid.special)}>
                    Special
                </Text>
            </HStack>
        </Stack>
    );
};
const Step2 = ({
    bindpassword,
    binduserName,
    bindRePassword,
    isValid,
}: Step2) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [isPassValid, setPassValid] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false,
    });
    return (
        <>
            <FormControl isInvalid={isValid.username}>
                <FormLabel>username</FormLabel>
                <Input type="username" {...binduserName} />
                <FormErrorMessage>
                    Нэвтрэх нэр хоосон зай агуулж бологүй
                </FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid={!IsDisabled(isPassValid) && bindpassword.value !== ""}
            >
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    autoComplete="new-password"
                    onFocusCapture={onOpen}
                    onBlurCapture={onClose}
                    value={bindpassword.value}
                    onChange={(e) => {
                        setPassValid(validatePassword(e.target.value));
                        bindpassword.onChange(e);
                    }}
                />
                <FormErrorMessage>Нууц үг шаардлага хангахгүй байна.</FormErrorMessage>
            </FormControl>
            <Collapse in={isOpen}>
                <Requirement isPassValid={isPassValid} />
            </Collapse>
            <FormControl isInvalid={isValid.password}>
                <FormLabel>Repeat Password</FormLabel>
                <Input type="password" {...bindRePassword} />
                <FormErrorMessage>
                    Давтан оруулсан нууц үг таарахгүй байна.
                </FormErrorMessage>
            </FormControl>
            </>
    );
};

export const validatePassword = (password: string) => {
    const obj: Req = {
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false,
    };
    if (password.length > 7) obj.length = true;
    if (/[A-Z]/g.test(password)) obj.uppercase = true;
    if (/[a-z]/g.test(password)) obj.lowercase = true;
    if (/[0-9]/g.test(password)) obj.number = true;
    return obj;
};

export default Step2;