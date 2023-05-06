import { Link } from "react-router-dom";
import { Box, Flex, Image } from "@chakra-ui/react";

export const Navigation = () => {
	return (
		<Box backgroundColor={"green.500"}>
			<Flex justifyContent={{ base: "center", md: "center" }} p={1}>
				<Link to="/">
					<Flex>
						<Image
							src="../../Logo/logo_.png"
							alt="logo"
							boxSize={{ base: "100px", md: "100px" }}
						/>
						
					</Flex>
				</Link>
			</Flex>
		</Box>
	);
};
export default Navigation;