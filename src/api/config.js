import creed from '../assets/posters/creed.jpeg';
import goneGirl from '../assets/posters/gone_girl.jpeg';
import inception from '../assets/posters/inception.jpeg';
import indestructibles from '../assets/posters/indestructibles.jpeg';
import midnightSun from '../assets/posters/midnight_sun.jpeg';
import oceans8 from '../assets/posters/oceans_8.jpeg';
import prettyWoman from '../assets/posters/pretty_woman.jpeg';
import pulpFiction from '../assets/posters/pulp_fiction.jpeg';
import quietPlace from '../assets/posters/quiet_place.jpeg';
import seven from '../assets/posters/seven.jpeg';

const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    poster: oceans8,
    setLike: false,
    setDislike: false,
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    poster: midnightSun,
    setLike: false,
    setDislike: true,
    likes: 2,
    dislikes: 1
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    poster: indestructibles,
    setLike: false,
    setDislike: false,
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    poster: quietPlace,
    setLike: false,
    setDislike: false,
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    poster: creed,
    setLike: false,
    setDislike: false,
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    title: 'Pretty woman',
    category: 'Comedy',
    poster: prettyWoman,
    setLike: false,
    setDislike: false,
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    poster: pulpFiction,
    setLike: true,
    setDislike: false,
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    poster: seven,
    setLike: true,
    setDislike: false,
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    poster: inception,
    setLike: true,
    setDislike: false,
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    poster: goneGirl,
    setLike: true,
    setDislike: false,
    likes: 22,
    dislikes: 12
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
