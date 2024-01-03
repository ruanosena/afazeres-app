import { Alert, FlatList, Image } from "react-native";
import Marca from "../../componentes/Marca";
import {
	Conteudo,
	Conteiner,
	FormularioConteiner,
	ListaConteiner,
	ListaVazia,
	ListaVaziaTexto,
	ListaVaziaTitulo,
} from "./estilos";
import Entrada from "../../componentes/Entrada";
import BotaoRedondo from "../../componentes/Botao";
import BarraInfo from "../../componentes/BarraInfo";
import { useState } from "react";
import { ITarefa } from "../../tipagens";
import Tarefa from "../../componentes/Tarefa";

export default function Inicio() {
	const [listaTarefas, defListaTarefas] = useState<ITarefa[]>([]);
	const [tarefa, defTarefa] = useState<string>("");

	function aoAdicionarTarefa() {
		const novaTarefa = tarefa.trim();
		if (novaTarefa.length) {
			if (listaTarefas.find((t) => t.nome == novaTarefa)) {
				return Alert.alert("Tarefa existente", "Já existe uma tarefa com esse nome.");
			}
			defListaTarefas((tarefas) => [
				...tarefas,
				{ nome: novaTarefa, concluido: false, criado_em: new Date() },
			]);
			defTarefa("");
		}
	}
	function aoConcluirTarefa(indice: number) {
		const novaLista = [...listaTarefas];
		novaLista[indice].concluido = !novaLista[indice].concluido;
		defListaTarefas(novaLista);
	}
	function aoRemoverTarefa(indice: number) {
		Alert.alert("Remover tarefa", `Você deseja mesmo apagar ${listaTarefas[indice].nome}?`, [
			{
				text: "Não",
				style: "cancel",
			},
			{
				text: "Sim",
				onPress() {
					defListaTarefas((a) => a.filter((_, i) => i != indice));
				},
			},
		]);
	}

	return (
		<Conteiner>
			<Conteudo>
				<Marca />
				<FormularioConteiner>
					<Entrada
						placeholder="Adicione uma nova tarefa"
						onChangeText={defTarefa}
						value={tarefa}
						onSubmitEditing={aoAdicionarTarefa}
						returnKeyType="send"
					/>
					<BotaoRedondo onPress={aoAdicionarTarefa}>+</BotaoRedondo>
				</FormularioConteiner>
				<ListaConteiner>
					<BarraInfo
						criadas={listaTarefas.filter((t) => !t.concluido).length}
						concluidas={listaTarefas.filter((t) => t.concluido).length}
					/>
					<FlatList
						data={listaTarefas
							.sort((t1, t2) => t1.criado_em.valueOf() - t2.criado_em.valueOf())
							.sort((t1, t2) => (t1.concluido ? 1 : t2.concluido ? -1 : 0))}
						keyExtractor={(_, indice) => `tarefa-${indice}`}
						renderItem={({ item, index }) => (
							<Tarefa
								{...item}
								aoRemover={() => aoRemoverTarefa(index)}
								aoConcluir={() => aoConcluirTarefa(index)}
							/>
						)}
						ListEmptyComponent={
							<ListaVazia>
								<Image source={require("../../../assets/Clipboard.png")} />
								<ListaVaziaTitulo>Você ainda não tem tarefas cadastradas</ListaVaziaTitulo>
								<ListaVaziaTexto>Crie tarefas e organize seus itens a fazer</ListaVaziaTexto>
							</ListaVazia>
						}
					/>
				</ListaConteiner>
			</Conteudo>
		</Conteiner>
	);
}
