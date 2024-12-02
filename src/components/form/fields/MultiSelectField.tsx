import Select from "react-select";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { Inputs } from "../../../pages/Form";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
} from "@chakra-ui/react";

interface MultiSelectFieldProps {
	control: Control<Inputs, any>;
  label:string;
	name: keyof Inputs;
  errors:FieldErrors<Inputs>;
	multiSelectOptions: { value: string; label: string }[];
  helperText?:string
}

const MultiSelectField = ({
	multiSelectOptions,
	control,
	name,
  label,
  errors,
  helperText
}: MultiSelectFieldProps) => {
  // console.log(errors)
	// console.log(errors[name]?.message)
	return (
		// <div>MultiSelectField</div>
		<div>
			<FormControl py={'10px'} isInvalid={!!errors[name]}>
				<FormLabel>{label}</FormLabel>
				
	<Controller
				name={name}
				control={control}
				render={({ field }) => {
					return (
						<Select
							{...field}
							closeMenuOnSelect={false}
							isMulti
							options={multiSelectOptions}
						></Select>
					);
				}}
			></Controller>



				<FormHelperText>{helperText}</FormHelperText>


      <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
			</FormControl>
		
		</div>
	);
};

export default MultiSelectField;
