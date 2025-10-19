import { PrismaClient, JobType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Sample job data
  const jobs = [
    {
      title: 'Full Stack Developer',
      companyName: 'Amazon',
      imageUrl: 'https://img.logo.dev/amazon.com?token=pk_G2-h7oSJRUuwpC4X2xckrw&format=png&theme=light',
      location: 'Onsite',
      description: 'Develop end-to-end web applications using React and Node.js. Work with AWS cloud services and modern development practices. Collaborate with cross-functional teams to deliver high-quality software solutions.',
      requirements: '1-3 yr Exp, React, Node.js, AWS, TypeScript',
      responsibilities: 'Develop and maintain web applications, collaborate with cross-functional teams, write clean code',
      jobType: JobType.FULL_TIME,
      minimumSalary: 60000,
      maximumSalary: 90000,
      applicationDeadline: new Date('2025-12-31'),
    },
    {
      title: 'Node Js Developer',
      companyName: 'Tesla',
      imageUrl: 'https://img.logo.dev/tesla.com?token=pk_G2-h7oSJRUuwpC4X2xckrw&format=png&theme=light',
      location: 'Onsite',
      description: 'Develop robust backend services and APIs using Node.js technology. Work on Tesla\'s cutting-edge automotive software systems. Implement scalable microservices architecture for electric vehicles.',
      requirements: '1-3 yr Exp, Node.js, Express, MongoDB, TypeScript',
      responsibilities: 'Build backend services and APIs, optimize server performance',
      jobType: JobType.CONTRACT,
      minimumSalary: 70000,
      maximumSalary: 100000,
      applicationDeadline: new Date('2025-11-30'),
    },
    {
      title: 'UX/UI Designer',
      companyName: 'Swiggy',
      imageUrl: 'https://img.logo.dev/swiggy.org?token=pk_G2-h7oSJRUuwpC4X2xckrw&format=png&theme=light',
      location: 'Onsite',
      description: 'Design intuitive user experiences for Swiggy\'s food delivery platform. Create wireframes and prototypes using Figma and Adobe XD. Conduct user research and usability testing for mobile apps.',
      requirements: '1-3 yr Exp, Figma, Adobe XD, Prototyping, User Research',
      responsibilities: 'Design user interfaces, create wireframes and prototypes',
      jobType: JobType.PART_TIME,
      minimumSalary: 50000,
      maximumSalary: 80000,
      applicationDeadline: new Date('2025-12-15'),
    },
    {
      title: 'Full Stack Developer',
      companyName: 'Amazon',
      imageUrl: 'https://img.logo.dev/amazon.com?token=pk_G2-h7oSJRUuwpC4X2xckrw&format=png&theme=light',
      location: 'Onsite',
      description: 'Build scalable web applications using React and Node.js frameworks. Work with AWS cloud services and modern development practices. Collaborate with product managers and designers on feature development.',
      requirements: '1-3 yr Exp, React, Node.js, AWS, TypeScript',
      responsibilities: 'Develop full-stack applications, maintain cloud infrastructure',
      jobType: JobType.INTERNSHIP,
      minimumSalary: 25000,
      maximumSalary: 40000,
      applicationDeadline: new Date('2025-12-10'),
    },
    {
      title: 'Node Js Developer',
      companyName: 'Tesla',
      imageUrl: 'https://img.logo.dev/tesla.com?token=pk_G2-h7oSJRUuwpC4X2xckrw&format=png&theme=light',
      location: 'Onsite',
      description: 'Build high-performance backend systems for Tesla\'s electric vehicle ecosystem. Implement real-time data processing and analytics solutions. Develop comprehensive APIs for mobile and web applications.',
      requirements: '1-3 yr Exp, Node.js, Express, PostgreSQL, Redis',
      responsibilities: 'Develop scalable backend services, implement caching solutions',
      jobType: JobType.FULL_TIME,
      minimumSalary: 75000,
      maximumSalary: 105000,
      applicationDeadline: new Date('2025-12-20'),
    },
    {
      title: 'UX/UI Designer',
      companyName: 'Swiggy',
      imageUrl: 'https://img.logo.dev/swiggy.org?token=pk_G2-h7oSJRUuwpC4X2xckrw&format=png&theme=light',
      location: 'Onsite',
      description: 'Create engaging mobile and web interfaces for food ordering experience. Design user-centered solutions based on extensive customer feedback. Collaborate with product teams to enhance complete user journey.',
      requirements: '1-3 yr Exp, UI/UX Design, Figma, User Testing, Design Systems',
      responsibilities: 'Create engaging user experiences, conduct user research',
      jobType: JobType.CONTRACT,
      minimumSalary: 55000,
      maximumSalary: 85000,
      applicationDeadline: new Date('2025-11-25'),
    },
    {
      title: 'Full Stack Developer',
      companyName: 'Amazon',
      imageUrl: 'https://img.logo.dev/amazon.com?token=pk_G2-h7oSJRUuwpC4X2xckrw&format=png&theme=light',
      location: 'Onsite',
      description: 'Work on Amazon\'s seller platform and marketplace technologies. Build containerized applications using Docker and Kubernetes. Implement comprehensive CI/CD pipelines for automated deployments.',
      requirements: '1-3 yr Exp, JavaScript, Python, AWS, Docker',
      responsibilities: 'Build end-to-end solutions, deploy applications to cloud',
      jobType: JobType.PART_TIME,
      minimumSalary: 35000,
      maximumSalary: 55000,
      applicationDeadline: new Date('2025-12-05'),
    },
    {
      title: 'Node Js Developer',
      companyName: 'Tesla',
      imageUrl: 'https://img.logo.dev/tesla.com?token=pk_G2-h7oSJRUuwpC4X2xckrw&format=png&theme=light',
      location: 'Onsite',
      description: 'Develop microservices for Tesla\'s autonomous driving software systems. Implement GraphQL APIs for efficient and optimized data querying. Optimize system performance for real-time vehicle telemetry data.',
      requirements: '1-3 yr Exp, Node.js, GraphQL, Microservices, Docker',
      responsibilities: 'Develop microservices architecture, optimize API performance',
      jobType: JobType.INTERNSHIP,
      minimumSalary: 30000,
      maximumSalary: 45000,
      applicationDeadline: new Date('2025-12-08'),
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