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
					Criadas <Text style={estilos.distintivo}>{criadas}</Text>
				</Text>
			</View>
			<View>
				<Text style={estilos.textoSecundario}>
					Concluídas <Text style={estilos.distintivo}>{concluidas}</Text>
				</Text>
			</View>
		</View>
	);
}
