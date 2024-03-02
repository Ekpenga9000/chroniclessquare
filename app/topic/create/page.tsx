import TopicForm from '@components/TopicForm';
import React from 'react';
import { StoreProvider } from '@redux/StoreProvider';

const page = () => {
  return (
    <section className='bg-purple-700 flex justify-center'>
      <div className="container-custom bg-gray-100">
        <div className="flex justify-center h-screen">
          <StoreProvider>
            <TopicForm />
          </StoreProvider>
        </div>
      </div>
    </section>
  )
}

export default page