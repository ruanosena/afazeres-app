import { Image, ViewProps } from "react-native";
import {
	TarefaCartao,
	BotaoRemover,
	TextoConcluido,
	Texto,
	Botao,
	BotaoIcone,
	BotaoIconeTerminado,
	Conteudo,
	DataEHora,
} from "./estilos";
import { ITarefa } from "../../tipagens";
import { useState } from "react";

type TarefaProps = ViewProps &
	ITarefa & {
		aoRemover: () => void;
		aoConcluir: () => void;
	};

export default function Tarefa({
	nome,
	concluido,
	criado_em,
	aoConcluir,
	aoRemover,
	...rest
}: TarefaProps) {
	return (
		<TarefaCartao {...rest}>
			<Botao onPress={aoConcluir}>
				{concluido ? (
					<BotaoIconeTerminado name="check-circle" />
				) : (
					<BotaoIcone name="circle-outline" />
				)}
			</Botao>
			<Conteudo>
				{concluido ? <TextoConcluido>{nome}</TextoConcluido> : <Texto>{nome}</Texto>}
				<DataEHora>{criado_em.toLocaleString()}</DataEHora>
			</Conteudo>
			<BotaoRemover onPress={aoRemover}>
				<Image source={require("@esp/trash.png")}></Image>
			</BotaoRemover>
		</TarefaCartao>
	);
}
