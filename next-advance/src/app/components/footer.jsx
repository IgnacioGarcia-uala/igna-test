import Link from 'next/link'

export default function Footer() {
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