import { StatusBar } from "react-native";
import Inicio from "./fonte/telas/Inicio";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { ThemeProvider } from "styled-components/native";
import tema from "./fonte/tema";
import Carregando from "./fonte/telas/Carregando";

export default function App() {
	const [fontesCarregadas] = useFonts({ Inter_400Regular, Inter_700Bold });

	return (
		<ThemeProvider theme={tema}>
			{fontesCarregadas ? <Inicio /> : <Carregando />}
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
		</ThemeProvider>
	);
}
