# Meet AI - AI Agent Video Platform

A modern SaaS platform for scheduling and conducting AI-powered video calls with intelligent agents. Built with Next.js 15, React 18, TypeScript, tRPC, and Tailwind CSS.

## 🚀 Features

### Core Functionality
- **AI Agent Management**: Create, edit, and manage custom AI agents with specific roles and instructions
- **Meeting Lifecycle**: Schedule, start, and manage video calls with AI agents
- **Real-time Video**: High-quality video calling powered by modern WebRTC technology
- **Dashboard Analytics**: Overview of agents, meetings, and platform usage
- **Type-safe API**: Full-stack type safety with tRPC and TypeScript

### Architecture Highlights
- **Next.js 15** with App Router and React Server Components
- **tRPC** for end-to-end type safety and API procedures
- **Tailwind CSS** with Shadcn UI components for modern, accessible design
- **PostgreSQL** with Drizzle ORM (ready for integration)
- **Better Auth** integration ready for OAuth and email authentication

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database (for production)

### Installation

1. **Clone and setup**:
   ```bash
   git clone <your-repo>
   cd meet-ai-platform
   npm install
   ```

2. **Environment Variables**:
   ```bash
   # Copy example and fill in your values
   cp .env.example .env.local
   ```

3. **Start Development**:
   ```bash
   npm run dev
   ```

4. **Visit**: http://localhost:3000

## 🏗️ Architecture Overview

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/trpc/          # tRPC API endpoints
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Main dashboard
│   └── globals.css        # Global styles
├── components/            
│   ├── ui/                # Reusable UI components
│   └── providers/         # React context providers
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and configurations
└── server/                # tRPC server configuration
    └── api/               # API routers and procedures
```

## 🤖 AI-Assisted Development Prompts

Below are structured prompts designed for AI agents to extend this platform. Use these with AI-integrated IDEs like Cursor, GitHub Copilot, or similar tools.

### Database Integration Prompts

**Prompt 1: Database Schema Setup**
```
"Implement a complete PostgreSQL database schema using Drizzle ORM for the Meet AI platform. Create tables for:

1. Users table with authentication fields (id, email, name, avatar, created_at)
2. Agents table (id, user_id, name, description, instructions, voice_settings, created_at, updated_at)
3. Meetings table (id, user_id, agent_id, title, description, scheduled_for, status, recording_url, transcript, created_at)
4. Meeting_participants table for future multi-user support

Include proper indexes, foreign keys, and Drizzle configuration. Update the tRPC routers to use real database operations instead of mock data. Ensure type safety throughout."
```

**Prompt 2: Database Connection Setup**
```
"Set up Drizzle ORM database connection with Neon PostgreSQL. Create:

1. Database configuration in src/lib/db.ts with connection pooling
2. Drizzle config file (drizzle.config.ts) with proper credentials
3. Migration system setup with npm scripts
4. Update tRPC context to include database instance
5. Add database initialization and migration instructions to README

Use environment variables for database URL and ensure the setup works with both development and production environments."
```

### Authentication Implementation Prompts

**Prompt 3: Better Auth Integration**
```
"Implement complete authentication using Better Auth with the following features:

1. Email/password authentication with secure password hashing
2. OAuth integration with Google and GitHub providers
3. Session management with secure cookies
4. Protected tRPC procedures that require authentication
5. User registration and login forms with proper validation
6. Auth middleware for protecting dashboard routes
7. User profile management pages

Update the auth.ts file to use Better Auth instead of the placeholder. Ensure all dashboard routes are protected and redirect to sign-in when unauthenticated."
```

**Prompt 4: User Session Management**
```
"Create comprehensive user session and profile management:

1. User context provider with session state
2. Profile settings page with avatar upload
3. Account deletion and data export functionality
4. Password reset via email
5. Two-factor authentication setup
6. Session timeout handling
7. Remember me functionality

Integrate with the existing tRPC setup and ensure proper TypeScript types throughout."
```

### AI Agent Features Prompts

**Prompt 5: Advanced Agent Configuration**
```
"Enhance the AI agent system with advanced configuration options:

1. Agent personality settings (tone, communication style, expertise level)
2. Voice configuration (pitch, speed, accent selection)
3. Custom knowledge base upload (PDF, text file ingestion)
4. Agent training conversation history and improvement
5. Pre-built agent templates (tutor, therapist, business coach, etc.)
6. Agent testing playground before deployment
7. Performance analytics (conversation quality scores)

Create intuitive UI forms with proper validation and file upload capabilities."
```

**Prompt 6: Agent Marketplace**
```
"Build an agent marketplace where users can share and discover agents:

1. Public agent directory with search and filtering
2. Agent rating and review system
3. Fork/clone agents functionality
4. Agent usage statistics and leaderboards
5. Premium agent monetization system
6. Agent categories and tagging system
7. Featured agents showcase

Include proper database schema updates and admin moderation tools."
```

### Video Calling Integration Prompts

**Prompt 7: Stream Video SDK Integration**
```
"Integrate Stream Video SDK for real-time video calling:

1. Set up Stream client configuration with API keys
2. Create video call components (CallScreen, ParticipantView, CallControls)
3. Implement meeting room creation and joining
4. Add call recording functionality
5. Screen sharing capabilities
6. Chat functionality during calls
7. Call quality monitoring and reconnection handling

Ensure proper error handling and responsive design for mobile devices. Include call history and recording playback features."
```

**Prompt 8: AI Voice Integration**
```
"Implement AI voice capabilities with OpenAI Realtime API:

1. Real-time speech-to-text for user input
2. Text-to-speech for AI agent responses
3. Voice activity detection and turn-taking
4. Multiple voice options and customization
5. Background noise suppression
6. Audio quality optimization
7. Fallback to text chat when audio fails

Integrate with the existing agent configuration system and ensure low-latency communication."
```

### Background Processing Prompts

**Prompt 9: Meeting Processing Pipeline**
```
"Create a background job system for post-meeting processing:

1. Automatic transcription generation using Whisper API
2. AI-powered meeting summaries and key insights
3. Action item extraction and follow-up reminders
4. Participant engagement analysis
5. Recording processing and storage
6. Email notification system for summaries
7. Integration with calendar systems for scheduling

Use a queue system like Inngest or Bull for job processing. Include progress tracking and error handling."
```

**Prompt 10: Analytics and Insights**
```
"Build comprehensive analytics dashboard:

1. User engagement metrics and usage patterns
2. Agent performance analytics and optimization suggestions  
3. Meeting quality metrics and improvement recommendations
4. Revenue tracking and subscription analytics
5. Platform health monitoring and error tracking
6. Custom report generation and data export
7. Real-time dashboard with charts and visualizations

Use libraries like Recharts or Chart.js for visualization. Include admin-level analytics and user-level insights."
```

### Payment and Subscription Prompts

**Prompt 11: Polar Integration for Payments**
```
"Implement subscription and payment system with Polar:

1. Multi-tier subscription plans (Free, Pro, Enterprise)
2. Usage-based billing for minutes or meetings
3. One-time payments for premium features
4. Webhook handling for subscription updates
5. Customer portal for billing management
6. Invoice generation and email delivery
7. Dunning management for failed payments

Include proper error handling, security measures, and compliance with payment regulations."
```

### Mobile and Responsive Design Prompts

**Prompt 12: Mobile Experience**
```
"Optimize the platform for mobile and tablet devices:

1. Responsive design improvements for all components
2. Mobile-specific navigation and UI patterns  
3. Touch-friendly controls and gestures
4. Progressive Web App (PWA) implementation
5. Mobile push notifications
6. Offline functionality for essential features
7. App store optimization preparation

Ensure video calls work seamlessly on mobile devices with proper camera and microphone handling."
```

### Advanced Features Prompts

**Prompt 13: Team Collaboration Features**
```
"Add team and organization management capabilities:

1. Team creation and member invitation system
2. Role-based access control (admin, member, viewer)
3. Shared agent libraries and meeting templates
4. Team usage analytics and billing aggregation
5. Workspace settings and branding customization
6. Bulk operations for agent and meeting management
7. Team activity feeds and notifications

Include proper database schema for multi-tenancy and team-based permissions."
```

**Prompt 14: API and Integration Platform**
```
"Create public API and integration capabilities:

1. REST API endpoints for external integrations
2. Webhook system for real-time event notifications
3. SDK development for popular languages (Python, JavaScript)
4. Zapier integration for workflow automation
5. Calendar integrations (Google, Outlook, Cal.com)
6. CRM integrations (Salesforce, HubSpot)
7. API documentation with interactive examples

Include proper rate limiting, authentication, and versioning for the public API."
```

## 🎯 Usage Guidelines

### For AI-Assisted Development

1. **Start Specific**: Use focused prompts for single features rather than multiple features at once
2. **Include Context**: Reference existing code structure and patterns when requesting changes
3. **Specify Testing**: Always ask for proper error handling and user experience considerations
4. **Database First**: When adding features, start with database schema changes, then API, then UI
5. **Type Safety**: Emphasize TypeScript types and tRPC integration in all prompts

### Development Workflow

1. **Feature Planning**: Break large features into smaller, testable components  
2. **Database Changes**: Always backup and test database migrations
3. **API Development**: Test tRPC procedures independently before UI integration
4. **UI Components**: Build reusable components following the existing Shadcn UI patterns
5. **Testing**: Include unit tests for critical business logic

## 📝 Contributing

This platform is designed to be extended through AI-assisted development. The structured prompts above provide a roadmap for building a complete SaaS platform.

### Current Status
✅ Project setup and configuration  
✅ Basic UI components and routing  
✅ tRPC API setup with mock data  
✅ Authentication placeholders  
🔄 Database integration (next priority)  
🔄 Video calling features  
🔄 AI agent interactions  

### Next Steps
1. Set up database with Drizzle ORM
2. Implement Better Auth authentication
3. Add Stream Video SDK integration
4. Build AI agent conversation system
5. Add payment processing with Polar

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Drizzle ORM](https://orm.drizzle.team/docs/overview)
- [Better Auth](https://www.better-auth.com/docs)
- [Stream Video SDK](https://getstream.io/video/docs/)

Built with ❤️ for AI-assisted development 