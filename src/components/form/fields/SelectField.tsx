import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Select } from "@chakra-ui/react";
import { Inputs } from "../../../pages/Form";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface SelectFieldProps {
	name: keyof Inputs;
	label: string;
	helperText?: string;
	placeholder?: string;
	register: UseFormRegister<Inputs>;
	errors: FieldErrors<Inputs>;
	selectValues: string[];
}

const SelectField = ({
	name,
	label,
	helperText,
	placeholder,
	selectValues,
	register,
	errors,
}: SelectFieldProps) => {
	// console.log(errors)
	return (
		<div>
			<FormControl py={'10px'} isInvalid={!!errors[name]}>
				<FormLabel>{label}</FormLabel>

				<Select placeholder={placeholder} {...register(name)}>
					{selectValues.map((selectValue) => {
						return (
							<option key={selectValue} value={selectValue}>
								{selectValue}
							</option>
						);
					})}
					
				</Select>
                <FormHelperText>{helperText}</FormHelperText>
				<FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
			</FormControl>
		</div>
	);
};

export default SelectField;
