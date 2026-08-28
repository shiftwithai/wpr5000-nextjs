const title = 'Welding Robots - ABB Robotic Solutions | Proax';
const description = 'ABB robotic welding automation solutions. Improve efficiency, minimize scrap, increase quality and improve the working environment with robot-based welding.';
const url = 'https://wpr5000-nextjs-psi.vercel.app/abb-robotics-welding-robots';
const image = 'https://media-d.global.abb/is/image/abbc/IRB%201520ID-2:16x9-L?wid=1200&hei=630&fit=crop';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Proax',
    images: [{ url: image, width: 1200, height: 630, alt: 'ABB IRB 1520ID arc welding robot' }],
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
