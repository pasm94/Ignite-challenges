import Link from 'next/link';
import styles from './header.module.scss';

export default function Header(): any {
  // TODO
  return (
    <header className={styles.container}>
      <span>
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="logo" />
          </a>
        </Link>
      </span>
    </header>
  );
}
