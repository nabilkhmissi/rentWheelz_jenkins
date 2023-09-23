import { useEffect, useState } from "react"
import CardCard from "./car-card"
import { fetchCars } from "../service"
import { Car } from "../models/car.model"

export default function Cars() {

    const [cars, setCars] = useState<Car[] | null>(null)

    useEffect(() => {
        fetchCars().then(response => {
            setCars(response.data.carList)
        })
    }, [])

    return (
        <div className="cars">
            {cars && cars.map(car => <CardCard key={car.id} car={car} />)}
        </div>
    )
}