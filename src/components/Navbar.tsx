import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import Image from 'next/image'
import { UserAccountNav } from './UserAccountNav'
import SearchBar from './SearchBar'
import { Bell} from 'lucide-react'


const Navbar = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className='navbar fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
      <div className='px-2  max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
    
        <Link href='/' className='flex gap-2 items-center'>
        <Image 
						src="/images/logo.png"
						alt="logo"
						width={40}
						height={40}
						className="mx-auto h-auto w-auto object-contain"
						/>
          <p className='hidden text-zinc-700 text-sm font-medium md:block'>CommunityHub</p>
        </Link>
       <SearchBar />
       <div className='flex gap-2 items-center'>
        <Bell size={24} className="text-black" />
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link href='/sign-in' className="btn-primary">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
