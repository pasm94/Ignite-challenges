import Link from 'next/link';
import styles from './header.module.scss';

export default function Header({ marginLeft }): any {
  // TODO
  return (
    <header className={styles.container}>
      <span style={{ marginLeft: `${marginLeft}px` }}>
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="logo" />
          </a>
        </Link>
      </span>
    </header>
  );
}
