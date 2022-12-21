import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme { 
    title: String;

    colors: { 
        primary: String;
        secondary: String;
        tertiary: String;

        white: String;
        black: String;
        gray: String;

        success: String;
        info: String;
        warning: String;
    },
    }
}