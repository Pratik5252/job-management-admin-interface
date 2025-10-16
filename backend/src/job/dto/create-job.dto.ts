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

export class JobResponseDto {
    success: boolean
    message: string
    data: JobDto | JobDto[]
}