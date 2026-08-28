const title = 'ABB Autonomous Mobile Robots (AMRs) - Proax';
const description = 'ABB Flexley autonomous mobile robots (AMRs): Tug, Mover and Stack. Visual SLAM navigation for towing, transport and forklift tasks, delivered by Proax.';
const url = 'https://wpr5000-nextjs-psi.vercel.app/abb-robotics-mobile-robots';
const image = 'https://media-d.global.abb/is/image/abbc/AMR%20Portfolio%20header-1:16x9-L?wid=1200&hei=630&fit=crop';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Proax',
    images: [{ url: image, width: 1200, height: 630, alt: 'ABB Flexley autonomous mobile robot portfolio' }],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
  },
};

export default function Layout({ children }) {
  return children;
}
