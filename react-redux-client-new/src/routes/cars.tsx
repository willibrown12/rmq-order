import { useDispatch, useSelector } from "react-redux"
import { fetchCars, incrementNumberOfCars, setNumberOfCars } from "../store/carsSlice/carsSlice"
import { AppDispatch, RootState } from "../store"
import { useState } from "react"

export default function Cars() {
    const dispatch = useDispatch<AppDispatch>()
    const [carModel, setCarModel] = useState("")
    const numberOfCars = useSelector((state: RootState) => state.cars.numberOfCars)
    const isLoading = useSelector((state: RootState) => state.cars.cars.isLoading)
    const cars = useSelector((state: RootState) => state.cars.cars.data)

    console.log("Cars render!")
    return <div style={{ border: "1px solid black" }}>
        <h1> Cars </h1>
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && Array.isArray(cars) && cars.map(currentCar => {
            return <span> {currentCar.Name}|</span>
        })}
        <span> Set Limit of Cars to fetch: </span>
        <input value={numberOfCars} type="text" onChange={(event: any) => {
            console.log(event.target.value)
            dispatch(setNumberOfCars(+event.target.value))
        }} />
        <button onClick={() => {
            dispatch(incrementNumberOfCars())
        }}>
            incrementNumberOfCars
        </button>
        <input type="text" onChange={(e) => {
            setCarModel(e?.target?.value)
        }} placeholder="car model" />
        <button onClick={() => { dispatch(fetchCars(carModel)) }}> Get Cars </button>
    </div>
}



