import { Modal, Title, TextInput, Select, Textarea, Button, Group, Stack, NumberInput, Grid, Paper, Text } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useForm, Controller } from 'react-hook-form'
import { useCreateJob } from '@/hooks/useJobs'
import { JobBody, JobType } from '@/types/jobs'
import { notifications } from '@mantine/notifications'
import { Calendar, ChevronsRight, ChevronsDown, ChevronDown, ArrowUpDown } from 'lucide-react'
import React from 'react'

type ModalProps = {
    opened: boolean;
    close: () => void;
}

interface JobFormData {
    title: string;
    companyName: string;
    location: string;
    jobType: JobType;
    minimumSalary: number | null;
    maximumSalary: number | null;
    description: string;
    requirements?: string;
    responsibilities?: string;
    applicationDeadline: Date;
}

const CreateJobForm = ({opened, close}: ModalProps) => {
    const createJobMutation = useCreateJob();
    
    const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<JobFormData>({
        defaultValues: {
            title: '',
            companyName: '',
            location: '',
            jobType: 'FULL_TIME',
            minimumSalary: null,
            maximumSalary: null,
            description: '',
            requirements: '',
            responsibilities: '',
            applicationDeadline: new Date(),
        }
    });

    const onSubmit = async (data: JobFormData) => {

        const getImageUrl = () => {
            const imageUrl = `https://img.logo.dev/${data.companyName.toLowerCase()}.com?token=${process.env.NEXT_PUBLIC_TOKEN}&format=png&theme=light`
            console.log(imageUrl);
            
            return imageUrl;
        }
        try {
            const jobData: JobBody = {
                title: data.title,
                companyName: data.companyName,
                imageUrl: getImageUrl(),
                location: data.location,
                jobType: data.jobType,
                minimumSalary: data.minimumSalary,
                maximumSalary: data.maximumSalary,
                description: data.description,
                requirements: data.requirements || null,
                responsibilities: data.responsibilities || null,
                applicationDeadline: data.applicationDeadline,
            };

            await createJobMutation.mutateAsync(jobData);
            
            notifications.show({
                title: 'Success!',
                message: 'Job posting created successfully',
                color: 'green',
            });
            
            reset();
            close();
        } catch (error) {
            notifications.show({
                title: 'Error',
                message: 'Failed to create job posting',
                color: 'red',
            });
        }
    };

    return (
        <Modal 
            opened={opened} 
            onClose={close} 
            centered 
            size="xl" 
            withCloseButton={false}
            padding="md"
            radius="lg"
        >
            <Paper p="md">
                <Title fw={700} size={24} ta="center" mb="xl">Create Job Opening</Title>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack gap="md">
                        <Grid>
                            <Grid.Col span={6}>
                                <Controller
                                    name="title"
                                    control={control}
                                    rules={{ required: 'Job title is required' }}
                                    render={({ field }) => (
                                        <TextInput
                                            {...field}
                                            label="Job Title"
                                            placeholder="e.g. Full Stack Developer"
                                            error={errors.title?.message}
                                            radius="md"
                                            size='md'
                                            
                                        />
                                    )}
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Controller
                                    name="companyName"
                                    control={control}
                                    rules={{ required: 'Company name is required' }}
                                    render={({ field }) => (
                                        <TextInput
                                            {...field}
                                            label="Company Name"
                                            placeholder="e.g. Amazon, Microsoft, Swiggy"
                                            error={errors.companyName?.message}
        
                                            radius="md"
                                            size="md"
                                        />
                                    )}
                                />
                            </Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={6}>
                                <Controller
                                    name="location"
                                    control={control}
                                    rules={{ required: 'Location is required' }}
                                    render={({ field }) => (
                                        <TextInput
                                            {...field}
                                            label="Location"
                                            placeholder="e.g. Remote, New York, Bangalore"
                                            error={errors.location?.message}
                                            radius="md"
                                            size="md"
                                        />
                                    )}
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Controller
                                    name="jobType"
                                    control={control}
                                    rules={{ required: 'Job type is required' }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            label="Job Type"
                                            placeholder="Select job type"
                                            rightSection={<ChevronDown size={16} />}
                                            data={[
                                                { value: 'FULL_TIME', label: 'Full-time' },
                                                { value: 'PART_TIME', label: 'Part-time' },
                                                { value: 'CONTRACT', label: 'Contract' },
                                                { value: 'INTERNSHIP', label: 'Internship' }
                                            ]}
                                            error={errors.jobType?.message}
                                            radius="md"
                                            size="md"
                                        />
                                    )}
                                />
                            </Grid.Col>
                        </Grid>

                        <Grid>
                            <Grid.Col span={3}>
                                <Text size="md" fw={500}>Salary Range</Text>
                                <Controller
                                    name="minimumSalary"
                                    control={control}
                                    render={({ field: { onChange, value, ...field } }) => (
                                        <NumberInput
                                            {...field}
                                            value={value || undefined}
                                            onChange={(val) => onChange(val || null)}
                                            placeholder="₹50,000"
                                            hideControls 
                                            leftSection={<ArrowUpDown size={16} />}
                                            thousandSeparator=","
                                            error={errors.minimumSalary?.message}
                                            radius="md"
                                            size="md"
                                        />
                                    )}
                                />
                            </Grid.Col>
                            <Grid.Col span={3}>
                                <Text size="md" fw={500} style={{ opacity: 0 }}>.</Text>
                                <Controller
                                    name="maximumSalary"
                                    control={control}
                                    render={({ field: { onChange, value, ...field } }) => (
                                        <NumberInput
                                            {...field}
                                            value={value || undefined}
                                            onChange={(val) => onChange(val || null)}
                                            placeholder="₹1,20,000"
                                            hideControls 
                                            leftSection={<ArrowUpDown size={16} />}
                                            thousandSeparator=","
                                            error={errors.maximumSalary?.message}
                                            radius="md"
                                            size="md"
                                        />
                                    )}
                                />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Controller
                                    name="applicationDeadline"
                                    control={control}
                                    rules={{ required: 'Application deadline is required' }}
                                    render={({ field }) => (
                                        <DateInput
                                            {...field}
                                            label="Application Deadline"
                                            placeholder="Select date"
                                            rightSection={<Calendar size={16} />}
                                            clearable
                                            error={errors.applicationDeadline?.message}
                                            minDate={new Date()}
                                            radius="md"
                                            size="md"
                                        />
                                    )}
                                />
                            </Grid.Col>
                        </Grid>

                        <Controller
                            name="description"
                            control={control}
                            rules={{ required: 'Job description is required' }}
                            render={({ field }) => (
                                <Textarea
                                    {...field}
                                    label="Job Description"
                                    placeholder="Please share a description to let the candidate know more about the job role"
                                    resize="vertical"
                                    minRows={10}
                                    error={errors.description?.message}
                                    radius="md"
                                    size="md"
                                    styles={{
                                        input: {
                                            minHeight: '100px',
                                            maxHeight: '180px',
                                            height: '144px'
                                        }
                                    }}
                                />
                            )}
                        />

                        <Controller
                            name="requirements"
                            control={control}
                            render={({ field }) => (
                                <Textarea
                                    {...field}
                                    label="Requirements"
                                    placeholder="List the required skills, experience, and qualifications"
                                    minRows={3}
                                    error={errors.requirements?.message}
                                    radius="md"
                                    size="md"
                                    styles={{
                                        input: {
                                            minHeight: '100px',
                                            maxHeight: '180px',
                                            height: '144px'
                                        }
                                    }}
                                />
                            )}
                        />

                        <Controller
                            name="responsibilities"
                            control={control}
                            render={({ field }) => (
                                <Textarea
                                    {...field}
                                    label="Responsibilities"
                                    placeholder="Describe the key responsibilities and duties"
                                    minRows={3}
                                    error={errors.responsibilities?.message}
                                    radius="md"
                                    size="md"
                                    styles={{
                                        input: {
                                            minHeight: '100px',
                                            maxHeight: '180px',
                                            height: '144px'
                                        }
                                    }}
                                />
                            )}
                        />

                        <Group justify="space-between" mt="lg">
                                <Button
                                    variant="default"
                                    onClick={() => reset()}
                                    disabled={isSubmitting}
                                    rightSection={<ChevronsDown size={16} />}
                                    radius="md"
                                    size='md'
                                >
                                    Save Draft
                                </Button>
                                <Button
                                    type="submit"
                                    loading={isSubmitting}
                                    className="primary-btn"
                                    rightSection={<ChevronsRight size={16} />}
                                    radius="md"
                                    size='md'
                                >
                                    Publish Job
                                </Button>
                        </Group>
                    </Stack>
                </form>
            </Paper>
        </Modal>
    )
}

export default CreateJobForm