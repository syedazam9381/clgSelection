import { College } from '../types/college';

export const collegeData: College[] = [
  {
    id: '1',
    name: 'Indian Institute of Technology Delhi',
    image: 'https://home.iitd.ac.in/images/for-faculty/camp8.jpg',
    city: 'Delhi',
    state: 'Delhi',
    address: 'Hauz Khas, New Delhi, Delhi 110016',
    type: 'Central',
    nurfRank: 1,
    rating: 4.8,
    courses: ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering', 'Chemical Engineering', 'Civil Engineering'],
    fees: {
      annual: 200000,
      total: 800000,
      additional: 50000
    },
    admission: {
      entrance: 'JEE Advanced',
      eligibility: 'JEE Main qualified with top 2.5 lakh rank',
      process: 'Online application through JoSAA counselling',
      documents: ['Class X Certificate', 'Class XII Certificate', 'JEE Main Scorecard', 'JEE Advanced Scorecard', 'Category Certificate (if applicable)']
    },
    contact: {
      phone: '+91-11-26591785',
      email: 'webmaster@admin.iitd.ac.in',
      website: 'https://home.iitd.ac.in'
    }
  },
  {
    id: '2',
    name: 'Indian Institute of Technology Bombay',
    image: 'https://www.iitb.ac.in/sites/www.iitb.ac.in/files/styles/slider_image/public/slider-images/main-building-2.jpg',
    city: 'Mumbai',
    state: 'Maharashtra',
    address: 'Powai, Mumbai, Maharashtra 400076',
    type: 'Central',
    nurfRank: 2,
    rating: 4.7,
    courses: ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering', 'Aerospace Engineering', 'Metallurgical Engineering'],
    fees: {
      annual: 210000,
      total: 840000,
      additional: 55000
    },
    admission: {
      entrance: 'JEE Advanced',
      eligibility: 'JEE Main qualified with top 2.5 lakh rank',
      process: 'Online application through JoSAA counselling',
      documents: ['Class X Certificate', 'Class XII Certificate', 'JEE Main Scorecard', 'JEE Advanced Scorecard', 'Category Certificate (if applicable)']
    },
    contact: {
      phone: '+91-22-25722545',
      email: 'webmaster@iitb.ac.in',
      website: 'https://www.iitb.ac.in'
    }
  },
  {
    id: '3',
    name: 'All India Institute of Medical Sciences Delhi',
    image: 'https://www.aiims.edu/images/pdf/aiims-campus.jpg',
    city: 'Delhi',
    state: 'Delhi',
    address: 'Ansari Nagar, New Delhi, Delhi 110029',
    type: 'Central',
    nurfRank: 1,
    rating: 4.9,
    courses: ['MBBS', 'MD', 'MS', 'DM', 'MCh', 'BSc Nursing'],
    fees: {
      annual: 5000,
      total: 25000,
      additional: 10000
    },
    admission: {
      entrance: 'NEET UG/PG',
      eligibility: 'Class XII with Physics, Chemistry, Biology and English',
      process: 'Online counselling through MCC',
      documents: ['Class X Certificate', 'Class XII Certificate', 'NEET Scorecard', 'Category Certificate (if applicable)', 'Domicile Certificate']
    },
    contact: {
      phone: '+91-11-26588500',
      email: 'webmaster@aiims.ac.in',
      website: 'https://www.aiims.edu'
    }
  },
  {
    id: '4',
    name: 'National Institute of Technology Trichy',
    image: 'https://www.nitt.edu/home/academics/departments/arch/facilities/studio/DSC_0047.JPG',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    address: 'Tiruchirappalli, Tamil Nadu 620015',
    type: 'Central',
    nurfRank: 8,
    rating: 4.5,
    courses: ['Computer Science', 'Electronics and Communication', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering'],
    fees: {
      annual: 180000,
      total: 720000,
      additional: 40000
    },
    admission: {
      entrance: 'JEE Main',
      eligibility: 'Class XII with Physics, Chemistry, Mathematics',
      process: 'Online counselling through JoSAA',
      documents: ['Class X Certificate', 'Class XII Certificate', 'JEE Main Scorecard', 'Category Certificate (if applicable)', 'Domicile Certificate']
    },
    contact: {
      phone: '+91-431-2503000',
      email: 'webmaster@nitt.edu',
      website: 'https://www.nitt.edu'
    }
  },
  {
    id: '5',
    name: 'BITS Pilani',
    image: 'https://www.bits-pilani.ac.in/uploads/Pilani_Campus_Main_Building.jpg',
    city: 'Pilani',
    state: 'Rajasthan',
    address: 'Pilani, Rajasthan 333031',
    type: 'Deemed',
    nurfRank: 25,
    rating: 4.6,
    courses: ['Computer Science', 'Electronics and Instrumentation', 'Mechanical Engineering', 'Chemical Engineering', 'Biotechnology'],
    fees: {
      annual: 450000,
      total: 1800000,
      additional: 75000
    },
    admission: {
      entrance: 'BITSAT',
      eligibility: 'Class XII with 75% aggregate in PCM',
      process: 'Online application and BITSAT examination',
      documents: ['Class X Certificate', 'Class XII Certificate', 'BITSAT Scorecard', 'Transfer Certificate', 'Character Certificate']
    },
    contact: {
      phone: '+91-1596-515-121',
      email: 'admissions@pilani.bits-pilani.ac.in',
      website: 'https://www.bits-pilani.ac.in'
    }
  },
  {
    id: '6',
    name: 'Jawaharlal Nehru University',
    image: 'https://www.jnu.ac.in/sites/default/files/JNU-Campus-1.jpg',
    city: 'Delhi',
    state: 'Delhi',
    address: 'New Mehrauli Road, New Delhi, Delhi 110067',
    type: 'Central',
    nurfRank: 3,
    rating: 4.4,
    courses: ['Arts', 'Science', 'Social Sciences', 'International Studies', 'Language Studies'],
    fees: {
      annual: 15000,
      total: 60000,
      additional: 20000
    },
    admission: {
      entrance: 'JNUEE',
      eligibility: 'Bachelor\'s degree with 50% marks',
      process: 'Online application and entrance examination',
      documents: ['Graduation Certificate', 'Mark Sheets', 'Category Certificate (if applicable)', 'Migration Certificate', 'Character Certificate']
    },
    contact: {
      phone: '+91-11-26704077',
      email: 'info@jnu.ac.in',
      website: 'https://www.jnu.ac.in'
    }
  },
  {
    id: '7',
    name: 'University of Delhi',
    image: 'https://www.du.ac.in/uploads/news/1569831396.jpg',
    city: 'Delhi',
    state: 'Delhi',
    address: 'Delhi University, Delhi 110007',
    type: 'Central',
    nurfRank: 12,
    rating: 4.3,
    courses: ['Arts', 'Science', 'Commerce', 'Applied Sciences', 'Engineering'],
    fees: {
      annual: 25000,
      total: 75000,
      additional: 15000
    },
    admission: {
      entrance: 'CUET',
      eligibility: 'Class XII from recognized board',
      process: 'Online application through CUET',
      documents: ['Class X Certificate', 'Class XII Certificate', 'CUET Scorecard', 'Category Certificate (if applicable)', 'Character Certificate']
    },
    contact: {
      phone: '+91-11-27667725',
      email: 'info@du.ac.in',
      website: 'https://www.du.ac.in'
    }
  },
  {
    id: '8',
    name: 'Manipal Institute of Technology',
    image: 'https://manipal.edu/content/dam/manipal/mu/mit/images/campus-life/MIT-Campus-1.jpg',
    city: 'Manipal',
    state: 'Karnataka',
    address: 'Manipal, Karnataka 576104',
    type: 'Deemed',
    nurfRank: 45,
    rating: 4.2,
    courses: ['Computer Science', 'Information Technology', 'Electronics and Communication', 'Mechanical Engineering', 'Biotechnology'],
    fees: {
      annual: 350000,
      total: 1400000,
      additional: 60000
    },
    admission: {
      entrance: 'MET',
      eligibility: 'Class XII with Physics, Chemistry, Mathematics',
      process: 'Online application and MET examination',
      documents: ['Class X Certificate', 'Class XII Certificate', 'MET Scorecard', 'Transfer Certificate', 'Medical Certificate']
    },
    contact: {
      phone: '+91-820-2925100',
      email: 'admissions@manipal.edu',
      website: 'https://manipal.edu'
    }
  },
  {
    id: '9',
    name: 'Indian Institute of Management Ahmedabad',
    image: 'https://www.iima.ac.in/sites/default/files/styles/slider_image/public/slider-images/campus-aerial-view.jpg',
    city: 'Ahmedabad',
    state: 'Gujarat',
    address: 'Vastrapur, Ahmedabad, Gujarat 380015',
    type: 'Autonomous',
    nurfRank: 1,
    rating: 4.8,
    courses: ['MBA', 'PGPX', 'Fellow Programme', 'Executive Education'],
    fees: {
      annual: 2500000,
      total: 5000000,
      additional: 100000
    },
    admission: {
      entrance: 'CAT',
      eligibility: 'Bachelor\'s degree with 50% marks',
      process: 'CAT followed by Written Ability Test and Personal Interview',
      documents: ['Graduation Certificate', 'Mark Sheets', 'CAT Scorecard', 'Work Experience Certificates', 'Category Certificate (if applicable)']
    },
    contact: {
      phone: '+91-79-66324658',
      email: 'pgpoffice@iima.ac.in',
      website: 'https://www.iima.ac.in'
    }
  },
  {
    id: '10',
    name: 'Vellore Institute of Technology',
    image: 'https://vit.ac.in/sites/default/files/campus-images/vit-campus-main-building.jpg',
    city: 'Vellore',
    state: 'Tamil Nadu',
    address: 'Vellore, Tamil Nadu 632014',
    type: 'Deemed',
    nurfRank: 35,
    rating: 4.1,
    courses: ['Computer Science', 'Electronics and Communication', 'Mechanical Engineering', 'Biotechnology', 'Chemical Engineering'],
    fees: {
      annual: 195000,
      total: 780000,
      additional: 45000
    },
    admission: {
      entrance: 'VITEEE',
      eligibility: 'Class XII with Physics, Chemistry, Mathematics',
      process: 'Online application and VITEEE examination',
      documents: ['Class X Certificate', 'Class XII Certificate', 'VITEEE Scorecard', 'Transfer Certificate', 'Community Certificate (if applicable)']
    },
    contact: {
      phone: '+91-416-2202020',
      email: 'admissions@vit.ac.in',
      website: 'https://vit.ac.in'
    }
  }
];