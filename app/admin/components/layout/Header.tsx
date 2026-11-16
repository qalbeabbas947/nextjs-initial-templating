import Link from 'next/link';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight">
          BrandLogo
        </Link>
        <Navbar />
      </div>
    </header>
  );
}