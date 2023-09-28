import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        {/* <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        /> */}
        <Image
          src="https://s4.aconvert.com/convert/p3r68-cdx67/aauh1-ezfrd.svg"
          alt="Kyonaka Blog"
          className={styles.logo}
          width={500}
          height={500}
          priority
        />
      </Link>
    </header>
  );
}
