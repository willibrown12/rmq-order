import { RootState } from "../store"
import { useSelector } from "react-redux"



export default function CarsStatistics() {
    console.log("CarsStatistics render!!")
    const numberOfCars = useSelector((state: RootState) => state.cars.numberOfCars)
    const isLoading = useSelector((state: RootState) => state.cars.cars.isLoading)
    const cars = useSelector((state: RootState) => state.cars.cars.data)

    const calcTotalWeight = Array.isArray(cars) && cars.reduce((total, currentCar) => {
        return total + currentCar.Weight_in_lbs
    }, 0)


    return <div>
        <h1 style={{ border: "1px solid black" }}> Cars Statistics: {numberOfCars}</h1>
        {isLoading && <h2>Loading...</h2>}
        <h2>Total Weight {calcTotalWeight} </h2>
    </div>
}
