import {Field, Input}        from "@chakra-ui/react";
import {useEffect, useState} from "react";

export function EmailInput({value, onChange}) {
	const [email, setEmail] = useState(value);
	const [color, setColor] = useState("red");

	const handleChange = (e) => setEmail(e.target.value);
	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};



	useEffect(() => {
		if(validateEmail(email)) {
			onChange(email);
			setColor("green");
		}else{
			setColor("red");
		}
	}, [email]);

	return (
		<Field.Root>
			<Field.Label>
				Email <Field.RequiredIndicator/>
			</Field.Label>
			<Input placeholder={"jean.dupont@dupontcompany.com"} value={email} onChange={handleChange}
				   _hover={{borderColor: `${color}.700`}} _focus={{outlineColor: `${color}.700`, borderColor: `${color}.700`}}
				   transition={"0.15s"} type={"email"}/>
		</Field.Root>
	)
}