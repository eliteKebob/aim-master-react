import { Themes } from "../constants/themes";

declare global {
  interface Window {
    __MAIN_THEME__?: Themes;
  }
}

declare module "react" {
  interface CSSProperties {
    ["--color-button"]?: Themes;
  }
}

export interface WithTheme {
  theme: Themes;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
