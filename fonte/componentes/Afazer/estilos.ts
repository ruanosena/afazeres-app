import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
	afazerCartao: {
		backgroundColor: "#262626",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 6,
	},
	cartaoTexto: {
		flex: 1,
		color: "#F2F2F2",
		paddingHorizontal: 8,
	},
	cartaoTextoConcluido: {
		flex: 1,
		textDecorationLine: "line-through",
		color: "#808080",
		paddingHorizontal: 8,
	},
	cartaoBotao: {
		width: 58,
		height: 58,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
	},
});
