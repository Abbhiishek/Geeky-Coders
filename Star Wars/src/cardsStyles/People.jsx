import React from 'react'

function PeopleCard({ person, index }) {
    return (
        <>
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-4 dark:shadow-slate-200 shadow-slate-700">
                <h2 className="text-2xl font-bold dark:text-white">{person.name}</h2>
                <p className='dark:text-white'>Height: {person.height} cm</p>
                <p className='dark:text-white'>Mass: {person.mass} kg</p>
                <p className='dark:text-white'>Hair Color: {person.hair_color}</p>
                <p className='dark:text-white'>Films: {person.films.length}</p>
            </div>
        </>
    )
}

export default PeopleCard