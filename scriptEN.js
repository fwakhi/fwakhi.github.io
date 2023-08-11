
const resume = {
    firstName: 'Fátima',
    lastName: 'Lobo',
    jobTitle: 'Front End Developer',
    city: 'Madrid',
    country: 'Spain',
    phone: '+34 689410197',
    email: 'fatima.lobo.arroyo@gmail.com',
    education: [
      {
        school: 'IES La Arboleda',
        degree: 'Certificate of Higher Education in Web Application Development',
        graduationDate: '2021-2023'
      },
      {
        school: 'Kanda University of Foreign Studies (Chiba, Japan)',
        degree: 'Japanese Language and Culture Program',
        graduationDate: '2018'
      },
      {
        school: 'Universidad Autonoma de Madrid (UAM)',
        degree: "Bachelor's Degree in Asian and African Studies: Japanese itinerary",
        graduationDate: '2015-2020'
      }
    ],
    links: [
      {
        label: 'GitHub',
        link: 'https://github.com/fwakhi'
      },
      {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/f%C3%A1tima-lobo-arroyo-b51494233/'
      }
    ],
    skills: [
      'JavaScript',
      'React',
      'CSS',
      'HTML',
      'Bootstrap',
      'jQuery',
      'Node.JS',
      'Java',
      'PHP',
      'MySQL'
    ],
    languages: ['Spanish', 'English', 'Japanese', 'French'],
    professionalSummary: `I graduated in Japanese Studies at UAM because of my passion for languages, which gave me the opportunity to spend some time studying and living in Japan. After that, I decided to get into programming and pursue my career as a front-end developer.
    I combine my love for languages and programming with my love for design, photography, skating and everything related to audiovisuals.
        Despite my short professional experience in the sector, having studied abroad and having trained as a leisure instructor has helped me to learn how to work as a team. I have learned to work in a team, work under pressure and know how to adapt to any situation.`,
    employmentHistory: [
      {
        jobTitle: 'Web Developer',
        startDate: 'Mar 2023',
        endDate: 'Jun 2023',
        employer: 'Accenture',
        city: 'Madrid',
        achievements: [
          'Internship Contract',
          'Adobe Experience Manager & Java'
        ]
      },
      {
        jobTitle: 'Shop Assistant',
        startDate: 'Oct 2020',
        endDate: 'Oct 2021',
        employer: 'Unpacked Shop',
        city: 'Madrid',
        achievements: [
          'Bulk food shop and zero waste products',
          'Cash handling, online order management',
          'Customer advice, customer service and guidance',
          'Stock control and inventory replenishment'
        ]
      },
      {
        jobTitle: 'Shop Assistant',
        startDate: 'Sept 2019',
        endDate: ' Mar 2020',
        employer: 'Uniqlo',
        city: 'Madrid',
        achievements: [
          'Opening of the first Uniqlo shop in Madrid',
          'Cash handling',
          'Customer advice, customer service and guidance',
          'Stock control and inventory replenishment '
        ]
      }
    ],
    complementary: [
      {
        title: 'Leisure and free time monitor Course in Red Cross',
        date: '2015',
      },
      {
        title: 'First Aid Course in Red Cross',
        date: '2015',
      },
      {
        title: 'Volunteer - School support at Usera I Children Day Care Center (Red Cross)',
        date: '2016-2018',
      }
    ]
  }

  const formatResume = (r) => ({
    ...r,
    address: [
      r.city,
      r.country
    ].filter(Boolean).join(', ')
  })

  new Vue({
    el: "#app",
    data: formatResume(resume)
  });

  /**
   * Wait for animatable-component to be loaded (Only for VanillaJS)
   **/
  function animatableLoaded() {
    document.querySelector('body').classList.remove('d-none');
  }
  if (customElements) {
    customElements.whenDefined('animatable-component').then(animatableLoaded);
  } else animatableLoaded()