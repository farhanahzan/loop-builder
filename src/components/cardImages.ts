import image1 from '../assets/images/mobile/image-deep-earth.jpg';
import image2 from '../assets/images/mobile/image-night-arcade.jpg';
import image3 from '../assets/images/mobile/image-soccer-team.jpg';
import image4 from '../assets/images/mobile/image-grid.jpg';
import image5 from '../assets/images/mobile/image-from-above.jpg';
import image6 from '../assets/images/mobile/image-pocket-borealis.jpg';
import image7 from '../assets/images/mobile/image-curiosity.jpg';
import image8 from '../assets/images/mobile/image-fisheye.jpg';

import facebook from '../assets/images/icon-facebook.svg'
import instragram from '../assets/images/icon-instagram.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import twitter from '../assets/images/icon-twitter.svg'

type ImagesProps={
  image:string
  label:string
}
type socialMediaIconsProps = {
  image: string;
  link: string;
};
type MenuProps={
  label:string
  link:string
}



export const images: ImagesProps[] = [
  {
    image: image1,
    label: `Deep Earth`,
  },
  {
    image: image2,
    label: 'Night Arcade',
  },
  {
    image: image3,
    label: 'Soccer Team Vr',
  },
  {
    image: image4,
    label: 'The Grid',
  },
  {
    image: image5,
    label: 'Fromup aboveVR',
  },
  {
    image: image6,
    label: 'Pocket Borealis',
  },
  {
    image: image7,
    label: 'The Curiosity',
  },
  {
    image: image8,
    label: 'Make it fisheye',
  },
];

export const menu:MenuProps[] = [
  {
    label: 'About',
    link: '#',
  },
  {
    label: 'Careers',
    link: '#',
  },
  {
    label: 'Events',
    link: '#',
  },
  {
    label: 'Products',
    link: '#',
  },

  {
    label: 'Support',
    link: '#',
  },
  
];

export const socialMediaIcons: socialMediaIconsProps[] = [
  {
    image: facebook,
    link: '#',
  },
  {
    image: twitter,
    link: '#',
  },
  {
    image: pinterest,
    link: '#',
  },
  {
    image: instragram,
    link: '#',
  },
];