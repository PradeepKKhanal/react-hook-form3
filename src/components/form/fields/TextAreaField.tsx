import { Textarea } from "@chakra-ui/react";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
} from "@chakra-ui/react";
import { Inputs } from "../../../pages/Form";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface TextAreaFieldProps{
    name:keyof Inputs,
    label:string,
    register: UseFormRegister<Inputs>;
    errors:FieldErrors<Inputs>;
    helperText?:string,
    placeholder?:string
}

const TextAreaField = ({
    name,
    label,
    register,
    errors,
    helperText,
    placeholder
}:TextAreaFieldProps) => {
	return (
		<div>
			<FormControl py={'10px'} isInvalid={!!errors[name]}>
				<FormLabel>{label}</FormLabel>
				<Textarea placeholder={placeholder} {...register(name)}/>
				<FormHelperText>{helperText}</FormHelperText>
                <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
			</FormControl>
		</div>
	);
};

export default TextAreaField;
