// ============================================================================
// FILE: pages/_app.js
// ============================================================================
/**
 * App wrapper with Advanced SEO injection
 * Fetches advancedSEO once and passes to all pages
 */

import '../styles/globals.css';
import '../styles/FormField.css';
import '../styles/Button.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ToastProvider } from '../components/common/Toast';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { fetchFullSEO } from '@/lib/seo/fetchFullSEO';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps, advancedSEO }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  // Scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => window.scrollTo(0, 0);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      {/* ========== Global Advanced SEO Scripts ========== */}
      
      {/* Google Site Verification */}
      <Head>
        {advancedSEO?.google_site_verification && (
          <meta 
            name="google-site-verification" 
            content={advancedSEO.google_site_verification} 
          />
        )}
      {/* Header Script - Inject as-is from backend */}
      {advancedSEO?.header_script && (
        <div dangerouslySetInnerHTML={{ __html: advancedSEO.header_script }} />
      )}
      </Head>
  
  
      <ToastProvider>
        <Header variant={isHomePage ? 'glass' : 'white'} />
        <main className="main-content">
          <Component {...pageProps} />
        </main>
        <Footer />
      </ToastProvider>
  
      {/* Footer Script - Inject as-is from backend */}
      {advancedSEO?.footer_script && (
        <div dangerouslySetInnerHTML={{ __html: advancedSEO.footer_script }} />
      )}
    </>
  );
}

// Fetch advancedSEO once for entire app (uses cache from API)
App.getInitialProps = async () => {
  const { advancedSEO } = await fetchFullSEO();
  
  return {
    advancedSEO: advancedSEO || {}
  };
};