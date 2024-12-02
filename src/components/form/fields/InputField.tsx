import { Input } from "@chakra-ui/react";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
} from "@chakra-ui/react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import type { Inputs } from "../../../pages/Form";

interface InputFieldProps {
	label: string;
	type: string;

	// value:string,
	name: keyof Inputs;
	placeholder?: string;
	helperText?: string;
	register: UseFormRegister<Inputs>;
	errors: FieldErrors<Inputs>;
	// errorMessage?:string
}

const InputField = ({
	label,
	name,
	type,
	placeholder,
	helperText = "",
	register,
	errors
}: InputFieldProps) => {

   
	return (
		<>
			<FormControl py={'10px'} isInvalid={!!errors[name]}>
				<FormLabel>{label}</FormLabel>
				<Input variant={'outline'} type={type} placeholder={placeholder} {...register(name) } />
				<FormHelperText>{helperText}</FormHelperText>
				<FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
			</FormControl>
		</>
	);
};

export default InputField;
