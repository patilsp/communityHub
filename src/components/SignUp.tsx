import Image from 'next/image'
import UserAuthForm from '@/components/UserAuthForm'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
      <Image 
          src="/images/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="mx-auto h-8 w-8"

          />
        <h1 className='text-2xl font-semibold tracking-tight'>Sign Up</h1>
        <p className='text-sm max-w-xs mx-auto'>
          By continuing, you are setting up a CommunityHub account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>
      <div className='px-4 py-4'>
          <UserAuthForm />
      </div>
      <p className='px-8 text-center text-sm text-muted-foreground'>
        Already a CommunityHub?{' '}
        <Link
          href='/sign-in'
          className='hover:text-brand text-sm underline underline-offset-4 pr-4'>
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default SignUp
