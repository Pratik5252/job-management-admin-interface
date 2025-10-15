"use client"
import { createJob, getJobs } from "@/lib/api"
import { Job, JobResponse } from "@/types/jobs"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const useJobs = () => {
    return useQuery<JobResponse<Job[]>>({
        queryKey: ['jobs'],
        queryFn: getJobs,
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