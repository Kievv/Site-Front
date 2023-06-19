import Link from 'next/link'

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/consultas">Consultas</Link>
      </li>
      <li>
        <Link href="/exames">Exames</Link>
      </li>
      <li>
        <Link href="/remedios">Remédios</Link>
      </li>
    </ul>
  )
}