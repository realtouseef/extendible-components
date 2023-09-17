import { Button, buttonVariants } from './components/button';
import { Heading } from './components/heading';

const Testing = () => {
  return (
    <>
      <div>
        <h1>Primary</h1>
        <div className=' space-x-10'>
          <Button size='sm'>checkout</Button>
          <Button>checkout</Button>
          <Button size='lg'>checkout</Button>
        </div>
      </div>
      <div>
        <h4>Secondary</h4>
        <div className=' space-x-10'>
          <Button variant='secondary' size='sm'>
            checkout
          </Button>
          <Button variant='secondary'>checkout</Button>
          <Button variant='secondary' size='lg'>
            checkout
          </Button>
        </div>
      </div>
      <div>
        <h4>Outline</h4>
        <div className=' space-x-10'>
          <Button variant='outline' size='sm'>
            checkout
          </Button>
          <Button variant='outline'>checkout</Button>
          <Button variant='outline' size='lg'>
            checkout
          </Button>
        </div>
      </div>
      <div>
        <h4>Ghost</h4>
        <div className=' space-x-10'>
          <Button variant='ghost' size='sm'>
            checkout
          </Button>
          <Button variant='ghost'>checkout</Button>
          <Button variant='ghost' size='lg'>
            checkout
          </Button>
        </div>
      </div>
      <div>
        <h4>Link</h4>
        <a
          href='http://google.com'
          target='_blank'
          className={buttonVariants({
            variant: 'ghost',
            size: 'sm',
            className: 'underline',
          })}
        >
          google.com
        </a>
      </div>

      <div className='space-y-3'>
        <Heading>The quick brown fox</Heading>
        <Heading type='h2' size='h2'>
          The quick brown fox
        </Heading>
        <Heading type='h3' size='h3'>
          The quick brown fox
        </Heading>
        <Heading type='h4' size='h4'>
          The quick brown fox
        </Heading>
        <Heading type='h5' size='h5'>
          The quick brown fox
        </Heading>
        <Heading type='h6' size='h6'>
          The quick brown fox
        </Heading>
      </div>
    </>
  );
};

export default Testing;
