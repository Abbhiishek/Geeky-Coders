import React from 'react'

function SpeciesCard({ specie, index }) {
    return (
        <>
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4 dark:shadow-slate-200 shadow-slate-700">
                <h2 className="text-2xl font-bold dark:text-white" >{specie.name}</h2>
                <p className='dark:text-white'>Classification : {specie.classification}</p>
                <p className='dark:text-white'>Designation : {specie.designation} </p>
                <p className='dark:text-white'>Average Height : {specie.average_height} cm</p>
                <p className='dark:text-white'>Language : {specie.language} </p>
                <p className='dark:text-white'>Skin Color : {specie.skin_colors} </p>
            </div>
        </>
    )
}

export default SpeciesCard