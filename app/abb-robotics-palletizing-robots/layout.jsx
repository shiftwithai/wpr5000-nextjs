const title = 'Palletizing Robots - ABB 4-Axis Solutions | Proax';
const description = 'ABB palletizing and depalletizing robots featuring the fastest 4-axis robots in the industry. From IRB 460 to heavy-duty solutions for end-of-line automation.';
const url = 'https://wpr5000-nextjs-psi.vercel.app/abb-robotics-palletizing-robots';
const image = 'https://media-d.global.abb/is/image/abbc/IRB%20460-1:16x9-L?wid=1200&hei=630&fit=crop';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Proax',
    images: [{ url: image, width: 1200, height: 630, alt: 'ABB IRB 460 palletizing robot' }],
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
