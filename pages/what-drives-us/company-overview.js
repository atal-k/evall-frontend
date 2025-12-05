// ============================================================================
// FILE: pages/what-drives-us/company-overview.js
// ============================================================================
/**
 * Company Overview page with dynamic SEO
 */
import SEOHead from '@/components/common/SEOHead';
import CompanyOverviewPageComponent from '@/components/pages/what-drives-us/CompanyOverview';

export default function CompanyOverviewPage() {
  // const fallbackSEO = {
  //   page_title: 'About EVALL - Leading EV Manufacturer | Company Overview',
  //   meta_description:
  //     "Learn about EVALL, India's innovative electric vehicle manufacturer. Discover our mission, vision, and commitment to sustainable commercial transportation.",
  //   og_title: 'About EVALL - Company Overview',
  //   og_description:
  //     'Leading the electric vehicle revolution in India with innovative commercial vehicles for sustainable last-mile delivery.',
  //   og_url: 'https://www.evall.in/what-drives-us/company-overview',
  //   og_image_url: 'https://www.evall.in/images/og-about.jpg',
  // };

  return (
    <>
      <SEOHead pageId="company-overview" />
      <CompanyOverviewPageComponent />
    </>
  );
}
