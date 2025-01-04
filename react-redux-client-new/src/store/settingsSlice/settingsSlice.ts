import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export enum THEME {
    LIGHT = 1,
    DARK = 0,
    HAREL_PRINCESS = 2
}
export interface SettingsState {
    theme: THEME
}
const initState: SettingsState = {
    theme: THEME.DARK
}

export const settingsSlice = createSlice({
    name: "settings",
    initialState: initState,
    reducers: {
        setTheme: (state, action: PayloadAction<THEME>) => {
            state.theme = action.payload
        },
    }
})

const { setTheme } = settingsSlice.actions
export { setTheme } // single action

export default settingsSlice.reducer // connect to store