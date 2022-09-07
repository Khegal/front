import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Step1 {
    setValue: Dispatch<SetStateAction<string>>;
}

const ForgotStep1 = ({ setValue }: Step1) => {
    return (
        <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            ></Input>
        </FormControl>
    );
};

export default ForgotStep1;