import {Button, Flex}        from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {InputWithLabel}      from "../core/InputWithLabel.jsx";
import {RiAccountBoxLine}    from "react-icons/ri";
import {PasswordInput}       from "./PasswordInput.jsx";
import {setupService}        from "../../service/setupService.js";
import {toaster}             from "../core/ui/toaster.jsx";
import {useNavigate}         from "react-router";

export function SetupForm() {
	const {navigate} = useNavigate();
	const redirectToHomePage = navigate("/")
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [password, setPassword] = useState("");
	const [isMatching, setIsMatching] = useState(false);
	const isSetupInfoValid = useValidateSetupInfo(email, firstName, lastName, companyName, password, isMatching);

	function handleSubmit(e) {
		e.preventDefault();
		setupService.setup(companyName, email, firstName, lastName, password)
					.then(() => {
						toaster.create({
										   title: "Compte crée avec succès",
										   type: "success",
									   });
						setInterval(redirectToHomePage, 2000);
					})
					.catch(err => {
						toaster.create({
										   title: "Une erreur est survenue",
										   type: "error",
									   })
						console.log(err)
					});
	}

	return (
		<Flex direction={"column"} justifyContent={"center"} align={"center"} gap={"1rem"}>
			<InputWithLabel label={"Email"} value={email} required={true} onChange={setEmail}
							placeholder={"jean.dupont@dupontcompany.com"}/>
			<Flex direction={"row"} justifyContent={"space-between"} align={"center"} gap={"2rem"}>
				<InputWithLabel label={"Prénom"} value={firstName} required={true} onChange={setFirstName}
								placeholder={"Jean"}/>
				<InputWithLabel label={"Nom de famille"} value={lastName} required={true} onChange={setLastName}
								placeholder={"Dupont"}/>
			</Flex>
			<InputWithLabel label={"Nom de votre entreprise"} value={companyName} required={true}
							onChange={setCompanyName} placeholder={"Dupont Company"}/>
			<PasswordInput value={password} onValid={setPassword} setIsMatching={setIsMatching}/>

			<Flex w={"100%"} justify={"end"} align={"center"}>
				<Button colorPalette="green" disabled={!isSetupInfoValid}><RiAccountBoxLine/> Créer le compte</Button>
			</Flex>
		</Flex>
	)
}

function useValidateSetupInfo(email, firstName, lastName, companyName, password, isPasswordMatching) {
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		if (email !== "" && firstName !== "" && lastName !== "" && companyName !== "" && password !== "" && isPasswordMatching) {
			setIsValid(true);
		}
	}, [email, firstName, lastName, companyName, password]);

	return isValid;
}