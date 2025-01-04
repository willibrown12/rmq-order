import { useSelector } from "react-redux"
import { RootState } from "../store"
import { THEME } from "../store/settingsSlice/settingsSlice"

export function Header() {
    console.log("Header render")
    const themeValue = useSelector((state: RootState) => state.settings.theme)
    const themeStyle = _getThemeStyle()
    return <div style={{ display: "flex", ...themeStyle }}>
        <h2>Home|</h2>
        <h2>Cars|</h2>
        <h2>Statistics</h2>
    </div>
    function _getThemeStyle() {
        if (themeValue === THEME.DARK) return { backgroundColor: "black", color: "white" }
        if (themeValue === THEME.LIGHT) return { backgroundColor: "white", color: "black" }
        else return { backgroundColor: "pink", color: "red" }
    }
}