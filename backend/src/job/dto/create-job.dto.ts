import { JobType } from "@prisma/client"
import { IsString, IsEnum, IsOptional, IsNumber, IsDateString, IsNotEmpty } from 'class-validator'
import { Transform } from 'class-transformer'

export class JobDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    companyName: string

    @IsOptional()
    @IsString()
    imageUrl?: string | null

    @IsString()
    @IsNotEmpty()
    location: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsOptional()
    @IsString()
    requirements?: string | null

    @IsOptional()
    @IsString()
    responsibilities?: string | null

    @IsEnum(JobType)
    jobType: JobType

    @IsOptional()
    @IsNumber()
    minimumSalary?: number | null

    @IsOptional()
    @IsNumber()
    maximumSalary?: number | null

    @IsDateString()
    applicationDeadline: string
}

export class JobResponseEntity {
    id: string
    title: string
    companyName: string
    imageUrl?: string | null
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

export class JobResponseDto {
    success: boolean
    message: string
    data: JobResponseEntity | JobResponseEntity[]
}