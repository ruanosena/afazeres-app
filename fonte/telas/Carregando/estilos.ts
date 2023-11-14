import styled from "styled-components/native";

export const Conteiner = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.CORES.PURPLE_DARK};
	align-items: center;
	justify-content: center;
`;
export const CarregandoIndicador = styled.ActivityIndicator.attrs(({ theme }) => ({
	color: theme.CORES.PURPLE,
}))``;