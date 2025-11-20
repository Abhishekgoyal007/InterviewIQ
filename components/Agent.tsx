"use client";

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useVapi } from '@/hooks/useVapi';

const Agent = ({ userName, assistantId, workflowId }: AgentProps & { assistantId?: string; workflowId?: string }) => {
    const { callStatus, isSpeaking, messages, elapsedTime, start, stop } = useVapi();
    
    const lastMessage = messages.length > 0 ? messages[messages.length - 1]?.content : null;
    
    // Format time as MM:SS
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    
    const INTERVIEW_DURATION = 6 * 60; // 6 minutes
    const remainingTime = Math.max(0, INTERVIEW_DURATION - elapsedTime);
    
    const handleStart = async () => {
        if (workflowId) {
            // Create assistant with workflow via API, then start
            try {
                const response = await fetch('/api/vapi/create-assistant', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ workflowId })
                });
                
                const data = await response.json();
                if (data.success && data.assistantId) {
                    start(data.assistantId);
                } else {
                    console.error('Failed to create assistant:', data.error);
                }
            } catch (error) {
                console.error('Error creating assistant:', error);
            }
        } else if (assistantId) {
            // Start with assistant ID
            start(assistantId);
        } else {
            console.error('No assistant ID or workflow ID provided');
        }
    };

  return (
    <>
        <div className='call-view'>
            <div className='card-interviewer'>
                <div className='avatar'>
                    <Image src="/ai-avatar.png" alt='vapi' width={65} height={65} className='object-cover'/>
                    {isSpeaking && <span className='animate-speak' />}
                </div>
                <h3>AI Interviewer</h3>
            </div>
            <div className='card-border'>
                <div className='card-content'>
                    <Image src='/user-avatar.png' alt='user' width={540} height={540} className='rounded-full object-cover size-[120px]'/>
                    <h3>{userName}</h3>
                </div>
            </div>
        </div>
        {messages.length > 0 && (
            <div className='transcript-border mt-5'>
                <div className='transcript'>
                    <p key={lastMessage} className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>
                        {lastMessage}
                    </p>
                </div>
            </div>
        )} 

        <div className='w-full flex justify-center'>
            {callStatus !== 'active' ? (
                <button 
                    className='relative mt-10 btn-call'
                    onClick={handleStart}
                    disabled={callStatus === 'loading'}
                >
                    <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus !== 'loading' && 'hidden')} />
                    <span>
                        {callStatus === 'inactive' || callStatus === 'ended' ? 'Start Interview' : 'Connecting...'}
                    </span>
                </button>
            ):(
                <div className="flex items-center mt-5">
                <button
                    onClick={stop}
                    className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium shadow-sm"
                >
                    End Interview
                </button>
                <div className="ml-4 flex items-center text-gray-700 text-lg font-semibold">
                    {formatTime(remainingTime)}
                </div>
                </div>
            )}
        </div>
    </>
  )
}

export default Agent