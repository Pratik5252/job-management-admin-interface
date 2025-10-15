import { Job, JobBody, JobResponse } from '@/types/jobs'
import api from './axios'

export const getJobs = async (): Promise<JobResponse<Job[]>> => {
    const response = await api.get('/jobs')
    return response.data
}

export const createJob = async (jobData: JobBody): Promise<JobResponse<Job>> => {
    const response = await api.post('/jobs', jobData)
    return response.data
}