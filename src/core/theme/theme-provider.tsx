import { FunctionComponent } from "react";
import { DefaultTheme, ThemeProvider as Provider } from "styled-components";
import { Colors } from ".";

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
}) => (
  <Provider
    theme={
      {
        Colors,
      } as DefaultTheme
    }
  >
    {children}
  </Provider>
);
