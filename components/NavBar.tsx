import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <span>KOWOONI'S SHOP</span>
        </div>
        <div className="navMenu">
          <Link href="/" legacyBehavior>
            <a className={router.pathname === "/" ? "active" : ""}>Main</a>
          </Link>
          <Link href="/best" legacyBehavior>
            <a className={router.pathname === "/about" ? "active" : ""}>Best</a>
          </Link>
          <Link href="/cosmetic" legacyBehavior>
            <a className={router.pathname === "/about" ? "active" : ""}>
              Cosmetic
            </a>
          </Link>
        </div>
        <div className="searchMenu">
          <AiOutlineShopping />
          <AiOutlineSearch />
          <span>LOGOUT</span>
        </div>
      </div>

      <style jsx>{`
        nav {
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        .container {
          display: flex;
          justify-content: space-between;
          padding: 15px;
        }
        .logo {
          font-size: 25px;
          font-weight: bold;
        }
        nav a {
          font-weight: 600;
          font-size: 20px;
        }
        .active {
          color: #4797d8;
        }
        nav div {
          display: flex;
          gap: 20px;
        }
        .searchMenu {
          font-weight: 600;
          font-size: 20px;
        }
        .searchMenu svg {
          width: 20px;
          height: 20px;
        }
      `}</style>
    </nav>
  );
}
