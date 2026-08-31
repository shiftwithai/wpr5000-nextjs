const title = 'Sanding & Polishing Robots - ABB Robotic Solutions | Proax';
const description = 'ABB robotic automation solutions for sanding and polishing applications. Consistent surface finishing, deburring, and quality control for manufacturing.';
const url = 'https://wpr5000-nextjs-psi.vercel.app/abb-robotics-sanding-polishing';
const image = 'https://media-d.global.abb/is/image/abbc/IRB%202600ID-1:16x9-L?wid=1200&hei=630&fit=crop';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Proax',
    images: [{ url: image, width: 1200, height: 630, alt: 'ABB IRB 2600ID robot for surface finishing' }],
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
