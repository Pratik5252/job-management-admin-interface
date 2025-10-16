import {Injectable } from '@nestjs/common';
import { Jobs, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

interface JobFilters {
    search?: string;
    location?: string;
    jobType?: string[];
    minSalary?: number;
    maxSalary?: number;
}

@Injectable()
export class JobService {
    constructor(private prisma: PrismaService){}

    async getJobs(filters?: JobFilters): Promise<Jobs[]> {
        const where: Prisma.JobsWhereInput = {};
        if (filters?.search) {
            where.OR = [
                { title: { contains: filters.search, mode: 'insensitive' } },
                { companyName: { contains: filters.search, mode: 'insensitive' } }
            ];
        }

        if (filters?.location) {
            where.location = { contains: filters.location, mode: 'insensitive' };
        }

        if (filters?.jobType && filters.jobType.length > 0) {
            where.jobType = { in: filters.jobType as any };
        }

        if (filters?.minSalary || filters?.maxSalary) {
            where.AND = [];
            
            if (filters.minSalary) {
                where.AND.push({
                    OR: [
                        { minimumSalary: { gte: filters.minSalary } },
                        { maximumSalary: { gte: filters.minSalary } }
                    ]
                });
            }
            
            if (filters.maxSalary) {
                where.AND.push({
                    OR: [
                        { minimumSalary: { lte: filters.maxSalary } },
                        { maximumSalary: { lte: filters.maxSalary } }
                    ]
                });
            }
        }

        return await this.prisma.jobs.findMany({
            where,
            orderBy: { createdAt: 'desc' }
        });
    }

    async createJob(data: Prisma.JobsCreateInput): Promise<Jobs> {
        return await this.prisma.jobs.create({ data });
    }
}
