import {
	Control,
	FieldErrors,
	useFieldArray,
	UseFormRegister,
} from "react-hook-form";
import InputField from "./InputField";
import { Inputs } from "../../../pages/Form";
import { FieldArrayType } from "../../../pages/Form";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
} from "@chakra-ui/react";

interface FieldArrayFieldProps {
	name: keyof FieldArrayType;
	label: string;
	control: Control<Inputs, any>;
	register: UseFormRegister<Inputs>;
	errors: FieldErrors<Inputs>;
	placeholder?: string;
	helperText?: string;
}

const FieldArrayField = ({
	control,
	name,
	register,
	errors,
	placeholder,
	helperText,
	label,
}: FieldArrayFieldProps) => {
	console.log(errors);
	console.log(errors[name]?.message);
	const { fields, append, remove } = useFieldArray({
		control,
		name,
	});
	return (
		// <div>FieldArrayField</div>
		<div>
			<FormControl py={'10px'}>
				<FormLabel>{label}</FormLabel>
				<button
					onClick={() => {
						append({ phoneNum: "" });
					}}
				>
					Add {name}
				</button>
				{fields.map((field, index) => {
					return (
						<div key={field.id}>
							{/* <InputField
                        					
							name={`${name}.${index}.phoneNum` }
							placeholder={placeholder}
							helperText={helperText}
							register={register}
							errors={errors}
						></InputField> */}
							<FormControl isInvalid={!!errors[name]?.[index]?.phoneNum}>
								<Input placeholder={placeholder} {...register(`${name}.${index}.phoneNum`)}></Input>
								<FormErrorMessage>{errors[name]?.[index]?.phoneNum?.message}</FormErrorMessage>
							</FormControl>

							{fields.length > 1 && (
								<button
									onClick={() => {
										remove(index);
									}}
								>
									Remove
								</button>
							)}
						</div>
					);
				})}

				<FormHelperText>{helperText}</FormHelperText>
				<FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
			</FormControl>
		</div>
	);
};

export default FieldArrayField;
