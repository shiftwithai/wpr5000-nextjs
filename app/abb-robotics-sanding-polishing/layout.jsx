import { abbPageMetadata } from '../../lib/abb-metadata';

export const generateMetadata = abbPageMetadata({
  route: 'abb-robotics-sanding-polishing',
  image: 'https://media-d.global.abb/is/image/abbc/IRB%202600ID-1:16x9-L?wid=1200&hei=630&fit=crop',
});

export default function Layout({ children }) {
  return children;
}
