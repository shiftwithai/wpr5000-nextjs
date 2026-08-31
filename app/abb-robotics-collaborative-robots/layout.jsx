import { abbPageMetadata } from '../../lib/abb-metadata';

export const generateMetadata = abbPageMetadata({
  route: 'abb-robotics-collaborative-robots',
  image: 'https://media-d.global.abb/is/image/abbc/CRB%2015000%20-%20GoFa-1:16x9-L?wid=1200&hei=630&fit=crop',
});

export default function Layout({ children }) {
  return children;
}
