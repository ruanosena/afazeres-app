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
export const BotaoIconeTerminado = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
	size: 24,
	color: theme.CORES.PURPLE_DARK,
}))``;
export const Conteudo = styled.View`
	flex: 1;
	padding-left: 8px;
	padding-right: 8px;
`;
export const DataEHora = styled.Text`
	color: ${({ theme }) => theme.CORES.GRAY_300};
	font-size: ${({ theme }) => theme.FONTE_TAMANHO.PQ}px;
	font-family: ${({ theme }) => theme.FONTE_FAMILIA.REGULAR};
`;
export const Texto = styled.Text`
	color: ${({ theme }) => theme.CORES.GRAY_100};
	font-size: ${({ theme }) => theme.FONTE_TAMANHO.G}px;
	font-family: ${({ theme }) => theme.FONTE_FAMILIA.BOLD};
`;
export const TextoConcluido = styled.Text`
	color: ${({ theme }) => theme.CORES.GRAY_300};
	font-size: ${({ theme }) => theme.FONTE_TAMANHO.G}px;
	text-decoration-line: line-through;
	font-family: ${({ theme }) => theme.FONTE_FAMILIA.BOLD};
`;
export const BotaoRemover = styled.TouchableOpacity`
	width: 58px;
	height: 58px;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
`;
