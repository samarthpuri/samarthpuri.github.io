export const galleryImages = [
  {
    id: 1,
    src: {
      large: "/images/gallery-1.png",
      original: "/images/gallery-1.png"
    },
    title: "Making Technical Setup a Growth Lever",
    subtitle: "SendGrid onboarding",
    description: "Front-loaded required technical setup to improve activation quality and production readiness.",
    passwordProtected: false
  },
  {
    id: 2,
    src: {
      large: "/images/gallery-2.png",
      original: "/images/gallery-2.png"
    },
    title: "Console Consolidation",
    subtitle: "Twilio x SendGrid",
    description: "Redesigned account and identity architecture to unify two platforms into one.",
    passwordProtected: false,
    contactOnly: {
      email: "samarth.ak.puri@gmail.com",
      subject: "Twilio x SendGrid Console Consolidation case study",
      body: "Hey Sam, I came across your Twilio x SendGrid Console Consolidation case study and would love to learn a bit more about it."
    }
  },
  {
    id: 3,
    src: {
      large: "/images/gallery-3.png",
      original: "/images/gallery-3.png"
    },
    title: "Intelligent Routing",
    subtitle: "Human in the loop infrastructure",
    description: "Designed assisted-intelligence routing for complex telecom decisions.",
    passwordProtected: false,
    caseStudy: {
      goal: "Replace manual, error-prone routing processes that required spreadsheets and email threads to coordinate complex telecom decisions across siloed teams.",
      solution: "Designed an assisted-intelligence system over full automation, recognizing that complex telecom decisions (protocols, aggregator orchestration, routing profiles) require human judgment for edge cases while automation handles routine work.",
      outcome: "Substantial cost savings, significantly increased routing efficiency, and a shared mental model that connected previously siloed operations and engineering teams."
    }
  },
  {
    id: 4,
    src: {
      large: "/images/rcs-launch.png",
      original: "/images/rcs-launch.png"
    },
    title: "RCS Launch",
    subtitle: "Zero code change expansion",
    description: "Launched RCS via a single abstraction with automatic fallback and no code changes.",
    passwordProtected: false,
    caseStudy: {
      goal: "Launch a new messaging channel (RCS) without requiring developers to rewrite their integrations or manage channel-specific complexity.",
      solution: "Created a single abstraction with automatic channel fallback. Developers configure messaging intent, and the platform selects the optimal channel without code changes. Established \"zero-code-change expansion\" as a required design principle.",
      outcome: "Rapid enterprise adoption of RCS messaging, competitive differentiation through developer experience, and a pattern now used for all subsequent channel integrations.",
      externalLinks: [
        { label: "console.twilio.com →", url: "https://console.twilio.com/us1/develop/rcs/overview" },
        { label: "Twilio Press Release →", url: "https://www.twilio.com/en-us/press/releases/rcs-general-availability" }
      ]
    }
  },
  {
    id: 5,
    src: {
      large: "/images/verify-onboarding.png",
      original: "/images/verify-onboarding.png"
    },
    title: "Twilio Verify Onboarding",
    subtitle: "Improved usability",
    description: "Simplified verification setup while preserving critical security controls.",
    passwordProtected: false,
    caseStudy: {
      goal: "Make it easier for developers to implement phone verification (OTP) without exposing unnecessary channel complexity or compromising security controls.",
      solution: "Redesigned the production onboarding and configuration experience to hide OTP complexity behind clear abstractions while still exposing the security controls developers need for production use.",
      outcome: "Faster developer activation, reduced integration friction, and a balance between simplicity and the flexibility required for production-grade authentication.",
      externalUrl: "https://console.twilio.com/us1/develop/verify/services"
    }
  },
  {
    id: 6,
    src: {
      large: "/images/lookup-sandbox.png",
      original: "/images/lookup-sandbox.png"
    },
    title: "Twilio Lookup Sandbox",
    subtitle: "Pre-production testing",
    description: "Built sandbox and lookup tools to test phone numbers without full setup.",
    passwordProtected: false,
    caseStudy: {
      goal: "Enable developers to test phone number validation and lookup functionality without requiring full production setup or incurring costs.",
      solution: "Built a sandbox environment allowing developers to validate phone numbers, test formatting, and explore carrier data before committing to production implementation.",
      outcome: "Reduced integration friction, faster developer onboarding, and increased confidence before going live with phone number validation features.",
      externalUrl: "https://console.twilio.com/us1/develop/lookup"
    }
  },
];
