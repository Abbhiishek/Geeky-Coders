import React from 'react'

function PlanetCard({ planet, index }) {
    return (
        <>
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4 dark:shadow-slate-200 shadow-slate-700">
                <h2 className="text-2xl font-bold dark:text-white">{planet.name}</h2>
                <p className='dark:text-white'>Diameter: {planet.diameter} Km</p>
                <p className='dark:text-white'>Climate: {planet.climate}</p>
                <p className='dark:text-white'>Gravity: {planet.gravity}</p>
                <p className='dark:text-white'>Population: {planet.population}</p>
                <p className='dark:text-white'>Terrain: {planet.terrain}</p>
            </div>
        </>
    )
}

export default PlanetCard