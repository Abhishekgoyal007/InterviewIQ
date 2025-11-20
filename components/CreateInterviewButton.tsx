"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export default function CreateInterviewButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCreateInterview = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/vapi/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Technical',
          role: 'Full Stack Developer',
          level: 'Mid-level',
          techstack: 'React, Node.js, TypeScript',
          amount: 5
        })
      });

      const data = await response.json();
      
      if (data.success && data.interviewId) {
        router.push(`/interview/${data.interviewId}`);
      } else {
        alert('Failed to create interview: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error creating interview:', error);
      alert('Failed to create interview');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleCreateInterview}
      disabled={loading}
      className='btn-primary text-lg px-8 py-6'
    >
      {loading ? 'Creating Interview...' : 'Start Practice Interview'}
    </Button>
  );
}
