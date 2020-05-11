import scienceFiction from '../images/science-fiction.jpg';
import action from '../images/action.jpg';
import policier from '../images/policier.jpg';
import superHero from '../images/super-hero.jpg';
import guerre from '../images/guerre.jpg';
import comedy from '../images/comedy.jpg';
import animation from '../images/animation.jpg';
import romantic from '../images/romantic.jpg';
import drama from '../images/drama.jpg';
// import mystery from '../images/mystery.jpg';

const genres = [
  {
    source: action,
    altText: 'Action',
    caption: 'Action',
    link: '/matchroom/genre/28',
    id: 28
  },
  {
    source: scienceFiction,
    altText: 'Science-Fiction',
    caption: 'Science-Fiction',
    link: '/matchroom/genre/878',
    id: 878
  },
  {
    source: policier,
    altText: 'Thriller',
    caption: 'Thriller',
    link: '/matchroom/genre/53',
    id: 53
  },
  {
    source: superHero,
    altText: 'Super héro',
    caption: 'Super héro',
    link: '/matchroom/genre/14',
    id: 14
  },
  {
    source: guerre,
    altText: 'Guerre',
    caption: 'Guerre',
    link: '/matchroom/genre/10752',
    id: 10752
  },
  {
    source: comedy,
    altText: 'Comédie',
    caption: 'Comédie',
    link: '/matchroom/genre/35',
    id: 35
  },
  {
    source: animation,
    altText: 'Animation',
    caption: 'Animation',
    link: '/matchroom/genre/16',
    id: 16
  },
  {
    source: romantic,
    altText: 'Romance',
    caption: 'Romance',
    link: '/matchroom/genre/10749',
    id: 10749
  },
  {
    source: drama,
    altText: 'Drame',
    caption: 'Drame',
    link: '/matchroom/genre/18',
    id: 18
  }/* ,
  {
    source: mystere,
    altText: 'Mystère',
    caption: 'Mystère',
    link: '/matchroom/genre/9648',
    id: 9648
  } */
];

export default genres;
