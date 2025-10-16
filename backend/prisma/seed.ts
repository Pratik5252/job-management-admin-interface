import { PrismaClient, JobType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Sample job data
  const jobs = [
    {
      title: 'Full Stack Developer',
      companyName: 'TechCorp Solutions',
      location: 'Bangalore',
      description: 'We are looking for a skilled Full Stack Developer to join our dynamic team. You will be responsible for developing and maintaining web applications using modern technologies.',
      jobType: JobType.FULL_TIME,
      minimumSalary: 60000,
      maximumSalary: 90000,
      applicationDeadline: new Date('2025-12-31'),
    },
    {
      title: 'Frontend Developer',
      companyName: 'InnovateTech',
      location: 'Mumbai',
      description: 'Join our frontend team to create amazing user experiences. Work with React, TypeScript, and modern CSS frameworks.',
      jobType: JobType.FULL_TIME,
      minimumSalary: 50000,
      maximumSalary: 75000,
      applicationDeadline: new Date('2025-11-30'),
    },
    {
      title: 'Backend Developer',
      companyName: 'DataFlow Systems',
      location: 'Hyderabad',
      description: 'Build robust backend systems using Node.js, Express, and databases. Experience with microservices architecture preferred.',
      jobType: JobType.FULL_TIME,
      minimumSalary: 55000,
      maximumSalary: 85000,
      applicationDeadline: new Date('2025-12-15'),
    },
    {
      title: 'React Developer',
      companyName: 'WebSolutions Pro',
      location: 'Pune',
      description: 'Develop responsive web applications using React.js. Work in an agile environment with cross-functional teams.',
      jobType: JobType.FULL_TIME,
      minimumSalary: 45000,
      maximumSalary: 70000,
      applicationDeadline: new Date('2025-11-25'),
    },
    {
      title: 'UI/UX Designer',
      companyName: 'DesignCraft Studio',
      location: 'Delhi',
      description: 'Create intuitive and visually appealing user interfaces. Collaborate with developers to implement design systems.',
      jobType: JobType.FULL_TIME,
      minimumSalary: 40000,
      maximumSalary: 65000,
      applicationDeadline: new Date('2025-12-10'),
    },
    {
      title: 'Node.js Developer',
      companyName: 'CloudTech Industries',
      location: 'Chennai',
      description: 'Build scalable server-side applications using Node.js. Experience with cloud platforms is a plus.',
      jobType: JobType.FULL_TIME,
      minimumSalary: 50000,
      maximumSalary: 80000,
      applicationDeadline: new Date('2025-12-05'),
    },
    {
      title: 'DevOps Engineer',
      companyName: 'Infrastructure Pro',
      location: 'Gurgaon',
      description: 'Manage CI/CD pipelines, containerization, and cloud infrastructure. Experience with AWS/Azure required.',
      jobType: JobType.FULL_TIME,
      minimumSalary: 70000,
      maximumSalary: 110000,
      applicationDeadline: new Date('2025-12-20'),
    },
    {
      title: 'Python Developer',
      companyName: 'AI Solutions Ltd',
      location: 'Bangalore',
      description: 'Develop AI/ML applications using Python. Work on data processing and machine learning pipelines.',
      jobType: JobType.FULL_TIME,
      minimumSalary: 60000,
      maximumSalary: 95000,
      applicationDeadline: new Date('2025-11-28'),
    },
    {
      title: 'Java Developer',
      companyName: 'Enterprise Systems',
      location: 'Noida',
      description: 'Build enterprise-grade applications using Java and Spring framework. Experience with microservices preferred.',
      jobType: JobType.FULL_TIME,
      minimumSalary: 55000,
      maximumSalary: 85000,
      applicationDeadline: new Date('2025-12-12'),
    },
    {
      title: 'Mobile App Developer',
      companyName: 'MobileTech Solutions',
      location: 'Kochi',
      description: 'Develop cross-platform mobile applications using React Native or Flutter. Experience with native development is a plus.',
      jobType: JobType.FULL_TIME,
      minimumSalary: 45000,
      maximumSalary: 75000,
      applicationDeadline: new Date('2025-12-08'),
    },
    {
      title: 'Data Analyst',
      companyName: 'Analytics Hub',
      location: 'Remote',
      description: 'Analyze complex datasets to derive business insights. Proficiency in SQL, Python, and data visualization tools required.',
      jobType: JobType.FULL_TIME,
      minimumSalary: 40000,
      maximumSalary: 65000,
      applicationDeadline: new Date('2025-12-18'),
    },
    {
      title: 'Software Engineer Intern',
      companyName: 'StartupTech',
      location: 'Bangalore',
      description: 'Join our team as an intern to gain hands-on experience in software development. Great learning opportunity.',
      jobType: JobType.INTERNSHIP,
      minimumSalary: 15000,
      maximumSalary: 25000,
      applicationDeadline: new Date('2025-11-15'),
    },
    {
      title: 'Freelance Web Developer',
      companyName: 'Digital Agency Pro',
      location: 'Remote',
      description: 'Work on exciting web development projects as a freelancer. Flexible hours and competitive rates.',
      jobType: JobType.CONTRACT,
      minimumSalary: 35000,
      maximumSalary: 60000,
      applicationDeadline: new Date('2025-12-01'),
    },
    {
      title: 'Part-time Frontend Developer',
      companyName: 'FlexWork Solutions',
      location: 'Mumbai',
      description: 'Work part-time on frontend development projects. Perfect for students or professionals seeking flexibility.',
      jobType: JobType.PART_TIME,
      minimumSalary: 20000,
      maximumSalary: 35000,
      applicationDeadline: new Date('2025-11-22'),
    },
    {
      title: 'Senior Software Architect',
      companyName: 'TechGiants Inc',
      location: 'Bangalore',
      description: 'Lead technical architecture decisions for large-scale applications. 8+ years of experience required.',
      jobType: JobType.FULL_TIME,
      minimumSalary: 120000,
      maximumSalary: 180000,
      applicationDeadline: new Date('2025-12-25'),
    }
  ];

  console.log('🗑️  Clearing existing jobs...');
  await prisma.jobs.deleteMany({});

  console.log('📝 Creating jobs...');
  for (const job of jobs) {
    await prisma.jobs.create({
      data: job,
    });
  }

  console.log(`✅ Seeded ${jobs.length} jobs successfully!`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });