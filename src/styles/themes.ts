import { Theme, Themes } from "../models/theme";

const light: Theme = {
    name: 'light',
    colors: {
        backgroudPrimary: '#4682b4',
        backgroudSecondary: 'rgb(237, 240, 241)'
    }
}
const dark: Theme = {
    name: 'dark',
    colors: {
        backgroudPrimary: 'black',
        backgroudSecondary: 'gray'
    }
}

export const themes: Themes = { light, dark }