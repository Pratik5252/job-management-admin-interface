import {Injectable } from '@nestjs/common';
import { Jobs, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JobService {
    constructor(private prisma: PrismaService){}

    async getJobs(): Promise<Jobs[]> {
        return await this.prisma.jobs.findMany();
    }

    async createJob(data: Prisma.JobsCreateInput): Promise<Jobs> {
        return await this.prisma.jobs.create({ data });
    }
}
