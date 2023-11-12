import { Image, Text, View } from "react-native";
import { estilos } from "./estilos";

export default function Marca() {
	return (
		<View style={estilos.marca}>
			<Image style={estilos.marcaImagem} source={require("../../../assets/rocket.png")} />
			<Text style={estilos.marcaPrimeiroTexto}>to</Text>
			<Text style={estilos.marcaSegundoTexto}>do</Text>
		</View>
	);
}
