import React from 'react'
import { Card, Text, Button, Group, Stack, Avatar } from '@mantine/core'
import { Clock, MapPin, Users, Layers } from 'lucide-react'
import { Job } from '@/types/jobs'

interface JobCardProps {
    job: Job
}

const JobCard = ({ job }: JobCardProps) => {

    const getCompanyInitials = (companyName: string) => {
        return companyName
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .join('')
            .slice(0, 2)
    }

    // Format salary from monthly to LPA
    const formatSalary = () => {
        if (job.maximumSalary) {
            const annualSalary = job.maximumSalary * 12; // Convert monthly to annual
            return `₹${(annualSalary / 100000).toFixed(1)}LPA`
        } else if (job.minimumSalary) {
            const annualSalary = job.minimumSalary * 12; // Convert monthly to annual
            return `₹${(annualSalary / 100000).toFixed(1)}LPA`
        }
        return 'Salary not disclosed'
    }

    const formatJobType = (jobType: string) => {
        switch (jobType) {
            case 'FULL_TIME': return 'Full-time'
            case 'PART_TIME': return 'Part-time'
            case 'CONTRACT': return 'Contract'
            case 'INTERNSHIP': return 'Internship'
            default: return jobType
        }
    }

    const getTimeAgo = (createdAt: Date) => {
        const now = new Date()
        const diffInHours = Math.floor((now.getTime() - new Date(createdAt).getTime()) / (1000 * 60 * 60))
        
        if (diffInHours < 24) {
            return `${diffInHours}h Ago`
        } else {
            const diffInDays = Math.floor(diffInHours / 24)
            return `${diffInDays}d Ago`
        }
    }

    return (
        <Card 
            padding="md" 
            radius="md" 
            style={{ 
                background: '#FFFFFF',
                height: '100%',
                boxShadow: '0 0px 14px 0px #D3D3D31d'
            }}
        >
            <Stack gap="md">
                <Group justify="space-between" align="flex-start">
                    <div className='avatar'>
                        <Avatar
                            size={66}
                            radius="xl"
                            style={{
                                backgroundColor: '#333333',
                                color: '#FFFFFF',
                                fontWeight: 600
                            }}
                        >
                            {getCompanyInitials(job.companyName)}
                        </Avatar>
                    </div>
                    <div 
                    className='badge'
                    >
                        {getTimeAgo(job.createdAt)}
                    </div>
                </Group>

                <Text fw={600} size="lg" style={{ color: '#333333' }}>
                    {job.title}
                </Text>
                <Group gap={6}>
                    <Group gap={2}>
                        <Users size={16} color="#555555" />
                        <Text size="sm" c="555555">1-3 yr Exp</Text>
                    </Group>
                    <Group gap={2}>
                        <MapPin size={16} color="#555555" />
                        <Text size="sm" c="555555">{job.location}</Text>
                    </Group>
                    <Group gap={2}>
                        <Layers size={16} color="#555555" />
                        <Text size="sm" c="555555">{formatSalary()}</Text>
                    </Group>
                </Group>

                <Text size="sm" c="dimmed" lineClamp={3}>
                    {job.description}
                </Text>
                <Button 
                    fullWidth 
                    radius="md"
                    style={{
                        background: '#00AAFF',
                        border: '#00AAFF',
                        color: '#FFFFFF',
                        fontWeight: 500
                    }}
                >
                    Apply Now
                </Button>
            </Stack>
        </Card>
    )
}

export default JobCard