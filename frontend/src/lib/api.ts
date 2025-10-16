import { Job, JobBody, JobResponse } from '@/types/jobs'
import api from './axios'

interface JobFilters {
    search?: string;
    location?: string;
    jobType?: string[];
    minSalary?: number;
    maxSalary?: number;
}

export const getJobs = async (filters?: JobFilters): Promise<JobResponse<Job[]>> => {
    const params = new URLSearchParams();
    
    if (filters?.search) params.append('search', filters.search);
    if (filters?.location) params.append('location', filters.location);
    if (filters?.jobType && filters.jobType.length > 0) {
        params.append('jobType', filters.jobType.join(','));
    }
    if (filters?.minSalary) params.append('minSalary', filters.minSalary.toString());
    if (filters?.maxSalary) params.append('maxSalary', filters.maxSalary.toString());
    
    const response = await api.get(`/jobs?${params.toString()}`);
    return response.data;
}

export const createJob = async (jobData: JobBody): Promise<JobResponse<Job>> => {
    const response = await api.post('/jobs', jobData)
    return response.data
}