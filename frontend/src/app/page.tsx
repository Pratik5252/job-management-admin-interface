import Filters from '@/components/Filters'
import JobCard from '@/components/Jobs'
import Navbar from '@/components/Navbar'
import { FilterProvider } from '@/contexts/FilterContext'
import React from 'react'

const page = () => {
  return (
    <FilterProvider>
      <div className='w-full h-full'>
        <div className='header-section'>
          <Navbar />
          <Filters />
        </div>
        <JobCard />
      </div>
    </FilterProvider>
  )
}

export default page