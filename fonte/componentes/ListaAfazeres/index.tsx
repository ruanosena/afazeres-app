import { FlatList, FlatListProps, Image, Text, View } from "react-native";
import { estilos } from "./estilos";
import { AfazerTipo } from "../../tipagens";
import Afazer from "../Afazer";

type ListaAfazeresProps = {
	dados: AfazerTipo[];
	aoRemoverTarefa: (indice: number) => void;
	aoConcluirTarefa: (indice: number) => void;
};

export default function ListaAfazeres({ dados, aoRemoverTarefa, aoConcluirTarefa }: ListaAfazeresProps) {
	return (
		<FlatList
			data={dados}
			keyExtractor={(_, indice) => `afazer-${indice}`}
			renderItem={({ item, index }) => (
				<Afazer {...item} aoConcluir={() => aoConcluirTarefa(index)} aoRemover={() => aoRemoverTarefa(index)} />
			)}
			ListEmptyComponent={
				<View style={estilos.listaVazia}>
					<Image source={require("../../../assets/Clipboard.png")} />
					<Text style={estilos.listaVaziaTitulo}>Você ainda não tem tarefas cadastradas</Text>
					<Text style={estilos.listaVaziaTexto}>Crie tarefas e organize seus itens a fazer</Text>
				</View>
			}
		/>
	);
}
