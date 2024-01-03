import { Text, View } from "react-native";
import { estilos } from "./estilos";

type BarraInfoProps = {
	criadas: number;
	concluidas: number;
};

export default function BarraInfo({ criadas, concluidas }: BarraInfoProps) {
	return (
		<View style={estilos.barra}>
			<View>
				<Text style={estilos.textoPrimario}>
					Criadas{" "}
					<View style={estilos.distintivo}>
						<Text style={estilos.distintivoTexto}>{criadas}</Text>
					</View>
				</Text>
			</View>
			<View>
				<Text style={estilos.textoSecundario}>
					Concluídas{" "}
					<View style={estilos.distintivo}>
						<Text style={estilos.distintivoTexto}>{concluidas}</Text>
					</View>
				</Text>
			</View>
		</View>
	);
}
