export interface Theme {
    name: string,
    colors: {
        backgroudPrimary: string,
        backgroudSecondary: string
    }
}

export interface Themes {
    [key:string]: Theme
}