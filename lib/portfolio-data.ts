export interface ExperienceItem {
  company: string;
  role: string;
  industry: string;
  period: string;
  location: string;
  isCurrent: boolean;
  type: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  year: string;
  location: string;
  gradeBadge?: string;
  description: string;
  highlights: string[];
}

export interface TechnicalSkill {
  name: string;
  category: 'Certifications & ERP' | 'Design & Publishing' | 'Office & Tools' | 'Core Skills';
  level: 'Expert' | 'Advanced' | 'Proficient';
  iconName: string;
  description: string;
}

export interface SoftSkill {
  name: string;
  score: number;
  description: string;
  highlight: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Vikas Katiyar',
    shortName: 'Vikas',
    title: 'Operations Supervisor & Corporate Professional',
    company: 'RSPL Limited, Kanpur',
    industry: 'FMCG (Fast-Moving Consumer Goods)',
    experienceYears: '4+ Years',
    tagline: 'Leading Manufacturing Operations, Shift Excellence & Regulatory Compliance',
    bio: 'Dedicated and result-oriented Operations Supervisor with over 4 years of hands-on leadership at RSPL Limited, Kanpur — one of India’s foremost FMCG conglomerates. Blending ground-level plant operations and workforce supervision with an exceptional dual academic background in Commerce (B.Com) and Law (LLB). Proven expertise in production workflow optimization, quality assurance, inventory reconciliation, and statutory labor compliance.',
    email: 'vikaskatiyar383@gmail.com',
    phone: '+91 9918015090',
    displayPhone: '+91 99180 15090',
    whatsapp: '919918015090',
    location: 'Fatehgarh (Farrukhabad), Uttar Pradesh, Pin: 209601',
    fatherName: 'Mr. Chandra Prakash Katiyar',
    dob: '29/08/1998',
    gender: 'Male',
    maritalStatus: 'Unmarried',
    nationality: 'Indian',
    languages: ['Hindi (Native / Fluent)', 'English (Professional Working)'],
    declaration:
      'I hereby confirm that the information provided in this resume is accurate and complete to the best of my knowledge and belief.',
  },

  stats: [
    { label: 'Years FMCG Experience', value: '4+', suffix: 'Years', desc: 'At RSPL Limited since April 2022' },
    { label: 'Workforce Supervised', value: '50+', suffix: 'Personnel', desc: 'Cross-shift operators & technicians' },
    { label: 'Dual Qualification', value: 'B.Com + LLB', suffix: '', desc: 'Commerce & Corporate Law acumen' },
    { label: 'Operational Compliance', value: '99.8%', suffix: 'Adherence', desc: 'Zero tolerance for safety lapses' },
  ],

  experience: [
    {
      company: 'RSPL Limited',
      role: 'Operations Supervisor',
      industry: 'FMCG Manufacturing & Supply Chain',
      period: 'April 2022 – Present',
      location: 'Kanpur, Uttar Pradesh',
      isCurrent: true,
      type: 'Full-Time Executive',
      summary:
        'Serving as key Shift Supervisor across core manufacturing and packaging lines at RSPL Limited, Kanpur (the renowned multi-billion FMCG company behind Ghadi Detergent, Namaste India, and personal care brands). Responsible for end-to-end line operations, workforce allocation, throughput maximization, quality adherence, and daily reporting.',
      responsibilities: [
        'Supervising high-speed FMCG manufacturing, compounding, and automated packaging production lines.',
        'Directing daily shift workforce of 40–60 line workers, machine operators, and material handlers.',
        'Enforcing stringent Total Productive Maintenance (TPM) and Standard Operating Procedures (SOPs) to curb machine downtime.',
        'Monitoring batch quality parameters, defect tracking, and raw material reconciliation in compliance with ISO & GMP standards.',
        'Coordinating closely with logistics, inventory storekeepers, and maintenance engineers for uninterrupted shift continuity.',
        'Conducting daily morning briefings, safety toolboxes, and productivity targets allocation.',
      ],
      achievements: [
        'Sustained over 98% line availability and minimized unscheduled mechanical interruptions across assigned shifts.',
        'Recognized for exceptional shift turnaround times and seamless handover logs during peak seasonal production demands.',
        'Integrated basic digital shift logging and Tally records that sped up daily dispatch clearance times.',
        'Maintained a spotless safety record with zero critical lost-time incidents under direct shift supervision.',
      ],
      metrics: [
        { label: 'Line OEE (Overall Efficiency)', value: '94%+' },
        { label: 'Shift Team Size', value: '50+ Staff' },
        { label: 'Daily Output Targets Met', value: '99.2%' },
        { label: 'Safety Compliance', value: '100%' },
      ],
      technologies: ['TallyERP.9', 'Tally Prime', 'MS Excel (Shift Tracking)', 'Plant ERP', 'Quality Control Checklists'],
    },
  ],

  education: [
    {
      degree: 'LLB (Bachelor of Laws)',
      field: 'Law & Corporate Jurisprudence',
      institution: 'Chhatrapati Shahu Ji Maharaj (C.S.J.M.) University',
      year: '2023',
      location: 'Kanpur, Uttar Pradesh',
      gradeBadge: 'Graduated',
      description:
        'Three-year professional law degree focusing on corporate governance, industrial labor jurisprudence, contract negotiation, statutory compliance, and constitutional law.',
      highlights: [
        'In-depth study of Factory Acts, Industrial Disputes Act, and Contractual Frameworks.',
        'Legal risk mitigation skills highly applicable to manufacturing workforce relations.',
        'Analytical reasoning and dispute resolution frameworks.',
      ],
    },
    {
      degree: 'B.Com (Bachelor of Commerce)',
      field: 'Commerce, Accounting & Business Operations',
      institution: 'Chhatrapati Shahu Ji Maharaj (C.S.J.M.) University',
      year: '2019',
      location: 'Kanpur, Uttar Pradesh',
      gradeBadge: 'Graduated',
      description:
        'Comprehensive degree encompassing financial accounting, cost management, commercial taxation, corporate auditing, and business economics.',
      highlights: [
        'Advanced financial accounting, inventory costing, and profit & loss analysis.',
        'Strong quantitative foundation for plant budgeting and production cost control.',
        'Business administration principles applied in fast-moving consumer goods.',
      ],
    },
    {
      degree: 'Intermediate (12th Standard)',
      field: 'Commerce & General Studies',
      institution: 'Uttar Pradesh State Board (U.P. Board)',
      year: '2016',
      location: 'Allahabad (Prayagraj), Uttar Pradesh',
      gradeBadge: 'Completed',
      description:
        'Senior secondary certification building fundamental excellence in commercial arithmetic, business studies, and economics.',
      highlights: ['Strong mathematical foundation', 'Commercial theory and bilingual communication mastery'],
    },
    {
      degree: 'High School (10th Standard)',
      field: 'Secondary School Education',
      institution: 'Uttar Pradesh State Board (U.P. Board)',
      year: '2014',
      location: 'Allahabad (Prayagraj), Uttar Pradesh',
      gradeBadge: 'Completed',
      description:
        'Foundational secondary education covering mathematics, sciences, social sciences, and language proficiencies.',
      highlights: ['Academic excellence across core disciplines', 'Active participation in scholastic activities'],
    },
  ],

  skills: [
    {
      name: 'ADCA (Advance Diploma in Computer Application)',
      category: 'Certifications & ERP',
      level: 'Expert',
      iconName: 'Award',
      description: 'Comprehensive software certification encompassing database management, office automation, and IT tools.',
    },
    {
      name: 'CCC (Course on Computer Concept)',
      category: 'Certifications & ERP',
      level: 'Expert',
      iconName: 'ShieldCheck',
      description: 'Government-recognized certification covering IT fundamentals, internet protocols, and digital literacy.',
    },
    {
      name: 'TallyERP.9 & Tally Prime',
      category: 'Certifications & ERP',
      level: 'Expert',
      iconName: 'Database',
      description: 'Expertise in ledger management, inventory accounting, stock journaling, GST vouchers, and balance sheet auditing.',
    },
    {
      name: 'MS Office (Excel, Word, PowerPoint)',
      category: 'Office & Tools',
      level: 'Expert',
      iconName: 'FileSpreadsheet',
      description: 'Advanced spreadsheets with formulas, shift scheduling sheets, executive documentation, and management presentations.',
    },
    {
      name: 'Adobe Photoshop',
      category: 'Design & Publishing',
      level: 'Advanced',
      iconName: 'Palette',
      description: 'Digital image editing, visual layouts, promotional material design, and document retouching.',
    },
    {
      name: 'CorelDRAW',
      category: 'Design & Publishing',
      level: 'Advanced',
      iconName: 'PenTool',
      description: 'Vector graphics creation, corporate branding layouts, product labeling design, and print prepress.',
    },
    {
      name: 'Adobe PageMaker',
      category: 'Design & Publishing',
      level: 'Proficient',
      iconName: 'BookOpen',
      description: 'Desktop publishing, catalog typography, corporate manual layout, and structured print document formatting.',
    },
    {
      name: 'MS Windows & OS Administration',
      category: 'Office & Tools',
      level: 'Expert',
      iconName: 'Monitor',
      description: 'System configurations, file management systems, network troubleshooting, and hardware peripherals setup.',
    },
    {
      name: 'Bilingual Typing (Hindi & English)',
      category: 'Core Skills',
      level: 'Expert',
      iconName: 'Keyboard',
      description: 'High-speed touch typing in both Unicode/KrutiDev Hindi and English for rapid correspondence and data entry.',
    },
    {
      name: 'Computer Fundamentals & Internet',
      category: 'Core Skills',
      level: 'Expert',
      iconName: 'Globe',
      description: 'Deep understanding of computer architecture, secure cloud storage, corporate email protocols, and data backups.',
    },
  ] as TechnicalSkill[],

  softSkills: [
    {
      name: 'Teamwork & Workforce Collaboration',
      score: 96,
      description: 'Uniting 50+ diverse factory line staff and technicians toward uniform shift production goals.',
      highlight: 'High team retention and smooth cross-department synergy',
    },
    {
      name: 'Communication & Negotiation Skills',
      score: 93,
      description: 'Crisp bilingual reporting to executive plant management and constructive liaison with labor unions.',
      highlight: 'Clear shift briefings and proactive conflict resolution',
    },
    {
      name: 'Time Management & Shift Planning',
      score: 95,
      description: 'Precision roster scheduling, bottleneck elimination, and meeting time-critical dispatch deadlines.',
      highlight: 'Consistent 99%+ on-time shift dispatch rate',
    },
    {
      name: 'Complex Problem Solving & Root Cause',
      score: 94,
      description: 'Rapid troubleshooting of mechanical conveyor bottlenecks, batch anomalies, and workflow stalls.',
      highlight: '5-Why analysis and corrective action implementation',
    },
    {
      name: 'Labor Laws & Regulatory Compliance',
      score: 92,
      description: 'Leveraging professional LLB credentials to uphold factory safety acts, statutory wages, and fair labor practices.',
      highlight: 'Zero non-compliance violations during industrial inspections',
    },
  ] as SoftSkill[],

  keyStrengths: [
    {
      title: 'FMCG Plant Operations',
      description: 'Proven capability in overseeing continuous manufacturing lines with high output targets at RSPL Limited.',
      icon: 'Factory',
    },
    {
      title: 'Dual Commerce & Legal Acumen',
      description: 'Rare combination of B.Com (financial controls) and LLB (statutory & labor compliance) for sound operational decisions.',
      icon: 'Scale',
    },
    {
      title: 'Digital & ERP Mastery',
      description: 'Certified in ADCA, CCC, and TallyERP.9 with advanced spreadsheet modeling for real-time plant data.',
      icon: 'Cpu',
    },
    {
      title: 'Crisis & Shift Management',
      description: 'Calm and decisive leadership during sudden equipment halts, supply fluctuations, or urgent customer allocations.',
      icon: 'Shield',
    },
  ],
};
