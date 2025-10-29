import {useEffect, useState}  from "react";
import {Field, HStack, Input} from "@chakra-ui/react";

export function PasswordInput({onValid, setIsMatching}) {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("confirm");
	const [color, setColor] = useState("red");

	useEffect(() => {
		if (password === confirmPassword) {
			onValid(password);
			setIsMatching(true);
			setColor("green");
		}else{
			setIsMatching(false);
			setColor("red");
		}
	}, [password, confirmPassword]);

	return (
		<HStack justifyContent={"center"} align={"center"} gap={"2rem"}>
			<Field.Root requird>
				<Field.Label>
					Mot de passe <Field.RequiredIndicator/>
				</Field.Label>
				<Input value={password} onChange={e => setPassword(e.target.value)} type={"password"}
					   _hover={{borderColor: "green.700"}}
					   _focus={{outlineColor: "green.700", borderColor: "green.700"}}
					   transition={"0.15s"}/>
			</Field.Root>

			<Field.Root requird>
				<Field.Label>
					Confirmez votre mot de passe <Field.RequiredIndicator/>
				</Field.Label>
				<Input onChange={e => setConfirmPassword(e.target.value)} type={"password"}
					   _hover={{borderColor: `${color}.700`}} _focus={{outlineColor: `${color}.700`, borderColor: `${color}.700`}}
					   transition={"0.15s"}/>
			</Field.Root>
		</HStack>
	)
}