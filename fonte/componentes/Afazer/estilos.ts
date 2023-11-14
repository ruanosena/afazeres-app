import styled from "styled-components/native";

export const AfazerCartao = styled.View`
	background-color: ${({ theme }) => theme.CORES.GRAY_500};
	flex-direction: row;
	align-items: center;
	margin-bottom: 6px;
`;
export const CartaoSwitch = styled.Switch.attrs(({ theme }) => ({
	trackColor: { true: theme.CORES.BLUE_DARK }, thumbColor: theme.CORES.BLUE,
}))``;
export const CartaoTexto = styled.Text`
	flex: 1;
	color: ${({ theme }) => theme.CORES.GRAY_100};
	padding-left: 8px;
	padding-right: 8px;
`;
export const CartaoConcluidoTexto = styled.Text`
	flex: 1;
	color: ${({ theme }) => theme.CORES.GRAY_300};
	text-decoration-line: line-through;
	padding-left: 8px;
	padding-right: 8px;
`;
export const CartaoBotao = styled.TouchableOpacity`
	width: 58px;
	height: 58px;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
`;
