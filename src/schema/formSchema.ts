import * as yup from "yup";

export const formSchema = yup.object({
	firstname: yup
		.string()
		.required("First name is required")
		.min(2, "First name must be atleast 2 characteres"),

	lastname: yup
		.string()
		.required("Last name is required")
		.min(2, "Last name msut be at least 2 characters"),

	email: yup
		.string()
		.email("Must be a valid email")
		.required("Email is required"),

	gender: yup
		.string()
		.oneOf(["male", "female", "other"], "Please select a valid gender")
		.required("Gender is required"),

	zone: yup.string().required("Zone is required"),

	province: yup.string().required("Province is required"),

	phones: yup
		.array()
		.of(
			yup.object().shape({
				phoneNum: yup
					.string()
					.required("Phone number is required")
					.matches(/^[0-9]+$/, "Phone number must contain only digits")
					.min(10, "Phone number must be at least 10 digits"),
			})
		)
		.min(1, "Atleast one phone number is required")
    .required('Phone numbers are required'),

	guardian: yup
		.array()
		.of(
			yup
				.string()
				.oneOf(["father", "mother", "brother"], "Invalid guardian value")
		)
		.min(1, "Select at least one guardian"),

	festivals: yup
		.array()
		.of(
			yup.object().shape({
				value: yup.string().required("Festival value is required"),
				label: yup.string().required("Festival label is required"),
			})
		)
		.min(1, "Select atleast one festival")
		.required("Festival selection is required"),

	birthday: yup
		.date()
		.required("Birthday is required")
		.nullable()
		.typeError("Must be a valid date")
		.max(new Date(), "Birthday cannot be in the future")
		.nullable()
		.typeError("Must be a valid date")
		.max(new Date(), "Birthday cannot be in the future"),
	//   .min('hundredYearsAgo', 'Birthday cannot be more than 100 years ago'),
});
