import { StyleSheet, View, StatusBar } from "react-native";
import Inicio from "./fonte/telas/Inicio";
import { ThemeProvider } from "styled-components/native";
import tema from "./fonte/tema";

export default function App() {
	return (
		<ThemeProvider theme={tema}>
			<View style={styles.container}>
				<Inicio />
				<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
			</View>
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
	},
});
