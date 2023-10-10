
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import Image from 'next/image'
import { UserAccountNav } from './UserAccountNav'
import SearchBar from './SearchBar'
import { Bell } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from '@/components/ui/DropdownMenu'

import { Button } from '@/components/ui/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'



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
          <p className='hidden text-zinc-900 text-sm font-bold md:block text-shadow'>CommunityHub</p>

        </Link>
       <SearchBar />
       <div className='flex gap-2 items-center'>
         
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button variant="ghost" className="border p-1 rounded-md border-input bg-transparent shadow-sm hover:bg-accent hover:text-slate-900 mr-1 ">                
                  <Bell size={24}  />
                </button>
              </DropdownMenuTrigger>      
              <DropdownMenuContent className="w-100 p-4" align="end" forceMount>
              <Card className="border-none">
                <CardHeader className="pb-3">
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>
                    Choose what you want to be notified about.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-1">
                  <div className="-mx-2 flex items-center space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                    <Bell className="mt-px h-5 w-5" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium ">Everything</p>
                      <p className="text-sm text-muted-foreground">
                        Email digest, mentions & all activity.
                      </p>
                    </div>
                  </div>
                  <div className="-mx-2 flex items-center space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
                    <Bell className="mt-px h-5 w-5" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium ">Available</p>
                      <p className="text-sm text-muted-foreground">
                        Only mentions and comments.
                      </p>
                    </div>
                  </div>
                  <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                    <Bell className="mt-px h-5 w-5" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium ">Ignoring</p>
                      <p className="text-sm text-muted-foreground">
                        Turn off all notifications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DropdownMenuContent>
          </DropdownMenu>
      
            
          </div>

          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link href='/sign-in' className="btn-primary w-[100px]">
              Sign In
            </Link>
          )}
           <div>
            {/* <button className="btn-pro hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                    <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                </svg>
                Unlock Pro
            </button> */}

            </div>
        </div>
       
      </div>
    </div>
  )
}

export default Navbar
