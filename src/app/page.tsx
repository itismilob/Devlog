'use client';

import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      <main className='flex flex-col flex-1 items-center justify-center '>
        <Button label='Click me' onClick={() => console.log('Button clicked!')}>
          <textarea>Additional content inside the button</textarea>
        </Button>
      </main>
    </>
  );
}
