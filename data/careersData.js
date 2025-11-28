// ============================================================================
// FILE: src/data/careersData.js
// ============================================================================

export const careersData = {
    hero: {
      badge: "🚀 Hiring Now",
      headline: {
        main: "Driving Growth,",
        sub: "Empowering Minds"
      },
      subheadline: "Build Your Career in Sustainable Mobility with EVall",
      description: "Join our mission to revolutionize electric transportation and create a cleaner, smarter future for India and beyond.",
      ctaButtons: [
        { text: "Explore Open Jobs", type: "primary", scrollTo: "job-openings" },
        { text: "Our Values & Culture", type: "secondary", scrollTo: "core-values" }
      ],
      stats: [
        { number: 100, label: "Team", suffix: "+" },
        { number: 3, label: "Openings", suffix: "" },
        { number: 3, label: "Locations", suffix: "" }
      ]
    },
  
    jobOpenings: [
      {
        id: "job-1",
        title: "Branch Head, Direct Sales Force (DSF)",
        location: "Punjab Office",
        department: "Sales",
        type: "Full-time",
        experience: "5+ years",
        description: "Lead EVall's direct sales force to penetrate and adopt electric commercial vehicles as a primary market in Punjab. Create and implement sales tactics to meet challenging growth targets while cultivating a customer-oriented culture.",
        responsibilities: [
          "Direct the sales team to achieve market penetration goals",
          "Create and implement effective sales strategies",
          "Oversee regional sales operations and partnerships",
          "Elevate brand presence in commercial EV segment"
        ]
      },
      {
        id: "job-2",
        title: "Mechanical Design Engineer",
        location: "Punjab Office",
        department: "Engineering",
        type: "Full-time",
        experience: "3+ years",
        description: "Design and develop mechanical parts and systems for EVall's electric vehicles, focusing on durability, performance, and cost-effectiveness. Work on prototyping, testing, and refining vehicle components.",
        responsibilities: [
          "Design mechanical systems for electric vehicles",
          "Enhance battery packaging and chassis design",
          "Optimize payload capacity and performance",
          "Prototype, test, and refine vehicle components"
        ]
      },
      {
        id: "job-3",
        title: "Tech Lead, Technology & Product Development",
        location: "Punjab Office",
        department: "Technology",
        type: "Full-time",
        experience: "6+ years",
        description: "Drive technology and product development for EVall's electric vehicle solutions and digital platforms. Manage agile teams across embedded systems, telematics, and cloud applications.",
        responsibilities: [
          "Lead end-to-end product development lifecycle",
          "Manage cross-functional agile teams",
          "Integrate AI and IoT technologies",
          "Enhance vehicle performance and fleet management"
        ]
      }
    ],
  
    coreValues: [
      {
        id: "innovation",
        title: "Innovation",
        description: "Always looking for new ways to use technology and revolutionize the future of electric mobility through innovative and eco-friendly solutions.",
        color: "#405FF2"
      },
      {
        id: "sustainability",
        title: "Sustainability",
        description: "For us, being environmentally friendly means not just making products that use less energy but also having good practices that encourage a greener planet.",
        color: "#00b300"
      },
      {
        id: "customer-centricity",
        title: "Customer Centricity",
        description: "Customers are the main consideration in every decision we make, which guarantees excellent service, dependability, and personalized mobility experiences.",
        color: "#D37C25"
      },
      {
        id: "integrity",
        title: "Integrity",
        description: "We maintain openness, moral standards, and answerability in all business dealings and relations with stakeholders.",
        color: "#2147FB"
      },
      {
        id: "collaboration",
        title: "Collaboration",
        description: "We foster the spirit of working together and having open partnerships within and outside the organization to speed up growth and meet shared sustainability targets.",
        color: "#ff00cc"
      }
    ],
  
    culture: {
      title: "Working at EVall Mobility",
      description: "We at EVall Mobility consider it very important to make the future of electric transportation through sustainability and innovation. The connection lies at the center of all our activities, from the significant relationships we develop with our people to the advanced technology we produce.",
      mission: "Our goal is to connect more people, give power to our teams, and create a common vision of cleaner and smarter transportation for India and other parts of the world."
    }
  };