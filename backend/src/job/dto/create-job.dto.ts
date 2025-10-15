import { JobType } from "@prisma/client"

export class JobDto {
    title: string
    companyName: string
    location: string
    description: string
    requirements?: string | null
    responsibilities?: string | null
    jobType: JobType
    minimumSalary?: number | null
    maximumSalary?: number | null
    applicationDeadline: Date
}

export class JobResponseDto {
    success: boolean
    message: string
    data: JobDto | JobDto[]
}