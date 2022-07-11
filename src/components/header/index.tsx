import Image from "next/image";
import { logout } from "lib/api";
import { SyntheticEvent } from "react";
import Router, { useRouter } from "next/router";
import Transparent from "components/common/buttons/Transparent";
import Link from "next/link";
import Primary from "components/common/buttons/Primary";
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
        <a>
          <Image
            style={{ width: 50, height: 50 }}
            className="cursor-pointer"
            width={50}
            height={50}
            src="/logo.svg"
            alt="logo"
          />
        </a>
      </Link>
      <nav>
        <ul className="flex items-center justify-between gap-5">
          <Link href="/discover">
            <li>
              <Transparent>Discover</Transparent>
            </li>
          </Link>
          {pathname !== "/" && (
            <Link href="/">
              <li>
                <Primary>Profile</Primary>
              </li>
            </Link>
          )}
          {pathname === "/" && (
            <li>
              <Primary onClick={handleClick}>Logout</Primary>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
