import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { Roboto } from "next/font/google";
import * as React from "react";

type Mode = "light" | "dark";

interface IColorModeContext {
    mode: Mode;
    toggleColorMode: () => void;
    theme: ReturnType<typeof createTheme>;
}

export const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"]
});

export const ColorModeContext = React.createContext<IColorModeContext>({
    mode: "light",
    toggleColorMode: () => {},
    theme: createTheme({
        palette: {
            mode: "light",
            primary: {
                main: "#556cd6"
            },
            secondary: {
                main: "#19857b"
            },

            error: {
                main: red.A400
            }
        },
        typography: {
            fontFamily: roboto.style.fontFamily
        }
    })
});

interface Props {
    children: React.ReactNode;
}

const ColorModeProvider: React.FC<Props> = ({ children }) => {
    const [mode, setMode] = React.useState<Mode>("light");

    // Create a theme instance.
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: "#5cbc63"
                    },
                    secondary: {
                        main: "#000000"
                    }
                },
                typography: {
                    fontFamily: roboto.style.fontFamily
                }
            }),
        [mode]
    );

    const colorMode = React.useMemo(
        () => ({
            mode,
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
            theme
        }),
        [mode, theme]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ColorModeProvider;
