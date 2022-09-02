import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import components from "./Components";
import colors from "./colors";

const overrides = { colors, components };

const withDefaultColor = withDefaultColorScheme({
	colorScheme: "strawberry",
	components: ["Button"],
});

export default extendTheme(overrides, withDefaultColor);
