"use client"
import { getJobs, createJob } from "@/lib/api"
import { Job, JobResponse } from "@/types/jobs"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

interface JobFilters {
    search?: string;
    location?: string;
    jobType?: string[];
    minSalary?: number;
    maxSalary?: number;
}

const useJobs = (filters?: JobFilters) => {
    return useQuery<JobResponse<Job[]>>({
        queryKey: ['jobs', filters],
        queryFn: () => getJobs(filters),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,
        refetchOnWindowFocus: true,
    })
}

const useCreateJob = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createJob,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['jobs']})
        }
    })
}

export { useJobs, useCreateJob }