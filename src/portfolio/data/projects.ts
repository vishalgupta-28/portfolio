import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "g-drive",
    title: "G-Drive",
    period: {
      start: "01.2025",
    },
    link: "https://g-drive-frontend-six.vercel.app/auth",
    github: "https://github.com/vishalgupta-28/G-Drive-Backend",
    skills: [
      "node.js",
      "typescript",
      "RabbitMQ",
      "Redis",
      "Drizzle ORM",
      "Next.js",
      "PostgreSQL",
    ],
    description: `A robust, highly scalable, and production-ready backend infrastructure for a cloud storage platform (Google Drive clone).

**Features:**

- Robust Authentication: Implements Passport.js with Google OAuth2.0 integration for seamless and secure user sign-ins. 
- Background Task Processing: Integrates RabbitMQ via amqplib for executing decoupled, asynchronous background jobs (like video transcoding and image processing) through a dedicated worker process.
- High-Performance Caching: Employs Redis (ioredis) for session management, fast data retrieval, and caching mechanisms.
- Secure Sharing Mechanics: Includes a dedicated FileShareRepository to handle granular access control and public/private link sharing.
- Built-in Security & Monitoring: Incorporates helmet for HTTP header security, cors for cross-origin management, and a dedicated /health endpoint for uptime monitoring`,
    isPinned: true,
    media: {
      type: "image",
      url: "/Images/carter.png",
      alt: "Carter - Microservices Platform",
    },
  },
  {
    id: "depo",
    title: "Depo",
    period: {
      start: "09.2024",
    },
    github: "https://github.com/vishalgupta-28/depo",
    skills: [
      "LangGraph",
      "Next.js",
      "Redis",
      "AWS S3",
      "Drizzle ORM",
      "Audio Diarization",
    ],
    description: `Legal-tech platform for lawyers with AI-powered deposition assistance.

**Features:**

- Upload case files and generate strategic deposition questions using LangGraph AI agents
- Real-time "Live Depo" interface with audio capture and speaker diarization
- Instant, context-aware question suggestions during depositions
- Secure document storage with AWS S3 Presigned URLs
- Optimized database interactions using Drizzle ORM and Redis`,
    isPinned: true,
    media: {
      type: "image",
      url: "/Images/depo.png",
      alt: "Depo - Legal-tech for depositions",
    },
  },
  {
    id: "monitoring-platform",
    title: "Monitoring Platform",
    period: {
      start: "12.2024",
    },
    link: "https://monitoring-platform-one.vercel.app/services",
    github: "https://github.com/vishalgupta-28/monitoring-platform",
    skills: [
      "Python",
      "FastAPI",
      "Redis",
      "Apache Kafka",
      "Docker",
      "Nginx",
      "Next.js",
    ],
    description: `High-performance monitoring platform for real-time tracking of server metrics, application performance, and system health.

**Features:**

- Agent: A lightweight Python script that runs on target hosts to collect system and application metrics.
- Kafka: Acts as a high-throughput buffer for incoming telemetry data (metrics, logs, traces).
- Collector Worker: Consumes data from Kafka and persists it to PostgreSQL.
- API (FastAPI): Serves as the central gateway for the frontend and management operations.
- Alert Dispatcher: Monitors metric thresholds via RabbitMQ queues and sends notifications.
- Frontend (Next.js): Provides a real-time visualization dashboard using WebSockets.`,

    isPinned: true,
    media: {
      type: "image",
      url: "/Images/useraccess.png",
      alt: "UserAccess - Accessibility Widget",
    },
  },
  {
    id: "cluely",
    title: "Cluely",
    period: {
      start: "10.2024",
    },
    link: "https://cluely-workable-frontend.onrender.com/signup",
    github: "https://github.com/vishalgupta-28/cluely",
    skills: [
      "Next.js",
      "FastAPI",
      "Deepgram",
      "Pinecone",
      "RAG",
      "SSE",
    ],
    description: `RAG-powered conversational AI platform.

**Features:**

- AI generation pipeline for RAG and Web SERP service
- Real-time response streaming via Server-Sent Events (SSE)
- Hybrid search mechanism (Keyword + Vector) with re-ranking
- Improved contextual relevance of generated answers`,
    isPinned: true,
    media: {
      type: "image",
      url: "/Images/cluely.png",
      alt: "Cluely - RAG-powered AI Search",
    },  
  },
];
