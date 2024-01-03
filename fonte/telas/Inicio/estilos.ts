import styled from "styled-components/native";

export const Conteiner = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.CORES.GRAY_100};
	align-items: center;
	justify-content: flex-start;
`;
export const Conteudo = styled.View`
	flex: 1;
	width: 100%;
	background-color: ${({ theme }) => theme.CORES.GRAY_600};
`;
export const FormularioConteiner = styled.View`
	width: 100%;
	padding-left: 24px;
	padding-right: 24px;
	margin-top: -32px;
	flex-direction: row;
`;
export const ListaConteiner = styled.View`
	flex: 1;
	padding-left: 24px;
	padding-right: 24px;
	margin-top: 32px;
`;
export const ListaVazia = styled.View`
	justify-content: center;
	align-items: center;
	padding: 42px 16px;
`;

export const ListaVaziaTitulo = styled.Text`
	margin-top: 12px;
	color: ${({ theme }) => theme.CORES.GRAY_300};
	font-family: ${({ theme }) => theme.FONTE_FAMILIA.BOLD};
	text-align: justify;
`;
export const ListaVaziaTexto = styled.Text`
	color: ${({ theme }) => theme.CORES.GRAY_300};
	text-align: justify;
`;
