/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
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
      degree: 'Grado Superior de Desarrollo de Aplicaciones Web',
      graduationDate: '2021-2023'
    },
    {
      school: 'Kanda University of Foreign Studies (Chiba, Japan)',
      degree: 'Japanese Language and Culture Program',
      graduationDate: '2018'
    },
    {
      school: 'Universidad Autónoma de Madrid (UAM)',
      degree: 'Grado en Estudios de Asia y África: Japonés',
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
  languages: ['Español', 'Inglés', 'Japonés', 'Francés'],
  professionalSummary: `Me gradué en Estudios Japoneses por la UAM por mi pasión por los idiomas, lo que me dio la oportunidad de pasar una temporada estudiando y viviendo en Japón. Tras eso, decidí meterme en el mundo de la programación y seguir mi carrera como desarrolladora front-end.
  Mi gusto por los idiomas y la programación lo compagino con mi afición por el diseño, la fotografía, el patinaje y todo lo audiovisual.
  A pesar de mi breve experiencia profesional en el sector, haber estudiado en el extranjero y haberme formado como monitora me
  ha servido para aprender a trabajar en equipo, trabajar bajo presión y saber adaptarme a cualquier situación.`,
  employmentHistory: [
    {
      jobTitle: 'Desarrolladora Web',
      startDate: 'Mar 2023',
      endDate: 'Jun 2023',
      employer: 'Accenture',
      city: 'Madrid',
      achievements: [
        'Contrato de prácticas',
        'Adobe Experience Manager y Java'
      ]
    },
    {
      jobTitle: 'Dependienta',
      startDate: 'Oct 2020',
      endDate: 'Oct 2021',
      employer: 'Unpacked Shop',
      city: 'Madrid',
      achievements: [
        'Tienda de alimentación a granel y productos zero waste',
        'Manejo de caja, gestión de pedidos online',
        'Asesoramiento, atención y orientación de clientes',
        'Control de stock y reposición de mercancía'
      ]
    },
    {
      jobTitle: 'Dependienta',
      startDate: 'Sept 2019',
      endDate: ' Mar 2020',
      employer: 'Uniqlo',
      city: 'Madrid',
      achievements: [
        'Apertura de la primera tienda de Uniqlo en Madrid',
        'Manejo de caja',
        'Asesoramiento, atención y orientación de clientes',
        'Control de stock y reposición de mercancía'
      ]
    }
  ],
  complementary: [
    {
      title: 'Curso de Monitor de Ocio y Tiempo Libre en Cruz Roja',
      date: '2015',
    },
    {
      title: 'Curso de Primeros Auxilios en Cruz Roja',
      date: '2015',
    },
    {
      title: 'Voluntaria en el Centro de Día Infantil de Usera I (Cruz Roja)',
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