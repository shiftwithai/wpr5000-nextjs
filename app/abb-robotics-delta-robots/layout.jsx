const title = 'Delta Robots - ABB Robotic Solutions | Proax';
const description = 'ABB Delta robots for high-speed picking and packing. FlexPicker technology for packaging applications with the greatest flexibility in a compact footprint.';
const url = 'https://wpr5000-nextjs-psi.vercel.app/abb-robotics-delta-robots';
const image = 'https://media-d.global.abb/is/image/abbc/IRB%20360-2:16x9-L?wid=1200&hei=630&fit=crop';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Proax',
    images: [{ url: image, width: 1200, height: 630, alt: 'ABB IRB 360 FlexPicker delta robot' }],
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
