import "styled-components/native";
import tema from "fonte/tema";

declare module "styled-components/native" {
  type TemaTipo = typeof tema;

  export interface DefaultTheme extends TemaTipo {}
}