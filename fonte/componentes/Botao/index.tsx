import { TouchableOpacityProps } from "react-native";
import { Conteiner, Conteudo, Texto } from "./estilos";
import { ReactNode } from "react";

type BotaoProps = TouchableOpacityProps & {
	children: ReactNode;
};

export default function BotaoRedondo({ children, ...rest }: BotaoProps) {
	return (
		<Conteiner {...rest}>
			<Conteudo>
				<Texto>{children}</Texto>
			</Conteudo>
		</Conteiner>
	);
}
