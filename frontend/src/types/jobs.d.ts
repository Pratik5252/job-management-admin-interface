type JobBody = {
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
type Job = {
    id: string
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
    createdAt: Date
    updatedAt: Date
}

type JobResponse<T> = {
    success: boolean
    message: string
    data: T
}
    
export { Job,JobBody, JobResponse }