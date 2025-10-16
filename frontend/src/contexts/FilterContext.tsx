'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface JobFilters {
    search?: string;
    location?: string;
    jobType?: string[];
    minSalary?: number;
    maxSalary?: number;
}

interface FilterContextType {
    filters: JobFilters;
    updateFilters: (newFilters: JobFilters) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [filters, setFilters] = useState<JobFilters>({})

    const updateFilters = (newFilters: JobFilters) => {
        setFilters(newFilters)
    }

    return (
        <FilterContext.Provider value={{ filters, updateFilters }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilters = () => {
    const context = useContext(FilterContext)
    if (context === undefined) {
        throw new Error('useFilters must be used within a FilterProvider')
    }
    return context
}