import { Control, Controller, FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "../../../pages/Form";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  // Input,
  // InputLeftElement,
} from '@chakra-ui/react'
// import InputField from "./InputField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { CalendarIcon } from "@chakra-ui/icons";

interface DatePicketFieldProps {
	name: keyof Inputs;
	label: string;
	register: UseFormRegister<Inputs>;
  control:Control<Inputs, any>,
	errors: FieldErrors<Inputs>;
	helperText?: string;
	placeholder?: string;
}

const DatePickerField = ({
	label,
	register,
  control,
	errors,
	name,
  helperText
}: DatePicketFieldProps) => {
	return (
		<div>


<FormControl py={'10px'} isInvalid={!!errors[name]}>
  <FormLabel>{label}</FormLabel>
  <Controller
  name={name}
  control={control}
  render={({field})=>{
    return(

      <div>
          {/* <CalendarIcon></CalendarIcon> */}

        	<DatePicker
       showIcon 
      
      // selected={new Date(Date.now())}  
      selected={field.value as Date}
        onChange={(date) => field.onChange(date)}
        className="custom-input" 
        toggleCalendarOnIconClick
        // customInput={<Input width="100%" />}
        // shouldCloseOnSelect={false}
        >
          <div style={{ color: "red" }}>Don't forget to check the weather!</div>

        </DatePicker>
        
      </div> 

    
    )

  }}

  >

  </Controller>
  
  <FormHelperText>{helperText}</FormHelperText>
  <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
</FormControl>

			{/* <InputField
     label={label}
     name={name}
     register={register}
     errors={errors}
     type='date'

     >
     </InputField> */}
{/*     
			<DatePicker showIcon selected={new Date(Date.now())
       
      }  
      selected={startDate}
        // onChange={(date) => setStartDate(date)}
        toggleCalendarOnIconClick
        shouldCloseOnSelect={false}
        > */}


{/* <div style={{ color: "red" }}>Don't forget to check the weather!</div> */}

{/* </DatePicker> */}
		</div>
	);
};

export default DatePickerField;
