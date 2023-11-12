import { StyleSheet, Text, View, StatusBar } from "react-native";
import Inicio from "./fonte/telas/Inicio";

export default function App() {
	return (
		<View style={styles.container}>
			<Inicio />
			<StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
		</View>
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
