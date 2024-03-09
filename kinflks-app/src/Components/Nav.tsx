'use client'
 import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Nav () {
    const pathname = usePathname()
    return (
        <div className='flex justify-center bg-grey'>
            <nav className=''>
                <ul className=''>
                    <li className='list-none'>
                        <Link className='px-3' href="/">KINFLKS</Link>
                    </li>
                    <li>
                        <Link className='px-3' href="/about">About</Link>
                    </li>
                    <li>
                        <Link className={`link ${pathname === '/hair-care-101' ? 'active' : ''}`} href="/hair-care-101">Hair Care 101</Link>
                    </li>
                    <li>
                        <Link className={`link ${pathname === '/ask-the-professional' ? 'active' : ''}`} href="/ask-the-professional">Ask The Professionals</Link>
                    </li>
                    <li>
                        <Link className={`link ${pathname === '/sign-in' ? 'active' : ''}`} href="/sign-in">Sign in</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}