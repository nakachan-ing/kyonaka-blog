import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import HeaderLogo from '../../public/blog-logo.jpg';

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
          src={HeaderLogo}
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
