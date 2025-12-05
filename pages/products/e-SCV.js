// ============================================
// pages/products/e-SCV.js
// ============================================

import SEOHead from '@/components/common/SEOHead';
import ESCVPageComponent from '@/components/pages/products/ESCV';

export default function eSCVPage() {
  return (
    <>
      {/* <Head>
        <title>T3EV UDAY - Smart Electric Commercial Vehicle | EVALL</title>
        <meta
          name="description"
          content="Discover the T3EV UDAY - EVALL's flagship electric commercial vehicle with 250km range, 1495kg payload capacity, advanced features, and superior performance for last-mile delivery."
        />
        <meta property="og:title" content="T3EV UDAY - Electric Commercial Vehicle | EVALL" />
        <meta
          property="og:description"
          content="Experience the future with T3EV UDAY. Premium electric SCV with 360° showcase, signature LED lights, spacious cargo, and advanced vehicle intelligence."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/products/e-SCV" />
        <meta property="og:image" content="https://www.evall.in/images/vans/output_1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="T3EV UDAY - Smart Electric Commercial Vehicle" />
        <meta
          name="twitter:description"
          content="Drive bold. Drive beyond with EVALL's T3EV UDAY electric commercial vehicle."
        />
        <meta name="twitter:image" content="https://www.evall.in/images/vans/output_1.png" />
        
        {/* Product Schema Markup */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "T3EV UDAY",
              "description": "Smart electric commercial vehicle for last-mile delivery",
              "brand": {
                "@type": "Brand",
                "name": "EVALL"
              },
              "image": "https://www.evall.in/images/vans/output_1.png",
              "offers": {
                "@type": "Offer",
                "url": "https://www.evall.in/products/e-SCV",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        /> */}
      {/* </Head> */} 
      <SEOHead pageId="e-scv" />

      <ESCVPageComponent />
    </>
  );
}