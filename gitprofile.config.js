// gitprofile.config.js

const config = {
  github: {
    username: 'omarsherif74', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['BeforeIDieAchievements','devportfolio','omarsherif74'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'omar-sherif-swe',
    // website: 'https://arifszn.com',
    phone: '+20 120 5407797',
    email: 'omarsherifswe@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1hL61hpLUJvjuLJdG4mewlJW5Jj_Kn9dF/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Problem Solving',
    'REST API',
    'Object Oriented Programming',
    'Selenium',
    'BeautifulSoup',
    'JavaScript',
    'React.js',
    'Node.js',
    'Ruby',
    'Ruby on Rails',
    'React Native',
    'Flutter',
    'PHP',
    'Laravel',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'C',
    'C#',
    'Unity',
    'HTML',
    'CSS',
    'Git'
  ],
  experiences: [
    {
      company: 'RMZTech',
      position: 'Web developer intern',
      from: 'August 2022',
      to: 'September 2022',
      companyLink: 'https://example.com',
    }
  ],
  education: [
    {
      institution: 'Alexandria University',
      degree: 'Bachelor of Science in Computer and Communications Engineering',
      from: '2018',
      to: '2023',
    }
  ],
  certifications: [
    {
      name: 'Create with Code by Unity',
      body: 'Learned how to create games using Unity and C# and how to use Unity\'s UI system to create in-game UIs.',
      year: 'August 2023',
      link: 'https://learn.unity.com/course/create-with-code'
    },
    {
      name: 'Introduction to Data Engineering by IBM',
      body: 'Learned about the data engineering ecosystem and how to use Apache Spark to analyze data.',
      year: 'August 2023',
      link: 'https://coursera.org/verify/KMSK959HFQLP'
    },
    {
      name: 'The Complete 2022 Flutter and Dart Development by Udacity',
      body: 'Learned how to create cross-platform mobile apps using Flutter and Dart.',
      year: 'September 2022',
      link: 'https://www.udemy.com/course/complete-flutter-arabic/'
    },
  ],
  

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'PriceSmart Graduation Project',
      description:
        'Collaborated with a team of five to implement a mobile application that scrapes products from several local websites (Amazon, Jumia, Noon) then compares between them based on criteria (e.g. price, rating). Developed Selenium web scraping scripts using Python. Worked on parsing HTML using BeautifulSoup4 to extract product attributes and reduced the scraping time by around 83% from 3 minutes to less than 30 seconds using bs4 parsing and efiicient code optimizations. Created Rails API, designed database and developed controller methods to handle client requests. Tools used: Rails, React native, Python, Selenium, BeautifulSoup4, Postgres, Redis',
      imageUrl: 'grad_app_logo.jpg',
      link: 'https://github.com/omarsherif74/Best-deals-backend',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️ by <a 
      class="text-primary" href="https://github.com/omarsherif74"
      target="_blank"
      rel="noreferrer"
    >Omar Sherif</a>`,
};

export default config;
