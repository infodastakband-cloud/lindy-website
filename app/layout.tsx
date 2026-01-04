import type { Metadata } from \"next\";
import { Inter } from \"next/font/google\";\nimport \"./globals.css\";

const inter = Inter({ subsets: [\"latin\"] });

export const metadata: Metadata = {
  metadataBase: new URL(\"https://dastakband.com\"),
  title: {
    default: \"Dastak Band | Official Booking & EPK\",
    template: \"%s | Dastak Band\",
  },
  description: \"Book Dastak Band for your next event. High-energy Hindi Indie Rock & Pop led by Akarsh Sahay. Experience raw, real, and resonating live music for weddings, corporate shows, and college fests.\",
  keywords: [\"Dastak Band\", \"Live Band India\", \"Hindi Rock Band\", \"Wedding Band India\", \"Corporate Event Band\", \"Akarsh Sahay\", \"Bollywood Live Band\"],
  authors: [{ name: \"Dastak Band\" }],
  creator: \"Dastak Band\",
  publisher: \"Dastak Band\",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: \"website\",
    locale: \"en_US\",
    url: \"https://dastakband.com\",
    siteName: \"Dastak Band\",
    title: \"Dastak Band | Official Booking & EPK\",
    description: \"High-energy Hindi Indie Rock & Pop led by Akarsh Sahay. Book now for college fests, corporate shows, and private events.\",
    images: [
      {
        url: \"/images/og-image.png\",
        width: 1200,
        height: 630,
        alt: \"Dastak Band Live Performance\",
      },
    ],
  },
  twitter: {
    card: \"summary_large_image\",
    title: \"Dastak Band | Official Booking & EPK\",
    description: \"High-energy Hindi Indie Rock & Pop led by Akarsh Sahay. Book now for college fests, corporate shows, and private events.\",
    images: [\"/images/og-image.png\"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {\n  const jsonLd = {
    \"@context\": \"https://schema.org\",
    \"@type\": \"MusicGroup\",
    \"name\": \"Dastak Band\",
    \"url\": \"https://dastakband.com\",
    \"logo\": \"https://dastakband.com/images/logo.png\",
    \"description\": \"High-energy Hindi Indie Rock & Pop band based in India.\",
    \"genre\": [\"Hindi Rock\", \"Indie Pop\", \"Bollywood\"],
    \"member\": [
      { \"@type\": \"OrganizationRole\", \"member\": { \"@type\": \"Person\", \"name\": \"Akarsh Sahay\" }, \"roleName\": \"Lead Singer & Guitarist\" },
      { \"@type\": \"OrganizationRole\", \"member\": { \"@type\": \"Person\", \"name\": \"Anuj Yadav\" }, \"roleName\": \"Keyboardist\" },
      { \"@type\": \"OrganizationRole\", \"member\": { \"@type\": \"Person\", \"name\": \"Sarthak Dutta\" }, \"roleName\": \"Bass Guitarist\" },
      { \"@type\": \"OrganizationRole\", \"member\": { \"@type\": \"Person\", \"name\": \"Nikhil Allan Lakra\" }, \"roleName\": \"Lead Guitarist\" },
      { \"@type\": \"OrganizationRole\", \"member\": { \"@type\": \"Person\", \"name\": \"Advin\" }, \"roleName\": \"Drummer\" }
    ],
    \"sameAs\": [
      \"https://www.instagram.com/akarshsahay/\",
      \"https://open.spotify.com/artist/5DUELRrlNCZJVzpPDviyOA\"
    ]
  };

  return (
    <html lang=\"en\" className=\"scroll-smooth\">
      <head>
        <script
          type=\"application/ld+json\"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
