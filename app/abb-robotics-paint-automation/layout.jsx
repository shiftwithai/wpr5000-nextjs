const title = 'Paint Automation Robots - ABB Robotic Solutions | Proax';
const description = 'ABB robotic paint and coating automation. Consistent finish quality, improved safety and high throughput for automotive and industrial painting.';
const url = 'https://wpr5000-nextjs-psi.vercel.app/abb-robotics-paint-automation';
const image = 'https://media-d.global.abb/is/image/abbc/IRB%205500-22:16x9-L?wid=1200&hei=630&fit=crop';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Proax',
    images: [{ url: image, width: 1200, height: 630, alt: 'ABB IRB 5500 FlexPainter paint robot' }],
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
