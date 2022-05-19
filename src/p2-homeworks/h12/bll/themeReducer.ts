
export type ThemeType = "dark" | "red" | "some";

export type themeType = {
    type: 'CHANGE_THEME'
    theme: ThemeType
}

const initState = {
    theme: "dark"
};

export const themeReducer = (state = initState, action: themeType): typeof initState => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return{
                ...state, theme: action.theme
            }
        }
        default: return state;
    }
};

export const changeThemeC = (theme: ThemeType):themeType => ({type:'CHANGE_THEME', theme}); // fix any