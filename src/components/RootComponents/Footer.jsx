import { Box, Flex,Text } from "@chakra-ui/react";

export const Footer = () => {
	return (
		<Box backgroundColor={"green.500"} p={{ base: 4, md: 6 }} mt={4}>
			<Flex justifyContent={"center"}>
				
				<Text color={"white"} fontSize={"s"}>
				© Eventex{" "}
			</Text>

			
				
			</Flex>
		</Box>
	);
};
