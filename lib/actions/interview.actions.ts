'use server';

import { getCurrentUser } from './auth.actions';

export async function createInterview() {
  const user = await getCurrentUser();
  
  if (!user) {
    return { success: false, message: 'Please sign in to create an interview' };
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/vapi/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'Technical',
        role: 'Full Stack Developer',
        level: 'Mid-level',
        techstack: 'React, Node.js, TypeScript',
        amount: 5,
        userid: user.id
      })
    });

    const data = await response.json();
    
    if (data.success && data.interviewId) {
      return { success: true, interviewId: data.interviewId };
    } else {
      return { success: false, message: data.message || 'Failed to create interview' };
    }
  } catch (error) {
    console.error('Error creating interview:', error);
    return { success: false, message: 'Failed to create interview' };
  }
}
