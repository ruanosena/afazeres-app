import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Conteiner = styled.TouchableOpacity`
	width: 58px;
	height: 58px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.CORES.BLUE_DARK};
	border-radius: 6px;
`;

export const Conteudo = styled.View`
	width: 29px;
	height: 29px;
	align-items: center;
	justify-content: center;
	border-width: 1px;
	border-color: ${({ theme }) => theme.CORES.GRAY_100};
	border-radius: 16px;
`;

export const Texto = styled.Text`
	color: ${({ theme }) => theme.CORES.GRAY_100};
`;
