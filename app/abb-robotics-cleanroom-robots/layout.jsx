import { abbPageMetadata } from '../../lib/abb-metadata';

export const generateMetadata = abbPageMetadata({
  route: 'abb-robotics-cleanroom-robots',
  image: 'https://media-d.global.abb/is/image/abbc/IRB%20930-2:16x9-L?wid=1200&hei=630&fit=crop',
});

export default function Layout({ children }) {
  return children;
}
