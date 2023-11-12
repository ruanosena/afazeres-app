import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
	barra: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomColor: "#808080",
		borderBottomWidth: 1,
		paddingVertical: 16,
	},
	textoPrimario: {
		color: "#4EA8DE",
		fontWeight: "bold",
	},
	textoSecundario: {
		color: "#8284FA",
		fontWeight: "bold",
	},
	distintivo: {
		color: "#D9D9D9",
		backgroundColor: "#333333",
		borderRadius: 8,
		paddingHorizontal: 4,
    marginLeft: 4
	},
});
