'use client'
import { useJobs } from '@/hooks/useJobs'
import { Container, Grid, Text, Loader, Center } from '@mantine/core'
import JobCard from './JobCard'
import { useFilters } from '@/contexts/FilterContext'
import React from 'react'

const Jobs = () => {
    const { filters } = useFilters()
    const { data, isLoading, error } = useJobs(filters)

    if (isLoading) {
        return (
            <Center style={{ minHeight: '400px' }}>
                <Loader color="blue" />
            </Center>
        )
    }

    if (error) {
        return (
            <Center style={{ minHeight: '400px' }}>
                <Text c="red">Error loading jobs. Please try again.</Text>
            </Center>
        )
    }

    if (!data?.data || data.data.length === 0) {
        return (
            <Center style={{ minHeight: '400px' }}>
                <Text c="dimmed">No jobs found matching your criteria.</Text>
            </Center>
        )
    }

    return (
        <Container size="xl" py={52} >
            <Grid>
                {data.data.map(job => (
                    <Grid.Col key={job.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
                        <JobCard job={job} />
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    )
}

export default Jobs