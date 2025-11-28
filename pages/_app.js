import '../styles/globals.css';
import '../styles/utils.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ToastProvider } from '../components/common/Toast';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  // Scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => window.scrollTo(0, 0);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, []);

  return (
    <ToastProvider>
      <Header variant={isHomePage ? 'glass' : 'white'} />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </ToastProvider>
  );
}