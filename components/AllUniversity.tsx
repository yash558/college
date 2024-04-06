import React from 'react'
import UniversityCard from './UniversityCard'

const AllUniversity = () => {
    return (
        <div>
            {[1, 2, 3, 4].map((item, index) => (
                <UniversityCard key={index} />
            ))}
        </div>

    )
}

export default AllUniversity