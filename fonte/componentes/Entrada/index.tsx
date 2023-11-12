import { TextInput, TextInputProps } from "react-native";
import { estilos } from "./estilos";

type EntradaProps = TextInputProps & {};

export default function Entrada({ ...rest }: EntradaProps) {
	return <TextInput placeholderTextColor="#808080" style={estilos.entrada} {...rest} />;
}
