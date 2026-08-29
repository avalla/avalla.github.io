const resume = {
  profile: {
    name: 'Andrea Valla',
    givenName: 'Andrea',
    familyName: 'Valla',
    headline: 'Software Architect & Product Engineer | Full-Stack, Data & AI Systems',
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
    'Andrea Valla is a software architect and product engineer with 20+ years of experience across full-stack product development, integrations, data platforms, production systems, and AI-enabled software.',
  summary: [
    'Product-focused software architect and full-stack engineer with 20+ years of experience designing, building, and operating software systems end to end. Strong background in TypeScript, React, Node.js, PostgreSQL, GraphQL, integrations, data platforms, infrastructure, and AI-enabled products.',
    'Former CTO and co-founder who turns ambiguous product and technical problems into simple architectures and production systems. Comfortable working across discovery, system design, implementation, deployment, operations, data, and customer-facing concerns, with a bias for explicit boundaries, reusable abstractions, and accountable decisions.',
  ],
  experience: [
    {
      role: 'Solution Architect, Full-Stack Developer & System Administrator',
      company: 'BrandsDistribution.com',
      companyUrl: 'https://www.brandsdistribution.com',
      location: 'Turin, Italy',
      dates: 'Feb 2022 - Present',
      highlights: [
        'Own architecture and delivery across ecommerce integrations, AI product work, analytics, and new product development, from discovery through deployment and production operations.',
        'Built queue-backed BDroppy integrations with Shopify, Squarespace, Wix, and EKM supporting 50,000+ external stores; shipped apps through the Shopify and Wix app marketplaces.',
        'Architected Aidify, an AI-powered chatbot platform integrated with ecommerce channels through staging and production.',
        'Delivered a BI platform using BigQuery, Airbyte, Cube.js, and Looker Studio to support cost and ROI analysis.',
        'Designed and built AutoEpoque, a classic-car marketplace for classifieds and auctions, across the React/TypeScript product, PostgreSQL security model, background jobs, integrations, and database tests.',
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
        'Created a local-first AI software office that coordinates agents, tasks, runs, and governance through a daemon-backed CLI, with SQLite as authoritative state.',
        'Separated domain, application, and infrastructure concerns so runtime, persistence, LLM providers, and connectors remain replaceable behind explicit ports.',
        'Designed deny-by-default capabilities and controlled actions with simulation, approval, fresh authorization, audit events, usage metering, cost accounting, and budgets.',
      ],
      technologies: ['TypeScript', 'Bun', 'SQLite', 'OpenAI', 'Codex', 'Claude Code'],
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
