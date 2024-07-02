import { Job } from "src/app/models/job.model";

export const jobsData: Job[] = [
  {
    id: "1",
    image: "../../../assets/images/alaska-airlines-logo.webp",
    logo: "../../../assets/images/insight_global_logo.webp",
    title: "Software Engineer",
    company: "Insight Global",
    dates: "Mar 2023 – Nov 2023",
    description: [
      "Developed a greenfield PWA used by all Alaska Airlines' destinations, providing real-time flight tracking and cargo management functionalities, utilizing Angular 15, Ionic 7 and Azure.",
      "Leveraged expertise in software engineering to contribute to requirements gathering and system design with the in-house team through feasibility study.",
      "Developed user authentication (Ping Fed OAuth), delivering seamless and secure access.",
    ],
  },
  {
    id: "2",
    image: "../../../assets/images/klicktrack.webp",
    logo: "../../../assets/images/kt-logo.webp",
    title: "Software Engineer",
    company: "KlickTrack",
    dates: "Mar 2022 – Oct 2022",
    description: [
      "Designed and implemented online payments and QR code scanning for a retail management system using Angular 15 and Ionic 7, streamlining the checkout process and improving efficiency.",
      "Streamlined codebase through refactoring (Angular 9 to 15) and transition to monorepo with improved state management (Nx & NgRx), promoting maintainability and scalability.",
      "Resolved 32 very critical backlog issues (rounding error issues), improving system stability.",
    ],
  },
  {
    id: "3",
    logo: "../../../assets/images/ncqa-logo.webp",
    image: "../../../assets/images/ncqa.webp",
    title: "Software Engineer",
    company: "NCQA",
    dates: "Aug 2021 – Dec 2021",
    description: [
      "Participated in the design and development of a greenfield web application MVP using React and Azure, securing a crucial Medicare contract.",
      "Integrated advanced healthcare data APIs (FHIR, HL7), providing data analysis and industry-leading reporting capabilities.",
      "Enabled real-time reporting and data visualizations, facilitating industry-leading capabilities for healthcare measures data analysis and insights.",
    ],
  },
  {
    id: "4",
    logo: "../../../assets/images/apsistec-logo.webp",
    image: "../../../assets/images/xfitness_studio.webp",
    title: "Freelance Developer",
    company: "ApsisTech",
    dates: "Apr 2020 – Jul 2021",
    description: [
      "Designed and developed web applications using Angular and Ionic for local businesses, modernizing their online presence.",
      "Integrated online payment solutions, interactive charts & data tables, messaging, barcode scanning and other features, enabling market differentiation.",
      "Integrated cost-effective and efficient backend services, optimizing system performance and reducing operational expenses.",
      "Maintained client communication, including regular meetings, performance monitoring, and comprehensive reporting, ensuring exceptional client satisfaction.",
    ],
  },
  {
    id: "5",
    image: "../../../assets/images/rankfantasysports.webp",
    logo: "../../../assets/images/RFS-logo.webp",
    title: "Web Application Developer",
    company: "Rank Fantasy Sports",
    dates: "Aug 2018 – Apr 2020",
    description: [
      "Designed and developed a PWA using Angular and Ionic for a daily fantasy sports startup, empowering enthusiasts with a comprehensive suite of tools, enabling quick, competitive team building and submission.",
      "Enhanced UX by providing intuitive sports statistics data analysis using visualizations, including interactive charts and data tables.",
      "Leveraged Firebase Run to optimize app performance (22% faster load times), monitor user engagement, and identify issues, leading to a 30% reduction in churn.",
    ],
  },
  {
    id: "6",
    logo: "../../../assets/images/rdag.webp",
    title: "Web Application Developer",
    company: "Reagor Dykes Auto Group",
    dates: "Feb 2017 – Aug 2018",
    description: [
      "Developed a PWA using Angular and Ionic, creating immersive vehicle views through VR and 360-degree spin imaging.",
      "Designed and developed an Angular app to aggregate dealership analytics & sales data, enabling data-driven decisions for cost reduction through realtime reporting.",
    ],
  },
];
