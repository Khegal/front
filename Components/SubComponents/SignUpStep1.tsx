import {
    FormControl,
    FormLabel,
    Input,
    useColorModeValue,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Step1 {
    setValue: Dispatch<SetStateAction<string>>;
    setDial: Dispatch<SetStateAction<string>>;
}

const Step1 = ({ setValue, setDial }: Step1) => {
    const bg = useColorModeValue("white", "#2d3748");
    return (
        <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input type="number" onChange={(e) => setValue(e.target.value)} />
        </FormControl>
    );
};

export default Step1;