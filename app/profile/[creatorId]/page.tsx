import Profile from '@app/components/Profile'
import React from 'react'

const page = () => {
  return (
      <section className='flex justify-center'>
          <div className='container-custom flex flex-col md:flex-row bg-gray-900'>
              <div>
                  <Profile />
              </div>
              <div>
                  Personal feed
              </div>
          </div>
    </section>
  )
}

export default page