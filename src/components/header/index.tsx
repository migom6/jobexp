import Image from "next/image";
import { logout } from "lib/api";
import { SyntheticEvent } from "react";
import Router, { useRouter } from "next/router";
import Transparent from "components/common/buttons/Transparent";
import Link from "next/link";
const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  const handleClick = async (e: SyntheticEvent) => {
    try {
      await logout();
      window.location.href = "/login";
    } catch (err) {
      throw err;
    }
  };
  // @TODO more responsive header
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex w-full items-center justify-between bg-indigo-500/50 px-5 pb-2 pt-4 bg-blend-luminosity drop-shadow-md md:px-10 lg:px-32">
      <Link href="/">
        <Image
          className="cursor-pointer"
          width={60}
          height={60}
          src="/logo.svg"
          alt="logo"
        />
      </Link>
      <nav>
        <ul className="flex items-center justify-between gap-5">
          {pathname !== "/" && (
            <Link href="/">
              <li>
                <Transparent>Profile</Transparent>
              </li>
            </Link>
          )}
          {pathname === "/" && (
            <li>
              <Transparent onClick={handleClick}>Logout</Transparent>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
