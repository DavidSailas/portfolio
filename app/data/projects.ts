export interface Project {
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  imagePosition?: 'top' | 'center' | 'bottom';
  codeUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    index: '01',
    category: 'Featured',
    title: 'ITKonek V2',
    description: 'A personal iteration of the ITKonek mobile platform, featuring improved architecture and UI/UX.',
    tags: ['React Native', 'Expo', 'Supabase', 'Firebase'],
    image: '/projects/itkonek-v2.png',
    imagePosition: 'center',
    codeUrl: 'https://github.com/DavidSailas/ITKonek-v2.git',
  },
  {
    index: '02',
    category: 'Capstone',
    title: 'SGRMS',
    description: 'School Guidance Record Management System — a robust solution for automating student record tracking.',
    tags: ['PHP', 'Laravel', 'MySQL'],
    codeUrl: 'https://github.com/cjabendan/School-Guidance-Record-Management-System-SGRMS-.git',
  },
  {
    index: '03',
    category: 'Internship',
    title: 'LGSA',
    description: 'Customized educational management system built for Lamb of God Special Education Academy.',
    tags: ['React', 'JavaScript'],
    image: '/projects/lgsa.png',
    codeUrl: 'https://github.com/DavidSailas/LOGSEA.git',
    liveUrl: 'https://logsea.vercel.app',
  },
  {
    index: '04',
    category: 'Internship',
    title: 'ITKonek',
    description: 'Mobile platform for booking IT services developed during internship.',
    tags: ['Expo', 'Firebase'],
    image: '/projects/itkonek.png',
    codeUrl: 'https://github.com/DavidSailas/ITKonek.git',
  },
  {
    index: '05',
    category: 'Academic',
    title: 'BTT',
    description: 'Bank Transaction Tracker — a Java-based financial monitoring tool.',
    tags: ['Java', 'MySQL'],
    codeUrl: 'https://github.com/DavidSailas/Bank-Transaction-Tracker.git',
  },
  {
    index: '06',
    category: 'Academic',
    title: 'Thrifty',
    description: 'E-commerce interface for apparel retail.',
    tags: ['Java', 'MySQL'],
    codeUrl: 'https://github.com/bargamento142/Thrifty-Tshirt.git',
  },
  {
    index: '07',
    category: 'Academic',
    title: 'Retail-Store',
    description: 'Integrated sales and inventory management system.',
    tags: ['Java', 'MySQL'],
    codeUrl: 'https://github.com/DavidSailas/Retail-store.git',
  },
];
