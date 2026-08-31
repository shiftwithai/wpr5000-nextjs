const title = 'Cleanroom Robots - ISO 14644-1 Certified ABB Robots | Proax';
const description = 'ABB cleanroom robots certified to ISO 14644-1 for life sciences, pharmaceutical, semiconductor and electronics manufacturing. From Proax Canada.';
const url = 'https://wpr5000-nextjs-psi.vercel.app/abb-robotics-cleanroom-robots';
const image = 'https://media-d.global.abb/is/image/abbc/IRB%201100-2:16x9-L?wid=1200&hei=630&fit=crop';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Proax',
    images: [{ url: image, width: 1200, height: 630, alt: 'ABB IRB 1100 cleanroom-capable robot' }],
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
