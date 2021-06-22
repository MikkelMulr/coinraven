import classes from '../../../styles/Nav.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className={classes.Nav}>
      <h1>CoinRaven</h1>

        <ul className={classes.NavLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About CoinRaven</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
        </ul>
    </nav>
  )
}
