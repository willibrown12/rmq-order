import { useDispatch, useSelector } from "react-redux"
import { incrementNumberOfCars, setNumberOfCars } from "../store/carsSlice/carsSlice"
import { RootState } from "../store"
import { setTheme, THEME } from "../store/settingsSlice/settingsSlice"

export default function Settings() {
    console.log("Settings render")
    const dispatch = useDispatch()
    return <div style={{ border: "1px solid black" }}>
        <h1> Settings </h1>
        <button onClick={() => {
            dispatch(setTheme(THEME.LIGHT))
        }}> Set Theme to Light  </button>
        <button onClick={() => {
            dispatch(setTheme(THEME.DARK))
        }}> Set Theme to Dark  </button>
        <button onClick={() => {
            dispatch(setTheme(THEME.HAREL_PRINCESS))
        }}> Set Theme to HAREL PRINCESS  </button>
    </div>
}
