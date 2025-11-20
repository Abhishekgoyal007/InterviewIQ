# InterviewIQ 🚀

> AI-Powered Interview Practice Platform - Master your interview skills in just 6 minutes

InterviewIQ is an intelligent interview practice platform that uses AI voice assistants to conduct realistic mock interviews. Get instant feedback on your technical and behavioral skills, and track your progress over time.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://your-vercel-url.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## ✨ Features

### 🎯 Core Features
- **AI Voice Interviews** - Practice with an intelligent AI interviewer using Vapi voice technology
- **6-Minute Sessions** - Quick, focused interview practice that fits your schedule
- **Real-time Feedback** - Get instant analysis of your performance after each interview
- **Dual Scoring System** - Receive separate scores for technical and behavioral skills
- **Interview History** - Track all your past interviews with detailed feedback

### 📊 Feedback & Analytics
- Overall performance score
- Behavioral communication score
- Technical knowledge score
- Strengths and areas for improvement
- Actionable suggestions for growth
- Recommended learning resources with links

### 👤 User Features
- Profile management with resume upload
- Editable interview titles
- Delete interviews from history
- Secure authentication with Firebase

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling with dark mode
- **Lucide React** - Modern icon library

### Backend & Services
- **Firebase Admin SDK** - Authentication and Firestore database
- **Firebase Storage** - Resume file storage
- **Vapi AI** - Voice AI for conducting interviews
- **Google Gemini 2.0** - AI for generating questions and feedback
- **11Labs** - Voice synthesis (Josh voice model)
- **Deepgram** - Speech-to-text transcription

### Deployment
- **Vercel** - Production hosting
- **GitHub** - Version control

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js 18+ installed
- A Firebase project with Firestore and Storage enabled
- Vapi AI account with API keys
- Google Gemini API key
- 11Labs account (optional, for custom voices)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Abhishekgoyal007/InterviewIQ.git
cd InterviewIQ
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Firebase Admin
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_PRIVATE_KEY="your-private-key"
FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com

# Vapi AI
VAPI_PRIVATE_KEY=your-vapi-private-key
NEXT_PUBLIC_VAPI_WEB_TOKEN=your-vapi-web-token

# Google Gemini AI
GOOGLE_GENERATIVE_AI_API_KEY=your-gemini-api-key
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
aiinterview/
├── app/
│   ├── (auth)/              # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (root)/              # Main application routes
│   │   ├── interview/       # Interview pages
│   │   │   └── [id]/
│   │   │       ├── page.tsx
│   │   │       └── feedback/
│   │   ├── profile/         # User profile
│   │   └── page.tsx         # Landing page
│   ├── api/                 # API routes
│   │   ├── vapi/           # Vapi endpoints
│   │   │   ├── create-assistant/
│   │   │   ├── feedback/
│   │   │   └── generate/
│   │   └── interviews/     # Interview CRUD
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/             # React components
│   ├── Agent.tsx          # Interview voice interface
│   ├── FeedbackCard.tsx   # Interview history card
│   ├── FeedbackDisplay.tsx # Feedback results page
│   ├── ProfileForm.tsx    # User profile form
│   ├── Header.tsx         # Navigation header
│   └── ui/               # Reusable UI components
├── hooks/
│   └── useVapi.ts        # Vapi SDK hook
├── lib/
│   ├── actions/          # Server actions
│   │   ├── auth.actions.ts
│   │   ├── interview.actions.ts
│   │   └── profile.actions.ts
│   └── utils.ts          # Utility functions
├── firebase/
│   └── admin.ts          # Firebase Admin config
└── types/
    ├── index.d.ts        # Global types
    └── vapi.d.ts         # Vapi types
```

## 🔑 Key Features Explained

### Interview Flow
1. User clicks "Start Practice Interview"
2. System generates 5 interview questions using Gemini AI
3. Interview is saved to Firestore with user ID
4. Vapi AI assistant is created with the workflow
5. User conducts 6-minute voice interview
6. Call ends automatically after 6 minutes
7. Interview transcript is analyzed by Gemini AI
8. Feedback with scores is generated and saved
9. User is redirected to feedback page

### Feedback System
- **Behavioral Score**: Communication clarity, confidence, problem-solving approach
- **Technical Score**: Answer accuracy, knowledge depth, technical terminology
- **Overall Score**: Average of behavioral and technical scores
- Includes strengths, weaknesses, suggestions, and learning resources

## 🔧 Configuration

### Vapi Workflow
The project uses a Vapi workflow ID: `1cb3698d-b3a0-40d7-8d82-3042a777461c`

Configure your workflow in the Vapi dashboard with:
- Model: GPT-4o (temperature 0.8)
- Voice: 11Labs Josh (voiceId: `21m00Tcm4TlvDq8ikWAM`)
- Transcriber: Deepgram nova-2

### Firebase Security Rules
Ensure your Firestore rules allow authenticated users to read/write their own data:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    match /interviews/{interviewId} {
      allow read, write: if request.auth.uid == resource.data.userid;
    }
  }
}
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add all environment variables
4. Deploy

Make sure to add these environment variables in Vercel:
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `FIREBASE_STORAGE_BUCKET`
- `VAPI_PRIVATE_KEY`
- `NEXT_PUBLIC_VAPI_WEB_TOKEN`
- `GOOGLE_GENERATIVE_AI_API_KEY`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abhishek Goyal**
- GitHub: [@Abhishekgoyal007](https://github.com/Abhishekgoyal007)

## 🙏 Acknowledgments

- [Vapi AI](https://vapi.ai) for voice AI technology
- [Google Gemini](https://ai.google.dev) for AI-powered content generation
- [11Labs](https://11labs.io) for voice synthesis
- [Firebase](https://firebase.google.com) for backend services
- [Vercel](https://vercel.com) for hosting

## 📧 Support

For support, email your-email@example.com or open an issue in the GitHub repository.

---

Made with ❤️ by Abhishek Goyal