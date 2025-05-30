
export interface Project {
  title: string;
  description: string;
  image: string;
  url?: string;
  gitUrl?: string;
  techStack: string[];
}

const projects : Project[] = [
  {
    "title":"Blog Man",
    "description":"A blog application built using MERN stack with features like Log In, User registration, User profile edit, User profile , Blog with CRUD functionalities.",
    "image":"blogman.png",
    "url":"https://blog-man-ten.vercel.app/",
    "gitUrl": "https://github.com/pemba1s1/blog-man",
    "techStack": ["React.js", "Node.js", "Express.js", "MongoDB"]
  },  
  {
    "title": "KYC Blockchain",
    "description":"A decentralized application for KYC verification using blockchain technology. The user’s info would be encrypted and uploaded to a distributed database (IPFS). The IPFS link would then be stored in blockchain.",
    "image":"kyc.png",
    "gitUrl": "https://github.com/pemba1s1/kyc_blockchain",
    "techStack": ["Solidity", "Node.js", "Web3.js", "React.js", "IPFS", "Encrption/Decryption"]
  },
  {
    "title":"Real Estate Smart Code",
    "description":"Smart contract for creating Real Estate Tokens, Staking Real Estate Tokens, and transferring Real Estate Tokens.",
    "image":"realestate.jpg",
    "gitUrl":"https://github.com/pemba1s1/real-estate-blockchain",
    "techStack": ["Solidity"]
  },
  {
    "title":"Vanthena NFT",
    "description":"Freelance project for a decentralized application for creating, buying, and selling NFTs. Users can create their own NFTs, buy and sell them, and view their NFT collection.",
    "image":"vanthena.png",
    "url":"https://vanthena-dapp-7kn4l4lt3-dt6120.vercel.app/login",
    "techStack": ["Next.js", "Solidity", "Node.js", "Web3.js"]
  },
  {
    "title": "Location, News and Weather IOS App",
    "description":"Mobile app to get the current location and direction between two locations, get the weather based on location, get the news based on keyword. Store all these interactions in the database using core data.",
    "image":"ios.png",
    "gitUrl":"https://github.com/pemba1s1/swift-final",
    "techStack": ["Swift", "Xcode","Core Data", "MapKit"]
  },  
  {
    "title": "ResRev",
    "description":"A full stack restaurant review application built using Asp .Net MVC with CRUD functionalities.",
    "image":"resrev.png",
    "gitUrl":"https://github.com/pemba1s1/RR",
    "techStack": ["C#", "Asp .Net MVC", "SQLite"]
  },
  {
    "title":"Store Biz",
    "description":"Full stack e-commerce application with features like user authentication, product management, order management, and payment processing. Built an admin dashboard for managing products and orders.",
    "image":"storebiz.png",
    "url": "https://store-bizstore.vercel.app/",
    "gitUrl":"https://github.com/pemba1s1/store-biz-ecom",
    "techStack": ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
  },
  {
    "title":"Chess",
    "description":"A real-time multiplayer chess game built using Next.js and Golang using Three.js for 3D rendring and gRPC for fast bidirectional communication between server and client. Currently only frontend is hosted so multiplayer is not supported online.",
    "image":"chess.png",
    "url":"https://chess-frontend-chi.vercel.app/",
    "gitUrl":"https://github.com/pemba1s1/grpc-chess-backend",
    "techStack": ["Next.js", "TypeScript", "Golang", "gRPC", "Docker", "Three.js"]
  },
  {
    "title":"Expenso",
    "description":"Expenso is an AI based expense tracker that helps users to track their expenses and manage their finances. It uses LLMs to analyze the user’s expenses and provide insights.",
    "image":"expenso.png",
    "gitUrl":"https://github.com/pemba1s1/Expenso",
    "techStack": ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "LLMs", "Docker", "PWA"]
  },
  {
    "title":"FreeScribe",
    "description":"Contributed to open source medical transcription software that uses LLMs and Whisper to transcribe audio files into text and generates SOAP notes.",
    "image":"freescribe.png",
    "gitUrl":"https://github.com/ClinicianFOCUS/FreeScribe",
    "techStack": ["Python", "NSIS", "LLMs", "Whisper"]
  },
  {
    "title":"Openo-Connect",
    "description":"Contributed to open source mobile application for connecting to electronic medical record systems based on the open-source 'oscar' project code",
    "image":"openoconnect.png",
    "gitUrl":"https://github.com/ClinicianFOCUS/openo-connect",
    "techStack": ["React Native", "Java"]
  },
  {
    "title": "Url Shortener",
    "description": "A URL shortening application built with Spring Boot and Java, utilizing Thymeleaf for the frontend, PostgreSQL for data storage, Redis for caching, JPA for ORM, and JUnit 5 for testing.",
    "image": "url-shortener.png",
    "gitUrl": "https://github.com/pemba1s1/url-shortner",
    "techStack": ["Java", "Spring Boot", "Thymeleaf", "PostgreSQL", "Redis", "JPA", "JUnit 5"]
  }
]

export default projects.reverse();