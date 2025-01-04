import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface CarsState {
    numberOfCars: number,
    cars: {
        data: Array<any>,
        errorMessage: string,
        isLoading: boolean
    }
}

const initState: CarsState = {
    numberOfCars: 10,
    cars: {
        data: [],
        errorMessage: "",
        isLoading: false
    }
}

export const fetchCars = createAsyncThunk("fetch/cars",
    async (inputParam?: string) => {
        try {
            const queryParams = inputParam ? `?name=${inputParam}` : ""
            const result = await axios.get(`http://localhost:4500/cars${queryParams}`)
            return result.data
        } catch (error) {
            console.log("error", error)
        }
    }
)

export const carsSlice = createSlice({
    name: "cars",
    initialState: initState,
    reducers: {
        setNumberOfCars: (state, action: PayloadAction<number>) => {
            state.numberOfCars = action.payload
        },
        incrementNumberOfCars: (state) => {
            state.numberOfCars += 1
        }
    }, extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, (state) => {
            state.cars.isLoading = true;
        }).addCase(fetchCars.fulfilled, (state, action) => {
            state.cars.data = action.payload.data
            state.cars.isLoading = false;
        }).addCase(fetchCars.rejected, (state, action) => {
            state.cars.isLoading = false;
            state.cars.data = [];
            state.cars.errorMessage = "Failed to fetch Cars."
        })
    }
})

const { setNumberOfCars, incrementNumberOfCars } = carsSlice.actions
export { setNumberOfCars, incrementNumberOfCars } // single action

export default carsSlice.reducer // connect to store
