import { configureStore } from '@reduxjs/toolkit'
import { formReducer, changeName, changeCost } from './slices/formSlice'
import { carsReducer, ChangeSearchTerm, addCar, removeCar } from './slices/carsSlice'

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer,
    }
})

export { store, changeCost, changeName, ChangeSearchTerm, addCar, removeCar}