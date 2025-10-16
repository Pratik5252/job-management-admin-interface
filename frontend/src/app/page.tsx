import Filters from '@/components/Filters'
import JobCard from '@/components/Jobs'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full'>
      <div className='header-section'>
        <Navbar />
        <Filters />
      </div>
    <JobCard />
    </div>
  )
}

export default page