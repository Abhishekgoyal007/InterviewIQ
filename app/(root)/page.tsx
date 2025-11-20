import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getCurrentUser } from '@/lib/actions/auth.actions'

const page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      {/* Hero Section */}
      <section className='card-cta mt-12'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h1 className='text-4xl font-bold'>
            Master Your Interview Skills with AI
          </h1>
          <p className='text-lg text-light-100'>
            Practice real interview scenarios with our AI-powered interviewer. Get instant feedback on technical skills, behavioral responses, and communication.
          </p>
          <div className='flex gap-4 max-sm:flex-col'>
            <Button asChild className='btn-primary'>
              <Link href="/interview">
                {user ? 'Start Practice Interview' : 'Try Free Interview'}
              </Link>
            </Button>
            {!user && (
              <Button asChild className='btn-secondary'>
                <Link href="/sign-up">
                  Sign Up Free
                </Link>
              </Button>
            )}
          </div>
        </div>
        <Image src="/robot.png" alt="AI Interview Assistant" width={400} height={400} className='max-sm:hidden'/>
      </section>

      {/* Features Section */}
      <section className='mt-20'>
        <h2 className='text-center mb-12'>Why Choose InterviewIQ?</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='card p-6 text-center'>
            <div className='w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Image src="/star.svg" alt="AI Powered" width={32} height={32} />
            </div>
            <h3 className='text-xl font-semibold mb-3'>AI-Powered Interviews</h3>
            <p className='text-light-100'>
              Practice with an intelligent AI that adapts to your responses and asks relevant follow-up questions.
            </p>
          </div>

          <div className='card p-6 text-center'>
            <div className='w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Image src="/calendar.svg" alt="Instant Feedback" width={32} height={32} />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Instant Feedback</h3>
            <p className='text-light-100'>
              Receive detailed scores on technical and behavioral aspects with actionable improvement suggestions.
            </p>
          </div>

          <div className='card p-6 text-center'>
            <div className='w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Image src="/tech.svg" alt="Any Tech Stack" width={32} height={32} />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Any Tech Stack</h3>
            <p className='text-light-100'>
              Practice for roles across any technology - React, Python, Java, or custom requirements.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='mt-20'>
        <h2 className='text-center mb-12'>How It Works</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          <div className='text-center'>
            <div className='w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 text-dark-100 font-bold text-xl'>
              1
            </div>
            <h4 className='font-semibold mb-2'>Choose Your Role</h4>
            <p className='text-sm text-light-100'>Select the position and tech stack you&apos;re preparing for</p>
          </div>
          
          <div className='text-center'>
            <div className='w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 text-dark-100 font-bold text-xl'>
              2
            </div>
            <h4 className='font-semibold mb-2'>Set Preferences</h4>
            <p className='text-sm text-light-100'>Choose between technical, behavioral, or mixed interview types</p>
          </div>
          
          <div className='text-center'>
            <div className='w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 text-dark-100 font-bold text-xl'>
              3
            </div>
            <h4 className='font-semibold mb-2'>Start Interview</h4>
            <p className='text-sm text-light-100'>Engage in a 6-minute voice conversation with AI</p>
          </div>
          
          <div className='text-center'>
            <div className='w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 text-dark-100 font-bold text-xl'>
              4
            </div>
            <h4 className='font-semibold mb-2'>Get Feedback</h4>
            <p className='text-sm text-light-100'>Review detailed scores and improvement recommendations</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='mt-20 card p-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <div>
            <h2 className='text-4xl font-bold text-primary-200'>10K+</h2>
            <p className='text-light-100 mt-2'>Practice Interviews</p>
          </div>
          <div>
            <h2 className='text-4xl font-bold text-primary-200'>95%</h2>
            <p className='text-light-100 mt-2'>User Satisfaction</p>
          </div>
          <div>
            <h2 className='text-4xl font-bold text-primary-200'>6 min</h2>
            <p className='text-light-100 mt-2'>Average Session</p>
          </div>
        </div>
      </section>

      {user && (
        <>
          <section className='flex flex-col gap-6 mt-20'>
            <h2>Your Recent Interviews</h2>
            <div className='interviews-section'>
              {dummyInterviews.slice(0, 3).map((interview)=>(
                <InterviewCard {...interview} key={interview.id}/>
              ))}
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <section className='mt-20 text-center card p-12'>
        <h2 className='mb-4'>Ready to Ace Your Next Interview?</h2>
        <p className='text-light-100 mb-8 max-w-2xl mx-auto'>
          Join thousands of candidates who have improved their interview skills with InterviewIQ. Start practicing today!
        </p>
        <Button asChild className='btn-primary'>
          <Link href="/interview">
            Start Your First Interview
          </Link>
        </Button>
      </section>
    </>
  )
}

export default page