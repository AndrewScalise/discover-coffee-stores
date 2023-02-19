import styles from "./page.module.css";
import Banner from "@/app/components/banner";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Banner buttonText="View Stores Nearby!" />
      </main>
    </div>
  );
}
