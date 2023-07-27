import Link from "next/link";
import classses from "../../styles/mai-header.module.css";

const MainHeader = () => {
  return (
    <>
      <header className={classses.header}>
        <div className={classses.logo}>
          <Link href="/">NextEvents</Link>
        </div>
        <nav className={classses.logo}>
          <ul>
            <li>
              <Link href="/events">Browse All Events</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
