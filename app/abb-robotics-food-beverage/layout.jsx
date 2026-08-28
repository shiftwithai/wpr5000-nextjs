const title = 'Food and Beverage Robots - ABB Robotic Solutions | Proax';
const description = 'ABB hygienic robotic automation for food processing, packaging, picking, and beverage production. Food-safe robots designed for washdown environments.';
const url = 'https://wpr5000-nextjs-psi.vercel.app/abb-robotics-food-beverage';
const image = 'https://media-d.global.abb/is/image/abbc/IRB%20365-2:16x9-L?wid=1200&hei=630&fit=crop';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Proax',
    images: [{ url: image, width: 1200, height: 630, alt: 'ABB IRB 365 FlexPicker for food and beverage' }],
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
