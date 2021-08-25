import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import instagram from '../images/icon-instagram.svg';
import youtube from '../images/icon-youtube.svg';

const data = [ 
  {
    social: {
      logo: facebook,
      id: 'Facebook',
    },
    username: '@nathanf',
    stats: {
      followers: 1987,
      followersToday: -12,
      likes: {
        number: 52,
        porcentage: -2,
      },
      pagesview: {
        number: 87,
        porcentage: 3,
      }
    },
  },
  {
    social: {
      logo: twitter,
      id: 'Twitter',
    },
    username: '@nathanf',
    stats: {
      followers: 1044,
      followersToday: 99,
      likes: {
        number: 507,
        porcentage: 553,
      },
      retweets: {
        number: 117,
        porcentage: 303,
      }
    }, 
  },
  {
    social: {
      logo: instagram,
      id: 'Instagram',
    },
    username: '@realnathanf',
    stats: {
      followers: 1143500,
      followersToday: 1099,
      likes: {
        number: 5462,
        porcentage: 2257,
      },
      profileviews: {
        number: 52000,
        porcentage: 1375,
      }
    }, 
  },
  {
    social: {
      logo: youtube,
      id: 'Youtube',
    },
    username: 'Nathan F.',
    stats: {
      subscribers: 10039,
      subscribersToday: -144,
      likes: {
        number: 107,
        porcentage: -19,
      },
      pagesview: {
        number: 1407,
        porcentage: -12,
      }
    }, 
  } 
]

export default data;