import landscapeBannerPic from '../images/andres-iga-90533-unsplash.jpg';
import busProfilePic from '../images/BoG.png';
import with1 from '../images/worksWith/Works With 1.jpg';
import with2 from '../images/worksWith/Works With 2.jpg';
import with3 from '../images/worksWith/Works With 3.jpg';
import with4 from '../images/worksWith/Works With 4.jpg';
import with5 from '../images/worksWith/Works With 5.jpg';
import insta1 from '../images/instagram/Blades of Glory - Instagram 1.jpg';
import insta2 from '../images/instagram/Blades of Glory - Instagram 2.jpg';
import insta3 from '../images/instagram/Blades of Glory - Instagram 3.jpg';
import insta4 from '../images/instagram/Blades of Glory - Instagram 4.jpg';
import insta5 from '../images/instagram/Blades of Glory - Instagram 5.jpg';
import insta6 from '../images/instagram/Blades of Glory - Instagram 6.jpg';
import insta7 from '../images/instagram/Blades of Glory - Instagram 7.jpg';
import insta8 from '../images/instagram/Blades of Glory - Instagram 8.jpg';
import insta9 from '../images/instagram/Blades of Glory - Instagram 9.jpg';
import cait from '../images/reviews/Cait Smith.jpg';
import kevin from '../images/reviews/Kevin Snyder.jpg';
import shirley from '../images/reviews/Shirley Washburn.jpg';
import tim from '../images/reviews/Tim Sanches.jpg';
import owner from '../images/owner/Business Owner - Alessandra.jpg';

export const business = {
  name: 'Blades of Glory Landscaping',
  description: 'Sustainable Landscaping',
  about: 'For the past two decades, Blades of Glory has provided both commercial and residential property owners in Los Angeles with the highest quality sustainable landscaping services. With extensive resources, our highly trained staff work passionately to provide professional outcomes with a personal touch.',
  tags: ['Palapas', 'Patio Accouterments', 'Style'],
  price: 3,
  rhizScore: 90,
  contact: {
    name: 'Alessandra McLane',
    title: 'Business Owner',
    pic: owner
  },
  address: '1351 3rd St., Santa Monica, 90291',
  reviewCount: 185,
  banner: landscapeBannerPic,
  profile: busProfilePic,
  mutualFriends: 7,
  totalFriends: 1856
};

export const reviews = [
  {
    name: 'Kevin Snyder',
    src: kevin,
    review:
      'Blades of Glory Landscaping is a step above the rest!',
    datePosted: '11 days ago'
  },
  {
    name: 'Cait Smith',
    src: cait,
    review:
      'LOVE LOVE LOVE!\n Great communication and workmanship',
    datePosted: "14 days ago"
  },
  {
    name: 'Tim Sanches',
    src: tim,
    review:
      "Great company to work with. Fred was attentive to my budget and design considerations. Found them on Rhiz and what a breeze the whole process was.",
    change: 5,
    datePosted: '2 weeks ago'
  },
  {
    name: 'Shirley Washburn',
    src: shirley,
    review: 
      'I liked them. Had a small project done, though it was not cheap! May recommend to a friend.',
    datePosted: '1 month ago'
  }
];

export const worksWith = [
  { pic: with1 },
  { pic: with2 },
  { pic: with3 },
  { pic: with4 },
  { pic: with5 }
];

export const instaPics = [
  { pic: insta1 },
  { pic: insta2 },
  { pic: insta3 },
  { pic: insta4 },
  { pic: insta5 },
  { pic: insta6 },
  { pic: insta7 },
  { pic: insta8 },
  { pic: insta9 },
];