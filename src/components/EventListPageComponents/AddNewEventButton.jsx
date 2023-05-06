import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {React} from "react"; 

export const AddNewEventButton = () => {
	return (
		<Button
			as={Link}
			to="/create-event"
			colorScheme={"green.500"}
			variant={"outline"}
			_hover={{ backgroundColor: "whiteAlpha.900" }}
			size={{ base: "sm", md: "md" }}
			p={6}
		>
			Add New Event
		</Button>
	);
};
