'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <li>
          <Link href="/" className={`${pathname === "/" ? "text-red" : ""}`}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={`${pathname === "/about" ? "text-red" : ""}`}>About</Link>
        </li>
        <li>
          <Link href="/user/3" className={`${pathname === "/user/3" ? "text-red" : ""}`}>User 3</Link>
        </li>
      </ul>
    </main>
  )
}
