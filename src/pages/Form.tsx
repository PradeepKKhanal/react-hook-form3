import { Button, HStack,Text, Wrap } from "@chakra-ui/react";
import InputField from "../components/form/fields/InputField";
import { useForm, SubmitHandler } from "react-hook-form";
import RadioGroupField from "../components/form/fields/RadioGroupField";
import SelectField from "../components/form/fields/SelectField";
import FieldArrayField from "../components/form/fields/FieldArrayField";
import CheckboxField from "../components/form/fields/CheckboxField";
import DatePickerField from "../components/form/fields/DatePickerField";
import MultiSelectField from "../components/form/fields/MultiSelectField";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../schema/formSchema";
import * as yup from 'yup'
import { zonesOfNepal,provincesOfNepal,festivalsOfNepal,guardianOptions } from "../data/formData";

// export interface Inputs {
// 	firstname: string;
// 	lastname: string;
// 	email: string;
// 	// gender: string;
// 	gender:'male'|'female'|'other'
// 	zone: string;
// 	province: string;
// 	phones: { phoneNum: string }[];
// 	// guardian:string[];
// 	guardian:'father' | 'mother' | 'brother'[]
// 	festivals:{value:string,label:string}[];
// 	birthday:Date;
// }


export interface Inputs extends yup.InferType<typeof formSchema>{}

export interface FieldArrayType{
	phones:{phoneNumb:string[]}
}
export interface fd{
	phoneNumb:string[]
}



const FormPage = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<Inputs>(
	{
		resolver:yupResolver(formSchema),
		defaultValues:{
			phones:[{phoneNum:''}]
		}
	}
	);

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	};

	return (
		<>
			<div
				style={{
					width: "50%",
					minWidth:'600px',
					margin: "auto",
					marginTop: "100px",
					// border: "1px solid black",
					borderRadius:'10px',
					boxShadow:'0 0 5px 5px #e1dddd7d',
					padding: "20px",
				}}
			>
				<Text fontSize={'30px'} mb={'30px'} textAlign={'center'}>Fill the form</Text>

				<form action="" onSubmit={handleSubmit(onSubmit)}>
					<HStack >
						<InputField
							name="firstname"
							label="FirstName"
							type="text"
							placeholder="Enter your first name"
							// value="ram"
							register={register}
							errors={errors}
						></InputField>

						<InputField
							name="lastname"
							label="LastName"
							type="text"
							placeholder="Enter your last name"
							register={register}
							errors={errors}
						></InputField>
					</HStack>
                    
					<InputField

						type="email"
						label="Email"
						placeholder=""
						register={register}
						errors={errors}
						name="email"
					></InputField>
					

					<RadioGroupField
						name="gender"
						register={register}
						errors={errors}
						label="Gender"
						radioValues={["male", "female", "other"]}
					></RadioGroupField>

					<SelectField
						name="zone"
						label="zone"
						placeholder="select zone"
						register={register}
						errors={errors}
						selectValues={zonesOfNepal}
					></SelectField>

					<SelectField
						name="province"
						label="province"
						placeholder="select province"
						register={register}
						errors={errors}
						selectValues={provincesOfNepal}
					></SelectField>

					<FieldArrayField
					label="phones"
						name="phones"
						register={register}
						errors={errors}
						control={control}
					></FieldArrayField>


					{/* <CheckboxField
					 name='guardian'
					 label='guardian'
					 register={register}
					 errors={errors}
					 checkBoxValues={guardianOptions}
					control={control}
					 >

					</CheckboxField> */}

					<DatePickerField
					 name='birthday'
					 label='birthday'
					 register={register}
					 errors={errors}
					 control={control}
					
					
					>


					</DatePickerField>

					{/* <InputField
					 name='guardian'
					 label='guardian'
					 register={register}
					 errors={errors}
					 type='date'
					></InputField> */}

					<MultiSelectField
					control={control}
					multiSelectOptions={festivalsOfNepal}
					name='festivals'
					label="festivals"
					errors={errors}
					
					>

					</MultiSelectField>


		

					<Button mt='50px' margin='auto'  type="submit" 
					display={'flex'}>Submit</Button>

					
				</form>
			</div>
		</>
	);
};

export default FormPage;
