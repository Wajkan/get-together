import NavLink from './NavLink';

export default function Navbar() {
  return (
    <nav className="border-2 border-black flex items-center gap-2 px-4 py-2">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/unnamedone">UnnamedOne</NavLink>
      <NavLink href="/unnamedtwo">UnnamedTwo</NavLink>
      <NavLink href="/unnamedthree">UnnamedThree</NavLink>
      <NavLink href="/unnamedfour">UnnamedFour</NavLink>
    </nav>
  );
}
