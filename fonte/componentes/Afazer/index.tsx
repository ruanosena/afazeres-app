import { Image, Switch, Text, TouchableOpacity, View, ViewProps } from "react-native";
import { estilos } from "./estilos";
import { AfazerTipo } from "../../tipagens";

type AfazerProps = ViewProps &
	AfazerTipo & {
		aoRemover: () => void;
		aoConcluir: () => void;
	};

export default function Afazer({ nome, concluido, aoRemover, aoConcluir, ...rest }: AfazerProps) {
	return concluido ? (
		<View style={estilos.afazerCartao} {...rest}>
			<Switch onValueChange={aoConcluir} value={concluido} />
			<Text style={estilos.cartaoTextoConcluido}>{nome}</Text>
			<TouchableOpacity style={estilos.cartaoBotao} onPress={aoRemover}>
				<Image source={require("@esp/trash.png")}></Image>
			</TouchableOpacity>
		</View>
	) : (
		<View style={estilos.afazerCartao} {...rest}>
			<Switch onValueChange={aoConcluir} value={concluido} />
			<Text style={estilos.cartaoTexto}>{nome}</Text>
			<TouchableOpacity style={estilos.cartaoBotao} onPress={aoRemover}>
				<Image source={require("@esp/trash.png")}></Image>
			</TouchableOpacity>
		</View>
	);
}
