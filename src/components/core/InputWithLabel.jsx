import {Field, Input} from "@chakra-ui/react";

export function InputWithLabel({label, value, onChange, placeholder, required}) {
	const handleChange = (e) => onChange(e.target.value);

	return (
		<Field.Root requird={required}>
			<Field.Label>
				{label} <Field.RequiredIndicator/>
			</Field.Label>
			<Input placeholder={placeholder} value={value} onChange={handleChange} id={label}
				   _hover={{borderColor: "green.700"}} _focus={{outlineColor: "green.700", borderColor: "green.700"}}
				   transition={"0.15s"}/>
		</Field.Root>
	)
}