// pages/coming-soon.js
import Head from 'next/head';
import ComingSoon from '@/components/pages/ComingSoon';

export default function ComingSoonPage() {
  return (
    <>
      <Head>
        <title>Coming Soon | EVall Mobility</title>
        <meta name="description" content="The future of commercial mobility is arriving soon." />
      </Head>
      <ComingSoon />
    </>
  );
}