const title = 'Articulated Robots - ABB Robotic Solutions | Proax';
const description = 'ABB 6-axis articulated robots in small, medium, and large sizes. Industrial robots for manufacturing, welding, material handling, and assembly applications.';
const url = 'https://wpr5000-nextjs-psi.vercel.app/abb-robotics-articulated-robots';
const image = 'https://media-d.global.abb/is/image/abbc/IRB%204600-1:16x9-L?wid=1200&hei=630&fit=crop';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Proax',
    images: [{ url: image, width: 1200, height: 630, alt: 'ABB IRB 4600 articulated robot' }],
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
