import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Mortgage Refinance Calculator – Save $50,000+ | USA, UK, Canada (2026)",
  description: "Calculate your mortgage refinance savings with break-even analysis. Trusted by 100,000+ homeowners in USA, UK & Canada. Find out if refinancing saves you thousands in minutes.",
  keywords: [
    "mortgage refinance calculator USA",
    "refinance rates UK 2026",
    "Canada mortgage refinance savings",
    "break-even analysis calculator",
    "should I refinance my mortgage",
    "mortgage refinance calculator with closing costs",
    "how to calculate refinance break-even point"
  ],
  authors: [{ name: "RefiBreakEven Team" }],
  alternates: {
    canonical: 'https://refibreakEven.com'
  },
  openGraph: {
    title: "Free Mortgage Refinance Calculator – Save $50,000+ (2026)",
    description: "Find out if refinancing can save you $50,000+ in just 60 seconds. Trusted by homeowners in USA, UK & Canada.",
    url: "https://refibreakEven.com",
    siteName: "RefiBreakEven",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Mortgage Refinance Calculator – Save $50,000+",
    description: "Calculate your refinance savings with break-even analysis in 60 seconds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RefiBreakEven",
    "url": "https://refibreakEven.com",
    "description": "Free mortgage refinance calculator with break-even analysis for USA, UK, and Canada homeowners",
    "sameAs": []
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics - Replace GA_MEASUREMENT_ID with your actual ID */}
        {/* 
          GOOGLE SEARCH CONSOLE SETUP INSTRUCTIONS:
          1. Go to https://search.google.com/search-console
          2. Add your domain (refibreakEven.com)
          3. Verify ownership via DNS record or HTML file upload
          4. Submit sitemap: https://refibreakEven.com/sitemap.xml
          5. Request indexing for key pages (home, calculator, blog posts)
          6. Monitor performance in Search Console dashboard
          
          GOOGLE ANALYTICS SETUP:
          1. Go to https://analytics.google.com
          2. Create a new property for RefiBreakEven.com
          3. Get your Measurement ID (starts with G-)
          4. Replace GA_MEASUREMENT_ID below with your actual ID
        */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
