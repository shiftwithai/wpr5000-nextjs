const title = 'ABB Robotics Solutions - Authorized Distributor | Proax';
const description = 'Authorized ABB Robotics Distributor & Value Provider across Canada. Collaborative, industrial and mobile robots with ABB-certified expertise from Proax.';
const url = 'https://wpr5000-nextjs-psi.vercel.app/abb-robotics';
const image = 'https://proax.ca/strapiv4/uploads/gemini_hero_ad9e7a0064.png';

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: 'Proax',
    images: [{ url: image, width: 2816, height: 1536, alt: 'ABB Robotics solutions delivered by Proax' }],
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
