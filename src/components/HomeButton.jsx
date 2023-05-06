import { Box, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const HomeButton = () => {
	return (
		<Box>
			<Button
				as={Link}
				to={"/"}
				size={{ base: "md", md: "lg" }}
				colorScheme={"green"}
				variant={"ghost"}
				_hover={{ backgroundColor: "whiteAlpha.200", color: "green.500" }}
			>
				<ArrowBackIcon boxSize={{ base: 5, md: 6 }} /> Home
			</Button>
		</Box>
	);
};

export default HomeButton;