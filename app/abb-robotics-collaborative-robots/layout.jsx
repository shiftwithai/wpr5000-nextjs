const title = 'ABB Collaborative Robots (Cobots) | Proax';
const description = 'ABB GoFa collaborative robots. Safe human-robot collaboration without safety fencing for flexible automation.';
const url = 'https://wpr5000-nextjs-psi.vercel.app/abb-robotics-collaborative-robots';
const image = 'https://media-d.global.abb/is/image/abbc/CRB%2015000%20-%20GoFa-1:16x9-L?wid=1200&hei=630&fit=crop';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Proax',
    images: [{ url: image, width: 1200, height: 630, alt: 'ABB GoFa CRB 15000 collaborative robot' }],
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
