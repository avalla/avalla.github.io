const resume = {
  profile: {
    name: 'Andrea Valla',
    givenName: 'Andrea',
    familyName: 'Valla',
    headline: 'Senior Full-Stack Software Engineer | TypeScript, React, PostgreSQL & AI Systems',
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
    'Andrea Valla is a senior full-stack software engineer with 20+ years of experience building and operating full-stack, data, ecommerce, and AI-enabled systems.',
  summary: [
    'Senior full-stack engineer with 20+ years of experience building and operating software systems. I work mainly with TypeScript, React, Node.js/Bun, PostgreSQL, and GraphQL.',
    'In recent years I have also been working extensively with LLMs, AI agents, and AI-assisted development.',
    'I usually work across the whole product lifecycle, from architecture and implementation to deployment and production operations.',
  ],
  experience: [
    {
      role: 'Solution Architect, Full-Stack Developer & System Administrator',
      company: 'BrandsDistribution.com',
      companyUrl: 'https://www.brandsdistribution.com',
      location: 'Turin, Italy',
      dates: 'Feb 2022 - Sep 2026',
      highlights: [
        'Worked across architecture, backend, frontend, integrations, data, and production operations.',
        'Built queue-backed BDroppy integrations with Shopify, Squarespace, Wix, and EKM supporting 50,000+ connected stores; shipped apps through the Shopify and Wix app marketplaces.',
        'Built Aidify, an AI-powered chatbot platform integrated with ecommerce channels.',
        'Built a BI platform using BigQuery, Airbyte, Cube.js, and Looker Studio.',
        'Designed and built AutoEpoque, a classic-car marketplace for classifieds and auctions, including the React/TypeScript product, PostgreSQL security model, background jobs, integrations, and database tests.',
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
        'Took a real-time manufacturing execution system for SMEs from product concept and technical strategy through architecture, implementation, customer deployment, and operations.',
        'Designed the integration architecture between industrial equipment, OPC UA/MQTT data flows, and customer ERP systems using ETL pipelines.',
        'Built the product as two React applications backed by Node.js services and GraphQL, with Redis, Docker, automated tests, and code-quality tooling supporting delivery.',
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
  ],
  selectedProjects: [
    {
      name: 'AI Office',
      url: 'https://github.com/avalla/ai-office',
      role: 'Creator',
      dates: '2026 - Present',
      highlights: [
        'Built an open-source platform for coordinating AI agents, tasks, pipelines, and runs.',
        'Implemented durable execution, task locking, model routing, audit events, permissions, and controlled actions.',
        'Integrated OpenAI, Codex, and Claude Code behind provider-neutral interfaces.',
        'Designed the system so persistence, LLM providers, agents, and domain-specific behavior can be replaced or extended independently.',
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
        'Built a React/TypeScript monorepo on Supabase/PostgreSQL with row-level security, BullMQ/Redis jobs, media workflows, internationalization, and pgTAP database and security tests.',
      ],
      technologies: ['TypeScript', 'React', 'PostgreSQL', 'Supabase', 'Redis', 'BullMQ', 'pgTAP'],
    },
  ],
  earlierExperience: [
    {
      role: 'Full-Stack Developer',
      company: 'Intesa Sanpaolo',
      location: 'Moncalieri, Italy',
      dates: 'Sep 2010 - Jun 2015',
      summary:
        'Built business applications, ETL/data workflows, and reporting systems in the Microsoft ecosystem, spanning SQL Server, SSIS/SSRS, .NET, and JavaScript.',
    },
    {
      role: 'Developer & System Administrator',
      company: 'Reply S.p.A.',
      location: 'Turin, Italy',
      dates: 'Sep 2003 - Sep 2010',
      summary:
        'Worked across software development and system administration in Linux, Unix, and Microsoft environments, including constrained enterprise infrastructure and production-risk containment.',
    },
    {
      role: 'Unix System Administrator',
      company: 'Global Value Services',
      location: 'Turin, Italy',
      dates: 'Jul 2002 - Jul 2003',
      summary: 'Managed systems and applications supporting FCA web properties in HP-UX environments.',
    },
  ],
  technologies: [
    {
      category: 'Languages & backend',
      items: ['TypeScript', 'JavaScript', 'Node.js', 'Bun', 'Deno', 'GraphQL', 'Express', 'C#/.NET', 'PHP'],
    },
    {
      category: 'Frontend',
      items: ['React', 'React Native', 'Apollo', 'URQL', 'Redux', 'Vite', 'Tailwind CSS'],
    },
    {
      category: 'Data & BI',
      items: ['PostgreSQL', 'Supabase', 'Redis', 'MongoDB', 'BigQuery', 'SQL Server', 'MySQL', 'Airbyte', 'Cube.js'],
    },
    {
      category: 'Architecture & infrastructure',
      items: [
        'Linux/Unix',
        'Docker',
        'GitHub Actions',
        'AWS',
        'GCP',
        'Azure',
        'Cloudflare',
        'queues/background jobs',
        'APIs & third-party integrations',
        'CI/CD',
      ],
    },
    {
      category: 'AI / LLM',
      items: [
        'agent systems',
        'OpenAI APIs',
        'LangChain',
        'LLM gateways',
        'usage/cost metering',
        'capability-controlled tools',
      ],
    },
  ],
  languages: [
    { name: 'Italian', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'German', level: 'Basic' },
  ],
};

module.exports = resume;
