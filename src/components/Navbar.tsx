import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import Image from 'next/image'
import { UserAccountNav } from './UserAccountNav'
import SearchBar from './SearchBar'

const Navbar = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
    
        <Link href='/' className='flex gap-2 items-center'>
        <Image 
						src="/images/logo.png"
						alt="logo"
						width={50}
						height={50}
						className="mx-auto h-8 w-8"

						/>
          <p className='hidden text-zinc-700 text-sm font-medium md:block'>CommunityHub</p>
        </Link>
       <SearchBar />
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href='/sign-in' className="btn-primary">
            Sign In
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
