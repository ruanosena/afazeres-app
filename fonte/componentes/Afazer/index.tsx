import { Image, ViewProps } from "react-native";
import { AfazerCartao, CartaoBotao, CartaoConcluidoTexto, CartaoSwitch, CartaoTexto } from "./estilos";
import { AfazerTipo } from "../../tipagens";

type AfazerProps = ViewProps &
	AfazerTipo & {
		aoRemover: () => void;
		aoConcluir: () => void;
	};

export default function Afazer({ nome, concluido, aoRemover, aoConcluir, ...rest }: AfazerProps) {
	return concluido ? (
		<AfazerCartao {...rest}>
			<CartaoSwitch onValueChange={aoConcluir} value={concluido} />
			<CartaoConcluidoTexto>{nome}</CartaoConcluidoTexto>
			<CartaoBotao onPress={aoRemover}>
				<Image source={require("@esp/trash.png")}></Image>
			</CartaoBotao>
		</AfazerCartao>
	) : (
		<AfazerCartao {...rest}>
			<CartaoSwitch onValueChange={aoConcluir} value={concluido} />
			<CartaoTexto>{nome}</CartaoTexto>
			<CartaoBotao onPress={aoRemover}>
				<Image source={require("@esp/trash.png")}></Image>
			</CartaoBotao>
		</AfazerCartao>
	);
}
