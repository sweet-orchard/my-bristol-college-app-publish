import { IconName } from "../components/icons/Icons";
import { T } from "../theme/tokens";


export const COURSES = [
  {
    id: 1,
    name: 'Digital Media Arts',
    desc: 'Design, photography and digital storytelling',
    progress: 72,
    att: 88,
    punc: 90,
    grad: `linear-gradient(138deg,#88c8ee 0%,#b8a4f0 100%)`,
    units: [
      {
        name: 'Graphic Design',
        color: T.cyan,
        att: 88,
        punc: 92,
        assignments: ['Logo Project', 'Brand Guidelines'],
        teacher: 'Ms. Johnson',
      },
      {
        name: 'Photography',
        color: T.mint,
        att: 95,
        punc: 89,
        assignments: ['Portrait Series', 'Landscape Study'],
        teacher: 'Mr. Okafor',
      },
      {
        name: 'Video Production',
        color: T.purple,
        att: 81,
        punc: 85,
        assignments: ['Short Film', 'Interview Edit'],
        teacher: 'Ms. Patel',
      },
    ],
  },
  {
    id: 2,
    name: 'Web Development',
    desc: 'HTML, CSS, JavaScript and modern frameworks',
    progress: 58,
    att: 83,
    punc: 87,
    grad: `linear-gradient(138deg,#7fefd0 0%,#50c8f0 100%)`,
    units: [
      {
        name: 'HTML & CSS',
        color: '#c8b800',
        att: 90,
        punc: 94,
        assignments: ['Portfolio Site', 'Responsive Layout'],
        teacher: 'Mr. Davies',
      },
      {
        name: 'JavaScript',
        color: T.peach,
        att: 76,
        punc: 80,
        assignments: ['DOM Project', 'API Fetch App'],
        teacher: 'Ms. Chen',
      },
    ],
  },
  {
    id: 3,
    name: 'Business Studies',
    desc: 'Marketing, finance and entrepreneurship',
    progress: 45,
    att: 67,
    punc: 71,
    grad: `linear-gradient(138deg,#f9c8df 0%,#e8b4f8 100%)`,
    units: [
      {
        name: 'Marketing',
        color: T.pink,
        att: 70,
        punc: 75,
        assignments: ['Campaign Plan', 'Market Research'],
        teacher: 'Mr. Brown',
      },
      {
        name: 'Finance',
        color: '#90c830',
        att: 65,
        punc: 68,
        assignments: ['Budget Report', 'Investment Analysis'],
        teacher: 'Ms. Williams',
      },
    ],
  },
];

export const NEWS = [
  {
    title: 'Open Day Success!',
    icon: 'award' as IconName,
    color: T.blue,
    desc: 'Over 2,000 visitors attended our spring open day.',
  },
  {
    title: 'New Sustainability Initiative',
    icon: 'zap' as IconName,
    color: T.mint,
    desc: 'Bristol College goes green — solar panels campus-wide.',
  },
  {
    title: 'Student Art Exhibition',
    icon: 'star' as IconName,
    color: T.lav,
    desc: 'Digital Media Arts students showcase at Arnolfini Gallery.',
  },
];

export const ARTICLES: Record<
  string,
  { icon: IconName; cat: string; color: string; isNew: boolean; body: string }
> = {
  'How to Print': {
    icon: 'print',
    cat: 'Campus Life',
    color: T.blue,
    isNew: true,
    body: '**Printing at City of Bristol College**\n\nAll students have access to college printers across campus. Follow these steps:\n\n1. Log into any college computer with your student credentials.\n2. Open your document and press Ctrl+P (Windows) or Cmd+P (Mac).\n3. Select the nearest printer from the dropdown list.\n4. Choose black & white or colour, then click Print.\n5. Walk to the printer and tap your student ID card to release the job.\n\n**Printer Locations**\n- Library (all floors)\n- CGS 105 Computer Lab\n- Brunel Building Ground Floor\n- Creative Arts Block B\n\n**Costs**\n- A4 B&W: 3p per page\n- A4 Colour: 10p per page\n- A3: 12p per page\n\nYour balance is shown on any college computer. Top up online or at the library desk.',
  },
  'Emergency Info': {
    icon: 'warn',
    cat: 'Safety',
    color: T.peach,
    isNew: false,
    body: '**Emergency Procedures**\n\n**Fire Alarm**\nEvacuate immediately via the nearest fire exit. Do not use lifts. Assemble at your designated point and wait for the all-clear from staff.\n\n**First Aid**\nFirst aiders are available across campus. In a medical emergency, call 999 and inform reception on ext. 2000.\n\n**Mental Health Crisis**\nContact the Student Support team on ext. 3100 or visit Room CGS 108. Samaritans: 116 123 (free, 24/7).\n\n**Lockdown Procedure**\nStay in your current room, lock/barricade the door if safe, silence your phone, and wait for official communication.\n\n**Key Numbers**\n- Reception: 0117 312 5000\n- Security: ext. 2999\n- Student Support: ext. 3100',
  },
  'Top-Up Print Credit': {
    icon: 'card',
    cat: 'Campus Life',
    color: T.mint,
    isNew: true,
    body: "**How to Top Up Your Print Balance**\n\n**Online (Recommended)**\n1. Visit intranet.cityofbristol.ac.uk\n2. Log in with your student credentials\n3. Go to Student Services > Print Balance\n4. Select an amount (minimum £1) and pay by card\n5. Credit appears within 5 minutes\n\n**At the Library**\nVisit the library help desk on the ground floor. Staff can top up with cash or card immediately.\n\n**Self-Service Kiosk**\nLocated in CGS reception lobby. Card payments only. Available 7am–9pm Mon–Fri.\n\n**Current Balance**\nYour balance is shown when you log into any college computer. You'll get a warning email when it drops below 50p.",
  },
  'Study Skills Guide': {
    icon: 'book',
    cat: 'Learning',
    color: T.purple,
    isNew: false,
    body: '**Study Skills for Success**\n\n**Active Recall**\nInstead of re-reading notes, test yourself. Use flashcards, past papers, or explain topics out loud to boost long-term memory.\n\n**Spaced Repetition**\nReview material at increasing intervals: study today, review tomorrow, then in a week, then a month.\n\n**Pomodoro Technique**\nWork for 25 minutes, take a 5-minute break, repeat. After 4 sessions, take a 20-minute break.\n\n**Cornell Note-Taking**\nDivide your page: main notes right, key questions left, summary at bottom. Review the left column to test yourself.\n\n**Digital Tools**\nUse Anki for flashcards, Notion or OneNote for organisation, Forest app to stay focused.',
  },
  'Tutorial Staff Info': {
    icon: 'users',
    cat: 'Support',
    color: T.lav,
    isNew: false,
    body: '**Your Tutorial Team**\n\nYour personal tutor is your first point of contact for academic and personal support.\n\n**What your tutor can help with:**\n- Academic progress and target grades\n- Attendance and punctuality concerns\n- University or apprenticeship applications (UCAS)\n- Welfare and personal issues\n- Signposting to specialist support\n\n**How to contact your tutor:**\nMessage via Moodle, email at firstname.lastname@cityofbristol.ac.uk, or book a one-to-one via the Student Hub.\n\n**Student Support Services**\n- Learning Support: Room CGS 107\n- Mental Health Advisor: Room CGS 108\n- Careers Advisor: Room CGS 110\n- Financial Advice: Room B204',
  },
  'How to Learn Better': {
    icon: 'brain',
    cat: 'Learning',
    color: T.cyan,
    isNew: true,
    body: "**Science-Backed Learning Strategies**\n\n**Interleaving**\nMix up subjects or topics during study sessions rather than blocking one subject. It feels harder but significantly improves retention.\n\n**Elaborative Interrogation**\nAsk yourself 'why?' and 'how?' about everything you learn. Builds deeper understanding and connections.\n\n**Dual Coding**\nCombine verbal information with visuals — draw diagrams, mind maps or timelines alongside written notes.\n\n**Sleep and Memory**\nSleep consolidates memory. Reviewing material just before sleep and getting 7–9 hours dramatically improves recall.\n\n**Exercise**\nEven 20 minutes of moderate exercise before studying improves focus, creativity, and memory formation.",
  },
  'Navigating Campus': {
    icon: 'pin',
    cat: 'Campus Life',
    color: T.lemon,
    isNew: false,
    body: '**Getting Around City of Bristol College**\n\n**Main Campuses**\n- College Green Centre (CGS): Main campus, city centre. Admin, student services, most classrooms.\n- Brunel Building: STEM and engineering, 5-minute walk from CGS.\n- Creative Arts Block: Photography, media, and performing arts studios.\n- Ashley Down Campus: Sports science and health programmes.\n\n**Accessibility**\nAll buildings have step-free access. Lifts in CGS and Brunel. For accessibility needs, contact Inclusion on ext. 3200.\n\n**Travel**\n- Cycle storage at all campuses\n- Bus stop: College Green (routes 1, 2, 8, 9)\n- Train: Bristol Temple Meads (15-min walk from CGS)',
  },
  'Mental Health Support': {
    icon: 'heart',
    cat: 'Wellbeing',
    color: T.peach,
    isNew: false,
    body: '**Mental Health and Wellbeing Support**\n\nYour wellbeing matters. City of Bristol College offers free, confidential support.\n\n**On-Campus Support**\n- Mental Health Advisor: Drop-in Tue/Thu, Room CGS 108, or book via Student Services.\n- Student Counsellor: Weekly sessions available. Referral via personal tutor.\n- Peer Mentors: Trained student mentors in the Student Hub.\n\n**24/7 Resources**\n- Samaritans: 116 123 (free, any time)\n- Crisis text line: Text SHOUT to 85258\n- Student Minds: studentminds.org.uk\n\n**Self-Help**\nThe college subscribes to Headspace — free for all students. Download the app and activate with your college email.',
  },
};

export const ARTICLE_LIST = Object.entries(ARTICLES).map(([title, data]) => ({
  title,
  ...data,
}));

export type Tool = {
  name: string;
  logo?: string;
  icon?: IconName;
  tag: string;
  desc: string;
  longDesc?: string;
  url: string;
  benefits?: string[];
  features?: string[];
};


export const TOOLS: Tool[] = [
  {
    name: 'Office 365',
    logo: '/logos/office 365 logo.jpeg',
    tag: 'Microsoft',
    desc: 'Word, OneNote, Powerpoint, Excel and 1TB OneDrive storage.',
    longDesc:
      'A suite of collaborative IT services to help you enhance your learning experience.',
    url: 'https://www.office.com',
    benefits: [
      'Create and edit Word, OneNote, Powerpoint and Excel from a browser',
      '1TB of cloud storage through OneDrive',
      'Install Office on 5 PCs/Macs, tablets, and phones',
      'Always have the latest versions of your familiar Office apps',
    ],
  },
  {
    name: 'MS Teams',
    logo: '/logos/teams logo.png',
    tag: 'Microsoft',
    desc: 'Chat with classmates and tutors, join meetings and submit work.',
    longDesc:
      'Use Microsoft Teams to chat to classmates and lecturers or receive and send in assignments.',
    url: 'https://teams.microsoft.com',
  },
  {
    name: 'Moodle',
    logo: '/logos/moodle logo.jpeg',
    tag: 'Learning',
    desc: 'Access your course materials, ebooks and online activities.',
    longDesc:
      'Moodle is our Virtual Learning Environment where you can access course materials and activities. You’ll also find a wide range of ebooks, articles and other electronic resources.',
    url: 'https://moodle.cityofbristol.ac.uk',
  },
  {
    name: 'ProPortal',
    logo: '/logos/proprtal logo.png',
    tag: 'Portal',
    desc: 'Check your ILP data, unit progress and assessment grades.',
    longDesc:
      'View your ILP data, unit and assessment grades online. You will need your college user ID and password to log in.',
    url: 'https://proportal.cityofbristol.ac.uk',
  },
  {
    name: 'F: Drive',
    logo: '/logos/microsoft drive logo.jpeg',
    tag: 'Storage',
    desc: 'Access your college "My Documents" storage from anywhere.',
    longDesc: 'Access your "My Documents" (F: drive) from home.',
    url: 'https://mydocuments.cityofbristol.ac.uk',
  },
  {
    name: 'Student Hub',
    logo: '/logos/student hub logo.png',
    tag: 'College',
    desc: 'Everything you need to know about college life and community.',
    longDesc:
      'The CoBC Student Hub is your one-stop shop for everything you need to know about City of Bristol College life and the inclusive community that surrounds us.',
    url: 'https://studenthub.cityofbristol.ac.uk',
  },
  {
    name: 'Grammarly',
    logo: '/logos/grammarly logo.png',
    tag: 'Writing',
    desc: 'AI writing assistant to improve your grammar and clarity.',
    url: 'https://www.grammarly.com',
  },
  {
    name: 'Canva',
    logo: '/logos/canva logo.png',
    tag: 'Design',
    desc: 'Create professional presentations, posters and social graphics.',
    url: 'https://www.canva.com',
  },
];

export const CAT_C: Record<string, string> = {
  'Campus Life': T.blue,
  Safety: T.peach,
  Learning: T.purple,
  Support: T.lav,
  Wellbeing: T.peach,
};
export const TAG_C: Record<string, string> = {
  Writing: T.cyan,
  Microsoft: '#0078d4',
  Storage: T.mint,
  College: T.lav,
  Research: '#c8b800',
  Design: T.peach,
  Comms: T.lilac,
  Learning: T.purple,
  Portal: T.blue,
  App: T.mint,
};