import { abbPageMetadata } from '../../lib/abb-metadata';

export const generateMetadata = abbPageMetadata({
  route: 'abb-robotics',
  image: 'https://proax.ca/strapiv4/uploads/gemini_hero_ad9e7a0064.png',
  width: 2816,
  height: 1536,
});

export default function Layout({ children }) {
  return children;
}
