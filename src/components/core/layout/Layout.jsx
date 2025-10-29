import {Flex} from "@chakra-ui/react";

export function Layout({ children }) {
	return (
		<Flex w="100vw" h="100vh" align={"center"} justify={"center"} bg={"gray.500"}>
			{children}
		</Flex>
	);
}