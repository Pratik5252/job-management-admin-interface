import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobService } from './job.service';
import { JobDto,JobResponseDto } from './dto/create-job.dto';

@Controller('jobs')
export class JobController {
    constructor(private jobService: JobService){}

    @Get()
    async getJobs(): Promise<JobResponseDto>{
        const jobs = await this.jobService.getJobs();
        return {
            success: true,
            message: "Jobs fetched successfully",
            data: jobs
        }
    }

    @Post()
    async createJob(@Body() createJobData: JobDto): Promise<JobResponseDto>{
        const job = await this.jobService.createJob(createJobData);
        return {
            success: true,
            message: "Job created successfully",
            data: job
        }
    }
}
