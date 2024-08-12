import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-gray-800 mt-10'>
      <nav>
        <ul className='flex justify-center items-center space-x-4'>
          <li><Link href="/list" className='text-white'>List</Link></li>
          <li><Link href="/pokemon" className='text-white'>Pokemon</Link></li>
          <li><Link href="/contact" className='text-white'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}