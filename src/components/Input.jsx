import React, { useState } from 'react'
import { UilSearch, UilAirplay, UilLocationPinAlt } from '@iconscout/react-unicons'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Input({ setQuery, units, setUnits }) {
    const [city, setCity] = useState("")

    const handleUnitChange = (e) => {
        const selectedUnit = e.currentTarget.name
        if (units !== selectedUnit) setUnits(selectedUnit)
    }
    const handleSearchClick = () => {
        if (city !== '') setQuery({ q: city })
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            toast.info("Fetching user's location.")

            navigator.geolocation.getCurrentPosition((position) => {
                toast.success("Location fetched!");
                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setQuery({
                    lat,
                    lon,

                })
            })
        }
    }
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type='text' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' placeholder='Search for city...' />
                <UilSearch onClick={handleSearchClick} size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
                <UilLocationPinAlt onClick={handleLocationClick} size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button onClick={handleUnitChange} name='metric' className='text-xl text-white font-light'>°C</button>
                <p className='text-xl text-white mx-1'>|</p>
                <button onClick={handleUnitChange} name='imperial' className='text-xl text-white font-light hover:scale-125'>°F</button>
            </div>
        </div>
    )
}

export default Input