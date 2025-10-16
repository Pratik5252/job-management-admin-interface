import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { JobService } from './job.service';
import { JobDto, JobResponseDto } from './dto/create-job.dto';

@Controller('jobs')
export class JobController {
    constructor(private jobService: JobService){}

    @Get()
    async getJobs(
        @Query('search') search?: string,
        @Query('location') location?: string,
        @Query('jobType') jobType?: string,
        @Query('minSalary') minSalary?: string,
        @Query('maxSalary') maxSalary?: string,
    ): Promise<JobResponseDto>{
        const filters = {
            search,
            location,
            jobType: jobType?.split(','), // Handle multiple job types
            minSalary: minSalary ? parseInt(minSalary) : undefined,
            maxSalary: maxSalary ? parseInt(maxSalary) : undefined,
        };
        
        const jobs = await this.jobService.getJobs(filters);
        return {
            success: true,
            message: "Jobs fetched successfully",
            data: jobs
        };
    }

    @Post()
    async createJob(@Body() createJobData: JobDto): Promise<JobResponseDto>{
        // Ensure applicationDeadline is a proper Date object
        const jobData = {
            ...createJobData,
            applicationDeadline: new Date(createJobData.applicationDeadline)
        };
        
        const job = await this.jobService.createJob(jobData);
        return {
            success: true,
            message: "Job created successfully",
            data: job
        }
    }
}
