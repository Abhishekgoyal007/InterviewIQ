import Agent from '@/components/Agent'
import React from 'react'

const page = () => {
  return (
    <>
        <h3 className='mt-10 mb-10'>Interview Generation</h3>
        <Agent userName="John Doe" userId="123" type="generate" />
    </>
  )
}

export default page