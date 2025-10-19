import React from 'react'
import { Card, Text, Button, Group, Stack, Avatar } from '@mantine/core'
import { Clock, MapPin, Users, Layers, Building2, UserPlus } from 'lucide-react'
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

    const formatSalary = () => {
        if (job.maximumSalary) {
            const annualSalary = job.maximumSalary * 12;
            return `₹${(annualSalary / 100000).toFixed(1)}LPA`
        } else if (job.minimumSalary) {
            const annualSalary = job.minimumSalary * 12;
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

    const formatDescription = (description: string) => {
        const points = description
            .split(/\.\s+(?=[A-Z])/)
            .map(point => point.trim())
            .filter(point => point.length > 0)
            .slice(0, 2)

        return points.map((point, index) => (
            <Text key={index} size="sm" c="#555555" fw={500} component='li' p={0} m={0} className='description'>
                {point}
            </Text>
        ))
    }

    const getExperience = () => {
        if (job.requirements) {
            const expMatch = job.requirements.match(/(\d+\-\d+\s*yr?\s*exp)/i) || 
                           job.requirements.match(/(\d+\+?\s*years?\s*experience)/i) ||
                           job.requirements.match(/(\d+\-\d+\s*years?)/i)
            
            if (expMatch) {
                return expMatch[1]
            }
        }
        return "1-3 yr Exp"
    }

    return (
        <Card 
            padding="md" 
            radius="md" 
            style={{ 
                background: '#FFFFFF',
                width: "316px",
                height: "360px",
                boxShadow: '0 0px 14px 0px #D3D3D31d'
            }}
        >
            <Stack gap="md" h="100%" justify="space-between">
                <Group >
                    <Group justify="space-between" align="flex-start" w="100%">
                        <div className='avatar'>
                            {job.imageUrl ? (
                                <Avatar
                                    size={66}
                                    radius="xl"
                                    src={job.imageUrl}
                                    style={{
                                        boxShadow: '0 0 10px 0px #9494941a'
                                    }}
                                />
                            ) : (
                                <Avatar
                                    size={66}
                                    radius="xl"
                                    style={{
                                        backgroundColor: '#333333',
                                        color: '#FFFFFF',
                                        fontWeight: 600,
                                        boxShadow: '0 0 10px 0px #9494941a'
                                    }}
                                >
                                    {getCompanyInitials(job.companyName)}
                                </Avatar>
                            )}
                        </div>
                        <div 
                        className='badge'
                        >
                            {getTimeAgo(job.createdAt)}
                        </div>
                    </Group>

                    <Text fw={700} size="lg" style={{ color: '#333333' }}>
                        {job.title}
                    </Text>
                    <Group gap={16} >
                        <Group gap={4}>
                            <UserPlus size={16} color="#5A5A5A" />
                            <Text fw={500} size="sm" c="#5A5A5A">{getExperience()}</Text>
                        </Group>
                        <Group gap={4}>
                            <Building2 size={16} color="#5A5A5A" />
                            <Text fw={500} size="sm" c="#5A5A5A">{job.location}</Text>
                        </Group>
                        <Group gap={4}>
                            <Layers size={16} color="#5A5A5A" />
                            <Text fw={500} size="sm" c="#5A5A5A">{formatSalary()}</Text>
                        </Group>
                    </Group>

                    <ul style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        margin: 0, 
                        paddingLeft: '14px', 
                        listStyleType: 'disc',
                        color: '#555555'
                    }}>
                        {formatDescription(job.description)}
                    </ul>
                </Group>
                <Button 
                    fullWidth 
                    h={46}
                    radius="md"
                    style={{
                        background: '#00AAFF',
                        border: '#00AAFF',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '16px',
                        boxShadow: '0 0 14px 0px #5D5D5D1a',
                        borderRadius: '10px'
                    }}
                >
                    Apply Now
                </Button>
            </Stack>
        </Card>
    )
}

export default JobCard