const title = 'Material Handling Robots - ABB Robotic Solutions | Proax';
const description = 'ABB robotic material handling solutions. Automate machine tending, kitting, and material flow with 6-axis articulated robots and AMR solutions.';
const url = 'https://wpr5000-nextjs-psi.vercel.app/abb-robotics-material-handling';
const image = 'https://media-d.global.abb/is/image/abbc/IRB%20660-1:16x9-L?wid=1200&hei=630&fit=crop';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Proax',
    images: [{ url: image, width: 1200, height: 630, alt: 'ABB IRB 660 material handling robot' }],
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
