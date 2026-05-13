'use client';

// NEXT
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// PROPS
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

// ACTIVE & HOOVER
export default function NavLink(props: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === props.href || pathname.startsWith(props.href + '/');

  return (
    <Link
      href={props.href}
      className={`px-3 py-1 text-sm ${
        isActive ? 'font-semibold underline' : 'hover:underline'
      }`}
    >
      {props.children}
    </Link>
  );
}
