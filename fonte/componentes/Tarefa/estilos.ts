import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const TarefaCartao = styled.View`
	background-color: ${({ theme }) => theme.CORES.GRAY_500};
	flex-direction: row;
	align-items: center;
	margin-bottom: 6px;
	padding: 0 16px;
`;

export const Botao = styled.TouchableOpacity`
	width: 29px;
	height: 29px;
	align-items: center;
	justify-content: center;
`;
export const BotaoIcone = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
	size: 24,
	color: theme.CORES.BLUE,
}))``;
export const BotaoIconeTerminado = styled(MaterialCommunityIcons).attrs(
	({ theme }) => ({
		size: 24,
		color: theme.CORES.PURPLE_DARK,
	})
)``;
export const CartaoSwitch = styled.Switch.attrs(({ theme }) => ({
	trackColor: { true: theme.CORES.BLUE_DARK },
	thumbColor: theme.CORES.BLUE,
}))``;
export const Texto = styled.Text`
	flex: 1;
	color: ${({ theme }) => theme.CORES.GRAY_100};
	padding-left: 8px;
	padding-right: 8px;
`;
export const TextoConcluido = styled.Text`
	flex: 1;
	color: ${({ theme }) => theme.CORES.GRAY_300};
	text-decoration-line: line-through;
	padding-left: 8px;
	padding-right: 8px;
`;
export const BotaoRemover = styled.TouchableOpacity`
	width: 58px;
	height: 58px;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
`;
