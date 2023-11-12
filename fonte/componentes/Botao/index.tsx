import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { estilos } from "./estilos";
import { ReactNode } from "react";

type BotaoProps = TouchableOpacityProps & {
	children: ReactNode;
};

export default function BotaoRedondo({ children, ...rest }: BotaoProps) {
	return (
		<TouchableOpacity style={estilos.botao} {...rest}>
			<Text style={estilos.botaoTexto}>{children}</Text>
		</TouchableOpacity>
	);
}
