export const safetyComplianceData = {
    hero: {
        badge: "🛡️ Safety First",
        headline: "Designed with Confidence.",
        subheadline: "Built on Commercial Reality",
        description: "Safety is fundamental to all EVALL vehicles. Our development process ensures that all commercial EVs deliver long-term reliability, consistent performance in real working environments, and driver confidence.",
        ctaButton: {
            text: "Talk to an Engineer",
            link: "#contact"
        },
        trustIndicators: [
            { label: "AIS Certified", icon: "shieldCheck" },
            { label: "Thermal Protected", icon: "thermometer" },
            { label: "Quality Tested", icon: "award" }
        ],
        heroImage: "/images/safety-compliance/evall-safety-hero.webp"
        // IMAGE: Professional photo of EVALL vehicle in testing facility or manufacturing
        // Shows chassis, safety equipment, or certification process
        // Size: 1200x900px, landscape format
    },

    whySafetyMatters: {
        title: "Why Safety in Commercial EVs is Critical",
        description: "Commercial vehicles run longer hours, handle differing payloads, and need to work in all sorts of weather conditions and road surfaces. Reliable safe systems result in fleet productivity, lower operational disruption, and greater protection for drivers and cargo.",
        businessImpact: [
            { metric: "99.8%", label: "Fleet Uptime", icon: "trendingUp" },
            { metric: "40%", label: "Lower Costs", icon: "activity" },
            { metric: "24/7", label: "Protection", icon: "shield" }
        ],
        priorities: [
            {
                id: "cabin-stability",
                title: "Strong Cabin & Chassis Stability",
                description: "Reinforced structure ensuring vehicle stability and durability under heavy loading conditions.",
                icon: "box"
            },
            {
                id: "battery-protection",
                title: "Battery Protection in Heat & Vibration",
                description: "Advanced thermal management and shock absorption for battery longevity and safety.",
                icon: "battery"
            },
            {
                id: "braking-control",
                title: "Predictable Braking & Control",
                description: "Consistent braking performance with regenerative and mechanical systems integration.",
                icon: "circleAlert"
            },
            {
                id: "driver-visibility",
                title: "Driver Visibility & Comfort",
                description: "LED lighting, ergonomic cabin design, and alert displays for long shift operations.",
                icon: "users"
            },
            {
                id: "uptime-reliability",
                title: "Maximum Uptime & Reliability",
                description: "Reduced operational disruption through robust design and preventive systems.",
                icon: "checkCircle"
            }
        ]
    },

    vehicleArchitecture: {
        heading: "Safety-Based Vehicle Architecture",
        items: [
            {
                title: "Structural Integrity",
                description: "A reinforced chassis with energy-absorbing zones ensures vehicle stability and long-term durability under overhead loading conditions. Designed for real-world stress and impact scenarios.",
                img: {
                    altText: "Structural Integrity - Reinforced chassis design",
                    src: "/images/safety-compliance/structural-integrity.webp"
                }
                // IMAGE: Technical illustration or photo of vehicle chassis/frame
                // Shows reinforced structure, energy-absorbing zones
                // Size: 800x600px
            },
            {
                title: "Battery System Protection",
                description: "LFP battery chemistry provides thermal stability. The system is encased in a sealed battery casing surrounded by temperature detection sensors for safe performance in all conditions.",
                img: {
                    altText: "Battery System Protection with thermal management",
                    src: "/images/safety-compliance/battery-protection.webp"
                }
                // IMAGE: Battery pack with protective casing and thermal sensors
                // Shows sealed enclosure, sensor placement
                // Size: 800x600px
            },
            {
                title: "High Voltage & Electrical Protection",
                description: "Insulated wiring throughout with fault-protected connectors prevents short circuits due to moisture and high current load fluctuations. Multi-layer safety protocols ensure electrical integrity.",
                img: {
                    altText: "High Voltage Electrical Protection system",
                    src: "/images/safety-compliance/electrical-protection.webp"
                }
                // IMAGE: Electrical components, insulated wiring, connectors
                // Shows protective measures and safety features
                // Size: 800x600px
            },
            {
                title: "Braking & Control Systems",
                description: "Regenerative braking works seamlessly with mechanical brakes. Advanced control systems provide higher driving efficiency and predictable stopping power in all road conditions.",
                img: {
                    altText: "Advanced Braking & Control Systems",
                    src: "/images/safety-compliance/braking-system.webp"
                }
                // IMAGE: Braking system components, control units
                // Shows regenerative and mechanical brake integration
                // Size: 800x600px
            },
            {
                title: "Driver Comfort & Visibility",
                description: "LED DRLs, comprehensive alert displays, and ergonomic cabin design assist driver focus through long working cycles. Enhanced visibility and comfort reduce fatigue and improve safety.",
                img: {
                    altText: "Driver Comfort & Visibility features",
                    src: "/images/safety-compliance/driver-comfort.webp"
                }
                // IMAGE: Vehicle cabin interior, LED lights, dashboard
                // Shows ergonomic design and visibility features
                // Size: 800x600px
            }
        ]
    },

    complianceStandards: [
        {
            id: "vehicle-cert",
            category: "Vehicle Certification",
            standard: "AIS-Based Safety Standards",
            description: "Road-operational approval ensuring compliance with national safety requirements",
            icon: "award",
            badge: "certified"
        },
        {
            id: "battery-handling",
            category: "Battery Handling & Protection",
            standard: "Thermal Safeguard Requirements",
            description: "Stability protocols for safe daily usage in varying temperature conditions",
            icon: "battery",
            badge: "certified"
        },
        {
            id: "charging-compat",
            category: "Charging Compatibility",
            standard: "CCS2 Charging Protocol",
            description: "Reliable charging access with industry-standard fast charging support",
            icon: "zap",
            badge: "certified"
        },
        {
            id: "quality-control",
            category: "Quality Control",
            standard: "Process-Level Verification",
            description: "Inspection steps ensuring uniform manufacturing consistency",
            icon: "checkCircle",
            badge: "certified"
        }
    ],

    testingValidation: [
        {
            id: "structural-load",
            testName: "Structural Load Testing",
            description: "Chassis endurance validation under maximum payload and stress conditions",
            icon: "box",
            parameters: ["Maximum load capacity", "Stress point analysis", "Long-term durability"]
        },
        {
            id: "thermal-cycle",
            testName: "Thermal Cycle Validation",
            description: "Battery reliability testing across temperature extremes",
            icon: "thermometer",
            parameters: ["Temperature range testing", "Thermal stability", "Heat dissipation efficiency"]
        },
        {
            id: "vibration-durability",
            testName: "Vibration & Road Durability",
            description: "Component stability simulation for rough road conditions",
            icon: "activity",
            parameters: ["Vibration resistance", "Component longevity", "Road condition simulation"]
        },
        {
            id: "weather-sealing",
            testName: "Weather & Dust Sealing",
            description: "Operational reliability testing in adverse environmental conditions",
            icon: "shield",
            parameters: ["Water resistance", "Dust protection", "Seal integrity verification"]
        },
        {
            id: "long-run",
            testName: "Long-Run Performance",
            description: "Consistent output validation throughout vehicle lifecycle",
            icon: "trendingUp",
            parameters: ["Extended operation testing", "Performance consistency", "Lifecycle validation"]
        }
    ],

    safetyMonitoring: {
        title: "Intelligent Safety Monitoring",
        subtitle: "Real-time protection through connected intelligence",
        description: "Our connected platform monitors critical parameters and provides real-time information to operators. Safety is actively maintained through usage, not just through design.",
        features: [
            {
                title: "Battery Temperature & Health",
                description: "Continuous monitoring of battery status with predictive health indicators",
                icon: "battery",
                realTime: true
            },
            {
                title: "Predictive Maintenance Alerts",
                description: "Advanced warnings for maintenance needs before issues occur",
                icon: "circleAlert",
                realTime: true
            },
            {
                title: "Driver Behavior Analytics",
                description: "Insights into driving patterns for safety optimization and training",
                icon: "users",
                realTime: true
            },
            {
                title: "Remote Diagnostic Support",
                description: "Real-time technical assistance and troubleshooting capabilities",
                icon: "activity",
                realTime: true
            }
        ]
    },

    driverTraining: {
        title: "Driver Training & Operational Support",
        description: "Comprehensive training modules ensure operator safety and optimal performance. Trained drivers contribute to smoother fleet operations and fewer operational interruptions.",
        modules: [
            {
                name: "EV Operation Fundamentals",
                topics: ["Electric drivetrain basics", "Energy management principles", "Dashboard controls and displays"]
            },
            {
                name: "Charging Best Practices",
                topics: ["Optimal charging procedures", "Fast vs. slow charging", "Battery care and longevity"]
            },
            {
                name: "Safety Protocols",
                topics: ["Emergency procedures", "High-voltage safety", "Weather condition handling"]
            },
            {
                name: "Load Management",
                topics: ["Optimal load distribution", "Payload capacity limits", "Handling techniques"]
            }
        ]
    },

    closingStatement: {
        headline: "A Safer Tomorrow, Designed Today",
        description: "Safety is not just a feature but a principle designed into the way we engineer, test, and support all EVALL vehicles. Our commitment goes beyond compliance to deliver superior performance across all routes, every day.",
        ctaText: "Contact EVALL Support",
        ctaLink: "contact/customer-support"
    }
};