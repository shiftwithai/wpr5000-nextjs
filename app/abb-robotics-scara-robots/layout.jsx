const title = 'SCARA Robots - ABB Robotic Solutions | Proax';
const description = 'ABB SCARA robots for high-speed assembly, picking, and handling. Fast, accurate, and cost-effective automation for electronics and manufacturing.';
const url = 'https://wpr5000-nextjs-psi.vercel.app/abb-robotics-scara-robots';
const image = 'https://media-d.global.abb/is/image/abbc/IRB%20910INV-2:16x9-L?wid=1200&hei=630&fit=crop';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Proax',
    images: [{ url: image, width: 1200, height: 630, alt: 'ABB IRB 910INV SCARA robot' }],
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
