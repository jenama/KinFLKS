'use client';

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Nav() {
    const pathname = usePathname()
  return (
    <header className='flex justify-center bg-grey'>
          <nav className=''>
            <Link className='px-3' href="/">KINFLKS</Link>
            <Link className='px-3' href="/about">About</Link>
            <Link className={`link ${pathname === '/hair-care-101' ? 'active' : ''}`} href="/hair-care-101">Hair Care 101</Link>
            <Link className={`link ${pathname === '/ask-the-professional' ? 'active' : ''}`} href="/ask-the-professional">Ask The Professionals</Link>
            <Link className={`link ${pathname === '/sign-in' ? 'active' : ''}`} href="/sign-in">Sign in</Link>
          </nav>
        </header>
  )
}
