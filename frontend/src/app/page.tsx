import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Job overview</h1>
        <p>Keep it up!</p>
        <div>
          <Link href="/add">Add new</Link>
          <Link href="/overview">Current overview</Link>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
