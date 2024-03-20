import Link from 'next/link'

export default async function Navbar() {
   return <ul>
        <li>
            <Link href="/" >Home</Link>
        </li>
        <li>
            <Link href="/about" >About</Link>
        </li>
        <li>
            <Link href="/poke" >Pokemons</Link>
        </li>
    </ul>
}