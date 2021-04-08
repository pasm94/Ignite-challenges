import styles from './header.module.scss';

export default function Header(): any {
  // TODO
  const headerText = '</>';
  return (
    <header className={styles.container}>
      <span>
        <strong>{headerText}</strong> spacetraveling<strong>.</strong>
      </span>
    </header>
  );
}
