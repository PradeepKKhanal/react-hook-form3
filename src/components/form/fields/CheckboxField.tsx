import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Stack,
} from "@chakra-ui/react";

import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Inputs } from "../../../pages/Form";
import { FieldErrors, UseFormRegister, Controller, Control } from "react-hook-form";

interface CheckboxFieldProps {
	name: keyof Inputs;
	label: string;
	register: UseFormRegister<Inputs>;
	errors: FieldErrors<Inputs>;
	helperText?: string;
	placeholder?: string;
	checkBoxValues: string[];
    control:Control<Inputs, any>
}

const CheckboxField = ({
	label,
	name,
	register,
	errors,
	helperText = "",
    control,
	checkBoxValues,
}: CheckboxFieldProps) => {
	return (
		<div>
			<FormControl py={'10px'}>
				<FormLabel>{label}</FormLabel>
				{/* <Stack spacing={5} direction="column"> */}

				<Controller
					name={name}
					control={control}
					defaultValue={[]}
					render={({ field: { onChange, value } }) => {
						return (
							<CheckboxGroup  onChange={onChange} value={[value as string]}>
                                	<Stack spacing={5} direction="column">
								{checkBoxValues.map((value) => {
									return (
										<Checkbox key={value} value={value} onChange={(value=>onChange(value))}  >
											{value}
										</Checkbox>
									);
								})}
                                </Stack>
							</CheckboxGroup>
						);
					}}
				></Controller>

				{/* <CheckboxGroup>
						{checkBoxValues.map((value) => {
							return (
								<Checkbox key={value} value={value} {...register(name)}>
									{value}
								</Checkbox>
							);
						})}
					</CheckboxGroup> */}
				{/* </Stack> */}
				<FormHelperText>{helperText}</FormHelperText>
				<FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
			</FormControl>
		</div>
	);
};

export default CheckboxField;
