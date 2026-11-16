'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/admin' },
  { name: 'List', href: '/admin/list' },
  { name: 'Blog', href: '/admin/blog' },
  { name: 'Products(React)', href: '/admin/products?category=react&sort=name' },
  { name: 'Products(Backend)', href: '/admin/products?category=backend&sort=asc' },
  { name: 'Card', href: '/admin/card' },
];


export default function Navbar() {
  const pathname = "";//usePathname();

  return (
    <nav className="flex items-center gap-6" style={{background:"#f5f5f5", padding:10}}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link style={{padding:10}}
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors ${
              isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-black'
            }`}
          >
             {link.name} 
          </Link> 
        );
      })}
    </nav>
  );
}