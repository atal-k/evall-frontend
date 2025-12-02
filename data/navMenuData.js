  // src/data/navMenuData.js
export const navMenuData = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    hasDropdown: false,
  },
  {
    id: 'what-drives-us',
    label: 'What Drives Us',
    path: '/what-drives-us',
    hasDropdown: true,
    menu: {
      type: 'mega',
      groups: [
        {
          title: null,
          links: [
            { id: 'company-overview', label: 'Company Overview', path: '/what-drives-us/company-overview' },
            { id: 'careers-culture', label: 'Careers & Culture', path: '/what-drives-us/careers' },
            { id: 'customer-stories', label: 'Customer Stories / Case Studies', path: '/what-drives-us/customer-stories' },
          ],
        },
      ],
    },
  },
  {
    id: 'network',
    label: 'Network',
    path: '/network',
    hasDropdown: true,
    menu: {
      type: 'mega',
      groups: [
        {
          title: null,
          links: [
            { id: 'after-sales-service', label: 'After-Sales Service', path: '/network/after-sales-service' },
            { id: 'charging-infrastructure', label: 'Charging Infrastructure & Partnerships', path: '/network/charging-infrastructure' },
          ],
        },
      ],
    },
  },
  {
    id: 'products',
    label: 'Products',
    path: '/products',
    hasDropdown: true,
    menu: {
      type: 'mega',
      groups: [
        {
          title: null,
          links: [
            { id: 'e-scv', label: 'e-SCV', path: '/products/e-SCV' },
            { id: 'e-bus', label: 'E-bus', path: '#' },
            { id: 'future-models', label: 'Future Models', path: '#' },
          ],
        },
      ],
    },
  },
  {
    id: 'tech-innovation',
    label: 'Tech & Innovation',
    path: '/tech-innovation/vehicle-intelligence',
    hasDropdown: true,
    menu: {
      type: 'mega',
      groups: [
        {
          title: null,
          links: [
            { id: 'vehicle-intelligence', label: 'Vehicle Intelligence & Connectivity', path: '/tech-innovation/vehicle-intelligence' },
            { id: 'energy-battery', label: 'Energy Efficiency & Battery Tech', path: '/tech-innovation/energy-battery' },
            { id: 'safety-compliance', label: 'Safety & Compliance Standards', path: '/tech-innovation/safety-compliance' },
          ],
        },
      ],
    },
  },
  {
    id: 'resources',
    label: 'Resources',
    path: '/resources',
    hasDropdown: true,
    menu: {
      type: 'mega',
      groups: [
        {
          title: null,
          links: [
            { id: 'blog-news', label: 'Blog & News', path: '/resources/blogs' },
            { id: 'emi-calculator', label: 'EMI Calculator', path: '/resources/emi-calculator' },
            { id: 'tco-calculator', label: 'TCO Calculator', path: '/resources/tco-calculator' },
            { id: 'finance-ownership', label: 'Finance and Ownership', path: '/resources/finance-ownership' },
            { id: 'warranty-maintenance', label: 'Warranty & Maintenance', path: '/resources/warranty-maintenance' },
            { id: 'faqs', label: 'FAQs', path: '/resources/faqs' },
            { id: 'downloads', label: 'Download Brochures & Manuals', path: '/resources/downloads' },
          ],
        },
      ],
    },
  },
  {
    id: 'contact-us',
    label: 'Contact Us',
    path: '/contact',
    hasDropdown: true,
    menu: {
      type: 'mega',
      groups: [
        {
          title: null,
          links: [
            { id: 'feedback-form', label: 'Feedback Form', path: '/contact/feedback' },
            { id: 'dealer-locator', label: 'Dealer Locator', path: '/contact/dealer-locator' },
            { id: 'request-demo', label: 'Request a Demo', path: '/contact/request-demo' },
            { id: 'customer-support', label: 'Customer Support', path: '/contact/customer-support' },
            {id: 'apply-dealership', label: 'Apply for Dealership', path: '/contact/apply-dealership'},
            { id: 'privacy-policy', label: 'Privacy Policy', path: '/contact/privacy-policy' },
            { id: 'terms-conditions', label: 'Terms and Conditions', path: '/contact/terms-and-conditions' },
            { id: 'disclaimers', label: 'Disclaimers', path: '/contact/disclaimers' },
          ],
        },
      ],
    },
  },
];
