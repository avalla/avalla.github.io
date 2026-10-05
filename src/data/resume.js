const resume = {
  profile: {
    name: 'Andrea Valla',
    givenName: 'Andrea',
    familyName: 'Valla',
    headline:
      'Senior Full-Stack Software Engineer / Software Architect | TypeScript, React, Node.js, PostgreSQL & AI Systems',
    location: 'Turin, Italy',
    phone: '+39 335 82 30 421',
    email: 'valla.andrea@gmail.com',
    website: 'https://avalla.github.io',
    social: {
      github: 'https://github.com/avalla',
      linkedin: 'https://linkedin.com/in/avalla',
      stackoverflow: 'https://stackoverflow.com/users/876314',
    },
  },
  seoDescription:
    'Andrea Valla is a senior full-stack software engineer and software architect with 20+ years of experience in production software, ecommerce, industrial systems, and AI agent orchestration.',
  summary: [
    'Senior Full-Stack Software Engineer and Software Architect with 20+ years of experience designing, building, and operating production software. Hands-on work across TypeScript, React, Node.js/Bun, PostgreSQL, GraphQL, distributed systems, API integrations, CI/CD, and cloud infrastructure. Recent projects include AI/LLM systems, agent orchestration, ecommerce platforms, data pipelines, and Manufacturing Execution Systems (MES).',
  ],
  experience: [
    {
      role: 'Solution Architect, Full-Stack Developer & System Administrator',
      company: 'BrandsDistribution.com',
      companyUrl: 'https://www.brandsdistribution.com',
      location: 'Turin, Italy',
      dates: 'Feb 2022 - Sep 2026',
      highlights: [
        'Built queue-backed BDroppy integrations with Shopify, Squarespace, Wix, and EKM supporting 50,000+ connected stores; shipped apps through the Shopify and Wix app marketplaces.',
        'Designed and built AutoEpoque, a classic-car marketplace for classifieds and auctions using React, TypeScript, Supabase/PostgreSQL, Row-Level Security (RLS), BullMQ/Redis background jobs, and pgTAP database tests.',
        'Architected and built Aidify, an AI-powered chatbot platform integrated with ecommerce channels.',
        'Built a BI and analytics platform using BigQuery, Airbyte, Cube.js, and Looker Studio to support cost and ROI analysis.',
        'Owned software architecture, backend, frontend, integrations, data, and production operations across multiple products.',
      ],
      technologies: ['TypeScript', 'React', 'Node.js', 'Bun', 'PostgreSQL', 'Supabase', 'Redis', 'BigQuery', 'GraphQL'],
    },
    {
      role: 'CTO & Co-founder',
      company: 'Agile Factory',
      companyUrl: 'https://www.agilefactory.it',
      location: 'Turin, Italy',
      dates: 'Mar 2018 - Jan 2022',
      highlights: [
        'Co-founded and led engineering of a real-time Manufacturing Execution System (MES) for SMEs, from product strategy and software architecture through implementation, customer deployment, and production operations.',
        'Designed Industrial Internet of Things (IIoT) and ERP integration architecture using OPC UA, MQTT, and ETL pipelines to connect industrial equipment with customer business systems.',
        'Built two React applications and Node.js/GraphQL services using Redis, Docker, automated testing, and code-quality tooling.',
      ],
      technologies: ['Node.js', 'React', 'GraphQL', 'Redis', 'Docker', 'OPC UA', 'MQTT'],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Industrial Cloud',
      companyUrl: 'https://www.industrial-cloud.com',
      descriptor: 'Politecnico di Torino spin-off',
      location: 'Turin, Italy',
      dates: 'Jun 2015 - Mar 2018',
      highlights: [
        'Delivered manufacturing web applications from analysis and product requirements through implementation, customer deployment, and ongoing updates.',
      ],
      technologies: ['Node.js', 'React', 'Elasticsearch', 'MySQL', 'PHP'],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Intesa Sanpaolo',
      location: 'Moncalieri, Italy',
      dates: 'Sep 2010 - Jun 2015',
      highlights: [
        'Built business applications, ETL/data workflows, and reporting systems using SQL Server, SSIS/SSRS, .NET, and JavaScript.',
      ],
    },
    {
      role: 'Developer & System Administrator',
      company: 'Reply S.p.A.',
      location: 'Turin, Italy',
      dates: 'Sep 2003 - Sep 2010',
      highlights: [
        'Developed software and administered Linux, Unix, and Microsoft systems, including constrained enterprise infrastructure and production-risk containment.',
      ],
    },
    {
      role: 'Unix System Administrator',
      company: 'Global Value Services',
      location: 'Turin, Italy',
      dates: 'Jul 2002 - Jul 2003',
      highlights: ['Managed systems and applications supporting FCA web properties in HP-UX environments.'],
    },
  ],
  selectedProjects: [
    {
      name: 'AI Office',
      url: 'https://github.com/avalla/ai-office',
      role: 'Creator',
      dates: '2026 - Present',
      highlights: [
        'Built an open-source multi-agent orchestration platform for AI agents, workflows, tasks, pipelines, and durable executions.',
        'Implemented concurrency control, task locking, LLM/model routing, audit logs, tool permissions, and governance.',
        'Integrated OpenAI, Codex, and Claude Code behind provider-neutral interfaces.',
        'Designed pluggable persistence and knowledge layers using PostgreSQL, SQLite, and SurrealDB, with extensible agents and domain behavior.',
      ],
      technologies: ['TypeScript', 'Bun', 'PostgreSQL', 'SQLite', 'SurrealDB', 'OpenAI', 'Codex', 'Claude Code'],
    },
    {
      name: 'AutoEpoque',
      url: 'https://autoepoque.com',
      role: 'Product architecture & engineering at BrandsDistribution',
      dates: '2025 - Present',
      highlights: [
        'Own end-to-end architecture and implementation for a classic-car marketplace supporting classifieds and auctions.',
        'Built a React/TypeScript monorepo on Supabase/PostgreSQL with Row-Level Security (RLS), BullMQ/Redis jobs, media workflows, internationalization, and pgTAP database and security tests.',
      ],
      technologies: ['TypeScript', 'React', 'PostgreSQL', 'Supabase', 'Redis', 'BullMQ', 'pgTAP'],
    },
  ],
  technologies: [
    {
      category: 'Programming Languages',
      items: ['TypeScript', 'JavaScript', 'C#', 'PHP', 'SQL'],
    },
    {
      category: 'Frontend',
      items: ['React', 'React Native', 'Apollo', 'URQL', 'Redux', 'Vite', 'Tailwind CSS'],
    },
    {
      category: 'Backend & APIs',
      items: ['Node.js', 'Bun', 'Deno', 'Express', '.NET', 'GraphQL', 'REST APIs'],
    },
    {
      category: 'Databases & Data',
      items: ['PostgreSQL', 'Supabase', 'Redis', 'MongoDB', 'SQL Server', 'MySQL', 'BigQuery', 'Airbyte', 'Cube.js'],
    },
    {
      category: 'Architecture',
      items: [
        'Software Architecture',
        'System Design',
        'Distributed Systems',
        'API Integration',
        'Third-Party Integrations',
        'Background Jobs',
        'Event-Driven Systems',
      ],
    },
    {
      category: 'DevOps & Cloud',
      items: ['Linux/Unix', 'Docker', 'GitHub Actions', 'AWS', 'GCP', 'Azure', 'Cloudflare', 'CI/CD'],
    },
    {
      category: 'Testing',
      items: ['Automated Testing', 'Vitest', 'pgTAP', 'Database & RLS Testing'],
    },
    {
      category: 'AI / LLM',
      items: [
        'LLMs',
        'AI Agents',
        'Agent Orchestration',
        'OpenAI API',
        'LangChain',
        'Model Routing',
        'LLM Gateways',
        'Usage/Cost Metering',
        'Tool Permissions',
      ],
    },
    {
      category: 'Industrial',
      items: ['Manufacturing Execution Systems (MES)', 'IIoT', 'OPC UA', 'MQTT', 'ERP Integration', 'ETL'],
    },
  ],
  languages: [
    { name: 'Italian', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'German', level: 'Basic' },
  ],
};

module.exports = resume;
