import React from 'react'

function VehicleCard({ vehicle, index }) {
    return (
        <>
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4 dark:shadow-slate-200 shadow-slate-700">
                <h2 className="text-2xl font-bold dark:text-white pb-4" >{vehicle.name}</h2>
                <hr className='pb-2' />
                <p className='dark:text-white'>Model : {vehicle.model}</p>
                <p className='dark:text-white'>Length : {vehicle.length} </p>
                <p className='dark:text-white'>Manufactures : {vehicle.manufacturer} </p>
                <p className='dark:text-white'>Crew : {vehicle.crew} </p>
                <p className='dark:text-white'>Passengers : {vehicle.passengers} </p>
                <p className='dark:text-white'>Vehicle Class : {vehicle.vehicle_class} </p>
                <p className='dark:text-white'>In {vehicle.vehicle_class.length} Films</p>
            </div>
        </>
    )
}

export default VehicleCard