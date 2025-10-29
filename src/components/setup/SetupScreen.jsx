import {Flex, Heading, HStack, StackSeparator, Text, Image} from "@chakra-ui/react";
import {Layout}    from "../core/layout/Layout.jsx";
import {SetupForm} from "./SetupForm.jsx";
import maintenance from '../../assets/maintenance.svg'

export function SetupScreen() {
	return (
		<Layout>
			<HStack w={"60%"} h={"60%"} bgColor={"gray.900"} rounded={"xl"} shadow={"md"} p={"5rem"}
					separator={<StackSeparator/>} gap={"5rem"}>

				<SetupText/>

				<SetupForm/>

			</HStack>
		</Layout>
	);
}

function SetupText() {
	return (
		<Flex w={"33%"} align={"center"} justify={"center"} direction={"column"} gap={"3rem"}>
			<Image src={maintenance} w={"50%"} h={"50%"}/>
			<Heading fontSize={"3xl"}>Bonjour,</Heading>
			<Text textStyle={"sm"} textAlign={"justify"}>Ici nous allons créer le compte administrateur pour votre
				installation. Il vous servira à créer/gérer les rôles et utilisateurs de votre installation.<br/> Ce
				compte
				ne dois en aucun cas être perdu, en cas de perte, veuillez contacter le support.</Text>
		</Flex>
	);
}