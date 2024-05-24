import Link from 'next/link';
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        © 2024 Neighbortool. Alle Rechte vorbehalten.
      </div>
      <div className={styles.links}>
        <Link href="/impressum" className="mr-4">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </div>
    </div>
  );
};

export default Footer;
