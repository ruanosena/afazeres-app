import { Alert, View } from "react-native";
import Marca from "../../componentes/Marca";
import { estilos } from "./estilos";
import Entrada from "../../componentes/Entrada";
import BotaoRedondo from "../../componentes/Botao";
import BarraInfo from "../../componentes/BarraInfo";
import ListaAfazeres from "../../componentes/ListaAfazeres";
import { useState } from "react";
import { AfazerTipo } from "../../tipagens";

export default function Inicio() {
	const [afazeres, defAfazeres] = useState<AfazerTipo[]>([]);
	const [afazer, defAfazer] = useState<string>("");

	function aoAdicionarTarefa() {
		if (afazeres.find((a) => a.nome == afazer)) {
			return Alert.alert("Afazer existente", "Já existe um afazer com esse nome.");
		}
		defAfazeres((a) => [...a, { nome: afazer, concluido: false }]);
		defAfazer("");
	}
	function aoRemoverTarefa(indice: number) {
		Alert.alert("Remover tarefa", `Você deseja mesmo apagar ${afazeres[indice].nome}?`, [
			{
				text: "Não",
				style: "cancel",
			},
			{
				text: "Sim",
				onPress() {
					defAfazeres((a) => a.filter((_, i) => i != indice));
				},
			},
		]);
	}
	function lidarConcluirTarefa(indice: number) {
		defAfazeres((a) => {
			a[indice].concluido = !a[indice].concluido;
			return [...a];
		});
	}

	return (
		<View style={estilos.afazeres}>
			<Marca />
			<View style={estilos.formulario}>
				<Entrada placeholder="Adicione uma nova tarefa" onChangeText={defAfazer} value={afazer} />
				<BotaoRedondo onPress={aoAdicionarTarefa}>+</BotaoRedondo>
			</View>
			<View style={estilos.lista}>
				<BarraInfo criadas={afazeres.length} concluidas={afazeres.filter((a) => a.concluido).length} />
				<ListaAfazeres dados={afazeres} aoRemoverTarefa={aoRemoverTarefa} aoConcluirTarefa={lidarConcluirTarefa} />
			</View>
		</View>
	);
}
