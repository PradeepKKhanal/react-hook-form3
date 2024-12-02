import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	HStack,
	Radio,
	RadioGroup,
} from "@chakra-ui/react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "../../../pages/Form";

interface RadioGroupFieldProps {
	name: keyof Inputs;
	// type: string;
	label: string;
	helperText?: string;
	register: UseFormRegister<Inputs>;
	errors: FieldErrors<Inputs>;
	radioValues: string[];
}
const RadioGroupField = ({
	name,
	label,
	helperText,
	register,
	errors,
	radioValues,
}: RadioGroupFieldProps) => {
	// console.log(errors)
	// console.log(errors[name]?.message)
	return (
		<div>
			<FormControl py={'10px'} isInvalid={!!errors[name]}>
				<FormLabel >{label}</FormLabel>

				<HStack>
					<RadioGroup>

							{radioValues.map((radioValue) => 
						(<Radio key={radioValue} value={radioValue} {...register(name)}>
							{radioValue}
						</Radio>)
					)}
					</RadioGroup>
				

					{/* <Radio value="Female" {...register(name)}>Female</Radio>
						<Radio value="Other" {...register(name)}>Other</Radio> */}
				</HStack>

				<FormHelperText>{helperText}</FormHelperText>
				<FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
			</FormControl>

			{/* <RadioGroup>
            <Radio>Male</Radio>
            <Radio>Female</Radio>
            <Radio>Other</Radio>
        </RadioGroup> */}
		</div>
	);
};

export default RadioGroupField;
